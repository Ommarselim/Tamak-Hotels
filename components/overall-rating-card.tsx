'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { colors } from '@/lib/design-tokens';
import { MoreHorizontal } from 'lucide-react';

interface OverallRatingCardProps {
  className?: string;
}

const ratingCategories = [
  { key: 'facilities', score: 4.8, percentage: 86 },
  { key: 'services', score: 4.8, percentage: 86 },
  { key: 'comfort', score: 4.8, percentage: 86 },
  { key: 'location', score: 4.8, percentage: 86 },
];

export function OverallRatingCard({ className }: OverallRatingCardProps) {
  const t = useTranslations('dashboard');

  return (
    <div
      className={cn(
        'bg-[var(--color-surface)] dark:bg-gray-800 overflow-hidden rounded-[10px] relative',
        className
      )}
      style={{ height: '236px' }}
    >
      <div className="px-3 py-3">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h3
            className="font-semibold"
            style={{
              fontSize: '16px',
              lineHeight: 'normal',
              color: colors.semantic.text.primary,
            }}
          >
            {t('overallRating')}
          </h3>
          <button>
            <MoreHorizontal size={20} style={{ color: colors.neutral[400] }} />
          </button>
        </div>

        {/* Rating Display */}
        <div className="flex items-center gap-2 mb-4">
          <div
            className="px-2.5 py-1 rounded-[4px] flex items-center justify-center"
            style={{
              backgroundColor: colors.primary[100],
            }}
          >
            <p className="font-medium leading-none">
              <span
                style={{
                  fontSize: '28px',
                  color: colors.neutral[950],
                }}
              >
                4.7
              </span>
              <span
                style={{
                  fontSize: '14px',
                  color: colors.neutral[400],
                }}
              >
                /5
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-1" style={{ width: '93px' }}>
            <p
              className="font-semibold"
              style={{
                fontSize: '14px',
                lineHeight: 'normal',
                color: colors.semantic.text.primary,
              }}
            >
              {t('impressive')}
            </p>
            <p
              className="font-normal"
              style={{
                fontSize: '12px',
                lineHeight: 'normal',
                color: colors.neutral[400],
              }}
            >
              {t('fromReviews', { count: 200 })}
            </p>
          </div>
        </div>

        {/* Rating Breakdown */}
        <div className="flex flex-col gap-3">
          {ratingCategories.map((category) => (
            <div key={category.key} className="flex items-center gap-1">
              <span
                className="font-medium"
                style={{
                  fontSize: '12px',
                  color: colors.neutral[400],
                  width: '55px',
                }}
              >
                {t(category.key)}
              </span>
              <div
                className="h-2 overflow-hidden rounded-[15px] relative"
                style={{
                  backgroundColor: colors.primary[100],
                  width: '155px',
                }}
              >
                <div
                  className="absolute h-2 left-0 top-0 rounded-[15px]"
                  style={{
                    backgroundColor: colors.secondary.clearBrown,
                    width: `${category.percentage}%`,
                  }}
                />
              </div>
              <span
                className="font-medium"
                style={{
                  fontSize: '12px',
                  color: colors.semantic.text.primary,
                }}
              >
                {category.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
