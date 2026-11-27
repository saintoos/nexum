import React, { useState } from "react";
import {
  AtSign,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  ShieldCheck,
  Store,
  KeyRound,
} from "lucide-react";

export default function LoginPage({
  onNavigateToRegister,
  onLoginSuccess,
  onNavigateToLanding,
  onAdminLogin,
  adminEmail = "daffarazan616@students.unnes.ac.id",
  adminPassword = "Orbit!Kopi72#Langit9Biru",
}) {
  const [loginRole, setLoginRole] = useState("umkm"); // 'umkm' | 'admin'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Silakan lengkapi email dan kata sandi Anda.");
      return;
    }

    setIsLoading(true);

    const normalizedEmail = email.toLowerCase().trim();
    const currentAdminEmail = (adminEmail || "daffarazan616@students.unnes.ac.id").toLowerCase().trim();

    // Autentikasi Nyata ke Backend API
    try {
      let res;
      try {
        res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: normalizedEmail, password }),
        });
      } catch (_) {
        res = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: normalizedEmail, password }),
        });
      }

      if (res && res.ok) {
        const resJson = await res.json();
        const token = resJson.data?.token;
        const user = resJson.data?.user;

        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("nexum_token", token);
          if (user) localStorage.setItem("user", JSON.stringify(user));

          setIsLoading(false);
          if (user?.role === "ADMIN" || loginRole === "admin" || normalizedEmail === currentAdminEmail) {
            if (onAdminLogin) return onAdminLogin();
          }
          if (onLoginSuccess) return onLoginSuccess();
          return;
        }
      }

      // Jika server mengembalikan status error (400, 401, dll)
      if (res) {
        const errJson = await res.json().catch(() => ({}));
        setIsLoading(false);
        const errMsg =
          errJson.error ||
          errJson.message ||
          errJson.details?.[0]?.message ||
          "Email atau kata sandi tidak valid.";
        setErrorMessage(errMsg);
        return;
      }
    } catch (apiErr) {
      console.error("Gagal terhubung ke API login:", apiErr);
      setIsLoading(false);
      setErrorMessage(
        "Tidak dapat terhubung ke server backend (port 5000). Pastikan backend sedang aktif ('npm run dev')."
      );
      return;
    }

    setIsLoading(false);
    setErrorMessage("Autentikasi gagal. Silakan periksa kembali email dan kata sandi Anda.");
  };

  const handleAutoFillAdmin = () => {
    setLoginRole("admin");
    setEmail(adminEmail || "daffarazan616@students.unnes.ac.id");
    setPassword(adminPassword || "Orbit!Kopi72#Langit9Biru");
    setErrorMessage("");
  };

  const handleAutoFillUmkm = () => {
    setLoginRole("umkm");
    setEmail("daffazen1@gmail.com");
    setPassword("Password123!");
    setErrorMessage("");
  };

  const handleGoogleLogin = () => {
    alert("Mengarahkan ke Google Bisnis OAuth...");
  };

  const handleSSOLogin = () => {
    alert("Mengarahkan ke SSO Inkubator...");
  };

  return (
    <div className="min-h-screen bg-[#f8fafd] flex flex-col justify-between text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Header */}
      <header className="w-full">
        <div className="py-5 text-center">
          <h1 className="text-xl md:text-2xl font-extrabold tracking-wider text-[#0A2540]">
            NEXUM
          </h1>
        </div>
        {/* Dotted border separator */}
        <div className="w-full border-b border-dashed border-sky-300"></div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center items-center px-4 py-8 sm:py-10">
        <div className="w-full max-w-[460px]">
          {/* Back Link */}
          <div className="mb-4">
            <button
              type="button"
              onClick={onNavigateToLanding}
              className="inline-flex items-center text-xs md:text-sm text-slate-600 hover:text-[#0A2540] transition-colors group font-medium"
            >
              <ArrowLeft
                size={14}
                className="mr-1.5 transition-transform group-hover:-translate-x-1"
              />
              Kembali ke Beranda
            </button>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-[0_10px_35px_-5px_rgba(10,37,64,0.08)] border border-slate-100 overflow-hidden relative">
            {/* Top Accent Line */}
            <div
              className={`h-1 bg-gradient-to-r ${
                loginRole === "admin"
                  ? "from-amber-600 via-indigo-700 to-[#0A2540]"
                  : "from-blue-700 via-indigo-800 to-[#0A2540]"
              }`}
            ></div>

            {/* Role Switcher Tabs */}
            <div className="grid grid-cols-2 bg-slate-50 border-b border-slate-100 p-1.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => {
                  setLoginRole("umkm");
                  setErrorMessage("");
                }}
                className={`py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-all ${
                  loginRole === "umkm"
                    ? "bg-white text-[#0A2540] shadow-xs font-bold"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <Store size={14} />
                <span>Pelaku UMKM</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setLoginRole("admin");
                  setErrorMessage("");
                }}
                className={`py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-all ${
                  loginRole === "admin"
                    ? "bg-white text-[#0A2540] shadow-xs font-bold"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <ShieldCheck size={14} />
                <span>Administrator</span>
              </button>
            </div>

            <div className="px-6 py-7 sm:px-10 sm:py-8">
              {/* Card Header */}
              <div className="text-center mb-6">
                <h2 className="text-xl sm:text-[22px] font-bold text-[#0A2540]">
                  {loginRole === "admin"
                    ? "Portal Administrator"
                    : "Masuk ke Akun Anda"}
                </h2>
                <p className="text-xs sm:text-[13px] text-slate-500 mt-1.5 leading-relaxed max-w-xs mx-auto">
                  {loginRole === "admin"
                    ? "Akses kontrol konfigurasi bobot SAW, model SAK EMKM, dan manajemen pengguna"
                    : "Kelola analitik keuangan dan rekomendasi ekspansi cabang secara real-time"}
                </p>
              </div>

              {/* Admin Quick Credentials Pill */}
              {loginRole === "admin" && (
                <div className="mb-5 p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-[11px] text-amber-900 flex items-center justify-between gap-2">
                  <div>
                    <span className="font-bold">Kredensial Default Admin:</span>
                    <div className="font-mono text-[10px] text-amber-800">
                      {adminEmail || "daffarazan616@students.unnes.ac.id"} /{" "}
                      {adminPassword || "Orbit!Kopi72#Langit9Biru"}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleAutoFillAdmin}
                    className="px-2.5 py-1 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg text-[10px] shrink-0 transition-colors shadow-xs"
                  >
                    Isi Otomatis
                  </button>
                </div>
              )}

              {/* UMKM Quick Credentials Pill */}
              {loginRole === "umkm" && (
                <div className="mb-5 p-3 bg-blue-50/70 border border-blue-200/80 rounded-xl text-[11px] text-blue-900 flex items-center justify-between gap-2">
                  <div>
                    <span className="font-bold">Akun Terdaftar (Data Warung Kopi):</span>
                    <div className="font-mono text-[10px] text-blue-800">
                      daffazen1@gmail.com / Password123!
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleAutoFillUmkm}
                    className="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-[10px] shrink-0 transition-colors shadow-xs"
                  >
                    Isi Otomatis
                  </button>
                </div>
              )}

              {/* Error Message Alert */}
              {errorMessage && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg">
                  {errorMessage}
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Field: Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-slate-700 mb-1.5 text-left"
                  >
                    {loginRole === "admin"
                      ? "Email Administrator"
                      : "Email Usaha Terdaftar"}
                  </label>
                  <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                    <div className="pl-3.5 pr-1 text-slate-400 flex items-center pointer-events-none">
                      <AtSign size={16} />
                    </div>
                    <input
                      id="email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={
                        loginRole === "admin"
                          ? (adminEmail || "daffarazan616@students.unnes.ac.id")
                          : "nama@usaha.com"
                      }
                      required
                      className="w-full bg-transparent py-2.5 px-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none rounded-lg"
                    />
                  </div>
                </div>

                {/* Field: Kata Sandi */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold text-slate-700 mb-1.5 text-left"
                  >
                    Kata Sandi {loginRole === "admin" ? "Admin" : ""}
                  </label>
                  <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                    <div className="pl-3.5 pr-1 text-slate-400 flex items-center pointer-events-none">
                      <Lock size={16} />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      required
                      className="w-full bg-transparent py-2.5 px-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="pr-3.5 pl-1 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
                      title={
                        showPassword ? "Sembunyikan sandi" : "Tampilkan sandi"
                      }
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <label className="flex items-center cursor-pointer select-none text-slate-600">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-[#0A2540] focus:ring-[#0A2540]/30 cursor-pointer"
                    />
                    <span className="ml-2 text-slate-600">
                      Ingat sesi saya (30 hari)
                    </span>
                  </label>
                  {loginRole !== "admin" && (
                    <a
                      href="#lupa-sandi"
                      className="text-blue-700 hover:text-blue-800 font-medium hover:underline transition-colors"
                    >
                      Lupa kata sandi?
                    </a>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-6 py-2.5 px-4 bg-[#0A2540] hover:bg-[#071c33] active:scale-[0.99] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-all duration-150 flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="inline-flex items-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Memproses Autentikasi...
                    </span>
                  ) : loginRole === "admin" ? (
                    "Masuk ke Portal Admin"
                  ) : (
                    "Masuk"
                  )}
                </button>
              </form>

              {/* SSO Section only for UMKM */}
              {loginRole === "umkm" && (
                <>
                  {/* Divider: ATAU METODE RESMI */}
                  <div className="relative my-6 text-center">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-slate-200"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-3 text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                        ATAU METODE RESMI
                      </span>
                    </div>
                  </div>

                  {/* Social / SSO Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={handleGoogleLogin}
                      className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#F1F4F9] hover:bg-[#e7ecf4] text-slate-700 text-xs font-medium rounded-lg transition-colors border border-slate-200/50"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                      <span>Google Bisnis</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSSOLogin}
                      className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#F1F4F9] hover:bg-[#e7ecf4] text-slate-700 text-xs font-medium rounded-lg transition-colors border border-slate-200/50"
                    >
                      <span>SSO Inkubator</span>
                    </button>
                  </div>

                  {/* Bottom Register Option */}
                  <div className="text-center text-xs text-slate-600 mt-7">
                    Belum memiliki akun Pelaku UMKM?{" "}
                    <button
                      type="button"
                      onClick={onNavigateToRegister}
                      className="text-blue-700 hover:text-blue-800 font-semibold underline underline-offset-2 transition-colors"
                    >
                      Daftar akun baru
                    </button>
                  </div>
                </>
              )}

              {/* Bottom Quick Switch for Admin */}
              {loginRole === "admin" && (
                <div className="text-center text-xs text-slate-500 mt-6 pt-4 border-t border-slate-100">
                  Bukan Administrator?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setLoginRole("umkm");
                      setErrorMessage("");
                    }}
                    className="text-blue-700 hover:underline font-semibold"
                  >
                    Kembali ke Login Pelaku UMKM
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Footer */}
      <footer className="w-full">
        {/* Dotted border separator */}
        <div className="w-full border-t border-dashed border-sky-300"></div>

        <div className="py-4 px-4 text-center">
          <p className="text-[11px] sm:text-xs text-slate-500 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>
              © 2025 NEXUM Intelligence Platform. Institutional Enterprise
              Grade.
            </span>
            <span className="text-slate-400">•</span>
            <a
              href="#security"
              className="hover:text-slate-800 transition-colors hover:underline"
            >
              Security Architecture
            </a>
            <span className="text-slate-400">•</span>
            <a
              href="#privacy"
              className="hover:text-slate-800 transition-colors hover:underline"
            >
              Privacy Compliance
            </a>
            <span className="text-slate-400">•</span>
            <a
              href="#terms"
              className="hover:text-slate-800 transition-colors hover:underline"
            >
              Terms of Protocol
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
