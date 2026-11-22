const businessService = require("../services/business.service");

/**
 * Controller untuk Modul Profil Usaha
 */

const getBusinessProfile = async (req, res, next) => {
  try {
    const profile = await businessService.getProfile(req.user.id);
    res.status(200).json({
      success: true,
      message: "Profil usaha berhasil diambil.",
      data: profile,
    });
  } catch (err) {
    next(err);
  }
};

const createBusinessProfile = async (req, res, next) => {
  try {
    const profile = await businessService.createProfile(req.user.id, req.body);
    res.status(201).json({
      success: true,
      message: "Profil usaha berhasil dibuat.",
      data: profile,
    });
  } catch (err) {
    next(err);
  }
};

const updateBusinessProfile = async (req, res, next) => {
  try {
    const profile = await businessService.updateProfile(req.user.id, req.body);
    res.status(200).json({
      success: true,
      message: "Profil usaha berhasil diperbarui.",
      data: profile,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getBusinessProfile,
  createBusinessProfile,
  updateBusinessProfile,
};
