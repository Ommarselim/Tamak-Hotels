'use client';

import { Card } from '@/components/ui/card';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const roomData = [
  { label: 'Occupied', value: 10, color: 'bg-[#8B7355]' },
  { label: 'Reserved', value: 90, color: 'bg-[#D4A574]' },
  { label: 'Available', value: 14, color: 'bg-[#E8C9A0]' },
  { label: 'Not Ready', value: 4, color: 'bg-[#F5E6D3]' },
];

export function RoomAvailabilityCard() {
  const total = roomData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold">Room Availability</h3>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Visual Chart */}
      <div className="mb-6 space-y-2">
        <div className="flex gap-1 h-32">
          {roomData.map((item, index) => (
            <div
              key={index}
              className={`${item.color} rounded-sm flex-1 relative`}
              style={{
                height: `${(item.value / total) * 100}%`,
                marginTop: 'auto',
              }}
            />
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-4">
        {roomData.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className={`${item.color} h-4 w-2 rounded-sm mt-0.5`} />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className="text-lg font-semibold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
