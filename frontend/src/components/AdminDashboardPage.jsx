import React, { useState } from "react";
import {
  ShieldCheck,
  LayoutDashboard,
  Sliders,
  Users,
  FileSpreadsheet,
  History,
  Key,
  Lock,
  Eye,
  EyeOff,
  Save,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  LogOut,
  ExternalLink,
  Search,
  Check,
  X,
  TrendingUp,
  MapPin,
  Clock,
  Shield,
  Activity,
  UserCheck,
  UserX,
  Trash2,
} from "lucide-react";

export default function AdminDashboardPage({
  onLogout,
  onSwitchToUser,
  adminEmail = "daffarazan616@students.unnes.ac.id",
  adminPassword,
  onUpdateAdminPassword,
}) {
  const [activeTab, setActiveTab] = useState("overview");

  // State Password Admin
  const [currentPasswordInput, setCurrentPasswordInput] = useState("");
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordSuccessMessage, setPasswordSuccessMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  // State Modal Reset Password User UMKM
  const [resetUserModal, setResetUserModal] = useState(null);
  const [tempUserPassword, setTempUserPassword] = useState("");
  const [userPasswordResetSuccess, setUserPasswordResetSuccess] = useState("");

  // State Modal Hapus User UMKM
  const [deleteUserModal, setDeleteUserModal] = useState(null);
  const [deleteSuccessMessage, setDeleteSuccessMessage] = useState("");

  // State Konfigurasi Bobot SAW (Kelayakan Lokasi)
  const [sawConfig, setSawConfig] = useState({
    version: "v1.2 (Aktif)",
    threshold: 65.0,
    weights: {
      rentCost: 0.3, // 30%
      competitorCount: 0.25, // 25%
      accessibility: 0.2, // 20%
      marketPotential: 0.25, // 25%
    },
    note: "Penyesuaian bobot rasio pasar pasca-survei UMKM Q3",
  });
  const [sawSaveSuccess, setSawSaveSuccess] = useState(false);

  // State Konfigurasi Finansial (SAK EMKM)
  const [financialRules, setFinancialRules] = useState([
    {
      key: "CR",
      name: "Current Ratio (Likuiditas)",
      weight: 0.15,
      warn: 1.5,
      danger: 1.0,
    },
    {
      key: "QR",
      name: "Quick Ratio (Likuiditas Cepat)",
      weight: 0.15,
      warn: 1.0,
      danger: 0.7,
    },
    {
      key: "NPM",
      name: "Net Profit Margin (Profitabilitas)",
      weight: 0.2,
      warn: 0.05,
      danger: 0.0,
    },
    {
      key: "GPM",
      name: "Gross Profit Margin (Laba Kotor)",
      weight: 0.1,
      warn: 0.3,
      danger: 0.15,
    },
    {
      key: "DAR",
      name: "Debt to Asset Ratio (Solvabilitas)",
      weight: 0.1,
      warn: 0.5,
      danger: 0.7,
    },
    {
      key: "DER",
      name: "Debt to Equity Ratio (Solvabilitas)",
      weight: 0.15,
      warn: 1.0,
      danger: 2.0,
    },
  ]);
  const [financeSaveSuccess, setFinanceSaveSuccess] = useState(false);

  // State Data Pengguna UMKM (Hanya menyisakan Siti Rahma, profil bisnis dikosongkan)
  const [userList, setUserList] = useState([
    {
      id: "usr-1",
      name: "Siti Rahma",
      businessName: "-",
      sector: "-",
      email: "siti@contoh.com",
      nib: "-",
      registeredAt: "12 Okt 2025",
      locationAnalyses: 0,
      isActive: true,
    },
  ]);
  const [userSearch, setUserSearch] = useState("");

  // Audit Logs
  const [auditLogs, setAuditLogs] = useState([
    {
      id: "log-1",
      timestamp: "17 Nov 2026, 14:15",
      actor: adminEmail || "daffarazan616@students.unnes.ac.id",
      action: "UPDATE_CONFIG",
      target: "LOCATION_SAW_v1.2",
      ip: "127.0.0.1",
      status: "SUCCESS",
    },
    {
      id: "log-2",
      timestamp: "17 Nov 2026, 11:30",
      actor: adminEmail || "daffarazan616@students.unnes.ac.id",
      action: "AUTH_LOGIN",
      target: "Admin Portal Session",
      ip: "127.0.0.1",
      status: "SUCCESS",
    },
    {
      id: "log-3",
      timestamp: "16 Nov 2026, 18:42",
      actor: "siti@contoh.com",
      action: "AUTH_LOGIN",
      target: "UMKM Portal Session",
      ip: "182.253.12.98",
      status: "SUCCESS",
    },
  ]);

  // Total bobot SAW
  const totalSawWeight = Object.values(sawConfig.weights).reduce(
    (a, b) => a + Number(b),
    0
  );
  const isSawValid = Math.abs(totalSawWeight - 1.0) < 0.001;

  // Total bobot finansial
  const totalFinanceWeight = financialRules.reduce(
    (a, b) => a + Number(b.weight),
    0
  );

  // Handler ubah password admin
  const handleChangePassword = (e) => {
    e.preventDefault();
    setPasswordErrorMessage("");
    setPasswordSuccessMessage("");

    const currentActualPassword = adminPassword || "Orbit!Kopi72#Langit9Biru";

    if (currentPasswordInput !== currentActualPassword) {
      setPasswordErrorMessage("Kata sandi lama yang Anda masukkan salah.");
      return;
    }

    if (newPasswordInput.length < 6) {
      setPasswordErrorMessage("Kata sandi baru minimal 6 karakter.");
      return;
    }

    if (newPasswordInput !== confirmPasswordInput) {
      setPasswordErrorMessage("Konfirmasi kata sandi baru tidak cocok.");
      return;
    }

    if (onUpdateAdminPassword) {
      onUpdateAdminPassword(newPasswordInput);
    }

    setPasswordSuccessMessage("Kata sandi Administrator berhasil diperbarui!");
    setCurrentPasswordInput("");
    setNewPasswordInput("");
    setConfirmPasswordInput("");

    // Catat log
    setAuditLogs((prev) => [
      {
        id: `log-${Date.now()}`,
        timestamp: "Baru saja",
        actor: adminEmail || "daffarazan616@students.unnes.ac.id",
        action: "CHANGE_ADMIN_PASSWORD",
        target: "Master Security Credentials",
        ip: "127.0.0.1",
        status: "SUCCESS",
      },
      ...prev,
    ]);
  };

  // Handler simpan konfigurasi SAW
  const handleSaveSaw = () => {
    if (!isSawValid) {
      alert("Total bobot kriteria harus tepat 100% (1.00)!");
      return;
    }
    setSawSaveSuccess(true);
    setTimeout(() => setSawSaveSuccess(false), 3000);

    setAuditLogs((prev) => [
      {
        id: `log-${Date.now()}`,
        timestamp: "Baru saja",
        actor: adminEmail || "daffarazan616@students.unnes.ac.id",
        action: "UPDATE_CONFIG",
        target: `LOCATION_SAW_${sawConfig.version}`,
        ip: "127.0.0.1",
        status: "SUCCESS",
      },
      ...prev,
    ]);
  };

  // Handler simpan konfigurasi finansial
  const handleSaveFinance = () => {
    setFinanceSaveSuccess(true);
    setTimeout(() => setFinanceSaveSuccess(false), 3000);
  };

  // Handler toggle status user
  const toggleUserStatus = (id) => {
    setUserList((prev) =>
      prev.map((u) => (u.id === id ? { ...u, isActive: !u.isActive } : u))
    );
  };

  // Handler reset password user
  const handleResetUserPassword = () => {
    if (!tempUserPassword || tempUserPassword.length < 6) {
      alert("Password baru pengguna minimal 6 karakter.");
      return;
    }
    setUserPasswordResetSuccess(
      `Password untuk ${resetUserModal.name} berhasil diubah!`
    );
    setTimeout(() => {
      setUserPasswordResetSuccess("");
      setResetUserModal(null);
      setTempUserPassword("");
    }, 1500);
  };

  // Handler konfirmasi hapus pengguna secara permanen
  const handleConfirmDeleteUser = () => {
    if (!deleteUserModal) return;

    const userToDelete = deleteUserModal;
    setUserList((prev) => prev.filter((u) => u.id !== userToDelete.id));

    // Catat ke Audit Log
    setAuditLogs((prev) => [
      {
        id: `log-${Date.now()}`,
        timestamp: "Baru saja",
        actor: adminEmail || "daffarazan616@students.unnes.ac.id",
        action: "DELETE_USER",
        target: `${userToDelete.name} (${userToDelete.email}) - Akun Dihapus`,
        ip: "127.0.0.1",
        status: "WARNING",
      },
      ...prev,
    ]);

    setDeleteSuccessMessage(
      `Pengguna '${userToDelete.name}' (${userToDelete.email}) berhasil dihapus permanen.`
    );
    setDeleteUserModal(null);

    setTimeout(() => {
      setDeleteSuccessMessage("");
    }, 4000);
  };

  const filteredUsers = userList.filter(
    (u) =>
      u.name.toLowerCase().includes(userSearch.toLowerCase()) ||
      u.businessName.toLowerCase().includes(userSearch.toLowerCase()) ||
      u.email.toLowerCase().includes(userSearch.toLowerCase())
  );

  return (
    <div className="h-screen bg-[#f8fafd] flex flex-col font-sans text-slate-800 overflow-hidden">
      {/* 1. TOP NAVBAR ADMIN */}
      <header className="bg-[#071626] text-white px-4 sm:px-6 py-3 flex items-center justify-between shadow-md shrink-0 z-30 border-b border-blue-950">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-extrabold text-white tracking-wider shadow-sm">
            N
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-wider text-white">
                NEXUM
              </span>
              <span className="bg-blue-500/20 text-sky-400 text-[10px] font-bold px-2 py-0.5 rounded border border-sky-400/30 uppercase tracking-wider">
                Admin Console
              </span>
            </div>
            <p className="text-[10px] text-slate-400 leading-none">
              Institutional Enterprise Management
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Status System Pill */}
          <div className="hidden sm:flex items-center gap-2 bg-[#0E2744] px-3 py-1.5 rounded-full border border-sky-500/20 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-300 text-[11px] font-medium">
              Sistem Aktif (Postgres v16)
            </span>
          </div>

          {/* Tombol Switch to UMKM Preview */}
          <button
            type="button"
            onClick={onSwitchToUser}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#13355C] hover:bg-[#1a4474] text-sky-200 text-xs font-semibold rounded-lg transition-colors border border-sky-400/20"
            title="Lihat tampilan dari sudut pandang Pelaku UMKM"
          >
            <ExternalLink size={13} />
            <span className="hidden sm:inline">Preview Mode UMKM</span>
          </button>

          {/* Admin Profile Pill */}
          <div className="flex items-center gap-2.5 pl-2 border-l border-white/10">
            <div className="text-right hidden sm:block">
              <div className="text-xs font-bold text-white">Admin NEXUM</div>
              <div className="text-[10px] text-sky-300">Super Administrator</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs ring-2 ring-indigo-400/30">
              AD
            </div>
          </div>
        </div>
      </header>

      {/* 2. BODY LAYOUT */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT SIDEBAR ADMIN */}
        <aside className="w-64 bg-white border-r border-slate-200/90 flex flex-col justify-between hidden md:flex shrink-0 h-full overflow-hidden">
          <nav className="p-4 space-y-1.5 flex-1 overflow-y-auto">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
              Menu Utama Admin
            </div>

            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "overview"
                  ? "bg-[#0A2540] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <LayoutDashboard size={16} />
              <span>Ringkasan Sistem</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saw")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "saw"
                  ? "bg-[#0A2540] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Sliders size={16} />
              <span>Bobot Kelayakan (SAW)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("finance")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "finance"
                  ? "bg-[#0A2540] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <TrendingUp size={16} />
              <span>Aturan Rasio (SAK EMKM)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("users")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "users"
                  ? "bg-[#0A2540] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Users size={16} />
              <span>Manajemen Pengguna</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("logs")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "logs"
                  ? "bg-[#0A2540] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <History size={16} />
              <span>Audit Log & Keamanan</span>
            </button>

            <div className="pt-3 pb-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
                Keamanan & Akses
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveTab("password")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "password"
                  ? "bg-[#0A2540] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Key size={16} />
              <span>Password Administrator</span>
            </button>
          </nav>

          {/* Tombol Logout Admin */}
          <div className="p-4 border-t border-slate-100 shrink-0 bg-slate-50/50">
            <button
              type="button"
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut size={16} />
              <span>Keluar dari Admin</span>
            </button>
          </div>
        </aside>

        {/* MAIN ADMIN CONTENT AREA */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* TAB 1: OVERVIEW */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Ringkasan Sistem & Operasional
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Pemantauan terpusat untuk akun UMKM, model evaluasi
                    kelayakan lokasi, dan stabilitas konfigurasi.
                  </p>
                </div>

                {/* 4 Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        TOTAL UMKM TERDAFTAR
                      </span>
                      <div className="text-2xl font-black text-slate-900 mt-1">
                        {userList.length} Entitas
                      </div>
                      <span className="text-[11px] text-emerald-600 font-semibold mt-1 inline-block">
                        {userList.filter((u) => u.isActive).length} Akun Aktif
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Users size={22} />
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        EVALUASI LOKASI (SAW)
                      </span>
                      <div className="text-2xl font-black text-slate-900 mt-1">
                        16 Simulasi
                      </div>
                      <span className="text-[11px] text-blue-600 font-semibold mt-1 inline-block">
                        Rata-rata Skor: 74.2
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                      <MapPin size={22} />
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        MODEL BOBOT AKTIF
                      </span>
                      <div className="text-2xl font-black text-slate-900 mt-1">
                        SAW v1.2
                      </div>
                      <span className="text-[11px] text-emerald-600 font-semibold mt-1 inline-block">
                        Threshold: 65.0 (Optimal)
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                      <Sliders size={22} />
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        SECURITY STATUS
                      </span>
                      <div className="text-2xl font-black text-emerald-600 mt-1">
                        Terproteksi
                      </div>
                      <span className="text-[11px] text-slate-500 mt-1 inline-block">
                        Audit Log: Real-time
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <ShieldCheck size={22} />
                    </div>
                  </div>
                </div>

                {/* Quick Shortcuts Banner */}
                <div className="bg-gradient-to-r from-[#0A2540] to-[#143d66] text-white rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-base font-bold">
                      Kelola Kriteria & Parameter Algoritma
                    </h3>
                    <p className="text-xs text-sky-200 mt-1 max-w-xl">
                      Perubahan bobot model SAW dan ambang batas risiko keuangan
                      langsung berdampak secara real-time pada seluruh hasil
                      analisis pengguna UMKM.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveTab("saw")}
                      className="px-4 py-2 bg-white text-[#0A2540] hover:bg-slate-100 text-xs font-bold rounded-lg transition-colors"
                    >
                      Atur Bobot SAW
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("password")}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors"
                    >
                      Ubah Password Admin
                    </button>
                  </div>
                </div>

                {/* Recent Activities */}
                <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-xs">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-slate-900">
                      Riwayat Aktivitas Terakhir
                    </h3>
                    <button
                      type="button"
                      onClick={() => setActiveTab("logs")}
                      className="text-xs text-blue-700 hover:underline font-semibold"
                    >
                      Buka Semua Log →
                    </button>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {auditLogs.slice(0, 4).map((log) => (
                      <div
                        key={log.id}
                        className="py-3 flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          <div>
                            <span className="font-bold text-slate-800">
                              {log.action}
                            </span>{" "}
                            - <span className="text-slate-600">{log.target}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-slate-400 text-[11px]">
                          <span>{log.actor}</span>
                          <span>•</span>
                          <span>{log.timestamp}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: BOBOT SAW (KELAYAKAN LOKASI) */}
            {activeTab === "saw" && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Konfigurasi Bobot Algoritma SAW
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Atur persentase bobot setiap indikator kelayakan ekspansi
                    lokasi UMKM. Total seluruh bobot wajib berjumlah 100% (1.00).
                  </p>
                </div>

                {sawSaveSuccess && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
                    <CheckCircle2 size={16} />
                    <span>
                      Konfigurasi bobot SAW berhasil disimpan dan aktif di
                      seluruh sistem!
                    </span>
                  </div>
                )}

                <div className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-xs space-y-6">
                  {/* Status & Version Header */}
                  <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-100 gap-2">
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase">
                        Versi Model Aktif
                      </div>
                      <div className="text-base font-bold text-[#0A2540]">
                        {sawConfig.version}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className={`text-xs px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 ${
                          isSawValid
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-red-50 text-red-700 border border-red-200"
                        }`}
                      >
                        {isSawValid ? (
                          <Check size={14} />
                        ) : (
                          <AlertTriangle size={14} />
                        )}
                        <span>
                          Total Bobot: {(totalSawWeight * 100).toFixed(0)}%{" "}
                          {isSawValid ? "(Valid)" : "(Wajib 100%)"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Weight Sliders */}
                  <div className="space-y-5">
                    {/* 1. Biaya Sewa */}
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-semibold text-slate-800">
                          1. Biaya Sewa Bulanan (Cost Indicator)
                        </span>
                        <span className="font-bold text-blue-700">
                          {(sawConfig.weights.rentCost * 100).toFixed(0)}% (Bobot:{" "}
                          {sawConfig.weights.rentCost})
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={sawConfig.weights.rentCost}
                        onChange={(e) =>
                          setSawConfig({
                            ...sawConfig,
                            weights: {
                              ...sawConfig.weights,
                              rentCost: parseFloat(e.target.value),
                            },
                          })
                        }
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                      <span className="text-[10px] text-slate-400">
                        Makin murah harga sewa relatif terhadap pembanding, makin
                        tinggi skor.
                      </span>
                    </div>

                    {/* 2. Jumlah Kompetitor */}
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-semibold text-slate-800">
                          2. Kepadatan Kompetitor Sejenis (Cost Indicator)
                        </span>
                        <span className="font-bold text-blue-700">
                          {(sawConfig.weights.competitorCount * 100).toFixed(0)}
                          % (Bobot: {sawConfig.weights.competitorCount})
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={sawConfig.weights.competitorCount}
                        onChange={(e) =>
                          setSawConfig({
                            ...sawConfig,
                            weights: {
                              ...sawConfig.weights,
                              competitorCount: parseFloat(e.target.value),
                            },
                          })
                        }
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                      <span className="text-[10px] text-slate-400">
                        Makin sedikit pesaing dalam radius yang sama, makin tinggi
                        skor kelayakan.
                      </span>
                    </div>

                    {/* 3. Tingkat Aksesibilitas */}
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-semibold text-slate-800">
                          3. Aksesibilitas & Parkir (Benefit Indicator)
                        </span>
                        <span className="font-bold text-blue-700">
                          {(sawConfig.weights.accessibility * 100).toFixed(0)}%
                          (Bobot: {sawConfig.weights.accessibility})
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={sawConfig.weights.accessibility}
                        onChange={(e) =>
                          setSawConfig({
                            ...sawConfig,
                            weights: {
                              ...sawConfig.weights,
                              accessibility: parseFloat(e.target.value),
                            },
                          })
                        }
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                      <span className="text-[10px] text-slate-400">
                        Kemudahan akses kendaraan dan pejalan kaki meningkatkan
                        potensi traffic.
                      </span>
                    </div>

                    {/* 4. Potensi Pasar */}
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-semibold text-slate-800">
                          4. Potensi Pasar & Keramaian (Benefit Indicator)
                        </span>
                        <span className="font-bold text-blue-700">
                          {(sawConfig.weights.marketPotential * 100).toFixed(0)}
                          % (Bobot: {sawConfig.weights.marketPotential})
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={sawConfig.weights.marketPotential}
                        onChange={(e) =>
                          setSawConfig({
                            ...sawConfig,
                            weights: {
                              ...sawConfig.weights,
                              marketPotential: parseFloat(e.target.value),
                            },
                          })
                        }
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                      <span className="text-[10px] text-slate-400">
                        Kedekatan dengan kantor, sekolah, dan area pemukiman
                        padat.
                      </span>
                    </div>
                  </div>

                  {/* Threshold Setting */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-800">
                        Ambang Batas Skor Kelayakan (Feasibility Threshold)
                      </label>
                      <p className="text-[11px] text-slate-500">
                        Skor di atas nilai ini diklasifikasikan sebagai{" "}
                        <strong className="text-emerald-600">LAYAK</strong>, di
                        bawahnya{" "}
                        <strong className="text-red-600">TIDAK LAYAK</strong>.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="50"
                        max="90"
                        value={sawConfig.threshold}
                        onChange={(e) =>
                          setSawConfig({
                            ...sawConfig,
                            threshold: parseFloat(e.target.value) || 65,
                          })
                        }
                        className="w-24 px-3 py-1.5 border border-slate-300 rounded-lg text-sm font-bold text-center text-[#0A2540] outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-xs font-bold text-slate-600">/ 100</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 border-t border-slate-100 flex justify-end">
                    <button
                      type="button"
                      onClick={handleSaveSaw}
                      disabled={!isSawValid}
                      className="px-5 py-2.5 bg-[#0A2540] hover:bg-[#071c33] text-white text-xs font-bold rounded-lg shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <Save size={15} />
                      <span>Simpan & Terapkan Konfigurasi Baru</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: ATURAN FINANSIAL (SAK EMKM) */}
            {activeTab === "finance" && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Konfigurasi Aturan Finansial SAK EMKM
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Konfigurasi bobot dan batas ambang rasio keuangan untuk
                    menilai indeks kesehatan usaha pengguna (Sehat, Waspada,
                    Risiko Tinggi).
                  </p>
                </div>

                {financeSaveSuccess && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
                    <CheckCircle2 size={16} />
                    <span>
                      Aturan rasio finansial SAK EMKM berhasil diperbarui!
                    </span>
                  </div>
                )}

                <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-xs">
                  <div className="p-4 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">
                      Tabel Parameter Rasio Keuangan
                    </span>
                    <span className="text-xs font-bold text-blue-700">
                      Total Bobot: {(totalFinanceWeight * 100).toFixed(0)}%
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-100 text-slate-600 font-bold border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4">Kode & Rasio</th>
                          <th className="py-3 px-4">Bobot (%)</th>
                          <th className="py-3 px-4">Ambang Waspada</th>
                          <th className="py-3 px-4">Ambang Bahaya</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700">
                        {financialRules.map((rule, idx) => (
                          <tr key={rule.key} className="hover:bg-slate-50/50">
                            <td className="py-3 px-4">
                              <span className="font-bold text-[#0A2540]">
                                {rule.key}
                              </span>{" "}
                              - {rule.name}
                            </td>
                            <td className="py-3 px-4">
                              <input
                                type="number"
                                step="0.05"
                                min="0"
                                max="1"
                                value={rule.weight}
                                onChange={(e) => {
                                  const val = parseFloat(e.target.value) || 0;
                                  const updated = [...financialRules];
                                  updated[idx].weight = val;
                                  setFinancialRules(updated);
                                }}
                                className="w-20 px-2 py-1 border border-slate-300 rounded text-center font-bold"
                              />
                            </td>
                            <td className="py-3 px-4">
                              <input
                                type="number"
                                step="0.05"
                                value={rule.warn}
                                onChange={(e) => {
                                  const val = parseFloat(e.target.value) || 0;
                                  const updated = [...financialRules];
                                  updated[idx].warn = val;
                                  setFinancialRules(updated);
                                }}
                                className="w-20 px-2 py-1 border border-amber-300 bg-amber-50 rounded text-center font-bold text-amber-800"
                              />
                            </td>
                            <td className="py-3 px-4">
                              <input
                                type="number"
                                step="0.05"
                                value={rule.danger}
                                onChange={(e) => {
                                  const val = parseFloat(e.target.value) || 0;
                                  const updated = [...financialRules];
                                  updated[idx].danger = val;
                                  setFinancialRules(updated);
                                }}
                                className="w-20 px-2 py-1 border border-red-300 bg-red-50 rounded text-center font-bold text-red-800"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 bg-slate-50 border-t border-slate-200/80 flex justify-end">
                    <button
                      type="button"
                      onClick={handleSaveFinance}
                      className="px-5 py-2 bg-[#0A2540] hover:bg-[#071c33] text-white text-xs font-bold rounded-lg shadow-sm transition-all flex items-center gap-2"
                    >
                      <Save size={14} />
                      <span>Simpan Aturan Finansial</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: MANAJEMEN PENGGUNA */}
            {activeTab === "users" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                      Manajemen Akun Pelaku UMKM
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Kelola daftar pengguna terdaftar, status aktivasi, reset
                      kata sandi, dan penghapusan akun pengguna.
                    </p>
                  </div>

                  {/* Search User */}
                  <div className="relative">
                    <Search
                      size={15}
                      className="absolute left-3 top-2.5 text-slate-400"
                    />
                    <input
                      type="text"
                      placeholder="Cari nama, toko, email..."
                      value={userSearch}
                      onChange={(e) => setUserSearch(e.target.value)}
                      className="pl-9 pr-4 py-2 border border-slate-300 rounded-lg text-xs w-full sm:w-64 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {deleteSuccessMessage && (
                  <div className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>{deleteSuccessMessage}</span>
                  </div>
                )}

                <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-100 text-slate-600 font-bold border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4">Nama Pelaku UMKM</th>
                          <th className="py-3 px-4">Nama Usaha / Toko</th>
                          <th className="py-3 px-4">Sektor Usaha</th>
                          <th className="py-3 px-4">Simulasi SAW</th>
                          <th className="py-3 px-4">Status</th>
                          <th className="py-3 px-4 text-right">Aksi Kelola</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700">
                        {filteredUsers.map((u) => (
                          <tr key={u.id} className="hover:bg-slate-50/50">
                            <td className="py-3 px-4">
                              <div className="font-bold text-slate-900">
                                {u.name}
                              </div>
                              <div className="text-[10px] text-slate-400">
                                {u.email}
                              </div>
                            </td>
                            <td className="py-3 px-4 font-medium text-slate-800">
                              {u.businessName}
                            </td>
                            <td className="py-3 px-4">
                              <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-semibold">
                                {u.sector}
                              </span>
                            </td>
                            <td className="py-3 px-4 font-bold text-blue-700">
                              {u.locationAnalyses} kali
                            </td>
                            <td className="py-3 px-4">
                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  u.isActive
                                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                    : "bg-red-50 text-red-700 border border-red-200"
                                }`}
                              >
                                {u.isActive ? "Aktif" : "Nonaktif / Suspend"}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  type="button"
                                  onClick={() => setResetUserModal(u)}
                                  className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold rounded transition-colors"
                                  title="Reset password pengguna"
                                >
                                  Reset Password
                                </button>
                                <button
                                  type="button"
                                  onClick={() => toggleUserStatus(u.id)}
                                  className={`p-1 rounded transition-colors ${
                                    u.isActive
                                      ? "text-red-600 hover:bg-red-50"
                                      : "text-emerald-600 hover:bg-emerald-50"
                                  }`}
                                  title={
                                    u.isActive
                                      ? "Nonaktifkan akun"
                                      : "Aktifkan akun"
                                  }
                                >
                                  {u.isActive ? (
                                    <UserX size={15} />
                                  ) : (
                                    <UserCheck size={15} />
                                  )}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setDeleteUserModal(u)}
                                  className="p-1 rounded text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"
                                  title="Hapus akun pengguna secara permanen"
                                >
                                  <Trash2 size={15} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: AUDIT LOGS */}
            {activeTab === "logs" && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Audit Log Aktivitas Sistem
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Jejak audit permanen atas seluruh perubahan konfigurasi,
                    autentikasi admin, dan pemrosesan algoritma.
                  </p>
                </div>

                <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-100 text-slate-600 font-bold border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4">Waktu (WIB)</th>
                          <th className="py-3 px-4">Aktor / Akun</th>
                          <th className="py-3 px-4">Aksi Sistem</th>
                          <th className="py-3 px-4">Detail Entitas</th>
                          <th className="py-3 px-4">Alamat IP</th>
                          <th className="py-3 px-4">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700 font-mono text-[11px]">
                        {auditLogs.map((log) => (
                          <tr key={log.id} className="hover:bg-slate-50/50">
                            <td className="py-3 px-4 text-slate-500 whitespace-nowrap">
                              {log.timestamp}
                            </td>
                            <td className="py-3 px-4 font-bold text-slate-800">
                              {log.actor}
                            </td>
                            <td className="py-3 px-4">
                              <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-bold text-[10px]">
                                {log.action}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-slate-600">
                              {log.target}
                            </td>
                            <td className="py-3 px-4 text-slate-400">
                              {log.ip}
                            </td>
                            <td className="py-3 px-4">
                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  log.status === "SUCCESS"
                                    ? "bg-emerald-50 text-emerald-700"
                                    : "bg-amber-50 text-amber-700"
                                }`}
                              >
                                {log.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 6: PENGATURAN PASSWORD ADMIN */}
            {activeTab === "password" && (
              <div className="space-y-6 max-w-2xl">
                <div>
                  <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Pengaturan Kata Sandi Administrator
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Kelola dan perbarui kata sandi akun Administrator Master
                    NEXUM untuk menjaga keamanan portal operasional.
                  </p>
                </div>

                {/* Info Default Credentials & Hash Status */}
                <div className="bg-blue-50 border border-blue-200 text-blue-900 rounded-xl p-4 text-xs flex items-start gap-3">
                  <Shield className="text-blue-600 shrink-0 mt-0.5" size={17} />
                  <div className="space-y-1">
                    <h4 className="font-bold">Informasi Kredensial & Status Keamanan:</h4>
                    <p className="text-blue-800">
                      • Email Superadmin: <strong>{adminEmail || "daffarazan616@students.unnes.ac.id"}</strong>
                      <br />• Password input:{" "}
                      <strong>{adminPassword || "Orbit!Kopi72#Langit9Biru"}</strong>
                      <br />• Status Database Hash:{" "}
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                        TER-HASH (bcrypt 12-round salt)
                      </span>
                    </p>
                    <div className="mt-2 pt-2 border-t border-blue-200/70 text-[11px] text-blue-950">
                      <span className="font-bold">
                        Penyimpanan di Database Kolom{" "}
                        <code className="bg-white px-1 py-0.5 rounded text-blue-900 font-mono">
                          users.password_hash
                        </code>
                        :
                      </span>
                      <div className="font-mono text-[10px] bg-slate-900 text-emerald-400 px-2.5 py-1.5 rounded mt-1 overflow-x-auto select-all">
                        $2b$12$e8iXyJ9zQ3mU2p1a9KZ7ve4G1dZ0YlqV9B7x... (60 karakter string hash irreversibel)
                      </div>
                    </div>
                  </div>
                </div>

                {passwordSuccessMessage && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
                    <CheckCircle2 size={16} />
                    <span>{passwordSuccessMessage}</span>
                  </div>
                )}

                {passwordErrorMessage && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl text-xs flex items-center gap-2">
                    <AlertTriangle size={16} />
                    <span>{passwordErrorMessage}</span>
                  </div>
                )}

                <div className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-xs">
                  <form onSubmit={handleChangePassword} className="space-y-4">
                    {/* Password Lama */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Kata Sandi Saat Ini
                      </label>
                      <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                        <div className="pl-3 text-slate-400">
                          <Lock size={15} />
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          value={currentPasswordInput}
                          onChange={(e) =>
                            setCurrentPasswordInput(e.target.value)
                          }
                          placeholder="Masukkan sandi saat ini"
                          required
                          className="w-full bg-transparent py-2.5 px-3 text-xs sm:text-sm text-slate-800 outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="pr-3 text-slate-400 hover:text-slate-600"
                        >
                          {showPassword ? (
                            <EyeOff size={16} />
                          ) : (
                            <Eye size={16} />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Password Baru */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Kata Sandi Baru
                      </label>
                      <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                        <div className="pl-3 text-slate-400">
                          <Key size={15} />
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          value={newPasswordInput}
                          onChange={(e) => setNewPasswordInput(e.target.value)}
                          placeholder="Minimal 6 karakter"
                          required
                          className="w-full bg-transparent py-2.5 px-3 text-xs sm:text-sm text-slate-800 outline-none"
                        />
                      </div>
                    </div>

                    {/* Konfirmasi Password Baru */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Ulangi Kata Sandi Baru
                      </label>
                      <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                        <div className="pl-3 text-slate-400">
                          <Key size={15} />
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          value={confirmPasswordInput}
                          onChange={(e) =>
                            setConfirmPasswordInput(e.target.value)
                          }
                          placeholder="Ulangi kata sandi baru"
                          required
                          className="w-full bg-transparent py-2.5 px-3 text-xs sm:text-sm text-slate-800 outline-none"
                        />
                      </div>
                    </div>

                    {/* Tombol Simpan */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-2.5 bg-[#0A2540] hover:bg-[#071c33] text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                      >
                        <Save size={16} />
                        <span>Perbarui Kata Sandi Admin</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* MODAL RESET PASSWORD PENGGUNA */}
      {resetUserModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-sm text-[#0A2540]">
                Reset Kata Sandi Pengguna
              </h3>
              <button
                type="button"
                onClick={() => setResetUserModal(null)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X size={18} />
              </button>
            </div>

            <div className="py-4 space-y-3">
              <p className="text-xs text-slate-600">
                Atur kata sandi baru sementara untuk akun pelaku UMKM:{" "}
                <strong className="text-slate-900">
                  {resetUserModal.name}
                </strong>{" "}
                ({resetUserModal.email}).
              </p>

              {userPasswordResetSuccess ? (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs font-semibold">
                  {userPasswordResetSuccess}
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Kata Sandi Baru
                  </label>
                  <input
                    type="text"
                    value={tempUserPassword}
                    onChange={(e) => setTempUserPassword(e.target.value)}
                    placeholder="Contoh: UmkmRahma#2026"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                  />
                </div>
              )}
            </div>

            {!userPasswordResetSuccess && (
              <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setResetUserModal(null)}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={handleResetUserPassword}
                  className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-xs"
                >
                  Simpan Password Baru
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL KONFIRMASI HAPUS PENGGUNA */}
      {deleteUserModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-red-100 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center gap-3 text-red-600 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                <Trash2 size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  Hapus Akun Pengguna?
                </h3>
                <p className="text-xs text-slate-500">
                  Tindakan ini permanen dan tidak dapat dibatalkan.
                </p>
              </div>
            </div>

            <div className="bg-red-50/60 border border-red-200/60 rounded-xl p-3.5 mb-4 space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Nama Pelaku:</span>
                <span className="font-bold text-slate-900">{deleteUserModal.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Email Terdaftar:</span>
                <span className="font-mono text-slate-800">{deleteUserModal.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Toko / Usaha:</span>
                <span className="text-slate-800">{deleteUserModal.businessName}</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-5 leading-relaxed">
              Seluruh data profil bisnis, riwayat analisis SAW, dan log terkait akun ini akan dihapus dari sistem.
            </p>

            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setDeleteUserModal(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleConfirmDeleteUser}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
              >
                <Trash2 size={14} />
                <span>Ya, Hapus Permanen</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
