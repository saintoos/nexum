const { aiService } = require("../services");

/**
 * Controller untuk menangani endpoint Asisten Konsultasi AI dan Izin Konteks
 */

const getConsent = async (req, res, next) => {
  try {
    const result = await aiService.getConsent(req.user.id);
    res.status(200).json({
      success: true,
      message: "Status izin konteks berhasil diambil.",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateConsent = async (req, res, next) => {
  try {
    const { allowContext } = req.body;
    const result = await aiService.updateConsent(req.user.id, allowContext);
    res.status(200).json({
      success: true,
      message: "Izin penggunaan konteks diperbarui.",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const sendUserChat = async (req, res, next) => {
  try {
    const { message, allowContext } = req.body;
    const isStream =
      req.headers.accept?.includes("text/event-stream") ||
      req.query.stream === "true" ||
      req.body.stream === true;

    if (isStream) {
      // Mode SSE (Server-Sent Events) untuk Streaming Response ke Frontend
      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");
      res.flushHeaders?.();

      const result = await aiService.sendChat(
        req.user.id,
        message,
        { allowContext },
        (chunk) => {
          res.write(`data: ${JSON.stringify({ chunk })}\n\n`);
        }
      );

      res.write(`data: ${JSON.stringify({ done: true, data: result })}\n\n`);
      res.end();
    } else {
      // Mode Standar REST JSON (Cocok untuk Postman & Pengujian API)
      const result = await aiService.sendChat(req.user.id, message, {
        allowContext,
      });
      res.status(200).json({
        success: true,
        message: "OK",
        data: result,
      });
    }
  } catch (err) {
    next(err);
  }
};

const getChatHistory = async (req, res, next) => {
  try {
    const messages = await aiService.getChatHistory(req.user.id, req.query);
    res.status(200).json({
      success: true,
      message: "Riwayat percakapan berhasil diambil.",
      data: { messages },
    });
  } catch (err) {
    next(err);
  }
};

const deleteChatHistory = async (req, res, next) => {
  try {
    const result = await aiService.deleteChatHistory(req.user.id);
    res.status(200).json({
      success: true,
      message: result.message || "Riwayat percakapan berhasil dibersihkan.",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getConsent,
  updateConsent,
  sendUserChat,
  getChatHistory,
  deleteChatHistory,
};
