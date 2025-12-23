'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', booked: 45, canceled: 55 },
  { month: 'Feb', booked: 35, canceled: 48 },
  { month: 'Mar', booked: 50, canceled: 40 },
  { month: 'Apr', booked: 25, canceled: 58 },
  { month: 'May', booked: 60, canceled: 50 },
  { month: 'Jun', booked: 60, canceled: 65 },
];

export function ReservationsChartCard() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold mb-2">Reservations</h3>
          <div className="flex items-center gap-4 text-[10px]">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-sm bg-[#8B7355]" />
              <span className="text-muted-foreground">Booked</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-sm bg-[#D4A574]" />
              <span className="text-muted-foreground">Canceled</span>
            </div>
          </div>
        </div>
        <Button variant="outline" size="sm" className="h-8 text-xs">
          Last 4 months
          <ChevronDown className="h-3 w-3 ml-2" />
        </Button>
      </div>

      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" tick={{ fontSize: 10 }} stroke="#9ca3af" />
            <YAxis tick={{ fontSize: 10 }} stroke="#9ca3af" />
            <Bar dataKey="booked" fill="#8B7355" radius={[4, 4, 0, 0]} />
            <Bar dataKey="canceled" fill="#D4A574" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
