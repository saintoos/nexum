const prisma = require("../lib/prisma");

/**
 * Repository untuk model User
 */
const userRepository = {
  /**
   * Membuat user baru
   * @param {Object} data
   * @param {Object} [tx] - Prisma transaction client (opsional)
   */
  async create(data, tx = prisma) {
    return tx.user.create({
      data,
      include: {
        businessProfile: true,
      },
    });
  },

  /**
   * Mencari user berdasarkan ID
   * @param {string} id
   * @param {boolean} [includeProfile=false]
   * @param {Object} [tx]
   */
  async findById(id, includeProfile = false, tx = prisma) {
    return tx.user.findUnique({
      where: { id },
      include: {
        businessProfile: includeProfile,
      },
    });
  },

  /**
   * Mencari user berdasarkan name
   * @param {string} name
   * @param {Object} [tx]
   */
  async findByName(name, tx = prisma) {
    return tx.user.findUnique({
      where: { name },
    });
  },

  /**
   * Mencari user berdasarkan email
   * @param {string} email
   * @param {Object} [tx]
   */
  async findByEmail(email, tx = prisma) {
    return tx.user.findUnique({
      where: { email },
    });
  },

  /**
   * Memperbarui data profil/kredensial user
   * @param {string} id
   * @param {Object} data
   * @param {Object} [tx]
   */
  async update(id, data, tx = prisma) {
    return tx.user.update({
      where: { id },
      data,
    });
  },

  /**
   * Mengubah status aktif/nonaktif akun user
   * @param {string} id
   * @param {boolean} isActive
   * @param {Object} [tx]
   */
  async updateStatus(id, isActive, tx = prisma) {
    return tx.user.update({
      where: { id },
      data: { isActive },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        updatedAt: true,
      },
    });
  },

  /**
   * Menghapus user secara permanen beserta data relasi (Transaksi aman)
   * @param {string} id
   * @param {Object} [tx]
   */
  async deleteWithRelations(id, tx = prisma) {
    const runInTx = async (client) => {
      await client.chatMessage.deleteMany({ where: { userId: id } });
      await client.aiUsage.deleteMany({ where: { userId: id } });
      await client.aiConsent.deleteMany({ where: { userId: id } });
      await client.financialPeriod.deleteMany({ where: { userId: id } });
      await client.financialAnalysis.deleteMany({ where: { userId: id } });
      await client.locationAnalysis.deleteMany({ where: { userId: id } });
      await client.businessProfile.deleteMany({ where: { userId: id } });
      return client.user.delete({ where: { id } });
    };

    if (tx !== prisma) {
      return runInTx(tx);
    }
    return prisma.$transaction(runInTx);
  },

  /**
   * Mengambil daftar user dengan paginasi, pencarian, dan filter
   * @param {Object} params
   * @param {number} [params.page=1]
   * @param {number} [params.limit=10]
   * @param {string} [params.search=""]
   * @param {string} [params.role]
   * @param {boolean} [params.isActive]
   * @param {Object} [tx]
   */
  async findManyWithPagination(
    { page = 1, limit = 10, search = "", role, isActive },
    tx = prisma
  ) {
    const safePage = Math.max(1, parseInt(page, 10) || 1);
    const safeLimit = Math.max(1, Math.min(100, parseInt(limit, 10) || 10));
    const skip = (safePage - 1) * safeLimit;

    const where = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }

    if (role) {
      where.role = role;
    }

    if (typeof isActive === "boolean") {
      where.isActive = isActive;
    }

    const [total, users] = await Promise.all([
      tx.user.count({ where }),
      tx.user.findMany({
        where,
        skip,
        take: safeLimit,
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          isActive: true,
          createdAt: true,
          businessProfile: {
            select: {
              id: true,
              name: true,
              sector: true,
              address: true,
            },
          },
          _count: {
            select: {
              locationAnalyses: true,
              financialAnalyses: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
      }),
    ]);

    return {
      users,
      pagination: {
        total,
        page: safePage,
        limit: safeLimit,
        totalPages: Math.ceil(total / safeLimit) || 1,
      },
    };
  },

  /**
   * Menghitung jumlah user berdasarkan kondisi
   * @param {Object} [where={}]
   * @param {Object} [tx]
   */
  async count(where = {}, tx = prisma) {
    return tx.user.count({ where });
  },
};

module.exports = userRepository;
