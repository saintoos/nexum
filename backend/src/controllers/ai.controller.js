const getConsent = (req, res, next) => {
  res.status(501).json({ message: "Route GET /api/ai/consent ready - controller pending" });
};

const updateConsent = (req, res, next) => {
  res.status(501).json({ message: "Route PUT /api/ai/consent ready - controller pending" });
};

const sendUserChat = (req, res, next) => {
  res.status(501).json({ message: "Route POST /api/ai/chat ready - controller pending" });
};

const getChatHistory = (req, res, next) => {
  res.status(501).json({ message: "Route GET /api/ai/history ready - controller pending" });
};

const deleteChatHistory = (req, res, next) => {
  res.status(501).json({ message: "Route DELETE /api/ai/history ready - controller pending" });
};

module.exports = {
  getConsent,
  updateConsent,
  sendUserChat,
  getChatHistory,
  deleteChatHistory,
};
