require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const { apiLimiter, sanitizeInput } = require("./middlewares/security.middleware");
const apiRoutes = require("./routes");

const app = express();
const PORT = process.env.PORT || 5000;

// ----------------------------------------------------------------------------
// 1. PUSTAKA HELMET: KEAMANAN HTTPS & HEADER HTTP KETAT
// ----------------------------------------------------------------------------
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "blob:"],
        connectSrc: ["'self'", "http://localhost:5173", "http://127.0.0.1:5173"],
        fontSrc: ["'self'"],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'none'"],
      },
    },
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true,
    },
    frameguard: {
      action: "deny",
    },
    noSniff: true,
    hidePoweredBy: true,
    referrerPolicy: {
      policy: "strict-origin-when-cross-origin",
    },
  })
);

// ----------------------------------------------------------------------------
// 2. CORS (Cross-Origin Resource Sharing)
// ----------------------------------------------------------------------------
const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:3000",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        const error = new Error(
          `CORS Policy: Akses ditolak dari origin '${origin}'.`
        );
        error.status = 403;
        return callback(error);
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
    ],
    maxAge: 86400,
  })
);

// ----------------------------------------------------------------------------
// 3. PARSER BODY DENGAN PEMBATASAN UKURAN (Cegah Serangan DoS Payload Besar)
// ----------------------------------------------------------------------------
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

// ----------------------------------------------------------------------------
// 4. SANITASI INPUT GLOBAL
// ----------------------------------------------------------------------------
app.use(sanitizeInput);

// ----------------------------------------------------------------------------
// 5. STATUS SERVER (HEALTH CHECK)
// ----------------------------------------------------------------------------
app.get("/health", (req, res) => {
  res.json({
    status: "HEALTHY",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    security: {
      helmet: "ACTIVE",
      cors: "ENFORCED",
      rateLimiter: "ACTIVE",
      inputValidation: "ZOD_STRICT",
      maxFileUpload: "5MB_MEMORY_SAFE",
    },
  });
});

// ----------------------------------------------------------------------------
// 6. MOUNT MODULAR API ROUTES DENGAN RATE LIMITER GLOBAL
// ----------------------------------------------------------------------------
app.use("/api", apiLimiter, apiRoutes);

// ----------------------------------------------------------------------------
// 7. PENANGANAN KESALAHAN GLOBAL (CENTRALIZED ERROR HANDLER)
// ----------------------------------------------------------------------------
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    success: false,
    error: err.message || "Terjadi kesalahan internal pada server.",
  });
});

// Penanganan 404 Not Found
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: `Rute '${req.originalUrl}' tidak ditemukan.`,
  });
});

// ----------------------------------------------------------------------------
// 8. MENJALANKAN SERVER
// ----------------------------------------------------------------------------
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`[NEXUM Security Engine] Server berjalan di port ${PORT}`);
    console.log(`[Security] Helmet: Aktif | CORS: Dibatasi | Rate-Limit: Aktif`);
  });
}

module.exports = app;
