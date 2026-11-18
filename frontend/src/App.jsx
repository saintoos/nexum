import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import DashboardPage from "./components/DashboardPage";
import BusinessProfilePage from "./components/BusinessProfilePage";
import LocationPredictionPage from "./components/LocationPredictionPage";
import FinancialRiskPage from "./components/FinancialRiskPage";
import AiConsultingPage from "./components/AIConsultingPage";
import AnalysisHistoryPage from "./components/AnalysisHistoryPage";
import LandingPage from "./components/LandingPage";
import AdminDashboardPage from "./components/AdminDashboardPage";
import NotFoundPage from "./components/NotFoundPage";

function AppContent() {
  const navigate = useNavigate();

  // Master Kredensial Admin NEXUM
  const [adminEmail, setAdminEmail] = useState("daffarazan616@students.unnes.ac.id");
  const [adminPassword, setAdminPassword] = useState("Orbit!Kopi72#Langit9Biru");

  // Helper agar navigasi internal komponen (onNavigate("location") atau onNavigate("/location")) bekerja seragam
  const handleNavigate = (path) => {
    if (!path) return;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    navigate(cleanPath);
  };

  return (
    <div className="App min-h-screen">
      <Routes>
        {/* ======================================================== */}
        {/* 1. RUTE PUBLIK                                           */}
        {/* ======================================================== */}
        <Route
          path="/"
          element={
            <LandingPage
              onNavigateToLogin={() => navigate("/login")}
              onNavigateToRegister={() => navigate("/register")}
              onNavigateToDashboard={() => navigate("/dashboard")}
            />
          }
        />
        <Route
          path="/login"
          element={
            <LoginPage
              onNavigateToRegister={() => navigate("/register")}
              onLoginSuccess={() => navigate("/dashboard")}
              onNavigateToLanding={() => navigate("/")}
              onAdminLogin={() => navigate("/admin")}
              adminEmail={adminEmail}
              adminPassword={adminPassword}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RegisterPage
              onNavigateToLogin={() => navigate("/login")}
              onNavigateToLanding={() => navigate("/")}
            />
          }
        />

        {/* ======================================================== */}
        {/* 2. RUTE PORTAL PENGGUNA (UMKM)                          */}
        {/* ======================================================== */}
        <Route
          path="/dashboard"
          element={
            <DashboardPage
              onLogout={() => navigate("/login")}
              onNavigate={handleNavigate}
            />
          }
        />
        <Route
          path="/location"
          element={
            <LocationPredictionPage
              onLogout={() => navigate("/login")}
              onNavigate={handleNavigate}
            />
          }
        />
        <Route
          path="/finance"
          element={
            <FinancialRiskPage
              onLogout={() => navigate("/login")}
              onNavigate={handleNavigate}
            />
          }
        />
        <Route
          path="/ai"
          element={
            <AiConsultingPage
              onLogout={() => navigate("/login")}
              onNavigate={handleNavigate}
            />
          }
        />
        <Route
          path="/history"
          element={
            <AnalysisHistoryPage
              onLogout={() => navigate("/login")}
              onNavigate={handleNavigate}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <BusinessProfilePage
              onLogout={() => navigate("/login")}
              onNavigate={handleNavigate}
            />
          }
        />

        {/* ======================================================== */}
        {/* 3. RUTE KHUSUS ADMINISTRATOR                             */}
        {/* ======================================================== */}
        <Route
          path="/admin"
          element={
            <AdminDashboardPage
              onLogout={() => navigate("/login")}
              onSwitchToUser={() => navigate("/dashboard")}
              adminEmail={adminEmail}
              adminPassword={adminPassword}
              onUpdateAdminPassword={(newPass) => setAdminPassword(newPass)}
            />
          }
        />

        {/* ======================================================== */}
        {/* 4. RUTE PENAMPUNG (SMART TYPO & AUTO-REDIRECT)           */}
        {/* ======================================================== */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
