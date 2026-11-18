const express = require("express");
const { authLimiter, validate } = require("../middlewares/security.middleware");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { registerSchema, loginSchema } = require("../schemas/validation.schemas");
const router = express.Router();
const authController = require("../controllers/auth.controller");

/**
 * Endpoint Registrasi Akun
 * POST /api/auth/register
 */
router.post("/register", authLimiter, validate(registerSchema), authController.register);

/**
 * Endpoint Login Akun
 * POST /api/auth/login
 */
router.post("/login", authLimiter, validate(loginSchema),authController.login);

/**
 * Endpoint Logout
 * POST /api/auth/logout
 */
router.post("/logout", authenticateToken, authController.logout);

/**
 * Endpoint Cek Profil User yang Sedang Login
 * GET /api/auth/me
 */
router.get("/me", authenticateToken, authController.checkUserProfile);

module.exports = router;
