'use client';

import { Card } from '@/components/ui/card';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ratings = [
  { label: 'Facilities', score: 4.8 },
  { label: 'Services', score: 4.8 },
  { label: 'Comfort', score: 4.8 },
  { label: 'Location', score: 4.8 },
];

export function OverallRatingCard() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-semibold">Overall Rating</h3>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-start gap-4 mb-6">
        <div className="bg-primary/10 rounded-lg px-3 py-2">
          <div className="text-3xl font-bold">4.7/5</div>
        </div>
        <div>
          <p className="text-sm font-medium">Impressive</p>
          <p className="text-xs text-muted-foreground">from 200 review</p>
        </div>
      </div>

      <div className="space-y-4">
        {ratings.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground w-16">{item.label}</span>
            <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
              <div
                className="bg-primary h-full rounded-full"
                style={{ width: `${(item.score / 5) * 100}%` }}
              />
            </div>
            <span className="text-xs font-medium w-8 text-right">{item.score}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
