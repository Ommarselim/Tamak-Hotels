'use client';

import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  currency?: string;
  icon: React.ReactNode;
  trend: {
    value: string;
    isPositive: boolean;
    label: string;
  };
  variant?: 'default' | 'highlighted';
  className?: string;
  trendColor?: string; // Custom trend badge color
}

export function StatsCard({
  title,
  value,
  currency,
  icon,
  trend,
  variant = 'default',
  className,
  trendColor,
}: StatsCardProps) {
  return (
    <div
      className={cn(
        'h-[106px] overflow-hidden rounded-[10px] p-2',
        variant === 'highlighted' ? 'bg-[#eae2d7] dark:bg-[#3a3530]' : 'bg-white dark:bg-gray-800',
        className
      )}
    >
      <div className="flex flex-col gap-[18px] p-2">
        {/* Header with title and icon */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium text-[#949494]">{title}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-black dark:text-white">{value}</span>
              {currency && (
                <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                  {currency}
                </span>
              )}
            </div>
          </div>
          <div
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded',
              variant === 'highlighted'
                ? 'bg-amber-100 dark:bg-amber-900/50'
                : 'bg-gray-100 dark:bg-gray-700'
            )}
          >
            {icon}
          </div>
        </div>

        {/* Trend indicator */}
        <div className="flex items-center gap-2">
          <div
            className={cn(
              'flex items-center gap-1 rounded-lg px-2 py-1',
              trend.isPositive
                ? 'bg-amber-700 dark:bg-amber-800 text-white'
                : 'bg-green-700 dark:bg-green-800 text-white'
            )}
          >
            {trend.isPositive ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}
            <span className="text-xs">{trend.value}</span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">{trend.label}</span>
        </div>
      </div>
    </div>
  );
}
