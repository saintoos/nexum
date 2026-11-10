import React from 'react';

const metrics = [
  {
    stat: "3.2x",
    statColor: "text-[#00236F]",
    title: "Kecepatan Analisis Lokasi",
    description: "Memangkas waktu survei lapangan dari rata-rata 3 minggu menjadi hitungan menit."
  },
  {
    stat: "40%",
    statColor: "text-[#0051D5]",
    title: "Pengurangan Risiko Kerugian Modal",
    description: "Deteksi dini beban overhead sewa dan proyeksi kanibalisasi pasar sebelum deposit dibayarkan."
  },
  {
    stat: "100%",
    statColor: "text-[#1E3A8A]",
    title: "Standar Laporan Keuangan UMKM",
    description: "Format kompatibel langsung dengan SAK EMKM dan pembukuan kas harian mikro-bisnis."
  }
];

export default function MetricsSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enclosed Soft Lavender/Blue Container matching Figma */}
        <div className="bg-[#F2F3FF] rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-12 border border-blue-100/60 shadow-sm">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <p className="text-[11px] font-bold tracking-widest uppercase text-[#444651] mb-2">
              DAMPAK NYATA LAPANGAN
            </p>
            <h2 className="text-xl sm:text-2xl md:text-[24px] font-semibold text-[#131B2E] tracking-tight">
              Validasi Performa Pertumbuhan UMKM
            </h2>
          </div>

          {/* 3 Metric White Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-100 flex flex-col justify-start hover:shadow-md transition-shadow"
              >
                <div className={`text-3xl sm:text-4xl md:text-[40px] font-bold ${item.statColor} tracking-tight leading-none mb-3`}>
                  {item.stat}
                </div>
                <h3 className="text-sm sm:text-base md:text-[16px] font-bold text-[#131B2E] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#444651] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
