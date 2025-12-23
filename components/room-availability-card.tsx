'use client';

import { cn } from '@/lib/utils';
import { colors } from '@/lib/design-tokens';
import { MoreHorizontal } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface RoomAvailabilityCardProps {
  title: string;
  occupied: number;
  reserved: number;
  available: number;
  notReady: number;
  className?: string;
}

export function RoomAvailabilityCard({
  title,
  occupied,
  reserved,
  available,
  notReady,
  className,
}: RoomAvailabilityCardProps) {
  const t = useTranslations('dashboard');

  const roomStatuses = [
    { label: t('occupied'), count: occupied, color: colors.secondary.redBrown },
    { label: t('reserved'), count: reserved, color: colors.primary[300] },
    { label: t('available'), count: available, color: colors.primary[500] },
    { label: t('notReady'), count: notReady, color: colors.primary[950] },
  ];

  // Calculate total for bar width percentages
  const total = occupied + reserved + available + notReady;

  return (
    <div
      className={cn(
        'bg-[var(--color-surface)] dark:bg-gray-800 overflow-hidden rounded-[10px]',
        className
      )}
      style={{ height: '316px' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 pt-[11px] pb-[16px]">
        <h3
          className="font-semibold"
          style={{
            fontSize: '16px',
            lineHeight: 'normal',
            color: colors.semantic.text.primary,
          }}
        >
          {title}
        </h3>
        <button
          className="flex items-center justify-center"
          style={{ width: '20px', height: '20px' }}
          aria-label="More options"
        >
          <MoreHorizontal className="h-5 w-5" style={{ color: colors.neutral[500] }} />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 px-3">
        {/* Bar Chart */}
        <div className="flex gap-1">
          {/* Occupied */}
          <div
            className="h-14 rounded-l-lg"
            style={{
              backgroundColor: colors.secondary.redBrown,
              width: `${(occupied / total) * 100}%`,
            }}
          />
          {/* Reserved */}
          <div
            className="h-14"
            style={{
              backgroundColor: colors.primary[300],
              width: `${(reserved / total) * 100}%`,
            }}
          />
          {/* Available */}
          <div
            className="h-14"
            style={{
              backgroundColor: colors.primary[500],
              width: `${(available / total) * 100}%`,
            }}
          />
          {/* Not Ready */}
          <div
            className="h-14 rounded-r-lg"
            style={{
              backgroundColor: colors.primary[950],
              width: `${(notReady / total) * 100}%`,
            }}
          />
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-3">
          {/* First Row */}
          <div className="flex items-center justify-between">
            {/* Occupied */}
            <div className="flex items-start gap-[6px]">
              <div
                className="rounded-lg shrink-0"
                style={{
                  width: '8px',
                  height: '48px',
                  backgroundColor: colors.secondary.redBrown,
                }}
              />
              <div className="flex flex-col gap-1">
                <p
                  className="font-normal"
                  style={{
                    fontSize: '14px',
                    lineHeight: 'normal',
                    color: colors.neutral[300],
                  }}
                >
                  {roomStatuses[0].label}
                </p>
                <p
                  className="font-bold"
                  style={{
                    fontSize: '18px',
                    lineHeight: 'normal',
                    color: colors.semantic.text.primary,
                  }}
                >
                  {occupied}
                </p>
              </div>
            </div>

            {/* Reserved */}
            <div className="flex items-start gap-[6px]">
              <div
                className="rounded-lg shrink-0"
                style={{
                  width: '8px',
                  height: '48px',
                  backgroundColor: colors.primary[300],
                }}
              />
              <div className="flex flex-col gap-1">
                <p
                  className="font-normal"
                  style={{
                    fontSize: '14px',
                    lineHeight: 'normal',
                    color: colors.neutral[300],
                  }}
                >
                  {roomStatuses[1].label}
                </p>
                <p
                  className="font-bold"
                  style={{
                    fontSize: '18px',
                    lineHeight: 'normal',
                    color: colors.semantic.text.primary,
                  }}
                >
                  {reserved}
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex items-center justify-between">
            {/* Available */}
            <div className="flex items-start gap-[6px]">
              <div
                className="rounded-lg shrink-0"
                style={{
                  width: '8px',
                  height: '48px',
                  backgroundColor: colors.primary[500],
                }}
              />
              <div className="flex flex-col gap-1">
                <p
                  className="font-normal"
                  style={{
                    fontSize: '14px',
                    lineHeight: 'normal',
                    color: colors.neutral[300],
                  }}
                >
                  {roomStatuses[2].label}
                </p>
                <p
                  className="font-bold"
                  style={{
                    fontSize: '18px',
                    lineHeight: 'normal',
                    color: colors.semantic.text.primary,
                  }}
                >
                  {available}
                </p>
              </div>
            </div>

            {/* Not Ready */}
            <div className="flex items-start gap-[6px]">
              <div
                className="rounded-lg shrink-0"
                style={{
                  width: '8px',
                  height: '48px',
                  backgroundColor: colors.primary[950],
                }}
              />
              <div className="flex flex-col gap-1">
                <p
                  className="font-normal whitespace-nowrap"
                  style={{
                    fontSize: '14px',
                    lineHeight: 'normal',
                    color: colors.neutral[300],
                  }}
                >
                  {roomStatuses[3].label}
                </p>
                <p
                  className="font-bold"
                  style={{
                    fontSize: '18px',
                    lineHeight: 'normal',
                    color: colors.semantic.text.primary,
                  }}
                >
                  {notReady}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
