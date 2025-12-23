'use client';

import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { colors, components } from '@/lib/design-tokens';

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
  trendColor?: 'olive' | 'clearBrown'; // Use design system colors
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
  // Determine trend badge color based on variant or custom color
  const getTrendBadgeColor = () => {
    if (trendColor === 'olive') {
      return 'bg-[var(--color-secondary-olive)]';
    }
    if (trendColor === 'clearBrown') {
      return 'bg-[var(--color-secondary-clear-brown)]';
    }
    // Default: use background color for non-positive trends (match Figma)
    if (!trend.isPositive) {
      return 'bg-[var(--color-secondary-olive)]';
    }
    // Default: use clearBrown for positive trends
    return 'bg-[var(--color-secondary-clear-brown)]';
  };

  return (
    <div
      className={cn(
        'overflow-hidden rounded-[10px] p-2',
        variant === 'highlighted'
          ? 'bg-[var(--color-primary-100)] dark:bg-[#3a3530]'
          : 'bg-[var(--color-surface)] dark:bg-gray-800',
        className
      )}
      style={{
        height: components.statsCard.height,
        borderRadius: components.statsCard.borderRadius,
      }}
    >
      <div className="flex flex-col gap-[18px]">
        {/* Header with title and icon */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <p
              className="font-medium"
              style={{
                fontSize: '12px',
                color: '#949494',
                lineHeight: 'normal',
              }}
            >
              {title}
            </p>
            <div className="flex items-baseline gap-1">
              <span
                className="font-bold dark:text-white"
                style={{
                  fontSize: '24px',
                  color:
                    variant === 'highlighted'
                      ? colors.semantic.text.primary
                      : colors.semantic.text.primary,
                  lineHeight: 'normal',
                }}
              >
                {value}
              </span>
              {currency && (
                <span
                  className="font-medium"
                  style={{
                    fontSize: '16px',
                    color: colors.neutral[300],
                    lineHeight: 'normal',
                  }}
                >
                  {currency}
                </span>
              )}
            </div>
          </div>
          <div
            className={cn(
              'flex items-center justify-center',
              variant === 'highlighted'
                ? 'bg-[var(--color-background)]'
                : 'bg-[var(--color-primary-100)]'
            )}
            style={{
              width: '35px',
              height: '35px',
              borderRadius: '4px',
            }}
          >
            {icon}
          </div>
        </div>

        {/* Trend indicator */}
        <div className="flex items-center gap-[7px]">
          <div
            className={cn('flex items-center gap-1 px-2 py-1 text-white', getTrendBadgeColor())}
            style={{
              borderRadius: '16px 16px 16px 12px',
            }}
          >
            {trend.isPositive ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}
            <span
              className="font-normal whitespace-nowrap"
              style={{
                fontSize: '12px',
                lineHeight: 'normal',
              }}
            >
              {trend.value}
            </span>
          </div>
          <span
            className="font-normal whitespace-nowrap"
            style={{
              fontSize: '12px',
              color: '#7f7f7f',
              lineHeight: 'normal',
            }}
          >
            {trend.label}
          </span>
        </div>
      </div>
    </div>
  );
}
