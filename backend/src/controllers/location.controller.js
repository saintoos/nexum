const locationAnalysis = (req, res, next) => {
  res.status(501).json({ message: "Route POST /api/location/analysis ready - controller pending" });
};

const getLocationHistory = (req, res, next) => {
  res.status(501).json({ message: "Route GET /api/location/history ready - controller pending" });
};

const getLocationDetails = (req, res, next) => {
  res.status(501).json({ message: `Route GET /api/location/${req.params.id} ready - controller pending` });
};

const deleteLocationAnalysis = (req, res, next) => {
  res.status(501).json({ message: `Route DELETE /api/location/${req.params.id} ready - controller pending` });
};

module.exports = {
  locationAnalysis,
  getLocationHistory,
  getLocationDetails,
  deleteLocationAnalysis,
};
