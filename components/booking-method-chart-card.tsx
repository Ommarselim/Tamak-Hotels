'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { colors } from '@/lib/design-tokens';
import { ChevronDown } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface BookingMethodChartCardProps {
  className?: string;
}

// Sample data - replace with real data
const data = [
  { name: 'Website', value: 40, color: colors.secondary.redBrown },
  { name: 'Onsite', value: 45, color: colors.secondary.clearBrown },
  { name: 'Booking', value: 15, color: colors.neutral[400] },
];

export function BookingMethodChartCard({ className }: BookingMethodChartCardProps) {
  const t = useTranslations('dashboard');

  return (
    <div
      className={cn(
        'bg-[var(--color-surface)] dark:bg-gray-800 overflow-hidden rounded-[10px] relative',
        className
      )}
      style={{ height: '288px' }}
    >
      <div className="px-3 py-3">
        {/* Header */}
        <div className="flex items-start justify-between mb-3.5">
          <div className="flex flex-col">
            <h3
              className="font-semibold"
              style={{
                fontSize: '16px',
                lineHeight: 'normal',
                color: colors.semantic.text.primary,
              }}
            >
              {t('bookingMethod')}
            </h3>
          </div>

          <button
            className="flex items-center gap-1 px-2.5 py-1 rounded-[10px]"
            style={{
              backgroundColor: colors.neutral[950],
            }}
          >
            <span
              className="font-medium"
              style={{
                fontSize: '14px',
                lineHeight: '1.6',
                color: colors.semantic.text.inverse,
              }}
            >
              {t('lastMonths')}
            </span>
            <ChevronDown size={18} style={{ color: colors.semantic.text.inverse }} />
          </button>
        </div>

        {/* Chart and Legend */}
        <div className="flex items-center gap-4">
          {/* Pie Chart */}
          <div style={{ width: '195px', height: '195px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-3">
            {data.map((entry) => (
              <div
                key={entry.name}
                className="flex items-center justify-between"
                style={{ width: '146px' }}
              >
                <div className="flex items-center gap-1">
                  <div
                    className="rounded-[2px]"
                    style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: entry.color,
                    }}
                  />
                  <span
                    className="font-medium"
                    style={{
                      fontSize: '14px',
                      color: colors.neutral[400],
                    }}
                  >
                    {t(entry.name.toLowerCase())}
                  </span>
                </div>
                <span
                  className="font-normal"
                  style={{
                    fontSize: '10px',
                    color: colors.neutral[400],
                  }}
                >
                  {entry.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
