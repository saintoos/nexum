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
  ArrowLeft,
  Info,
  BarChart2,
  ChevronDown,
  Building2,
  Compass,
  CheckCircle2,
  SlidersHorizontal,
  Trophy,
  Sparkles,
  Plus,
  Trash2,
  Check,
  Award,
  Layers,
  Scale,
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
  const [activeSubView, setActiveSubView] = useState("single"); // 'single' | 'compare'

  // State Zonasi Wilayah (Pulau Jawa) - Analisis Tunggal
  const [selectedProvince, setSelectedProvince] = useState("Jawa Tengah");
  const [selectedCity, setSelectedCity] = useState("Kota Semarang");
  const [districtOrArea, setDistrictOrArea] = useState(
    "Kawasan Simpang Lima / Pandanaran"
  );

  // State Input Parameter SAW - Analisis Tunggal
  const [rentCost, setRentCost] = useState("4500000");
  const [competitors, setCompetitors] = useState("3");
  const [accessibility, setAccessibility] = useState("4");
  const [marketPotential, setMarketPotential] = useState("3");
  const [isSaved, setIsSaved] = useState(false);

  // State Kandidat untuk Bandingkan Lokasi (Maksimal 3 Lokasi)
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: "Lokasi 1 (Pandanaran)",
      province: "Jawa Tengah",
      city: "Kota Semarang",
      district: "Kawasan Simpang Lima / Pandanaran",
      rentCost: "4500000",
      competitors: "3",
      accessibility: "4",
      marketPotential: "3",
    },
    {
      id: 2,
      name: "Lokasi 2 (Tembalang)",
      province: "Jawa Tengah",
      city: "Kota Semarang",
      district: "Area Kampus Undip Tembalang",
      rentCost: "3200000",
      competitors: "5",
      accessibility: "3",
      marketPotential: "4",
    },
    {
      id: 3,
      name: "Lokasi 3 (Jl. Pemuda)",
      province: "Jawa Tengah",
      city: "Kota Semarang",
      district: "Kawasan Bisnis Jl. Pemuda",
      rentCost: "5800000",
      competitors: "2",
      accessibility: "5",
      marketPotential: "4",
    },
  ]);
  const [isCompareSaved, setIsCompareSaved] = useState(false);

  // Ganti provinsi & otomatis set kota pertama di provinsi tersebut (Tunggal)
  const handleProvinceChange = (e) => {
    const prov = e.target.value;
    setSelectedProvince(prov);
    const cities = JAVA_REGIONS[prov] || [];
    setSelectedCity(cities[0] || "");
  };

  // Bobot SAW Tunggal: Biaya Sewa 30%, Kompetitor 25%, Aksesibilitas 20%, Potensi Pasar 25%
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

  // Kalkulasi Algoritma SAW Multi-Kandidat (Maks 3 Lokasi)
  const calculateMultiSaw = () => {
    if (!candidates || candidates.length === 0) return [];

    const parsed = candidates.map((c) => ({
      ...c,
      rentVal: Math.max(100000, parseFloat(c.rentCost) || 4500000),
      compVal: Math.max(0, parseInt(c.competitors, 10) || 0),
      accessVal: Math.max(1, Math.min(5, parseInt(c.accessibility, 10) || 3)),
      marketVal: Math.max(1, Math.min(5, parseInt(c.marketPotential, 10) || 3)),
    }));

    const minRent = Math.min(...parsed.map((p) => p.rentVal));
    const minComp = Math.min(...parsed.map((p) => p.compVal));
    const maxAccess = Math.max(...parsed.map((p) => p.accessVal));
    const maxMarket = Math.max(...parsed.map((p) => p.marketVal));

    const wRent = 0.3;
    const wComp = 0.25;
    const wAccess = 0.2;
    const wMarket = 0.25;

    const evaluated = parsed.map((item) => {
      // Normalisasi Cost: Min / Nilai
      const rRent = minRent / item.rentVal;
      // Normalisasi Cost: (Min + 1) / (Nilai + 1) untuk menangani nilai 0 kompetitor
      const rComp = (minComp + 1) / (item.compVal + 1);
      // Normalisasi Benefit: Nilai / Max
      const rAccess = item.accessVal / (maxAccess || 5);
      const rMarket = item.marketVal / (maxMarket || 5);

      const scoreVal =
        (rRent * wRent + rComp * wComp + rAccess * wAccess + rMarket * wMarket) *
        100;
      const finalScore = Math.round(scoreVal * 10) / 10;

      return {
        ...item,
        rRent: Math.round(rRent * 100) / 100,
        rComp: Math.round(rComp * 100) / 100,
        rAccess: Math.round(rAccess * 100) / 100,
        rMarket: Math.round(rMarket * 100) / 100,
        score: finalScore,
        isFeasible: finalScore >= 65.0,
      };
    });

    const sorted = [...evaluated].sort((a, b) => b.score - a.score);
    const ranksMap = {};
    sorted.forEach((item, index) => {
      ranksMap[item.id] = index + 1;
    });

    return evaluated.map((item) => ({
      ...item,
      rank: ranksMap[item.id],
      isWinner: ranksMap[item.id] === 1,
    }));
  };

  const multiSawResults = calculateMultiSaw();
  const winnerCandidate =
    multiSawResults.find((c) => c.isWinner) || multiSawResults[0];

  // Handler Perubahan Input Kandidat Komparasi
  const handleUpdateCandidate = (id, field, value) => {
    setCandidates((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          const updated = { ...c, [field]: value };
          if (field === "province") {
            const cities = JAVA_REGIONS[value] || [];
            updated.city = cities[0] || "";
          }
          return updated;
        }
        return c;
      })
    );
  };

  // Tambah lokasi perbandingan (Maksimal 3 lokasi)
  const handleAddCandidate = () => {
    if (candidates.length >= 3) {
      alert("Maksimal perbandingan adalah 3 lokasi.");
      return;
    }
    const nextNum = candidates.length + 1;
    const newCand = {
      id: Date.now(),
      name: `Lokasi ${nextNum}`,
      province: selectedProvince,
      city: selectedCity,
      district: "Kawasan Ruko Alternatif Baru",
      rentCost: "4000000",
      competitors: "3",
      accessibility: "3",
      marketPotential: "3",
    };
    setCandidates((prev) => [...prev, newCand]);
  };

  // Hapus lokasi perbandingan (Minimal 2 lokasi)
  const handleRemoveCandidate = (id) => {
    if (candidates.length <= 2) {
      alert("Minimal perbandingan adalah 2 lokasi.");
      return;
    }
    setCandidates((prev) => prev.filter((c) => c.id !== id));
  };

  // Reset kandidat perbandingan ke default 3 lokasi
  const handleResetCandidates = () => {
    setCandidates([
      {
        id: 1,
        name: "Lokasi 1 (Pandanaran)",
        province: "Jawa Tengah",
        city: "Kota Semarang",
        district: "Kawasan Simpang Lima / Pandanaran",
        rentCost: "4500000",
        competitors: "3",
        accessibility: "4",
        marketPotential: "3",
      },
      {
        id: 2,
        name: "Lokasi 2 (Tembalang)",
        province: "Jawa Tengah",
        city: "Kota Semarang",
        district: "Area Kampus Undip Tembalang",
        rentCost: "3200000",
        competitors: "5",
        accessibility: "3",
        marketPotential: "4",
      },
      {
        id: 3,
        name: "Lokasi 3 (Jl. Pemuda)",
        province: "Jawa Tengah",
        city: "Kota Semarang",
        district: "Kawasan Bisnis Jl. Pemuda",
        rentCost: "5800000",
        competitors: "2",
        accessibility: "5",
        marketPotential: "4",
      },
    ]);
  };

  // Terapkan kandidat pemenang ke form analisis tunggal
  const handleApplyWinnerToSingle = (cand) => {
    setSelectedProvince(cand.province);
    setSelectedCity(cand.city);
    setDistrictOrArea(cand.district);
    setRentCost(cand.rentCost);
    setCompetitors(cand.competitors);
    setAccessibility(cand.accessibility);
    setMarketPotential(cand.marketPotential);
    setActiveSubView("single");
  };

  // Simpan hasil komparasi ke Riwayat Analisis
  const handleSaveCompareToHistory = () => {
    try {
      const stored = JSON.parse(
        localStorage.getItem("nexum_location_history") || "[]"
      );
      const now = new Date();
      const dateStr = now.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      const newEntries = multiSawResults.map((c) => ({
        id: `LOC-${Date.now().toString().slice(-5)}-${c.rank}`,
        date: dateStr,
        name: `[Komparasi #${c.rank}] ${c.name} - ${c.district}`,
        category: `${c.city} • ${c.province}`,
        coordinates: "-",
        score: c.score,
        status: c.isFeasible ? "LAYAK" : "TIDAK LAYAK",
        factors: `Peringkat ${c.rank} dari ${multiSawResults.length} Lokasi | Sewa Rp ${Number(
          c.rentCost
        ).toLocaleString("id-ID")} | ${c.competitors} Kompetitor`,
      }));

      localStorage.setItem(
        "nexum_location_history",
        JSON.stringify([...newEntries, ...stored])
      );
    } catch (e) {
      console.warn("Gagal menyimpan komparasi ke riwayat:", e);
    }

    setIsCompareSaved(true);
    setTimeout(() => setIsCompareSaved(false), 3000);
  };

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
    try {
      const stored = JSON.parse(
        localStorage.getItem("nexum_location_history") || "[]"
      );
      const now = new Date();
      const dateStr = now.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      const newEntry = {
        id: `LOC-${Date.now().toString().slice(-6)}`,
        date: dateStr,
        name: districtOrArea
          ? `Area ${districtOrArea}`
          : `Lokasi di ${selectedCity || "Semarang"}`,
        category: `${selectedCity || "Kota Semarang"} • ${
          selectedProvince || "Jawa Tengah"
        }`,
        coordinates: "-",
        score: sawResult.score,
        status: sawResult.isFeasible ? "LAYAK" : "TIDAK LAYAK",
        factors: `Biaya Sewa (Rp ${parseInt(
          rentCost || 0,
          10
        ).toLocaleString("id-ID")}) / Kompetitor (${competitors || 0} Usaha)`,
      };

      localStorage.setItem(
        "nexum_location_history",
        JSON.stringify([newEntry, ...stored])
      );
    } catch (e) {
      console.warn("Gagal menyimpan ke riwayat lokasi:", e);
    }

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
            {/* Header & Sub-view Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Prediksi Kelayakan Lokasi Cabang
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                  Penilaian kelayakan lokasi multi-kriteria berbasis zonasi wilayah Pulau Jawa
                  dan normalisasi 4 indikator empiris UMKM (Metode Simple Additive Weighting)
                </p>
              </div>

              {/* Toggle Mode: Analisis Tunggal vs Bandingkan Multi-Lokasi */}
              <div className="flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200/80 shrink-0 self-start sm:self-center">
                <button
                  type="button"
                  onClick={() => setActiveSubView("single")}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                    activeSubView === "single"
                      ? "bg-white text-[#0A2540] shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <MapPin size={14} />
                  <span>Analisis Tunggal</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSubView("compare")}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                    activeSubView === "compare"
                      ? "bg-[#0A2540] text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <SlidersHorizontal size={14} />
                  <span>Bandingkan Lokasi</span>
                  <span
                    className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full ${
                      activeSubView === "compare"
                        ? "bg-blue-400/30 text-blue-100"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    Maks 3 Lokasi
                  </span>
                </button>
              </div>
            </div>

            {/* VIEW 1: ANALISIS LOKASI TUNGGAL */}
            {activeSubView === "single" ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start animate-fadeIn">
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
                        placeholder="Contoh: Kawasan Simpang Lima / Ruko Pandanaran No. 12"
                        className="w-full bg-[#F1F4F9] border border-transparent focus:border-blue-500 focus:bg-white rounded-lg py-2.5 px-3.5 text-xs sm:text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Sub-section 2: Parameter Kriteria SAW */}
                  <div className="pt-3 border-t border-slate-100 space-y-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                      <BarChart2 size={15} className="text-blue-600" />
                      <span>Parameter Kriteria Empiris SAW</span>
                    </div>

                    {/* Biaya Sewa */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          Estimasi Biaya Sewa (Rp / Bulan)
                        </label>
                        <span className="text-[11px] text-slate-500 font-medium">
                          Kriteria Biaya (Cost) - Bobot 30%
                        </span>
                      </div>
                      <input
                        type="number"
                        min="500000"
                        step="100000"
                        value={rentCost}
                        onChange={(e) => setRentCost(e.target.value)}
                        placeholder="4500000"
                        className="w-full bg-[#F1F4F9] border border-transparent focus:border-blue-500 focus:bg-white rounded-lg py-2.5 px-3.5 text-xs sm:text-sm text-slate-800 outline-none transition-all"
                      />
                      <div className="text-[11px] text-slate-400 mt-1">
                        Rp {parseInt(rentCost || 0, 10).toLocaleString("id-ID")} / bulan
                      </div>
                    </div>

                    {/* Jumlah Kompetitor Sejenis */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          Jumlah Kompetitor Sejenis (Radius 1 km)
                        </label>
                        <span className="text-[11px] text-slate-500 font-medium">
                          Kriteria Biaya (Cost) - Bobot 25%
                        </span>
                      </div>
                      <input
                        type="number"
                        min="0"
                        max="20"
                        value={competitors}
                        onChange={(e) => setCompetitors(e.target.value)}
                        className="w-full bg-[#F1F4F9] border border-transparent focus:border-blue-500 focus:bg-white rounded-lg py-2.5 px-3.5 text-xs sm:text-sm text-slate-800 outline-none transition-all"
                      />
                      <div className="text-[11px] text-slate-400 mt-1">
                        {competitors <= 1
                          ? "Persaingan Rendah (Sangat Menguntungkan)"
                          : competitors <= 3
                          ? "Persaingan Sedang"
                          : "Persaingan Ketat"}
                      </div>
                    </div>

                    {/* Aksesibilitas */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          Tingkat Aksesibilitas & Parkir (1 - 5)
                        </label>
                        <span className="text-[11px] text-slate-500 font-medium">
                          Kriteria Manfaat (Benefit) - Bobot 20%
                        </span>
                      </div>
                      <select
                        value={accessibility}
                        onChange={(e) => setAccessibility(e.target.value)}
                        className="w-full bg-[#F1F4F9] border border-transparent focus:border-blue-500 focus:bg-white rounded-lg py-2.5 px-3.5 text-xs sm:text-sm text-slate-800 outline-none transition-all cursor-pointer"
                      >
                        <option value="1">1 - Sangat Sulit (Gang Sempit, Tanpa Parkir)</option>
                        <option value="2">2 - Cukup Sulit (Jalan 1 Arah, Parkir Terbatas)</option>
                        <option value="3">3 - Sedang (Jalan 2 Arah Standar)</option>
                        <option value="4">4 - Baik (Jalan Lebar, Akses Motor & Mobil Mudah)</option>
                        <option value="5">5 - Sangat Baik (Jalan Protokol, Lahan Parkir Luas)</option>
                      </select>
                    </div>

                    {/* Potensi Pasar */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          Potensi Pasar & Keramaian (1 - 5)
                        </label>
                        <span className="text-[11px] text-slate-500 font-medium">
                          Kriteria Manfaat (Benefit) - Bobot 25%
                        </span>
                      </div>
                      <select
                        value={marketPotential}
                        onChange={(e) => setMarketPotential(e.target.value)}
                        className="w-full bg-[#F1F4F9] border border-transparent focus:border-blue-500 focus:bg-white rounded-lg py-2.5 px-3.5 text-xs sm:text-sm text-slate-800 outline-none transition-all cursor-pointer"
                      >
                        <option value="1">1 - Sangat Sepi (Pemukiman Jarang)</option>
                        <option value="2">2 - Cukup Sepi (Aktivitas Musiman)</option>
                        <option value="3">3 - Sedang (Area Perumahan / Perkantoran Padat)</option>
                        <option value="4">4 - Ramai (Dekat Kampus / Pusat Perbelanjaan)</option>
                        <option value="5">5 - Sangat Ramai (Pusat Kota / Titik Hub Transit)</option>
                      </select>
                    </div>
                  </div>

                  {/* Reset Button */}
                  <div className="flex items-center justify-end pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium"
                    >
                      <RotateCcw size={13} />
                      <span>Kembalikan Default</span>
                    </button>
                  </div>
                </div>

                {/* RIGHT COLUMN: PREDIKSI & SCORECARD SAW */}
                <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-sm space-y-6">
                  {/* Status Ringkasan Hasil */}
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        HASIL EVALUASI SAW
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                        {districtOrArea || `Area ${selectedCity}`}
                      </h3>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {selectedCity}, {selectedProvince}
                      </div>
                    </div>

                    <div
                      className={`px-3 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1.5 ${
                        sawResult.isFeasible
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "bg-red-50 text-red-700 border border-red-200"
                      }`}
                    >
                      <CheckCircle2 size={14} />
                      <span>{sawResult.isFeasible ? "LAYAK DIBUKA" : "TIDAK LAYAK"}</span>
                    </div>
                  </div>

                  {/* Indikator Skor Utama */}
                  <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Indeks Kelayakan Spasial (Skor SAW)
                      </div>
                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="text-3xl sm:text-4xl font-extrabold text-[#0A2540]">
                          {sawResult.score}
                        </span>
                        <span className="text-xs text-slate-400 font-bold">/ 100</span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        Ambang batas kelayakan sistem: &ge; 65.0
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-semibold text-slate-600">
                        Rekomendasi
                      </div>
                      <div className="text-xs font-bold text-[#0A2540] mt-0.5">
                        {sawResult.score >= 75
                          ? "Sangat Prioritas"
                          : sawResult.score >= 65
                          ? "Layak Dipertimbangkan"
                          : "Cari Alternatif Lain"}
                      </div>
                    </div>
                  </div>

                  {/* Uraian Normalisasi Matriks Keputusan */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-slate-800">
                      Rincian Normalisasi Matriks Keputusan (Rij):
                    </div>

                    {/* R1: Biaya Sewa */}
                    <div>
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="text-slate-600">
                          Biaya Sewa (Cost - 30%)
                        </span>
                        <span className="text-[11px] font-medium text-slate-600">
                          {sawResult.r1.toFixed(2)} / 1.00
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-[#0A2540] h-full rounded-full transition-all duration-300"
                          style={{ width: `${sawResult.r1 * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* R2: Kompetitor */}
                    <div>
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="text-slate-600">
                          Kepadatan Kompetitor (Cost - 25%)
                        </span>
                        <span className="text-[11px] font-medium text-slate-600">
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

                    {/* R3: Aksesibilitas */}
                    <div>
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="text-slate-600">
                          Aksesibilitas & Parkir (Benefit - 20%)
                        </span>
                        <span className="text-[11px] font-medium text-slate-600">
                          {sawResult.r3.toFixed(2)} / 1.00
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-[#0A2540] h-full rounded-full transition-all duration-300"
                          style={{ width: `${sawResult.r3 * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* R4: Potensi Pasar */}
                    <div>
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="text-slate-600">
                          Potensi Pasar & Keramaian (Benefit - 25%)
                        </span>
                        <span className="text-[11px] font-medium text-slate-600">
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
                      onClick={() => setActiveSubView("compare")}
                      className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <span>Bandingkan Lokasi Lain</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* VIEW 2: BANDINGKAN MULTI-LOKASI (MAKSIMAL 3 LOKASI - INPUT SAMA PERSIS SEPERTI MANUAL) */
              <div className="space-y-6 animate-fadeIn">
                {/* Top Control Bar */}
                <div className="bg-white rounded-xl border border-slate-200/80 p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                      <Scale size={20} />
                    </div>
                    <div>
                      <h2 className="text-sm sm:text-base font-bold text-slate-900">
                        Bandingkan Calon Lokasi (Maksimal 3 Lokasi)
                      </h2>
                      <p className="text-[11px] sm:text-xs text-slate-500">
                        Isi form parameter calon ruko seperti memasukkan manual, lalu sistem akan membandingkan dan meranking menggunakan Metode SAW.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap self-end sm:self-auto">
                    {candidates.length < 3 ? (
                      <button
                        type="button"
                        onClick={handleAddCandidate}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200/80 rounded-lg transition-all"
                      >
                        <Plus size={14} />
                        <span>Tambah Lokasi 3 (Maks 3)</span>
                      </button>
                    ) : (
                      <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                        3 dari 3 Lokasi Aktif
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={handleResetCandidates}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                      title="Kembalikan ke data sampel awal"
                    >
                      <RotateCcw size={13} />
                      <span>Reset Sampel</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveSubView("single")}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-200 hover:bg-slate-300 rounded-lg transition-colors"
                    >
                      <ArrowLeft size={13} />
                      <span>Kembali ke Analisis Tunggal</span>
                    </button>
                  </div>
                </div>

                {/* HIGHLIGHT REKOMENDASI TERBAIK (PERINGKAT 1 HASIL SAW) */}
                {winnerCandidate && (
                  <div className="bg-gradient-to-r from-[#0A2540] via-[#0d3154] to-[#133E68] text-white rounded-xl p-5 sm:p-6 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="bg-amber-400 text-slate-900 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                          <Trophy size={11} />
                          REKOMENDASI TERBAIK (PERINGKAT 1)
                        </span>
                        <span className="text-xs text-blue-200 font-mono font-bold">
                          Skor SAW: {winnerCandidate.score} / 100
                        </span>
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-400/30">
                          {winnerCandidate.isFeasible ? "LAYAK DIBUKA" : "TIDAK LAYAK"}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-white">
                        {winnerCandidate.name} ({winnerCandidate.district})
                      </h3>
                      <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                        Berdasarkan perbandingan matriks normalisasi SAW dari {candidates.length} calon ruko, lokasi ini menempati urutan pertama dengan kombinasi sewa Rp {Number(winnerCandidate.rentCost).toLocaleString("id-ID")} dan potensi pasar {winnerCandidate.city}.
                      </p>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleApplyWinnerToSingle(winnerCandidate)}
                        className="inline-flex items-center gap-1.5 bg-white text-[#0A2540] hover:bg-slate-100 text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition-all"
                      >
                        <Check size={14} className="text-emerald-600 font-black" />
                        <span>Terapkan ke Form Utama</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* FORM INPUT MANUAL UNTUK MASING-MASING LOKASI (MAKSIMAL 3 LOKASI) */}
                <div
                  className={`grid grid-cols-1 ${
                    candidates.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
                  } gap-5`}
                >
                  {candidates.map((cand, idx) => {
                    const result =
                      multiSawResults.find((r) => r.id === cand.id) || {};
                    const isRank1 = result.rank === 1;

                    return (
                      <div
                        key={cand.id}
                        className={`bg-white rounded-xl border p-5 shadow-sm space-y-4 flex flex-col justify-between transition-all ${
                          isRank1
                            ? "border-amber-400 ring-2 ring-amber-400/20"
                            : "border-slate-200/80"
                        }`}
                      >
                        <div>
                          {/* Header Kartu Lokasi */}
                          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                              <span
                                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                                  isRank1
                                    ? "bg-amber-400 text-slate-900"
                                    : "bg-slate-100 text-slate-600"
                                }`}
                              >
                                #{result.rank || idx + 1}
                              </span>
                              <div>
                                <input
                                  type="text"
                                  value={cand.name}
                                  onChange={(e) =>
                                    handleUpdateCandidate(
                                      cand.id,
                                      "name",
                                      e.target.value
                                    )
                                  }
                                  className="text-xs font-bold text-slate-900 bg-transparent border-b border-dashed border-slate-300 focus:border-blue-500 outline-none max-w-[160px]"
                                  title="Klik untuk mengubah nama label lokasi"
                                />
                                <div className="text-[10px] text-slate-400">
                                  {isRank1
                                    ? "🏆 Pilihan Paling Optimal"
                                    : `Peringkat #${result.rank}`}
                                </div>
                              </div>
                            </div>

                            {/* Tombol Hapus jika lebih dari 2 lokasi */}
                            {candidates.length > 2 && (
                              <button
                                type="button"
                                onClick={() => handleRemoveCandidate(cand.id)}
                                className="text-slate-400 hover:text-red-600 p-1 rounded-md hover:bg-red-50 transition-colors"
                                title="Hapus lokasi ini dari perbandingan"
                              >
                                <Trash2 size={15} />
                              </button>
                            )}
                          </div>

                          {/* 1. Pemilihan Wilayah (Sama seperti manual) */}
                          <div className="space-y-3 pt-3">
                            <div className="text-[11px] font-bold text-slate-800 flex items-center gap-1">
                              <Compass size={13} className="text-blue-600" />
                              <span>Wilayah Administratif</span>
                            </div>

                            {/* Provinsi */}
                            <div>
                              <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                                Provinsi <span className="text-red-500">*</span>
                              </label>
                              <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                                <div className="pl-3 pr-1 text-slate-400">
                                  <Building2 size={14} />
                                </div>
                                <select
                                  value={cand.province}
                                  onChange={(e) =>
                                    handleUpdateCandidate(
                                      cand.id,
                                      "province",
                                      e.target.value
                                    )
                                  }
                                  className="w-full bg-transparent py-2 px-2 text-xs text-slate-800 outline-none cursor-pointer font-medium appearance-none pr-7"
                                >
                                  {Object.keys(JAVA_REGIONS).map((p) => (
                                    <option key={p} value={p}>
                                      {p}
                                    </option>
                                  ))}
                                </select>
                                <ChevronDown
                                  size={14}
                                  className="absolute right-2.5 text-slate-400 pointer-events-none"
                                />
                              </div>
                            </div>

                            {/* Kota / Kabupaten */}
                            <div>
                              <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                                Kota / Kabupaten <span className="text-red-500">*</span>
                              </label>
                              <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                                <div className="pl-3 pr-1 text-slate-400">
                                  <MapPin size={14} />
                                </div>
                                <select
                                  value={cand.city}
                                  onChange={(e) =>
                                    handleUpdateCandidate(
                                      cand.id,
                                      "city",
                                      e.target.value
                                    )
                                  }
                                  className="w-full bg-transparent py-2 px-2 text-xs text-slate-800 outline-none cursor-pointer font-medium appearance-none pr-7 truncate"
                                >
                                  {(JAVA_REGIONS[cand.province] || []).map((c) => (
                                    <option key={c} value={c}>
                                      {c}
                                    </option>
                                  ))}
                                </select>
                                <ChevronDown
                                  size={14}
                                  className="absolute right-2.5 text-slate-400 pointer-events-none"
                                />
                              </div>
                            </div>

                            {/* Kawasan Spesifik */}
                            <div>
                              <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                                Kawasan / Titik Gerai
                              </label>
                              <input
                                type="text"
                                value={cand.district}
                                onChange={(e) =>
                                  handleUpdateCandidate(
                                    cand.id,
                                    "district",
                                    e.target.value
                                  )
                                }
                                placeholder="Contoh: Ruko Pandanaran No. 12"
                                className="w-full bg-[#F1F4F9] border border-transparent focus:border-blue-500 focus:bg-white rounded-lg py-2 px-3 text-xs text-slate-800 outline-none transition-all placeholder:text-slate-400"
                              />
                            </div>
                          </div>

                          {/* 2. Parameter Kriteria Empiris SAW (Sama persis dengan input manual) */}
                          <div className="space-y-3 pt-3 border-t border-slate-100 mt-3">
                            <div className="text-[11px] font-bold text-slate-800 flex items-center gap-1">
                              <BarChart2 size={13} className="text-blue-600" />
                              <span>Parameter Kriteria SAW</span>
                            </div>

                            {/* Estimasi Biaya Sewa */}
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <label className="text-[11px] font-semibold text-slate-700">
                                  Biaya Sewa (Rp / Bulan)
                                </label>
                                <span className="text-[10px] text-slate-400">
                                  Cost • 30%
                                </span>
                              </div>
                              <input
                                type="number"
                                min="500000"
                                step="100000"
                                value={cand.rentCost}
                                onChange={(e) =>
                                  handleUpdateCandidate(
                                    cand.id,
                                    "rentCost",
                                    e.target.value
                                  )
                                }
                                className="w-full bg-[#F1F4F9] border border-transparent focus:border-blue-500 focus:bg-white rounded-lg py-2 px-3 text-xs text-slate-800 font-semibold outline-none transition-all"
                              />
                              <div className="text-[10px] text-slate-400 mt-0.5">
                                Rp {Number(cand.rentCost || 0).toLocaleString("id-ID")} / bulan
                              </div>
                            </div>

                            {/* Jumlah Kompetitor Sejenis */}
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <label className="text-[11px] font-semibold text-slate-700">
                                  Kompetitor Radius 1 km
                                </label>
                                <span className="text-[10px] text-slate-400">
                                  Cost • 25%
                                </span>
                              </div>
                              <input
                                type="number"
                                min="0"
                                max="20"
                                value={cand.competitors}
                                onChange={(e) =>
                                  handleUpdateCandidate(
                                    cand.id,
                                    "competitors",
                                    e.target.value
                                  )
                                }
                                className="w-full bg-[#F1F4F9] border border-transparent focus:border-blue-500 focus:bg-white rounded-lg py-2 px-3 text-xs text-slate-800 outline-none transition-all"
                              />
                              <div className="text-[10px] text-slate-400 mt-0.5">
                                {Number(cand.competitors) <= 1
                                  ? "Persaingan Rendah (Sangat Baik)"
                                  : Number(cand.competitors) <= 3
                                  ? "Persaingan Sedang"
                                  : "Persaingan Ketat"}
                              </div>
                            </div>

                            {/* Tingkat Aksesibilitas & Parkir */}
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <label className="text-[11px] font-semibold text-slate-700">
                                  Aksesibilitas & Parkir (1 - 5)
                                </label>
                                <span className="text-[10px] text-slate-400">
                                  Benefit • 20%
                                </span>
                              </div>
                              <select
                                value={cand.accessibility}
                                onChange={(e) =>
                                  handleUpdateCandidate(
                                    cand.id,
                                    "accessibility",
                                    e.target.value
                                  )
                                }
                                className="w-full bg-[#F1F4F9] border border-transparent focus:border-blue-500 focus:bg-white rounded-lg py-2 px-3 text-xs text-slate-800 outline-none transition-all cursor-pointer"
                              >
                                <option value="1">1 - Sangat Sulit (Gang Sempit, Tanpa Parkir)</option>
                                <option value="2">2 - Cukup Sulit (Jalan 1 Arah, Parkir Terbatas)</option>
                                <option value="3">3 - Sedang (Jalan 2 Arah Standar)</option>
                                <option value="4">4 - Baik (Jalan Lebar, Akses Motor & Mobil Mudah)</option>
                                <option value="5">5 - Sangat Baik (Jalan Protokol, Lahan Parkir Luas)</option>
                              </select>
                            </div>

                            {/* Potensi Pasar & Keramaian */}
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <label className="text-[11px] font-semibold text-slate-700">
                                  Potensi Pasar & Keramaian (1 - 5)
                                </label>
                                <span className="text-[10px] text-slate-400">
                                  Benefit • 25%
                                </span>
                              </div>
                              <select
                                value={cand.marketPotential}
                                onChange={(e) =>
                                  handleUpdateCandidate(
                                    cand.id,
                                    "marketPotential",
                                    e.target.value
                                  )
                                }
                                className="w-full bg-[#F1F4F9] border border-transparent focus:border-blue-500 focus:bg-white rounded-lg py-2 px-3 text-xs text-slate-800 outline-none transition-all cursor-pointer"
                              >
                                <option value="1">1 - Sangat Sepi (Pemukiman Jarang)</option>
                                <option value="2">2 - Cukup Sepi (Aktivitas Musiman)</option>
                                <option value="3">3 - Sedang (Area Perumahan / Perkantoran Padat)</option>
                                <option value="4">4 - Ramai (Dekat Kampus / Pusat Perbelanjaan)</option>
                                <option value="5">5 - Sangat Ramai (Pusat Kota / Titik Hub Transit)</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Card Score Footer */}
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                          <div>
                            <div className="text-[10px] font-bold uppercase text-slate-400">
                              SKOR PREFERENSI SAW
                            </div>
                            <div className="text-xl font-extrabold text-[#0A2540]">
                              {result.score}{" "}
                              <span className="text-xs text-slate-400 font-normal">/ 100</span>
                            </div>
                          </div>

                          <div className="text-right">
                            <span
                              className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                                result.isFeasible
                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`}
                            >
                              {result.isFeasible ? "LAYAK" : "TIDAK LAYAK"}
                            </span>
                            <div className="text-[10px] text-slate-400 font-bold mt-1">
                              Peringkat #{result.rank}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* MATRIKS KOMPARASI NORMALISASI SAW (BERDAMPINGAN) */}
                <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
                    <div className="flex items-center gap-2">
                      <BarChart2 size={16} className="text-blue-600" />
                      <h3 className="text-sm font-bold text-slate-900">
                        Matriks Komparasi Normalisasi SAW Terperinci (Maksimal 3 Lokasi)
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={handleSaveCompareToHistory}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#0A2540] hover:bg-[#071c33] active:scale-[0.99] rounded-lg shadow-sm transition-all self-start sm:self-auto"
                    >
                      <BookmarkPlus size={14} />
                      <span>
                        {isCompareSaved
                          ? "Tersimpan ke Riwayat!"
                          : "Simpan Komparasi ke Riwayat Analisis"}
                      </span>
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                          <th className="py-2.5 px-3">INDIKATOR & BOBOT</th>
                          {multiSawResults.map((c) => (
                            <th key={c.id} className="py-2.5 px-4 text-center">
                              <span className="font-bold text-slate-800">
                                {c.name}
                              </span>
                              <div className="text-[10px] text-slate-400 font-normal">
                                {c.district}
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                        <tr>
                          <td className="py-2.5 px-3 font-bold text-slate-900">
                            Peringkat Kelayakan
                          </td>
                          {multiSawResults.map((c) => (
                            <td key={c.id} className="py-2.5 px-4 text-center">
                              <span
                                className={`inline-flex items-center gap-1 font-bold px-2.5 py-0.5 rounded text-xs ${
                                  c.rank === 1
                                    ? "bg-amber-100 text-amber-800 font-black border border-amber-300"
                                    : "bg-slate-100 text-slate-600"
                                }`}
                              >
                                {c.rank === 1 ? "🥇 Juara 1" : `#${c.rank}`}
                              </span>
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3 font-bold text-slate-900">
                            Skor Akhir SAW (Vi)
                          </td>
                          {multiSawResults.map((c) => (
                            <td key={c.id} className="py-2.5 px-4 text-center">
                              <span className="text-base font-extrabold text-[#0A2540]">
                                {c.score}
                              </span>
                              <span className="text-[10px] text-slate-400"> / 100</span>
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3 font-bold text-slate-900">
                            Status Kelayakan
                          </td>
                          {multiSawResults.map((c) => (
                            <td key={c.id} className="py-2.5 px-4 text-center">
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  c.isFeasible
                                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                    : "bg-red-50 text-red-700 border border-red-200"
                                }`}
                              >
                                {c.isFeasible ? "LAYAK" : "TIDAK LAYAK"}
                              </span>
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3">
                            Biaya Sewa (Cost - 30%)
                            <div className="text-[10px] text-slate-400 font-normal">
                              Normalisasi: Min(Sewa) / Sewa
                            </div>
                          </td>
                          {multiSawResults.map((c) => (
                            <td key={c.id} className="py-2.5 px-4 text-center font-mono">
                              <div>Rp {Number(c.rentCost).toLocaleString("id-ID")}</div>
                              <div className="text-[10px] text-blue-700 font-bold">
                                Nilai R: {c.rRent.toFixed(2)}
                              </div>
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3">
                            Kompetitor Sejenis (Cost - 25%)
                            <div className="text-[10px] text-slate-400 font-normal">
                              Normalisasi: Min(Comp) / Comp
                            </div>
                          </td>
                          {multiSawResults.map((c) => (
                            <td key={c.id} className="py-2.5 px-4 text-center font-mono">
                              <div>{c.competitors} Toko</div>
                              <div className="text-[10px] text-blue-700 font-bold">
                                Nilai R: {c.rComp.toFixed(2)}
                              </div>
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3">
                            Aksesibilitas & Parkir (Benefit - 20%)
                            <div className="text-[10px] text-slate-400 font-normal">
                              Normalisasi: Access / Max(Access)
                            </div>
                          </td>
                          {multiSawResults.map((c) => (
                            <td key={c.id} className="py-2.5 px-4 text-center font-mono">
                              <div>{c.accessibility} / 5</div>
                              <div className="text-[10px] text-blue-700 font-bold">
                                Nilai R: {c.rAccess.toFixed(2)}
                              </div>
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3">
                            Potensi Pasar (Benefit - 25%)
                            <div className="text-[10px] text-slate-400 font-normal">
                              Normalisasi: Market / Max(Market)
                            </div>
                          </td>
                          {multiSawResults.map((c) => (
                            <td key={c.id} className="py-2.5 px-4 text-center font-mono">
                              <div>{c.marketPotential} / 5</div>
                              <div className="text-[10px] text-blue-700 font-bold">
                                Nilai R: {c.rMarket.toFixed(2)}
                              </div>
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3 font-bold text-slate-900">
                            Aksi
                          </td>
                          {multiSawResults.map((c) => (
                            <td key={c.id} className="py-2.5 px-4 text-center">
                              <button
                                type="button"
                                onClick={() => handleApplyWinnerToSingle(c)}
                                className="text-xs font-bold text-blue-700 hover:text-blue-900 hover:underline"
                              >
                                Terapkan ke Form Utama &rarr;
                              </button>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
