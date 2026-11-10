import React, { useState } from 'react';
import { UserAvatarIcon } from './Icons';

export default function Navbar({ onNavigateToLogin, onNavigateToRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1E3A8A] border-b border-blue-800/40 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[81px] flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <a 
            href="#" 
            className="text-white text-xl md:text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity"
          >
            NEXUM
          </a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={onNavigateToLogin}
            className="px-4 py-2 text-xs md:text-sm font-semibold text-white border border-[#C5C5D3]/60 hover:border-white rounded-lg hover:bg-white/10 transition-colors"
          >
            Masuk
          </button>
          <button
            type="button"
            onClick={onNavigateToRegister}
            className="px-4 py-2 text-xs md:text-sm font-semibold text-[#00236F] bg-white hover:bg-gray-100 rounded-lg shadow-sm transition-colors"
          >
            Daftar Akun
          </button>
          <button 
            type="button"
            onClick={onNavigateToLogin}
            aria-label="Profil Pengguna"
            className="ml-1 p-0.5 rounded-full hover:ring-2 hover:ring-white/40 transition-all focus:outline-none"
          >
            <UserAvatarIcon className="w-8 h-8 rounded-full" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="sm:hidden flex items-center gap-2">
          <button 
            type="button"
            onClick={onNavigateToLogin}
            aria-label="Profil Pengguna"
            className="p-0.5 rounded-full"
          >
            <UserAvatarIcon className="w-7 h-7 rounded-full" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-blue-200 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#162e6e] px-4 pt-3 pb-5 border-t border-blue-700/50 space-y-3">
          <button
            type="button"
            onClick={() => { setMobileMenuOpen(false); onNavigateToLogin?.(); }}
            className="block text-center w-full py-2.5 text-sm font-semibold text-white border border-[#C5C5D3]/60 rounded-lg hover:bg-white/10"
          >
            Masuk
          </button>
          <button
            type="button"
            onClick={() => { setMobileMenuOpen(false); onNavigateToRegister?.(); }}
            className="block text-center w-full py-2.5 text-sm font-semibold text-[#00236F] bg-white rounded-lg hover:bg-gray-100"
          >
            Daftar Akun
          </button>
        </div>
      )}
    </header>
  );
}
