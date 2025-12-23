'use client';

import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Plus, ChevronDown } from 'lucide-react';

const tasks = [
  {
    id: 1,
    date: '12Jan 2026',
    department: 'Reception',
    description: 'Approve / reject pending reservations',
    completed: false,
  },
  {
    id: 2,
    date: '12Jan 2026',
    department: 'Housekeeping',
    description: 'Approve / reject pending reservations',
    completed: true,
  },
  {
    id: 3,
    date: '12Jan 2026',
    department: 'Reception',
    description: 'Approve / reject pending reservations',
    completed: false,
  },
];

export function TasksListCard() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold">Tasks</h3>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Plus className="h-5 w-5" />
        </Button>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-start gap-3">
            <Checkbox id={`task-${task.id}`} checked={task.completed} className="mt-1" />
            <div className="flex-1 bg-muted/50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">{task.date}</span>
                <Button variant="ghost" size="sm" className="h-auto py-0 px-2 text-xs">
                  {task.department}
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Button>
              </div>
              <p className="text-xs">{task.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
