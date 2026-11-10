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
  Archive,
  Compass,
  FileSpreadsheet,
  CheckCircle2,
  ChevronDown,
  Calendar,
  ArrowUpDown,
  X,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function AnalysisHistoryPage({ onLogout, onNavigate }) {
  const [activeMenu, setActiveMenu] = useState("riwayat");
  const [activeTab, setActiveTab] = useState("lokasi"); // 'lokasi' | 'keuangan'
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("Semua");
  const [currentPageNum, setCurrentPageNum] = useState(1);

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
    if (id === "beranda" && onNavigate) onNavigate("dashboard");
    if (id === "lokasi" && onNavigate) onNavigate("location");
    if (id === "keuangan" && onNavigate) onNavigate("finance");
    if (id === "konsultasi" && onNavigate) onNavigate("ai");
    if (id === "riwayat" && onNavigate) onNavigate("history");
    if (id === "profil" && onNavigate) onNavigate("profile");
  };

  // Data Riwayat Lokasi SAW (28 entries)
  const locationHistory = [
    {
      id: "LOC-2026-0924",
      date: "24 Sep 2026, 14:32",
      name: "Ruko Jl. Pandanaran No. 12",
      category: "Semarang Tengah • Ritel Pakaian Jadi",
      coordinates: "-6.9932, 110.4203",
      score: 70.0,
      status: "LAYAK",
      factors: "↑ Biaya Sewa (0.80) / ↓ Kompetitor (3 Usaha)",
    },
    {
      id: "LOC-2026-0918",
      date: "18 Sep 2026, 10:15",
      name: "Kios Pasar Johar Blok B-4",
      category: "Semarang Utara • Semi-Permanen Grosir",
      coordinates: "-6.9734, 110.4289",
      score: 58.5,
      status: "TIDAK LAYAK",
      factors: "↑ Aksesibilitas (0.80) / ↓ Biaya Sewa Tinggi",
    },
    {
      id: "LOC-2026-0902",
      date: "02 Sep 2026, 16:40",
      name: "Ruko Ngaliyan Square No. 8",
      category: "Ngaliyan Barat • Sentra Residensial Baru",
      coordinates: "-7.0112, 110.3541",
      score: 74.2,
      status: "LAYAK",
      factors: "↑ Potensi Pasar (0.85) / ↓ Akses Parkir Mobil",
    },
    {
      id: "LOC-2026-0828",
      date: "28 Agu 2026, 11:20",
      name: "Ruko Banyumanik Jl. Sukun Raya",
      category: "Banyumanik Selatan • Koridor Komersial",
      coordinates: "-7.0614, 110.4128",
      score: 66.8,
      status: "LAYAK",
      factors: "↑ Biaya Sewa (0.75) / ↓ Kompetitor (2 Usaha)",
    },
    {
      id: "LOC-2026-0815",
      date: "15 Agu 2026, 09:05",
      name: "Stand Simpang Lima Mall Lt. 1",
      category: "Pusat Kota • Mall Foot Traffic Tinggi",
      coordinates: "-6.9901, 110.4225",
      score: 52.0,
      status: "TIDAK LAYAK",
      factors: "↑ Potensi Pasar (0.90) / ↓ Sewa Ekstrem (0.20)",
    },
    {
      id: "LOC-2026-0801",
      date: "01 Agu 2026, 15:55",
      name: "Ruko Tembalang (Undip Walk)",
      category: "Tembalang • Kawasan Kampus & Mahasiswa",
      coordinates: "-7.0543, 110.4371",
      score: 78.4,
      status: "LAYAK",
      factors: "↑ Potensi Pasar (0.95) / ↓ Kompetitor (4 Usaha)",
    },
    {
      id: "LOC-2026-0721",
      date: "21 Jul 2026, 13:10",
      name: "Ruko Majapahit Central Kav. 3",
      category: "Pedurungan • Arteri Primer Semarang-Demak",
      coordinates: "-6.9882, 110.4589",
      score: 69.1,
      status: "LAYAK",
      factors: "↑ Volume Lalu Lintas / ↓ Kemudahan Putar Balik",
    },
    {
      id: "LOC-2026-0708",
      date: "08 Jul 2026, 09:45",
      name: "Ruko Pamularsih Barat Raya",
      category: "Semarang Barat • Dekat Akses Bandara Lama",
      coordinates: "-6.9892, 110.3887",
      score: 61.4,
      status: "TIDAK LAYAK",
      factors: "↑ Harga Murah (0.80) / ↓ Kepadatan Warga Rendah",
    },
    {
      id: "LOC-2026-0627",
      date: "27 Jun 2026, 17:00",
      name: "Ruko Gajahmada Boulevard No. 4",
      category: "Semarang Tengah • Golden Triangle Bisnis",
      coordinates: "-6.9811, 110.4219",
      score: 72.6,
      status: "LAYAK",
      factors: "↑ Daya Beli Konsumen / ↓ Biaya Pemeliharaan Gedung",
    },
    {
      id: "LOC-2026-0612",
      date: "12 Jun 2026, 11:15",
      name: "Ruko Kedungmundu Asri No. 19",
      category: "Tembalang Timur • Kawasan Padat Pemukiman",
      coordinates: "-7.0189, 110.4632",
      score: 67.3,
      status: "LAYAK",
      factors: "↑ Kepadatan Penduduk (0.84) / ↓ Lebar Jalan Depan",
    },
  ];

  // Data Riwayat Analisis Keuangan (13 entries)
  const financeHistory = [
    {
      id: "FIN-2026-Q3",
      period: "Kuartal 3 (Sep 2026)",
      file: "Laporan_Keuangan_Sep2026.xlsx",
      riskScore: 65.0,
      status: "WASPADA",
      currentRatio: "1.10x",
      netMargin: "-3.0%",
      note: "Defisit kas operasional Rp 1.350.000",
    },
    {
      id: "FIN-2026-Q2",
      period: "Kuartal 2 (Jun 2026)",
      file: "Laporan_Keuangan_Jun2026.xlsx",
      riskScore: 42.0,
      status: "AMAN",
      currentRatio: "1.35x",
      netMargin: "+5.4%",
      note: "Arus kas stabil, margin optimal",
    },
    {
      id: "FIN-2026-Q1",
      period: "Kuartal 1 (Mar 2026)",
      file: "Laporan_Keuangan_Mar2026.xlsx",
      riskScore: 38.5,
      status: "AMAN",
      currentRatio: "1.42x",
      netMargin: "+6.1%",
      note: "Pertumbuhan laba awal tahun sehat",
    },
  ];

  const filteredLocations = locationHistory.filter((item) => {
    const matchSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchStatus =
      statusFilter === "Semua" || item.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="min-h-screen bg-[#f8fafd] flex flex-col font-sans text-slate-800">
      {/* 1. TOP NAVBAR */}
      <header className="bg-[#0A2540] text-white px-4 sm:px-6 py-3 flex items-center justify-between shadow-sm sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-lg sm:text-xl tracking-wider text-white">
            NEXUM
          </span>
          <span className="text-slate-400 font-light text-sm">|</span>
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-sky-300 uppercase hidden sm:inline-block">
            INTELLIGENCE FOR UMKM
          </span>
        </div>

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

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="text-slate-300 hover:text-white relative p-1.5 rounded-full hover:bg-white/10 transition-colors"
            title="Notifikasi"
          >
            <Bell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-sky-400 rounded-full ring-2 ring-[#0A2540]"></span>
          </button>

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

      {/* 2. BODY LAYOUT */}
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
                  onClick={() => handleMenuClick(item.id)}
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

        {/* MAIN HISTORY CONTENT */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Page Header */}
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Riwayat Analisis Usaha
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                Daftar seluruh riwayat penilaian kelayakan lokasi dan evaluasi
                risiko keuangan yang pernah tersimpan dalam database analitik
                NEXUM
              </p>
            </div>

            {/* SECTION 1: 4 SUMMARY METRIC CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1 */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      TOTAL ARSIP ANALISIS
                    </span>
                    <Archive size={16} className="text-blue-600" />
                  </div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-extrabold text-slate-900">
                      41
                    </span>
                    <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded">
                      +8 Bln ini
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-50 text-[11px] text-slate-500">
                  <span>28 Spasial SAW • 13 Rasio Finansial</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      RASIO KELAYAKAN LOKASI
                    </span>
                    <Compass size={16} className="text-blue-600" />
                  </div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-extrabold text-slate-900">
                      67.8%
                    </span>
                    <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded">
                      19 Layak
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-50 text-[11px] text-slate-500">
                  <span>Ambang batas SAW Skor &gt;= 65.0</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      RATA-RATA SKOR SAW
                    </span>
                    <TrendingUp size={16} className="text-blue-600" />
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-extrabold text-slate-900">
                      66.4
                    </span>
                    <span className="text-xs text-slate-400 font-bold">
                      / 100
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-50 text-[11px] text-slate-500">
                  <span>Tertinggi: 78.4 (Undip Walk)</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      STATUS AUDIT TERKINI
                    </span>
                    <CheckCircle2 size={16} className="text-amber-500" />
                  </div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-extrabold text-slate-900">
                      Q3-2026
                    </span>
                    <span className="bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold px-1.5 py-0.5 rounded">
                      Waspada
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-50 text-[11px] text-slate-500">
                  <span>Tekanan modal likuiditas terdeteksi</span>
                </div>
              </div>
            </div>

            {/* SECTION 2: TABS & FILTER BAR */}
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
              {/* Tab Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 px-5 pt-3 gap-2">
                <div className="flex items-center gap-3">
                  {/* Tab Lokasi */}
                  <button
                    type="button"
                    onClick={() => setActiveTab("lokasi")}
                    className={`flex items-center gap-2 py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all ${
                      activeTab === "lokasi"
                        ? "border-[#0A2540] text-[#0A2540]"
                        : "border-transparent text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    <MapPin size={15} />
                    <span>Riwayat Kelayakan Lokasi (SAW)</span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        activeTab === "lokasi"
                          ? "bg-[#0A2540] text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      28
                    </span>
                  </button>

                  {/* Tab Keuangan */}
                  <button
                    type="button"
                    onClick={() => setActiveTab("keuangan")}
                    className={`flex items-center gap-2 py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all ${
                      activeTab === "keuangan"
                        ? "border-[#0A2540] text-[#0A2540]"
                        : "border-transparent text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    <FileSpreadsheet size={15} />
                    <span>Riwayat Analisis Keuangan</span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        activeTab === "keuangan"
                          ? "bg-[#0A2540] text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      13
                    </span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-400 pb-2 sm:pb-0">
                  • Total 41 Dokumen Tersimpan • Terakhir Diperbarui: 10 menit
                  lalu
                </div>
              </div>

              {/* Filter Controls Row */}
              <div className="p-4 sm:p-5 border-b border-slate-100 space-y-3">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
                  {/* Search Input */}
                  <div className="relative w-full lg:max-w-md">
                    <Search
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Cari nama lokasi, jalan, koordinat, atau periode..."
                      className="w-full bg-[#F1F4F9] text-xs text-slate-800 placeholder-slate-400 rounded-lg pl-9 pr-3 py-2 outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  {/* Filter Dropdowns */}
                  <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                    {/* Status Dropdown */}
                    <div className="relative">
                      <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="bg-[#F1F4F9] text-xs text-slate-700 font-medium py-2 pl-3 pr-7 rounded-lg outline-none appearance-none cursor-pointer"
                      >
                        <option value="Semua">
                          Status Kelayakan: Semua Status
                        </option>
                        <option value="LAYAK">Hanya LAYAK</option>
                        <option value="TIDAK LAYAK">Hanya TIDAK LAYAK</option>
                      </select>
                      <ChevronDown
                        size={14}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>

                    {/* Date Filter */}
                    <button
                      type="button"
                      className="flex items-center gap-1.5 bg-[#F1F4F9] text-xs text-slate-700 font-medium py-2 px-3 rounded-lg hover:bg-slate-200/80 transition-colors"
                    >
                      <Calendar size={13} className="text-slate-500" />
                      <span>1 - 30 Sep 2026</span>
                      <ChevronDown size={13} className="text-slate-400" />
                    </button>

                    {/* Sort Filter */}
                    <button
                      type="button"
                      className="flex items-center gap-1.5 bg-[#F1F4F9] text-xs text-slate-700 font-medium py-2 px-3 rounded-lg hover:bg-slate-200/80 transition-colors"
                    >
                      <ArrowUpDown size={13} className="text-slate-500" />
                      <span>Urutkan: Terbaru</span>
                    </button>
                  </div>
                </div>

                {/* Active Filter Chips */}
                <div className="flex flex-wrap items-center justify-between text-xs pt-1 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 text-[11px] font-semibold">
                      Filter Aktif:
                    </span>
                    <span className="inline-flex items-center gap-1 bg-[#EEF4FF] text-blue-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      Tahun 2026 <X size={11} className="cursor-pointer" />
                    </span>
                    <span className="inline-flex items-center gap-1 bg-[#EEF4FF] text-blue-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      Semua Wilayah Semarang{" "}
                      <X size={11} className="cursor-pointer" />
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery("");
                        setStatusFilter("Semua");
                      }}
                      className="text-[11px] text-blue-700 hover:underline font-semibold ml-1"
                    >
                      Reset Filter
                    </button>
                  </div>

                  <span className="text-[11px] text-slate-400">
                    Menampilkan data terindeks Algoritma SAW V2
                  </span>
                </div>
              </div>

              {/* SECTION 3: TABLE DATA */}
              {activeTab === "lokasi" ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50/60 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                        <th className="py-3 px-4">TANGGAL & JAM</th>
                        <th className="py-3 px-4">NAMA KANDIDAT LOKASI</th>
                        <th className="py-3 px-4 text-center">
                          KOORDINAT GEOGRAFIS
                        </th>
                        <th className="py-3 px-4 text-center">SKOR SAW</th>
                        <th className="py-3 px-4 text-center">
                          STATUS KELAYAKAN
                        </th>
                        <th className="py-3 px-4">
                          FAKTOR KUNCI (KUAT / LEMAH)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredLocations.map((row) => {
                        const isFeasible = row.status === "LAYAK";
                        return (
                          <tr
                            key={row.id}
                            className="hover:bg-slate-50/80 transition-colors"
                          >
                            {/* Tanggal & ID */}
                            <td className="py-3.5 px-4 whitespace-nowrap">
                              <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                                <Clock size={12} className="text-slate-400" />
                                <span>{row.date}</span>
                              </div>
                              <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                                ID: {row.id}
                              </div>
                            </td>

                            {/* Nama Kandidat & Kategori */}
                            <td className="py-3.5 px-4">
                              <div className="font-bold text-slate-900 leading-snug">
                                {row.name}
                              </div>
                              <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1">
                                <MapPin
                                  size={11}
                                  className="text-slate-400 shrink-0"
                                />
                                <span>{row.category}</span>
                              </div>
                            </td>

                            {/* Koordinat */}
                            <td className="py-3.5 px-4 text-center whitespace-nowrap">
                              <span className="font-mono text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                                {row.coordinates}
                              </span>
                            </td>

                            {/* Skor SAW */}
                            <td className="py-3.5 px-4 text-center whitespace-nowrap">
                              <div className="flex flex-col items-center">
                                <div className="flex items-baseline gap-0.5">
                                  <span
                                    className={`text-sm font-extrabold ${
                                      isFeasible
                                        ? "text-blue-700"
                                        : "text-red-600"
                                    }`}
                                  >
                                    {row.score.toFixed(1)}
                                  </span>
                                  <span className="text-[10px] text-slate-400">
                                    / 100
                                  </span>
                                </div>
                                <div className="w-14 bg-slate-100 h-1 rounded-full overflow-hidden mt-1">
                                  <div
                                    className={`h-full rounded-full ${
                                      isFeasible ? "bg-blue-600" : "bg-red-500"
                                    }`}
                                    style={{ width: `${row.score}%` }}
                                  ></div>
                                </div>
                              </div>
                            </td>

                            {/* Status */}
                            <td className="py-3.5 px-4 text-center whitespace-nowrap">
                              <span
                                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-extrabold tracking-wider uppercase ${
                                  isFeasible
                                    ? "bg-blue-50 text-blue-700 border border-blue-200"
                                    : "bg-red-50 text-red-700 border border-red-200"
                                }`}
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    isFeasible ? "bg-blue-600" : "bg-red-600"
                                  }`}
                                ></span>
                                {row.status}
                              </span>
                            </td>

                            {/* Faktor Kunci */}
                            <td className="py-3.5 px-4 text-[11px] text-slate-600 leading-snug">
                              {row.factors}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                /* TAB 2: DATA RIWAYAT KEUANGAN */
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50/60 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                        <th className="py-3 px-4">PERIODE LAPORAN</th>
                        <th className="py-3 px-4">BERKAS EXCEL</th>
                        <th className="py-3 px-4 text-center">INDEKS RISIKO</th>
                        <th className="py-3 px-4 text-center">CURRENT RATIO</th>
                        <th className="py-3 px-4 text-center">NET MARGIN</th>
                        <th className="py-3 px-4 text-center">
                          STATUS SAK EMKM
                        </th>
                        <th className="py-3 px-4">CATATAN EVALUASI</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {financeHistory.map((item) => (
                        <tr
                          key={item.id}
                          className="hover:bg-slate-50/80 transition-colors"
                        >
                          <td className="py-3.5 px-4 font-bold text-slate-900">
                            {item.period}
                            <div className="text-[10px] text-slate-400 font-mono font-normal">
                              ID: {item.id}
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-1.5 text-blue-700 font-semibold cursor-pointer hover:underline">
                              <FileSpreadsheet
                                size={14}
                                className="text-emerald-600"
                              />
                              <span>{item.file}</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4 text-center font-extrabold text-slate-800">
                            {item.riskScore} / 100
                          </td>
                          <td className="py-3.5 px-4 text-center font-bold text-slate-700 font-mono">
                            {item.currentRatio}
                          </td>
                          <td
                            className={`py-3.5 px-4 text-center font-bold font-mono ${
                              item.netMargin.startsWith("-")
                                ? "text-red-600"
                                : "text-emerald-600"
                            }`}
                          >
                            {item.netMargin}
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <span
                              className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                                item.status === "AMAN"
                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                  : "bg-amber-50 text-amber-700 border border-amber-200"
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-[11px] text-slate-500">
                            {item.note}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* SECTION 4: PAGINATION FOOTER */}
              <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
                <div>
                  Menampilkan <strong className="text-slate-800">1 - 10</strong>{" "}
                  dari <strong className="text-slate-800">28</strong> riwayat
                  kelayakan lokasi (Total 41 entri terdaftar)
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span>Baris per halaman:</span>
                    <select className="bg-[#F1F4F9] text-xs font-semibold py-1 px-2 rounded outline-none border border-slate-200">
                      <option>10</option>
                      <option>25</option>
                      <option>50</option>
                    </select>
                  </div>

                  {/* Page Buttons */}
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      disabled={currentPageNum === 1}
                      onClick={() =>
                        setCurrentPageNum((p) => Math.max(1, p - 1))
                      }
                      className="w-7 h-7 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-100 disabled:opacity-40"
                    >
                      <ChevronLeft size={13} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentPageNum(1)}
                      className={`w-7 h-7 rounded font-bold text-xs ${
                        currentPageNum === 1
                          ? "bg-[#0A2540] text-white"
                          : "border border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      1
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentPageNum(2)}
                      className={`w-7 h-7 rounded font-bold text-xs ${
                        currentPageNum === 2
                          ? "bg-[#0A2540] text-white"
                          : "border border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      2
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentPageNum(3)}
                      className={`w-7 h-7 rounded font-bold text-xs ${
                        currentPageNum === 3
                          ? "bg-[#0A2540] text-white"
                          : "border border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      3
                    </button>
                    <button
                      type="button"
                      disabled={currentPageNum === 3}
                      onClick={() =>
                        setCurrentPageNum((p) => Math.min(3, p + 1))
                      }
                      className="w-7 h-7 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-100 disabled:opacity-40"
                    >
                      <ChevronRight size={13} />
                    </button>
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
