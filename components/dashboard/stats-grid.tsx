'use client';

import { StatCard } from './stat-card';
import { CalendarCheck, LogIn, LogOut, DollarSign } from 'lucide-react';

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard
        title="New Booking"
        value={60}
        trend={1.71}
        trendLabel="from last month"
        icon={<CalendarCheck className="h-5 w-5 text-primary" />}
        iconBgColor="bg-blue-100 dark:bg-blue-900/30"
      />
      <StatCard
        title="Check- In"
        value={56}
        trend={1.71}
        trendLabel="from last month"
        icon={<LogIn className="h-5 w-5 text-primary" />}
        iconBgColor="bg-green-100 dark:bg-green-900/30"
      />
      <StatCard
        title="Check- Out"
        value={50}
        trend={-1.71}
        trendLabel="from last month"
        icon={<LogOut className="h-5 w-5 text-primary" />}
        iconBgColor="bg-orange-100 dark:bg-orange-900/30"
      />
      <StatCard
        title="Total Revenue"
        value="14.785 SAR"
        trend={1.71}
        trendLabel="from last month"
        icon={<DollarSign className="h-5 w-5 text-primary" />}
        iconBgColor="bg-purple-100 dark:bg-purple-900/30"
      />
    </div>
  );
}
