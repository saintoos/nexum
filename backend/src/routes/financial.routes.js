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
router.post("/upload", uploadLimiter, handleUploadExcel, financialController.uploadFinancialReport);

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

/**
 * Endpoint Unduh Berkas Template Excel SAK EMKM
 * GET /api/financial/template
 */
router.get("/template", financialController.downloadTemplate);

/**
 * Endpoint Hapus Hasil Analisis Keuangan
 * DELETE /api/financial/analysis/:id
 */
router.delete("/analysis/:id", financialController.deleteFinancialAnalysis);

module.exports = router;
