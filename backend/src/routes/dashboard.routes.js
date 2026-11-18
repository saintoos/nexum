const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const router = express.Router();
const dashboardController = require("../controllers/dashboard.controller");

/**
 * Endpoint Dashboard Analytics & BI Summary
 * GET /api/dashboard
 */
router.get("/",authenticateToken, dashboardController.getDashboardData);

module.exports = router;
