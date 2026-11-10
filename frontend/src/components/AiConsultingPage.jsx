import React, { useState } from "react";
import {
  LayoutGrid,
  MapPin,
  TrendingUp,
  Bot,
  History,
  Store,
  LogOut,
  Search,
  Bell,
  Sparkles,
  Paperclip,
  Send,
  Copy,
  Check,
  ThumbsUp,
  ThumbsDown,
  Volume2,
  FileText,
  AlertTriangle,
  Target,
  CheckCircle2,
} from "lucide-react";

export default function AiConsultingPage({ onLogout, onNavigate }) {
  const [activeMenu, setActiveMenu] = useState("konsultasi");
  const [ragContextEnabled, setRagContextEnabled] = useState(true);
  const [inputMessage, setInputMessage] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [feedback, setFeedback] = useState(null);

  // Daftar riwayat pesan chat
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "user",
      name: "Siti Rahma",
      time: "15:41",
      text: "Apa prioritas perbaikan usaha saya berdasarkan data keuangan bulan September?",
    },
    {
      id: 2,
      sender: "ai",
      name: "Asisten Konsultasi Bisnis NEXUM",
      version: "RAG-V2.4",
      time: "15:41 WIB",
      intro:
        "Berdasarkan sintesis data laporan laba rugi September 2026 dan kalkulasi kelayakan lokasi ruko Pandanaran, berikut 2 prioritas strategis mendesak untuk menjaga kelangsungan arus kas Anda:",
      priorities: [
        {
          id: "p1",
          type: "danger",
          tag: "Prioritas #1 • Risiko Likuiditas",
          title: "Tunda rencana sewa cabang baru di Jl. Pandanaran",
          desc: "Meskipun skor SAW spasial mencapai 70.0 (Layak), komitmen sewa Rp 4.500.000/bln (Rp 54 Jt/thn) berisiko tinggi memicu gagal bayar karena saat ini usaha Anda berada dalam Tekanan Likuiditas (Current Ratio 1.10x).",
        },
        {
          id: "p2",
          type: "info",
          tag: "Prioritas #2 • Pemulihan Margin",
          title: "Efisiensi beban operasional & tekan HPP",
          desc: "Laba bersih bulan September tercatat defisit -Rp 1.350.000 (Margin -3.0%) akibat lonjakan harga bahan baku. Prioritaskan renegosiasi supplier tepung & minyak atau sesuaikan porsi menu sebelum menggelar ekspansi fisik.",
        },
      ],
      actionPlan: {
        title: "Target Aksi Cepat 60 Hari",
        desc: "Pertahankan margin operasional minimal > 5.0% selama minimal 2 bulan berturut-turut serta cadangkan dana darurat setara 3 bulan sewa sebelum menandatangani kontrak ruko fisik.",
      },
      sources: [
        { name: "Modul_Arus_Kas_UMKM.pdf", note: "Hal 14 - Cadangan Kas" },
        { name: "Analisis_Keuangan_Sep.json", note: "Margin & Current Ratio" },
        { name: "Evaluasi_SAW_Pandanaran.geojson", note: "Skor SAW 70.0" },
      ],
    },
  ]);

  const quickPrompts = [
    {
      title: "Efisiensi Beban Sewa",
      sub: "Trik renegosiasi & skema bayar",
      icon: Store,
      prompt:
        "Bagaimana cara renegosiasi sewa ruko Pandanaran agar arus kas tidak defisit?",
    },
    {
      title: "Evaluasi Rasio Likuiditas",
      sub: "Ambang batas aman rasio lancar",
      icon: TrendingUp,
      prompt:
        "Berapa target Current Ratio yang aman sebelum saya boleh membuka cabang baru?",
    },
    {
      title: "Strategi Pricing Menu",
      sub: "Skema bundling & re-costing",
      icon: Target,
      prompt:
        "Berikan rekomendasi penyesuaian harga menu Warung Rahma untuk menutup defisit Rp 1.350.000.",
    },
    {
      title: "Mitigasi Kompetitor",
      sub: "Radius 500m area Pandanaran",
      icon: MapPin,
      prompt:
        "Bagaimana menghadapi 3 kompetitor F&B sejenis di sekitar ruko Pandanaran?",
    },
  ];

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      name: "Siti Rahma",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");

    // Simulasi respons AI
    setTimeout(() => {
      const aiReply = {
        id: Date.now() + 1,
        sender: "ai",
        name: "Asisten Konsultasi Bisnis NEXUM",
        version: "RAG-V2.4",
        time:
          new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }) + " WIB",
        intro: `Analisis terkonteks untuk: "${query}". Berdasarkan data keuangan UMKM Anda dan basis pengetahuan SAK EMKM:`,
        priorities: [
          {
            id: "r1",
            type: "info",
            tag: "Rekomendasi Terarah",
            title: "Langkah Operasional Taktis",
            desc: "Lakukan perbaikan struktur biaya bahan baku (HPP) sebesar minimal 7-10% serta gunakan skema cicilan termin sewa per 3 bulan untuk mengurangi tekanan kas harian.",
          },
        ],
        actionPlan: {
          title: "Implementasi Segera (Minggu Ini)",
          desc: "Monitor kas harian melalui form excel NEXUM dan pastikan margin kotor stabil di atas 25%.",
        },
        sources: [
          {
            name: "Modul_Arus_Kas_UMKM.pdf",
            note: "Standard Operating Procedure",
          },
          { name: "SAK_EMKM_Pedoman.pdf", note: "Bab 5 - Pengakuan Beban" },
        ],
      };
      setMessages((prev) => [...prev, aiReply]);
    }, 1000);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const menuItems = [
    { id: "beranda", label: "Beranda", icon: LayoutGrid },
    { id: "lokasi", label: "Kelayakan Lokasi", icon: MapPin },
    { id: "keuangan", label: "Risiko Keuangan", icon: TrendingUp },
    { id: "konsultasi", label: "Konsultasi AI", icon: Bot },
    { id: "riwayat", label: "Riwayat Analisis", icon: History },
    { id: "profil", label: "Profil Usaha", icon: Store },
  ];

  const handleMenuClick = (id) => {
    setActiveMenu(id);
    if (id === "beranda" && onNavigate) onNavigate("dashboard");
    if (id === "lokasi" && onNavigate) onNavigate("location");
    if (id === "keuangan" && onNavigate) onNavigate("finance");
    if (id === "konsultasi" && onNavigate) onNavigate("ai");
    if (id === "profil" && onNavigate) onNavigate("profile");
  };

  return (
    <div className="min-h-screen bg-[#f8fafd] flex flex-col font-sans text-slate-800">
      {/* 1. TOP NAVBAR */}
      <header className="bg-[#0A2540] text-white px-4 sm:px-6 py-3 flex items-center justify-between shadow-sm sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-lg sm:text-xl tracking-wider text-white">
            NEXUM
          </span>
          <span className="text-slate-400 font-light text-sm">|</span>
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-sky-300 uppercase hidden sm:inline-block">
            INTELLIGENCE FOR UMKM
          </span>
        </div>

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

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="text-slate-300 hover:text-white relative p-1.5 rounded-full hover:bg-white/10 transition-colors"
            title="Notifikasi"
          >
            <Bell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-sky-400 rounded-full ring-2 ring-[#0A2540]"></span>
          </button>

          <div className="flex items-center gap-2.5 pl-2 border-l border-white/10">
            <div className="text-right hidden sm:block">
              <div className="text-xs font-semibold text-white leading-tight">
                Siti Rahma
              </div>
              <div className="text-[10px] text-sky-300 font-medium">
                UMKM RETAIL
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs ring-2 ring-white/20">
              SR
            </div>
          </div>
        </div>
      </header>

      {/* 2. BODY LAYOUT */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT SIDEBAR */}
        <aside className="w-64 bg-white border-r border-slate-200/80 flex flex-col justify-between hidden md:flex shrink-0">
          <nav className="p-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeMenu === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? "bg-[#EEF4FF] text-[#0A2540] font-semibold shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon
                    size={17}
                    className={isActive ? "text-[#0A2540]" : "text-slate-400"}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-slate-100">
            <button
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut size={16} />
              <span>Keluar / Logout</span>
            </button>
          </div>
        </aside>

        {/* MAIN CONSULTATION CONTENT */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
          <div className="max-w-4xl mx-auto w-full space-y-5">
            {/* Page Header */}
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Konsultasi AI Strategi Usaha
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                Asisten berbasis Retrieval-Augmented Generation (RAG) yang
                terhubung langsung dengan laporan keuangan SAK EMKM dan simulasi
                lokasi SAW Anda
              </p>
            </div>

            {/* RAG Context Integration Bar */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 sm:p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setRagContextEnabled(!ragContextEnabled)}
                  className={`w-11 h-6 rounded-full transition-colors relative focus:outline-none ${
                    ragContextEnabled ? "bg-blue-600" : "bg-slate-300"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-1 ${
                      ragContextEnabled ? "left-6" : "left-1"
                    }`}
                  ></div>
                </button>
                <span className="text-xs font-medium text-slate-700 leading-tight">
                  Izinkan Asisten membaca ringkasan metrik finansial & lokasi
                  terakhir Anda untuk rekomendasi relevan berbasis data
                </span>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <span className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                  Konteks Terhubung (Data September 2026)
                </span>
                <span className="bg-blue-50 text-blue-700 border border-blue-200/60 text-[11px] font-bold px-2.5 py-0.5 rounded-md">
                  2 Dokumen Aktif
                </span>
              </div>
            </div>

            {/* Time Divider */}
            <div className="flex justify-center my-2">
              <span className="bg-slate-100 text-slate-500 text-[10px] sm:text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                HARI INI, 24 SEPTEMBER 2026 • 15:40 WIB
              </span>
            </div>

            {/* Chat Messages Container */}
            <div className="space-y-5">
              {messages.map((msg) => {
                if (msg.sender === "user") {
                  return (
                    <div key={msg.id} className="flex flex-col items-end">
                      <div className="text-[11px] text-slate-400 mb-1">
                        {msg.name} {msg.time}
                      </div>
                      <div className="bg-[#0A2540] text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-lg text-xs sm:text-sm font-medium shadow-sm leading-relaxed">
                        {msg.text}
                      </div>
                      <div className="text-[10px] text-blue-600 font-bold mt-1 flex items-center gap-1">
                        <Check size={12} />
                        <span>Terkirim & Teranalisis</span>
                      </div>
                    </div>
                  );
                }

                // AI Response Message
                return (
                  <div key={msg.id} className="space-y-2">
                    {/* Assistant Header */}
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                        <Bot size={14} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        {msg.name}
                      </span>
                      <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded">
                        {msg.version}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {msg.time}
                      </span>
                    </div>

                    {/* AI Bubble Card */}
                    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
                      {/* Sub-header & Action Buttons */}
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-700">
                          <CheckCircle2 size={14} className="text-blue-600" />
                          <span>
                            Disintesis dari Laporan Keuangan SAK EMKM & Model
                            SAW
                          </span>
                        </div>

                        <div className="flex items-center gap-1 text-slate-400">
                          <button
                            type="button"
                            onClick={() => handleCopy(msg.intro)}
                            className="p-1 hover:text-slate-700 rounded hover:bg-slate-50 transition-colors"
                            title="Salin tanggapan"
                          >
                            {isCopied ? (
                              <Check size={14} className="text-emerald-600" />
                            ) : (
                              <Copy size={14} />
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => setFeedback("like")}
                            className={`p-1 hover:text-slate-700 rounded hover:bg-slate-50 transition-colors ${
                              feedback === "like" ? "text-blue-600" : ""
                            }`}
                            title="Bermanfaat"
                          >
                            <ThumbsUp size={14} />
                          </button>
                          <button
                            type="button"
                            onClick={() => setFeedback("dislike")}
                            className={`p-1 hover:text-slate-700 rounded hover:bg-slate-50 transition-colors ${
                              feedback === "dislike" ? "text-red-600" : ""
                            }`}
                            title="Kurang relevan"
                          >
                            <ThumbsDown size={14} />
                          </button>
                          <button
                            type="button"
                            className="p-1 hover:text-slate-700 rounded hover:bg-slate-50 transition-colors"
                            title="Dengarkan (Text to Speech)"
                          >
                            <Volume2 size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Intro Text */}
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {msg.intro}
                      </p>

                      {/* Priorities Cards (Grid 2 cols) */}
                      {msg.priorities && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                          {msg.priorities.map((item) => (
                            <div
                              key={item.id}
                              className={`rounded-xl p-4 border ${
                                item.type === "danger"
                                  ? "bg-red-50/50 border-red-200/80"
                                  : "bg-blue-50/50 border-blue-200/80"
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1.5">
                                <span
                                  className={`text-[11px] font-bold ${
                                    item.type === "danger"
                                      ? "text-red-700"
                                      : "text-blue-700"
                                  }`}
                                >
                                  {item.tag}
                                </span>
                                {item.type === "danger" ? (
                                  <AlertTriangle
                                    size={14}
                                    className="text-red-600"
                                  />
                                ) : (
                                  <TrendingUp
                                    size={14}
                                    className="text-blue-600"
                                  />
                                )}
                              </div>
                              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                                {item.title}
                              </h4>
                              <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Target Aksi Cepat 60 Hari */}
                      {msg.actionPlan && (
                        <div className="bg-sky-50/80 border border-sky-200/70 rounded-xl p-3.5 flex items-start gap-3">
                          <Target
                            size={18}
                            className="text-blue-700 shrink-0 mt-0.5"
                          />
                          <div>
                            <h4 className="text-xs font-bold text-blue-950">
                              {msg.actionPlan.title}
                            </h4>
                            <p className="text-[11px] sm:text-xs text-blue-900/90 mt-0.5 leading-relaxed">
                              {msg.actionPlan.desc}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Grounding Sources */}
                      {msg.sources && (
                        <div className="pt-2">
                          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                            SUMBER RUJUKAN DATA (GROUNDING SOURCES):
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            {msg.sources.map((src, idx) => (
                              <div
                                key={idx}
                                className="inline-flex items-center gap-1.5 bg-[#F1F4F9] border border-slate-200/80 rounded-md py-1 px-2.5 text-[11px] text-slate-700"
                              >
                                <FileText size={12} className="text-blue-600" />
                                <span className="font-semibold">
                                  {src.name}
                                </span>
                                <span className="text-slate-400 font-normal">
                                  ({src.note})
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Disclaimer */}
                      <p className="text-[10px] text-slate-400 leading-relaxed italic pt-2 border-t border-slate-100">
                        * Jawaban AI bersifat rekomendasi analitis pendukung
                        keputusan dan bukan pengganti jasa akuntan publik,
                        konsultan pajak, atau pengacara bisnis berlisensi.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Prompts Section */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  PERTANYAAN CEPAT PELAKU UMKM RETAIL:
                </span>
                <span className="text-[10px] text-slate-400">
                  Klik untuk langsung bertanya
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {quickPrompts.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSendMessage(item.prompt)}
                      className="bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-left transition-all hover:border-blue-400 group shadow-none hover:shadow-sm"
                    >
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <Icon size={13} />
                        </div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700 line-clamp-1">
                          {item.title}
                        </div>
                      </div>
                      <div className="text-[10px] text-slate-500 mt-1 pl-6 line-clamp-1">
                        {item.sub}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Chat Input Container */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-md sticky bottom-4">
              <textarea
                rows={2}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Ketik kendala operasional cabang atau rencana ekspansi... (Ketik '/' untuk template prompt)"
                className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none resize-none bg-transparent"
              />

              <div className="flex items-center justify-between pt-2 border-t border-slate-100 mt-1">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      alert("Fitur upload berkas konteks RAG: .pdf / .xlsx")
                    }
                    className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 py-1 px-2 rounded hover:bg-slate-100 transition-colors"
                  >
                    <Paperclip size={13} />
                    <span>Lampirkan (.pdf / .xlsx)</span>
                  </button>

                  <span className="text-[10px] text-slate-400 hidden sm:inline-flex items-center gap-1">
                    <Sparkles size={11} className="text-amber-500" />
                    Token RAG: 85% Tersedia
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleSendMessage()}
                  className="inline-flex items-center gap-1.5 bg-[#0A2540] hover:bg-[#071c33] active:scale-[0.99] text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-all"
                >
                  <span>Kirim</span>
                  <Send size={12} />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
