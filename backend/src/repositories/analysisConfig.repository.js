const prisma = require("../lib/prisma");

/**
 * Repository untuk model AnalysisConfig
 */
const analysisConfigRepository = {
  /**
   * Mengambil konfigurasi aktif untuk modul tertentu (LOCATION / FINANCIAL)
   * @param {string} module - "LOCATION" | "FINANCIAL"
   * @param {Object} [tx]
   */
  async findActiveByModule(module, tx = prisma) {
    return tx.analysisConfig.findFirst({
      where: {
        module,
        isActive: true,
      },
      orderBy: { versionNumber: "desc" },
    });
  },

  /**
   * Mencari konfigurasi berdasarkan ID
   * @param {string} id
   * @param {Object} [tx]
   */
  async findById(id, tx = prisma) {
    return tx.analysisConfig.findUnique({
      where: { id },
      include: {
        createdBy: {
          select: { id: true, name: true, email: true },
        },
      },
    });
  },

  /**
   * Mencari konfigurasi berdasarkan modul dan nomor versi
   * @param {string} module
   * @param {number} versionNumber
   * @param {Object} [tx]
   */
  async findByModuleAndVersion(module, versionNumber, tx = prisma) {
    return tx.analysisConfig.findUnique({
      where: {
        module_versionNumber: {
          module,
          versionNumber,
        },
      },
    });
  },

  /**
   * Membuat versi konfigurasi baru
   * @param {Object} data
   * @param {Object} [tx]
   */
  async create(data, tx = prisma) {
    return tx.analysisConfig.create({
      data,
    });
  },

  /**
   * Mengambil daftar seluruh konfigurasi per modul
   * @param {string} module
   * @param {Object} [tx]
   */
  async findManyByModule(module, tx = prisma) {
    return tx.analysisConfig.findMany({
      where: { module },
      orderBy: { versionNumber: "desc" },
    });
  },

  /**
   * Mengaktifkan konfigurasi tertentu dan menonaktifkan konfigurasi lama (Atomic Transaction)
   * @param {string} id
   * @param {string} module
   * @param {Object} [tx]
   */
  async activateConfig(id, module, tx = prisma) {
    const runInTx = async (client) => {
      // 1. Nonaktifkan config yang sedang aktif pada modul ini
      await client.analysisConfig.updateMany({
        where: { module, isActive: true },
        data: { isActive: false },
      });

      // 2. Aktifkan config yang dipilih
      return client.analysisConfig.update({
        where: { id },
        data: {
          isActive: true,
          activatedAt: new Date(),
        },
      });
    };

    if (tx !== prisma) {
      return runInTx(tx);
    }
    return prisma.$transaction(runInTx);
  },
};

module.exports = analysisConfigRepository;
