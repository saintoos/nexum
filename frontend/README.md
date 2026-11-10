# NEXUM Frontend - Halaman Login

Frontend untuk platform **NEXUM (Next-Gen Expansion Intelligence for UMKM)**.
Komponen halaman Login ini diimplementasikan menggunakan **React.js + Tailwind CSS + Lucide Icons**, disesuaikan persis dengan rancangan UI/UX Figma.

---

## 🎨 Elemen Desain yang Diimplementasikan

1. **Header**: Logo NEXUM terpusat dengan garis pemisah (_dotted border_).
2. **Navigasi Balik**: Tautan `← Kembali ke Beranda`.
3. **Kartu Login Modern**:
   - Border aksen gradien biru khas NEXUM di bagian atas kartu.
   - Judul: `Masuk ke Akun Anda`
   - Subjudul: `Kelola analitik keuangan dan rekomendasi ekspansi cabang secara real-time`
   - Form input:
     - `Email Usaha Terdaftar` dengan ikon `@` dan placeholder `nama@usaha.com`
     - `Kata Sandi` dengan ikon gembok, masking titik-titik sandi, dan toggle mata (_show/hide password_)
     - Checkbox `Ingat sesi saya (30 hari)`
     - Tautan `Lupa kata sandi?`
     - Tombol utama `Masuk` (Navy Blue #0A2540 dengan animasi hover & loading)
   - Pembatas `ATAU METODE RESMI`
   - Tombol SSO: `Google Bisnis` (dengan logo resmi Google SVG) dan `SSO Inkubator`
   - Tautan `Belum memiliki akun Pelaku UMKM? Daftar akun baru`
4. **Footer**:
   - Garis pemisah _dotted border_
   - Copyright & status: `© 2025 NEXUM Intelligence Platform. Institutional Enterprise Grade.`
   - Tautan hukum & kepatuhan: `Security Architecture`, `Privacy Compliance`, `Terms of Protocol`

---

## 🚀 Cara Menjalankan Proyek

1. Masuk ke direktori:

   ```bash
   cd frontend
   ```

2. Jalankan development server:

   ```bash
   npm run dev
   ```

3. Buka di browser:

   ```
   http://localhost:5173
   ```

4. Build untuk produksi:
   ```bash
   npm run build
   ```

---
