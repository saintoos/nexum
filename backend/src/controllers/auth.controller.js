const { authService } = require("../services");

/**
 * Controller untuk menangani endpoint autentikasi
 */

const register = async (req, res, next) => {
  try {
    const result = await authService.register(req.body, { ip: req.ip });
    res.status(201).json({
      success: true,
      message: "Registrasi akun berhasil.",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body, { ip: req.ip });
    res.status(200).json({
      success: true,
      message: "Login berhasil.",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const logout = async (req, res, next) => {
  try {
    const result = await authService.logout(req.user?.id, { ip: req.ip });
    res.status(200).json({
      success: true,
      message: result.message || "Logout berhasil.",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};

const checkUserProfile = async (req, res, next) => {
  try {
    const user = await authService.getMe(req.user.id);
    res.status(200).json({
      success: true,
      message: "Profil pengguna berhasil diambil.",
      data: { user },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
  login,
  logout,
  checkUserProfile,
};
