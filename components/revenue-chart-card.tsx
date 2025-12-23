'use client';

import { cn } from '@/lib/utils';
import { colors } from '@/lib/design-tokens';
import { ChevronDown } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

interface RevenueChartCardProps {
  title: string;
  filterLabel: string;
  className?: string;
}

// Sample data - replace with real data
const data = [
  { month: 'Nov 2025', revenue: 25000 },
  { month: 'Dec 2025', revenue: 35000 },
  { month: 'Jan 2026', revenue: 28000 },
  { month: 'Feb 2026', revenue: 32000 },
];

export function RevenueChartCard({ title, filterLabel, className }: RevenueChartCardProps) {
  return (
    <div
      className={cn(
        'bg-[var(--color-surface)] dark:bg-gray-800 overflow-hidden rounded-[10px] relative',
        className
      )}
      style={{ height: '319px' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-3">
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

        {/* Filter Dropdown */}
        <button
          className="flex items-center gap-1 px-[10px] py-2 rounded-[10px]"
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
            {filterLabel}
          </span>
          <ChevronDown size={20} style={{ color: colors.semantic.text.inverse }} />
        </button>
      </div>

      {/* Chart Area */}
      <div className="px-4 pt-5" style={{ height: '267px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.primary[500]} stopOpacity={0.3} />
                <stop offset="95%" stopColor={colors.primary[500]} stopOpacity={0} />
              </linearGradient>
            </defs>
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
                fontSize: 12,
              }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: colors.neutral[400],
                fontSize: 12,
              }}
              ticks={[0, 10000, 20000, 30000, 40000]}
              tickFormatter={(value) => `${value / 1000}K`}
              label={{
                value: 'SAR',
                position: 'insideBottomLeft',
                offset: 0,
                style: {
                  fill: colors.neutral[400],
                  fontSize: 12,
                },
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: colors.primary[500],
                border: 'none',
                borderRadius: '10px',
                padding: '8px 12px',
              }}
              labelStyle={{
                color: colors.semantic.text.inverse,
                fontSize: '12px',
                fontWeight: 500,
              }}
              itemStyle={{
                color: colors.semantic.text.inverse,
                fontSize: '14px',
                fontWeight: 'bold',
              }}
              formatter={(value: number | undefined) => [`${value?.toLocaleString()} SAR`, '']}
              labelFormatter={(label) => ''}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke={colors.primary[500]}
              strokeWidth={2}
              fill="url(#colorRevenue)"
              dot={{
                fill: colors.primary[500],
                strokeWidth: 2,
                r: 4,
              }}
              activeDot={{
                fill: colors.primary[500],
                strokeWidth: 2,
                r: 6,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
