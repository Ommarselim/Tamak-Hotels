'use client';

import { DashboardLayout } from '@/components/dashboard-layout';
import {
  DashboardHeader,
  StatsGrid,
  RoomAvailabilityCard,
  RevenueChartCard,
  ReservationsChartCard,
  BookingMethodCard,
  OverallRatingCard,
  TasksListCard,
  RecentActivitiesCard,
  BookingListTable,
} from '@/components/dashboard';

export default function DashboardPage() {
  return (
    <DashboardLayout activeItem="dashboard">
      <div className="p-6 space-y-6">
        {/* Header Section */}
        <DashboardHeader />

        {/* Stats Cards */}
        <StatsGrid />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <RoomAvailabilityCard />
            <ReservationsChartCard />
          </div>

          {/* Middle Column */}
          <div className="space-y-6">
            <RevenueChartCard />
            <BookingMethodCard />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <OverallRatingCard />
            <TasksListCard />
            <RecentActivitiesCard />
          </div>
        </div>

        {/* Booking List Table */}
        <BookingListTable />

        {/* Footer */}
        <footer className="text-center py-6 text-muted-foreground">
          <p className="text-sm">All rights reserved for Tamak Hotel.🤎</p>
        </footer>
      </div>
    </DashboardLayout>
  );
}
