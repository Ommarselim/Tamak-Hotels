'use client';

import { RoomRating as RoomRatingType } from '@/lib/types/room';
import { useTranslations } from 'next-intl';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoomRatingProps {
  rating: RoomRatingType;
}

export function RoomRating({ rating }: RoomRatingProps) {
  const t = useTranslations('rooms.rating');

  const getRatingLabel = (score: number) => {
    if (score >= 4.5) return t('excellent');
    if (score >= 4.0) return t('impressive');
    if (score >= 3.5) return t('good');
    if (score >= 3.0) return t('average');
    return t('poor');
  };

  const categories = [
    { key: 'facilities', value: rating.facilities },
    { key: 'services', value: rating.services },
    { key: 'comfort', value: rating.comfort },
    { key: 'location', value: rating.location },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold">{t('title')}</h3>

      {/* Overall Rating */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-3xl font-bold">{rating.overall.toFixed(1)}</div>
          <div>
            <div className="font-medium">{getRatingLabel(rating.overall)}</div>
            <div className="text-sm text-muted-foreground">
              {t('fromReviews', { count: rating.totalReviews })}
            </div>
          </div>
        </div>

        {/* Stars */}
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={cn(
                'h-5 w-5',
                star <= rating.overall ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
              )}
            />
          ))}
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="space-y-3 pt-2">
        {categories.map((category) => (
          <div key={category.key} className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="capitalize">{t(category.key)}</span>
              <span className="font-medium">{category.value.toFixed(1)}</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all"
                style={{ width: `${(category.value / 5) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
