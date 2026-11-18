const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { analysisLimiter } = require("../middlewares/security.middleware");
const router = express.Router();
const aiController = require("../controllers/ai.controller")

/**
 * Status Persetujuan Konteks AI (Opt-in)
 * GET /api/ai/consent
 */
router.get("/consent", authenticateToken, aiController.getConsent);

/**
 * Perbarui Izin Konteks AI (Opt-in)
 * PUT /api/ai/consent
 */
router.put("/consent", authenticateToken, aiController.updateConsent);

/**
 * Kirim Pesan / Konsultasi AI
 * POST /api/ai/chat
 */
router.post("/chat", authenticateToken, analysisLimiter, aiController.sendUserChat);

/**
 * Riwayat Obrolan Konsultasi AI
 * GET /api/ai/history
 */
router.get("/history", authenticateToken, aiController.getChatHistory);

/**
 * Hapus Riwayat Obrolan Konsultasi AI
 * DELETE /api/ai/history
 */
router.delete("/history", authenticateToken, aiController.deleteChatHistory);

module.exports = router;
