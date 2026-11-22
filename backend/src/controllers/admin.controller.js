const { adminService } = require("../services");

/**
 * Controller untuk menangani endpoint administrasi sistem
 */

const getAllUsers = async (req, res, next) => {
  try {
    const result = await adminService.getUsers(req.query);
    res.status(200).json({
      success: true,
      message: "Daftar pengguna berhasil diambil.",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const changeUserStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;
    const updatedUser = await adminService.changeUserStatus(id, isActive, req.user);
    res.status(200).json({
      success: true,
      message: `Status akun pengguna berhasil diperbarui menjadi ${isActive ? "aktif" : "nonaktif"}.`,
      data: { user: updatedUser },
    });
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await adminService.deleteUser(id, req.user);
    res.status(200).json({
      success: true,
      message: "Akun pengguna beserta seluruh data relasi berhasil dihapus.",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getStatistics = async (req, res, next) => {
  try {
    const statistics = await adminService.getStatistics();
    res.status(200).json({
      success: true,
      message: "Statistik platform NEXUM berhasil diambil.",
      data: statistics,
    });
  } catch (err) {
    next(err);
  }
};

const getSystemStatus = async (req, res, next) => {
  try {
    const status = await adminService.getSystemStatus();
    res.status(200).json({
      success: true,
      message: "Status operasional sistem berhasil diambil.",
      data: status,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllUsers,
  changeUserStatus,
  deleteUser,
  getStatistics,
  getSystemStatus,
};
