import React, { useState, useEffect, useMemo } from "react";
import TopNavbar from "./TopNavbar";
import {
  LayoutGrid,
  MapPin,
  TrendingUp,
  Bot,
  History,
  Store,
  LogOut,
  ChevronDown,
  Building2,
  Calendar,
  Wallet,
  CheckCircle2,
  Save,
  Copy,
  Check,
  FileSpreadsheet,
  Clock,
  Sparkles,
  AlertCircle,
  Loader2,
  Navigation,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  Info,
} from "lucide-react";

/**
 * Format angka mata uang Rupiah
 */
function formatIDR(amount) {
  if (amount === null || amount === undefined || isNaN(amount) || amount === "") return "Rp 0";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(amount));
}

/**
 * Menghitung Skala Usaha sesuai PP No. 7 Tahun 2021 tentang Kemudahan,
 * Pelindungan, dan Pemberdayaan Koperasi dan Usaha Mikro, Kecil, dan Menengah:
 * - Usaha Mikro: Penjualan tahunan s/d Rp 2 Miliar (≤ Rp 500 Juta/kuartal)
 * - Usaha Kecil: Penjualan tahunan > Rp 2 Miliar s/d Rp 15 Miliar
 * - Usaha Menengah: Penjualan tahunan > Rp 15 Miliar s/d Rp 50 Miliar
 */
function getBusinessScaleFromRevenue(quarterlyRevenue) {
  const annualRevenue = Number(quarterlyRevenue || 0) * 4;
  if (annualRevenue <= 0) {
    return { label: "Belum Ditentukan", category: "UMKM", color: "slate" };
  }
  if (annualRevenue <= 2000000000) {
    return {
      label: "Usaha Mikro",
      category: "Mikro (≤ Rp 2 Miliar / tahun)",
      color: "emerald",
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    };
  }
  if (annualRevenue <= 15000000000) {
    return {
      label: "Usaha Kecil",
      category: "Kecil (Rp 2 M - Rp 15 Miliar / tahun)",
      color: "blue",
      badge: "bg-blue-50 text-blue-700 border-blue-200",
    };
  }
  return {
    label: "Usaha Menengah",
    category: "Menengah (Rp 15 M - Rp 50 Miliar / tahun)",
    color: "purple",
    badge: "bg-purple-50 text-purple-700 border-purple-200",
  };
}

export default function BusinessProfilePage({ onLogout, onNavigate }) {
  // Ambil data user aktif dari localStorage
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem("user");
      return saved ? JSON.parse(saved) : null;
    } catch (_) {
      return null;
    }
  });

  // State form profil (murni bersumber dari database backend, tanpa nilai fiktif/dummy)
  const [formData, setFormData] = useState({
    businessName: "",
    sector: "Kuliner & Restoran Cepat Saji (F&B)",
    customSector: "",
    quarterlyRevenueTarget: "",
    address: "",
    latitude: "",
    longitude: "",
  });

  const [hasExistingProfile, setHasExistingProfile] = useState(false);
  const [latestLocation, setLatestLocation] = useState(null);
  const [latestFinancial, setLatestFinancial] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [lastSaved, setLastSaved] = useState("Belum disimpan");
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [locationNotice, setLocationNotice] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [activeMenu, setActiveMenu] = useState("profil");

  // Handler deteksi GPS otomatis menggunakan browser Geolocation API
  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      setLocationNotice("Browser tidak mendukung geolokasi GPS.");
      return;
    }
    setIsDetectingLocation(true);
    setLocationNotice("");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude.toFixed(6);
        const lng = pos.coords.longitude.toFixed(6);
        setFormData((prev) => ({
          ...prev,
          latitude: lat,
          longitude: lng,
        }));
        setIsDetectingLocation(false);
        setLocationNotice(`Titik GPS berhasil diperoleh: ${lat}, ${lng}`);
        setTimeout(() => setLocationNotice(""), 3500);
      },
      (err) => {
        setIsDetectingLocation(false);
        setLocationNotice("Gagal mendeteksi lokasi GPS: " + err.message);
        setTimeout(() => setLocationNotice(""), 4000);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  // Helper normalisasi nama sektor ke opsi dropdown
  const normalizeSector = (sec) => {
    if (!sec) return "Kuliner & Restoran Cepat Saji (F&B)";
    const lower = sec.toLowerCase();
    if (lower.includes("f&b") || lower.includes("kuliner") || lower.includes("makanan") || lower.includes("kopi")) {
      return "Kuliner & Restoran Cepat Saji (F&B)";
    }
    if (lower.includes("ritel") || lower.includes("retail") || lower.includes("toko")) {
      return "Ritel & Perdagangan Grosir";
    }
    if (lower.includes("fesyen") || lower.includes("fashion") || lower.includes("pakaian")) {
      return "Fesyen & Tekstil";
    }
    if (lower.includes("sehat") || lower.includes("cantik") || lower.includes("klinik")) {
      return "Kesehatan, Kecantikan & Perawatan";
    }
    if (lower.includes("agri") || lower.includes("tani") || lower.includes("ternak")) {
      return "Agribisnis, Pertanian & Peternakan";
    }
    if (lower.includes("tekno") || lower.includes("digital") || lower.includes("software")) {
      return "Teknologi, Digital & Kreatif";
    }
    if (lower.includes("otomotif") || lower.includes("bengkel")) {
      return "Otomotif & Bengkel";
    }
    if (lower.includes("didik") || lower.includes("kursus") || lower.includes("bimbel")) {
      return "Pendidikan & Pelatihan";
    }
    if (lower.includes("jasa") || lower.includes("servis") || lower.includes("laundry")) {
      return "Jasa & Hospitality";
    }
    if (lower.includes("manufaktur") || lower.includes("produksi") || lower.includes("pabrik")) {
      return "Produksi & Manufaktur Rumahan";
    }
    return "Lainnya";
  };

  // Ambil profil usaha dan relasi analisis terakhir dari backend saat mount
  useEffect(() => {
    const token =
      localStorage.getItem("token") ||
      sessionStorage.getItem("token") ||
      "";
    const headers = {};
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const fetchProfileData = async () => {
      setIsLoading(true);
      try {
        // 1. Ambil Profil Usaha
        let res;
        try {
          res = await fetch("/api/business/profile", { headers });
        } catch (_) {
          res = await fetch("http://localhost:5000/api/business/profile", { headers });
        }

        if (res.ok) {
          const json = await res.json();
          const p = json.data;
          if (p) {
            setHasExistingProfile(true);
            const matchedSector = normalizeSector(p.sector);
            setFormData({
              businessName: p.name || "",
              sector: matchedSector,
              customSector: p.sectorOther || (matchedSector === "Lainnya" ? p.sector : ""),
              address: p.address || "",
              latitude: p.latitude !== null && p.latitude !== undefined ? String(p.latitude) : "",
              longitude: p.longitude !== null && p.longitude !== undefined ? String(p.longitude) : "",
              quarterlyRevenueTarget: p.quarterlyRevenueTarget
                ? String(Math.round(Number(p.quarterlyRevenueTarget)))
                : "",
            });
            if (p.updatedAt || p.createdAt) {
              const d = new Date(p.updatedAt || p.createdAt);
              setLastSaved(
                d.toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }) +
                  ", " +
                  d.toLocaleTimeString("id-ID", {
                    hour: "2-digit",
                    minute: "2-digit",
                  }) +
                  " WIB"
              );
            }
          }
        }

        // 2. Ambil Riwayat Lokasi Terakhir untuk Kartu Relasi Entitas
        try {
          let locRes;
          try {
            locRes = await fetch("/api/location/history?limit=1", { headers });
          } catch (_) {
            locRes = await fetch("http://localhost:5000/api/location/history?limit=1", { headers });
          }
          if (locRes && locRes.ok) {
            const locJson = await locRes.json();
            const records = locJson.data || [];
            if (records.length > 0) {
              setLatestLocation(records[0]);
            }
          }
        } catch (_) {}

        // 3. Ambil Riwayat Keuangan Terakhir untuk Kartu Relasi Entitas
        try {
          let finRes;
          try {
            finRes = await fetch("/api/financial/history?limit=1", { headers });
          } catch (_) {
            finRes = await fetch("http://localhost:5000/api/financial/history?limit=1", { headers });
          }
          if (finRes && finRes.ok) {
            const finJson = await finRes.json();
            const records = finJson.data || [];
            if (records.length > 0) {
              setLatestFinancial(records[0]);
            }
          }
        } catch (_) {}
      } catch (err) {
        console.warn("Gagal memuat profil usaha:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleCopyEmail = () => {
    if (!currentUser?.email) return;
    navigator.clipboard.writeText(currentUser.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const getInitials = (name) => {
    if (!name) return "UM";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  // Simpan data profil ke backend (POST jika baru, PUT jika perbarui)
  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveError("");
    setSaveSuccess(false);

    const token =
      localStorage.getItem("token") ||
      sessionStorage.getItem("token") ||
      "";
    const headers = { "Content-Type": "application/json" };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const chosenSector =
      formData.sector === "Lainnya"
        ? formData.customSector.trim() || "Lainnya"
        : formData.sector;

    const payload = {
      name: formData.businessName.trim(),
      sector: chosenSector,
      sectorOther:
        formData.sector === "Lainnya" ? formData.customSector.trim() : null,
      address: formData.address.trim(),
      latitude:
        formData.latitude !== "" && !isNaN(Number(formData.latitude))
          ? Number(formData.latitude)
          : null,
      longitude:
        formData.longitude !== "" && !isNaN(Number(formData.longitude))
          ? Number(formData.longitude)
          : null,
      quarterlyRevenueTarget:
        formData.quarterlyRevenueTarget !== "" && !isNaN(Number(formData.quarterlyRevenueTarget))
          ? Number(formData.quarterlyRevenueTarget)
          : null,
    };

    try {
      const method = hasExistingProfile ? "PUT" : "POST";
      let response;
      try {
        response = await fetch("/api/business/profile", {
          method,
          headers,
          body: JSON.stringify(payload),
        });
      } catch (_) {
        response = await fetch("http://localhost:5000/api/business/profile", {
          method,
          headers,
          body: JSON.stringify(payload),
        });
      }

      // Fallback switch jika status 409 pada POST (sudah ada) atau 404 pada PUT (belum ada)
      if (!response.ok && response.status === 409 && method === "POST") {
        response = await fetch("/api/business/profile", {
          method: "PUT",
          headers,
          body: JSON.stringify(payload),
        });
      } else if (!response.ok && response.status === 404 && method === "PUT") {
        response = await fetch("/api/business/profile", {
          method: "POST",
          headers,
          body: JSON.stringify(payload),
        });
      }

      const resJson = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(
          resJson.error ||
            resJson.message ||
            `Gagal menyimpan profil usaha (status ${response.status})`
        );
      }

      setHasExistingProfile(true);
      setSaveSuccess(true);
      const now = new Date();
      setLastSaved(
        now.toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }) +
          ", " +
          now.toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
          }) +
          " WIB"
      );

      // Perbarui metadata user di localStorage agar sinkron di seluruh portal
      try {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
          const parsed = JSON.parse(savedUser);
          parsed.businessName = payload.name;
          localStorage.setItem("user", JSON.stringify(parsed));
          setCurrentUser(parsed);
        }
      } catch (_) {}

      setTimeout(() => setSaveSuccess(false), 4000);
    } catch (err) {
      setSaveError(err.message);
    } finally {
      setIsSaving(false);
    }
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

  // Skala Usaha Terkalkulasi Otomatis Berdasarkan Target Omzet
  const businessScale = useMemo(
    () => getBusinessScaleFromRevenue(formData.quarterlyRevenueTarget),
    [formData.quarterlyRevenueTarget]
  );

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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Pengelolaan Profil Entitas Bisnis
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                  Data dasar usaha yang digunakan sebagai acuan seluruh analisis kepatuhan SAK EMKM, pemetaan SAW, dan injeksi konteks penalaran asisten AI
                </p>
              </div>

              {/* Status Badge */}
              <div>
                {isLoading ? (
                  <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-lg">
                    <Loader2 size={13} className="animate-spin text-slate-500" />
                    <span>Memuat Data...</span>
                  </span>
                ) : hasExistingProfile ? (
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm">
                    <CheckCircle2 size={14} className="text-emerald-600" />
                    <span>Profil Tersimpan di Database</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold px-3 py-1.5 rounded-lg">
                    <Info size={14} className="text-amber-600" />
                    <span>Lengkapi Data untuk Menyimpan</span>
                  </span>
                )}
              </div>
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
                        Pastikan data akurat untuk ketepatan analisis SAW dan perhitungan rasio SAK EMKM
                      </p>
                    </div>
                    <span className="bg-slate-100 text-slate-600 text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      Data Terverifikasi
                    </span>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSave} className="mt-5 space-y-4">
                    {/* Row 1: Nama Usaha / Brand */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Nama Usaha / Brand <span className="text-red-500">*</span>
                      </label>
                      <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                        <div className="pl-3.5 pr-1 text-slate-400">
                          <Store size={16} />
                        </div>
                        <input
                          type="text"
                          required
                          placeholder="Masukkan nama resmi usaha atau merk dagang Anda"
                          value={formData.businessName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              businessName: e.target.value,
                            })
                          }
                          className="w-full bg-transparent py-2.5 px-2 text-xs sm:text-sm text-slate-800 outline-none font-medium"
                        />
                      </div>
                    </div>

                    {/* Row 2: Sektor Usaha & Target Omzet Kuartalan */}
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
                            <option value="Kuliner & Restoran Cepat Saji (F&B)">
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
                              Pendidikan & Pelatihan
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
                          </div>
                        )}
                      </div>

                      {/* Target Omzet Kuartalan */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-xs font-semibold text-slate-700">
                            Target Omzet Kuartalan (Rp)
                          </label>
                          {formData.quarterlyRevenueTarget && (
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${businessScale.badge}`}>
                              {businessScale.label}
                            </span>
                          )}
                        </div>
                        <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                          <div className="pl-3.5 pr-1 text-slate-400">
                            <Wallet size={16} />
                          </div>
                          <input
                            type="number"
                            min="0"
                            step="1000000"
                            value={formData.quarterlyRevenueTarget}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                quarterlyRevenueTarget: e.target.value,
                              })
                            }
                            placeholder="Contoh: 75000000"
                            className="w-full bg-transparent py-2.5 px-2 text-xs sm:text-sm text-slate-800 outline-none font-mono"
                          />
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1">
                          {formData.quarterlyRevenueTarget
                            ? `${formatIDR(formData.quarterlyRevenueTarget)} per 3 bulan (~${formatIDR(Number(formData.quarterlyRevenueTarget) / 3)}/bln)`
                            : "Target omzet digunakan sebagai pembanding likuiditas SAK EMKM."}
                        </p>
                      </div>
                    </div>

                    {/* Row 3: Alamat Operasional Utama */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          Alamat Operasional Utama <span className="text-red-500">*</span>
                        </label>
                        <span className="text-[11px] text-slate-400">
                          Lokasi Usaha Fisik
                        </span>
                      </div>
                      <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                        <div className="pl-3.5 pr-1 text-slate-400">
                          <MapPin size={16} />
                        </div>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: Jl. Kaliurang KM 5 No. 12, Sleman, D.I. Yogyakarta"
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

                    {/* Row 4: Titik Koordinat Geospasial (Latitude & Longitude) */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-1.5">
                        <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                          <Navigation size={13} className="text-blue-600 rotate-45" />
                          <span>Titik Koordinat Geospasial</span>
                          <span className="text-[10px] text-slate-400 font-normal">(Latitude & Longitude)</span>
                        </label>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={handleDetectLocation}
                            disabled={isDetectingLocation}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100/80 px-2.5 py-1 rounded-md transition-colors disabled:opacity-50"
                            title="Deteksi posisi GPS saat ini melalui browser"
                          >
                            {isDetectingLocation ? (
                              <Loader2 size={11} className="animate-spin text-blue-600" />
                            ) : (
                              <Navigation size={11} className="text-blue-600 rotate-45" />
                            )}
                            <span>{isDetectingLocation ? "Mendeteksi..." : "Deteksi lokasi saat ini"}</span>
                          </button>
                          {(formData.latitude && formData.longitude) || formData.address ? (
                            <a
                              href={
                                formData.latitude && formData.longitude
                                  ? `https://maps.google.com/?q=${formData.latitude},${formData.longitude}`
                                  : `https://maps.google.com/?q=${encodeURIComponent(formData.address)}`
                              }
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1 rounded-md transition-colors"
                              title="Buka titik lokasi di Google Maps"
                            >
                              <ExternalLink size={11} className="text-slate-500" />
                              <span>Lihat di Maps</span>
                            </a>
                          ) : null}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                            <span className="pl-3 pr-1 text-[11px] font-bold text-slate-400">
                              Lat:
                            </span>
                            <input
                              type="text"
                              value={formData.latitude}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  latitude: e.target.value,
                                })
                              }
                              placeholder="-7.049400"
                              className="w-full bg-transparent py-2.5 px-2 text-xs sm:text-sm text-slate-800 outline-none font-mono"
                            />
                          </div>
                          <span className="text-[10px] text-slate-400 ml-1">Garis Lintang (-90 s/d 90)</span>
                        </div>

                        <div>
                          <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                            <span className="pl-3 pr-1 text-slate-400 text-[11px] font-bold">
                              Long:
                            </span>
                            <input
                              type="text"
                              value={formData.longitude}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  longitude: e.target.value,
                                })
                              }
                              placeholder="110.438100"
                              className="w-full bg-transparent py-2.5 px-2 text-xs sm:text-sm text-slate-800 outline-none font-mono"
                            />
                          </div>
                          <span className="text-[10px] text-slate-400 ml-1">Garis Bujur (-180 s/d 180)</span>
                        </div>
                      </div>

                      {locationNotice && (
                        <p className={`text-[11px] mt-1.5 font-medium ${locationNotice.includes("Gagal") ? "text-red-600" : "text-emerald-700"}`}>
                          {locationNotice}
                        </p>
                      )}
                      <p className="text-[10px] text-slate-400 mt-1">
                        Titik koordinat digunakan untuk analisis radius kompetitor dan evaluasi aksesibilitas SAW.
                      </p>
                    </div>

                    {/* Status Validasi Data Box */}
                    <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-lg p-3.5 flex items-start gap-3 mt-4">
                      <CheckCircle2
                        size={18}
                        className="text-emerald-600 shrink-0 mt-0.5"
                      />
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-emerald-900">
                          Status Profil: {hasExistingProfile ? "Terhubung ke Database" : "Belum Tersimpan"}
                        </div>
                        <p className="text-[11px] sm:text-xs text-emerald-700 mt-0.5 leading-relaxed">
                          {hasExistingProfile
                            ? "Profil usaha tersimpan di basis data PostgreSQL. Data ini menjadi konteks dasar bagi asisten konsultasi AI dan evaluasi kelayakan usaha."
                            : "Simpan formulir ini untuk menghubungkan profil bisnis Anda dengan modul analitik NEXUM."}
                        </p>
                      </div>
                    </div>

                    {/* Save Error Alert */}
                    {saveError && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg flex items-center gap-2">
                        <AlertCircle size={15} className="shrink-0" />
                        <span>{saveError}</span>
                      </div>
                    )}

                    {/* Save Success Alert */}
                    {saveSuccess && (
                      <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg flex items-center gap-2">
                        <CheckCircle2 size={15} className="shrink-0 text-emerald-600" />
                        <span>Perubahan profil usaha berhasil disimpan ke database!</span>
                      </div>
                    )}

                    {/* Action Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-3">
                        <button
                          type="submit"
                          disabled={isSaving}
                          className="inline-flex items-center gap-2 bg-[#0A2540] hover:bg-[#071c33] active:scale-[0.99] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all disabled:opacity-75"
                        >
                          {isSaving ? (
                            <>
                              <Loader2 size={14} className="animate-spin" />
                              <span>Menyimpan...</span>
                            </>
                          ) : (
                            <>
                              <Save size={14} />
                              <span>Simpan Perubahan</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                        <Clock size={13} />
                        <span>Terakhir disimpan: {lastSaved}</span>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Card 2: Status Parameter Analitik Riil (Menggantikan Dummy Statis) */}
                <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Sparkles size={17} className="text-blue-600" />
                      <h3 className="text-sm font-bold text-slate-900">
                        Status Terkini Analitik SAW & Finansial
                      </h3>
                    </div>
                    <span className="bg-blue-50 text-blue-700 text-[10px] font-semibold px-2 py-0.5 rounded">
                      Integrasi Riil
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Parameter 1: Kelayakan Lokasi (SAW) */}
                    <div className="bg-[#F8FAFD] border border-slate-200/80 rounded-xl p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500 font-medium">
                            Kelayakan Lokasi (SAW)
                          </span>
                          {latestLocation && (
                            <span
                              className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                latestLocation.category === "LAYAK"
                                  ? "bg-emerald-50 text-emerald-700"
                                  : latestLocation.category === "DIPERTIMBANGKAN"
                                  ? "bg-amber-50 text-amber-700"
                                  : "bg-red-50 text-red-700"
                              }`}
                            >
                              {latestLocation.category}
                            </span>
                          )}
                        </div>

                        <div className="text-xl font-extrabold text-slate-900 my-1.5">
                          {latestLocation ? `${Number(latestLocation.score).toFixed(1)} / 100` : "Belum Dianalisis"}
                        </div>

                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          {latestLocation
                            ? `${latestLocation.locationName} (${latestLocation.competitorCount} Pesaing)`
                            : "Uji lokasi berdasarkan 4 kriteria SAW"}
                        </div>
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => onNavigate && onNavigate("location")}
                          className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
                        >
                          <span>{latestLocation ? "Buka Rincian SAW" : "Mulai Analisis Lokasi"}</span>
                          <ArrowRight size={11} />
                        </button>
                      </div>
                    </div>

                    {/* Parameter 2: Risiko Keuangan (SAK EMKM) */}
                    <div className="bg-[#F8FAFD] border border-slate-200/80 rounded-xl p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500 font-medium">
                            Risiko Keuangan (SAK EMKM)
                          </span>
                          {latestFinancial && (
                            <span
                              className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                latestFinancial.riskLevel === "SEHAT" || latestFinancial.riskLevel === "RENDAH"
                                  ? "bg-emerald-50 text-emerald-700"
                                  : latestFinancial.riskLevel === "WASPADA"
                                  ? "bg-amber-50 text-amber-700"
                                  : "bg-red-50 text-red-700"
                              }`}
                            >
                              {latestFinancial.riskLevel}
                            </span>
                          )}
                        </div>

                        <div className="text-xl font-extrabold text-slate-900 my-1.5">
                          {latestFinancial ? `${Number(latestFinancial.riskIndex).toFixed(1)} / 100` : "Belum Dianalisis"}
                        </div>

                        <div className="text-[11px] text-slate-500">
                          {latestFinancial
                            ? `CR: ${Number(latestFinancial.ratios?.currentRatio || 0).toFixed(2)}x • ${latestFinancial.periodsAnalyzed} Periode`
                            : "Evaluasi 6 rasio keuangan resmi"}
                        </div>
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => onNavigate && onNavigate("finance")}
                          className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
                        >
                          <span>{latestFinancial ? "Buka Audit Keuangan" : "Unggah Laporan (.xlsx)"}</span>
                          <ArrowRight size={11} />
                        </button>
                      </div>
                    </div>

                    {/* Parameter 3: Estimasi Skala Usaha Regulasi */}
                    <div className="bg-[#EEF4FF] border border-blue-100 rounded-xl p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-blue-800 font-medium">
                            Skala Usaha (Regulasi)
                          </span>
                          <span className="text-[10px] font-bold text-blue-700 bg-blue-100/60 px-1.5 py-0.5 rounded">
                            PP No. 7/2021
                          </span>
                        </div>

                        <div className="text-xl font-extrabold text-[#0A2540] my-1.5">
                          {businessScale.label}
                        </div>

                        <div className="text-[11px] text-blue-700/80">
                          {formData.quarterlyRevenueTarget
                            ? `Target: ${formatIDR(formData.quarterlyRevenueTarget)}/kuartal`
                            : "Masukkan target omzet untuk estimasi"}
                        </div>
                      </div>

                      <div className="mt-3 pt-2 border-t border-blue-200/50 text-[10px] text-blue-600/90 font-medium">
                        Kriteria Kementerian Koperasi & UKM RI
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
                      {getInitials(currentUser?.name)}
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 mt-3.5">
                      {currentUser?.name || "Pengguna UMKM"}
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {formData.businessName
                        ? `${formData.businessName} • Penanggung Jawab`
                        : "Akun Terdaftar (Lengkapi Profil Usaha)"}
                    </p>

                    {/* Email Copy Button */}
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 mt-2 px-2.5 py-1 rounded-md hover:bg-slate-100 transition-colors"
                      title="Salin email"
                    >
                      <span>✉ {currentUser?.email || "email@umkm.id"}</span>
                      {isCopied ? (
                        <Check size={13} className="text-emerald-600" />
                      ) : (
                        <Copy size={13} className="text-slate-400" />
                      )}
                    </button>

                    {/* Verified Badge */}
                    <div className="mt-3.5">
                      <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase">
                        {hasExistingProfile ? "AKUN AKTIF (TERVERIFIKASI)" : "MENUNGGU KELENGKAPAN PROFIL"}
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
                        {latestLocation || latestFinancial
                          ? `${(latestLocation ? 1 : 0) + (latestFinancial ? 1 : 0)} Modul Terhubung`
                          : "Belum Ada Analisis"}
                      </span>
                    </div>

                    {latestLocation || latestFinancial ? (
                      <div className="space-y-2.5">
                        {/* Entity 1: Lokasi */}
                        {latestLocation && (
                          <div
                            onClick={() => onNavigate && onNavigate("location")}
                            className="p-3 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-between transition-colors shadow-none hover:shadow-sm cursor-pointer"
                          >
                            <div className="flex items-start gap-2.5 pr-2">
                              <div className="p-1.5 bg-blue-50 text-blue-600 rounded-md shrink-0 mt-0.5">
                                <MapPin size={15} />
                              </div>
                              <div>
                                <div className="text-xs font-bold text-slate-900 line-clamp-1">
                                  {latestLocation.locationName}
                                </div>
                                <div className="text-[11px] text-slate-500">
                                  Kelayakan Lokasi (Kec. {latestLocation.district || "Semarang"})
                                </div>
                              </div>
                            </div>
                            <span
                              className={`text-[11px] font-bold px-2 py-1 rounded-md shrink-0 ${
                                latestLocation.category === "LAYAK"
                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                  : latestLocation.category === "DIPERTIMBANGKAN"
                                  ? "bg-amber-50 text-amber-700 border border-amber-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`}
                            >
                              SAW: {Number(latestLocation.score).toFixed(1)}
                            </span>
                          </div>
                        )}

                        {/* Entity 2: Laporan Keuangan */}
                        {latestFinancial && (
                          <div
                            onClick={() => onNavigate && onNavigate("finance")}
                            className="p-3 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-between transition-colors shadow-none hover:shadow-sm cursor-pointer"
                          >
                            <div className="flex items-start gap-2.5 pr-2 min-w-0 flex-1">
                              <div className="p-1.5 bg-amber-50 text-amber-600 rounded-md shrink-0 mt-0.5">
                                <FileSpreadsheet size={15} />
                              </div>

                              <div className="min-w-0 flex-1">
                                <div className="text-xs font-bold text-slate-900 truncate">
                                  {latestFinancial.fileName || latestFinancial.code}
                                </div>

                                <div className="text-[11px] text-slate-500 truncate">
                                  Risiko Keuangan SAK EMKM
                                </div>

                                <span
                                  className={`inline-block mt-1 text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md ${
                                    latestFinancial.riskLevel === "RENDAH" ||
                                    latestFinancial.riskLevel === "SEHAT" ||
                                    latestFinancial.riskLevel === "AMAN"
                                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                      : latestFinancial.riskLevel === "WASPADA"
                                      ? "bg-amber-50 text-amber-700 border border-amber-200"
                                      : "bg-red-50 text-red-700 border border-red-200"
                                  }`}
                                >
                                  {latestFinancial.riskLevel} ({Number(latestFinancial.riskIndex).toFixed(0)})
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="p-4 bg-slate-50 border border-dashed border-slate-200 rounded-xl text-center space-y-1">
                        <Store size={22} className="mx-auto text-slate-400 mb-1" />
                        <div className="text-xs font-semibold text-slate-700">
                          Belum Ada Analisis Terhubung
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Jalankan analisis kelayakan lokasi atau unggah laporan keuangan untuk melihat ringkasan performa di sini.
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
