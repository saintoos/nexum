const register = (req, res, next) => {
  res.status(501).json({ message: "Route POST /api/auth/register ready - controller pending" });
};

const login = (req, res, next) => {
  res.status(501).json({ message: "Route POST /api/auth/login ready - controller pending" });
};

const logout = (req, res, next) => {
  res.status(501).json({ message: "Route POST /api/auth/logout ready - controller pending" });
};

const checkUserProfile = (req, res, next) => {
  res.status(501).json({ message: "Route GET /api/auth/me ready - controller pending" });
};

module.exports = {
  register,
  login,
  logout,
  checkUserProfile,
};
