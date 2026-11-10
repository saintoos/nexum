import React from 'react';
import { LocationEngineIcon, FinanceAuditIcon, AiCopilotIcon } from './Icons';

const features = [
  {
    icon: <LocationEngineIcon className="w-12 h-12" />,
    badge: "Geo-Spatial SAW Engine",
    badgeColor: "bg-[#EAEDFF] text-[#00236F]",
    title: "Kelayakan Lokasi Cabang",
    description: "Metode SAW multi-kriteria untuk menilai biaya sewa, kompetitor, akses, dan potensi pasar.",
    tags: [
      "Simple Additive Weighting",
      "Radius Kompetitor",
      "Skor Aksesibilitas"
    ]
  },
  {
    icon: <FinanceAuditIcon className="w-12 h-12" />,
    badge: "Rule-Based Financial Audit",
    badgeColor: "bg-[#E2E7FF] text-[#0051D5]",
    title: "Audit Risiko Finansial",
    description: "Parsing template Excel (.xlsx) otomatis untuk kalkulasi likuiditas & deteksi dini pola masalah.",
    tags: [
      "Auto Parse XLSX",
      "Deteksi Runway",
      "Rasio Likuiditas"
    ]
  },
  {
    icon: <AiCopilotIcon className="w-12 h-12" />,
    badge: "Generative Business Copilot",
    badgeColor: "bg-[#EAEDFF] text-[#00236F]",
    title: "Konsultasi AI Terpandu",
    description: "Asisten bisnis bertenaga LLM yang menjawab masalah operasional berdasarkan data riil usaha.",
    tags: [
      "Context-Aware Prompts",
      "Simulasi Skenario",
      "Rekomendasi Praktis"
    ]
  }
];

export default function FeatureSection() {
  return (
    <section className="bg-[#00236F] py-16 md:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-[11px] font-bold tracking-widest uppercase text-white/90 mb-2">
            ARSITEKTUR ANALISIS TERINTEGRASI
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-white tracking-tight leading-snug">
            Solusi Komprehensif Skalabilitas Bisnis Anda
          </h2>
          <p className="mt-3 text-sm md:text-[14px] text-[#E2E7FF] leading-relaxed">
            Tiga instrumen cerdas terintegrasi untuk memitigasi risiko ekspansi modal
          </p>
        </div>

        {/* 3 Core Columns Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                {/* Header: Icon & Category Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div>{item.icon}</div>
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-[20px] font-semibold text-[#131B2E] tracking-tight mb-2.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#444651] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="pt-4 border-t border-gray-100/80 flex flex-wrap gap-2">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="inline-block text-[11px] font-medium text-[#131B2E] bg-[#F2F3FF] px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
