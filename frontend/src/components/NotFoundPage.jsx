import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Compass, ArrowRight, Home, RefreshCw } from "lucide-react";

// Daftar rute resmi aplikasi NEXUM
const VALID_ROUTES = [
  { path: "/dashboard", label: "Dashboard (BI)", keywords: ["dash", "board", "user", "usir", "utama", "home"] },
  { path: "/location", label: "Kelayakan Lokasi (SAW)", keywords: ["loc", "lokasi", "tempat", "saw", "cabang"] },
  { path: "/finance", label: "Risiko Keuangan (SAK EMKM)", keywords: ["fin", "keuangan", "duit", "uang", "laporan", "excel", "risk"] },
  { path: "/ai", label: "Konsultasi Bisnis AI", keywords: ["ai", "chat", "konsul", "tanya", "bot", "rag"] },
  { path: "/history", label: "Riwayat Analisis", keywords: ["hist", "riwayat", "arsip", "log", "rekam"] },
  { path: "/profile", label: "Profil Usaha", keywords: ["prof", "profil", "usaha", "bisnis", "toko", "setting", "akun"] },
  { path: "/admin", label: "Panel Administrator", keywords: ["adm", "admin", "kelola", "users"] },
  { path: "/login", label: "Halaman Masuk (Login)", keywords: ["log", "masuk", "signin", "auth"] },
  { path: "/register", label: "Halaman Pendaftaran", keywords: ["reg", "daftar", "signup"] },
  { path: "/", label: "Beranda Utama", keywords: ["landing", "depan", "awal"] },
];

// Algoritma Levenshtein Distance untuk menghitung jarak perbedaan huruf
function levenshteinDistance(a, b) {
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitusi
          matrix[i][j - 1] + 1,     // insersi
          matrix[i - 1][j] + 1      // delesi
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

// Fungsi deteksi typo cerdas
function findBestRouteMatch(currentPath) {
  const cleanPath = currentPath.toLowerCase().replace(/^\/+|\/+$/g, "");
  if (!cleanPath) return { path: "/", label: "Beranda Utama" };

  // 1. Cek keyword pencocokan langsung
  for (const route of VALID_ROUTES) {
    if (route.keywords.some((k) => cleanPath.includes(k))) {
      return route;
    }
  }

  // 2. Cek jarak kemiripan Levenshtein
  let bestRoute = VALID_ROUTES[0];
  let minDistance = Infinity;

  for (const route of VALID_ROUTES) {
    const targetSegment = route.path.replace(/^\/+/, "") || "home";
    const distance = levenshteinDistance(cleanPath, targetSegment);
    if (distance < minDistance) {
      minDistance = distance;
      bestRoute = route;
    }
  }

  return bestRoute;
}

export default function NotFoundPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [countdown, setCountdown] = useState(4);
  const [isPaused, setIsPaused] = useState(false);

  const matchedRoute = findBestRouteMatch(location.pathname);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate(matchedRoute.path);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, matchedRoute.path, isPaused]);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-center">
        {/* Icon Ilustrasi */}
        <div className="w-16 h-16 bg-blue-950/60 border border-blue-800/50 rounded-2xl mx-auto flex items-center justify-center text-blue-400 mb-6 shadow-inner animate-pulse">
          <Compass className="w-8 h-8" />
        </div>

        {/* Status 404 */}
        <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold rounded-full mb-3">
          Error 404 • Halaman Tidak Ditemukan
        </span>

        <h1 className="text-2xl font-bold text-slate-100 mb-2">
          Nyasar, Bang? 🤔
        </h1>
        <p className="text-sm text-slate-400 mb-6">
          Alamat <code className="bg-slate-800 text-amber-300 px-2 py-0.5 rounded font-mono text-xs">{location.pathname}</code> sepertinya salah ketik atau tidak tersedia di NEXUM.
        </p>

        {/* Kotak Rekomendasi Typo */}
        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 mb-6 text-left">
          <p className="text-xs text-slate-400 mb-1">Mungkin maksud Anda:</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-blue-400 text-base">{matchedRoute.label}</p>
              <p className="text-xs text-slate-400 font-mono">{matchedRoute.path}</p>
            </div>
            <button
              onClick={() => navigate(matchedRoute.path)}
              className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors flex items-center gap-1 text-xs font-medium"
            >
              Beralih <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Hitung Mundur Auto-Redirect */}
        <div className="text-xs text-slate-400 mb-6 flex items-center justify-center gap-2">
          {!isPaused ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 text-blue-400 animate-spin" />
              <span>
                Mengalihkan otomatis dalam <strong className="text-white text-sm">{countdown} detik</strong>...
              </span>
              <button
                onClick={() => setIsPaused(true)}
                className="text-xs text-slate-500 hover:text-slate-300 underline ml-1"
              >
                (Batalkan)
              </button>
            </>
          ) : (
            <span className="text-amber-400">Pengalihan otomatis dibatalkan.</span>
          )}
        </div>

        {/* Tombol Tindakan */}
        <div className="flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={() => navigate(matchedRoute.path)}
            className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium text-sm transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
          >
            Buka {matchedRoute.label} <ArrowRight className="w-4 h-4" />
          </button>
          <Link
            to="/"
            className="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2 border border-slate-700"
          >
            <Home className="w-4 h-4" /> Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
