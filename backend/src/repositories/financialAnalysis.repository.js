const prisma = require("../lib/prisma");

/**
 * Repository untuk model FinancialAnalysis
 */
const financialAnalysisRepository = {
  /**
   * Menyimpan hasil analisis risiko keuangan baru
   * @param {Object} data
   * @param {Object} [tx]
   */
  async create(data, tx = prisma) {
    return tx.financialAnalysis.create({
      data,
    });
  },

  /**
   * Mencari analisis keuangan berdasarkan ID
   * @param {string} id
   * @param {boolean} [includePeriods=false]
   * @param {Object} [tx]
   */
  async findById(id, includePeriods = false, tx = prisma) {
    return tx.financialAnalysis.findUnique({
      where: { id },
      include: {
        businessProfile: {
          select: { id: true, name: true, sector: true },
        },
        config: {
          select: { id: true, versionNumber: true, parameters: true },
        },
        periods: includePeriods
          ? {
              orderBy: { periodStart: "asc" },
            }
          : false,
      },
    });
  },

  /**
   * Mencari analisis keuangan berdasarkan kode unik (misal: FIN-202611-001)
   * @param {string} code
   * @param {Object} [tx]
   */
  async findByCode(code, tx = prisma) {
    return tx.financialAnalysis.findUnique({
      where: { code },
    });
  },

  /**
   * Mengambil analisis keuangan terbaru milik user
   * @param {string} userId
   * @param {Object} [tx]
   */
  async findLatestByUserId(userId, tx = prisma) {
    return tx.financialAnalysis.findFirst({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  },

  /**
   * Mengambil riwayat analisis keuangan milik user dengan paginasi dan filter riskLevel
   * @param {string} userId
   * @param {Object} params
   * @param {number} [params.page=1]
   * @param {number} [params.limit=10]
   * @param {string} [params.riskLevel] - "SEHAT" | "WASPADA" | "RISIKO_TINGGI"
   * @param {Object} [tx]
   */
  async findByUserIdWithPagination(
    userId,
    { page = 1, limit = 10, riskLevel },
    tx = prisma
  ) {
    const safePage = Math.max(1, parseInt(page, 10) || 1);
    const safeLimit = Math.max(1, Math.min(100, parseInt(limit, 10) || 10));
    const skip = (safePage - 1) * safeLimit;

    const where = { userId };
    if (riskLevel) {
      where.riskLevel = riskLevel;
    }

    const [total, records] = await Promise.all([
      tx.financialAnalysis.count({ where }),
      tx.financialAnalysis.findMany({
        where,
        skip,
        take: safeLimit,
        orderBy: { createdAt: "desc" },
      }),
    ]);

    return {
      records,
      pagination: {
        total,
        page: safePage,
        limit: safeLimit,
        totalPages: Math.ceil(total / safeLimit) || 1,
      },
    };
  },

  /**
   * Menghapus analisis keuangan berdasarkan ID
   * @param {string} id
   * @param {Object} [tx]
   */
  async deleteById(id, tx = prisma) {
    return tx.financialAnalysis.delete({
      where: { id },
    });
  },

  /**
   * Menghapus analisis keuangan jika milik user tertentu
   * @param {string} id
   * @param {string} userId
   * @param {Object} [tx]
   */
  async deleteByIdAndUserId(id, userId, tx = prisma) {
    return tx.financialAnalysis.deleteMany({
      where: { id, userId },
    });
  },

  /**
   * Menghitung total analisis keuangan secara global atau per kriteria
   * @param {Object} [where={}]
   * @param {Object} [tx]
   */
  async count(where = {}, tx = prisma) {
    return tx.financialAnalysis.count({ where });
  },

  /**
   * Menghitung total analisis keuangan yang dibuat oleh user
   * @param {string} userId
   * @param {Object} [tx]
   */
  async countByUserId(userId, tx = prisma) {
    return tx.financialAnalysis.count({
      where: { userId },
    });
  },
};

module.exports = financialAnalysisRepository;
