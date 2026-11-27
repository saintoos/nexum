const { businessProfileRepository } = require("../repositories");

/**
 * Service untuk logika bisnis Profil Usaha UMKM
 */
const businessService = {
  /**
   * Mengambil profil usaha milik pengguna yang sedang login
   * @param {string} userId
   */
  async getProfile(userId) {
    const profile = await businessProfileRepository.findByUserId(userId);
    if (!profile) {
      const error = new Error("Profil usaha belum dibuat. Silakan lengkapi profil usaha Anda.");
      error.status = 404;
      error.code = "PROFILE_NOT_FOUND";
      throw error;
    }
    return profile;
  },

  /**
   * Membuat profil usaha baru untuk pengguna
   * @param {string} userId
   * @param {Object} data
   */
  async createProfile(userId, data) {
    const existing = await businessProfileRepository.findByUserId(userId);
    if (existing) {
      const error = new Error("Profil usaha untuk akun ini sudah ada. Silakan gunakan fitur perbarui profil.");
      error.status = 409;
      error.code = "PROFILE_ALREADY_EXISTS";
      throw error;
    }

    const { name, sector, sectorOther, address, quarterlyRevenueTarget, latitude, longitude } = data;

    if (!name || !name.trim()) {
      const error = new Error("Nama usaha wajib diisi.");
      error.status = 400;
      error.code = "VALIDATION_ERROR";
      throw error;
    }

    if (!sector || !sector.trim()) {
      const error = new Error("Sektor usaha wajib dipilih.");
      error.status = 400;
      error.code = "VALIDATION_ERROR";
      throw error;
    }

    if (!address || !address.trim()) {
      const error = new Error("Alamat operasional usaha wajib diisi.");
      error.status = 400;
      error.code = "VALIDATION_ERROR";
      throw error;
    }

    const profileData = {
      userId,
      name: name.trim(),
      sector: sector.trim(),
      sectorOther: sectorOther ? sectorOther.trim() : null,
      address: address.trim(),
      latitude:
        latitude !== undefined && latitude !== null && latitude !== ""
          ? Number(latitude)
          : null,
      longitude:
        longitude !== undefined && longitude !== null && longitude !== ""
          ? Number(longitude)
          : null,
      quarterlyRevenueTarget: quarterlyRevenueTarget ? Number(quarterlyRevenueTarget) : null,
    };

    return businessProfileRepository.create(profileData);
  },

  /**
   * Memperbarui profil usaha yang sudah ada
   * @param {string} userId
   * @param {Object} data
   */
  async updateProfile(userId, data) {
    const existing = await businessProfileRepository.findByUserId(userId);
    if (!existing) {
      const error = new Error("Profil usaha belum ditemukan. Silakan buat profil usaha terlebih dahulu.");
      error.status = 404;
      error.code = "PROFILE_NOT_FOUND";
      throw error;
    }

    const { name, sector, sectorOther, address, quarterlyRevenueTarget, latitude, longitude } = data;
    const updateData = {};

    if (name !== undefined) updateData.name = name.trim();
    if (sector !== undefined) updateData.sector = sector.trim();
    if (sectorOther !== undefined) updateData.sectorOther = sectorOther ? sectorOther.trim() : null;
    if (address !== undefined) updateData.address = address.trim();
    if (latitude !== undefined) {
      updateData.latitude =
        latitude !== null && latitude !== "" ? Number(latitude) : null;
    }
    if (longitude !== undefined) {
      updateData.longitude =
        longitude !== null && longitude !== "" ? Number(longitude) : null;
    }
    if (quarterlyRevenueTarget !== undefined) {
      updateData.quarterlyRevenueTarget = quarterlyRevenueTarget ? Number(quarterlyRevenueTarget) : null;
    }

    return businessProfileRepository.updateByUserId(userId, updateData);
  },
};

module.exports = businessService;
