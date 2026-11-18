const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const router = express.Router();
const businessController = require("../controllers/business.controller");

// Seluruh rute profil usaha wajib terotentikasi
router.use(authenticateToken);

/**
 * Endpoint Melihat Profil Usaha
 * GET /api/business/profile
 */
router.get("/profile", businessController.getBusinessProfile);

/**
 * Endpoint Membuat Profil Usaha Baru
 * POST /api/business/profile
 */
router.post("/profile", businessController.createBusinessProfile);

/**
 * Endpoint Memperbarui Profil Usaha
 * PUT /api/business/profile
 */
router.put("/profile", businessController.updateBusinessProfile);

module.exports = router;
