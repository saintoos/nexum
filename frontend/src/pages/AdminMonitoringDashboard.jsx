import React, { useState, useMemo } from 'react';
import {
  Users,
  MapPin,
  FileSpreadsheet,
  Cpu,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  Clock,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Activity,
  ArrowUpRight,
  Sparkles,
  Server,
  Database,
  Globe2,
  FileText,
  UserCheck,
  UserX
} from 'lucide-react';

export default function AdminMonitoringDashboard() {
  // State for user management
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);

  // Initial user list based on Figma node 41:2
  const initialUsers = [
    {
      id: 'usr_01',
      initials: 'SR',
      name: 'Siti Rahma',
      email: 'siti.rahma@berkahretail.id',
      businessName: 'Toko Berkah Retail',
      registeredDate: '24 Sep 2026',
      status: 'Aktif',
      sector: 'Retail Sembako',
      lastActive: '5 menit lalu',
      analysesCount: 8,
    },
    {
      id: 'usr_08',
      initials: 'BS',
      name: 'Budi Santoso',
      email: 'budi@kopiselasar.com',
      businessName: 'Kopi Selasar Semarang',
      registeredDate: '18 Sep 2026',
      status: 'Aktif',
      sector: 'Food & Beverage',
      lastActive: '23 menit lalu',
      analysesCount: 12,
    },
    {
      id: 'usr_14',
      initials: 'DL',
      name: 'Dewi Lestari',
      email: 'dewi.lestari@sejahtera.co.id',
      businessName: 'Warung Sejahtera Makmur',
      registeredDate: '12 Sep 2026',
      status: 'Aktif',
      sector: 'Kuliner Tradisional',
      lastActive: '48 menit lalu',
      analysesCount: 5,
    },
    {
      id: 'usr_19',
      initials: 'AF',
      name: 'Ahmad Fauzi',
      email: 'fauzi.mandiri@gmail.com',
      businessName: 'Bengkel Mandiri',
      registeredDate: '05 Sep 2026',
      status: 'Nonaktif',
      sector: 'Jasa & Otomotif',
      lastActive: '3 minggu lalu',
      analysesCount: 1,
    },
    {
      id: 'usr_22',
      initials: 'RW',
      name: 'Rina Wijaya',
      email: 'rina.wijaya@fashionoutlet.id',
      businessName: 'Rina Fashion Outlet',
      registeredDate: '29 Agu 2026',
      status: 'Aktif',
      sector: 'Fashion & Tekstil',
      lastActive: '2 jam lalu',
      analysesCount: 15,
    },
  ];

  // Filtering users
  const filteredUsers = useMemo(() => {
    return initialUsers.filter((u) => {
      const matchSearch =
        u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.id.toLowerCase().includes(searchQuery.toLowerCase());

      const matchStatus =
        statusFilter === 'ALL'
          ? true
          : statusFilter === 'ACTIVE'
          ? u.status === 'Aktif'
          : u.status === 'Nonaktif';

      return matchSearch && matchStatus;
    });
  }, [searchQuery, statusFilter]);

  return (
    <div className="space-y-6">
      {/* 1. Header Section */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#EAEDFF] text-[#00236F] border border-[#0051D5]/20">
              Admin Telemetry & User Governance
            </span>
            <span className="flex items-center space-x-1 text-emerald-600 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Live Synced</span>
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#131B2E] mt-2">
            Panel Administrasi & Monitoring Operasional
          </h1>
          <p className="text-xs sm:text-sm text-[#444651] mt-1">
            Pengawasan metrik platform, log aktivitas, dan status integrasi layanan eksternal
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-right hidden sm:block">
            <p className="text-[11px] text-[#444651]">Waktu Server (WIB)</p>
            <p className="text-xs font-mono font-semibold text-[#00236F]">
              {new Date().toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}{' '}
              • 15:45 WIB
            </p>
          </div>
        </div>
      </div>

      {/* 2. System Health & Usage Grid (4 Metric Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Card 1: Total Pengguna */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:border-[#0051D5]/40 transition-all group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold tracking-wider text-[#444651] uppercase">
              Total Pengguna UMKM
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              22 Aktif (91.6%)
            </span>
          </div>
          <div className="flex items-baseline space-x-2 mb-3">
            <span className="text-3xl font-extrabold text-[#00236F]">24</span>
            <span className="text-xs text-[#444651] font-medium">Pengguna Terdaftar</span>
          </div>
          {/* Progress Distribution Bar */}
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex mb-2">
            <div className="bg-[#00236F] h-full" style={{ width: '91.6%' }}></div>
            <div className="bg-slate-300 h-full" style={{ width: '8.4%' }}></div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-[#444651]">
            <span>2 Akun nonaktif</span>
            <span className="font-semibold text-emerald-600">+4 pendaftaran bln ini</span>
          </div>
        </div>

        {/* Card 2: Total Analisis Lokasi */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:border-[#0051D5]/40 transition-all group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold tracking-wider text-[#444651] uppercase">
              Total Analisis Lokasi
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-[#0051D5] border border-blue-200">
              100% Terindeks
            </span>
          </div>
          <div className="flex items-baseline space-x-2 mb-3">
            <span className="text-3xl font-extrabold text-[#00236F]">41</span>
            <span className="text-xs text-[#444651] font-medium">Analisis SAW</span>
          </div>
          {/* Mini Sparkline Visualization */}
          <div className="flex items-center space-x-1.5 h-6 my-1">
            {[40, 65, 55, 80, 70, 90, 85, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-[#EAEDFF] rounded-t group-hover:bg-[#0051D5]/30 transition-colors"
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>
          <div className="flex items-center justify-between text-[11px] text-[#444651]">
            <span>Rata-rata Skor: <strong className="text-[#00236F]">66.4/100</strong></span>
            <span>28 Titik Semarang</span>
          </div>
        </div>

        {/* Card 3: Total Laporan Keuangan */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:border-[#0051D5]/40 transition-all group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold tracking-wider text-[#444651] uppercase">
              Total Laporan Keuangan
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
              Format SAK EMKM
            </span>
          </div>
          <div className="flex items-baseline space-x-2 mb-3">
            <span className="text-3xl font-extrabold text-[#00236F]">33</span>
            <span className="text-xs text-[#444651] font-medium">Berkas .XLSX Diproses</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex mb-2">
            <div className="bg-[#0051D5] h-full w-full"></div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-[#444651]">
            <span>Ukuran Agregat: <strong className="text-[#00236F]">18.4 MB</strong></span>
            <span className="text-emerald-600 font-semibold">0 Gagal Parsing</span>
          </div>
        </div>

        {/* Card 4: Status Layanan AI */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:border-[#0051D5]/40 transition-all group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold tracking-wider text-[#444651] uppercase">
              Status Layanan AI (LLM)
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              OPERASIONAL (99.8%)
            </span>
          </div>
          <div className="flex items-baseline space-x-2 mb-3">
            <span className="text-3xl font-extrabold text-[#00236F]">1.8s</span>
            <span className="text-xs text-[#444651] font-medium">Rata-rata Latensi</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex mb-2">
            <div className="bg-emerald-500 h-full" style={{ width: '85%' }}></div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-[#444651]">
            <span>Model: <strong>Gemini Flash 1.5</strong></span>
            <span>Token: <strong className="text-[#00236F]">85% (876k / 1M)</strong></span>
          </div>
        </div>
      </div>

      {/* 3. Two-Column Master Layout (60% User Management / 40% Service Health & Audit Trail) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN: User Management Table (UC-11 & UC-12) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 sm:p-6 flex flex-col justify-between">
          <div>
            {/* Table Header and Subtitle */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-[#131B2E] flex items-center space-x-2">
                  <Users className="w-5 h-5 text-[#00236F]" />
                  <span>Kelola Pengguna & Entitas UMKM</span>
                </h2>
                <p className="text-xs text-[#444651] mt-0.5">
                  Audit akses akun pelaku usaha terdaftar (UC-11 & UC-12)
                </p>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-1 rounded-lg bg-[#FAF8FF] border border-[#EAEDFF] text-[11px] text-[#00236F] font-semibold">
                  Total: {initialUsers.length} Entitas
                </span>
              </div>
            </div>

            {/* Filter Controls Bar */}
            <div className="flex flex-col sm:flex-row gap-2.5 mb-4">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari nama, email, usaha..."
                  className="w-full bg-[#FAF8FF] border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-[#131B2E] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0051D5]/20 focus:border-[#0051D5]"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-[#FAF8FF] border border-slate-200 rounded-xl px-3 py-2 text-xs text-[#131B2E] focus:outline-none focus:ring-2 focus:ring-[#0051D5]/20 focus:border-[#0051D5]"
              >
                <option value="ALL">Semua Status</option>
                <option value="ACTIVE">Hanya Aktif</option>
                <option value="INACTIVE">Hanya Nonaktif</option>
              </select>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200/80">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF8FF] border-b border-slate-200 text-[#444651] uppercase font-bold text-[10px] tracking-wider">
                  <tr>
                    <th className="py-3 px-3.5">Nama Pengguna</th>
                    <th className="py-3 px-3.5 hidden md:table-cell">Email Akun</th>
                    <th className="py-3 px-3.5">Nama Usaha</th>
                    <th className="py-3 px-3.5 hidden sm:table-cell">Tanggal Daftar</th>
                    <th className="py-3 px-3.5">Status</th>
                    <th className="py-3 px-3.5 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredUsers.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-slate-400">
                        Tidak ada pengguna yang cocok dengan kriteria filter.
                      </td>
                    </tr>
                  ) : (
                    filteredUsers.map((user) => {
                      const isActive = user.status === 'Aktif';
                      return (
                        <tr
                          key={user.id}
                          className="hover:bg-[#FAF8FF]/80 transition-colors group"
                        >
                          {/* Nama Pengguna */}
                          <td className="py-3 px-3.5">
                            <div className="flex items-center space-x-2.5">
                              <div className="w-7 h-7 rounded-full bg-[#EAEDFF] text-[#00236F] font-bold text-[11px] flex items-center justify-center shrink-0">
                                {user.initials}
                              </div>
                              <div>
                                <p className="font-semibold text-[#131B2E]">{user.name}</p>
                                <p className="text-[10px] font-mono text-slate-400">{user.id}</p>
                              </div>
                            </div>
                          </td>

                          {/* Email */}
                          <td className="py-3 px-3.5 hidden md:table-cell text-slate-600 font-mono text-[11px]">
                            {user.email}
                          </td>

                          {/* Nama Usaha */}
                          <td className="py-3 px-3.5">
                            <span className="font-medium text-[#00236F] bg-[#FAF8FF] px-2 py-1 rounded-md border border-slate-200/60 inline-block">
                              {user.businessName}
                            </span>
                          </td>

                          {/* Tanggal Daftar */}
                          <td className="py-3 px-3.5 hidden sm:table-cell text-slate-500">
                            {user.registeredDate}
                          </td>

                          {/* Status Badge */}
                          <td className="py-3 px-3.5">
                            <span
                              className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${
                                isActive
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                  : 'bg-slate-100 text-slate-600 border-slate-200'
                              }`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                                  isActive ? 'bg-emerald-500' : 'bg-slate-400'
                                }`}
                              ></span>
                              {user.status}
                            </span>
                          </td>

                          {/* Aksi */}
                          <td className="py-3 px-3.5 text-right">
                            <div className="flex items-center justify-end space-x-1.5">
                              <button
                                onClick={() => setSelectedUser(user)}
                                className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#FAF8FF] text-[#00236F] border border-[#EAEDFF] hover:bg-[#EAEDFF] hover:border-[#0051D5]/40 transition-colors"
                              >
                                Detail
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination Footer */}
          <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-[#444651] gap-2">
            <span>
              Menampilkan 1-{filteredUsers.length} dari 24 pengguna terdaftar
            </span>
            <div className="flex items-center space-x-1">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 disabled:opacity-40"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-7 h-7 rounded-lg text-xs font-semibold ${
                    currentPage === page
                      ? 'bg-[#00236F] text-white'
                      : 'border border-slate-200 hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                disabled={currentPage === 5}
                onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
                className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 disabled:opacity-40"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Service Health (UC-13) & Real-Time Audit Trail */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card 1: Status Layanan & Infrastruktur (UC-13) */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
            <div className="mb-4">
              <h2 className="text-base font-bold text-[#131B2E] flex items-center space-x-2">
                <Server className="w-4 h-4 text-[#00236F]" />
                <span>Status Layanan & Infrastruktur (UC-13)</span>
              </h2>
              <p className="text-xs text-[#444651] mt-0.5">
                Kesiapan konektivitas dan telemetry dependensi sistem
              </p>
            </div>

            <div className="space-y-3">
              {/* Service 1: REST API Backend */}
              <div className="p-3 rounded-xl bg-[#FAF8FF] border border-[#EAEDFF] flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-xs text-[#131B2E]">REST API Backend</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      ONLINE (99.98%)
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-slate-500 mt-0.5">
                    Endpoint: https://api.nexum.id/v1
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-semibold text-emerald-600">Ping 18ms</span>
                </div>
              </div>

              {/* Service 2: Database PostgreSQL */}
              <div className="p-3 rounded-xl bg-[#FAF8FF] border border-[#EAEDFF] flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-xs text-[#131B2E]">Database PostgreSQL</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      SEHAT (Koneksi Stabil)
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Cloud SQL Primary (Pool: 14/50 active)
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-semibold text-emerald-600">Ping 6ms</span>
                </div>
              </div>

              {/* Service 3: External LLM API */}
              <div className="p-3 rounded-xl bg-[#FAF8FF] border border-[#EAEDFF] flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-xs text-[#131B2E]">External LLM API</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-[#0051D5]">
                      OK (Kuota Aman)
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Gemini Flash RAG • Token: 124k / 1M
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-semibold text-[#0051D5]">Latensi 1.8s</span>
                </div>
              </div>

              {/* Service 4: Geospatial Map Tile Service */}
              <div className="p-3 rounded-xl bg-[#FAF8FF] border border-[#EAEDFF] flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-xs text-[#131B2E]">Geospatial Map Tile Service</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      AKTIF
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    OpenStreetMap CDN Cache Engine
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-semibold text-emerald-600">Hit Rate 94.2%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Log Aktivitas Terbaru (Audit Trail Real-Time) */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
            <div className="mb-4">
              <h2 className="text-base font-bold text-[#131B2E] flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#00236F]" />
                <span>Log Aktivitas Terbaru (Audit Trail)</span>
              </h2>
              <p className="text-xs text-[#444651] mt-0.5">
                Pencatatan real-time eksekusi operasional & permintaan pengguna
              </p>
            </div>

            <div className="space-y-3">
              {/* Log Item 1 */}
              <div className="p-2.5 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-mono text-slate-400">15:41:02</span>
                  <span className="font-semibold text-[#00236F]">usr_01 (Siti Rahma)</span>
                </div>
                <p className="text-xs text-[#131B2E] font-medium mt-1">
                  Chat AI RAG Konsultasi Bisnis
                </p>
                <div className="mt-1 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Model inference query completed</span>
                  <span className="text-emerald-600 font-medium">HTTP 200</span>
                </div>
              </div>

              {/* Log Item 2 */}
              <div className="p-2.5 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-mono text-slate-400">15:38:15</span>
                  <span className="font-semibold text-[#00236F]">usr_01 (Siti Rahma)</span>
                </div>
                <p className="text-xs text-[#131B2E] font-medium mt-1">
                  Unggah berkas SAK EMKM: <code className="bg-slate-100 px-1 py-0.5 rounded text-[10px] text-[#0051D5]">Lap_Q3_2026.xlsx</code>
                </p>
                <div className="mt-1 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Parser validation: 100% passed</span>
                  <span className="text-emerald-600 font-medium">Valid</span>
                </div>
              </div>

              {/* Log Item 3 */}
              <div className="p-2.5 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-mono text-slate-400">15:20:44</span>
                  <span className="font-semibold text-[#00236F]">usr_08 (Budi Santoso)</span>
                </div>
                <p className="text-xs text-[#131B2E] font-medium mt-1">
                  Kalkulasi SAW titik lokasi baru Semarang Timur
                </p>
                <div className="mt-1 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Bobot parameter normalisasi terverifikasi</span>
                  <span className="text-emerald-600 font-medium">Score 78.2</span>
                </div>
              </div>

              {/* Log Item 4 */}
              <div className="p-2.5 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-mono text-slate-400">14:55:10</span>
                  <span className="font-semibold text-[#00236F]">usr_14 (Dewi Lestari)</span>
                </div>
                <p className="text-xs text-[#131B2E] font-medium mt-1">
                  Update profil usaha NIB & Sektor Kuliner
                </p>
                <div className="mt-1 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Audit metadata synchronized</span>
                  <span className="text-emerald-600 font-medium">Sync OK</span>
                </div>
              </div>

              {/* Log Item 5 */}
              <div className="p-2.5 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-mono text-slate-400">14:12:05</span>
                  <span className="font-semibold text-purple-700">sys_cron</span>
                </div>
                <p className="text-xs text-[#131B2E] font-medium mt-1">
                  Sinkronisasi indeks RAG Knowledge Base
                </p>
                <div className="mt-1 flex items-center justify-between text-[10px] text-slate-500">
                  <span>14 Dokumen regulasi terindeks vektor</span>
                  <span className="text-purple-600 font-medium">1,248 Chunks</span>
                </div>
              </div>
            </div>

            {/* Link to Full Log */}
            <div className="mt-4 pt-3 border-t border-slate-100 text-center">
              <button className="text-xs font-semibold text-[#0051D5] hover:text-[#00236F] flex items-center justify-center space-x-1.5 mx-auto group">
                <span>Lihat Seluruh Log Sistem (Audit Trail)</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* User Detail Modal */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#EAEDFF] text-[#00236F] font-bold text-sm flex items-center justify-center">
                  {selectedUser.initials}
                </div>
                <div>
                  <h3 className="font-bold text-[#131B2E] text-base">{selectedUser.name}</h3>
                  <p className="text-xs font-mono text-slate-400">ID: {selectedUser.id}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedUser(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-[#FAF8FF] rounded-xl border border-slate-100">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Nama Usaha</span>
                  <p className="font-bold text-[#00236F] mt-0.5">{selectedUser.businessName}</p>
                </div>
                <div className="p-3 bg-[#FAF8FF] rounded-xl border border-slate-100">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Sektor Bisnis</span>
                  <p className="font-bold text-[#131B2E] mt-0.5">{selectedUser.sector}</p>
                </div>
              </div>

              <div className="p-3 bg-[#FAF8FF] rounded-xl border border-slate-100 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Email Akun:</span>
                  <span className="font-mono text-slate-700">{selectedUser.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Terdaftar Sejak:</span>
                  <span className="text-slate-700">{selectedUser.registeredDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Aktivitas Terakhir:</span>
                  <span className="text-slate-700">{selectedUser.lastActive}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Total Analisis Dijalankan:</span>
                  <span className="font-bold text-[#0051D5]">{selectedUser.analysesCount} Sesi</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end space-x-2">
              <button
                onClick={() => setSelectedUser(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
