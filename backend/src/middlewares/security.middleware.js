const rateLimit = require("express-rate-limit");
const { ZodError } = require("zod");

// ----------------------------------------------------------------------------
// 1. Sanitasi Input (Cegah SQL Injection, NoSQL Injection, dan XSS)
// ----------------------------------------------------------------------------

/**
 * Membersihkan string dari karakter berbahaya SQL/NoSQL Injection & XSS.
 */
function sanitizeValue(value) {
  if (typeof value === "string") {
    return value
      // Trim spasi di awal & akhir
      .trim()
      // Netralkan tag HTML berbahaya / skrip XSS
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
      .replace(/[<>]/g, "")
      // Netralkan sekuens SQL inline comment & karakter terminator query ganda
      .replace(/(--|\/\*|\*\/|;)/g, "");
  }

  // Jika berupa objek/array, bersihkan rekursif dan buang kunci NoSQL injection (seperti $gt, $ne, $where)
  if (value !== null && typeof value === "object") {
    if (Array.isArray(value)) {
      return value.map(sanitizeValue);
    }
    const sanitizedObj = {};
    for (const key of Object.keys(value)) {
      // Tolak atau buang key yang diawali tanda dolar ($) khas MongoDB/NoSQL operator injection
      if (key.startsWith("$")) {
        continue;
      }
      sanitizedObj[key] = sanitizeValue(value[key]);
    }
    return sanitizedObj;
  }

  return value;
}

/**
 * Middleware express untuk sanitasi otomatis req.body, req.query, dan req.params
 */
function sanitizeInput(req, res, next) {
  if (req.body) {
    req.body = sanitizeValue(req.body);
  }
  if (req.query) {
    req.query = sanitizeValue(req.query);
  }
  if (req.params) {
    req.params = sanitizeValue(req.params);
  }
  next();
}

// ----------------------------------------------------------------------------
// 2. Middleware Validasi Berbasis Skema Zod
// ----------------------------------------------------------------------------

/**
 * Middleware pemvalidasi payload permintaan menggunakan skema Zod.
 * @param {import("zod").ZodSchema} schema - Skema Zod
 * @param {"body" | "query" | "params"} [source="body"] - Bagian request yang divalidasi
 */
function validate(schema, source = "body") {
  return async (req, res, next) => {
    try {
      const validatedData = await schema.parseAsync(req[source]);
      req[source] = validatedData;
      next();
    } catch (err) {
      if (err instanceof ZodError || err?.name === "ZodError") {
        const issues = err.issues || err.errors || [];
        const formattedErrors = issues.map((e) => ({
          field: Array.isArray(e.path) ? e.path.join(".") : "",
          message: e.message,
        }));
        return res.status(400).json({
          success: false,
          error: "Validasi data gagal",
          details: formattedErrors,
        });
      }
      return res.status(500).json({
        success: false,
        error: "Terjadi kesalahan internal saat memvalidasi data",
      });
    }
  };
}

// ----------------------------------------------------------------------------
// 3. Proteksi Serangan Siber (Rate Limiting)
// ----------------------------------------------------------------------------

/**
 * Rate Limiter Umum untuk seluruh API (Mencegah DDoS & Spamming)
 * Maksimal 100 permintaan per 15 menit per IP
 */
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: {
    success: false,
    error: "Terlalu banyak permintaan dari IP Anda. Silakan coba lagi setelah 15 menit.",
  },
});

/**
 * Rate Limiter Ketat untuk Endpoint Autentikasi (Cegah Brute Force & Credential Stuffing)
 * Maksimal 10 percobaan per 15 menit per IP
 */
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: {
    success: false,
    error: "Terlalu banyak percobaan autentikasi. Akses ditangguhkan sementara selama 15 menit.",
  },
});

/**
 * Rate Limiter untuk Perhitungan Analisis SAW & SAK EMKM
 * Maksimal 30 permintaan per menit per IP
 */
const analysisLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: {
    success: false,
    error: "Batas frekuensi komputasi tercapai. Mohon tunggu beberapa saat sebelum mengirim analisis baru.",
  },
});

/**
 * Rate Limiter Khusus Pengunggahan Berkas (File Upload)
 * Maksimal 15 berkas per 15 menit per IP
 */
const uploadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: {
    success: false,
    error: "Batas pengunggahan berkas terlampaui. Silakan coba lagi setelah 15 menit.",
  },
});

module.exports = {
  sanitizeInput,
  validate,
  apiLimiter,
  authLimiter,
  analysisLimiter,
  uploadLimiter,
};
