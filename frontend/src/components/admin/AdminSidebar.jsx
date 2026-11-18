import React from 'react';
import { Activity, Sliders, LogOut, ArrowLeft, ShieldCheck, Database, Layers } from 'lucide-react';

export default function AdminSidebar({ currentView, onNavigate }) {
  const menuItems = [
    {
      id: 'admin-monitoring',
      label: 'Monitoring & Pengguna',
      description: 'Audit akun, telemetri & log',
      icon: Activity,
    },
    {
      id: 'admin-config',
      label: 'Konfigurasi AI & Parameter',
      description: 'Bobot SAW, RAG & guardrail',
      icon: Sliders,
    },
  ];

  return (
    <aside className="w-full lg:w-64 bg-white border-r border-slate-200 flex flex-col justify-between shrink-0">
      <div className="p-4 lg:p-5">
        {/* Menu Title */}
        <div className="px-3 mb-3">
          <p className="text-[11px] font-bold tracking-wider text-[#444651] uppercase">
            Menu Administrasi
          </p>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate && onNavigate(item.id)}
                className={`w-full flex items-center space-x-3 px-3.5 py-3 rounded-xl text-left transition-all text-xs font-medium ${
                  isActive
                    ? 'bg-[#00236F] text-white shadow-sm shadow-[#00236F]/20 font-semibold'
                    : 'text-[#444651] hover:bg-[#FAF8FF] hover:text-[#00236F]'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-white/15 text-white' : 'bg-[#EAEDFF] text-[#00236F]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="truncate leading-tight">{item.label}</p>
                  <p className={`text-[10px] truncate mt-0.5 ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Extra System Badge */}
        <div className="mt-8 mx-1 p-3.5 rounded-xl bg-[#FAF8FF] border border-[#EAEDFF]">
          <div className="flex items-center space-x-2 text-[#00236F] font-semibold text-xs mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Sistem Operasional</span>
          </div>
          <p className="text-[11px] text-[#444651] leading-relaxed">
            Semua service core analitik (Geo-SAW, SAK EMKM, dan Gemini RAG) berfungsi normal.
          </p>
          <div className="mt-2.5 flex items-center space-x-1.5 text-[10px] text-emerald-700 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Uptime 99.98% 30 Hari</span>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="p-4 border-t border-slate-200 space-y-1">
        <button
          onClick={() => onNavigate && onNavigate('landing')}
          className="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-left text-xs text-[#444651] hover:bg-rose-50 hover:text-rose-700 transition-colors group"
        >
          <LogOut className="w-4 h-4 text-slate-400 group-hover:text-rose-600" />
          <span className="font-medium">Keluar / Logout</span>
        </button>
      </div>
    </aside>
  );
}
