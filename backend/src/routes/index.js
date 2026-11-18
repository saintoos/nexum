const express = require("express");

const authRoutes = require("./auth.routes");
const businessRoutes = require("./business.routes");
const locationRoutes = require("./location.routes");
const financialRoutes = require("./financial.routes");
const dashboardRoutes = require("./dashboard.routes");
const aiRoutes = require("./ai.routes");
const adminRoutes = require("./admin.routes");

const router = express.Router();

// Mount seluruh rute modul ke router API
router.use("/auth", authRoutes);
router.use("/business", businessRoutes);
router.use("/location", locationRoutes);
router.use("/financial", financialRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/ai", aiRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
