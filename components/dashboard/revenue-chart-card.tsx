'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Nov 2025', revenue: 25000 },
  { month: 'Dec 2025', revenue: 30000 },
  { month: 'Jan 2026', revenue: 39564 },
  { month: 'Fab 2026', revenue: 28000 },
];

export function RevenueChartCard() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold">Revenue</h3>
        <Button variant="outline" size="sm" className="h-9">
          Last 4 months
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </div>

      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="#9ca3af" />
            <YAxis
              tick={{ fontSize: 11 }}
              stroke="#9ca3af"
              tickFormatter={(value) => `${value / 1000}K`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2937',
                border: 'none',
                borderRadius: '8px',
                fontSize: '12px',
              }}
              labelStyle={{ color: '#fff' }}
              formatter={(value) => (value ? [`${value} SAR`, 'Revenue'] : ['', ''])}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#8B7355"
              strokeWidth={2}
              dot={{ fill: '#8B7355', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
