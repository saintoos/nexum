const prisma = require("../lib/prisma");

/**
 * Repository untuk model AiConsent
 */
const aiConsentRepository = {
  /**
   * Mencari status persetujuan konteks AI berdasarkan userId
   * @param {string} userId
   * @param {Object} [tx]
   */
  async findByUserId(userId, tx = prisma) {
    return tx.aiConsent.findUnique({
      where: { userId },
    });
  },

  /**
   * Upsert persetujuan konteks AI (Buat jika belum ada, update jika sudah ada)
   * @param {string} userId
   * @param {boolean} allowContext
   * @param {Object} [tx]
   */
  async upsert(userId, allowContext, tx = prisma) {
    return tx.aiConsent.upsert({
      where: { userId },
      create: {
        userId,
        allowContext,
      },
      update: {
        allowContext,
      },
    });
  },

  /**
   * Memperbarui izin konteks AI berdasarkan userId
   * @param {string} userId
   * @param {boolean} allowContext
   * @param {Object} [tx]
   */
  async update(userId, allowContext, tx = prisma) {
    return tx.aiConsent.update({
      where: { userId },
      data: { allowContext },
    });
  },

  /**
   * Menghapus izin persetujuan AI milik user
   * @param {string} userId
   * @param {Object} [tx]
   */
  async deleteByUserId(userId, tx = prisma) {
    return tx.aiConsent.deleteMany({
      where: { userId },
    });
  },
};

module.exports = aiConsentRepository;
