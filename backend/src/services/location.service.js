const {
  locationAnalysisRepository,
  businessProfileRepository,
  analysisConfigRepository,
} = require("../repositories");

/**
 * Service untuk logika bisnis Analisis Kelayakan Lokasi (Metode SAW)
 */
const locationService = {
  /**
   * Mengambil atau membuat konfigurasi aktif modul LOCATION
   */
  async getActiveLocationConfig() {
    let config = await analysisConfigRepository.findActiveByModule("LOCATION");
    if (!config) {
      const existing = await analysisConfigRepository.findManyByModule("LOCATION");
      if (existing && existing.length > 0) {
        config = await analysisConfigRepository.activateConfig(existing[0].id, "LOCATION");
      } else {
        config = await analysisConfigRepository.create({
          module: "LOCATION",
          versionNumber: 1,
          isActive: true,
          parameters: {
            weights: {
              rentCost: 0.30,
              competitorCount: 0.25,
              accessibility: 0.20,
              marketPotential: 0.25,
            },
            threshold: 65.0,
            benchmarkRent: 10000000, // Nilai acuan sewa wajar per tahun/periode
          },
          note: "Konfigurasi bawaan sistem untuk Metode SAW Lokasi",
        });
      }
    }
    return config;
  },

  /**
   * Menjalankan evaluasi SAW untuk calon lokasi cabang baru
   * @param {string} userId
   * @param {Object} data
   */
  async evaluateLocation(userId, data) {
    // 1. Pastikan pengguna sudah memiliki profil usaha
    const profile = await businessProfileRepository.findByUserId(userId);
    if (!profile) {
      const error = new Error("Harap lengkapi profil usaha terlebih dahulu sebelum melakukan analisis kelayakan lokasi.");
      error.status = 400;
      error.code = "PROFILE_REQUIRED";
      throw error;
    }

    // 2. Ambil bobot dari konfigurasi aktif
    const config = await this.getActiveLocationConfig();
    const params = config.parameters || {};
    const weights = params.weights || {
      rentCost: 0.30,
      competitorCount: 0.25,
      accessibility: 0.20,
      marketPotential: 0.25,
    };
    const threshold = params.threshold || 65.0;
    const benchmarkRent = params.benchmarkRent || 10000000;

    const {
      candidateName,
      address,
      latitude,
      longitude,
      rentCost,
      competitorCount,
      accessibility,
      marketPotential,
    } = data;

    // 3. Normalisasi Matriks Keputusan SAW (Rij: 0 - 1)
    // C1: Biaya Sewa (Cost) -> Semakin murah semakin bagus
    const normRent = Math.min(1.0, benchmarkRent / Math.max(1, rentCost));

    // C2: Jumlah Kompetitor (Cost) -> Semakin sedikit semakin bagus
    const normCompetitor = 1.0 / (1.0 + (competitorCount / 4.0));

    // C3: Aksesibilitas (Benefit: skala 1-5) -> Semakin tinggi semakin bagus
    const normAccessibility = Math.min(1.0, Math.max(0.2, accessibility / 5.0));

    // C4: Potensi Pasar (Benefit: skala 1-5) -> Semakin tinggi semakin bagus
    const normMarket = Math.min(1.0, Math.max(0.2, marketPotential / 5.0));

    // 4. Perankingan Nilai Akhir (Vi = Sum Wj * Rij)
    const wRent = Number(weights.rentCost ?? weights.rent ?? 0.30);
    const wCompetitor = Number(weights.competitorCount ?? weights.competitors ?? 0.25);
    const wAccessibility = Number(weights.accessibility ?? 0.20);
    const wMarket = Number(weights.marketPotential ?? weights.market ?? 0.25);

    const weightedRent = wRent * normRent;
    const weightedCompetitor = wCompetitor * normCompetitor;
    const weightedAccessibility = wAccessibility * normAccessibility;
    const weightedMarket = wMarket * normMarket;

    const rawScore = (weightedRent + weightedCompetitor + weightedAccessibility + weightedMarket) * 100;
    const finalScore = parseFloat(rawScore.toFixed(2));
    const category = finalScore >= threshold ? "LAYAK" : "TIDAK_LAYAK";

    // 5. Analisis Faktor Terkuat & Terlemah
    const factors = [
      { name: "Biaya Sewa", normalized: normRent, score: weightedRent },
      { name: "Persaingan Kompetitor", normalized: normCompetitor, score: weightedCompetitor },
      { name: "Aksesibilitas", normalized: normAccessibility, score: weightedAccessibility },
      { name: "Potensi Pasar", normalized: normMarket, score: weightedMarket },
    ];

    factors.sort((a, b) => b.normalized - a.normalized);
    const strongestFactor = factors[0].name;
    const weakestFactor = factors[factors.length - 1].name;

    // 6. Deteksi Peringatan Risiko Lokasi
    const warnings = [];
    if (competitorCount >= 6) {
      warnings.push("Tingkat kompetisi tinggi (>= 6 kompetitor serupa di area sekitar). Diperlukan strategi diferensiasi produk.");
    }
    if (rentCost > 50000000) {
      warnings.push("Biaya sewa relatif tinggi. Pastikan estimasi perputaran kas bulanan mampu menutupi beban sewa.");
    }
    if (accessibility <= 2) {
      warnings.push("Tingkat aksesibilitas rendah. Pertimbangkan visibilitas rute dan ketersediaan lahan parkir.");
    }
    if (marketPotential <= 2) {
      warnings.push("Potensi pasar dinilai rendah. Diperlukan strategi pemasaran aktif atau survei demografi ulang.");
    }

    // 7. Buat Kode Unik Analisis (LOC-YYYYMMDD-XXXX)
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
    const code = `LOC-${dateStr}-${randomSuffix}`;

    // 8. Simpan ke database
    const savedAnalysis = await locationAnalysisRepository.create({
      code,
      userId,
      businessProfileId: profile.id,
      configId: config.id,
      locationName: candidateName.trim(),
      district: address.split(",")[0]?.trim() || "Area Lokasi",
      latitude: Number(latitude),
      longitude: Number(longitude),
      rentCost: Number(rentCost),
      competitorCount: Number(competitorCount),
      accessibility: Number(accessibility),
      marketPotential: Number(marketPotential),
      score: finalScore,
      category,
      strongestFactor,
      weakestFactor,
      warnings,
      details: {
        weights,
        threshold,
        normalizedMatrix: {
          rentCost: parseFloat(normRent.toFixed(4)),
          competitorCount: parseFloat(normCompetitor.toFixed(4)),
          accessibility: parseFloat(normAccessibility.toFixed(4)),
          marketPotential: parseFloat(normMarket.toFixed(4)),
        },
        weightedScores: {
          rentCost: parseFloat(weightedRent.toFixed(4)),
          competitorCount: parseFloat(weightedCompetitor.toFixed(4)),
          accessibility: parseFloat(weightedAccessibility.toFixed(4)),
          marketPotential: parseFloat(weightedMarket.toFixed(4)),
        },
        recommendation:
          category === "LAYAK"
            ? "Calon lokasi ini memenuhi standar kelayakan ekspansi usaha berdasarkan metode SAW. Potensi pasar dan biaya sewa seimbang."
            : "Calon lokasi ini belum memenuhi standar kelayakan ekspansi (skor di bawah 65.0). Pertimbangkan negosiasi biaya sewa atau cari lokasi alternatif.",
      },
    });

    return savedAnalysis;
  },

  /**
   * Mengambil riwayat analisis lokasi milik user
   * @param {string} userId
   * @param {Object} query
   */
  async getHistory(userId, query = {}) {
    const page = parseInt(query.page, 10) || 1;
    const limit = parseInt(query.limit, 10) || 10;
    const category = query.category || null;

    return locationAnalysisRepository.findByUserIdWithPagination(userId, {
      page,
      limit,
      category,
    });
  },

  /**
   * Mengambil detail satu analisis lokasi
   * @param {string} id
   * @param {string} userId
   */
  async getDetails(id, userId) {
    const analysis = await locationAnalysisRepository.findById(id);
    if (!analysis || analysis.userId !== userId) {
      const error = new Error("Data analisis lokasi tidak ditemukan atau Anda tidak memiliki akses.");
      error.status = 404;
      error.code = "ANALYSIS_NOT_FOUND";
      throw error;
    }
    return analysis;
  },

  /**
   * Menghapus arsip analisis lokasi
   * @param {string} id
   * @param {string} userId
   */
  async deleteAnalysis(id, userId) {
    const analysis = await locationAnalysisRepository.findById(id);
    if (!analysis || analysis.userId !== userId) {
      const error = new Error("Data analisis lokasi tidak ditemukan.");
      error.status = 404;
      error.code = "ANALYSIS_NOT_FOUND";
      throw error;
    }

    await locationAnalysisRepository.deleteById(id);
    return { id, message: "Hasil analisis lokasi berhasil dihapus." };
  },
};

module.exports = locationService;
