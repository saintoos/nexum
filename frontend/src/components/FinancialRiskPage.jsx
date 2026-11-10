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
  FileSpreadsheet,
  Download,
  UploadCloud,
  AlertTriangle,
  FileText,
  Printer,
  ArrowRight,
  ShieldAlert,
  Info,
} from "lucide-react";

export default function FinancialRiskPage({ onLogout, onNavigate }) {
  const [activeMenu, setActiveMenu] = useState("keuangan");
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState("");

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
    if (id === "profil" && onNavigate) onNavigate("profile");
    if (id === "keuangan" && onNavigate) onNavigate("finance");
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setIsUploading(true);
      setTimeout(() => {
        setIsUploading(false);
        alert(
          `File ${file.name} berhasil diunggah dan tervalidasi sesuai standar SAK EMKM!`,
        );
      }, 1000);
    }
  };

  const handleDownloadTemplate = () => {
    alert(
      "Mengunduh template pembukuan standar: NEXUM_Template_Keuangan_SAK_EMKM.xlsx",
    );
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
                Analisis Risiko Keuangan Usaha
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                Perhitungan rasio likuiditas, solvabilitas, profitabilitas,
                serta deteksi 3 pola kondisi keuangan (Rule-Based)
              </p>
            </div>

            {/* SECTION 1: UPLOAD EXCEL FILE BOX */}
            <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0">
                  <FileSpreadsheet size={26} />
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-slate-900">
                    Unggah File Laporan Keuangan (.xlsx)
                  </h2>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="inline-block bg-[#F1F4F9] text-slate-600 text-[11px] px-3 py-1 rounded-md font-medium border border-dashed border-slate-300">
                      {fileName
                        ? `File terpilih: ${fileName}`
                        : "Tarik & Lepas File di Sini"}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Gunakan template resmi NEXUM. Maksimal ukuran berkas 5MB
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto shrink-0">
                <button
                  type="button"
                  onClick={handleDownloadTemplate}
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 text-xs text-blue-700 hover:text-blue-900 font-semibold py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Download size={14} />
                  <span>Unduh Template Excel Standar</span>
                </button>

                <label className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-[#0A2540] hover:bg-[#071c33] active:scale-[0.99] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm cursor-pointer transition-all">
                  <UploadCloud size={15} />
                  <span>
                    {isUploading ? "Memproses..." : "Pilih File dari Komputer"}
                  </span>
                  <input
                    type="file"
                    accept=".xlsx,.xls"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* SECTION 2: 4 FINANCIAL RATIO CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1: Indeks Risiko Keuangan */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      INDEKS RISIKO KEUANGAN
                    </span>
                    <span className="bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold px-2 py-0.5 rounded">
                      WASPADA
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-extrabold text-slate-900">
                      65.0
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">
                      / 100
                    </span>
                  </div>

                  {/* Visual 3-Zone Indicator Bar */}
                  <div className="mt-3">
                    <div className="h-2 rounded-full flex overflow-hidden w-full">
                      <div
                        className="bg-emerald-500 w-1/3"
                        title="Aman (0-33)"
                      ></div>
                      <div
                        className="bg-amber-400 w-1/3 relative"
                        title="Waspada (34-66)"
                      >
                        <div className="absolute top-0 right-3 w-1.5 h-full bg-slate-900 rounded-full"></div>
                      </div>
                      <div
                        className="bg-red-500 w-1/3"
                        title="Bahaya (67-100)"
                      ></div>
                    </div>
                    <div className="flex justify-between text-[9px] text-slate-400 mt-1 font-bold">
                      <span>AMAN</span>
                      <span className="text-amber-700">WASPADA (65.0)</span>
                      <span>KRITIS</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-50 flex items-start gap-1.5 text-[11px] text-slate-500">
                  <Info size={13} className="shrink-0 text-amber-600 mt-0.5" />
                  <span>
                    Potensi distress kas moderat dalam 3 bulan mendatang
                  </span>
                </div>
              </div>

              {/* Card 2: Current Ratio */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      CURRENT RATIO (LIKUIDITAS)
                    </span>
                    <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded">
                      Bobot 30%
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-2xl font-extrabold text-slate-900">
                      1.10x
                    </span>
                    <span className="bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold px-1.5 py-0.5 rounded">
                      Poin 50
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold text-amber-700 mt-1">
                    ⚠️ Mendekati Batas Aman (1.0x - 1.2x)
                  </div>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-50 text-[11px] text-slate-500 leading-tight">
                  <span className="font-semibold text-slate-700">
                    ! Ideal &gt; 1.20x.
                  </span>{" "}
                  Cadangan kas tipis untuk menutupi utang jangka pendek.
                </div>
              </div>

              {/* Card 3: Net Profit Margin */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      NET PROFIT MARGIN
                    </span>
                    <span className="bg-red-50 text-red-700 text-[10px] font-bold px-1.5 py-0.5 rounded">
                      Bobot 35%
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-2xl font-extrabold text-red-600">
                      -3.0%
                    </span>
                    <span className="bg-red-50 text-red-700 border border-red-200 text-[10px] font-bold px-1.5 py-0.5 rounded">
                      Poin 100
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold text-red-600 mt-1 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-600"></span>
                    <span>Defisit Operasional Periode Ini</span>
                  </div>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-50">
                  <div className="bg-red-50/80 text-red-700 text-[11px] p-2 rounded flex items-start gap-1.5 leading-snug">
                    <AlertTriangle
                      size={13}
                      className="shrink-0 text-red-600 mt-0.5"
                    />
                    <span>
                      Defisit operasional Rp 1.350.000 akibat lonjakan HPP bahan
                      baku
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 4: Debt to Asset Ratio */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      DEBT TO ASSET RATIO
                    </span>
                    <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded">
                      Bobot 25%
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-2xl font-extrabold text-slate-900">
                      0.62x
                    </span>
                    <span className="bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold px-1.5 py-0.5 rounded">
                      Poin 50
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold text-slate-600 mt-1">
                    (62%) Tingkat Leverage Sedang Menuju Tinggi
                  </div>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-50 text-[11px] text-slate-500 leading-tight">
                  &gt;50% aset produktif saat ini dibiayai pinjaman modal kerja
                  pihak ketiga.
                </div>
              </div>
            </div>

            {/* SECTION 3: DETEKSI POLA KONDISI KEUANGAN (RULE-BASED) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldAlert size={18} className="text-[#0A2540]" />
                  <h3 className="text-sm font-bold text-slate-900">
                    Deteksi Pola Kondisi Keuangan
                  </h3>
                </div>
                <span className="text-[11px] text-slate-400">
                  Dievaluasi otomatis terhadap 3 ukuran pola kritis UMKM
                </span>
              </div>

              {/* Pola Kritis 1: Tekanan Likuiditas (Active Critical Pattern) */}
              <div className="bg-red-50/70 border border-red-200 rounded-xl p-4 sm:p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                        POLA KRITIS AKTIF
                      </span>
                      <h4 className="text-sm sm:text-base font-extrabold text-red-950">
                        Tekanan Likuiditas (Liquidity Pressure)
                      </h4>
                    </div>

                    <p className="text-xs text-red-900/90 mt-1.5 leading-relaxed">
                      Likuiditas rendah (Current Ratio 1.10x) disertai margin
                      laba bersih negatif (-3.0%) pada periode evaluasi terbaru
                      September 2026. Aliran kas masuk harian tidak mampu
                      mengimbangi lonjakan beban operasional.
                    </p>

                    <div className="mt-3 bg-white/90 border border-red-200/80 rounded-lg p-3 flex items-start gap-2 text-xs font-semibold text-red-950">
                      <MapPin
                        size={15}
                        className="shrink-0 text-red-600 mt-0.5"
                      />
                      <span>
                        Rekomendasi Utama: Tunda komitmen sewa ruko baru hingga
                        margin stabil &gt; 5% selama minimal 2 bulan
                        berturut-turut.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2 Pola Pendukung (Grid 2 Cols) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Pola 2: Pola Margin Tergerus */}
                <div className="bg-white rounded-xl border border-slate-200/80 p-4 sm:p-5 shadow-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base">📉</span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Pola Margin Tergerus
                    </h4>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                    Pendapatan rata-rata stabil dengan rasio bahan baku masih
                    terkendali di bawah batas ambang 70% dari nilai omzet
                    bulanan.
                  </p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">
                      Ambang Trigger: Gross Margin &lt; 15%
                    </span>
                    <span className="text-emerald-700 font-bold">
                      Aktual: 24.2% (Aman)
                    </span>
                  </div>
                </div>

                {/* Pola 3: Pola Ketergantungan Utang Ekstrem */}
                <div className="bg-white rounded-xl border border-slate-200/80 p-4 sm:p-5 shadow-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base">📊</span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Pola Ketergantungan Utang Ekstrem
                    </h4>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                    Rasio solvabilitas belum mencapai ambang kritis &gt; 0.80x
                    dan kapasitas layanan bunga masih sanggup dipenuhi dari laba
                    kotor.
                  </p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">
                      Ambang Trigger: Debt to Asset &gt; 0.80x
                    </span>
                    <span className="text-emerald-700 font-bold">
                      Aktual: 0.62x (Aman)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 4: MATRIKS EVALUASI ATURAN & SKORING FINANSIAL */}
            <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <FileText size={17} className="text-[#0A2540]" />
                    <h3 className="text-sm font-bold text-slate-900">
                      Matriks Evaluasi Aturan & Skoring Finansial
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Perhitungan matematis pembobotan risiko berbasis formula
                    linear tertimbang
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Total Akumulasi:
                  </span>
                  <span className="bg-[#0A2540] text-white font-bold text-[10px] px-2.5 py-1 rounded">
                    Bobot Tertimbang: 100%
                  </span>
                </div>
              </div>

              {/* Responsive Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                      <th className="py-2.5 px-3">Aturan & Indikator</th>
                      <th className="py-2.5 px-3 text-center">Nilai Aktual</th>
                      <th className="py-2.5 px-3 text-center">Poin Bobot</th>
                      <th className="py-2.5 px-3 text-center">Bobot</th>
                      <th className="py-2.5 px-3 text-center">Skor Terbobot</th>
                      <th className="py-2.5 px-3">
                        Penjelasan Bahasa Awam (UMKM)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {/* Row 1 */}
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
                          <div>
                            <div className="font-bold text-slate-900">
                              Current Ratio
                            </div>
                            <div className="text-[10px] text-slate-400">
                              Rasio Likuiditas Kas
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-center font-bold text-slate-800 font-mono">
                        1.10x
                      </td>
                      <td className="py-3 px-3 text-center">
                        <span className="bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded text-[10px] font-bold">
                          50 Poin
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center text-slate-600 font-medium">
                        30%
                      </td>
                      <td className="py-3 px-3 text-center font-bold text-slate-800">
                        15.0
                      </td>
                      <td className="py-3 px-3 text-[11px] text-slate-500 leading-snug">
                        Likuiditas pas-pasan; jika beberapa tagihan datang
                        serentak kas berisiko langsung defisit
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-red-600 shrink-0"></span>
                          <div>
                            <div className="font-bold text-red-950">
                              Net Profit Margin
                            </div>
                            <div className="text-[10px] text-slate-400">
                              Rasio Keuntungan Bersih
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-center font-bold text-red-600 font-mono">
                        -3.0%
                      </td>
                      <td className="py-3 px-3 text-center">
                        <span className="bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded text-[10px] font-bold">
                          100 Poin
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center text-slate-600 font-medium">
                        35%
                      </td>
                      <td className="py-3 px-3 text-center font-bold text-red-600">
                        35.0
                      </td>
                      <td className="py-3 px-3 text-[11px] text-slate-500 leading-snug">
                        Penjualan belum mampu menutup total beban bulanan
                        (sedang merugi secara operasional)
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
                          <div>
                            <div className="font-bold text-slate-900">
                              Debt to Asset Ratio
                            </div>
                            <div className="text-[10px] text-slate-400">
                              Rasio Beban Solvabilitas
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-center font-bold text-slate-800 font-mono">
                        0.62x
                      </td>
                      <td className="py-3 px-3 text-center">
                        <span className="bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded text-[10px] font-bold">
                          50 Poin
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center text-slate-600 font-medium">
                        25%
                      </td>
                      <td className="py-3 px-3 text-center font-bold text-slate-800">
                        12.5
                      </td>
                      <td className="py-3 px-3 text-[11px] text-slate-500 leading-snug">
                        Lebih dari separuh aset dijaminkan atau bersumber dari
                        kewajiban tempo pinjaman
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
                          <div>
                            <div className="font-bold text-slate-900">
                              Beban vs Pendapatan
                            </div>
                            <div className="text-[10px] text-slate-400">
                              Rasio Disiplin Pengeluaran
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-center font-bold text-slate-800 font-mono">
                        103.0%
                      </td>
                      <td className="py-3 px-3 text-center">
                        <span className="bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded text-[10px] font-bold">
                          50 Poin
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center text-slate-600 font-medium">
                        10%
                      </td>
                      <td className="py-3 px-3 text-center font-bold text-slate-800">
                        2.5
                      </td>
                      <td className="py-3 px-3 text-[11px] text-slate-500 leading-snug">
                        Pengeluaran kas melebihi penerimaan riil sebesar Rp
                        1.350.000 selama bulan berjalan
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Total Score Summary Footer Banner */}
              <div className="bg-[#EEF4FF] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 border border-blue-100">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-700">
                    Total Skor Risiko Tertimbang:
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-extrabold text-slate-900 leading-none">
                      65.0
                    </span>
                    <span className="text-xs font-bold text-amber-700">
                      WASPADA (34 - 66.0)
                    </span>
                  </div>
                </div>

                <div>
                  <span className="bg-blue-600 text-white font-bold text-xs px-3 py-1 rounded-md">
                    Kategori Evaluasi Tingkat Menengah
                  </span>
                </div>
              </div>
            </div>

            {/* SECTION 5: LEGAL NOTICE & ACTION FOOTER */}
            <div className="space-y-4">
              {/* SAK EMKM Disclaimer Notice */}
              <div className="flex items-start gap-2 text-[11px] text-slate-400 leading-relaxed px-1">
                <Info size={14} className="shrink-0 mt-0.5 text-slate-400" />
                <span>
                  Hasil analisis merupakan indikator peringatan dini kesulitan
                  keuangan, bukan prediksi kebangkrutan yang tervalidasi secara
                  hukum. Rekomendasi disusun secara objektif berdasarkan standar
                  akuntansi UMKM (SAK EMKM) Republik Indonesia.
                </span>
              </div>

              {/* Bottom Action Bar */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-4 sm:p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 text-xs text-slate-600">
                  <span className="text-blue-600 font-bold">📈</span>
                  <span>
                    Langkah selanjutnya: optimalkan proyeksi harga pokok dan
                    perputaran modal kerja
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
                  >
                    <Printer size={13} />
                    <span>Cetak Rekap Audit</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      alert("Membuka asisten Konsultasi AI Gemini...")
                    }
                    className="flex-1 sm:flex-none text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center justify-center gap-1 hover:underline px-2 py-2"
                  >
                    <span>Lihat Rekomendasi di Konsultasi AI</span>
                    <ArrowRight size={13} />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      alert(
                        "Membuka simulator skenario perbaikan margin (What-If Analysis)...",
                      )
                    }
                    className="flex-1 sm:flex-none bg-[#0A2540] hover:bg-[#071c33] active:scale-[0.99] text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-all"
                  >
                    Simulasikan Perbaikan Margin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
