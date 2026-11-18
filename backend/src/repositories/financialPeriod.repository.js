const prisma = require("../lib/prisma");

/**
 * Repository untuk model FinancialPeriod
 */
const financialPeriodRepository = {
  /**
   * Menyimpan satu baris data periode keuangan
   * @param {Object} data
   * @param {Object} [tx]
   */
  async create(data, tx = prisma) {
    return tx.financialPeriod.create({
      data,
    });
  },

  /**
   * Menyimpan banyak baris periode keuangan sekaligus (Batch Insert)
   * @param {Array<Object>} periodsData
   * @param {Object} [tx]
   */
  async createMany(periodsData, tx = prisma) {
    return tx.financialPeriod.createMany({
      data: periodsData,
      skipDuplicates: true,
    });
  },

  /**
   * Upsert banyak baris periode keuangan (Transaksional aman jika periode sudah ada)
   * @param {Array<Object>} periodsData
   * @param {Object} [tx]
   */
  async upsertMany(periodsData, tx = prisma) {
    const runInTx = async (client) => {
      const results = [];
      for (const item of periodsData) {
        const { businessProfileId, periodStart, ...fields } = item;
        const record = await client.financialPeriod.upsert({
          where: {
            businessProfileId_periodStart: {
              businessProfileId,
              periodStart: new Date(periodStart),
            },
          },
          create: {
            businessProfileId,
            periodStart: new Date(periodStart),
            ...fields,
          },
          update: fields,
        });
        results.push(record);
      }
      return results;
    };

    if (tx !== prisma) {
      return runInTx(tx);
    }
    return prisma.$transaction(runInTx);
  },

  /**
   * Mengambil seluruh data periode keuangan milik user terurut secara kronologis
   * @param {string} userId
   * @param {Object} [options]
   * @param {"asc"|"desc"} [options.orderBy="asc"]
   * @param {Object} [tx]
   */
  async findByUserId(userId, { orderBy = "asc" } = {}, tx = prisma) {
    return tx.financialPeriod.findMany({
      where: { userId },
      orderBy: { periodStart: orderBy },
    });
  },

  /**
   * Mengambil data periode keuangan milik profil usaha
   * @param {string} businessProfileId
   * @param {Object} [options]
   * @param {"asc"|"desc"} [options.orderBy="asc"]
   * @param {Object} [tx]
   */
  async findByBusinessProfileId(
    businessProfileId,
    { orderBy = "asc" } = {},
    tx = prisma
  ) {
    return tx.financialPeriod.findMany({
      where: { businessProfileId },
      orderBy: { periodStart: orderBy },
    });
  },

  /**
   * Mengambil data periode keuangan dengan paginasi
   * @param {string} userId
   * @param {Object} params
   * @param {number} [params.page=1]
   * @param {number} [params.limit=12]
   * @param {"asc"|"desc"} [params.orderBy="desc"]
   * @param {Object} [tx]
   */
  async findByUserIdWithPagination(
    userId,
    { page = 1, limit = 12, orderBy = "desc" } = {},
    tx = prisma
  ) {
    const safePage = Math.max(1, parseInt(page, 10) || 1);
    const safeLimit = Math.max(1, Math.min(100, parseInt(limit, 10) || 12));
    const skip = (safePage - 1) * safeLimit;
    const where = { userId };

    const [total, records] = await Promise.all([
      tx.financialPeriod.count({ where }),
      tx.financialPeriod.findMany({
        where,
        skip,
        take: safeLimit,
        orderBy: { periodStart: orderBy },
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
   * Query khusus agregasi metrik keuangan (Total Revenue, HPP, Beban, Laba Bersih)
   * @param {string} userId
   * @param {Object} [tx]
   */
  async getAggregatesByUserId(userId, tx = prisma) {
    return tx.financialPeriod.aggregate({
      where: { userId },
      _sum: {
        revenue: true,
        cogs: true,
        operatingExpense: true,
        netIncome: true,
      },
      _count: {
        id: true,
      },
    });
  },

  /**
   * Menghapus seluruh periode keuangan milik user
   * @param {string} userId
   * @param {Object} [tx]
   */
  async deleteByUserId(userId, tx = prisma) {
    return tx.financialPeriod.deleteMany({
      where: { userId },
    });
  },

  /**
   * Menghapus periode keuangan berdasarkan ID analisis sumber
   * @param {string} sourceAnalysisId
   * @param {Object} [tx]
   */
  async deleteBySourceAnalysisId(sourceAnalysisId, tx = prisma) {
    return tx.financialPeriod.deleteMany({
      where: { sourceAnalysisId },
    });
  },
};

module.exports = financialPeriodRepository;
