import React from 'react';

export default function CtaBanner({ onNavigateToRegister, onNavigateToLogin }) {
  return (
    <section className="bg-transparent py-8 md:pt-8 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card Container with radial decorative lighting */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#1E3A8A] via-[#1B357F] to-[#132A6B] rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl">
          
          {/* Radial Lighting Decorative Highlights */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-[#0051D5]/40 rounded-full blur-3xl"
          />
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-[#0D0097]/50 rounded-full blur-3xl"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-white tracking-tight leading-tight">
                Siap Mengembangkan Jaringan <br className="hidden sm:inline" />
                Bisnis UMKM Anda?
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-[16px] text-white/85 leading-relaxed">
                Coba simulasi kelayakan cabang baru gratis tanpa komitmen.
              </p>
            </div>

            {/* Right CTA Button */}
            <div className="flex-shrink-0">
              <button
                type="button"
                onClick={onNavigateToRegister || onNavigateToLogin}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 bg-white hover:bg-blue-50 text-[#00236F] text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Mulai Analisis Gratis
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
