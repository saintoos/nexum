import React, { useState } from "react";
import TopNavbar from "./TopNavbar";
import {
  LayoutGrid,
  MapPin,
  TrendingUp,
  Bot,
  History,
  Store,
  LogOut,
  Search,
  Bell,
  ChevronDown,
  Building2,
  Calendar,
  FileText,
  Wallet,
  CheckCircle2,
  Save,
  Tag,
  Copy,
  Check,
  FileSpreadsheet,
  Clock,
  Sparkles,
} from "lucide-react";

export default function BusinessProfilePage({ onLogout, onNavigate }) {
  // State form profil - Default kosong karena profil bisnis Siti telah dihapus sesuai permintaan
  const [formData, setFormData] = useState({
    businessName: "",
    tradeMark: "",
    sector: "",
    customSector: "",
    scale: "",
    nib: "",
    establishedDate: "",
    address: "",
    coordinates: "",
  });

  // Menghitung estimasi usia operasional usaha secara dinamis
  const calculateBusinessAge = (dateStr) => {
    if (!dateStr) return "";
    const startDate = new Date(dateStr);
    if (isNaN(startDate.getTime())) return "";
    const today = new Date();
    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();
    if (months < 0) {
      years--;
      months += 12;
    }
    if (years <= 0 && months <= 0) return "Baru dirintis (< 1 bulan)";
    if (years <= 0) return `~${months} bulan beroperasi`;
    if (months === 0) return `~${years} tahun beroperasi`;
    return `~${years} thn ${months} bln beroperasi`;
  };

  const [activeMenu, setActiveMenu] = useState("profil");
  const [isCopied, setIsCopied] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("siti@contoh.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);

    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 800);
  };

  const menuItems = [
    { id: "beranda", label: "Beranda", icon: LayoutGrid },
    { id: "lokasi", label: "Kelayakan Lokasi", icon: MapPin },
    { id: "keuangan", label: "Risiko Keuangan", icon: TrendingUp },
    { id: "konsultasi", label: "Konsultasi AI", icon: Bot },
    { id: "riwayat", label: "Riwayat Analisis", icon: History },
    { id: "profil", label: "Profil Usaha", icon: Store },
  ];

  const handleMenuClick = (id) => {
    setActiveMenu(id);
    if (!onNavigate) return;
    if (id === "beranda") onNavigate("dashboard");
    if (id === "lokasi") onNavigate("location");
    if (id === "keuangan") onNavigate("finance");
    if (id === "konsultasi") onNavigate("ai");
    if (id === "riwayat") onNavigate("history");
    if (id === "profil") onNavigate("profile");
  };

  return (
    <div className="h-screen bg-[#f8fafd] flex flex-col font-sans text-slate-800 overflow-hidden">
      {/* 1. TOP NAVBAR */}
      <TopNavbar onNavigate={onNavigate} />

      {/* 2. BODY LAYOUT (SIDEBAR + MAIN CONTENT) */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT SIDEBAR */}
        <aside className="w-64 bg-white border-r border-slate-200/80 flex flex-col justify-between hidden md:flex shrink-0 h-full overflow-hidden">
          <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeMenu === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all ${isActive
                    ? "bg-[#EEF4FF] text-[#0A2540] font-semibold shadow-sm"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                >
                  <Icon
                    size={17}
                    className={isActive ? "text-[#0A2540]" : "text-slate-400"}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-slate-100 shrink-0">
            <button
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut size={16} />
              <span>Keluar / Logout</span>
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Page Header */}
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Pengelolaan Profil Entitas Bisnis
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                Data dasar usaha yang digunakan sebagai acuan seluruh analisis
                kepatuhan SAK EMKM, pemetaan SAW, dan injeksi konteks penalaran
                asisten AI
              </p>
            </div>

            {/* Content Grid: Form (Col-8) & Profile Summary Card (Col-4) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* LEFT COLUMN: FORM & METRICS */}
              <div className="lg:col-span-8 space-y-6">
                {/* Card 1: Informasi Legal & Operasional Usaha */}
                <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
                  {/* Card Header */}
                  <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2">
                        <Store size={18} className="text-[#0A2540]" />
                        <h2 className="text-sm sm:text-base font-bold text-slate-900">
                          Informasi Legal & Operasional Usaha
                        </h2>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                        Pastikan data akurat untuk ketepatan analisis SAW dan
                        perhitungan rasio SAK EMKM
                      </p>
                    </div>
                    <span className="bg-slate-100 text-slate-600 text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      Formulir Resmi
                    </span>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSave} className="mt-5 space-y-4">
                    {/* Row 1: Nama Usaha / Brand */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          Nama Usaha / Brand{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <span className="text-[11px] text-slate-400">
                          Merk Dagang Terdaftar
                        </span>
                      </div>
                      <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                        <div className="pl-3.5 pr-1 text-slate-400">
                          <Store size={16} />
                        </div>
                        <input
                          type="text"
                          value={formData.businessName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              businessName: e.target.value,
                            })
                          }
                          className="w-full bg-transparent py-2.5 px-2 text-xs sm:text-sm text-slate-800 outline-none"
                        />
                        <div className="pr-3">
                          <span className="inline-flex items-center gap-1 bg-[#EEF4FF] text-blue-700 text-[11px] font-semibold px-2.5 py-1 rounded-md">
                            <Tag size={12} />
                            {formData.tradeMark}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Sektor Usaha & Skala Modal */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Sektor Usaha */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Sektor Usaha <span className="text-red-500">*</span>
                        </label>
                        <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                          <div className="pl-3.5 pr-1 text-slate-400">
                            <Building2 size={16} />
                          </div>
                          <select
                            value={formData.sector}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                sector: e.target.value,
                              })
                            }
                            className="w-full bg-transparent py-2.5 px-2 text-xs sm:text-sm text-slate-800 outline-none appearance-none cursor-pointer pr-8"
                          >
                            <option value="Kuliner & Restoran Cepat Saji">
                              Kuliner & Restoran Cepat Saji (F&B)
                            </option>
                            <option value="Ritel & Perdagangan Grosir">
                              Ritel & Perdagangan Grosir
                            </option>
                            <option value="Fesyen & Tekstil">
                              Fesyen & Tekstil
                            </option>
                            <option value="Kesehatan, Kecantikan & Perawatan">
                              Kesehatan, Kecantikan & Perawatan
                            </option>
                            <option value="Agribisnis, Pertanian & Peternakan">
                              Agribisnis, Pertanian & Peternakan
                            </option>
                            <option value="Teknologi, Digital & Kreatif">
                              Teknologi, Digital & Kreatif
                            </option>
                            <option value="Otomotif & Bengkel">
                              Otomotif & Bengkel
                            </option>
                            <option value="Pendidikan & Pelatihan">
                              Pendidikan & Pelatihan (bimbel, kursus, les privat, perlengkapan belajar)
                            </option>
                            <option value="Jasa & Hospitality">
                              Jasa & Hospitality
                            </option>
                            <option value="Produksi & Manufaktur Rumahan">
                              Produksi & Manufaktur Rumahan
                            </option>
                            <option value="Lainnya">
                              Lainnya (Tuliskan Sektor Manual)
                            </option>
                          </select>
                          <ChevronDown
                            size={16}
                            className="absolute right-3 text-slate-400 pointer-events-none"
                          />
                        </div>

                        {/* Input Teks Manual Jika Memilih 'Lainnya' */}
                        {formData.sector === "Lainnya" && (
                          <div className="mt-2.5 animate-in fade-in duration-200">
                            <label className="block text-[11px] font-semibold text-blue-900 mb-1">
                              Tuliskan Sektor Usaha Anda <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.customSector}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  customSector: e.target.value,
                                })
                              }
                              placeholder="Contoh: Kerajinan Tangan, Pengolahan Limbah, Ekspedisi..."
                              className="w-full bg-[#F1F4F9] border border-blue-300 focus:border-blue-500 focus:bg-white px-3 py-2 rounded-lg text-xs outline-none transition-all font-medium text-slate-800"
                            />
                            <p className="text-[10px] text-slate-500 mt-1">
                              Kategori manual ini akan disimpan dan disesuaikan untuk konteks analisis.
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Skala Modal */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Skala Modal / Estimasi Omzet Bulanan{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                          <div className="pl-3.5 pr-1 text-slate-400">
                            <Wallet size={16} />
                          </div>
                          <select
                            value={formData.scale}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                scale: e.target.value,
                              })
                            }
                            className="w-full bg-transparent py-2.5 px-2 text-xs sm:text-sm text-slate-800 outline-none appearance-none cursor-pointer"
                          >
                            <option>Mikro - &lt; Rp 50 Juta / bulan</option>
                            <option>
                              Kecil - Rp 50 Juta - 300 Juta / bulan
                            </option>
                            <option>Menengah - &gt; Rp 300 Juta / bulan</option>
                          </select>
                          <ChevronDown
                            size={16}
                            className="absolute right-3 text-slate-400 pointer-events-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: NIB & Tahun Berdiri */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* NIB */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Nomor Induk Berusaha (NIB)
                        </label>
                        <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                          <div className="pl-3.5 pr-1 text-slate-400">
                            <FileText size={16} />
                          </div>
                          <input
                            type="text"
                            value={formData.nib}
                            onChange={(e) =>
                              setFormData({ ...formData, nib: e.target.value })
                            }
                            className="w-full bg-transparent py-2.5 px-2 text-xs sm:text-sm text-slate-800 outline-none font-mono"
                          />
                          <div className="pr-3">
                            <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-md">
                              <CheckCircle2
                                size={12}
                                className="text-emerald-600"
                              />
                              OSS Aktif
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Tanggal Berdiri Usaha (Interaktif Date Picker) */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-xs font-semibold text-slate-700">
                            Tanggal Berdiri & Mulai Operasi <span className="text-red-500">*</span>
                          </label>
                          {formData.establishedDate && (
                            <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded">
                              {calculateBusinessAge(formData.establishedDate)}
                            </span>
                          )}
                        </div>
                        <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                          <div className="pl-3.5 pr-1 text-slate-400 pointer-events-none">
                            <Calendar size={16} />
                          </div>
                          <input
                            type="date"
                            max={new Date().toISOString().split("T")[0]}
                            value={formData.establishedDate}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                establishedDate: e.target.value,
                              })
                            }
                            className="w-full bg-transparent py-2.5 px-2 text-xs sm:text-sm text-slate-800 outline-none cursor-pointer font-medium"
                          />
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1">
                          Pilih tanggal pendirian usaha melalui kalender interaktif.
                        </p>
                      </div>
                    </div>

                    {/* Row 4: Alamat Operasional Utama */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          Alamat Operasional Utama{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <a
                          href={`https://maps.google.com/?q=${formData.coordinates}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[11px] text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
                        >
                          <MapPin size={12} />
                          Titik Koordinat: {formData.coordinates}
                        </a>
                      </div>
                      <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                        <div className="pl-3.5 pr-1 text-slate-400">
                          <MapPin size={16} />
                        </div>
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              address: e.target.value,
                            })
                          }
                          className="w-full bg-transparent py-2.5 px-2 text-xs sm:text-sm text-slate-800 outline-none"
                        />
                      </div>
                    </div>

                    {/* Status Validasi Data Box */}
                    <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-lg p-3.5 flex items-start gap-3 mt-4">
                      <CheckCircle2
                        size={18}
                        className="text-emerald-600 shrink-0 mt-0.5"
                      />
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-emerald-900">
                          Status Validasi Data: Terintegrasi Penuh
                        </div>
                        <p className="text-[11px] sm:text-xs text-emerald-700 mt-0.5 leading-relaxed">
                          Profil usaha tersimpan dan tervalidasi di database.
                          Konteks otomatis tersambung ke Model AI Gemini &
                          Perhitungan SAW secara real-time.
                        </p>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-3">
                        <button
                          type="submit"
                          disabled={isSaving}
                          className="inline-flex items-center gap-2 bg-[#0A2540] hover:bg-[#071c33] active:scale-[0.99] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all disabled:opacity-75"
                        >
                          <Save size={14} />
                          {isSaving ? "Menyimpan..." : "Simpan Perubahan"}
                        </button>
                        <button
                          type="button"
                          className="text-xs font-medium text-slate-600 hover:text-slate-900 px-3 py-2 transition-colors"
                        >
                          Batal
                        </button>
                      </div>

                      <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                        <Clock size={13} />
                        <span>
                          Terakhir disimpan: 24 September 2026, 11:20 WIB
                        </span>
                      </div>
                    </div>

                    {saveSuccess && (
                      <div className="p-2.5 bg-emerald-100 text-emerald-800 text-xs rounded-md text-center">
                        Perubahan profil berhasil disimpan!
                      </div>
                    )}
                  </form>
                </div>

                {/* Card 2: Jejak Parameter Analitik SAW & Finansial */}
                <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Sparkles size={17} className="text-blue-600" />
                      <h3 className="text-sm font-bold text-slate-900">
                        Jejak Parameter Analitik SAW & Finansial
                      </h3>
                    </div>
                    <span className="bg-slate-100 text-slate-500 text-[10px] font-semibold px-2 py-0.5 rounded">
                      Otomasi Sistem
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Parameter 1 */}
                    <div className="bg-[#F8FAFD] border border-slate-100 rounded-lg p-3.5 text-center">
                      <div className="text-xs text-slate-500 font-medium">
                        Bobot Aksesibilitas
                      </div>
                      <div className="text-xl font-extrabold text-slate-900 my-1">
                        {formData.businessName ? "0.35" : "-"}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Kriteria C1 (Lokasi)
                      </div>
                    </div>

                    {/* Parameter 2 */}
                    <div className="bg-[#F8FAFD] border border-slate-100 rounded-lg p-3.5 text-center">
                      <div className="text-xs text-slate-500 font-medium">
                        Threshold Kas Minimum
                      </div>
                      <div className="text-xl font-extrabold text-slate-900 my-1">
                        {formData.businessName ? "Rp 12.5 Jt" : "-"}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Rasio Likuiditas Mikro
                      </div>
                    </div>

                    {/* Parameter 3 */}
                    <div className="bg-[#EEF4FF] border border-blue-100 rounded-lg p-3.5 text-center">
                      <div className="text-xs text-blue-700 font-medium">
                        Zona Kompetisi UMKM
                      </div>
                      <div className="text-xl font-extrabold text-blue-800 my-1">
                        {formData.businessName ? "Sedang-Tinggi" : "-"}
                      </div>
                      <div className="text-[11px] text-blue-600/70">
                        {formData.businessName ? "Radius 1.5 KM" : "Belum terdata"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: PROFILE SUMMARY CARD */}
              <div className="lg:col-span-4">
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sticky top-20">
                  {/* Avatar & User Details */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-[#EEF4FF] text-[#0A2540] flex items-center justify-center font-extrabold text-2xl border-2 border-white shadow-sm ring-4 ring-blue-50">
                      SR
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 mt-3.5">
                      Siti Rahma
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {formData.businessName
                        ? `${formData.businessName} • Penanggung Jawab`
                        : "Pengguna UMKM (Belum Ada Profil Bisnis)"}
                    </p>

                    {/* Email Copy Button */}
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 mt-2 px-2.5 py-1 rounded-md hover:bg-slate-100 transition-colors"
                      title="Salin email"
                    >
                      <span>✉ siti@contoh.com</span>
                      {isCopied ? (
                        <Check size={13} className="text-emerald-600" />
                      ) : (
                        <Copy size={13} className="text-slate-400" />
                      )}
                    </button>

                    {/* Verified Badge */}
                    <div className="mt-3.5">
                      <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase">
                        AKUN AKTIF (TERVERIFIKASI)
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-6 border-t border-slate-100"></div>

                  {/* Connected Entities */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        RELASI ENTITAS TERKONEKSI
                      </span>
                      <span className="text-[11px] font-semibold text-slate-700">
                        {formData.businessName ? "2 Modul Aktif" : "Belum Terhubung"}
                      </span>
                    </div>

                    {formData.businessName ? (
                      <div className="space-y-2.5">
                        {/* Entity 1: Lokasi */}
                        <div className="p-3 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-between transition-colors shadow-none hover:shadow-sm">
                          <div className="flex items-start gap-2.5 pr-2">
                            <div className="p-1.5 bg-blue-50 text-blue-600 rounded-md shrink-0 mt-0.5">
                              <MapPin size={15} />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-900 line-clamp-1">
                                Jl. Pandanaran No. 12
                              </div>
                              <div className="text-[11px] text-slate-500">
                                Analisis Kelayakan Lokasi
                              </div>
                            </div>
                          </div>
                          <span className="bg-slate-100 text-slate-800 text-[11px] font-bold px-2 py-1 rounded-md shrink-0">
                            SAW: 70.0
                          </span>
                        </div>

                        {/* Entity 2: Laporan Keuangan */}
                        <div className="p-3 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-between transition-colors shadow-none hover:shadow-sm">
                          <div className="flex items-start gap-2.5 pr-2">
                            <div className="p-1.5 bg-amber-50 text-amber-600 rounded-md shrink-0 mt-0.5">
                              <FileSpreadsheet size={15} />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-900 line-clamp-1">
                                Laporan Q3-2024
                              </div>
                              <div className="text-[11px] text-slate-500">
                                Risiko Keuangan SAK EMKM
                              </div>
                            </div>
                          </div>
                          <span className="bg-amber-50 text-amber-700 border border-amber-200 text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md shrink-0">
                            Waspada (65.0)
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 bg-slate-50 border border-dashed border-slate-200 rounded-xl text-center">
                        <Store size={22} className="mx-auto text-slate-400 mb-1.5" />
                        <div className="text-xs font-semibold text-slate-700">
                          Profil Bisnis Belum Ada
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                          Lengkapi formulir di samping untuk mendaftarkan usaha Anda.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
