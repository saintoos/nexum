import React from 'react';
import { Search, Bell, Shield, ChevronDown } from 'lucide-react';

export default function AdminHeader({ onNavigate }) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm px-4 lg:px-8 py-3 flex items-center justify-between">
      {/* Brand info */}
      <div className="flex items-center space-x-3">
        <button 
          onClick={() => onNavigate && onNavigate('landing')} 
          className="text-left group flex items-center space-x-3 focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00236F] to-[#0051D5] flex items-center justify-center text-white font-extrabold text-base shadow-md group-hover:opacity-90 transition-opacity">
            N
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-lg tracking-wider text-[#00236F]">NEXUM</span>
              <span className="h-4 w-px bg-slate-300"></span>
              <span className="text-[11px] font-semibold tracking-widest text-[#0051D5] uppercase">
                Intelligence for UMKM
              </span>
            </div>
            <p className="text-[11px] text-[#444651]">Administrator Control Portal</p>
          </div>
        </button>
      </div>

      {/* Center Search Input */}
      <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
        <div className="relative w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari analitik, lokasi, risiko..."
            className="w-full bg-[#FAF8FF] border border-slate-200 rounded-full pl-10 pr-4 py-1.5 text-xs text-[#131B2E] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0051D5]/20 focus:border-[#0051D5] transition-all"
          />
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-3">
        {/* Notification button */}
        <button 
          className="relative p-2 rounded-lg text-slate-500 hover:text-[#00236F] hover:bg-slate-100 transition-colors"
          title="Notifikasi Sistem"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white"></span>
        </button>

        <div className="h-6 w-px bg-slate-200"></div>

        {/* Admin profile pill */}
        <div className="flex items-center space-x-2.5 pl-1">
          <div className="w-8 h-8 rounded-full bg-[#EAEDFF] border border-[#0051D5]/30 flex items-center justify-center text-[#00236F]">
            <Shield className="w-4 h-4" />
          </div>
          <div className="hidden sm:block text-left">
            <div className="flex items-center space-x-1">
              <span className="text-xs font-semibold text-[#131B2E]">Administrator</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded font-mono font-medium bg-[#00236F] text-white">
                ROOT
              </span>
            </div>
            <p className="text-[10px] text-[#444651]">Super Admin System</p>
          </div>
        </div>
      </div>
    </header>
  );
}
