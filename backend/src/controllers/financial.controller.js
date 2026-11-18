const uploadFinancialReport = (req, res, next) => {
  res.status(501).json({ message: "Route POST /api/financial/upload ready - controller pending" });
};

const financialAnalysis = (req, res, next) => {
  res.status(501).json({ message: "Route POST /api/financial/analysis ready - controller pending" });
};

const getFinancialHistory = (req, res, next) => {
  res.status(501).json({ message: "Route GET /api/financial/history ready - controller pending" });
};

const getFinancialPeriods = (req, res, next) => {
  res.status(501).json({ message: "Route GET /api/financial/periods ready - controller pending" });
};

module.exports = {
  uploadFinancialReport,
  financialAnalysis,
  getFinancialHistory,
  getFinancialPeriods,
};
