const { z } = require("zod");

// ----------------------------------------------------------------------------
// 1. Skema Validasi Autentikasi & Registrasi Pengguna
// ----------------------------------------------------------------------------

const registerSchema = z.object({
  name: z
    .string({ required_error: "Nama lengkap wajib diisi" })
    .trim()
    .min(2, "Nama minimal 2 karakter")
    .max(100, "Nama maksimal 100 karakter"),
  email: z
    .string({ required_error: "Email wajib diisi" })
    .trim()
    .email("Format email tidak valid")
    .max(255, "Email maksimal 255 karakter")
    .toLowerCase(),
  password: z
    .string({ required_error: "Kata sandi wajib diisi" })
    .min(8, "Kata sandi minimal 8 karakter")
    .max(100, "Kata sandi maksimal 100 karakter")
    .regex(/[A-Z]/, "Kata sandi harus mengandung minimal 1 huruf besar")
    .regex(/[0-9]/, "Kata sandi harus mengandung minimal 1 angka"),
  businessName: z
    .string({ required_error: "Nama usaha/toko wajib diisi" })
    .trim()
    .min(2, "Nama usaha minimal 2 karakter")
    .max(100, "Nama usaha maksimal 100 karakter")
    .optional(),
  sector: z
    .string()
    .trim()
    .max(255, "Sektor usaha maksimal 255 karakter")
    .optional(),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email wajib diisi" })
    .trim()
    .email("Format email tidak valid")
    .toLowerCase(),
  password: z
    .string({ required_error: "Kata sandi wajib diisi" })
    .min(1, "Kata sandi tidak boleh kosong"),
});

// ----------------------------------------------------------------------------
// 2. Skema Validasi Koordinat & Input Kelayakan Lokasi (Metode SAW)
// ----------------------------------------------------------------------------

const locationAnalysisSchema = z.object({
  candidateName: z
    .string({ required_error: "Nama calon lokasi wajib diisi" })
    .trim()
    .min(2, "Nama calon lokasi minimal 2 karakter")
    .max(150, "Nama calon lokasi maksimal 150 karakter"),
  address: z
    .string({ required_error: "Alamat lokasi wajib diisi" })
    .trim()
    .min(5, "Alamat minimal 5 karakter")
    .max(500, "Alamat maksimal 500 karakter"),
  // Validasi koordinat geografis (Latitude: -90 s/d 90, Longitude: -180 s/d 180)
  latitude: z
    .number({ required_error: "Latitude koordinat wajib diisi" })
    .min(-90.0, "Latitude harus di antara -90 dan 90 derajat")
    .max(90.0, "Latitude harus di antara -90 dan 90 derajat"),
  longitude: z
    .number({ required_error: "Longitude koordinat wajib diisi" })
    .min(-180.0, "Longitude harus di antara -180 dan 180 derajat")
    .max(180.0, "Longitude harus di antara -180 dan 180 derajat"),
  // Parameter Kriteria SAW
  rentCost: z
    .number({ required_error: "Biaya sewa wajib diisi" })
    .positive("Biaya sewa per bulan harus bernilai positif")
    .max(1_000_000_000, "Biaya sewa melebihi batas wajar"),
  competitorCount: z
    .number({ required_error: "Jumlah kompetitor wajib diisi" })
    .int("Jumlah kompetitor harus berupa bilangan bulat")
    .nonnegative("Jumlah kompetitor tidak boleh bernilai negatif")
    .max(100, "Jumlah kompetitor maksimal 100"),
  accessibility: z
    .number({ required_error: "Nilai aksesibilitas wajib diisi" })
    .int()
    .min(1, "Skala aksesibilitas minimal 1")
    .max(5, "Skala aksesibilitas maksimal 5"),
  marketPotential: z
    .number({ required_error: "Nilai potensi pasar wajib diisi" })
    .int()
    .min(1, "Skala potensi pasar minimal 1")
    .max(5, "Skala potensi pasar maksimal 5"),
});

// ----------------------------------------------------------------------------
// 3. Skema Validasi Input Keuangan (SAK EMKM)
// ----------------------------------------------------------------------------

const financialDataSchema = z.object({
  periodYear: z
    .number({ required_error: "Tahun periode wajib diisi" })
    .int()
    .min(2000, "Tahun periode minimal 2000")
    .max(2100, "Tahun periode maksimal 2100"),
  periodMonth: z
    .number({ required_error: "Bulan periode wajib diisi" })
    .int()
    .min(1, "Bulan minimal 1")
    .max(12, "Bulan maksimal 12"),
  revenue: z
    .number({ required_error: "Total pendapatan wajib diisi" })
    .nonnegative("Pendapatan tidak boleh negatif"),
  cogs: z
    .number({ required_error: "Harga Pokok Penjualan (HPP) wajib diisi" })
    .nonnegative("HPP tidak boleh negatif"),
  operatingExpenses: z
    .number({ required_error: "Beban operasional wajib diisi" })
    .nonnegative("Beban operasional tidak boleh negatif"),
  cash: z
    .number({ required_error: "Kas & setara kas wajib diisi" })
    .nonnegative("Kas tidak boleh negatif"),
  receivables: z
    .number({ required_error: "Piutang usaha wajib diisi" })
    .nonnegative("Piutang tidak boleh negatif"),
  currentAssets: z
    .number({ required_error: "Aset lancar wajib diisi" })
    .nonnegative("Aset lancar tidak boleh negatif"),
  currentLiabilities: z
    .number({ required_error: "Liabilitas jangka pendek wajib diisi" })
    .nonnegative("Liabilitas tidak boleh negatif"),
  totalAssets: z
    .number({ required_error: "Total aset wajib diisi" })
    .positive("Total aset harus bernilai positif"),
  totalLiabilities: z
    .number({ required_error: "Total liabilitas wajib diisi" })
    .nonnegative("Total liabilitas tidak boleh negatif"),
});

module.exports = {
  registerSchema,
  loginSchema,
  locationAnalysisSchema,
  financialDataSchema,
};
