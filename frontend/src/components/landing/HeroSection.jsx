import React from 'react';

export default function HeroSection({ onNavigateToLogin, onNavigateToDashboard }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-[#FAF8FF]">
      {/* Ambient background glows matching Figma radial glow decor */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-b from-blue-400/20 via-blue-200/15 to-transparent rounded-full blur-3xl opacity-75"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[420px] h-[300px] bg-[#0051D5]/10 rounded-full blur-2xl"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Trust Badge Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2E7FF] border border-blue-200/60 shadow-sm mb-6 transition-transform hover:scale-105">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0051D5] animate-pulse"></span>
          <span className="text-xs font-semibold text-[#00236F] tracking-tight">
            Terobosan Analitik UMKM Modern Indonesia
          </span>
        </div>

        {/* Main Verbatim Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-[#131B2E] tracking-tight leading-[1.2] lg:leading-[1.18] max-w-4xl">
          Keputusan Ekspansi Bisnis UMKM{' '}
          <span className="bg-gradient-to-r from-[#00236F] to-[#0051D5] bg-clip-text text-transparent font-extrabold">
            Berbasis Data
          </span>
          , Bukan Sekadar <br className="hidden sm:inline" />
          Insting
        </h1>

        {/* Verbatim Subheadline */}
        <p className="mt-6 text-base sm:text-lg text-[#444651] max-w-2xl leading-relaxed">
          Platform analitik terpadu: evaluasi kelayakan cabang dengan SAW, deteksi risiko keuangan rule-based, dan konsultasi strategi bisnis berbasis Generative AI
        </p>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onNavigateToLogin || onNavigateToDashboard}
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#00236F] hover:bg-[#001B56] text-white text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Mulai Analisis Sekarang
          </button>
        </div>

      </div>
    </section>
  );
}
