"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { AdminSidebar } from "./admin-sidebar";
import { DashboardHeader } from "./dashboard-header";
import { StatsCard } from "./stats-card";
import { CalendarCheck, LogIn, LogOut, DollarSign } from "lucide-react";

interface DashboardLayoutProps {
  children?: React.ReactNode;
  activeItem?: string;
}

export function DashboardLayout({
  children,
  activeItem = "dashboard",
}: DashboardLayoutProps) {
  const t = useTranslations("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const statsData = [
    {
      title: t("newBooking"),
      value: "60",
      icon: (
        <CalendarCheck className="h-6 w-6" style={{ color: '#6D6F6B' }} />
      ),
      trend: {
        value: "1.71%",
        isPositive: true,
        label: t("fromLastMonth"),
      },
      variant: "highlighted" as const,
      trendColor: undefined, // Uses default clearBrown for positive
    },
    {
      title: t("checkIn"),
      value: "56",
      icon: <LogIn className="h-6 w-6" style={{ color: '#6D6F6B' }} />,
      trend: {
        value: "1.71%",
        isPositive: true,
        label: t("fromLastMonth"),
      },
      trendColor: "clearBrown" as const,
    },
    {
      title: t("checkOut"),
      value: "50",
      icon: <LogOut className="h-6 w-6" style={{ color: '#6D6F6B' }} />,
      trend: {
        value: "1.71%",
        isPositive: false,
        label: t("fromLastMonth"),
      },
      trendColor: "olive" as const, // Green for checkout
    },
    {
      title: t("totalRevenue"),
      value: "14.785",
      currency: "SAR",
      icon: <DollarSign className="h-6 w-6" style={{ color: '#6D6F6B' }} />,
      trend: {
        value: "1.71%",
        isPositive: true,
        label: t("fromLastMonth"),
      },
      trendColor: "clearBrown" as const,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <AdminSidebar
        activeItem={activeItem}
        isMobile={isMobile}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        className={isMobile ? "" : ""}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Header */}
        {/* Header */}
        <DashboardHeader onMenuClick={() => setIsMobileMenuOpen(true)} />

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-4 lg:p-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
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

          {/* Additional Content */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
            {/* Room Availability Card */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 lg:p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {t("roomAvailability")}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-8 bg-blue-500 rounded"></div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t("occupied")}
                      </p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">
                        10
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-8 bg-yellow-500 rounded"></div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t("reserved")}
                      </p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">
                        90
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-8 bg-green-500 rounded"></div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t("available")}
                      </p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">
                        14
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-8 bg-red-500 rounded"></div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t("notReady")}
                      </p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">
                        4
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Chart Placeholder */}
            <div className="xl:col-span-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 lg:p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("revenue")}
                </h3>
                <select className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg px-3 py-2 text-sm">
                  <option>{t("lastMonths")}</option>
                </select>
              </div>
              <div className="h-64 bg-gray-50 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">
                  {t("revenue")} Chart Placeholder
                </p>
              </div>
            </div>
          </div>

          {/* Recent Reservations */}
          <div className="mt-4 lg:mt-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 lg:p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t("recentReservations")}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                      {t("guest")}
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                      {t("room")}
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                      {t("checkInDate")}
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                      {t("checkOutDate")}
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                      {t("status")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100">
                      Ahmed Al-Rashid
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100">
                      Suite 101
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100">
                      Jan 07, 2026
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100">
                      Jan 10, 2026
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">
                        {t("confirmed")}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100">
                      Sarah Johnson
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100">
                      Room 205
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100">
                      Jan 08, 2026
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100">
                      Jan 12, 2026
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full">
                        {t("pending")}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Custom content */}
          {children}
        </div>
      </div>
    </div>
  );
}
