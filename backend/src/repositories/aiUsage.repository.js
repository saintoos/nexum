const prisma = require("../lib/prisma");

/**
 * Repository untuk model AiUsage
 */
const aiUsageRepository = {
  /**
   * Mencatat data penggunaan token/panggilan AI
   * @param {Object} data
   * @param {Object} [tx]
   */
  async create(data, tx = prisma) {
    return tx.aiUsage.create({
      data,
    });
  },

  /**
   * Mengambil riwayat penggunaan AI milik user dengan paginasi
   * @param {string} userId
   * @param {Object} [params]
   * @param {number} [params.page=1]
   * @param {number} [params.limit=20]
   * @param {Object} [tx]
   */
  async findByUserIdWithPagination(
    userId,
    { page = 1, limit = 20 } = {},
    tx = prisma
  ) {
    const safePage = Math.max(1, parseInt(page, 10) || 1);
    const safeLimit = Math.max(1, Math.min(100, parseInt(limit, 10) || 20));
    const skip = (safePage - 1) * safeLimit;
    const where = { userId };

    const [total, records] = await Promise.all([
      tx.aiUsage.count({ where }),
      tx.aiUsage.findMany({
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
   * Agregasi total konsumsi token AI per user
   * @param {string} userId
   * @param {Object} [tx]
   */
  async getAggregateStatsByUserId(userId, tx = prisma) {
    return tx.aiUsage.aggregate({
      where: { userId },
      _sum: {
        inputTokens: true,
        outputTokens: true,
      },
      _count: {
        id: true,
      },
    });
  },

  /**
   * Agregasi total konsumsi token platform NEXUM (Untuk Admin Dashboard)
   * @param {Object} [tx]
   */
  async getPlatformUsageStats(tx = prisma) {
    return tx.aiUsage.aggregate({
      _sum: {
        inputTokens: true,
        outputTokens: true,
      },
      _count: {
        id: true,
      },
    });
  },
};

module.exports = aiUsageRepository;
