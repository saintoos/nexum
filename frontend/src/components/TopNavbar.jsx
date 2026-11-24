import React from "react";
import { Search } from "lucide-react";

export default function TopNavbar({ onNavigate }) {
  return (
    <header className="bg-[#0A2540] text-white px-4 sm:px-6 py-3 flex items-center justify-between shadow-sm shrink-0 z-30">
      {/* Brand Logo */}
      <div
        className="flex items-center gap-3 cursor-pointer select-none"
        onClick={() => onNavigate && onNavigate("dashboard")}
      >
        <span className="font-extrabold text-lg sm:text-xl tracking-wider text-white hover:text-sky-300 transition-colors">
          NEXUM
        </span>
        <span className="text-slate-400 font-light text-sm">|</span>
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-sky-300 uppercase hidden sm:inline-block">
          INTELLIGENCE FOR UMKM
        </span>
      </div>

      {/* Global Search Bar */}
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
        {/* User Profile Pill */}
        <div
          onClick={() => onNavigate && onNavigate("profile")}
          className="flex items-center gap-2.5 cursor-pointer group"
          title="Buka Profil Usaha"
        >
          <div className="text-right hidden sm:block">
            <div className="text-xs font-semibold text-white leading-tight group-hover:text-sky-300 transition-colors">
              Siti Rahma
            </div>
            <div className="text-[10px] text-sky-300 font-medium">
              UMKM RETAIL
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs ring-2 ring-white/20 group-hover:ring-sky-400 transition-all">
            SR
          </div>
        </div>
      </div>
    </header>
  );
}
