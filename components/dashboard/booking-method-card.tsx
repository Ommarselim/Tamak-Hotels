'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Website', value: 40, color: '#8B7355' },
  { name: 'Onsite', value: 45, color: '#D4A574' },
  { name: 'Booking', value: 15, color: '#E8C9A0' },
];

export function BookingMethodCard() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold">Booking Method</h3>
        <Button variant="outline" size="sm" className="h-8 text-xs">
          Last 4 months
          <ChevronDown className="h-3 w-3 ml-2" />
        </Button>
      </div>

      <div className="flex items-center gap-6">
        <div className="h-[180px] w-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex-1 space-y-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded" style={{ backgroundColor: item.color }} />
                <span className="text-sm">{item.name}</span>
              </div>
              <span className="text-xs font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
