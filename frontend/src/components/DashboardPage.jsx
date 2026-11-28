import React, { useState, useEffect } from "react";
import TopNavbar from "./TopNavbar";
import {
  LayoutGrid,
  MapPin,
  TrendingUp,
  Bot,
  History,
  Store,
  LogOut,
  AlertTriangle,
  Sparkles,
  Info,
  CheckCircle2,
  Lock,
  ArrowRight,
  Building,
  UploadCloud,
  FileSpreadsheet,
  RotateCcw,
  Loader2,
  SlidersHorizontal,
} from "lucide-react";

export default function DashboardPage({ onLogout, onNavigate }) {
  const [activeMenu, setActiveMenu] = useState("beranda");

  // State Data Keuangan (Dibaca dinamis dari laporan yang diunggah)
  const [financialData, setFinancialData] = useState(null);
  const [financialPeriods, setFinancialPeriods] = useState([]);
  const [hasFinancialReport, setHasFinancialReport] = useState(false);

  // State Data Lokasi Terakhir (Dibaca dinamis dari riwayat simulasi SAW)
  const [latestLocation, setLatestLocation] = useState(null);

  // State Analisis AI Dinamis
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiInsights, setAiInsights] = useState({
    trendSummary:
      "Memuat tren pendapatan vs beban operasional berdasarkan pembukuan terkini...",
    analystNote:
      "Catatan analis AI sedang menganalisis kondisi likuiditas dan margin laba pembukuan Anda...",
    locationAdvice:
      "Rekomendasi kelayakan ruko dan strategi persaingan sedang diselaraskan...",
  });

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

  // 1. Memuat Data Keuangan & Lokasi Terbaru dari Backend / LocalStorage
  const loadDashboardData = async () => {
    // A. Ambil Data Keuangan
    try {
      const savedLatest = localStorage.getItem("nexum_latest_financial");
      const savedPeriods = localStorage.getItem("nexum_financial_periods");
      const savedHistory = localStorage.getItem("nexum_finance_history");

      let parsedLatest = savedLatest ? JSON.parse(savedLatest) : null;
      let parsedPeriods = savedPeriods ? JSON.parse(savedPeriods) : [];
      let parsedHistory = savedHistory ? JSON.parse(savedHistory) : [];

      // Jika ada data riwayat, jadikan sebagai basis laporan aktif
      if (parsedHistory.length > 0 && !parsedLatest) {
        parsedLatest = {
          fileName: parsedHistory[0].file,
          riskLevel: parsedHistory[0].status || "WASPADA",
          riskIndex: parsedHistory[0].riskScore !== undefined ? parsedHistory[0].riskScore : 0,
          totalRevenue: parsedHistory[0].totalRevenue !== undefined ? parsedHistory[0].totalRevenue : 0,
          totalExpense: parsedHistory[0].totalExpense !== undefined ? parsedHistory[0].totalExpense : 0,
          netProfit: parsedHistory[0].netProfit !== undefined ? parsedHistory[0].netProfit : 0,
        };
      }

      if (parsedLatest || parsedPeriods.length > 0) {
        setFinancialData(parsedLatest);
        setFinancialPeriods(parsedPeriods);
        setHasFinancialReport(true);
      } else {
        setHasFinancialReport(false);
      }
    } catch (e) {
      console.warn("Gagal membaca storage keuangan:", e);
    }

    // B. Ambil Data Lokasi Terakhir
    try {
      const savedLoc = localStorage.getItem("nexum_location_history");
      if (savedLoc) {
        const parsed = JSON.parse(savedLoc);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setLatestLocation(parsed[0]);
        }
      }
    } catch (e) {
      console.warn("Gagal membaca storage lokasi:", e);
    }
  };

  useEffect(() => {
    loadDashboardData();

    // Sinkronisasi data jika ada perubahan di tab lain
    const handleStorage = () => loadDashboardData();
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // 2. Fungsi Membuat Ulang Analisis AI (Menggunakan API AI Gemini / Groq)
  const handleRefreshAiInsights = async () => {
    setIsAiLoading(true);

    const token =
      localStorage.getItem("token") || localStorage.getItem("nexum_token");
    const headers = { "Content-Type": "application/json" };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const contextPayload = {
      financials: {
        totalRevenue: metrics.revenue,
        totalExpenses: metrics.expenses,
        netProfit: metrics.netProfit,
        riskLevel: metrics.riskLevel,
        riskIndex: metrics.riskIndex,
      },
      periods: chartPeriods.map((p) => ({
        month: p.month,
        revenue: p.revenue,
        expenses: p.expenses,
        netProfit: p.net,
      })),
      location: latestLocation
        ? {
          name: latestLocation.name,
          score: latestLocation.score,
          status: latestLocation.status,
          factors: latestLocation.factors,
        }
        : null,
    };

    const promptMessage = `Anda adalah Analis Finansial dan Lokasi Bisnis Senior di NEXUM AI.
Berdasarkan data keuangan dan lokasi bisnis UMKM berikut:
${JSON.stringify(contextPayload, null, 2)}

Buatlah ringkasan analisis strategis dalam format JSON dengan kunci:
1. "trendSummary": 1-2 kalimat analisis tajam mengenai tren pendapatan vs beban operasional.
2. "analystNote": 2-3 kalimat catatan analis NEXUM tentang penyebab defisit/surplus laba, perputaran kas, dan langkah efisiensi yang harus diambil.
3. "locationAdvice": 2-3 kalimat rekomendasi strategis kelayakan ruko dan cara menghadapi kompetitor di lokasi tersebut.
Jawab HANYA dalam format JSON valid tanpa tanda kutip markdown.`;

    try {
      let response;
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        response = await fetch("/api/ai/chat", {
          method: "POST",
          headers,
          body: JSON.stringify({ message: promptMessage, allowContext: true }),
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
      } catch (_) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        response = await fetch("http://localhost:5000/api/ai/chat", {
          method: "POST",
          headers,
          body: JSON.stringify({ message: promptMessage, allowContext: true }),
          signal: controller.signal,
        }).catch(() => null);
        clearTimeout(timeoutId);
      }

      if (response && response.ok) {
        const resJson = await response.json();
        const text =
          resJson.data?.message || resJson.data?.reply || resJson.message || "";
        const clean = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const parsed = JSON.parse(clean);
        if (parsed.analystNote) {
          setAiInsights({
            trendSummary: parsed.trendSummary || aiInsights.trendSummary,
            analystNote: parsed.analystNote || aiInsights.analystNote,
            locationAdvice: parsed.locationAdvice || aiInsights.locationAdvice,
          });
          setIsAiLoading(false);
          return;
        }
      }
    } catch (e) {
      console.warn("Gagal memanggil API AI, menggunakan inferensi cerdas:", e);
    }

    // Inferensi Cerdas Lokal Berbasis Nilai Riil jika Backend Sedang Offline
    const isDeficit = metrics.netProfit < 0;
    const marginPct = (
      (metrics.netProfit / (metrics.revenue || 1)) *
      100
    ).toFixed(1);

    setTimeout(() => {
      setAiInsights({
        trendSummary: `Berdasarkan pembukuan kas, akumulasi pendapatan berada di angka Rp ${Number(
          metrics.revenue
        ).toLocaleString("id-ID")} dengan beban operasional Rp ${Number(
          metrics.expenses
        ).toLocaleString("id-ID")}, menghasilkan margin bersih ${marginPct}%.`,
        analystNote: isDeficit
          ? `Terdeteksi defisit kas operasional sebesar Rp ${Math.abs(
            metrics.netProfit
          ).toLocaleString(
            "id-ID"
          )}. Beban bahan baku dan utilitas menekan margin bersih. Direkomendasikan audit pengeluaran sebelum menambah cabang ruko.`
          : `Arus kas berada pada zona positif dengan surplus Rp ${Number(
            metrics.netProfit
          ).toLocaleString(
            "id-ID"
          )}. Likuiditas operasional cukup kuat untuk menopang rencana ekspansi lokasi baru.`,
        locationAdvice: latestLocation
          ? `Lokasi ${latestLocation.name} memiliki skor SAW ${latestLocation.score}/100 (${latestLocation.status}). Strategi disarankan fokus pada penetrasi harga dan optimasi parkir untuk menarik pelanggan sekitar.`
          : "Lakukan simulasi kelayakan pada menu Kelayakan Lokasi agar AI dapat memberikan rekomendasi strategis ruko cabang baru.",
      });
      setIsAiLoading(false);
    }, 800);
  };

  // 3. Kalkulasi Metrik Dinamis Berdasarkan Data Keuangan yang Diunggah
  const computeMetrics = () => {
    if (!hasFinancialReport) {
      return {
        revenue: 0,
        targetRevenue: 50000000,
        revenuePercentage: 0,
        expenses: 0,
        netProfit: 0,
        marginPercent: "0.0%",
        riskLevel: "BELUM DIUNGGAH",
        riskIndex: 0,
      };
    }

    // Jika ada periode riil, hitung total dari periode atau periode terbaru
    let rev = 0;
    let exp = 0;
    let target = 50000000;
    let risk = "SEHAT";
    let score = 0;

    if (financialPeriods.length > 0) {
      rev = financialPeriods.reduce((acc, curr) => acc + Number(curr.revenue || 0), 0);
      exp = financialPeriods.reduce((acc, curr) => {
        const total = curr.totalExpenses
          ? Number(curr.totalExpenses)
          : Number(curr.cogs || 0) + Number(curr.operatingExpenses || curr.operatingExpense || 0);
        return acc + total;
      }, 0);
    } else if (financialData) {
      rev = Number(financialData.totalRevenue || 0);
      exp = Number(financialData.totalExpense || 0);
    }

    if (financialData?.riskLevel) risk = financialData.riskLevel;
    if (financialData?.riskIndex !== undefined) score = Number(financialData.riskIndex);

    const profit = rev - exp;
    const margin = rev > 0 ? ((profit / rev) * 100).toFixed(1) : "0.0";
    if (rev > target) {
      target = Math.ceil((rev * 1.2) / 10000000) * 10000000;
    }
    const percentTarget = target > 0 ? Math.min(100, Math.round((rev / target) * 100)) : 0;

    return {
      revenue: rev,
      targetRevenue: target,
      revenuePercentage: percentTarget,
      expenses: exp,
      netProfit: profit,
      marginPercent: `${margin}%`,
      riskLevel: risk,
      riskIndex: score,
    };
  };

  const metrics = computeMetrics();

  // 4. Data Periode untuk Bar Chart Tren Pendapatan vs Beban
  const getChartPeriods = () => {
    if (!hasFinancialReport) return [];

    if (financialPeriods.length > 0) {
      return financialPeriods.map((p) => {
        const totalExp = p.totalExpenses
          ? Number(p.totalExpenses)
          : Number(p.cogs || 0) + Number(p.operatingExpenses || p.operatingExpense || 0);
        return {
          month: p.periodName || p.periodDate || "Periode",
          revenue: Number(p.revenue || 0),
          expenses: totalExp,
          net: Number(p.netProfit !== undefined ? p.netProfit : (p.netIncome !== undefined ? p.netIncome : Number(p.revenue || 0) - totalExp)),
        };
      });
    }

    if (financialData && financialData.totalRevenue) {
      return [
        {
          month: "Periode Berjalan",
          revenue: Number(financialData.totalRevenue || 0),
          expenses: Number(financialData.totalExpense || 0),
          net: Number(financialData.netProfit !== undefined ? financialData.netProfit : Number(financialData.totalRevenue || 0) - Number(financialData.totalExpense || 0)),
        }
      ];
    }

    return [];
  };

  const chartPeriods = getChartPeriods();
  const maxBarValue =
    chartPeriods.length > 0
      ? Math.max(
        ...chartPeriods.map((p) => Math.max(p.revenue, p.expenses)),
        1000000
      )
      : 20000000;

  // Jalankan pembaharuan Catatan Analis AI secara otomatis saat data laporan keuangan dimuat
  useEffect(() => {
    if (hasFinancialReport && (metrics.revenue > 0 || financialPeriods.length > 0)) {
      handleRefreshAiInsights();
    }
  }, [hasFinancialReport, metrics.revenue, metrics.expenses, metrics.netProfit, financialPeriods.length]);

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

        {/* MAIN DASHBOARD CONTENT */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Header Dashboard & Tombol Tindakan */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Dashboard Performa Bisnis
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                  Visualisasi data keuangan riil dari laporan pembukuan Anda dan sintesis AI kelayakan ekspansi cabang
                </p>
              </div>

              {/* Action Buttons: Unggah / Perbarui AI */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <button
                  type="button"
                  onClick={handleRefreshAiInsights}
                  disabled={isAiLoading}
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold px-3.5 py-2 rounded-lg shadow-xs transition-all active:scale-95 disabled:opacity-50"
                  title="Analisis ulang ringkasan tren dan catatan analis menggunakan AI Gemini"
                >
                  {isAiLoading ? (
                    <Loader2 size={14} className="animate-spin text-blue-600" />
                  ) : (
                    <Sparkles size={14} className="text-blue-600" />
                  )}
                  <span>{isAiLoading ? "Menganalisis..." : "Perbarui Analisis AI"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleMenuClick("keuangan")}
                  className="inline-flex items-center gap-1.5 bg-[#0A2540] hover:bg-[#071c33] active:scale-95 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm transition-all"
                >
                  <UploadCloud size={14} />
                  <span>
                    {hasFinancialReport ? "Kelola Laporan Keuangan" : "Unggah Laporan (.xlsx)"}
                  </span>
                </button>
              </div>
            </div>

            {/* BANNER JIKA BELUM ADA LAPORAN KEUANGAN */}
            {!hasFinancialReport && (
              <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50/50 border border-blue-200 rounded-xl p-5 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-blue-600 text-white rounded-xl shadow-xs shrink-0 mt-0.5">
                    <FileSpreadsheet size={22} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Belum Ada Laporan Keuangan Diunggah
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5 max-w-2xl leading-relaxed">
                      Metrik pendapatan, beban operasional, dan indeks risiko SAK EMKM pada dashboard ini dihitung otomatis dari berkas Excel Anda. Silakan unggah pembukuan kas untuk menampilkan visualisasi penuh.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleMenuClick("keuangan")}
                  className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition-all shrink-0"
                >
                  <span>Unggah Berkas Sekarang</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            )}

            {/* SECTION 1: TOP 4 METRIC CARDS (DINAMIS DARI LAPORAN KEUANGAN) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1: Total Pendapatan */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      TOTAL PENDAPATAN
                    </span>
                    {hasFinancialReport && (
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                        Laporan Riil
                      </span>
                    )}
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    {hasFinancialReport
                      ? `Rp ${Number(metrics.revenue).toLocaleString("id-ID")}`
                      : "Rp 0"}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-50">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-slate-500 text-[11px]">
                      Target: Rp {Number(metrics.targetRevenue).toLocaleString("id-ID")}
                    </span>
                    <span className="font-bold text-blue-700 text-xs">
                      {metrics.revenuePercentage}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${metrics.revenuePercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Card 2: Total Pengeluaran */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      TOTAL PENGELUARAN
                    </span>
                    {hasFinancialReport && (
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        Beban Kas
                      </span>
                    )}
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    {hasFinancialReport
                      ? `Rp ${Number(metrics.expenses).toLocaleString("id-ID")}`
                      : "Rp 0"}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-50 flex items-center gap-1.5 text-[11px] text-slate-500">
                  <div className="w-3.5 h-3.5 rounded-full border border-slate-400 border-t-blue-600 shrink-0"></div>
                  <span>
                    {hasFinancialReport
                      ? "Komponen: Beban Pokok & Operasional Toko"
                      : "Belum ada data pengeluaran terunggah"}
                  </span>
                </div>
              </div>

              {/* Card 3: Laba Bersih */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      LABA BERSIH
                    </span>
                    {hasFinancialReport && (
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded ${metrics.netProfit >= 0
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-red-50 text-red-600"
                          }`}
                      >
                        {metrics.netProfit >= 0
                          ? `Margin Positif (+${metrics.marginPercent})`
                          : `Margin Negatif (${metrics.marginPercent})`}
                      </span>
                    )}
                  </div>
                  <div
                    className={`text-xl sm:text-2xl font-extrabold mt-1 ${hasFinancialReport && metrics.netProfit < 0
                        ? "text-red-600"
                        : "text-slate-900"
                      }`}
                  >
                    {hasFinancialReport
                      ? `${metrics.netProfit < 0 ? "-Rp " : "Rp "}${Math.abs(
                        metrics.netProfit
                      ).toLocaleString("id-ID")}`
                      : "Rp 0"}
                  </div>
                </div>

                <div className="mt-4 pt-2">
                  {hasFinancialReport ? (
                    <div
                      className={`border rounded-md p-2 flex items-center gap-1.5 text-[11px] font-medium ${metrics.netProfit < 0
                          ? "bg-red-50/90 border-red-200/70 text-red-700"
                          : "bg-emerald-50/90 border-emerald-200/70 text-emerald-800"
                        }`}
                    >
                      {metrics.netProfit < 0 ? (
                        <AlertTriangle size={13} className="shrink-0 text-red-600" />
                      ) : (
                        <CheckCircle2 size={13} className="shrink-0 text-emerald-600" />
                      )}
                      <span>
                        {metrics.netProfit < 0
                          ? "Defisit kas operasional di periode laporan"
                          : "Surplus kas operasional dalam kondisi sehat"}
                      </span>
                    </div>
                  ) : (
                    <div className="text-[11px] text-slate-400">
                      Menunggu unggahan laporan laba-rugi
                    </div>
                  )}
                </div>
              </div>

              {/* Card 4: Status Risiko Keuangan */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      STATUS RISIKO KEUANGAN
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded ${metrics.riskLevel === "SEHAT" || metrics.riskLevel === "AMAN"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : metrics.riskLevel === "WASPADA"
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : metrics.riskLevel === "RISIKO_TINGGI" || metrics.riskLevel === "RISIKO TINGGI"
                              ? "bg-red-50 text-red-700 border border-red-200"
                              : "bg-slate-100 text-slate-500"
                        }`}
                    >
                      {metrics.riskLevel}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      {metrics.riskIndex.toFixed(1)}
                    </span>
                    <span className="text-xs text-slate-400">
                      / 100 Indeks Risiko
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-50 flex items-start gap-1.5 text-[11px] text-slate-500 leading-tight">
                  <TrendingUp size={13} className="shrink-0 text-blue-600 mt-0.5" />
                  <span>
                    {metrics.riskLevel === "SEHAT"
                      ? "Rasio likuiditas stabil untuk ekspansi usaha"
                      : metrics.riskLevel === "WASPADA"
                        ? "Evaluasi efisiensi sebelum komitmen sewa tempat baru"
                        : "Prioritaskan restrukturisasi arus kas mendesak"}
                  </span>
                </div>
              </div>
            </div>

            {/* SECTION 2: GRAFIK TREN (KIRI) & RINGKASAN LOKASI (KANAN) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* KIRI: TREN PENDAPATAN VS BEBAN OPERASIONAL (DIBUAT & DIANALISIS AI) */}
              <div className="lg:col-span-7 min-w-0 bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-sm flex flex-col justify-between space-y-5">
                <div>
                  {/* Header Tren dengan Penanda AI */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-sm sm:text-base font-bold text-slate-900">
                          Tren Pendapatan vs Beban Operasional
                        </h2>
                        <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-200">
                          <Sparkles size={11} />
                          Analisis AI
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                        {hasFinancialReport
                          ? "Perbandingan arus kas masuk dan beban bulanan dari pembukuan Anda"
                          : "Silakan unggah laporan keuangan untuk melihat visualisasi grafik"}
                      </p>
                    </div>

                    {/* Chart Legend */}
                    {hasFinancialReport && (
                      <div className="flex items-center gap-3 text-xs">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-sm bg-blue-600"></div>
                          <span className="text-slate-600 text-[11px]">
                            Pendapatan
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-sm bg-[#B91C1C]"></div>
                          <span className="text-slate-600 text-[11px]">
                            Beban Operasional
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Ringkasan Tren oleh AI */}
                  {hasFinancialReport && (
                    <div className="bg-slate-50 border border-slate-200/70 rounded-lg p-3 text-xs text-slate-700 mt-3 flex items-start gap-2">
                      <TrendingUp size={15} className="text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900">Sintesis Tren Arus Kas:</strong>{" "}
                        {aiInsights.trendSummary}
                      </div>
                    </div>
                  )}

                  {/* Bar Chart Visualization Dinamis dengan Horizontal Scrolling */}
                  {hasFinancialReport ? (
                    <div className="pt-6 pb-1 w-full min-w-0">
                      {/* Petunjuk scroll jika terdapat lebih dari 4 periode */}
                      {chartPeriods.length > 4 && (
                        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2 px-1">
                          <span>Menampilkan {chartPeriods.length} periode pembukuan</span>
                          <span className="flex items-center gap-1 text-blue-600 font-medium text-[10px]">
                            Geser horizontal untuk melihat bulan lainnya →
                          </span>
                        </div>
                      )}
                      
                      {/* Kontainer Scroll Horizontal */}
                      <div className="overflow-x-auto overflow-y-hidden pb-3 [scrollbar-width:thin] [scrollbar-color:#cbd5e1_transparent] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-400">
                        <div
                          className="h-56 flex items-end gap-6 sm:gap-8 px-2 sm:px-4 border-b border-slate-200"
                          style={{
                            minWidth: chartPeriods.length > 4 ? `${chartPeriods.length * 115}px` : "100%",
                            justifyContent: chartPeriods.length <= 4 ? "space-around" : "flex-start",
                          }}
                        >
                          {chartPeriods.map((period, idx) => {
                            const revHeight = Math.max(
                              20,
                              Math.round((period.revenue / maxBarValue) * 170)
                            );
                            const expHeight = Math.max(
                              20,
                              Math.round((period.expenses / maxBarValue) * 170)
                            );
                            const isDeficit = period.net < 0;

                            return (
                              <div
                                key={idx}
                                className="flex flex-col items-center shrink-0 w-24 sm:w-28"
                              >
                                <div className="w-full flex items-end justify-center gap-1.5 sm:gap-2">
                                  {/* Bar Pendapatan (Biru) */}
                                  <div className="flex flex-col items-center">
                                    <span className="text-[10px] font-bold text-slate-600 mb-1">
                                      {(period.revenue / 1000000).toFixed(1)}M
                                    </span>
                                    <div
                                      className="w-7 sm:w-8 bg-blue-600 rounded-t-md hover:bg-blue-700 transition-all cursor-pointer shadow-xs"
                                      style={{ height: `${revHeight}px` }}
                                      title={`Pendapatan ${period.month}: Rp ${period.revenue.toLocaleString("id-ID")}`}
                                    ></div>
                                  </div>

                                  {/* Bar Beban (Merah) */}
                                  <div className="flex flex-col items-center">
                                    <span className="text-[10px] font-bold text-slate-600 mb-1">
                                      {(period.expenses / 1000000).toFixed(1)}M
                                    </span>
                                    <div
                                      className="w-7 sm:w-8 bg-[#B91C1C] rounded-t-md hover:bg-red-800 transition-all cursor-pointer shadow-xs"
                                      style={{ height: `${expHeight}px` }}
                                      title={`Beban ${period.month}: Rp ${period.expenses.toLocaleString("id-ID")}`}
                                    ></div>
                                  </div>
                                </div>

                                <div className="mt-3 text-center w-full px-1">
                                  <div className="text-xs font-bold text-slate-800 truncate" title={period.month}>
                                    {period.month}
                                  </div>
                                  <div
                                    className={`text-[10px] font-semibold mt-0.5 truncate ${
                                      isDeficit ? "text-red-600" : "text-emerald-600"
                                    }`}
                                  >
                                    {isDeficit
                                      ? `-Rp ${(Math.abs(period.net) / 1000000).toFixed(2)}M`
                                      : `+Rp ${(period.net / 1000000).toFixed(2)}M`}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Tampilan Placeholder Jika Belum Upload */
                    <div className="p-10 text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                        <TrendingUp size={24} />
                      </div>
                      <div className="max-w-sm mx-auto">
                        <div className="text-xs font-bold text-slate-700">
                          Grafik Tren Belum Tersedia
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">
                          Unggah file Excel laporan laba-rugi untuk menghasilkan grafik perbandingan pendapatan vs beban operasional bulanan.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Catatan Analis NEXUM Box (Dihasilkan oleh AI) */}
                <div className="bg-[#EEF4FF] rounded-xl p-4 flex items-start gap-3 border border-blue-200/80 shadow-xs">
                  <div className="p-1.5 bg-blue-600 text-white rounded-lg shrink-0 mt-0.5">
                    <Sparkles size={16} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-bold text-blue-950">
                        Catatan Analis NEXUM
                      </h3>
                      <span className="text-[9px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.2 rounded uppercase">
                        AI Gemini Insight
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-blue-900/90 leading-relaxed">
                      {aiInsights.analystNote}
                    </p>
                  </div>
                </div>
              </div>

              {/* KANAN: RINGKASAN KELAYAKAN LOKASI (DARI SIMULASI SAW & AI) */}
              <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-sm space-y-4">
                {/* Header Ringkasan Lokasi */}
                <div className="flex items-start justify-between pb-3 border-b border-slate-100">
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-slate-900">
                      Ringkasan Kelayakan Lokasi
                    </h2>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Komputasi SAW terpadu dengan Rekomendasi AI
                    </p>
                  </div>
                  <span
                    className={`font-extrabold text-xs px-2.5 py-1 rounded-md tracking-wider ${latestLocation?.status === "LAYAK"
                        ? "bg-sky-100 text-blue-900 border border-sky-200"
                        : "bg-slate-100 text-slate-600"
                      }`}
                  >
                    {latestLocation ? latestLocation.status : "BELUM DISIMULASI"}
                  </span>
                </div>

                {/* Candidate Location Card */}
                <div className="bg-[#EEF4FF] rounded-xl p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0A2540] text-white flex items-center justify-center shrink-0">
                      <Store size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        {latestLocation ? latestLocation.name : "Kandidat Belum Dipilih"}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {latestLocation ? latestLocation.category : "Mulai simulasi kelayakan cabang"}
                      </div>
                    </div>
                  </div>
                  <Building size={16} className="text-blue-700" />
                </div>

                {/* Score SAW Bar */}
                <div className="pt-1">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      SKOR PREFERENSI V_i (SAW)
                    </span>
                    <div className="text-right">
                      <span className="text-2xl font-extrabold text-slate-900">
                        {latestLocation ? latestLocation.score : 0}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">
                        {" "}
                        / 100
                      </span>
                    </div>
                  </div>

                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden relative">
                    <div
                      className="bg-blue-600 h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${Math.min(100, latestLocation ? latestLocation.score : 0)}%`,
                      }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] mt-1.5 text-slate-400">
                    <span>Minimum Rekomendasi</span>
                    <span className="text-amber-700 font-semibold">
                      Ambang batas layak: 65.0
                    </span>
                  </div>
                </div>

                {/* Faktor-Faktor Kunci & Analisis AI */}
                <div className="space-y-2.5 pt-1">
                  {/* Faktor 1: Biaya Sewa */}
                  <div className="bg-[#F8FAFD] border border-slate-100 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                      <div className="text-xs font-bold text-slate-900">
                        Faktor Kunci SAW: Biaya Sewa
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 pl-5 leading-relaxed">
                      {latestLocation
                        ? latestLocation.factors || "Optimal terhadap kapasitas modal usaha."
                        : "Lakukan analisis lokasi untuk melihat rasio sewa terhadap arus kas."}
                    </p>
                  </div>

                  {/* Rekomendasi Strategi Lokasi oleh AI */}
                  <div className="bg-amber-50/70 border border-amber-200/80 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <Sparkles size={14} className="text-amber-600 shrink-0" />
                      <div className="text-xs font-bold text-amber-950">
                        Saran Taktis Lokasi (Didukung AI)
                      </div>
                    </div>
                    <p className="text-[11px] text-amber-900/90 mt-1 pl-5 leading-relaxed">
                      {aiInsights.locationAdvice}
                    </p>
                  </div>
                </div>

                {/* Verification Notice */}
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 pt-1">
                  <Lock size={11} />
                  <span>Perhitungan SAW & Analisis AI Terverifikasi</span>
                </div>

                {/* Action Link */}
                <div className="pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => handleMenuClick("lokasi")}
                    className="w-full flex items-center justify-between text-xs font-bold text-slate-800 hover:text-blue-700 transition-colors py-1 group"
                  >
                    <span>
                      {latestLocation ? "Simulasi Ulang / Bandingkan Lokasi" : "Mulai Simulasi Lokasi Baru"}
                    </span>
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* BOTTOM CALL TO ACTION BANNER */}
            <div className="bg-[#EEF4FF] border border-blue-100 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100/80 text-blue-700 rounded-lg shrink-0 mt-0.5">
                  <Info size={18} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Butuh Analisis Lebih Mendalam?
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Unggah pembukuan kas terbaru di menu Risiko Keuangan atau bandingkan hingga 3 calon lokasi ruko di menu Kelayakan Lokasi untuk estimasi profit yang akurat.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => handleMenuClick("konsultasi")}
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-[#0A2540] hover:bg-[#071c33] active:scale-95 text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all"
                >
                  <Bot size={15} />
                  <span>Tanya Asisten AI</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
