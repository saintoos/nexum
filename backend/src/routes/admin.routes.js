const express = require("express");
const { authenticateToken, requireRole } = require("../middlewares/auth.middleware");
const router = express.Router();
const adminController = require("../controllers/admin.controller");

// Middleware keamanan level admin untuk seluruh endpoint di bawah
router.use(authenticateToken);
router.use(requireRole("ADMIN"));

/**
 * Daftar Seluruh Pengguna
 * GET /api/admin/users
 */
router.get("/users", adminController.getAllUsers);

/**
 * Ubah Status Aktif Pengguna
 * PATCH /api/admin/users/:id/status
 */
router.patch("/users/:id/status", adminController.changeUserStatus);

/**
 * Hapus Akun Pengguna
 * DELETE /api/admin/users/:id
 */
router.delete("/users/:id", adminController.deleteUser);

/**
 * Statistik Platform NEXUM
 * GET /api/admin/statistics
 */
router.get("/statistics", adminController.getStatistics);

/**
 * Status Operasional Sistem
 * GET /api/admin/system-status
 */
router.get("/system-status", adminController.getSystemStatus);

module.exports = router;
