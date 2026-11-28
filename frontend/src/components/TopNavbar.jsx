import React from "react";
import { Search } from "lucide-react";

export default function TopNavbar({ onNavigate }) {
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem("user") || "null");
  } catch (_) {}

  const displayName = user?.name || "Pelaku UMKM";
  const displayRole =
    user?.businessProfile?.name
      ? `${user.businessProfile.name} • ${user.businessProfile.sector || "UMKM"}`
      : user?.role === "ADMIN"
      ? "ADMINISTRATOR"
      : "UMKM";
  const initials =
    displayName
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "UM";

  return (
    <header className="bg-[#0A2540] text-white px-4 sm:px-6 py-3 flex items-center justify-between shadow-sm shrink-0 z-30">
      {/* Brand Logo */}
      <div
        className="flex items-center gap-3 cursor-pointer select-none"
        onClick={() => onNavigate && onNavigate("dashboard")}
      >
        <img
          src="/logo-nexum.png"
          alt="NEXUM"
          className="h-7 sm:h-8 w-auto object-contain hover:opacity-90 transition-opacity"
        />
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
              {displayName}
            </div>
            <div className="text-[10px] text-sky-300 font-medium uppercase">
              {displayRole}
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs ring-2 ring-white/20 group-hover:ring-sky-400 transition-all">
            {initials}
          </div>
        </div>
      </div>
    </header>
  );
}
