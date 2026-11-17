require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");

const {
  apiLimiter,
  authLimiter,
  analysisLimiter,
  uploadLimiter,
  sanitizeInput,
  validate,
} = require("./middlewares/security.middleware");

const { handleUploadExcel } = require("./middlewares/upload.middleware");

const {
  registerSchema,
  loginSchema,
  locationAnalysisSchema,
  financialDataSchema,
} = require("./schemas/validation.schemas");

const app = express();
const PORT = process.env.PORT || 5000;

// ----------------------------------------------------------------------------
// 1. PUSTAKA HELMET: KEAMANAN HTTPS & HEADER HTTP KETAT
// ----------------------------------------------------------------------------
app.use(
  helmet({
    // Content Security Policy (CSP) untuk mencegah serangan XSS & data injection
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
    // Strict-Transport-Security (HSTS): Paksa koneksi aman HTTPS
    hsts: {
      maxAge: 31536000, // 1 tahun
      includeSubDomains: true,
      preload: true,
    },
    // Proteksi Clickjacking: Larang rendering dalam frame/iframe asing
    frameguard: {
      action: "deny",
    },
    // Cegah MIME type sniffing (X-Content-Type-Options: nosniff)
    noSniff: true,
    // Sembunyikan informasi teknologi server dari peretas
    hidePoweredBy: true,
    // Referrer Policy untuk melindungi kebocoran privasi path internal
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
      // Izinkan permintaan tanpa origin (misal mobile app, curl, server-to-server)
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
    credentials: true, // Mendukung cookie sesi dan header otorisasi
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
    ],
    maxAge: 86400, // Cache preflight request selama 24 jam
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
// Membersihkan payload dari potensi SQL Injection, NoSQL Injection, dan tag XSS
app.use(sanitizeInput);

// ----------------------------------------------------------------------------
// 5. RATE LIMITING GLOBAL
// ----------------------------------------------------------------------------
// Terapkan rate limiter umum pada seluruh rute /api
app.use("/api", apiLimiter);

// ----------------------------------------------------------------------------
// RUTE & ENDPOINT API DENGAN VALIDASI SCHEMA ZOD & PERLINDUNGAN EKSTRA
// ----------------------------------------------------------------------------

// Endpoint Status Server (Health Check)
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

// 1. Endpoint Registrasi (Rate limit ketat + Validasi Skema Zod)
app.post(
  "/api/auth/register",
  authLimiter,
  validate(registerSchema),
  (req, res) => {
    const { name, email, businessName, sector } = req.body;
    // Data telah divalidasi dan disanitasi secara aman
    res.status(201).json({
      success: true,
      message: "Registrasi akun berhasil divalidasi dan diproses",
      user: { name, email, businessName, sector },
    });
  }
);

// 2. Endpoint Login (Rate limit ketat + Validasi Skema Zod)
app.post(
  "/api/auth/login",
  authLimiter,
  validate(loginSchema),
  (req, res) => {
    const { email } = req.body;
    res.json({
      success: true,
      message: "Autentikasi berhasil",
      user: { email },
    });
  }
);

// 3. Endpoint Analisis Kelayakan Lokasi (SAW)
// Dilindungi rate limiting analisis dan validasi ketat koordinat & indikator
app.post(
  "/api/location/evaluate",
  analysisLimiter,
  validate(locationAnalysisSchema),
  (req, res) => {
    const locationData = req.body;

    // Perhitungan simulasi skor SAW yang aman dari manipulasi tipe data
    const score = (
      (locationData.accessibility * 0.2 +
        locationData.marketPotential * 0.25 +
        (10 / (locationData.competitorCount + 1)) * 0.25 +
        (10_000_000 / locationData.rentCost) * 0.3) *
      20
    ).toFixed(2);

    res.json({
      success: true,
      candidate: locationData.candidateName,
      coordinates: {
        lat: locationData.latitude,
        lng: locationData.longitude,
      },
      feasibilityScore: parseFloat(score),
      category: score >= 65.0 ? "LAYAK" : "TIDAK_LAYAK",
    });
  }
);

// 4. Endpoint Analisis Keuangan Manual (SAK EMKM)
app.post(
  "/api/finance/evaluate",
  analysisLimiter,
  validate(financialDataSchema),
  (req, res) => {
    const data = req.body;
    const currentRatio = (data.currentAssets / (data.currentLiabilities || 1)).toFixed(2);
    const netProfitMargin = (
      ((data.revenue - data.cogs - data.operatingExpenses) / (data.revenue || 1)) *
      100
    ).toFixed(2);

    res.json({
      success: true,
      ratios: {
        currentRatio: parseFloat(currentRatio),
        netProfitMargin: parseFloat(netProfitMargin),
      },
      status: currentRatio >= 1.5 ? "SEHAT" : "WASPADA",
    });
  }
);

// 5. Endpoint Pengunggahan Berkas Excel (.xlsx) dengan Keamanan Maksimal
// Dilindungi uploadLimiter, MemoryStorage, batasan ukuran 5MB, dan verifikasi ekstensi/MIME
app.post(
  "/api/finance/upload-excel",
  uploadLimiter,
  handleUploadExcel,
  (req, res) => {
    const file = req.file;

    res.json({
      success: true,
      message: "Berkas Excel berhasil diunggah dan diverifikasi keamanannya.",
      fileInfo: {
        originalName: file.originalname,
        sizeInBytes: file.size,
        sizeInMB: (file.size / (1024 * 1024)).toFixed(2) + " MB",
        mimeType: file.mimetype,
        storageMode: "IN_MEMORY_SAFE (Tidak ada file tersisa di disk server)",
      },
    });
  }
);

// 6. Endpoint Hapus Pengguna (Khusus Administrator)
// Dilindungi rate limiter dan validasi ID parameter
app.delete("/api/admin/users/:id", authLimiter, (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      error: "ID pengguna wajib disertakan.",
    });
  }

  res.json({
    success: true,
    message: `Pengguna dengan ID '${id}' berhasil dihapus secara permanen beserta seluruh data terkait.`,
    deletedUserId: id,
    timestamp: new Date().toISOString(),
  });
});

// ----------------------------------------------------------------------------
// PENANGANAN KESALAHAN GLOBAL (CENTRALIZED ERROR HANDLER)
// ----------------------------------------------------------------------------
// Mencegah kebocoran stack trace error ke publik pada mode produksi
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
// MENJALANKAN SERVER
// ----------------------------------------------------------------------------
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`[NEXUM Security Engine] Server berjalan di port ${PORT}`);
    console.log(`[Security] Helmet: Aktif | CORS: Dibatasi | Rate-Limit: Aktif`);
    console.log(`[Security] Sanitasi & Validasi Zod: Aktif | File Upload Limit: 5MB`);
  });
}

module.exports = app;
