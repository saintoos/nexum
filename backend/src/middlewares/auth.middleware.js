const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const jwt = require("jsonwebtoken");
const { userRepository } = require("../repositories");

const JWT_SECRET =
  process.env.JWT_SECRET ||
  (process.env.NODE_ENV !== "production"
    ? "nexum_jwt_secret_development_key_super_secure_32_chars_minimum_2026_unnes"
    : null);

if (!JWT_SECRET || JWT_SECRET.length < 32) {
  throw new Error("JWT_SECRET wajib diatur di file .env (minimal 32 karakter)");
}

/**
 * Middleware untuk memverifikasi JWT Bearer Token
 */
async function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null;

  if (!token) {
    return res.status(401).json({
      success: false,
      code: "TOKEN_MISSING",
      error: "Akses ditolak. Token autentikasi tidak ditemukan.",
    });
  }

  // 1. Verifikasi tanda tangan token (kegagalan di sini = masalah di sisi klien -> 401)
  let decoded;
  try {
    // Mengunci algoritma agar hanya HS256 yang diterima
    decoded = jwt.verify(token, JWT_SECRET, { algorithms: ["HS256"] });
  } catch (err) {
    const isExpired = err.name === "TokenExpiredError";
    return res.status(401).json({
      success: false,
      code: isExpired ? "TOKEN_EXPIRED" : "TOKEN_INVALID",
      error: isExpired
        ? "Sesi autentikasi telah kedaluwarsa. Silakan login kembali."
        : "Token autentikasi tidak valid.",
    });
  }

  // 2. Ekstrak User ID dari payload (mendukung id, userId, atau sub)
  const userId = decoded.id || decoded.userId || decoded.sub;
  if (!userId) {
    return res.status(401).json({
      success: false,
      code: "TOKEN_PAYLOAD_INVALID",
      error: "Payload token tidak mengandung identitas pengguna yang valid.",
    });
  }

  // 3. Verifikasi pengguna di database via userRepository
  try {
    const user = await userRepository.findById(userId, true);

    if (!user) {
      return res.status(401).json({
        success: false,
        code: "USER_NOT_FOUND",
        error: "Pengguna dengan token ini tidak lagi terdaftar.",
      });
    }

    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        code: "ACCOUNT_INACTIVE",
        error: "Akun Anda telah dinonaktifkan. Hubungi administrator.",
      });
    }

    // Buang passwordHash dari req.user demi keamanan data request
    const { passwordHash, ...safeUser } = user;
    req.user = safeUser;
    next();
  } catch (err) {
    // Error database diteruskan ke centralized error handler (respons 500)
    next(err);
  }
}

/**
 * Middleware otorisasi berdasarkan Role (RBAC)
 * @param {...string} roles - Daftar peran yang diizinkan (misal: 'ADMIN', 'UMKM')
 */
function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        code: "UNAUTHORIZED",
        error: "Pengguna belum terautentikasi.",
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        code: "FORBIDDEN",
        error: "Akses ditolak. Anda tidak memiliki izin untuk mengakses fitur ini.",
      });
    }

    next();
  };
}

module.exports = {
  authenticateToken,
  requireRole,
};
