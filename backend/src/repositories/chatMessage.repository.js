const prisma = require("../lib/prisma");

/**
 * Repository untuk model ChatMessage
 */
const chatMessageRepository = {
  /**
   * Menyimpan pesan obrolan konsultasi AI baru
   * @param {Object} data
   * @param {Object} [tx]
   */
  async create(data, tx = prisma) {
    return tx.chatMessage.create({
      data,
    });
  },

  /**
   * Mengambil riwayat obrolan milik user
   * @param {string} userId
   * @param {Object} [options]
   * @param {number} [options.limit=50]
   * @param {"asc"|"desc"} [options.orderBy="asc"]
   * @param {Object} [tx]
   */
  async findByUserId(
    userId,
    { limit = 50, orderBy = "asc" } = {},
    tx = prisma
  ) {
    return tx.chatMessage.findMany({
      where: { userId },
      take: limit,
      orderBy: { createdAt: orderBy },
    });
  },

  /**
   * Menghapus seluruh riwayat obrolan milik user
   * @param {string} userId
   * @param {Object} [tx]
   */
  async deleteByUserId(userId, tx = prisma) {
    return tx.chatMessage.deleteMany({
      where: { userId },
    });
  },

  /**
   * Menghitung total pesan milik user
   * @param {string} userId
   * @param {Object} [tx]
   */
  async countByUserId(userId, tx = prisma) {
    return tx.chatMessage.count({
      where: { userId },
    });
  },
};

module.exports = chatMessageRepository;
