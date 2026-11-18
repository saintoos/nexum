const prisma = require("../lib/prisma");

/**
 * Repository untuk model BusinessProfile
 */
const businessProfileRepository = {
  /**
   * Membuat profil usaha baru
   * @param {Object} data
   * @param {Object} [tx]
   */
  async create(data, tx = prisma) {
    return tx.businessProfile.create({
      data,
    });
  },

  /**
   * Mencari profil usaha berdasarkan ID
   * @param {string} id
   * @param {Object} [tx]
   */
  async findById(id, tx = prisma) {
    return tx.businessProfile.findUnique({
      where: { id },
      include: {
        user: {
          select: { id: true, name: true, email: true },
        },
      },
    });
  },

  /**
   * Mencari profil usaha berdasarkan userId
   * @param {string} userId
   * @param {Object} [tx]
   */
  async findByUserId(userId, tx = prisma) {
    return tx.businessProfile.findUnique({
      where: { userId },
    });
  },

  /**
   * Memperbarui profil usaha berdasarkan ID
   * @param {string} id
   * @param {Object} data
   * @param {Object} [tx]
   */
  async update(id, data, tx = prisma) {
    return tx.businessProfile.update({
      where: { id },
      data,
    });
  },

  /**
   * Memperbarui profil usaha berdasarkan userId
   * @param {string} userId
   * @param {Object} data
   * @param {Object} [tx]
   */
  async updateByUserId(userId, data, tx = prisma) {
    return tx.businessProfile.update({
      where: { userId },
      data,
    });
  },

  /**
   * Upsert (buat jika belum ada, update jika sudah ada) profil usaha berdasarkan userId
   * @param {string} userId
   * @param {Object} createData
   * @param {Object} updateData
   * @param {Object} [tx]
   */
  async upsertByUserId(userId, createData, updateData, tx = prisma) {
    return tx.businessProfile.upsert({
      where: { userId },
      create: {
        userId,
        ...createData,
      },
      update: updateData,
    });
  },

  /**
   * Menghapus profil usaha berdasarkan ID
   * @param {string} id
   * @param {Object} [tx]
   */
  async deleteById(id, tx = prisma) {
    return tx.businessProfile.delete({
      where: { id },
    });
  },

  /**
   * Menghitung total profil usaha
   * @param {Object} [where={}]
   * @param {Object} [tx]
   */
  async count(where = {}, tx = prisma) {
    return tx.businessProfile.count({ where });
  },
};

module.exports = businessProfileRepository;
