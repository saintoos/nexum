import React, { useState, useEffect, useRef } from "react";
import TopNavbar from "./TopNavbar";
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
  Loader2,
  Trash2,
} from "lucide-react";

const DEFAULT_AI_MESSAGES = [];

function FormattedText({ text }) {
  if (!text) return null;
  const lines = text.split("\n");
  return (
    <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
      {lines.map((line, lIdx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={lIdx} className="h-1" />;

        const isBullet =
          trimmed.startsWith("- ") ||
          trimmed.startsWith("* ") ||
          /^\d+\.\s/.test(trimmed);

        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        const formattedLine = parts.map((part, pIdx) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={pIdx} className="font-semibold text-slate-900">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return part;
        });

        if (isBullet) {
          return (
            <div key={lIdx} className="flex items-start gap-2 pl-2">
              <span className="text-blue-600 mt-0.5 text-xs font-bold">•</span>
              <span className="flex-1">{formattedLine}</span>
            </div>
          );
        }

        return <p key={lIdx}>{formattedLine}</p>;
      })}
    </div>
  );
}

export default function AiConsultingPage({ onLogout, onNavigate }) {
  const [activeMenu, setActiveMenu] = useState("konsultasi");
  const [ragContextEnabled, setRagContextEnabled] = useState(() => {
    try {
      const saved = localStorage.getItem("nexum_rag_enabled");
      if (saved !== null) return saved === "true";
    } catch (_) {}
    return true;
  });

  const handleToggleRag = () => {
    setRagContextEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("nexum_rag_enabled", String(next));
      } catch (_) {}
      return next;
    });
  };
  const [inputMessage, setInputMessage] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Daftar riwayat pesan chat dengan persistensi localStorage (aman saat refresh browser)
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem("nexum_ai_chat_history");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Bersihkan pesan default lama jika tersimpan di localStorage browser
          const cleaned = parsed.filter(
            (m) =>
              !(
                m.sender === "user" &&
                m.text?.includes("prioritas perbaikan usaha saya berdasarkan data keuangan")
              ) &&
              !(
                m.sender === "ai" &&
                m.intro?.includes("Berdasarkan sintesis data laporan laba rugi September")
              )
          );
          if (cleaned.length > 0) return cleaned;
        }
      }
    } catch (e) {
      console.warn("Gagal membaca riwayat chat dari storage:", e);
    }
    return DEFAULT_AI_MESSAGES;
  });

  // Simpan riwayat chat ke localStorage setiap kali ada pesan baru
  useEffect(() => {
    try {
      if (messages && messages.length > 0) {
        localStorage.setItem("nexum_ai_chat_history", JSON.stringify(messages));
      } else {
        localStorage.removeItem("nexum_ai_chat_history");
      }
    } catch (e) {
      console.warn("Gagal menyimpan riwayat chat ke storage:", e);
    }
  }, [messages]);

  const handleResetChat = () => {
    if (
      window.confirm(
        "Apakah Anda yakin ingin membersihkan riwayat percakapan konsultasi AI ini?"
      )
    ) {
      try {
        localStorage.removeItem("nexum_ai_chat_history");
        sessionStorage.removeItem("nexum_ai_chat_history");
        fetch("/api/ai/history", { method: "DELETE" }).catch(() => {});
      } catch (_) {}
      setMessages([]);
    }
  };

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
        "Berikan rekomendasi penyesuaian harga menu usaha saya untuk menutup defisit operasional.",
    },
    {
      title: "Mitigasi Kompetitor",
      sub: "Radius 500m area Pandanaran",
      icon: MapPin,
      prompt:
        "Bagaimana menghadapi 3 kompetitor F&B sejenis di sekitar ruko Pandanaran?",
    },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend) => {
    if (isLoading) return;
    const query = (textToSend || inputMessage).trim();
    if (!query) return;

    const nowStr = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMsg = {
      id: Date.now(),
      sender: "user",
      name: "Siti Rahma",
      time: nowStr,
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const token =
        localStorage.getItem("token") ||
        sessionStorage.getItem("token") ||
        "";
      const headers = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      let response;
      try {
        response = await fetch("/api/ai/chat", {
          method: "POST",
          headers,
          body: JSON.stringify({
            message: query,
            allowContext: ragContextEnabled,
          }),
        });
      } catch (proxyErr) {
        // Fallback langsung ke port 5000 jika vite dev proxy belum siap
        response = await fetch("http://localhost:5000/api/ai/chat", {
          method: "POST",
          headers,
          body: JSON.stringify({
            message: query,
            allowContext: ragContextEnabled,
          }),
        });
      }

      if (!response.ok) {
        throw new Error(`Server status ${response.status}`);
      }

      const resJson = await response.json();
      const data = resJson.data || {};

      let intro = "";
      let priorities = null;
      let actionPlan = null;
      let sources = data.sources || [];
      let rawText = "";

      if (data.structured && typeof data.structured === "object") {
        intro = data.structured.intro || data.structured.message || "";
        priorities = data.structured.priorities || null;
        actionPlan = data.structured.actionPlan || null;
        if (data.structured.sources && data.structured.sources.length) {
          sources = data.structured.sources;
        }
      } else if (typeof data.answer === "string") {
        try {
          const cleaned = data.answer
            .replace(/^```json\s*/i, "")
            .replace(/```\s*$/i, "")
            .trim();
          const parsed = JSON.parse(cleaned);
          if (parsed.intro || parsed.priorities || parsed.actionPlan) {
            intro = parsed.intro || "";
            priorities = parsed.priorities || null;
            actionPlan = parsed.actionPlan || null;
            if (parsed.sources) sources = parsed.sources;
          } else {
            rawText = data.answer;
          }
        } catch {
          rawText = data.answer;
        }
      }

      if (!intro && !rawText && typeof data.answer === "string") {
        rawText = data.answer;
      }

      const aiReply = {
        id: Date.now() + 1,
        sender: "ai",
        name: "Asisten Konsultasi Bisnis NEXUM",
        version: "AI-Online",
        time: nowStr + " WIB",
        intro:
          intro ||
          (priorities || actionPlan
            ? "Berikut analisis rekomendasi terkonteks untuk usaha Anda:"
            : ""),
        rawText: rawText || "",
        priorities,
        actionPlan,
        sources:
          sources && sources.length > 0
            ? sources
            : [
                {
                  name: "Profil_Usaha_Aktif.json",
                  note: "Konteks Sektor & Lokasi",
                },
                {
                  name: "SAK_EMKM_Pedoman.pdf",
                  note: "Standar Keuangan",
                },
              ],
      };

      setMessages((prev) => [...prev, aiReply]);
    } catch (err) {
      console.error("AI send error:", err);
      const errorReply = {
        id: Date.now() + 1,
        sender: "ai",
        name: "Asisten Konsultasi Bisnis NEXUM",
        version: "Status-Offline",
        time: nowStr + " WIB",
        intro: "Mohon maaf, belum dapat terhubung ke server AI saat ini.",
        rawText: `Kendala teknis: ${err.message}. Pastikan server backend NEXUM (port 5000) sudah dijalankan ("npm run dev" di folder backend).`,
        priorities: null,
        actionPlan: null,
        sources: [],
        isError: true,
      };
      setMessages((prev) => [...prev, errorReply]);
    } finally {
      setIsLoading(false);
    }
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
    if (!onNavigate) return;
    if (id === "beranda") onNavigate("dashboard");
    if (id === "lokasi") onNavigate("location");
    if (id === "keuangan") onNavigate("finance");
    if (id === "konsultasi") onNavigate("ai");
    if (id === "riwayat") onNavigate("history");
    if (id === "profil") onNavigate("profile");
  };

  return (
    <div className="h-screen bg-[#f8fafd] flex flex-col font-sans text-slate-800 overflow-hidden">
      {/* 1. TOP NAVBAR */}
      <TopNavbar onNavigate={onNavigate} />

      {/* 2. BODY LAYOUT */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT SIDEBAR */}
        <aside className="w-64 bg-white border-r border-slate-200/80 flex flex-col justify-between hidden md:flex shrink-0 h-full overflow-hidden">
          <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
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

          <div className="p-4 border-t border-slate-100 shrink-0">
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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
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

              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={handleResetChat}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-red-600 bg-white border border-slate-200/90 hover:border-red-200 hover:bg-red-50/50 rounded-lg transition-colors shadow-xs self-start sm:self-auto shrink-0"
                  title="Bersihkan riwayat percakapan konsultasi"
                >
                  <Trash2 size={13} className="text-slate-400" />
                  <span>Hapus Riwayat Chat</span>
                </button>
              )}
            </div>

            {/* RAG Context Integration Bar */}
            <div
              onClick={handleToggleRag}
              className={`border rounded-xl p-3.5 sm:p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 transition-all cursor-pointer select-none group ${
                ragContextEnabled
                  ? "bg-gradient-to-r from-blue-50/40 via-white to-white border-blue-200/90 hover:border-blue-300"
                  : "bg-slate-50/70 border-slate-200/90 hover:border-slate-300"
              }`}
              title="Klik di mana saja pada kotak ini untuk mengaktifkan/menonaktifkan integrasi data"
            >
              <div className="flex items-center gap-3">
                {/* Switch Button */}
                <button
                  type="button"
                  role="switch"
                  aria-checked={ragContextEnabled}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleRag();
                  }}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 active:scale-95 ${
                    ragContextEnabled ? "bg-blue-600" : "bg-slate-300"
                  }`}
                  title={
                    ragContextEnabled
                      ? "Klik untuk menonaktifkan pembacaan data riwayat"
                      : "Klik untuk mengizinkan AI membaca data riwayat"
                  }
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                      ragContextEnabled ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>

                <div>
                  <div className="text-xs font-semibold text-slate-800 leading-snug group-hover:text-blue-900 transition-colors">
                    Izinkan Asisten membaca ringkasan metrik finansial & lokasi terakhir Anda untuk rekomendasi relevan berbasis data
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {ragContextEnabled
                      ? "Data riwayat laba-rugi & kelayakan lokasi Anda disertakan secara aman ke prompt konsultasi AI."
                      : "AI menjawab secara umum tanpa mengakses arsip metrik keuangan dan kelayakan lokasi Anda."}
                  </div>
                </div>
              </div>

              {/* Status Badge Dinamis */}
              <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-center pl-14 sm:pl-0">
                <span className="flex items-center gap-1.5 text-xs font-semibold">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      ragContextEnabled
                        ? "bg-emerald-500 animate-pulse"
                        : "bg-slate-400"
                    }`}
                  ></span>
                  <span
                    className={
                      ragContextEnabled ? "text-emerald-700" : "text-slate-500"
                    }
                  >
                    {ragContextEnabled ? "Konteks Terhubung" : "Konteks Terputus"}
                  </span>
                </span>
                <span
                  className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border transition-all ${
                    ragContextEnabled
                      ? "bg-blue-50 text-blue-700 border-blue-200/80 shadow-xs"
                      : "bg-slate-100 text-slate-500 border-slate-200"
                  }`}
                >
                  {ragContextEnabled ? "RAG Aktif" : "RAG Nonaktif"}
                </span>
              </div>
            </div>

            {/* Chat Messages Container */}
            <div className="space-y-5">
              {messages.length === 0 && !isLoading && (
                <div className="bg-white border border-dashed border-slate-200/90 rounded-2xl p-8 sm:p-10 text-center space-y-3 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                    <Bot size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Konsultasi Strategi Usaha Bersama Asisten AI NEXUM
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-md mx-auto leading-relaxed">
                      Ruang percakapan siap digunakan. Ketik kendala usaha Anda di kolom input bawah atau klik salah satu pertanyaan cepat yang tersedia untuk memulai konsultasi langsung dengan AI.
                    </p>
                  </div>
                </div>
              )}

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
                    <div
                      className={`bg-white border ${
                        msg.isError
                          ? "border-red-200 bg-red-50/20"
                          : "border-slate-200/80"
                      } rounded-2xl p-5 sm:p-6 shadow-sm space-y-4`}
                    >
                      {/* Sub-header & Action Buttons */}
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <div
                          className={`flex items-center gap-1.5 text-xs font-semibold ${
                            msg.isError ? "text-red-700" : "text-blue-700"
                          }`}
                        >
                          {msg.isError ? (
                            <AlertTriangle size={14} className="text-red-600" />
                          ) : (
                            <CheckCircle2
                              size={14}
                              className="text-blue-600"
                            />
                          )}
                          <span>
                            {msg.isError
                              ? "Status Koneksi Asisten AI"
                              : "Disintesis dari Laporan Keuangan SAK EMKM & Model SAW"}
                          </span>
                        </div>

                        <div className="flex items-center gap-1 text-slate-400">
                          <button
                            type="button"
                            onClick={() =>
                              handleCopy(msg.rawText || msg.intro || "")
                            }
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
                      {msg.intro && (
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                          {msg.intro}
                        </p>
                      )}

                      {/* Raw Text or Markdown paragraphs */}
                      {msg.rawText && (
                        <div className="pt-1">
                          <FormattedText text={msg.rawText} />
                        </div>
                      )}

                      {/* Priorities Cards (Grid 2 cols) */}
                      {msg.priorities && msg.priorities.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                          {msg.priorities.map((item, pIdx) => (
                            <div
                              key={item.id || pIdx}
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
                                  {item.tag || `Prioritas #${pIdx + 1}`}
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
                              {msg.actionPlan.title || "Target Aksi Cepat"}
                            </h4>
                            <p className="text-[11px] sm:text-xs text-blue-900/90 mt-0.5 leading-relaxed">
                              {msg.actionPlan.desc}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Grounding Sources */}
                      {msg.sources && msg.sources.length > 0 && (
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
                                {src.note && (
                                  <span className="text-slate-400 font-normal">
                                    ({src.note})
                                  </span>
                                )}
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

              {/* Typing / Loading Indicator Bubble */}
              {isLoading && (
                <div className="space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs animate-pulse">
                      <Bot size={14} />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      Asisten Konsultasi Bisnis NEXUM
                    </span>
                    <span className="text-[11px] text-blue-600 font-medium flex items-center gap-1">
                      <Loader2 size={11} className="animate-spin text-blue-600" />
                      <span>Sedang menganalisis & merumuskan solusi...</span>
                    </span>
                  </div>

                  <div className="bg-white border border-blue-200/80 rounded-2xl p-4 shadow-sm flex items-center gap-3.5">
                    <div className="flex gap-1.5 items-center px-1">
                      <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-bounce"></span>
                    </div>
                    <span className="text-xs text-slate-600 font-medium">
                      Menghubungkan data SAK EMKM dan model kelayakan lokasi...
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
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
                      disabled={isLoading}
                      onClick={() => handleSendMessage(item.prompt)}
                      className="bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-left transition-all hover:border-blue-400 group shadow-none hover:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
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
                disabled={isLoading}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder={
                  isLoading
                    ? "Sedang memproses tanggapan..."
                    : "Ketik kendala operasional cabang atau rencana ekspansi..."
                }
                className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none resize-none bg-transparent disabled:opacity-60"
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
                  disabled={isLoading}
                  onClick={() => handleSendMessage()}
                  className="inline-flex items-center gap-1.5 bg-[#0A2540] hover:bg-[#071c33] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-all"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={12} className="animate-spin" />
                      <span>Menganalisis...</span>
                    </>
                  ) : (
                    <>
                      <span>Kirim</span>
                      <Send size={12} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
