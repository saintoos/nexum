import React, { useState, useRef, useEffect } from "react";
import {
  Bell,
  CheckCheck,
  Check,
  Trash2,
  MapPin,
  AlertTriangle,
  Sparkles,
  History,
  Info,
  X,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function NotificationDropdown({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const dropdownRef = useRef(null);

  // Data notifikasi cerdas untuk pelaku UMKM NEXUM
  const [notifications, setNotifications] = useState([
    {
      id: "notif-1",
      title: "Analisis Kelayakan Lokasi Selesai",
      description:
        "Evaluasi Ruko Gajah Mada Semarang telah selesai dihitung menggunakan algoritma SAW dengan skor 78.4 (Kategori: LAYAK).",
      time: "10 menit yang lalu",
      category: "location",
      unread: true,
      actionPage: "location",
      actionLabel: "Buka Hasil Analisis",
      type: "success",
    },
    {
      id: "notif-2",
      title: "Peringatan Rasio Likuiditas Rendah",
      description:
        "Quick Ratio periode berjalan berada di angka 0.68x (di bawah ambang batas aman 1.0x). Evaluasi rekomendasi kas darurat.",
      time: "2 jam yang lalu",
      category: "finance",
      unread: true,
      actionPage: "finance",
      actionLabel: "Lihat Risiko Keuangan",
      type: "warning",
    },
    {
      id: "notif-3",
      title: "Rekomendasi Strategi AI Baru",
      description:
        "Asisten AI telah merumuskan 3 skenario mitigasi pengeluaran bahan baku untuk mengoptimalkan profit margin bulan depan.",
      time: "5 jam yang lalu",
      category: "ai",
      unread: true,
      actionPage: "ai",
      actionLabel: "Mulai Konsultasi",
      type: "info",
    },
    {
      id: "notif-4",
      title: "Riwayat Analisis Tersimpan",
      description:
        "Laporan komparasi multi-cabang periode Q3 telah diarsipkan otomatis ke sistem cloud.",
      time: "1 hari yang lalu",
      category: "history",
      unread: false,
      actionPage: "history",
      actionLabel: "Buka Riwayat",
      type: "normal",
    },
    {
      id: "notif-5",
      title: "Pembaruan Parameter SAW v1.2",
      description:
        "Admin sistem telah memperbarui bobot kriteria kepadatan kompetitor untuk estimasi kelayakan yang lebih presisi.",
      time: "3 hari yang lalu",
      category: "system",
      unread: false,
      actionPage: null,
      actionLabel: null,
      type: "normal",
    },
  ]);

  const unreadCount = notifications.filter((n) => n.unread).length;
  const alertCount = notifications.filter((n) => n.type === "warning").length;

  // Tutup dropdown saat user mengklik di luar area dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handler: Tandai satu notifikasi sebagai sudah dibaca
  const markAsRead = (id, e) => {
    e?.stopPropagation();
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: false } : n))
    );
  };

  // Handler: Tandai semua sebagai sudah dibaca
  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  // Handler: Bersihkan notifikasi yang sudah dibaca
  const clearReadNotifications = () => {
    setNotifications((prev) => prev.filter((n) => n.unread));
  };

  // Handler: Hapus satu notifikasi secara permanen
  const deleteNotification = (id, e) => {
    e?.stopPropagation();
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  // Handler: Hapus semua notifikasi
  const deleteAllNotifications = () => {
    setNotifications([]);
  };

  // Handler: Klik notifikasi untuk navigasi ke halaman terkait
  const handleItemClick = (item) => {
    markAsRead(item.id);
    if (item.actionPage && onNavigate) {
      onNavigate(item.actionPage);
      setIsOpen(false);
    }
  };

  // Filter notifikasi sesuai tab aktif
  const filteredNotifications = notifications.filter((n) => {
    if (activeFilter === "unread") return n.unread;
    if (activeFilter === "alerts") return n.type === "warning";
    return true;
  });

  // Render icon sesuai kategori notifikasi
  const renderCategoryIcon = (category, type) => {
    if (category === "location") {
      return (
        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
          <MapPin size={15} />
        </div>
      );
    }
    if (category === "finance") {
      return (
        <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
          <AlertTriangle size={15} />
        </div>
      );
    }
    if (category === "ai") {
      return (
        <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
          <Sparkles size={15} />
        </div>
      );
    }
    if (category === "history") {
      return (
        <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <History size={15} />
        </div>
      );
    }
    return (
      <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
        <Info size={15} />
      </div>
    );
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Tombol Lonceng Notifikasi */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`relative p-2 rounded-full transition-all ${
          isOpen
            ? "bg-white/20 text-white"
            : "text-slate-300 hover:text-white hover:bg-white/10"
        }`}
        title="Pemberitahuan & Notifikasi"
        aria-label="Buka notifikasi"
      >
        <Bell size={18} />
        {unreadCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-sky-400 text-[#0A2540] text-[10px] font-extrabold rounded-full flex items-center justify-center px-1 ring-2 ring-[#0A2540] animate-pulse">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Popover Card Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200/90 z-50 text-slate-800 overflow-hidden flex flex-col font-sans transition-all">
          {/* Header Popover */}
          <div className="px-4 py-3.5 bg-slate-50/80 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-[#0A2540]">Notifikasi</h3>
              {unreadCount > 0 ? (
                <span className="bg-sky-100 text-sky-800 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  {unreadCount} baru
                </span>
              ) : (
                <span className="bg-slate-200 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded-full">
                  Semua terbaca
                </span>
              )}
            </div>

            <div className="flex items-center gap-1">
              {unreadCount > 0 && (
                <button
                  type="button"
                  onClick={markAllAsRead}
                  className="p-1 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  title="Tandai semua telah dibaca"
                >
                  <CheckCheck size={16} />
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 rounded-md transition-colors"
                title="Tutup"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1 px-3 py-2 bg-white border-b border-slate-100 text-xs">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                activeFilter === "all"
                  ? "bg-[#0A2540] text-white shadow-xs"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              Semua ({notifications.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("unread")}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                activeFilter === "unread"
                  ? "bg-[#0A2540] text-white shadow-xs"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              Belum Dibaca ({unreadCount})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("alerts")}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                activeFilter === "alerts"
                  ? "bg-[#0A2540] text-white shadow-xs"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              Peringatan ({alertCount})
            </button>
          </div>

          {/* Daftar Notifikasi */}
          <div className="max-h-80 overflow-y-auto divide-y divide-slate-100 bg-white">
            {filteredNotifications.length === 0 ? (
              <div className="py-10 px-4 text-center">
                <div className="w-10 h-10 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Check size={20} />
                </div>
                <p className="text-xs font-semibold text-slate-700">
                  Tidak ada notifikasi
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Semua pemberitahuan pada kategori ini telah terselesaikan.
                </p>
              </div>
            ) : (
              filteredNotifications.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className={`p-3.5 flex items-start gap-3 transition-colors cursor-pointer group ${
                    item.unread
                      ? "bg-sky-50/40 hover:bg-sky-50/80"
                      : "hover:bg-slate-50/80"
                  }`}
                >
                  {/* Icon Kategori */}
                  {renderCategoryIcon(item.category, item.type)}

                  {/* Konten Notifikasi */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4
                        className={`text-xs leading-snug line-clamp-1 ${
                          item.unread
                            ? "font-bold text-[#0A2540]"
                            : "font-semibold text-slate-700"
                        }`}
                      >
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                        {item.unread && (
                          <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                        )}
                        <button
                          type="button"
                          onClick={(e) => deleteNotification(item.id, e)}
                          className="p-1 text-slate-300 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="Hapus notifikasi ini"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-100/60">
                      <div className="flex items-center gap-1 text-[10px] text-slate-400">
                        <Clock size={11} />
                        <span>{item.time}</span>
                      </div>

                      {item.actionLabel && (
                        <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-blue-700 group-hover:translate-x-0.5 transition-transform">
                          {item.actionLabel}
                          <ArrowRight size={11} />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Popover */}
          <div className="p-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={clearReadNotifications}
                className="text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors px-1.5 py-0.5 rounded hover:bg-slate-200/60"
                title="Bersihkan notifikasi yang sudah dibaca"
              >
                <span>Hapus Terbaca</span>
              </button>
              {notifications.length > 0 && (
                <>
                  <span className="text-slate-300">|</span>
                  <button
                    type="button"
                    onClick={deleteAllNotifications}
                    className="text-red-500 hover:text-red-700 flex items-center gap-1 transition-colors px-1.5 py-0.5 rounded hover:bg-red-50 font-medium"
                    title="Hapus seluruh notifikasi"
                  >
                    <Trash2 size={11} />
                    <span>Hapus Semua</span>
                  </button>
                </>
              )}
            </div>

            <span className="text-[10px] text-slate-400 font-medium px-1">
              NEXUM Notifikasi
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
