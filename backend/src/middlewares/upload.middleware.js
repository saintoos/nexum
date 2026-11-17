const multer = require("multer");
const path = require("path");

// ----------------------------------------------------------------------------
// Keamanan Penanganan Berkas (File Upload)
// ----------------------------------------------------------------------------

// Batas ukuran maksimal file: 5 MB (5 * 1024 * 1024 bytes)
const MAX_FILE_SIZE = 5 * 1024 * 1024;

// Daftar MIME Type yang sah untuk berkas spreadsheet Excel
const ALLOWED_MIME_TYPES = [
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
  "application/vnd.ms-excel", // .xls
  "application/octet-stream", // Fallback binary stream
];

// Ekstensi yang diizinkan
const ALLOWED_EXTENSIONS = [".xlsx", ".xls"];

// Ekstensi berbahaya yang WAJIB ditolak secara mutlak
const DANGEROUS_EXTENSIONS = [
  ".exe",
  ".bat",
  ".cmd",
  ".sh",
  ".php",
  ".phtml",
  ".js",
  ".py",
  ".jar",
  ".vbs",
  ".scr",
  ".ps1",
];

/**
 * Menggunakan MemoryStorage agar berkas tidak disimpan secara permanen di disk server.
 * Ini mencegah:
 * 1. Celah Directory Traversal.
 * 2. Eksekusi berkas berbahaya (Remote Code Execution) di server.
 * 3. Penumpukan berkas sampah / file yatim yang tidak terpakai lagi.
 */
const storage = multer.memoryStorage();

/**
 * Filter keamanan berkas
 */
const fileFilter = (req, file, cb) => {
  const originalName = file.originalname.toLowerCase();
  const fileExt = path.extname(originalName);

  // 1. Periksa apakah mengandung ekstensi ganda berbahaya (cth: payload.php.xlsx)
  const isDangerous = DANGEROUS_EXTENSIONS.some((ext) =>
    originalName.includes(ext)
  );
  if (isDangerous) {
    return cb(
      new Error(
        "Akses ditolak: Berkas mengandung ekstensi berbahaya yang dilarang."
      ),
      false
    );
  }

  // 2. Validasi ekstensi resmi (.xlsx atau .xls)
  if (!ALLOWED_EXTENSIONS.includes(fileExt)) {
    return cb(
      new Error(
        `Format berkas tidak didukung (${fileExt}). Hanya berkas Excel (.xlsx / .xls) yang diperbolehkan.`
      ),
      false
    );
  }

  // 3. Validasi MIME Type
  if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
    return cb(
      new Error(
        `Tipe konten berkas tidak valid (${file.mimetype}). Pastikan berkas adalah spreadsheet Excel yang valid.`
      ),
      false
    );
  }

  cb(null, true);
};

// Inisialisasi multer dengan batasan ketat
const uploadExcel = multer({
  storage,
  limits: {
    fileSize: MAX_FILE_SIZE, // Batas 5 MB
    files: 1, // Hanya boleh unggah 1 berkas per request
  },
  fileFilter,
});

/**
 * Middleware wrapper untuk menangani error multer secara elegan
 */
function handleUploadExcel(req, res, next) {
  const upload = uploadExcel.single("file");

  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(413).json({
          success: false,
          error:
            "Ukuran berkas melebihi batas maksimal yang diizinkan (Maksimal 5 MB).",
        });
      }
      if (err.code === "LIMIT_UNEXPECTED_FILE") {
        return res.status(400).json({
          success: false,
          error: "Field form berkas tidak sesuai. Gunakan nama field 'file'.",
        });
      }
      return res.status(400).json({
        success: false,
        error: `Kesalahan unggah berkas: ${err.message}`,
      });
    }

    if (err) {
      return res.status(400).json({
        success: false,
        error: err.message,
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: "Tidak ada berkas yang diunggah. Silakan pilih berkas Excel (.xlsx).",
      });
    }

    next();
  });
}

module.exports = {
  uploadExcel,
  handleUploadExcel,
  MAX_FILE_SIZE,
};
