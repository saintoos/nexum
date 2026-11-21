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
  RotateCcw,
  BookmarkPlus,
  ArrowRight,
  Info,
  BarChart2,
  ChevronDown,
  Building2,
  Compass,
  CheckCircle2,
} from "lucide-react";

// Master Data Wilayah Pulau Jawa (6 Provinsi dan Daftar Kota/Kabupaten)
const JAVA_REGIONS = {
  "Banten": [
    "Kota Cilegon",
    "Kota Serang",
    "Kota Tangerang",
    "Kota Tangerang Selatan",
    "Kabupaten Lebak",
    "Kabupaten Pandeglang",
    "Kabupaten Serang",
    "Kabupaten Tangerang",
  ],
  "DKI Jakarta": [
    "Kota Jakarta Pusat",
    "Kota Jakarta Barat",
    "Kota Jakarta Selatan",
    "Kota Jakarta Timur",
    "Kota Jakarta Utara",
    "Kabupaten Kepulauan Seribu",
  ],
  "Jawa Barat": [
    "Kota Bandung",
    "Kota Banjar",
    "Kota Bekasi",
    "Kota Bogor",
    "Kota Cimahi",
    "Kota Cirebon",
    "Kota Depok",
    "Kota Sukabumi",
    "Kota Tasikmalaya",
    "Kabupaten Bandung",
    "Kabupaten Bandung Barat",
    "Kabupaten Bekasi",
    "Kabupaten Bogor",
    "Kabupaten Ciamis",
    "Kabupaten Cianjur",
    "Kabupaten Cirebon",
    "Kabupaten Garut",
    "Kabupaten Indramayu",
    "Kabupaten Karawang",
    "Kabupaten Kuningan",
    "Kabupaten Majalengka",
    "Kabupaten Pangandaran",
    "Kabupaten Purwakarta",
    "Kabupaten Subang",
    "Kabupaten Sukabumi",
    "Kabupaten Sumedang",
    "Kabupaten Tasikmalaya",
  ],
  "Jawa Tengah": [
    "Kota Semarang",
    "Kota Magelang",
    "Kota Pekalongan",
    "Kota Salatiga",
    "Kota Surakarta (Solo)",
    "Kota Tegal",
    "Kabupaten Banjarnegara",
    "Kabupaten Banyumas",
    "Kabupaten Batang",
    "Kabupaten Blora",
    "Kabupaten Boyolali",
    "Kabupaten Brebes",
    "Kabupaten Cilacap",
    "Kabupaten Demak",
    "Kabupaten Grobogan",
    "Kabupaten Jepara",
    "Kabupaten Karanganyar",
    "Kabupaten Kebumen",
    "Kabupaten Kendal",
    "Kabupaten Klaten",
    "Kabupaten Kudus",
    "Kabupaten Magelang",
    "Kabupaten Pati",
    "Kabupaten Pekalongan",
    "Kabupaten Pemalang",
    "Kabupaten Purbalingga",
    "Kabupaten Purworejo",
    "Kabupaten Rembang",
    "Kabupaten Semarang",
    "Kabupaten Sragen",
    "Kabupaten Sukoharjo",
    "Kabupaten Tegal",
    "Kabupaten Temanggung",
    "Kabupaten Wonogiri",
    "Kabupaten Wonosobo",
  ],
  "DI Yogyakarta": [
    "Kota Yogyakarta",
    "Kabupaten Bantul",
    "Kabupaten Gunungkidul",
    "Kabupaten Kulon Progo",
    "Kabupaten Sleman",
  ],
  "Jawa Timur": [
    "Kota Surabaya",
    "Kota Batu",
    "Kota Blitar",
    "Kota Kediri",
    "Kota Madiun",
    "Kota Malang",
    "Kota Mojokerto",
    "Kota Pasuruan",
    "Kota Probolinggo",
    "Kabupaten Bangkalan",
    "Kabupaten Banyuwangi",
    "Kabupaten Blitar",
    "Kabupaten Bojonegoro",
    "Kabupaten Bondowoso",
    "Kabupaten Gresik",
    "Kabupaten Jember",
    "Kabupaten Jombang",
    "Kabupaten Kediri",
    "Kabupaten Lamongan",
    "Kabupaten Lumajang",
    "Kabupaten Madiun",
    "Kabupaten Magetan",
    "Kabupaten Malang",
    "Kabupaten Mojokerto",
    "Kabupaten Nganjuk",
    "Kabupaten Ngawi",
    "Kabupaten Pacitan",
    "Kabupaten Pamekasan",
    "Kabupaten Pasuruan",
    "Kabupaten Ponorogo",
    "Kabupaten Probolinggo",
    "Kabupaten Sampang",
    "Kabupaten Sidoarjo",
    "Kabupaten Situbondo",
    "Kabupaten Sumenep",
    "Kabupaten Trenggalek",
    "Kabupaten Tuban",
    "Kabupaten Tulungagung",
  ],
};

export default function LocationPredictionPage({ onLogout, onNavigate }) {
  const [activeMenu, setActiveMenu] = useState("lokasi");

  // State Zonasi Wilayah (Pulau Jawa)
  const [selectedProvince, setSelectedProvince] = useState("Jawa Tengah");
  const [selectedCity, setSelectedCity] = useState("Kota Semarang");
  const [districtOrArea, setDistrictOrArea] = useState(
    "Kawasan Simpang Lima / Pandanaran"
  );

  // State Input Parameter SAW
  const [rentCost, setRentCost] = useState("4500000");
  const [competitors, setCompetitors] = useState("3");
  const [accessibility, setAccessibility] = useState("4");
  const [marketPotential, setMarketPotential] = useState("3");

  const [isSaved, setIsSaved] = useState(false);

  // Ganti provinsi & otomatis set kota pertama di provinsi tersebut
  const handleProvinceChange = (e) => {
    const prov = e.target.value;
    setSelectedProvince(prov);
    const cities = JAVA_REGIONS[prov] || [];
    setSelectedCity(cities[0] || "");
  };

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
    setSelectedProvince("Jawa Tengah");
    setSelectedCity("Kota Semarang");
    setDistrictOrArea("Kawasan Simpang Lima / Pandanaran");
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

      {/* 2. BODY LAYOUT */}
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
            {/* Header */}
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Prediksi Kelayakan Lokasi Cabang
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                Penilaian kelayakan lokasi multi-kriteria berbasis zonasi wilayah Pulau Jawa
                dan normalisasi 4 indikator empiris UMKM (Metode Simple Additive Weighting)
              </p>
            </div>

            {/* 2 COLUMNS GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* LEFT COLUMN: PARAMETER INPUT & ZONASI WILAYAH */}
              <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-sm space-y-5">
                {/* Section Header */}
                <div className="flex items-start gap-3 pb-3 border-b border-slate-100">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-slate-900">
                      Zonasi Wilayah & Parameter Input
                    </h2>
                    <p className="text-[11px] sm:text-xs text-slate-500">
                      Pilih provinsi dan kota/kabupaten di Pulau Jawa untuk target ekspansi
                    </p>
                  </div>
                </div>

                {/* Sub-section 1: Pemilihan Wilayah (Pulau Jawa) */}
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                      <Compass size={15} className="text-blue-600" />
                      <span>Wilayah Administratif (Pulau Jawa)</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleUseSample}
                      className="text-[11px] text-blue-700 hover:text-blue-800 font-semibold hover:underline"
                    >
                      Reset ke Sampel
                    </button>
                  </div>

                  {/* Pilihan Provinsi */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Provinsi (Pulau Jawa) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                      <div className="pl-3.5 pr-1 text-slate-400">
                        <Building2 size={16} />
                      </div>
                      <select
                        value={selectedProvince}
                        onChange={handleProvinceChange}
                        className="w-full bg-transparent py-2.5 px-2 text-xs sm:text-sm text-slate-800 outline-none cursor-pointer font-medium appearance-none pr-8"
                      >
                        {Object.keys(JAVA_REGIONS).map((prov) => (
                          <option key={prov} value={prov}>
                            {prov}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-3 text-slate-400 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Pilihan Kota / Kabupaten (Dinamis berdasarkan Provinsi) */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Kota / Kabupaten <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                      <div className="pl-3.5 pr-1 text-slate-400">
                        <MapPin size={16} />
                      </div>
                      <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="w-full bg-transparent py-2.5 px-2 text-xs sm:text-sm text-slate-800 outline-none cursor-pointer font-medium appearance-none pr-8"
                      >
                        {(JAVA_REGIONS[selectedProvince] || []).map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-3 text-slate-400 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Kawasan Spesifik / Nama Jalan */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Kawasan Spesifik / Nama Jalan / Titik Gerai (Opsional)
                    </label>
                    <input
                      type="text"
                      value={districtOrArea}
                      onChange={(e) => setDistrictOrArea(e.target.value)}
                      placeholder="Contoh: Kawasan Simpang Lima, Jl. Pandanaran, Ruko Dago..."
                      className="w-full bg-[#F1F4F9] border border-transparent focus:border-blue-500 focus:bg-white px-3 py-2.5 rounded-lg text-xs sm:text-sm outline-none text-slate-800"
                    />
                  </div>
                </div>

                {/* Sub-section 2: Indikator Pendukung Lokasi (Kriteria SAW) */}
                <div className="pt-3 border-t border-slate-100 space-y-4">
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

              {/* RIGHT COLUMN: RINGKASAN WILAYAH & HASIL KALKULASI SAW */}
              <div className="lg:col-span-6 space-y-6">
                {/* 1. Ringkasan Wilayah Target Ekspansi (Pengganti Peta & Koordinat) */}
                <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-[#0A2540]" />
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        Wilayah Target Ekspansi Terpilih
                      </h3>
                    </div>
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-md flex items-center gap-1">
                      <CheckCircle2 size={11} className="text-emerald-600" />
                      Zonasi Pulau Jawa
                    </span>
                  </div>

                  {/* Detail Box Wilayah */}
                  <div className="bg-[#F8FAFD] border border-slate-200/70 rounded-xl p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                          Provinsi
                        </span>
                        <span className="font-extrabold text-slate-900 text-sm">
                          {selectedProvince}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                          Kota / Kabupaten
                        </span>
                        <span className="font-extrabold text-blue-700 text-sm">
                          {selectedCity}
                        </span>
                      </div>
                    </div>

                    {districtOrArea && (
                      <div className="pt-2.5 border-t border-slate-200/60 text-xs">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                          Kawasan / Titik Gerai
                        </span>
                        <span className="font-medium text-slate-700">
                          {districtOrArea}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-[11px] text-slate-500 leading-relaxed flex items-start gap-1.5">
                    <Info size={13} className="shrink-0 mt-0.5 text-blue-600" />
                    <span>
                      Wilayah terpilih akan digunakan sebagai acuan penetapan matriks
                      kelayakan lokasi cabang melalui pembobotan 4 kriteria empiris SAW di bawah.
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
