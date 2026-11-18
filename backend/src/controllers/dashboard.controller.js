const getDashboardData = (req, res, next) => {
  res.status(501).json({ message: "Route GET /api/dashboard ready - controller pending" });
};

module.exports = {
  getDashboardData,
};
