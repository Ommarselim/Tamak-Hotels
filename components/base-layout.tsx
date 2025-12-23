'use client';

import { useState, useEffect } from 'react';
import { AdminSidebar } from './admin-sidebar';
import { DashboardHeader } from './dashboard-header';

interface BaseLayoutProps {
  children: React.ReactNode;
  activeItem?: string;
}

export function BaseLayout({ children, activeItem = 'dashboard' }: BaseLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <AdminSidebar
        activeItem={activeItem}
        isMobile={isMobile}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        className={isMobile ? '' : ''}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Header */}
        <DashboardHeader onMenuClick={() => setIsMobileMenuOpen(true)} />

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-3 sm:p-4 lg:p-6">{children}</div>
      </div>
    </div>
  );
}
