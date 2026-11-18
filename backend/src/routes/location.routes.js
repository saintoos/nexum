const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { analysisLimiter, validate } = require("../middlewares/security.middleware");
const { locationAnalysisSchema } = require("../schemas/validation.schemas");
const router = express.Router();
const locationController = require("../controllers/location.controller");

// Seluruh rute analisis lokasi wajib terotentikasi
router.use(authenticateToken);

/**
 * Endpoint Analisis Kelayakan Lokasi (Metode SAW)
 * POST /api/location/analysis
 */
router.post("/analysis", analysisLimiter, validate(locationAnalysisSchema), locationController.locationAnalysis);

/**
 * Endpoint Riwayat Analisis Lokasi
 * GET /api/location/history
 */
router.get("/history", locationController.getLocationHistory);

/**
 * Endpoint Detail Analisis Lokasi
 * GET /api/location/:id
 */
router.get("/:id", locationController.getLocationDetails);

/**
 * Endpoint Hapus Riwayat Analisis Lokasi
 * DELETE /api/location/:id
 */
router.delete("/:id", locationController.deleteLocationAnalysis);

module.exports = router;
