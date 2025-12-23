'use client';

import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { RoomFilters } from '@/lib/types/room';

interface RoomsHeaderProps {
  filters: RoomFilters;
  onFiltersChange: (filters: RoomFilters) => void;
  onAddRoom: () => void;
}

export function RoomsHeader({ filters, onFiltersChange, onAddRoom }: RoomsHeaderProps) {
  const t = useTranslations('rooms');

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Search Input */}
      <div className="relative flex-1 max-w-xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          placeholder={t('searchPlaceholder')}
          value={filters.search}
          onChange={(e) => onFiltersChange({ ...filters, search: e.target.value })}
          className="w-full h-11 pl-12 pr-4 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Filters and Actions */}
      <div className="flex items-center gap-3 flex-wrap">
        {/* Price Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-9 px-4">
              {t('filters.price')}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onFiltersChange({ ...filters, priceRange: 'all' })}>
              {t('filters.allPrices')}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onFiltersChange({ ...filters, priceRange: 'low' })}>
              {t('filters.lowPrice')}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onFiltersChange({ ...filters, priceRange: 'medium' })}>
              {t('filters.mediumPrice')}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onFiltersChange({ ...filters, priceRange: 'high' })}>
              {t('filters.highPrice')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Status Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-9 px-4">
              {t('filters.roomStatus')}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onFiltersChange({ ...filters, status: 'all' })}>
              {t('filters.allStatus')}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onFiltersChange({ ...filters, status: 'Available' })}>
              {t('status.available')}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onFiltersChange({ ...filters, status: 'Occupied' })}>
              {t('status.occupied')}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onFiltersChange({ ...filters, status: 'Maintenance' })}
            >
              {t('status.maintenance')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Type Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-9 px-4">
              {t('filters.allTypes')}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onFiltersChange({ ...filters, type: 'all' })}>
              {t('filters.allTypes')}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onFiltersChange({ ...filters, type: 'Single' })}>
              {t('types.single')}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onFiltersChange({ ...filters, type: 'Double' })}>
              {t('types.double')}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onFiltersChange({ ...filters, type: 'Suite' })}>
              {t('types.suite')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Add Room Button */}
        <Button onClick={onAddRoom} className="h-9 px-4">
          {t('addRoomButton')}
          <Plus className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
