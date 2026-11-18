import React from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

export default function AdminLayout({ children, currentView, onNavigate }) {
  return (
    <div className="min-h-screen bg-[#FAF8FF] flex flex-col font-sans selection:bg-[#0051D5]/20 selection:text-[#00236F]">
      {/* Top Navbar */}
      <AdminHeader onNavigate={onNavigate} />

      {/* Main Body with Sidebar */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Sidebar */}
        <AdminSidebar currentView={currentView} onNavigate={onNavigate} />

        {/* Dynamic Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1440px] w-full overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
