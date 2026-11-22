const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  userRepository,
  activityLogRepository,
} = require("../repositories");

const JWT_SECRET =
  process.env.JWT_SECRET ||
  (process.env.NODE_ENV !== "production"
    ? "nexum_jwt_secret_development_key_super_secure_32_chars_minimum_2026_unnes"
    : null);

if (!JWT_SECRET || JWT_SECRET.length < 32) {
  throw new Error("JWT_SECRET wajib diatur di file .env (minimal 32 karakter)");
}

/**
 * Service untuk logika bisnis Autentikasi Pengguna & Sesi (JWT)
 */
const authService = {
  /**
   * Mendaftarkan pengguna UMKM baru ke platform
   * @param {Object} payload
   * @param {string} payload.name
   * @param {string} payload.email
   * @param {string} payload.password
   * @param {string} [payload.businessName]
   * @param {string} [payload.sector]
   * @param {Object} [meta]
   */
  async register(payload, meta = {}) {
    const { name, email, password, businessName, sector, address } = payload;
    const normalizedEmail = email.toLowerCase().trim();

    // 1. Cek apakah email sudah terdaftar sebelumnya
    const existingEmail = await userRepository.findByEmail(normalizedEmail);
    if (existingEmail) {
      const error = new Error("Email sudah terdaftar. Silakan gunakan email lain atau login.");
      error.status = 409;
      error.code = "EMAIL_ALREADY_REGISTERED";
      throw error;
    }

    // 2. Hash kata sandi menggunakan bcrypt (salt rounds: 10)
    const passwordHash = await bcrypt.hash(password, 10);

    // 3. Susun data user dan profil usaha (jika diisi)
    const createData = {
      name: name.trim(),
      email: normalizedEmail,
      passwordHash,
      role: "UMKM",
      isActive: true,
    };

    if (businessName && businessName.trim()) {
      createData.businessProfile = {
        create: {
          name: businessName.trim(),
          sector: sector?.trim() || "Retail / UMKM",
          address: payload.address?.trim() || "Belum diisi",
        },
      };
    }

    // 4. Simpan ke database
    const newUser = await userRepository.create(createData);

    // 5. Terbitkan token JWT
    const token = jwt.sign(
      {
        id: newUser.id,
        email: newUser.email,
        role: newUser.role,
      },
      JWT_SECRET,
      {
        expiresIn: "7d",
        algorithm: "HS256",
      }
    );

    // 6. Buat catatan log audit registrasi
    activityLogRepository
      .create({
        userId: newUser.id,
        eventType: "USER_REGISTER",
        level: "INFO",
        component: "AUTH",
        message: `Pengguna baru berhasil mendaftar: ${newUser.email}`,
        metadata: {
          email: newUser.email,
          role: newUser.role,
          businessName: businessName?.trim() || null,
          ip: meta.ip || null,
        },
      })
      .catch(() => {});

    // Buang passwordHash dari respons
    const { passwordHash: _, ...safeUser } = newUser;

    return {
      user: safeUser,
      token,
    };
  },

  /**
   * Melakukan autentikasi kredensial pengguna dan menerbitkan JWT
   * @param {Object} payload
   * @param {string} payload.email
   * @param {string} payload.password
   * @param {Object} [meta]
   */
  async login({ email, password }, meta = {}) {
    const normalizedEmail = email.toLowerCase().trim();

    // 1. Cari user berdasarkan email
    const user = await userRepository.findByEmail(normalizedEmail);
    if (!user) {
      activityLogRepository
        .create({
          eventType: "LOGIN_FAILED",
          level: "WARN",
          component: "AUTH",
          message: `Percobaan login gagal untuk email: ${normalizedEmail}`,
          metadata: { email: normalizedEmail, reason: "USER_NOT_FOUND", ip: meta.ip || null },
        })
        .catch(() => {});

      const error = new Error("Email atau kata sandi tidak valid.");
      error.status = 401;
      error.code = "INVALID_CREDENTIALS";
      throw error;
    }

    // 2. Periksa status aktif akun
    if (!user.isActive) {
      const error = new Error("Akun Anda telah dinonaktifkan. Silakan hubungi administrator.");
      error.status = 403;
      error.code = "ACCOUNT_INACTIVE";
      throw error;
    }

    // 3. Verifikasi kesesuaian kata sandi
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      activityLogRepository
        .create({
          userId: user.id,
          eventType: "LOGIN_FAILED",
          level: "WARN",
          component: "AUTH",
          message: `Kata sandi salah saat login akun: ${user.email}`,
          metadata: { email: user.email, reason: "WRONG_PASSWORD", ip: meta.ip || null },
        })
        .catch(() => {});

      const error = new Error("Email atau kata sandi tidak valid.");
      error.status = 401;
      error.code = "INVALID_CREDENTIALS";
      throw error;
    }

    // 4. Ambil profil user lengkap beserta businessProfile
    const fullUser = await userRepository.findById(user.id, true);

    // 5. Terbitkan token JWT sesi
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      JWT_SECRET,
      {
        expiresIn: "7d",
        algorithm: "HS256",
      }
    );

    // 6. Catat log login berhasil
    activityLogRepository
      .create({
        userId: user.id,
        eventType: "USER_LOGIN",
        level: "INFO",
        component: "AUTH",
        message: `Pengguna berhasil login: ${user.email}`,
        metadata: {
          email: user.email,
          role: user.role,
          ip: meta.ip || null,
        },
      })
      .catch(() => {});

    const { passwordHash: _, ...safeUser } = fullUser || user;

    return {
      user: safeUser,
      token,
    };
  },

  /**
   * Mengakhiri sesi pengguna
   * @param {string} userId
   * @param {Object} [meta]
   */
  async logout(userId, meta = {}) {
    if (userId) {
      activityLogRepository
        .create({
          userId,
          eventType: "USER_LOGOUT",
          level: "INFO",
          component: "AUTH",
          message: `Pengguna logout dari sistem`,
          metadata: { ip: meta.ip || null },
        })
        .catch(() => {});
    }

    return {
      message: "Logout berhasil.",
    };
  },

  /**
   * Mengambil data profil terbaru dari pengguna yang sedang aktif
   * @param {string} userId
   */
  async getMe(userId) {
    const user = await userRepository.findById(userId, true);
    if (!user) {
      const error = new Error("Pengguna tidak ditemukan.");
      error.status = 404;
      error.code = "USER_NOT_FOUND";
      throw error;
    }

    const { passwordHash: _, ...safeUser } = user;
    return safeUser;
  },
};

module.exports = authService;
