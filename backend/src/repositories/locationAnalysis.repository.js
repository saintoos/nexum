const prisma = require("../lib/prisma");

/**
 * Repository untuk model LocationAnalysis
 */
const locationAnalysisRepository = {
  /**
   * Menyimpan hasil analisis kelayakan lokasi baru
   * @param {Object} data
   * @param {Object} [tx]
   */
  async create(data, tx = prisma) {
    return tx.locationAnalysis.create({
      data,
    });
  },

  /**
   * Mencari analisis lokasi berdasarkan ID
   * @param {string} id
   * @param {Object} [tx]
   */
  async findById(id, tx = prisma) {
    return tx.locationAnalysis.findUnique({
      where: { id },
      include: {
        businessProfile: {
          select: { id: true, name: true, sector: true },
        },
        config: {
          select: { id: true, versionNumber: true, parameters: true },
        },
      },
    });
  },

  /**
   * Mencari analisis lokasi berdasarkan kode unik (misal: LOC-202611-001)
   * @param {string} code
   * @param {Object} [tx]
   */
  async findByCode(code, tx = prisma) {
    return tx.locationAnalysis.findUnique({
      where: { code },
    });
  },

  /**
   * Mengambil analisis lokasi terbaru milik user
   * @param {string} userId
   * @param {Object} [tx]
   */
  async findLatestByUserId(userId, tx = prisma) {
    return tx.locationAnalysis.findFirst({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  },

  /**
   * Mengambil riwayat analisis lokasi milik user dengan paginasi dan filter kategori
   * @param {string} userId
   * @param {Object} params
   * @param {number} [params.page=1]
   * @param {number} [params.limit=10]
   * @param {string} [params.category] - "LAYAK" | "TIDAK_LAYAK"
   * @param {Object} [tx]
   */
  async findByUserIdWithPagination(
    userId,
    { page = 1, limit = 10, category },
    tx = prisma
  ) {
    const safePage = Math.max(1, parseInt(page, 10) || 1);
    const safeLimit = Math.max(1, Math.min(100, parseInt(limit, 10) || 10));
    const skip = (safePage - 1) * safeLimit;

    const where = { userId };
    if (category) {
      where.category = category;
    }

    const [total, records] = await Promise.all([
      tx.locationAnalysis.count({ where }),
      tx.locationAnalysis.findMany({
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
   * Menghapus analisis lokasi berdasarkan ID
   * @param {string} id
   * @param {Object} [tx]
   */
  async deleteById(id, tx = prisma) {
    return tx.locationAnalysis.delete({
      where: { id },
    });
  },

  /**
   * Menghapus analisis lokasi jika milik user tertentu
   * @param {string} id
   * @param {string} userId
   * @param {Object} [tx]
   */
  async deleteByIdAndUserId(id, userId, tx = prisma) {
    return tx.locationAnalysis.deleteMany({
      where: { id, userId },
    });
  },

  /**
   * Menghitung total analisis lokasi secara global atau per kriteria
   * @param {Object} [where={}]
   * @param {Object} [tx]
   */
  async count(where = {}, tx = prisma) {
    return tx.locationAnalysis.count({ where });
  },

  /**
   * Menghitung total analisis lokasi yang dibuat oleh user
   * @param {string} userId
   * @param {Object} [tx]
   */
  async countByUserId(userId, tx = prisma) {
    return tx.locationAnalysis.count({
      where: { userId },
    });
  },
};

module.exports = locationAnalysisRepository;
