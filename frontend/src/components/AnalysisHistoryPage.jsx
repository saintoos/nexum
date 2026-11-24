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
  Archive,
  Compass,
  FileSpreadsheet,
  CheckCircle2,
  Clock,
  ChevronLeft,
  ChevronRight,
  Trash2,
  X,
  AlertTriangle,
} from "lucide-react";

export default function AnalysisHistoryPage({ onLogout, onNavigate }) {
  const [activeMenu, setActiveMenu] = useState("riwayat");
  const [activeTab, setActiveTab] = useState("lokasi"); // 'lokasi' | 'keuangan'
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

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

  // Data Riwayat Lokasi SAW (Dimulai kosong, terisi otomatis saat pengguna menyimpan hasil analisis lokasi)
  const [locationHistory, setLocationHistory] = useState(() => {
    try {
      const saved = localStorage.getItem("nexum_location_history");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (_) {}
    return [];
  });

  // Data Riwayat Analisis Keuangan (Dimulai kosong, terisi otomatis saat pengguna mengunggah berkas keuangan)
  const [financeHistory, setFinanceHistory] = useState(() => {
    try {
      const saved = localStorage.getItem("nexum_finance_history");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (_) {}
    return [];
  });

  // Sinkronisasi data jika ada posting baru di tab/jendela lain
  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const loc = JSON.parse(localStorage.getItem("nexum_location_history") || "[]");
        const fin = JSON.parse(localStorage.getItem("nexum_finance_history") || "[]");
        setLocationHistory(Array.isArray(loc) ? loc : []);
        setFinanceHistory(Array.isArray(fin) ? fin : []);
      } catch (_) {}
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedIds([]);
    setIsDeleteMode(false);
    setCurrentPageNum(1);
  };

  const currentList = activeTab === "lokasi" ? locationHistory : financeHistory;

  // Toggle checklist satu item
  const toggleSelectOne = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Toggle checklist semua item pada tab aktif
  const toggleSelectAll = () => {
    if (selectedIds.length === currentList.length && currentList.length > 0) {
      setSelectedIds([]);
    } else {
      setSelectedIds(currentList.map((item) => item.id));
    }
  };

  // Hapus riwayat yang dicentang (select)
  const handleDeleteSelected = () => {
    if (selectedIds.length === 0) return;
    const count = selectedIds.length;
    if (
      window.confirm(
        `Apakah Anda yakin ingin menghapus ${count} riwayat analisis yang dipilih?`
      )
    ) {
      if (activeTab === "lokasi") {
        const updated = locationHistory.filter(
          (item) => !selectedIds.includes(item.id)
        );
        setLocationHistory(updated);
        localStorage.setItem("nexum_location_history", JSON.stringify(updated));
        if (updated.length === 0) setIsDeleteMode(false);
      } else {
        const updated = financeHistory.filter(
          (item) => !selectedIds.includes(item.id)
        );
        setFinanceHistory(updated);
        localStorage.setItem("nexum_finance_history", JSON.stringify(updated));
        if (updated.length === 0) setIsDeleteMode(false);
      }
      setSelectedIds([]);
    }
  };

  // Hapus SEMUA riwayat pada tab aktif
  const handleDeleteAll = () => {
    if (currentList.length === 0) return;
    const tabLabel =
      activeTab === "lokasi" ? "Kelayakan Lokasi (SAW)" : "Analisis Keuangan";
    if (
      window.confirm(
        `PERINGATAN: Apakah Anda yakin ingin menghapus SEMUA (${currentList.length}) riwayat pada ${tabLabel}? Tindakan ini akan mengosongkan seluruh riwayat dan tidak dapat dibatalkan.`
      )
    ) {
      if (activeTab === "lokasi") {
        setLocationHistory([]);
        localStorage.setItem("nexum_location_history", JSON.stringify([]));
      } else {
        setFinanceHistory([]);
        localStorage.setItem("nexum_finance_history", JSON.stringify([]));
      }
      setSelectedIds([]);
      setIsDeleteMode(false);
    }
  };

  // Batalkan mode hapus
  const handleCancelDeleteMode = () => {
    setIsDeleteMode(false);
    setSelectedIds([]);
  };

  // Metrik ringkasan dinamis
  const totalArsip = locationHistory.length + financeHistory.length;
  const feasibleCount = locationHistory.filter((l) => l.status === "LAYAK").length;
  const feasibilityRate =
    locationHistory.length > 0
      ? `${Math.round((feasibleCount / locationHistory.length) * 100)}%`
      : "-";
  const averageSawScore =
    locationHistory.length > 0
      ? (
          locationHistory.reduce((acc, curr) => acc + Number(curr.score || 0), 0) /
          locationHistory.length
        ).toFixed(1)
      : "-";
  const latestFinance = financeHistory[0] || null;

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

        {/* MAIN HISTORY CONTENT */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Page Header */}
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Riwayat Analisis Usaha
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                Daftar riwayat evaluasi kelayakan lokasi dan analisis risiko keuangan yang tersimpan dari aktivitas analisis Anda
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
                      {totalArsip}
                    </span>
                    <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded">
                      Tersimpan
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-50 text-[11px] text-slate-500">
                  <span>
                    {locationHistory.length} Spasial SAW • {financeHistory.length} Rasio Finansial
                  </span>
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
                      {feasibilityRate}
                    </span>
                    <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded">
                      {feasibleCount} Layak
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
                      {averageSawScore}
                    </span>
                    <span className="text-xs text-slate-400 font-bold">
                      {locationHistory.length > 0 ? "/ 100" : ""}
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-50 text-[11px] text-slate-500">
                  <span>Dari {locationHistory.length} simulasi tersimpan</span>
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
                    <span className="text-lg sm:text-xl font-extrabold text-slate-900">
                      {latestFinance ? latestFinance.period : "-"}
                    </span>
                    {latestFinance && (
                      <span className="bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold px-1.5 py-0.5 rounded">
                        {latestFinance.status}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-50 text-[11px] text-slate-500">
                  <span>
                    {latestFinance ? latestFinance.note : "Belum ada laporan diunggah"}
                  </span>
                </div>
              </div>
            </div>

            {/* SECTION 2: TABS & ACTION BAR */}
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
              {/* Tab Header with Hapus Riwayat Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 px-5 pt-3 pb-3 sm:pb-0 gap-3">
                <div className="flex items-center gap-3">
                  {/* Tab Lokasi */}
                  <button
                    type="button"
                    onClick={() => handleTabChange("lokasi")}
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
                      {locationHistory.length}
                    </span>
                  </button>

                  {/* Tab Keuangan */}
                  <button
                    type="button"
                    onClick={() => handleTabChange("keuangan")}
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
                      {financeHistory.length}
                    </span>
                  </button>
                </div>

                {/* Tombol Aksi Hapus */}
                <div className="flex items-center gap-2.5 pb-2 sm:pb-0">
                  {!isDeleteMode ? (
                    currentList.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setIsDeleteMode(true)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700 border border-red-200/80 rounded-lg transition-all shadow-xs"
                        title="Klik untuk memilih dan menghapus riwayat"
                      >
                        <Trash2 size={13} />
                        <span>Hapus Riwayat</span>
                      </button>
                    )
                  ) : (
                    <div className="flex items-center gap-2 flex-wrap">
                      {/* Tombol Hapus Terpilih */}
                      <button
                        type="button"
                        onClick={handleDeleteSelected}
                        disabled={selectedIds.length === 0}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all shadow-xs ${
                          selectedIds.length > 0
                            ? "text-white bg-red-600 hover:bg-red-700 active:scale-[0.99] cursor-pointer"
                            : "text-slate-400 bg-slate-100 cursor-not-allowed border border-slate-200"
                        }`}
                        title="Hapus hanya riwayat yang dicentang"
                      >
                        <Trash2 size={13} />
                        <span>Hapus Terpilih ({selectedIds.length})</span>
                      </button>

                      {/* Tombol Hapus Semua */}
                      <button
                        type="button"
                        onClick={handleDeleteAll}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-red-700 bg-red-100 hover:bg-red-200 active:scale-[0.99] border border-red-300 rounded-lg transition-all"
                        title="Hapus seluruh riwayat pada kategori ini"
                      >
                        <Trash2 size={13} />
                        <span>Hapus Semua</span>
                      </button>

                      {/* Tombol Batal */}
                      <button
                        type="button"
                        onClick={handleCancelDeleteMode}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                      >
                        <X size={13} />
                        <span>Batal</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Mode Hapus Banner Informasi */}
              {isDeleteMode && (
                <div className="bg-red-50/70 border-b border-red-100 px-5 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2 text-red-900 font-medium">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0"></span>
                    <span>
                      Silakan centang riwayat yang ingin dihapus, lalu klik <strong>"Hapus Terpilih"</strong>, atau klik <strong>"Hapus Semua"</strong> untuk membersihkan seluruh riwayat.
                    </span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[11px] font-bold text-slate-500">
                      {selectedIds.length} dari {currentList.length} dipilih
                    </span>
                    <button
                      type="button"
                      onClick={toggleSelectAll}
                      className="text-xs font-bold text-blue-700 hover:text-blue-900 hover:underline"
                    >
                      {selectedIds.length === currentList.length && currentList.length > 0
                        ? "Batalkan Semua"
                        : "Pilih Semua"}
                    </button>
                  </div>
                </div>
              )}

              {/* SECTION 3: TABLE DATA */}
              {activeTab === "lokasi" ? (
                locationHistory.length === 0 ? (
                  <div className="p-12 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-800">
                        Belum Ada Riwayat Kelayakan Lokasi
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto leading-relaxed">
                        Lakukan simulasi kelayakan pada menu <strong>Kelayakan Lokasi</strong> lalu klik "Simpan ke Riwayat Analisis" agar laporan masuk dan tampil di sini.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50/60 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                          {isDeleteMode && (
                            <th className="py-3 px-3 w-10 text-center">
                              <input
                                type="checkbox"
                                checked={
                                  locationHistory.length > 0 &&
                                  selectedIds.length === locationHistory.length
                                }
                                onChange={toggleSelectAll}
                                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                                title="Pilih semua baris lokasi"
                              />
                            </th>
                          )}
                          <th className="py-3 px-4">TANGGAL & JAM</th>
                          <th className="py-3 px-4">NAMA KANDIDAT LOKASI</th>
                          <th className="py-3 px-4 text-center">
                            WILAYAH / PROVINSI
                          </th>
                          <th className="py-3 px-4 text-center">SKOR SAW</th>
                          <th className="py-3 px-4 text-center">
                            STATUS KELAYAKAN
                          </th>
                          <th className="py-3 px-4">
                            FAKTOR KUNCI
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {locationHistory.map((row) => {
                          const isFeasible = row.status === "LAYAK";
                          const isChecked = selectedIds.includes(row.id);
                          return (
                            <tr
                              key={row.id}
                              onClick={() => {
                                if (isDeleteMode) toggleSelectOne(row.id);
                              }}
                              className={`transition-colors ${
                                isDeleteMode ? "cursor-pointer" : ""
                              } ${
                                isChecked
                                  ? "bg-red-50/40"
                                  : "hover:bg-slate-50/80"
                              }`}
                            >
                              {/* Checkbox Seleksi jika Mode Hapus Aktif */}
                              {isDeleteMode && (
                                <td
                                  className="py-3.5 px-3 text-center"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => toggleSelectOne(row.id)}
                                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                                    title="Pilih baris ini"
                                  />
                                </td>
                              )}

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

                              {/* Wilayah */}
                              <td className="py-3.5 px-4 text-center whitespace-nowrap">
                                <span className="text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                                  {row.category}
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
                                      {Number(row.score).toFixed(1)}
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
                                      style={{ width: `${Math.min(100, row.score)}%` }}
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
                )
              ) : (
                /* TAB 2: DATA RIWAYAT KEUANGAN */
                financeHistory.length === 0 ? (
                  <div className="p-12 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                      <FileSpreadsheet size={22} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-800">
                        Belum Ada Riwayat Analisis Keuangan
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto leading-relaxed">
                        Unggah berkas excel pada menu <strong>Risiko Keuangan</strong> agar hasil audit SAK EMKM tersimpan dan tampil di sini.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50/60 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                          {isDeleteMode && (
                            <th className="py-3 px-3 w-10 text-center">
                              <input
                                type="checkbox"
                                checked={
                                  financeHistory.length > 0 &&
                                  selectedIds.length === financeHistory.length
                                }
                                onChange={toggleSelectAll}
                                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                                title="Pilih semua baris keuangan"
                              />
                            </th>
                          )}
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
                        {financeHistory.map((item) => {
                          const isChecked = selectedIds.includes(item.id);
                          return (
                            <tr
                              key={item.id}
                              onClick={() => {
                                if (isDeleteMode) toggleSelectOne(item.id);
                              }}
                              className={`transition-colors ${
                                isDeleteMode ? "cursor-pointer" : ""
                              } ${
                                isChecked
                                  ? "bg-red-50/40"
                                  : "hover:bg-slate-50/80"
                              }`}
                            >
                              {/* Checkbox Seleksi jika Mode Hapus Aktif */}
                              {isDeleteMode && (
                                <td
                                  className="py-3.5 px-3 text-center"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => toggleSelectOne(item.id)}
                                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                                    title="Pilih baris ini"
                                  />
                                </td>
                              )}

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
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )
              )}

              {/* SECTION 4: FOOTER INFORMASI TOTAL */}
              <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
                <div>
                  Menampilkan <strong className="text-slate-800">{currentList.length}</strong> entri riwayat pada tab {activeTab === "lokasi" ? "Kelayakan Lokasi" : "Risiko Keuangan"} (Total <strong className="text-slate-800">{totalArsip}</strong> laporan tersimpan)
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    disabled={currentPageNum === 1 || currentList.length === 0}
                    onClick={() => setCurrentPageNum((p) => Math.max(1, p - 1))}
                    className="w-7 h-7 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-100 disabled:opacity-40"
                  >
                    <ChevronLeft size={13} />
                  </button>
                  <span className="px-2.5 text-xs font-semibold text-slate-700">
                    Halaman {currentList.length > 0 ? currentPageNum : 0}
                  </span>
                  <button
                    type="button"
                    disabled={currentList.length === 0}
                    onClick={() => setCurrentPageNum((p) => p + 1)}
                    className="w-7 h-7 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-100 disabled:opacity-40"
                  >
                    <ChevronRight size={13} />
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
