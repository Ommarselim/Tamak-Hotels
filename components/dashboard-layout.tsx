'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { AdminSidebar } from './admin-sidebar';
import { DashboardHeader } from './dashboard-header';
import { StatsCard } from './stats-card';
import { RoomAvailabilityCard } from './room-availability-card';
import { RevenueChartCard } from './revenue-chart-card';
import { CalendarCheck, LogIn, LogOut, DollarSign } from 'lucide-react';

interface DashboardLayoutProps {
  children?: React.ReactNode;
  activeItem?: string;
}

export function DashboardLayout({ children, activeItem = 'dashboard' }: DashboardLayoutProps) {
  const t = useTranslations('dashboard');
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

  const statsData = [
    {
      title: t('newBooking'),
      value: '60',
      icon: <CalendarCheck className="h-6 w-6" style={{ color: '#6D6F6B' }} />,
      trend: {
        value: '1.71%',
        isPositive: true,
        label: t('fromLastMonth'),
      },
      variant: 'highlighted' as const,
      trendColor: undefined, // Uses default clearBrown for positive
    },
    {
      title: t('checkIn'),
      value: '56',
      icon: <LogIn className="h-6 w-6" style={{ color: '#6D6F6B' }} />,
      trend: {
        value: '1.71%',
        isPositive: true,
        label: t('fromLastMonth'),
      },
      trendColor: 'clearBrown' as const,
    },
    {
      title: t('checkOut'),
      value: '50',
      icon: <LogOut className="h-6 w-6" style={{ color: '#6D6F6B' }} />,
      trend: {
        value: '1.71%',
        isPositive: false,
        label: t('fromLastMonth'),
      },
      trendColor: 'olive' as const, // Green for checkout
    },
    {
      title: t('totalRevenue'),
      value: '14.785',
      currency: 'SAR',
      icon: <DollarSign className="h-6 w-6" style={{ color: '#6D6F6B' }} />,
      trend: {
        value: '1.71%',
        isPositive: true,
        label: t('fromLastMonth'),
      },
      trendColor: 'clearBrown' as const,
    },
  ];

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

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-3 sm:p-4 lg:p-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4 lg:mb-6">
            {statsData.map((stat, index) => (
              <StatsCard
                key={index}
                title={stat.title}
                value={stat.value}
                currency={stat.currency}
                icon={stat.icon}
                trend={stat.trend}
                variant={stat.variant}
                trendColor={stat.trendColor}
              />
            ))}
          </div>

          {/* Room Availability and Revenue Section */}
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(250px,278px)_1fr] gap-3 mb-4 lg:mb-6">
            {/* Room Availability Card */}
            <RoomAvailabilityCard
              title={t('roomAvailability')}
              occupied={10}
              reserved={90}
              available={14}
              notReady={4}
            />

            {/* Revenue Chart Card */}
            <RevenueChartCard title={t('revenue')} filterLabel={t('lastMonths')} />
          </div>

          {/* Recent Reservations */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 lg:p-6">
            <h3 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t('recentReservations')}
            </h3>
            <div className="overflow-x-auto -mx-4 lg:mx-0">
              <div className="inline-block min-w-full align-middle px-4 lg:px-0">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-2 lg:px-4 text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">
                        {t('guest')}
                      </th>
                      <th className="text-left py-3 px-2 lg:px-4 text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">
                        {t('room')}
                      </th>
                      <th className="text-left py-3 px-2 lg:px-4 text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">
                        {t('checkInDate')}
                      </th>
                      <th className="text-left py-3 px-2 lg:px-4 text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">
                        {t('checkOutDate')}
                      </th>
                      <th className="text-left py-3 px-2 lg:px-4 text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">
                        {t('status')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-2 lg:px-4 text-xs lg:text-sm text-gray-900 dark:text-gray-100 whitespace-nowrap">
                        Ahmed Al-Rashid
                      </td>
                      <td className="py-3 px-2 lg:px-4 text-xs lg:text-sm text-gray-900 dark:text-gray-100 whitespace-nowrap">
                        Suite 101
                      </td>
                      <td className="py-3 px-2 lg:px-4 text-xs lg:text-sm text-gray-900 dark:text-gray-100 whitespace-nowrap">
                        Jan 07, 2026
                      </td>
                      <td className="py-3 px-2 lg:px-4 text-xs lg:text-sm text-gray-900 dark:text-gray-100 whitespace-nowrap">
                        Jan 10, 2026
                      </td>
                      <td className="py-3 px-2 lg:px-4">
                        <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full whitespace-nowrap">
                          {t('confirmed')}
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-2 lg:px-4 text-xs lg:text-sm text-gray-900 dark:text-gray-100 whitespace-nowrap">
                        Sarah Johnson
                      </td>
                      <td className="py-3 px-2 lg:px-4 text-xs lg:text-sm text-gray-900 dark:text-gray-100 whitespace-nowrap">
                        Room 205
                      </td>
                      <td className="py-3 px-2 lg:px-4 text-xs lg:text-sm text-gray-900 dark:text-gray-100 whitespace-nowrap">
                        Jan 08, 2026
                      </td>
                      <td className="py-3 px-2 lg:px-4 text-xs lg:text-sm text-gray-900 dark:text-gray-100 whitespace-nowrap">
                        Jan 12, 2026
                      </td>
                      <td className="py-3 px-2 lg:px-4">
                        <span className="inline-flex px-2 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full whitespace-nowrap">
                          {t('pending')}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Custom content */}
          {children}
        </div>
      </div>
    </div>
  );
}
