const getAllUsers = (req, res, next) => {
  res.status(501).json({ message: "Route GET /api/admin/users ready - controller pending" });
};

const changeUserStatus = (req, res, next) => {
  res.status(501).json({ message: "Route PATCH /api/admin/users/:id/status ready - controller pending" });
};

const deleteUser = (req, res, next) => {
  res.status(501).json({ message: "Route DELETE /api/admin/users/:id ready - controller pending" });
};

const getStatistics = (req, res, next) => {
  res.status(501).json({ message: "Route GET /api/admin/statistics ready - controller pending" });
};

const getSystemStatus = (req, res, next) => {
  res.status(501).json({ message: "Route GET /api/admin/system-status ready - controller pending" });
};

module.exports = {
  getAllUsers,
  changeUserStatus,
  deleteUser,
  getStatistics,
  getSystemStatus,
};
