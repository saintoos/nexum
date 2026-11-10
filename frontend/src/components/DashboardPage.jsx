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
  AlertTriangle,
  Sparkles,
  Info,
  CheckCircle2,
  Lock,
  ArrowRight,
  Download,
  Building,
} from "lucide-react";

export default function DashboardPage({ onLogout, onNavigate }) {
  const [activeMenu, setActiveMenu] = useState("beranda");

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
    if (id === "profil" && onNavigate) {
      onNavigate("profile");
    }
  };

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

        {/* User Profile Navigation */}
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

        {/* MAIN DASHBOARD CONTENT */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Dashboard Performa Bisnis
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                Visualisasi agregat data keuangan bulanan dan ringkasan skor
                kelayakan lokasi ekspansi terakhir
              </p>
            </div>

            {/* TOP 4 METRIC CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1: Total Pendapatan */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    TOTAL PENDAPATAN
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    Rp 45.000.000
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-50">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-slate-500 text-[11px]">
                      Target Q3: Rp 50.000.000
                    </span>
                    <span className="font-bold text-blue-700 text-xs">
                      90.0%
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Card 2: Total Pengeluaran */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    TOTAL PENGELUARAN
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    Rp 46.350.000
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-50 flex items-center gap-1.5 text-[11px] text-slate-500">
                  <div className="w-3.5 h-3.5 rounded-full border border-slate-400 border-t-blue-600 shrink-0"></div>
                  <span>Komponen terbesar: Bahan Baku</span>
                </div>
              </div>

              {/* Card 3: Laba Bersih */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      LABA BERSIH
                    </span>
                    <span className="bg-red-50 text-red-600 text-[10px] font-semibold px-2 py-0.5 rounded">
                      Margin Negatif (-3.0%)
                    </span>
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-red-600 mt-1">
                    -Rp 1.350.000
                  </div>
                </div>

                <div className="mt-4 pt-2">
                  <div className="bg-red-50/90 border border-red-200/70 rounded-md p-2 flex items-center gap-1.5 text-[11px] text-red-700 font-medium">
                    <AlertTriangle
                      size={13}
                      className="shrink-0 text-red-600"
                    />
                    <span>Defisit kas operasional bulan September</span>
                  </div>
                </div>
              </div>

              {/* Card 4: Status Risiko Keuangan */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      STATUS RISIKO KEUANGAN
                    </span>
                    <span className="bg-sky-50 text-sky-700 text-[10px] font-bold px-2 py-0.5 rounded">
                      WASPADA
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      65.0
                    </span>
                    <span className="text-xs text-slate-400">
                      / 100 Indeks Risiko
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-50 flex items-start gap-1.5 text-[11px] text-slate-500 leading-tight">
                  <TrendingUp
                    size={13}
                    className="shrink-0 text-blue-600 mt-0.5"
                  />
                  <span>
                    Evaluasi efisiensi sebelum komitmen sewa tempat baru
                  </span>
                </div>
              </div>
            </div>

            {/* MIDDLE SECTION: CHART (LEFT) & LOKASI (RIGHT) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* LEFT: TREN PENDAPATAN VS BEBAN OPERASIONAL */}
              <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-sm flex flex-col justify-between">
                <div>
                  {/* Title & Legend */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                    <div>
                      <h2 className="text-sm sm:text-base font-bold text-slate-900">
                        Tren Pendapatan vs Beban Operasional
                      </h2>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                        Perbandingan arus kas masuk dan beban bulanan (Juli -
                        September 2026)
                      </p>
                    </div>

                    {/* Chart Legend */}
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
                  </div>

                  {/* Bar Chart Visualization */}
                  <div className="pt-8 pb-4">
                    <div className="h-56 flex items-end justify-around gap-4 sm:gap-8 px-2 sm:px-6 border-b border-slate-200">
                      {/* Month 1: Juli 2026 */}
                      <div className="flex flex-col items-center flex-1 max-w-[110px]">
                        <div className="w-full flex items-end justify-center gap-1.5 sm:gap-2">
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-bold text-slate-600 mb-1">
                              15.2M
                            </span>
                            <div className="w-7 sm:w-9 bg-blue-600 rounded-t-md hover:bg-blue-700 transition-all h-36"></div>
                          </div>
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-bold text-slate-600 mb-1">
                              14.9M
                            </span>
                            <div className="w-7 sm:w-9 bg-[#B91C1C] rounded-t-md hover:bg-red-800 transition-all h-[138px]"></div>
                          </div>
                        </div>
                        <div className="mt-3 text-center">
                          <div className="text-xs font-bold text-slate-800">
                            Juli 2026
                          </div>
                          <div className="text-[10px] font-semibold text-emerald-600 mt-0.5">
                            +Rp 300rb net
                          </div>
                        </div>
                      </div>

                      {/* Month 2: Agustus 2026 */}
                      <div className="flex flex-col items-center flex-1 max-w-[110px]">
                        <div className="w-full flex items-end justify-center gap-1.5 sm:gap-2">
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-bold text-slate-600 mb-1">
                              17.1M
                            </span>
                            <div className="w-7 sm:w-9 bg-blue-600 rounded-t-md hover:bg-blue-700 transition-all h-44"></div>
                          </div>
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-bold text-slate-600 mb-1">
                              16.8M
                            </span>
                            <div className="w-7 sm:w-9 bg-[#B91C1C] rounded-t-md hover:bg-red-800 transition-all h-40"></div>
                          </div>
                        </div>
                        <div className="mt-3 text-center">
                          <div className="text-xs font-bold text-slate-800">
                            Agustus 2026
                          </div>
                          <div className="text-[10px] font-semibold text-emerald-600 mt-0.5">
                            +Rp 300rb net
                          </div>
                        </div>
                      </div>

                      {/* Month 3: September 2026 (Defisit) */}
                      <div className="flex flex-col items-center flex-1 max-w-[110px]">
                        <div className="w-full flex items-end justify-center gap-1.5 sm:gap-2">
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-bold text-slate-600 mb-1">
                              12.7M
                            </span>
                            <div className="w-7 sm:w-9 bg-blue-600 rounded-t-md hover:bg-blue-700 transition-all h-32"></div>
                          </div>
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-bold text-slate-600 mb-1">
                              14.65M
                            </span>
                            <div className="w-7 sm:w-9 bg-[#B91C1C] rounded-t-md hover:bg-red-800 transition-all h-40"></div>
                          </div>
                        </div>
                        <div className="mt-3 text-center">
                          <div className="text-xs font-bold text-slate-800">
                            September 2026
                          </div>
                          <div className="text-[10px] font-semibold text-red-600 mt-0.5">
                            -Rp 1.95jt defisit
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Catatan Analis NEXUM Box */}
                <div className="bg-[#EEF4FF] rounded-xl p-3.5 mt-5 flex items-start gap-3 border border-blue-100">
                  <Sparkles
                    size={18}
                    className="text-blue-700 shrink-0 mt-0.5"
                  />
                  <div>
                    <h3 className="text-xs font-bold text-blue-950">
                      Catatan Analis NEXUM
                    </h3>
                    <p className="text-[11px] sm:text-xs text-blue-900/80 leading-relaxed mt-0.5">
                      Peningkatan beban di September dipicu oleh kenaikan harga
                      bahan pokok 12% dan penyesuaian tarif listrik operasional
                      toko. Direkomendasikan evaluasi margin sebelum ekspansi
                      cabang baru.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT: RINGKASAN KELAYAKAN LOKASI */}
              <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-sm space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between pb-3 border-b border-slate-100">
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-slate-900">
                      Ringkasan Kelayakan Lokasi
                    </h2>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Hasil komputasi algoritma Simple Additive Weighting (SAW)
                    </p>
                  </div>
                  <span className="bg-sky-100 text-blue-900 font-extrabold text-xs px-2.5 py-1 rounded-md tracking-wider">
                    LAYAK
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
                        Ruko Jl. Pandanaran No. 12
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Cabang Potensial Semarang Tengah
                      </div>
                    </div>
                  </div>
                  <Building size={16} className="text-blue-700" />
                </div>

                {/* Score SAW Bar */}
                <div className="pt-1">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      SKOR PREFERENSI V_i
                    </span>
                    <div className="text-right">
                      <span className="text-2xl font-extrabold text-slate-900">
                        70
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">
                        {" "}
                        / 100
                      </span>
                    </div>
                  </div>

                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden relative">
                    <div
                      className="bg-blue-600 h-full rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] mt-1.5 text-slate-400">
                    <span>Minimum Rekomendasi</span>
                    <span className="text-amber-700 font-semibold">
                      Ambang batas layak: 65.0
                    </span>
                  </div>
                </div>

                {/* 3 SAW Factor Cards */}
                <div className="space-y-2 pt-1">
                  {/* Factor 1: Biaya Sewa */}
                  <div className="bg-[#F8FAFD] border border-slate-100 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2
                        size={14}
                        className="text-blue-600 shrink-0"
                      />
                      <div className="text-xs font-bold text-slate-900">
                        Faktor Kuat: Biaya Sewa{" "}
                        <span className="text-[10px] font-normal text-slate-400">
                          (Bobot: 0.30)
                        </span>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 pl-5 leading-relaxed">
                      Optimal: Efisiensi sewa Rp 45jt/thn masuk dalam batas
                      alokasi modal Q3.
                    </p>
                  </div>

                  {/* Factor 2: Kompetitor */}
                  <div className="bg-red-50/50 border border-red-100 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <AlertTriangle
                        size={14}
                        className="text-red-600 shrink-0"
                      />
                      <div className="text-xs font-bold text-red-900">
                        Faktor Lemah: Kompetitor{" "}
                        <span className="text-[10px] font-normal text-red-500">
                          (3 Usaha Sejenis)
                        </span>
                      </div>
                    </div>
                    <p className="text-[11px] text-red-700/80 mt-1 pl-5 leading-relaxed">
                      Saturasi: Terdeteksi 3 gerai F&B sejenis dalam radius
                      jangkauan 350m.
                    </p>
                  </div>

                  {/* Factor 3: Parkir & Akses */}
                  <div className="bg-[#F8FAFD] border border-slate-100 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-[10px] shrink-0">
                        P
                      </div>
                      <div className="text-xs font-bold text-slate-900">
                        Aksesibilitas & Parkir{" "}
                        <span className="text-[10px] font-normal text-slate-400">
                          (Nilai: 0.75)
                        </span>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 pl-6 leading-relaxed">
                      Stabil: Luas parkir memadai dengan akses jalan utama 2
                      arah yang aktif.
                    </p>
                  </div>
                </div>

                {/* Verification Notice */}
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 pt-1">
                  <Lock size={11} />
                  <span>Perhitungan SAW Terverifikasi</span>
                </div>

                {/* Action Link */}
                <div className="pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between text-xs font-bold text-slate-800 hover:text-blue-700 transition-colors py-1 group"
                  >
                    <span>Analisis Lokasi Baru</span>
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
                    Unggah pembukuan kas terbaru atau bandingkan hingga 3 lokasi
                    ruko baru sekaligus untuk estimasi ROI yang lebih akurat.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
                <button
                  type="button"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-colors"
                >
                  <Download size={13} />
                  <span>Panduan Format Excel (.xlsx)</span>
                </button>
                <button
                  type="button"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-[#0A2540] hover:bg-[#071c33] active:scale-[0.99] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all"
                >
                  <span>Mulai Simulasi Lokasi</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
