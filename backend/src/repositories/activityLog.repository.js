const prisma = require("../lib/prisma");

/**
 * Repository untuk model ActivityLog
 */
const activityLogRepository = {
  /**
   * Menyimpan log aktivitas/audit baru
   * @param {Object} data
   * @param {Object} [tx]
   */
  async create(data, tx = prisma) {
    const log = await tx.activityLog.create({
      data,
    });

    return {
      ...log,
      id: log.id.toString(), // Konversi BigInt ke string agar serializable
    };
  },

  /**
   * Mengambil log aktivitas dengan filter dan paginasi (Untuk Admin)
   * @param {Object} [params]
   * @param {number} [params.page=1]
   * @param {number} [params.limit=20]
   * @param {string} [params.level] - "INFO" | "WARN" | "ERROR" | "CRITICAL"
   * @param {string} [params.eventType]
   * @param {string} [params.userId]
   * @param {Object} [tx]
   */
  async findManyWithPagination(
    { page = 1, limit = 20, level, eventType, userId } = {},
    tx = prisma
  ) {
    const safePage = Math.max(1, parseInt(page, 10) || 1);
    const safeLimit = Math.max(1, Math.min(100, parseInt(limit, 10) || 20));
    const skip = (safePage - 1) * safeLimit;

    const where = {};
    if (level) where.level = level;
    if (eventType) where.eventType = eventType;
    if (userId) where.userId = userId;

    const [total, records] = await Promise.all([
      tx.activityLog.count({ where }),
      tx.activityLog.findMany({
        where,
        skip,
        take: safeLimit,
        orderBy: { createdAt: "desc" },
        include: {
          user: {
            select: { id: true, name: true, email: true, role: true },
          },
        },
      }),
    ]);

    const formattedRecords = records.map((r) => ({
      ...r,
      id: r.id.toString(),
    }));

    return {
      records: formattedRecords,
      pagination: {
        total,
        page: safePage,
        limit: safeLimit,
        totalPages: Math.ceil(total / safeLimit) || 1,
      },
    };
  },

  /**
   * Menghitung total entri log
   * @param {Object} [where={}]
   * @param {Object} [tx]
   */
  async count(where = {}, tx = prisma) {
    return tx.activityLog.count({ where });
  },

  /**
   * Menghapus log lama untuk pemeliharaan storage
   * @param {Date} cutoffDate
   * @param {Object} [tx]
   */
  async deleteOlderThan(cutoffDate, tx = prisma) {
    return tx.activityLog.deleteMany({
      where: {
        createdAt: {
          lt: cutoffDate,
        },
      },
    });
  },
};

module.exports = activityLogRepository;
