'use client';

import { Search, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function DashboardHeader() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Hello admin</p>
      </div>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
        <div className="relative flex-1 sm:flex-none">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search here" className="pl-9 w-full sm:w-[300px]" />
        </div>
        <Button variant="outline" className="justify-start gap-2">
          <span className="text-sm">07 Jan 2026 - 14 Jan 2026</span>
          <Calendar className="h-4 w-4 ml-auto" />
        </Button>
      </div>
    </div>
  );
}
