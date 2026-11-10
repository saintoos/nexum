import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  ShieldCheck,
  Eye,
  EyeOff,
  ArrowLeft,
} from "lucide-react";

export default function RegisterPage({ onNavigateToLogin }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Perhitungan indikator kekuatan kata sandi sederhana (3 bar)
  const calculateStrength = (pass) => {
    if (!pass) return 0;
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass) || /[0-9]/.test(pass)) score++;
    if (
      /[^A-Za-z0-9]/.test(pass) ||
      (pass.length >= 10 && /[A-Z]/.test(pass) && /[0-9]/.test(pass))
    )
      score++;
    return score;
  };

  const strength = calculateStrength(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!agreeTerms) {
      setErrorMessage(
        "Anda harus menyetujui Ketentuan Layanan & Kebijakan Privasi.",
      );
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Kata sandi minimal 8 karakter.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Konfirmasi kata sandi tidak cocok.");
      return;
    }

    setIsLoading(true);
    // Simulasi proses pendaftaran akun UMKM
    setTimeout(() => {
      setIsLoading(false);
      alert(`Pendaftaran berhasil untuk Pelaku UMKM: ${fullName} (${email})`);
      if (onNavigateToLogin) {
        onNavigateToLogin();
      }
    }, 1200);
  };

  const handleGoogleRegister = () => {
    alert("Mengarahkan ke Google Bisnis OAuth...");
  };

  const handleSSORegister = () => {
    alert("Mengarahkan ke pendaftaran SSO Inkubator...");
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
          {/* Back to Login Link */}
          <div className="mb-4">
            <button
              type="button"
              onClick={onNavigateToLogin}
              className="inline-flex items-center text-xs md:text-sm text-slate-600 hover:text-[#0A2540] transition-colors group font-medium"
            >
              <ArrowLeft
                size={14}
                className="mr-1.5 transition-transform group-hover:-translate-x-1"
              />
              Kembali ke Masuk
            </button>
          </div>

          {/* Registration Card */}
          <div className="bg-white rounded-2xl shadow-[0_10px_35px_-5px_rgba(10,37,64,0.08)] border border-slate-100 overflow-hidden relative">
            {/* Top Accent Line */}
            <div className="h-1 bg-gradient-to-r from-blue-700 via-indigo-800 to-[#0A2540]"></div>

            <div className="px-6 py-8 sm:px-10 sm:py-9">
              {/* Card Header */}
              <div className="text-center mb-6">
                <h2 className="text-xl sm:text-[22px] font-bold text-[#0A2540]">
                  Daftar Akun Pelaku UMKM
                </h2>
                <p className="text-xs sm:text-[13px] text-slate-500 mt-2 leading-relaxed max-w-sm mx-auto">
                  Mulai evaluasi kelayakan lokasi dan kesehatan finansial usaha
                  Anda secara presisi.
                </p>
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg">
                  {errorMessage}
                </div>
              )}

              {/* Registration Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Field 1: Nama Lengkap */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="fullName"
                      className="text-xs font-semibold text-slate-700"
                    >
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[11px] text-slate-400">
                      Identitas Pemilik
                    </span>
                  </div>
                  <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                    <div className="pl-3.5 pr-1 text-slate-400 flex items-center pointer-events-none">
                      <User size={16} />
                    </div>
                    <input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Contoh: Siti Rahma"
                      required
                      className="w-full bg-transparent py-2.5 px-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none rounded-lg"
                    />
                  </div>
                </div>

                {/* Field 2: Email Usaha */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="reg-email"
                      className="text-xs font-semibold text-slate-700"
                    >
                      Email Usaha <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[11px] text-slate-400">
                      Kanal Notifikasi
                    </span>
                  </div>
                  <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                    <div className="pl-3.5 pr-1 text-slate-400 flex items-center pointer-events-none">
                      <Mail size={16} />
                    </div>
                    <input
                      id="reg-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="siti@contoh.com"
                      required
                      className="w-full bg-transparent py-2.5 px-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none rounded-lg"
                    />
                  </div>
                </div>

                {/* Field 3: Kata Sandi */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="reg-password"
                      className="text-xs font-semibold text-slate-700"
                    >
                      Kata Sandi <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[11px] text-slate-400">
                      Enkripsi 256-Bit
                    </span>
                  </div>
                  <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                    <div className="pl-3.5 pr-1 text-slate-400 flex items-center pointer-events-none">
                      <Lock size={16} />
                    </div>
                    <input
                      id="reg-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Kombinasi huruf & angka"
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

                  {/* Password helper & Strength bars */}
                  <div className="flex items-center justify-between mt-1.5 px-0.5">
                    <span className="text-[11px] text-slate-400">
                      Minimal 8 karakter kombinasi huruf & angka
                    </span>
                    <div className="flex items-center gap-1">
                      <div
                        className={`w-3.5 h-1 rounded-full transition-colors ${
                          strength >= 1 ? "bg-blue-600" : "bg-slate-200"
                        }`}
                      ></div>
                      <div
                        className={`w-3.5 h-1 rounded-full transition-colors ${
                          strength >= 2 ? "bg-blue-600" : "bg-slate-200"
                        }`}
                      ></div>
                      <div
                        className={`w-3.5 h-1 rounded-full transition-colors ${
                          strength >= 3 ? "bg-blue-600" : "bg-slate-200"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Field 4: Konfirmasi Kata Sandi */}
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-xs font-semibold text-slate-700 mb-1.5"
                  >
                    Konfirmasi Kata Sandi{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center bg-[#F1F4F9] rounded-lg border border-transparent focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                    <div className="pl-3.5 pr-1 text-slate-400 flex items-center pointer-events-none">
                      <ShieldCheck size={16} />
                    </div>
                    <input
                      id="confirm-password"
                      type={showPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Ulangi kata sandi"
                      required
                      className="w-full bg-transparent py-2.5 px-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none rounded-lg"
                    />
                  </div>
                </div>

                {/* Checkbox Persetujuan Ketentuan Layanan */}
                <div className="pt-1">
                  <label className="flex items-start cursor-pointer select-none text-slate-600 text-xs leading-relaxed">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="w-4 h-4 mt-0.5 rounded border-slate-300 text-[#0A2540] focus:ring-[#0A2540]/30 cursor-pointer flex-shrink-0"
                    />
                    <span className="ml-2.5 text-slate-600 text-[11px] sm:text-xs">
                      Saya menyetujui{" "}
                      <a
                        href="#terms"
                        className="text-blue-700 hover:text-blue-800 font-medium hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Ketentuan Layanan
                      </a>{" "}
                      &{" "}
                      <a
                        href="#privacy"
                        className="text-blue-700 hover:text-blue-800 font-medium hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Kebijakan Privasi Data SAK EMKM
                      </a>{" "}
                      untuk analitik ekspansi mandiri.
                    </span>
                  </label>
                </div>

                {/* Submit Button: Buat Akun */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-4 py-2.5 px-4 bg-[#0A2540] hover:bg-[#071c33] active:scale-[0.99] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-all duration-150 flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed"
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
                      Memproses Pendaftaran...
                    </span>
                  ) : (
                    "Buat Akun"
                  )}
                </button>
              </form>

              {/* Divider: ATAU DAFTAR DENGAN */}
              <div className="relative my-6 text-center">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-3 text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                    ATAU DAFTAR DENGAN
                  </span>
                </div>
              </div>

              {/* Social / SSO Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleGoogleRegister}
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
                  onClick={handleSSORegister}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#F1F4F9] hover:bg-[#e7ecf4] text-slate-700 text-xs font-medium rounded-lg transition-colors border border-slate-200/50"
                >
                  <span>SSO Inkubator</span>
                </button>
              </div>

              {/* Login Link & Disclaimer */}
              <div className="text-center mt-6">
                <p className="text-xs text-slate-600">
                  Sudah memiliki akun terdaftar?{" "}
                  <button
                    type="button"
                    onClick={onNavigateToLogin}
                    className="text-blue-700 hover:text-blue-800 font-semibold hover:underline transition-colors"
                  >
                    Masuk di sini
                  </button>
                </p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-2 leading-relaxed">
                  Dengan mendaftar, Anda menyetujui ketentuan pemrosesan data
                  mandiri NEXUM
                </p>
              </div>
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
