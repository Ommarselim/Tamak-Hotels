'use client';

import { Card } from '@/components/ui/card';
import { MoreHorizontal, Home, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

const activities = [
  {
    id: 1,
    time: '03:45PM',
    icon: Home,
    title: 'Room Cleaning Completed',
    description: 'Maria Gonzalez cleaned and prepared Room 204 for new guests.',
  },
  {
    id: 2,
    time: '11:45AM',
    icon: LogOut,
    title: 'Guest Check-Out',
    description:
      'Omar Selim completed check-out process and updated room availability for Room 305.',
  },
  {
    id: 3,
    time: '11:45AM',
    icon: LogOut,
    title: 'Guest Check-Out',
    description:
      'Omar Selim completed check-out process and updated room availability for Room 305.',
  },
];

export function RecentActivitiesCard() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold">Recent Activities</h3>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start gap-3">
              <div className="bg-primary/10 rounded p-1.5">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-muted-foreground mb-1">{activity.time}</p>
                <p className="text-xs font-medium mb-1">{activity.title}</p>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
