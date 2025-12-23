'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { colors } from '@/lib/design-tokens';
import { ChevronDown, MoreHorizontal } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

interface ReservationsChartCardProps {
  className?: string;
}

// Sample data - replace with real data
const data = [
  { month: 'Jan', booked: 25000, canceled: 30000 },
  { month: 'Feb', booked: 35000, canceled: 45000 },
  { month: 'Mar', booked: 30000, canceled: 35000 },
  { month: 'Apr', booked: 45000, canceled: 50000 },
  { month: 'May', booked: 60000, canceled: 48000 },
  { month: 'Jun', booked: 58000, canceled: 65000 },
];

export function ReservationsChartCard({ className }: ReservationsChartCardProps) {
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
          <div className="flex flex-col gap-1">
            <h3
              className="font-semibold"
              style={{
                fontSize: '16px',
                lineHeight: 'normal',
                color: colors.semantic.text.primary,
              }}
            >
              {t('reservations')}
            </h3>
            <div className="flex items-center gap-3.5">
              <div className="flex items-center gap-1">
                <div
                  className="rounded-[2px]"
                  style={{
                    width: '10px',
                    height: '10px',
                    backgroundColor: colors.secondary.redBrown,
                  }}
                />
                <span
                  className="font-normal"
                  style={{
                    fontSize: '8px',
                    color: colors.neutral[400],
                  }}
                >
                  {t('booked')}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div
                  className="rounded-[2px]"
                  style={{
                    width: '10px',
                    height: '10px',
                    backgroundColor: colors.secondary.clearBrown,
                  }}
                />
                <span
                  className="font-normal"
                  style={{
                    fontSize: '8px',
                    color: colors.neutral[400],
                  }}
                >
                  {t('canceled')}
                </span>
              </div>
            </div>
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

        {/* Chart */}
        <div style={{ height: '220px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 5, left: -20, bottom: 5 }}>
              <CartesianGrid
                strokeDasharray="0"
                stroke={colors.neutral[200]}
                horizontal={true}
                vertical={false}
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: colors.neutral[400],
                  fontSize: 8,
                  fontFamily: 'Proxima Nova',
                }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: colors.neutral[400],
                  fontSize: 8,
                  fontFamily: 'Proxima Nova',
                }}
                ticks={[0, 10000, 20000, 30000, 40000, 50000, 60000]}
                tickFormatter={(value) => `${value / 1000}k`}
              />
              <Bar
                dataKey="booked"
                fill={colors.secondary.redBrown}
                radius={[2, 2, 0, 0]}
                barSize={10}
              />
              <Bar
                dataKey="canceled"
                fill={colors.secondary.clearBrown}
                radius={[2, 2, 0, 0]}
                barSize={10}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
