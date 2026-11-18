const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { uploadLimiter, analysisLimiter } = require("../middlewares/security.middleware");
const { handleUploadExcel } = require("../middlewares/upload.middleware");
const router = express.Router();
const financialController = require("../controllers/financial.controller");

// Seluruh rute keuangan wajib terotentikasi
router.use(authenticateToken);

/**
 * Endpoint Pengunggahan Berkas Laporan Keuangan (.xlsx)
 * POST /api/financial/upload
 */
router.post("/upload", uploadLimiter, handleUploadExcel, financialController.financialAnalysis);

/**
 * Endpoint Evaluasi Analisis Risiko Keuangan
 * POST /api/financial/analysis
 */
router.post("/analysis", analysisLimiter, financialController.financialAnalysis);

/**
 * Endpoint Riwayat Analisis Keuangan
 * GET /api/financial/history
 */
router.get("/history", financialController.getFinancialHistory);

/**
 * Endpoint Rekap Baris Periode Keuangan
 * GET /api/financial/periods
 */
router.get("/periods", financialController.getFinancialPeriods);

module.exports = router;
