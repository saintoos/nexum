import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import DashboardPage from "./components/DashboardPage";
import BusinessProfilePage from "./components/BusinessProfilePage";
import LocationPredictionPage from "./components/LocationPredictionPage";
import FinancialRiskPage from "./components/FinancialRiskPage";
import AiConsultingPage from "./components/AIConsultingPage";
import AnalysisHistoryPage from "./components/AnalysisHistoryPage";
import LandingPage from "./components/LandingPage";

function App() {
  // Pilihan awal halaman yang ingin ditampilkan ('dashboard', 'location', 'finance', dll.)
  const [currentPage, setCurrentPage] = useState("landing");

  return (
    <div className="App min-h-screen">
      {/* Quick Navigation Toolbar di bagian paling atas untuk kemudahan evaluasi & preview
      <div className="bg-slate-900 text-white text-[11px] py-1.5 px-4 flex items-center justify-between border-b border-slate-800">
        <span className="text-slate-400 font-medium">
          NEXUM Preview Mode:{" "}
          <strong className="text-white capitalize">{currentPage}</strong>
        </span>
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <button
            onClick={() => setCurrentPage("landing")}
            className={`px-2.5 py-0.5 rounded transition-colors whitespace-nowrap ${
              currentPage === "landing"
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            0. Landing Page
          </button>
          <button
            onClick={() => setCurrentPage("login")}
            className={`px-2.5 py-0.5 rounded transition-colors whitespace-nowrap ${
              currentPage === "login"
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            1. Login
          </button>
          <button
            onClick={() => setCurrentPage("register")}
            className={`px-2.5 py-0.5 rounded transition-colors whitespace-nowrap ${
              currentPage === "register"
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            2. Register
          </button>
          <button
            onClick={() => setCurrentPage("dashboard")}
            className={`px-2.5 py-0.5 rounded transition-colors whitespace-nowrap ${
              currentPage === "dashboard"
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            3. Dashboard (BI)
          </button>
          <button
            onClick={() => setCurrentPage("location")}
            className={`px-2.5 py-0.5 rounded transition-colors whitespace-nowrap ${
              currentPage === "location"
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            4. Kelayakan Lokasi (SAW)
          </button>
          <button
            onClick={() => setCurrentPage("finance")}
            className={`px-2.5 py-0.5 rounded transition-colors whitespace-nowrap ${
              currentPage === "finance"
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            5. Risiko Keuangan (SAK EMKM)
          </button>
          <button
            onClick={() => setCurrentPage("ai")}
            className={`px-2.5 py-0.5 rounded transition-colors whitespace-nowrap ${
              currentPage === "ai"
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            6. Konsultasi AI (RAG)
          </button>
          <button
            onClick={() => setCurrentPage("history")}
            className={`px-2.5 py-0.5 rounded transition-colors whitespace-nowrap ${
              currentPage === "history"
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            7. Riwayat Analisis
          </button>
          <button
            onClick={() => setCurrentPage("profile")}
            className={`px-2.5 py-0.5 rounded transition-colors whitespace-nowrap ${
              currentPage === "profile"
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            8. Profil Usaha
          </button>
        </div>
      </div> */}

      {/* Render Current Page */}
      {currentPage === "landing" && (
        <LandingPage
          onNavigateToLogin={() => setCurrentPage("login")}
          onNavigateToRegister={() => setCurrentPage("register")}
          onNavigateToDashboard={() => setCurrentPage("dashboard")}
        />
      )}

      {currentPage === "login" && (
        <LoginPage
          onNavigateToRegister={() => setCurrentPage("register")}
          onLoginSuccess={() => setCurrentPage("dashboard")}
          onNavigateToLanding={() => setCurrentPage("landing")}
        />
      )}

      {currentPage === "register" && (
        <RegisterPage onNavigateToLogin={() => setCurrentPage("login")} />
      )}

      {currentPage === "dashboard" && (
        <DashboardPage
          onLogout={() => setCurrentPage("login")}
          onNavigate={(page) => setCurrentPage(page)}
        />
      )}

      {currentPage === "location" && (
        <LocationPredictionPage
          onLogout={() => setCurrentPage("login")}
          onNavigate={(page) => setCurrentPage(page)}
        />
      )}

      {currentPage === "finance" && (
        <FinancialRiskPage
          onLogout={() => setCurrentPage("login")}
          onNavigate={(page) => setCurrentPage(page)}
        />
      )}

      {currentPage === "ai" && (
        <AiConsultingPage
          onLogout={() => setCurrentPage("login")}
          onNavigate={(page) => setCurrentPage(page)}
        />
      )}

      {currentPage === "history" && (
        <AnalysisHistoryPage
          onLogout={() => setCurrentPage("login")}
          onNavigate={(page) => setCurrentPage(page)}
        />
      )}

      {currentPage === "profile" && (
        <BusinessProfilePage
          onLogout={() => setCurrentPage("login")}
          onNavigate={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
}

export default App;
