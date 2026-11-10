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
  RotateCcw,
  BookmarkPlus,
  ArrowRight,
  Info,
  BarChart2,
  Navigation,
} from "lucide-react";

export default function LocationPredictionPage({ onLogout, onNavigate }) {
  const [activeMenu, setActiveMenu] = useState("lokasi");

  // State Input Parameter
  const [rentCost, setRentCost] = useState("4500000");
  const [competitors, setCompetitors] = useState("3");
  const [accessibility, setAccessibility] = useState("4");
  const [marketPotential, setMarketPotential] = useState("3");
  const [coordinates, setCoordinates] = useState({
    lat: -6.9932,
    lng: 110.4203,
    address: "Jl. Pandanaran No. 12, Semarang Tengah",
  });

  const [isSaved, setIsSaved] = useState(false);

  // Bobot SAW: Biaya Sewa 30%, Kompetitor 25%, Aksesibilitas 20%, Potensi Pasar 25%
  const calculateSaw = () => {
    // Normalisasi Biaya Sewa (Cost attribute)
    const costVal = parseFloat(rentCost) || 4500000;
    const r1 = Math.min(1.0, Math.max(0.2, (3000000 / costVal) * 1.2));

    // Normalisasi Kompetitor (Cost attribute)
    const compVal = parseInt(competitors, 10) || 3;
    const r2 =
      compVal <= 1 ? 1.0 : compVal <= 3 ? 0.6 : compVal <= 5 ? 0.4 : 0.2;

    // Normalisasi Aksesibilitas (Benefit attribute, max 5)
    const r3 = (parseInt(accessibility, 10) || 4) / 5;

    // Normalisasi Potensi Pasar (Benefit attribute, max 5)
    const r4 = (parseInt(marketPotential, 10) || 3) / 5;

    // Nilai Preferensi Vi = (w1*r1 + w2*r2 + w3*r3 + w4*r4) * 100
    const score = (r1 * 0.3 + r2 * 0.25 + r3 * 0.2 + r4 * 0.25) * 100;
    const roundedScore = Math.round(score * 10) / 10;

    return {
      score: roundedScore,
      r1: Math.round(r1 * 100) / 100,
      r2: Math.round(r2 * 100) / 100,
      r3: Math.round(r3 * 100) / 100,
      r4: Math.round(r4 * 100) / 100,
      isFeasible: roundedScore >= 65.0,
    };
  };

  const sawResult = calculateSaw();

  const handleUseSample = () => {
    setCoordinates({
      lat: -6.9932,
      lng: 110.4203,
      address: "Jl. Pandanaran No. 12, Semarang Tengah",
    });
    setRentCost("4500000");
    setCompetitors("3");
    setAccessibility("4");
    setMarketPotential("3");
  };

  const handleReset = () => {
    setRentCost("4500000");
    setCompetitors("3");
    setAccessibility("4");
    setMarketPotential("3");
    setIsSaved(false);
  };

  const handleSaveToHistory = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
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
    if (id === "beranda" && onNavigate) onNavigate("dashboard");
    if (id === "profil" && onNavigate) onNavigate("profile");
    if (id === "lokasi" && onNavigate) onNavigate("location");
  };

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

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Prediksi Kelayakan Lokasi Cabang
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                Penilaian lokasi multi-kriteria berbasis input koordinat manual
                Google Maps dan normalisasi 4 indikator empiris UMKM
              </p>
            </div>

            {/* 2 COLUMNS GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* LEFT COLUMN: PARAMETER INPUT & KOORDINAT */}
              <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-sm space-y-5">
                {/* Section Header */}
                <div className="flex items-start gap-3 pb-3 border-b border-slate-100">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-slate-900">
                      Parameter Input & Koordinat
                    </h2>
                    <p className="text-[11px] sm:text-xs text-slate-500">
                      Data titik gerai target ekspansi
                    </p>
                  </div>
                </div>

                {/* Sub-section 1: Koordinat Geografis */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                    <span>🎯 Koordinat Geografis (Google Maps)</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Buka Google Maps, klik kanan titik lokasi ruko/gerai target,
                    pilih koordinat untuk menyalin ke clipboard
                  </p>
                  <button
                    type="button"
                    onClick={handleUseSample}
                    className="text-xs text-blue-700 hover:text-blue-800 font-semibold hover:underline flex items-center gap-1 pt-1"
                  >
                    <span>
                      🎯 Gunakan Koordinat Sampel Semarang Tengah
                      (Jl.Pandanaran)
                    </span>
                  </button>
                </div>

                {/* Sub-section 2: Indikator Pendukung Lokasi (Kriteria SAW) */}
                <div className="pt-2 border-t border-slate-100 space-y-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                      <span>🎛️ Indikator Pendukung Lokasi (Kriteria SAW)</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Data empiris lokal untuk perhitungan matriks keputusan
                      ternormalisasi
                    </p>
                  </div>

                  {/* Kriteria 1: Biaya Sewa */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Biaya Sewa per Bulan
                      </label>
                      <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        Bobot 30%
                      </span>
                    </div>
                    <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                      <span className="pl-3.5 pr-1 text-xs font-bold text-slate-500">
                        Rp
                      </span>
                      <input
                        type="text"
                        value={parseInt(rentCost, 10).toLocaleString("id-ID")}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, "");
                          setRentCost(val || "0");
                        }}
                        className="w-full bg-transparent py-2.5 px-2 text-xs sm:text-sm text-slate-800 outline-none font-medium"
                      />
                    </div>
                  </div>

                  {/* Kriteria 2: Jumlah Kompetitor Sejenis */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Jumlah Kompetitor Sejenis
                      </label>
                      <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        Bobot 25%
                      </span>
                    </div>
                    <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                      <div className="pl-3.5 pr-1 text-slate-400">
                        <Store size={16} />
                      </div>
                      <input
                        type="number"
                        min="0"
                        value={competitors}
                        onChange={(e) => setCompetitors(e.target.value)}
                        className="w-full bg-transparent py-2.5 px-2 text-xs sm:text-sm text-slate-800 outline-none font-medium"
                      />
                    </div>
                  </div>

                  {/* Kriteria 3: Tingkat Aksesibilitas */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Tingkat Aksesibilitas
                      </label>
                      <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        Bobot 20%
                      </span>
                    </div>
                    <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                      <select
                        value={accessibility}
                        onChange={(e) => setAccessibility(e.target.value)}
                        className="w-full bg-transparent py-2.5 px-3 text-xs sm:text-sm text-slate-800 outline-none cursor-pointer"
                      >
                        <option value="5">
                          5 — Sangat Mudah (Pusat Kota & Parkir Luas)
                        </option>
                        <option value="4">
                          4 — Akses Jalan Utama (Kendaraan Umum & Parkir)
                        </option>
                        <option value="3">
                          3 — Cukup Baik (Jalan 2 Arah Standar)
                        </option>
                        <option value="2">
                          2 — Akses Terbatas (Jalan Sempit / Satu Arah)
                        </option>
                        <option value="1">1 — Sulit Diakses</option>
                      </select>
                    </div>
                  </div>

                  {/* Kriteria 4: Potensi Pasar Lokal */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Potensi Pasar Lokal
                      </label>
                      <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        Bobot 25%
                      </span>
                    </div>
                    <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                      <select
                        value={marketPotential}
                        onChange={(e) => setMarketPotential(e.target.value)}
                        className="w-full bg-transparent py-2.5 px-3 text-xs sm:text-sm text-slate-800 outline-none cursor-pointer"
                      >
                        <option value="5">
                          5 — Sangat Ramai (Kawasan Bisnis & Wisata)
                        </option>
                        <option value="4">
                          4 — Ramai Tinggi (Pusat Keramaian & Mall)
                        </option>
                        <option value="3">
                          3 — Ramai Moderat (Dekat Kantor & Sekolah)
                        </option>
                        <option value="2">
                          2 — Sedang (Area Pemukiman Baru)
                        </option>
                        <option value="1">1 — Sepi</option>
                      </select>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-3">
                    <button
                      type="button"
                      className="bg-[#0A2540] hover:bg-[#071c33] active:scale-[0.99] text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all"
                    >
                      Hitung Skor Kelayakan
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="flex items-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
                    >
                      <RotateCcw size={13} />
                      <span>Reset</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: MAP PREVIEW & HASIL KALKULASI SAW */}
              <div className="lg:col-span-6 space-y-6">
                {/* 1. Pratinjau Koordinat Peta */}
                <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-[#0A2540]" />
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        Pratinjau Koordinat Peta
                      </h3>
                    </div>
                    <span className="bg-blue-50 text-blue-700 text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-md">
                      OpenStreetMap Live Tile
                    </span>
                  </div>

                  {/* Styled Map Container */}
                  <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden border border-slate-200 bg-[#E8EDF5] flex items-center justify-center shadow-inner">
                    <svg
                      className="w-full h-full object-cover opacity-80"
                      viewBox="0 0 500 240"
                    >
                      <rect width="500" height="240" fill="#E5ECF6" />
                      <path
                        d="M-20,60 Q120,40 260,80 T520,70"
                        stroke="#CBD5E1"
                        strokeWidth="8"
                        fill="none"
                      />
                      <path
                        d="M-10,180 Q180,160 320,190 T520,160"
                        stroke="#CBD5E1"
                        strokeWidth="7"
                        fill="none"
                      />
                      <path
                        d="M120,-10 Q140,120 180,260"
                        stroke="#CBD5E1"
                        strokeWidth="6"
                        fill="none"
                      />
                      <path
                        d="M360,-10 Q340,110 380,260"
                        stroke="#CBD5E1"
                        strokeWidth="6"
                        fill="none"
                      />
                      <path
                        d="M40,220 L460,30"
                        stroke="#93C5FD"
                        strokeWidth="5"
                        fill="none"
                      />
                      <circle
                        cx="260"
                        cy="90"
                        r="14"
                        fill="#3B82F6"
                        opacity="0.3"
                      />
                      <text
                        x="260"
                        y="93"
                        fontSize="11"
                        fontWeight="bold"
                        fill="#1E3A8A"
                        textAnchor="middle"
                      >
                        Semarang
                      </text>
                      <text
                        x="380"
                        y="60"
                        fontSize="9"
                        fill="#64748B"
                        textAnchor="middle"
                      >
                        Masjid Agung Jawa Tengah
                      </text>
                      <text
                        x="140"
                        y="80"
                        fontSize="9"
                        fill="#64748B"
                        textAnchor="middle"
                      >
                        Simpang Lima
                      </text>
                    </svg>

                    {/* Central Target Pin Bubble */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                      <div className="bg-[#0A2540] text-white text-[11px] font-bold py-1.5 px-3 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap border border-white/20">
                        <MapPin size={12} className="text-sky-400" />
                        <span>
                          Lokasi Evaluasi: Jl. Pandanaran No. 12 (-6.9932,
                          110.4203)
                        </span>
                      </div>
                      <div className="w-2.5 h-2.5 bg-[#0A2540] rotate-45 -mt-1 shadow-md"></div>
                      <div className="w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-md animate-ping mt-1"></div>
                    </div>

                    {/* Coordinates Overlay Bottom Left */}
                    <div className="absolute bottom-2.5 left-2.5 bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-md py-1 px-2.5 text-[10px] font-mono text-slate-700 shadow-sm flex items-center gap-1.5">
                      <Navigation size={11} className="text-blue-600" />
                      <span>
                        LAT: {coordinates.lat.toFixed(6)} | LNG:{" "}
                        {coordinates.lng.toFixed(6)}
                      </span>
                    </div>

                    {/* Zoom Buttons Bottom Right */}
                    <div className="absolute bottom-2.5 right-2.5 flex flex-col gap-1">
                      <button className="w-6 h-6 bg-white/90 hover:bg-white rounded border border-slate-300 text-slate-700 flex items-center justify-center font-bold text-xs shadow-sm">
                        +
                      </button>
                      <button className="w-6 h-6 bg-white/90 hover:bg-white rounded border border-slate-300 text-slate-700 flex items-center justify-center font-bold text-xs shadow-sm">
                        -
                      </button>
                    </div>
                  </div>

                  {/* Footnote */}
                  <p className="text-[11px] text-slate-400 leading-relaxed flex items-start gap-1.5">
                    <Info
                      size={13}
                      className="shrink-0 mt-0.5 text-slate-400"
                    />
                    <span>
                      Pratinjau visual koordinat (Peta bersifat preview;
                      perhitungan tetap valid jika peta gagal memuat)
                    </span>
                  </p>
                </div>

                {/* 2. Hasil Kalkulasi SAW Multi-Kriteria */}
                <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-sm space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <BarChart2 size={16} className="text-[#0A2540]" />
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        Hasil Kalkulasi SAW Multi-Kriteria
                      </h3>
                    </div>
                    <span className="bg-sky-50 text-blue-700 text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded">
                      Skor Preferensi (Vi)
                    </span>
                  </div>

                  {/* Main Score & Status Gauge */}
                  <div className="flex items-center gap-4 sm:gap-6 pt-1">
                    {/* Circular Score Badge */}
                    <div className="relative w-20 h-20 rounded-full border-4 border-blue-600 flex flex-col items-center justify-center shrink-0 bg-blue-50/30">
                      <span className="text-2xl font-extrabold text-slate-900 leading-none">
                        {sawResult.score.toFixed(1)}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 mt-0.5">
                        / 100
                      </span>
                    </div>

                    {/* Status Text & Reason */}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                          STATUS:{" "}
                          {sawResult.isFeasible
                            ? "LAYAK"
                            : "PERTIMBANGKAN KEMBALI"}
                        </span>
                        <span className="text-[11px] font-bold text-blue-700">
                          Tingkat Keyakinan 94%
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                        Ambang batas kelayakan rekomendasi sistem ≥ 65.0. Lokasi
                        memenuhi syarat investasi cabang UMKM.
                      </p>
                    </div>
                  </div>

                  {/* Pilar Normalisasi Kriteria (Rij) */}
                  <div className="pt-3 border-t border-slate-100 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        PILAR NORMALISASI KRITERIA (RIJ)
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Skala 0.00 — 1.00
                      </span>
                    </div>

                    {/* Bar 1: Biaya Sewa */}
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-700 text-[11px]">
                          1. Biaya Sewa
                        </span>
                        <span className="text-[11px] font-medium text-slate-600">
                          Kuat ({sawResult.r1.toFixed(2)}){" "}
                          {sawResult.r1.toFixed(2)} / 1.00
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-blue-600 h-full rounded-full transition-all duration-300"
                          style={{ width: `${sawResult.r1 * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Bar 2: Jumlah Kompetitor */}
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-700 text-[11px]">
                          2. Jumlah Kompetitor
                        </span>
                        <span className="text-[11px] font-medium text-slate-600">
                          Sedang ({sawResult.r2.toFixed(2)}){" "}
                          {sawResult.r2.toFixed(2)} / 1.00
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-[#0A2540] h-full rounded-full transition-all duration-300"
                          style={{ width: `${sawResult.r2 * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Bar 3: Aksesibilitas */}
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-700 text-[11px]">
                          3. Aksesibilitas
                        </span>
                        <span className="text-[11px] font-medium text-slate-600">
                          Kuat ({sawResult.r3.toFixed(2)}){" "}
                          {sawResult.r3.toFixed(2)} / 1.00
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-blue-600 h-full rounded-full transition-all duration-300"
                          style={{ width: `${sawResult.r3 * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Bar 4: Potensi Pasar */}
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-700 text-[11px]">
                          4. Potensi Pasar
                        </span>
                        <span className="text-[11px] font-medium text-slate-600">
                          Sedang ({sawResult.r4.toFixed(2)}){" "}
                          {sawResult.r4.toFixed(2)} / 1.00
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-[#0A2540] h-full rounded-full transition-all duration-300"
                          style={{ width: `${sawResult.r4 * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={handleSaveToHistory}
                      className="inline-flex items-center gap-1.5 bg-[#0A2540] hover:bg-[#071c33] active:scale-[0.99] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all"
                    >
                      <BookmarkPlus size={14} />
                      <span>
                        {isSaved
                          ? "Tersimpan ke Riwayat!"
                          : "Simpan ke Riwayat Analisis"}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        alert(
                          "Membuka modul perbandingan multi-lokasi (hingga 3 ruko)...",
                        )
                      }
                      className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 hover:underline"
                    >
                      <span>Bandingkan Lokasi Lain</span>
                      <ArrowRight size={14} />
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
