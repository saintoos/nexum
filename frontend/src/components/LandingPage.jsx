import React from 'react';
import Navbar from './landing/Navbar';
import HeroSection from './landing/HeroSection';
import FeatureSection from './landing/FeatureSection';
import MetricsSection from './landing/MetricsSection';
import CtaBanner from './landing/CtaBanner';

export default function LandingPage({
  onNavigateToLogin,
  onNavigateToRegister,
  onNavigateToDashboard,
}) {
  return (
    <div className="min-h-screen bg-[#FAF8FF] flex flex-col font-sans selection:bg-[#0051D5]/20 selection:text-[#00236F]">
      {/* 1. Header / Navbar */}
      <Navbar
        onNavigateToLogin={onNavigateToLogin}
        onNavigateToRegister={onNavigateToRegister}
      />

      {/* 2. Main Content Body */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onNavigateToLogin={onNavigateToLogin}
          onNavigateToDashboard={onNavigateToDashboard}
        />

        {/* Feature Highlights Section (3 Core Columns) */}
        <FeatureSection />

        {/* Real-World Social Proof & Metrics Section */}
        <MetricsSection />

        {/* Final Call to Action Banner */}
        <CtaBanner
          onNavigateToRegister={onNavigateToRegister}
          onNavigateToLogin={onNavigateToLogin}
        />
      </main>

      {/* Modern footer */}
      <footer className="py-6 text-center text-xs text-[#444651]/70 border-t border-slate-200/50 bg-[#FAF8FF]">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} NEXUM. All rights reserved. Platform Analitik UMKM Modern Indonesia.</p>
        </div>
      </footer>
    </div>
  );
}
