const getBusinessProfile = (req, res, next) => {
  res.status(501).json({ message: "Route GET /api/business/profile ready - controller pending" });
};

const createBusinessProfile = (req, res, next) => {
  res.status(501).json({ message: "Route POST /api/business/profile ready - controller pending" });
};

const updateBusinessProfile = (req, res, next) => {
  res.status(501).json({ message: "Route PUT /api/business/profile ready - controller pending" });
};

module.exports = {
  getBusinessProfile,
  createBusinessProfile,
  updateBusinessProfile,
};
