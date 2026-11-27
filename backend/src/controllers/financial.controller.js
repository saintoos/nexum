const xlsx = require("xlsx");
const financialService = require("../services/financial.service");
const { financialPeriodRepository } = require("../repositories");

/**
 * Controller untuk Modul Analisis Keuangan (SAK EMKM)
 */

const uploadFinancialReport = async (req, res, next) => {
  try {
    if (!req.file) {
      const error = new Error("Berkas laporan keuangan (.xlsx) wajib diunggah.");
      error.status = 400;
      error.code = "FILE_REQUIRED";
      throw error;
    }

    // 1. Parsing isi file Excel dari memory buffer
    const periods = financialService.parseExcelBuffer(req.file.buffer);

    // 2. Jalankan evaluasi risiko dan simpan hasil analisis serta periodenya
    const result = await financialService.evaluateRisk(req.user.id, {
      periods,
      fileName: req.file.originalname,
    });

    res.status(201).json({
      success: true,
      message: "Berkas laporan keuangan berhasil diunggah dan dianalisis.",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const financialAnalysis = async (req, res, next) => {
  try {
    let periods = req.body.periods;

    // Jika periode tidak dikirim di body, ambil dari data periode yang sudah tersimpan sebelumnya
    if (!periods || periods.length === 0) {
      const stored = await financialPeriodRepository.findByUserId(req.user.id, { orderBy: "asc" });
      if (!stored || stored.length === 0) {
        const error = new Error("Belum ada data periode keuangan yang tersimpan. Harap unggah berkas Excel terlebih dahulu.");
        error.status = 400;
        error.code = "PERIODS_NOT_FOUND";
        throw error;
      }
      periods = stored.map((p) => ({
        periodStart: p.periodStart instanceof Date ? p.periodStart.toISOString().slice(0, 10) : String(p.periodStart).slice(0, 10),
        revenue: parseFloat(p.revenue),
        cogs: parseFloat(p.cogs),
        operatingExpense: parseFloat(p.operatingExpense),
        netIncome: parseFloat(p.netIncome),
        currentAssets: parseFloat(p.currentAssets),
        inventory: parseFloat(p.inventory),
        totalAssets: parseFloat(p.totalAssets),
        currentLiabilities: parseFloat(p.currentLiabilities),
        totalLiabilities: parseFloat(p.totalLiabilities),
        equity: parseFloat(p.equity),
      }));
    }

    const result = await financialService.evaluateRisk(req.user.id, {
      periods,
      fileName: req.body.fileName || "Evaluasi Sistem",
    });

    res.status(201).json({
      success: true,
      message: "Analisis risiko keuangan berhasil dihitung.",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getFinancialHistory = async (req, res, next) => {
  try {
    const history = await financialService.getHistory(req.user.id, req.query);
    res.status(200).json({
      success: true,
      message: "Riwayat analisis keuangan berhasil diambil.",
      data: history.records,
      pagination: history.pagination,
    });
  } catch (err) {
    next(err);
  }
};

const getFinancialPeriods = async (req, res, next) => {
  try {
    const periods = await financialService.getPeriods(req.user.id, req.query);
    res.status(200).json({
      success: true,
      message: "Daftar periode keuangan berhasil diambil.",
      data: periods.records,
      pagination: periods.pagination,
    });
  } catch (err) {
    next(err);
  }
};

const downloadTemplate = async (req, res, next) => {
  try {
    const workbook = xlsx.utils.book_new();
    const sampleData = [
      {
        Periode: "2026-07-01",
        Pendapatan: 50000000,
        HPP: 35000000,
        Beban_Operasional: 10000000,
        Laba_Bersih: 5000000,
        Aset_Lancar: 25000000,
        Persediaan: 10000000,
        Total_Aset: 80000000,
        Liabilitas_Lancar: 15000000,
        Total_Liabilitas: 30000000,
        Ekuitas: 50000000,
      },
      {
        Periode: "2026-08-01",
        Pendapatan: 48000000,
        HPP: 36000000,
        Beban_Operasional: 10500000,
        Laba_Bersih: 1500000,
        Aset_Lancar: 22000000,
        Persediaan: 9000000,
        Total_Aset: 78000000,
        Liabilitas_Lancar: 16000000,
        Total_Liabilitas: 32000000,
        Ekuitas: 46000000,
      },
      {
        Periode: "2026-09-01",
        Pendapatan: 45000000,
        HPP: 34100000,
        Beban_Operasional: 12250000,
        Laba_Bersih: -1350000,
        Aset_Lancar: 19800000,
        Persediaan: 8500000,
        Total_Aset: 75000000,
        Liabilitas_Lancar: 18000000,
        Total_Liabilitas: 35000000,
        Ekuitas: 40000000,
      },
    ];
    const worksheet = xlsx.utils.json_to_sheet(sampleData);
    xlsx.utils.book_append_sheet(workbook, worksheet, "Laporan_Keuangan");
    const buffer = xlsx.write(workbook, { type: "buffer", bookType: "xlsx" });

    res.setHeader("Content-Disposition", 'attachment; filename="Template_Laporan_Keuangan_SAK_EMKM.xlsx"');
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    return res.send(buffer);
  } catch (err) {
    next(err);
  }
};

const deleteFinancialAnalysis = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await financialService.deleteAnalysis(req.user.id, id);
    res.status(200).json({
      success: true,
      message: `Analisis keuangan ${result.code || id} berhasil dihapus.`,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  uploadFinancialReport,
  financialAnalysis,
  getFinancialHistory,
  getFinancialPeriods,
  downloadTemplate,
  deleteFinancialAnalysis,
};
