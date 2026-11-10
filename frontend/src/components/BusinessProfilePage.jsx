import React, { useState } from "react";
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
  // State form profil
  const [formData, setFormData] = useState({
    businessName: "Warung Rahma",
    tradeMark: "Ritel F&B",
    sector: "Kuliner & Restoran Cepat Saji",
    scale: "Mikro - < Rp 50 Juta / bulan",
    nib: "9120003482104",
    establishedYear: "2021 (3 Tahun Beroperasi)",
    address: "Jl. Gajah Mada No. 45, Kota Semarang, Jawa Tengah",
    coordinates: "-6.9811, 110.4219",
  });

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

  return (
    <div className="min-h-screen bg-[#f8fafd] flex flex-col font-sans text-slate-800">
      {/* 1. TOP NAVBAR */}
      <header className="bg-[#0A2540] text-white px-4 sm:px-6 py-3 flex items-center justify-between shadow-sm sticky top-0 z-30">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-lg sm:text-xl tracking-wider text-white">
            NEXUM
          </span>
          <span className="text-slate-400 font-light text-sm">|</span>
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-sky-300 uppercase hidden sm:inline-block">
            INTELLIGENCE FOR UMKM
          </span>
        </div>

        {/* Global Search */}
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <div className="relative flex items-center">
            <Search size={15} className="absolute left-3 text-slate-400" />
            <input
              type="text"
              placeholder="Cari analitik, lokasi, risiko..."
              className="w-full bg-[#133863] text-xs text-white placeholder-slate-400 rounded-lg pl-9 pr-4 py-2 outline-none focus:ring-1 focus:ring-sky-400 transition-all border border-blue-900/50"
            />
          </div>
        </div>

        {/* User Navigation / Status */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="text-slate-300 hover:text-white relative p-1.5 rounded-full hover:bg-white/10 transition-colors"
            title="Notifikasi"
          >
            <Bell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-sky-400 rounded-full ring-2 ring-[#0A2540]"></span>
          </button>

          {/* User Profile Pill */}
          <div className="flex items-center gap-2.5 pl-2 border-l border-white/10">
            <div className="text-right hidden sm:block">
              <div className="text-xs font-semibold text-white leading-tight">
                Siti Rahma
              </div>
              <div className="text-[10px] text-sky-300 font-medium">
                UMKM RETAIL
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs ring-2 ring-white/20">
              SR
            </div>
          </div>
        </div>
      </header>

      {/* 2. BODY LAYOUT (SIDEBAR + MAIN CONTENT) */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT SIDEBAR */}
        <aside className="w-64 bg-white border-r border-slate-200/80 flex flex-col justify-between hidden md:flex shrink-0">
          <nav className="p-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeMenu === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveMenu(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
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
          <div className="p-4 border-t border-slate-100">
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
                            className="w-full bg-transparent py-2.5 px-2 text-xs sm:text-sm text-slate-800 outline-none appearance-none cursor-pointer"
                          >
                            <option>Kuliner & Restoran Cepat Saji</option>
                            <option>Ritel & Perdagangan Grosir</option>
                            <option>Jasa & Hospitality</option>
                            <option>Produksi & Manufaktur Rumahan</option>
                          </select>
                          <ChevronDown
                            size={16}
                            className="absolute right-3 text-slate-400 pointer-events-none"
                          />
                        </div>
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

                      {/* Tahun Berdiri */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Tahun Berdiri & Riwayat
                        </label>
                        <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                          <div className="pl-3.5 pr-1 text-slate-400">
                            <Calendar size={16} />
                          </div>
                          <input
                            type="text"
                            value={formData.establishedYear}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                establishedYear: e.target.value,
                              })
                            }
                            className="w-full bg-transparent py-2.5 px-2 text-xs sm:text-sm text-slate-800 outline-none"
                          />
                        </div>
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
                        0.35
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
                        Rp 12.5 Jt
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
                        Sedang-Tinggi
                      </div>
                      <div className="text-[11px] text-blue-600/70">
                        Radius 1.5 KM Semarang
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
                      Owner & Penanggung Jawab Operasional
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
                        2 Modul Aktif
                      </span>
                    </div>

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
