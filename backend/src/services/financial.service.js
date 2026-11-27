const xlsx = require("xlsx");
const {
  financialAnalysisRepository,
  financialPeriodRepository,
  businessProfileRepository,
  analysisConfigRepository,
} = require("../repositories");

/**
 * Service untuk logika bisnis Laporan Keuangan & Deteksi Risiko Usaha (SAK EMKM)
 */
const financialService = {
  /**
   * Mengambil atau membuat konfigurasi aktif modul FINANCIAL
   */
  async getActiveFinancialConfig() {
    let config = await analysisConfigRepository.findActiveByModule("FINANCIAL");
    if (!config) {
      const existing = await analysisConfigRepository.findManyByModule("FINANCIAL");
      if (existing && existing.length > 0) {
        config = await analysisConfigRepository.activateConfig(existing[0].id, "FINANCIAL");
      } else {
        config = await analysisConfigRepository.create({
          module: "FINANCIAL",
          versionNumber: 1,
          isActive: true,
          parameters: {
            benchmarks: {
              crMinHealthy: 1.5,
              qrMinHealthy: 1.0,
              npmMinHealthy: 10.0,
              gpmMinHealthy: 25.0,
              darMaxHealthy: 50.0,
              derMaxHealthy: 100.0,
            },
            thresholds: {
              healthyMax: 33.9,
              warningMax: 66.9,
            },
          },
          note: "Konfigurasi bawaan sistem untuk Deteksi Risiko Keuangan SAK EMKM",
        });
      }
    }
    return config;
  },

  /**
   * Membaca dan memvalidasi berkas Excel (.xlsx) dari memory buffer
   * @param {Buffer} buffer
   */
  parseExcelBuffer(buffer) {
    if (!buffer || buffer.length === 0) {
      const error = new Error("Berkas Excel tidak valid atau kosong.");
      error.status = 400;
      error.code = "FILE_EMPTY";
      throw error;
    }

    const workbook = xlsx.read(buffer, { type: "buffer", cellDates: true });
    const sheetName = workbook.SheetNames[0];
    if (!sheetName) {
      const error = new Error("Berkas Excel tidak memiliki sheet data.");
      error.status = 400;
      error.code = "INVALID_SHEET";
      throw error;
    }

    const worksheet = workbook.Sheets[sheetName];
    const rawRows = xlsx.utils.sheet_to_json(worksheet, { defval: null });

    if (!rawRows || rawRows.length === 0) {
      const error = new Error("Sheet Excel tidak memuat baris data yang dapat diproses.");
      error.status = 400;
      error.code = "NO_DATA_ROWS";
      throw error;
    }

    // Helper normalisasi nama kolom
    const normalizeKey = (key) =>
      String(key)
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    const parsedPeriods = [];

    for (let i = 0; i < rawRows.length; i++) {
      const row = rawRows[i];
      const normalizedRow = {};
      for (const [k, v] of Object.entries(row)) {
        normalizedRow[normalizeKey(k)] = v;
      }

      // 1. Periode Tanggal
      let periodVal =
        normalizedRow.periodstart ||
        normalizedRow.periode ||
        normalizedRow.period ||
        normalizedRow.bulan ||
        normalizedRow.tanggal ||
        normalizedRow.date;

      let periodStart = null;
      if (periodVal instanceof Date && !isNaN(periodVal.getTime())) {
        periodStart = periodVal;
      } else if (typeof periodVal === "string") {
        const parsed = new Date(periodVal);
        if (!isNaN(parsed.getTime())) periodStart = parsed;
      } else if (typeof periodVal === "number") {
        // Excel date serial number
        const excelEpoch = new Date(Date.UTC(1899, 11, 30));
        periodStart = new Date(excelEpoch.getTime() + periodVal * 86400000);
      }

      if (!periodStart) {
        // Fallback urutan bulan
        periodStart = new Date(2026, i, 1);
      }

      // Ekstrak 10 Kolom Angka Keuangan SAK EMKM
      const getNum = (keys, fallback = 0) => {
        for (const k of keys) {
          if (normalizedRow[k] !== undefined && normalizedRow[k] !== null && normalizedRow[k] !== "") {
            const num = parseFloat(String(normalizedRow[k]).replace(/[^0-9.-]/g, ""));
            if (!isNaN(num)) return num;
          }
        }
        return fallback;
      };

      const revenue = getNum(["revenue", "pendapatan", "omzet", "penjualan", "sales"], 0);
      const cogs = getNum(["cogs", "hpp", "hargapokokpenjualan", "bebanpokok", "bebanpokokpendapatan"], 0);
      const operatingExpense = getNum(["operatingexpense", "bebanoperasional", "biayaoperasional", "opex"], 0);
      const netIncome = getNum(["netincome", "lababersih", "laba", "netprofit", "profit"], revenue - cogs - operatingExpense);
      const currentAssets = getNum(["currentassets", "asetlancar", "aktivalancar"], 0);
      const inventory = getNum(["inventory", "persediaan", "stok", "stock"], 0);
      const totalAssets = getNum(["totalassets", "totalaset", "totalaktiva"], currentAssets);
      const currentLiabilities = getNum(["currentliabilities", "liabilitaslancar", "utanglancar", "kewajibanlancar"], 0);
      const totalLiabilities = getNum(["totalliabilities", "totalliabilitas", "totalutang", "totalkewajiban"], currentLiabilities);
      const equity = getNum(["equity", "ekuitas", "modal"], totalAssets - totalLiabilities);

      parsedPeriods.push({
        periodStart: periodStart.toISOString().slice(0, 10),
        revenue,
        cogs,
        operatingExpense,
        netIncome,
        currentAssets,
        inventory,
        totalAssets,
        currentLiabilities,
        totalLiabilities,
        equity,
      });
    }

    // Urutkan kronologis berdasarkan periodStart
    parsedPeriods.sort((a, b) => new Date(a.periodStart).getTime() - new Date(b.periodStart).getTime());

    return parsedPeriods;
  },

  /**
   * Menjalankan evaluasi risiko kegagalan usaha (Rule-Based Scoring SAK EMKM)
   * @param {string} userId
   * @param {Object} options
   * @param {Array<Object>} options.periods
   * @param {string} [options.fileName="laporan_keuangan.xlsx"]
   */
  async evaluateRisk(userId, { periods, fileName = "laporan_keuangan.xlsx" }) {
    if (!periods || periods.length === 0) {
      const error = new Error("Data periode keuangan kosong. Minimal 1 periode diperlukan untuk analisis.");
      error.status = 400;
      error.code = "PERIODS_REQUIRED";
      throw error;
    }

    // 1. Pastikan pengguna memiliki profil usaha
    const profile = await businessProfileRepository.findByUserId(userId);
    if (!profile) {
      const error = new Error("Harap lengkapi profil usaha terlebih dahulu sebelum melakukan analisis keuangan.");
      error.status = 400;
      error.code = "PROFILE_REQUIRED";
      throw error;
    }

    // 2. Ambil konfigurasi aktif
    const config = await this.getActiveFinancialConfig();
    const params = config.parameters || {};
    const benchmarks = params.benchmarks || {
      crMinHealthy: 1.5,
      qrMinHealthy: 1.0,
      npmMinHealthy: 10.0,
      gpmMinHealthy: 25.0,
      darMaxHealthy: 50.0,
      derMaxHealthy: 100.0,
    };

    // 3. Hitung Agregasi Rasio Periode Terakhir / Rata-rata
    const latest = periods[periods.length - 1];

    const cr = latest.currentLiabilities > 0 ? latest.currentAssets / latest.currentLiabilities : 2.5;
    const qr = latest.currentLiabilities > 0 ? (latest.currentAssets - latest.inventory) / latest.currentLiabilities : 2.0;
    const npm = latest.revenue > 0 ? (latest.netIncome / latest.revenue) * 100 : 0;
    const gpm = latest.revenue > 0 ? ((latest.revenue - latest.cogs) / latest.revenue) * 100 : 0;
    const dar = latest.totalAssets > 0 ? (latest.totalLiabilities / latest.totalAssets) * 100 : 0;
    const der = latest.equity > 0 ? (latest.totalLiabilities / latest.equity) * 100 : 0;

    const ratios = {
      currentRatio: parseFloat(cr.toFixed(2)),
      quickRatio: parseFloat(qr.toFixed(2)),
      netProfitMargin: parseFloat(npm.toFixed(2)),
      grossProfitMargin: parseFloat(gpm.toFixed(2)),
      debtToAssetRatio: parseFloat(dar.toFixed(2)),
      debtToEquityRatio: parseFloat(der.toFixed(2)),
    };

    // 4. Evaluasi 6 Aturan Rasio Keuangan (Skor Penalti Risiko: 0 - 60)
    let riskPoints = 0;
    const ruleResults = {};

    // R1: Current Ratio
    if (cr < 1.0) {
      riskPoints += 15;
      ruleResults.currentRatio = { status: "KRITIS", message: "Aset lancar tidak cukup menutupi utang jangka pendek (CR < 1.0)." };
    } else if (cr < benchmarks.crMinHealthy) {
      riskPoints += 8;
      ruleResults.currentRatio = { status: "WASPADA", message: "Likuiditas ketat di bawah batas aman 1.5x." };
    } else {
      ruleResults.currentRatio = { status: "SEHAT", message: "Likuiditas lancar dan aman." };
    }

    // R2: Quick Ratio
    if (qr < 0.8) {
      riskPoints += 10;
      ruleResults.quickRatio = { status: "KRITIS", message: "Kas dan piutang tanpa persediaan sangat minim." };
    } else if (qr < benchmarks.qrMinHealthy) {
      riskPoints += 5;
      ruleResults.quickRatio = { status: "WASPADA", message: "Kapasitas pembayaran cepat berada di bawah 1.0x." };
    } else {
      ruleResults.quickRatio = { status: "SEHAT", message: "Kapasitas pembayaran cepat memadai." };
    }

    // R3: Net Profit Margin
    if (npm < 0) {
      riskPoints += 15;
      ruleResults.netProfitMargin = { status: "KRITIS", message: "Usaha mengalami kerugian bersih operasional." };
    } else if (npm < benchmarks.npmMinHealthy) {
      riskPoints += 7;
      ruleResults.netProfitMargin = { status: "WASPADA", message: "Margin laba bersih tipis (< 10%)." };
    } else {
      ruleResults.netProfitMargin = { status: "SEHAT", message: "Profitabilitas bersih memuaskan." };
    }

    // R4: Gross Profit Margin
    if (gpm < 15.0) {
      riskPoints += 10;
      ruleResults.grossProfitMargin = { status: "KRITIS", message: "Beban HPP terlalu mendominasi omzet penjualan." };
    } else if (gpm < benchmarks.gpmMinHealthy) {
      riskPoints += 5;
      ruleResults.grossProfitMargin = { status: "WASPADA", message: "Margin kotor di bawah standar wajar 25%." };
    } else {
      ruleResults.grossProfitMargin = { status: "SEHAT", message: "Struktur harga pokok efisien." };
    }

    // R5: Debt to Asset Ratio (DAR)
    if (dar >= 70.0) {
      riskPoints += 10;
      ruleResults.debtToAssetRatio = { status: "KRITIS", message: "Lebih dari 70% aset dibiayai oleh liabilitas utang." };
    } else if (dar > benchmarks.darMaxHealthy) {
      riskPoints += 5;
      ruleResults.debtToAssetRatio = { status: "WASPADA", message: "Porsi utang terhadap aset di atas 50%." };
    } else {
      ruleResults.debtToAssetRatio = { status: "SEHAT", message: "Leverage aset terjaga sehat." };
    }

    // R6: Debt to Equity Ratio (DER)
    if (der >= 200.0 || latest.equity < 0) {
      riskPoints += 10;
      ruleResults.debtToEquityRatio = { status: "KRITIS", message: "Utang melampaui modal bersih pemilik." };
    } else if (der > benchmarks.derMaxHealthy) {
      riskPoints += 5;
      ruleResults.debtToEquityRatio = { status: "WASPADA", message: "Utang melampaui modal sendiri (> 100%)." };
    } else {
      ruleResults.debtToEquityRatio = { status: "SEHAT", message: "Modal sendiri mendominasi pendanaan usaha." };
    }

    // 5. Evaluasi 2 Tren & Pola Deteksi Dini (Jika data >= 3 periode)
    const patterns = [];
    const excludedRules = [];
    const warnings = [];

    if (periods.length >= 3) {
      // Tren Omzet (Penurunan berturut-turut)
      const p1 = periods[periods.length - 3].revenue;
      const p2 = periods[periods.length - 2].revenue;
      const p3 = periods[periods.length - 1].revenue;
      if (p3 < p2 && p2 < p1) {
        riskPoints += 15;
        patterns.push({
          type: "REVENUE_CONTRACTION",
          label: "Tren Penurunan Omzet Berturut-turut",
          description: "Pendapatan mengalami penurunan selama 3 periode berturut-turut.",
        });
        warnings.push("Penjualan menurun 3 periode terakhir. Evaluasi efektivitas promosi dan kepuasan pelanggan.");
      }

      // Tren Kerugian Beruntun
      const l1 = periods[periods.length - 3].netIncome;
      const l2 = periods[periods.length - 2].netIncome;
      const l3 = periods[periods.length - 1].netIncome;
      if (l3 < 0 && l2 < 0) {
        riskPoints += 20;
        patterns.push({
          type: "CONSECUTIVE_LOSS",
          label: "Tren Kerugian Berulang",
          description: "Usaha membukukan kerugian berturut-turut pada periode belakangan.",
        });
        warnings.push("Defisit laba bersih terjadi beruntun. Segera lakukan audit beban operasional.");
      }

      // Pola Tekanan Likuiditas
      if (cr < 1.2 && latest.currentAssets < latest.currentLiabilities * 1.1) {
        patterns.push({
          type: "LIQUIDITY_PRESSURE",
          label: "Pola Tekanan Likuiditas",
          description: "Ketersediaan kas mendekati jatuh tempo tagihan lancar.",
        });
      }

      // Pola Himpitan Margin
      if (gpm < 20.0 && npm < 5.0) {
        patterns.push({
          type: "MARGIN_SQUEEZE",
          label: "Pola Himpitan Margin",
          description: "Beban pokok dan operasional menggerus hampir seluruh laba kotor.",
        });
      }
    } else {
      excludedRules.push("TREND_REVENUE_3_PERIODS", "TREND_LOSS_3_PERIODS");
      warnings.push("Analisis tren dinonaktifkan karena data di bawah 3 periode. Unggah minimal 3 periode untuk membuka fitur deteksi pola.");
    }

    // 6. Tentukan Indeks Risiko & Kategori
    const riskIndex = Math.min(100.0, parseFloat(riskPoints.toFixed(2)));
    let riskLevel = "SEHAT";
    if (riskIndex >= 67.0) {
      riskLevel = "RISIKO_TINGGI";
    } else if (riskIndex >= 34.0) {
      riskLevel = "WASPADA";
    }

    // 7. Simpan Analisis ke Database
    const periodStart = new Date(periods[0].periodStart);
    const periodEnd = new Date(periods[periods.length - 1].periodStart);

    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
    const code = `FIN-${dateStr}-${randomSuffix}`;

    const savedAnalysis = await financialAnalysisRepository.create({
      code,
      userId,
      businessProfileId: profile.id,
      configId: config.id,
      fileName,
      periodStart,
      periodEnd,
      periodsAnalyzed: periods.length,
      ratios,
      ruleResults,
      patterns,
      excludedRules,
      warnings,
      riskIndex,
      riskLevel,
    });

    // 8. Simpan Periode Keuangan (Upsert Transaksional)
    const formattedPeriods = periods.map((p) => ({
      userId,
      businessProfileId: profile.id,
      periodStart: new Date(p.periodStart),
      revenue: Number(p.revenue),
      cogs: Number(p.cogs),
      operatingExpense: Number(p.operatingExpense),
      netIncome: Number(p.netIncome),
      currentAssets: Number(p.currentAssets),
      inventory: Number(p.inventory),
      totalAssets: Number(p.totalAssets),
      currentLiabilities: Number(p.currentLiabilities),
      totalLiabilities: Number(p.totalLiabilities),
      equity: Number(p.equity),
      sourceAnalysisId: savedAnalysis.id,
    }));

    await financialPeriodRepository.upsertMany(formattedPeriods);

    return {
      analysis: savedAnalysis,
      summary: {
        riskLevel,
        riskIndex,
        periodsAnalyzed: periods.length,
        periodRange: `${periods[0].periodStart} s/d ${periods[periods.length - 1].periodStart}`,
        ratios,
        ruleResults,
        patterns,
        warnings,
      },
    };
  },

  /**
   * Mengambil riwayat analisis keuangan milik user
   * @param {string} userId
   * @param {Object} query
   */
  async getHistory(userId, query = {}) {
    const page = parseInt(query.page, 10) || 1;
    const limit = parseInt(query.limit, 10) || 10;
    const riskLevel = query.riskLevel || null;

    return financialAnalysisRepository.findByUserIdWithPagination(userId, {
      page,
      limit,
      riskLevel,
    });
  },

  /**
   * Mengambil daftar baris periode keuangan yang tersimpan
   * @param {string} userId
   * @param {Object} query
   */
  async getPeriods(userId, query = {}) {
    const page = parseInt(query.page, 10) || 1;
    const limit = parseInt(query.limit, 10) || 12;

    return financialPeriodRepository.findByUserIdWithPagination(userId, {
      page,
      limit,
      orderBy: "desc",
    });
  },

  /**
   * Menghapus catatan analisis keuangan dan periode terkait
   * @param {string} userId
   * @param {string} analysisId
   */
  async deleteAnalysis(userId, analysisId) {
    const analysis = await financialAnalysisRepository.findById(analysisId);
    if (!analysis || analysis.userId !== userId) {
      const error = new Error("Data analisis keuangan tidak ditemukan.");
      error.status = 404;
      error.code = "ANALYSIS_NOT_FOUND";
      throw error;
    }

    await financialPeriodRepository.deleteBySourceAnalysisId(analysisId);
    await financialAnalysisRepository.deleteById(analysisId);

    return { id: analysisId, code: analysis.code };
  },
};

module.exports = financialService;
