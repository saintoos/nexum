import React, { useState } from 'react';
import {
  Sliders,
  CheckCircle2,
  AlertTriangle,
  UploadCloud,
  FileText,
  Trash2,
  Eye,
  RefreshCw,
  Shield,
  Sparkles,
  Info,
  Clock,
  Layers,
  Database,
  Cpu,
  Save,
  Check
} from 'lucide-react';

export default function AdminKnowledgeBaseConfig() {
  // 1. SAW Weights State
  const [sawWeights, setSawWeights] = useState({
    rentCost: 0.30,
    competitors: 0.25,
    accessibility: 0.20,
    marketPotential: 0.25,
  });

  const [savedSawToast, setSavedSawToast] = useState(false);

  const totalSaw = Number(
    (
      sawWeights.rentCost +
      sawWeights.competitors +
      sawWeights.accessibility +
      sawWeights.marketPotential
    ).toFixed(2)
  );

  const isSawBalanced = Math.abs(totalSaw - 1.0) < 0.001;

  // 2. Financial Thresholds State
  const [financialThresholds, setFinancialThresholds] = useState({
    currentRatioHealthy: 1.20,
    currentRatioWarningMin: 1.00,
    currentRatioWarningMax: 1.20,
    solvabilityCriticalMax: 0.70,
    npmDeficit: 0.0,
  });
  const [savedFinToast, setSavedFinToast] = useState(false);

  // 3. RAG Documents State
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: 'Modul_Arus_Kas_UMKM.pdf',
      type: 'SOP Finansial',
      chunks: 342,
      date: '12 Sep 2026',
      size: '2.4 MB',
    },
    {
      id: 2,
      name: 'Regulasi_SAK_EMKM_Standar.pdf',
      type: 'Standar Akuntansi',
      chunks: 518,
      date: '01 Agu 2026',
      size: '4.1 MB',
    },
    {
      id: 3,
      name: 'Studi_Kasus_Retail_Jateng.pdf',
      type: 'Benchmark Spasial',
      chunks: 268,
      date: '18 Sep 2026',
      size: '3.2 MB',
    },
    {
      id: 4,
      name: 'Pedoman_Renegosiasi_Sewa.pdf',
      type: 'Strategi Ekspansi',
      chunks: 120,
      date: '22 Sep 2026',
      size: '1.1 MB',
    },
  ]);

  const [activeChunkModal, setActiveChunkModal] = useState(null);

  // 4. Prompt Guardrails State
  const [systemPrompt, setSystemPrompt] = useState(
    'You are NEXUM Business Advisor. You MUST strictly ground recommendations in the provided SAK EMKM financial calculations and SAW spatial scores. NEVER invent arbitrary financial projections. If liquidity pressure is detected (Current Ratio < 1.2x), you must advise caution and prioritize cash retention before capital expenditure. Always cite source document chunks explicitly.'
  );
  const [strictGrounding, setStrictGrounding] = useState(true);
  const [disallowLegalAdvice, setDisallowLegalAdvice] = useState(true);
  const [temperature, setTemperature] = useState(0.2);
  const [savedPromptToast, setSavedPromptToast] = useState(false);

  const handleDeleteDoc = (id) => {
    setDocuments((prev) => prev.filter((d) => d.id !== id));
  };

  const handleSaveSaw = () => {
    setSavedSawToast(true);
    setTimeout(() => setSavedSawToast(false), 3000);
  };

  const handleSaveFin = () => {
    setSavedFinToast(true);
    setTimeout(() => setSavedFinToast(false), 3000);
  };

  const handleSavePrompt = () => {
    setSavedPromptToast(true);
    setTimeout(() => setSavedPromptToast(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* 1. Header Section */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#EAEDFF] text-[#00236F] border border-[#0051D5]/20">
              Governance & Parameter Engine
            </span>
            <span className="flex items-center space-x-1 text-blue-600 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engine v2.4 (SAW + RAG)</span>
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#131B2E] mt-2">
            Pengaturan Parameter Analisis & Knowledge Base AI
          </h1>
          <p className="text-xs sm:text-sm text-[#444651] mt-1 max-w-3xl leading-relaxed">
            Atur bobot kriteria SAW, ambang risiko keuangan berbasis SAK EMKM, serta kurasi dokumen rujukan RAG untuk menjaga presisi analitis engine.
          </p>
        </div>

        <div className="text-right hidden sm:block shrink-0">
          <p className="text-[11px] text-[#444651]">Integritas Vektor Engine</p>
          <p className="text-xs font-mono font-semibold text-emerald-600 flex items-center justify-end space-x-1 mt-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>1,248 Chunks Terindeks</span>
          </p>
        </div>
      </div>

      {/* 2. SECTION: Analytical KPI Summary Strip (4 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Validasi SAW Total */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
          <span className="text-[11px] font-bold tracking-wider text-[#444651] uppercase">
            Validasi SAW Total
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#00236F]">
              {totalSaw.toFixed(2)}
            </span>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                isSawBalanced
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-amber-50 text-amber-700 border-amber-200'
              }`}
            >
              {isSawBalanced ? '100% Balanced' : 'Tidak Seimbang'}
            </span>
          </div>
          <p className="text-[11px] text-[#444651] mt-2">
            Σ (W1 + W2 + W3 + W4) = 1.00
          </p>
        </div>

        {/* Metric 2: Vector Chunks Aktif */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
          <span className="text-[11px] font-bold tracking-wider text-[#444651] uppercase">
            Vector Chunks Aktif
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#00236F]">1,248</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#0051D5] border border-blue-200">
              {documents.length} Berkas RAG
            </span>
          </div>
          <p className="text-[11px] text-[#444651] mt-2">
            ChromaDB / pgvector Embeddings
          </p>
        </div>

        {/* Metric 3: Model LLM Ingestion */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
          <span className="text-[11px] font-bold tracking-wider text-[#444651] uppercase">
            Model LLM Ingestion
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#00236F]">Gemini 1.5</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
              Flash Tier
            </span>
          </div>
          <p className="text-[11px] text-[#444651] mt-2">
            Context: 1M Tokens • Low Latency
          </p>
        </div>

        {/* Metric 4: Guardrail Strictness */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
          <span className="text-[11px] font-bold tracking-wider text-[#444651] uppercase">
            Guardrail Strictness
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#00236F]">99.4%</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              Zero Hallucination
            </span>
          </div>
          <p className="text-[11px] text-[#444651] mt-2">
            Strict SAK EMKM Boundary Policy
          </p>
        </div>
      </div>

      {/* 3. SECTION: Main Split Grid (Two-Column Governance Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN: SAW Weights & Financial Thresholds (~48% / 6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Card 1: Konfigurasi Bobot SAW */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-bold text-[#131B2E] flex items-center space-x-2">
                  <Sliders className="w-4 h-4 text-[#00236F]" />
                  <span>Bobot Indikator Kelayakan Lokasi (Metode SAW - TR-03)</span>
                </h2>
                <p className="text-xs text-[#444651] mt-0.5">
                  Distribusi pembobotan kriteria Simple Additive Weighting
                </p>
              </div>
            </div>

            {/* Sliders Container */}
            <div className="space-y-4">
              {/* Item 1: Biaya Sewa */}
              <div className="p-3.5 rounded-xl bg-[#FAF8FF] border border-[#EAEDFF]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-xs text-[#131B2E]">Biaya Sewa</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                      Cost / Biaya
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-slate-500">Bobot:</span>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="1"
                      value={sawWeights.rentCost}
                      onChange={(e) =>
                        setSawWeights({
                          ...sawWeights,
                          rentCost: parseFloat(e.target.value) || 0,
                        })
                      }
                      className="w-16 px-2 py-1 text-xs font-mono font-bold bg-white border border-slate-300 rounded-lg text-right text-[#00236F] focus:outline-none focus:ring-1 focus:ring-[#0051D5]"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={sawWeights.rentCost}
                  onChange={(e) =>
                    setSawWeights({
                      ...sawWeights,
                      rentCost: parseFloat(e.target.value),
                    })
                  }
                  className="w-full accent-[#00236F] cursor-pointer"
                />
                <div className="flex items-center justify-between text-[11px] text-[#444651] mt-1.5">
                  <span>Makin rendah harga sewa, makin tinggi skor normalisasi</span>
                  <span className="font-mono font-bold text-[#00236F]">
                    {Math.round(sawWeights.rentCost * 100)}%
                  </span>
                </div>
              </div>

              {/* Item 2: Jumlah Kompetitor */}
              <div className="p-3.5 rounded-xl bg-[#FAF8FF] border border-[#EAEDFF]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-xs text-[#131B2E]">Jumlah Kompetitor</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800">
                      Cost / Hambatan
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-slate-500">Bobot:</span>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="1"
                      value={sawWeights.competitors}
                      onChange={(e) =>
                        setSawWeights({
                          ...sawWeights,
                          competitors: parseFloat(e.target.value) || 0,
                        })
                      }
                      className="w-16 px-2 py-1 text-xs font-mono font-bold bg-white border border-slate-300 rounded-lg text-right text-[#00236F] focus:outline-none focus:ring-1 focus:ring-[#0051D5]"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={sawWeights.competitors}
                  onChange={(e) =>
                    setSawWeights({
                      ...sawWeights,
                      competitors: parseFloat(e.target.value),
                    })
                  }
                  className="w-full accent-[#00236F] cursor-pointer"
                />
                <div className="flex items-center justify-between text-[11px] text-[#444651] mt-1.5">
                  <span>Radius pemindaian standar 1.0 km gerai sejenis</span>
                  <span className="font-mono font-bold text-[#00236F]">
                    {Math.round(sawWeights.competitors * 100)}%
                  </span>
                </div>
              </div>

              {/* Item 3: Aksesibilitas */}
              <div className="p-3.5 rounded-xl bg-[#FAF8FF] border border-[#EAEDFF]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-xs text-[#131B2E]">Aksesibilitas</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      Benefit / Keuntungan
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-slate-500">Bobot:</span>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="1"
                      value={sawWeights.accessibility}
                      onChange={(e) =>
                        setSawWeights({
                          ...sawWeights,
                          accessibility: parseFloat(e.target.value) || 0,
                        })
                      }
                      className="w-16 px-2 py-1 text-xs font-mono font-bold bg-white border border-slate-300 rounded-lg text-right text-[#00236F] focus:outline-none focus:ring-1 focus:ring-[#0051D5]"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={sawWeights.accessibility}
                  onChange={(e) =>
                    setSawWeights({
                      ...sawWeights,
                      accessibility: parseFloat(e.target.value),
                    })
                  }
                  className="w-full accent-[#00236F] cursor-pointer"
                />
                <div className="flex items-center justify-between text-[11px] text-[#444651] mt-1.5">
                  <span>Akses jalan utama, parkir, dan visibilitas gerai</span>
                  <span className="font-mono font-bold text-[#00236F]">
                    {Math.round(sawWeights.accessibility * 100)}%
                  </span>
                </div>
              </div>

              {/* Item 4: Potensi Pasar Lokal */}
              <div className="p-3.5 rounded-xl bg-[#FAF8FF] border border-[#EAEDFF]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-xs text-[#131B2E]">Potensi Pasar Lokal</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      Benefit / Keuntungan
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-slate-500">Bobot:</span>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="1"
                      value={sawWeights.marketPotential}
                      onChange={(e) =>
                        setSawWeights({
                          ...sawWeights,
                          marketPotential: parseFloat(e.target.value) || 0,
                        })
                      }
                      className="w-16 px-2 py-1 text-xs font-mono font-bold bg-white border border-slate-300 rounded-lg text-right text-[#00236F] focus:outline-none focus:ring-1 focus:ring-[#0051D5]"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={sawWeights.marketPotential}
                  onChange={(e) =>
                    setSawWeights({
                      ...sawWeights,
                      marketPotential: parseFloat(e.target.value),
                    })
                  }
                  className="w-full accent-[#00236F] cursor-pointer"
                />
                <div className="flex items-center justify-between text-[11px] text-[#444651] mt-1.5">
                  <span>Kepadatan demografi, sentra komersial, dan kantor</span>
                  <span className="font-mono font-bold text-[#00236F]">
                    {Math.round(sawWeights.marketPotential * 100)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Total Calculation Validation Banner */}
            <div
              className={`mt-4 p-3.5 rounded-xl border flex items-center justify-between ${
                isSawBalanced
                  ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                  : 'bg-amber-50/80 border-amber-200 text-amber-900'
              }`}
            >
              <div className="flex items-center space-x-2.5">
                {isSawBalanced ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                )}
                <div>
                  <p className="text-xs font-bold">
                    Total Bobot Terkalkulasi: {totalSaw.toFixed(2)} / 1.00 ({Math.round(totalSaw * 100)}%)
                  </p>
                  <p className="text-[11px] opacity-80">
                    {isSawBalanced
                      ? 'Valid & Siap Diterapkan ke Engine TR-03'
                      : 'Perhatian: Total bobot harus persis sama dengan 1.00 (100%)'}
                  </p>
                </div>
              </div>
              <span
                className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase ${
                  isSawBalanced
                    ? 'bg-emerald-200 text-emerald-900'
                    : 'bg-amber-200 text-amber-900'
                }`}
              >
                {isSawBalanced ? 'SEIMBANG' : 'DEFISIT / LEBIH'}
              </span>
            </div>

            {/* Footer Metadata & Action */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center space-x-1.5 text-[11px] text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                <span>Terakhir diperbarui: 15 Sep 2026 oleh usr_admin01</span>
              </div>
              <button
                onClick={handleSaveSaw}
                disabled={!isSawBalanced}
                className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold bg-[#00236F] text-white hover:bg-[#0051D5] disabled:opacity-40 transition-colors flex items-center justify-center space-x-2 shadow-sm"
              >
                {savedSawToast ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Tersimpan!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Perbarui Bobot SAW</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Konfigurasi Ambang Batas Risiko Finansial (SAK EMKM) */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
            <div className="mb-4">
              <h2 className="text-base font-bold text-[#131B2E] flex items-center space-x-2">
                <Shield className="w-4 h-4 text-[#00236F]" />
                <span>Konfigurasi Ambang Batas Risiko Finansial (SAK EMKM)</span>
              </h2>
              <p className="text-xs text-[#444651] mt-0.5">
                Trigger otomatis klasifikasi kesehatan fiskal dan pola krisis UMKM
              </p>
            </div>

            <div className="space-y-3.5">
              {/* Likuiditas Sehat */}
              <div className="p-3 rounded-xl bg-[#FAF8FF] border border-[#EAEDFF]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-xs text-[#131B2E]">
                    Likuiditas Sehat (Current Ratio)
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    Min 1.20x
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mb-2">
                  Rasio aset lancar terhadap liabilitas jangka pendek minimal untuk ekspansi tanpa proteksi modal.
                </p>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    step="0.05"
                    value={financialThresholds.currentRatioHealthy}
                    onChange={(e) =>
                      setFinancialThresholds({
                        ...financialThresholds,
                        currentRatioHealthy: parseFloat(e.target.value) || 0,
                      })
                    }
                    className="w-24 px-2.5 py-1.5 text-xs font-mono font-bold bg-white border border-slate-300 rounded-lg text-[#00236F]"
                  />
                  <span className="text-xs text-slate-500">Multiplier Ratio</span>
                </div>
              </div>

              {/* Waspada Tekanan Likuiditas */}
              <div className="p-3 rounded-xl bg-[#FAF8FF] border border-[#EAEDFF]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-xs text-[#131B2E]">
                    Waspada Tekanan Likuiditas
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                    1.00x - 1.20x
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mb-2">
                  Zona waspada: Engine menyarankan restrukturisasi atau penangguhan belanja modal non-kritis.
                </p>
                <div className="flex items-center space-x-2 text-xs">
                  <input
                    type="number"
                    step="0.05"
                    value={financialThresholds.currentRatioWarningMin}
                    onChange={(e) =>
                      setFinancialThresholds({
                        ...financialThresholds,
                        currentRatioWarningMin: parseFloat(e.target.value) || 0,
                      })
                    }
                    className="w-20 px-2 py-1.5 font-mono font-bold bg-white border border-slate-300 rounded-lg text-[#00236F]"
                  />
                  <span className="text-slate-400">s/d</span>
                  <input
                    type="number"
                    step="0.05"
                    value={financialThresholds.currentRatioWarningMax}
                    onChange={(e) =>
                      setFinancialThresholds({
                        ...financialThresholds,
                        currentRatioWarningMax: parseFloat(e.target.value) || 0,
                      })
                    }
                    className="w-20 px-2 py-1.5 font-mono font-bold bg-white border border-slate-300 rounded-lg text-[#00236F]"
                  />
                  <span className="text-slate-500">Range Multiplier</span>
                </div>
              </div>

              {/* Solvabilitas Kritis */}
              <div className="p-3 rounded-xl bg-[#FAF8FF] border border-[#EAEDFF]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-xs text-[#131B2E]">
                    Solvabilitas Kritis (Debt to Asset)
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800">
                    Maks 0.70x
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mb-2">
                  Ambang batas leverage utang maksimum 70% dari total aset sebelum memicu auto-veto kelayakan.
                </p>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    step="0.05"
                    value={financialThresholds.solvabilityCriticalMax}
                    onChange={(e) =>
                      setFinancialThresholds({
                        ...financialThresholds,
                        solvabilityCriticalMax: parseFloat(e.target.value) || 0,
                      })
                    }
                    className="w-24 px-2.5 py-1.5 text-xs font-mono font-bold bg-white border border-slate-300 rounded-lg text-[#00236F]"
                  />
                  <span className="text-xs text-slate-500">(70% Debt Limit)</span>
                </div>
              </div>

              {/* NPM Defisit */}
              <div className="p-3 rounded-xl bg-[#FAF8FF] border border-[#EAEDFF]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-xs text-[#131B2E]">
                    NPM Ambang Defisit
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800">
                    &lt; 0.0%
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mb-2">
                  Memicu notifikasi darurat "Pola Kritis 100 Poin" serta intervensi strategi margin kilat.
                </p>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    step="0.1"
                    value={financialThresholds.npmDeficit}
                    onChange={(e) =>
                      setFinancialThresholds({
                        ...financialThresholds,
                        npmDeficit: parseFloat(e.target.value) || 0,
                      })
                    }
                    className="w-24 px-2.5 py-1.5 text-xs font-mono font-bold bg-white border border-slate-300 rounded-lg text-[#00236F]"
                  />
                  <span className="text-xs text-slate-500">% Margin Threshold</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={handleSaveFin}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#FAF8FF] text-[#00236F] border border-[#EAEDFF] hover:bg-[#EAEDFF] transition-colors flex items-center space-x-2"
              >
                {savedFinToast ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Ambang Tervalidasi</span>
                  </>
                ) : (
                  <span>Validasi Ambang Aturan</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: RAG Knowledge Store & System Guardrail (~52% / 6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Card 3: Penyimpanan Dokumen Referensi AI RAG */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h2 className="text-base font-bold text-[#131B2E] flex items-center space-x-2">
                  <Database className="w-4 h-4 text-[#00236F]" />
                  <span>Penyimpanan Dokumen Referensi AI RAG</span>
                </h2>
                <p className="text-xs text-[#444651] mt-0.5">
                  Basis pengetahuan regulasi bisnis untuk memandu inferensi LLM
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-50 text-[#0051D5] border border-blue-200 shrink-0">
                {documents.length} Dokumen • 1,248 Chunks
              </span>
            </div>

            {/* Drag and Drop Upload Zone */}
            <div className="border-2 border-dashed border-slate-200 hover:border-[#0051D5]/60 bg-[#FAF8FF] rounded-2xl p-6 text-center transition-colors group cursor-pointer mb-5">
              <div className="w-12 h-12 rounded-full bg-[#EAEDFF] text-[#00236F] flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                <UploadCloud className="w-6 h-6 text-[#0051D5]" />
              </div>
              <p className="text-xs font-bold text-[#131B2E]">
                Tarik & Lepas Berkas PDF Referensi Usaha di Sini
              </p>
              <p className="text-[11px] text-[#444651] max-w-sm mx-auto mt-1 leading-relaxed">
                Mendukung Modul SOP Keuangan, Regulasi SAK EMKM, dan Studi Kasus UMKM Retail. Maksimal 15MB per file.
              </p>
              <button className="mt-3.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-[#00236F] shadow-sm hover:bg-[#EAEDFF] hover:border-[#0051D5]/40 transition-colors inline-flex items-center space-x-2">
                <FileText className="w-3.5 h-3.5 text-[#0051D5]" />
                <span>Pilih Berkas PDF</span>
              </button>
            </div>

            {/* Document List Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200/80 mb-3">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF8FF] border-b border-slate-200 text-[#444651] uppercase font-bold text-[10px] tracking-wider">
                  <tr>
                    <th className="py-2.5 px-3">Nama Dokumen</th>
                    <th className="py-2.5 px-3">Tipe Regulasi</th>
                    <th className="py-2.5 px-3">Chunk Status</th>
                    <th className="py-2.5 px-3 hidden sm:table-cell">Ukuran</th>
                    <th className="py-2.5 px-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {documents.map((doc) => (
                    <tr key={doc.id} className="hover:bg-[#FAF8FF]/60 transition-colors">
                      <td className="py-2.5 px-3">
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4 text-[#0051D5] shrink-0" />
                          <span className="font-semibold text-[#131B2E] truncate max-w-[140px] sm:max-w-none">
                            {doc.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 text-slate-600">
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-medium">
                          {doc.type}
                        </span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Indexed ({doc.chunks} chunks)
                        </span>
                      </td>
                      <td className="py-2.5 px-3 hidden sm:table-cell text-slate-500 font-mono text-[11px]">
                        {doc.size}
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        <div className="flex items-center justify-end space-x-1.5">
                          <button
                            onClick={() => setActiveChunkModal(doc)}
                            className="text-[11px] font-medium text-[#0051D5] hover:text-[#00236F] px-2 py-1 rounded hover:bg-[#EAEDFF]"
                          >
                            Lihat Chunks
                          </button>
                          <button
                            onClick={() => handleDeleteDoc(doc.id)}
                            className="text-slate-400 hover:text-rose-600 p-1 rounded"
                            title="Hapus Dokumen"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#444651] pt-2">
              <span className="flex items-center space-x-1.5">
                <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
                <span>Auto-sync vector index diperbarui tiap 12 jam</span>
              </span>
            </div>
          </div>

          {/* Card 4: System Prompt Guardrail & Boundary Governance (Anti-Halusinasi) */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
            <div className="mb-4">
              <h2 className="text-base font-bold text-[#131B2E] flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-[#00236F]" />
                <span>System Prompt Guardrail & Boundary Governance</span>
              </h2>
              <p className="text-xs text-[#444651] mt-0.5">
                Pedoman batas operasional LLM agar saran strictly grounded pada dokumen RAG & angka empiris
              </p>
            </div>

            {/* Prompt Editor Textarea */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#131B2E] mb-1.5">
                  Prompt Sistem Utama (Operational Directives)
                </label>
                <textarea
                  rows={5}
                  value={systemPrompt}
                  onChange={(e) => setSystemPrompt(e.target.value)}
                  className="w-full bg-[#FAF8FF] border border-slate-200 rounded-xl p-3 text-xs text-[#131B2E] font-mono leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#0051D5]/20 focus:border-[#0051D5]"
                />
              </div>

              {/* Guardrail Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Toggle 1: Strict Grounding */}
                <label className="flex items-start space-x-3 p-3 rounded-xl bg-[#FAF8FF] border border-[#EAEDFF] cursor-pointer hover:border-[#0051D5]/30 transition-colors">
                  <input
                    type="checkbox"
                    checked={strictGrounding}
                    onChange={(e) => setStrictGrounding(e.target.checked)}
                    className="mt-0.5 accent-[#00236F] w-4 h-4 rounded cursor-pointer"
                  />
                  <div>
                    <span className="text-xs font-bold text-[#131B2E] block">
                      Strict Grounding Filter
                    </span>
                    <span className="text-[11px] text-slate-500 leading-tight block mt-0.5">
                      Blokir total output jika confidence retrieval &lt; 0.85
                    </span>
                  </div>
                </label>

                {/* Toggle 2: Disallow Legal/Tax Advice */}
                <label className="flex items-start space-x-3 p-3 rounded-xl bg-[#FAF8FF] border border-[#EAEDFF] cursor-pointer hover:border-[#0051D5]/30 transition-colors">
                  <input
                    type="checkbox"
                    checked={disallowLegalAdvice}
                    onChange={(e) => setDisallowLegalAdvice(e.target.checked)}
                    className="mt-0.5 accent-[#00236F] w-4 h-4 rounded cursor-pointer"
                  />
                  <div>
                    <span className="text-xs font-bold text-[#131B2E] block">
                      Disallow Legal/Tax Formal Advice
                    </span>
                    <span className="text-[11px] text-slate-500 leading-tight block mt-0.5">
                      Wajibkan disclaimer hukum saat memberi arahan pajak
                    </span>
                  </div>
                </label>
              </div>

              {/* Temperature Slider */}
              <div className="p-3.5 rounded-xl bg-[#FAF8FF] border border-[#EAEDFF] mt-3">
                <div className="flex items-center justify-between mb-1.5">
                  <div>
                    <span className="text-xs font-bold text-[#131B2E]">Model Temperature</span>
                    <p className="text-[10px] text-slate-500">
                      Presisi Analitis Tinggi / Minimal Keacakan Sintaksis
                    </p>
                  </div>
                  <span className="px-2 py-0.5 rounded font-mono font-bold text-xs bg-white border border-slate-300 text-[#00236F]">
                    {temperature}
                  </span>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="1.0"
                  step="0.05"
                  value={temperature}
                  onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  className="w-full accent-[#00236F] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>0.0 (Deterministik)</span>
                  <span>0.5 (Seimbang)</span>
                  <span>1.0 (Kreatif)</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={handleSavePrompt}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#00236F] text-white hover:bg-[#0051D5] transition-colors flex items-center space-x-2 shadow-sm"
              >
                {savedPromptToast ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Guardrail Diperbarui</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Perbarui Guardrail Prompt</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chunk Inspection Modal */}
      {activeChunkModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="font-bold text-[#131B2E] text-sm">
                  Inspeksi Vektor Chunk
                </h3>
                <p className="text-xs font-mono text-[#0051D5]">{activeChunkModal.name}</p>
              </div>
              <button
                onClick={() => setActiveChunkModal(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs">
              <p className="text-[#444651]">
                Dokumen ini telah di-chunk menjadi <strong>{activeChunkModal.chunks} vektor</strong> dengan model embedding <code className="bg-slate-100 px-1 py-0.5 rounded text-[10px]">text-embedding-004</code>.
              </p>
              <div className="p-3 bg-[#FAF8FF] rounded-xl border border-slate-100 space-y-2 max-h-48 overflow-y-auto">
                <div className="p-2 bg-white rounded border border-slate-200/80">
                  <span className="text-[10px] font-mono text-slate-400">chunk_001 (Similarity: 0.94)</span>
                  <p className="text-[11px] text-slate-700 mt-1">
                    "SAK EMKM Bab 4: Penyajian Laporan Keuangan Entitas Mikro, Kecil, dan Menengah terdiri dari Laporan Posisi Keuangan, Laporan Laba Rugi, dan Catatan atas Laporan Keuangan..."
                  </p>
                </div>
                <div className="p-2 bg-white rounded border border-slate-200/80">
                  <span className="text-[10px] font-mono text-slate-400">chunk_002 (Similarity: 0.89)</span>
                  <p className="text-[11px] text-slate-700 mt-1">
                    "Analisis likuiditas aset lancar mencakup kas dan setara kas yang bebas dari jaminan kredit perbankan dalam periode fiskal berjalan..."
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveChunkModal(null)}
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
