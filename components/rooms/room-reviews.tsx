'use client';

import { useState } from 'react';
import { Review } from '@/lib/types/room';
import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RoomReviewsProps {
  reviews: Review[];
}

export function RoomReviews({ reviews }: RoomReviewsProps) {
  const t = useTranslations('rooms.reviews');
  const [showAll, setShowAll] = useState(false);

  const displayedReviews = showAll ? reviews : reviews.slice(0, 2);

  if (reviews.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">{t('title')}</h3>
        {reviews.length > 2 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAll(!showAll)}
            className="text-sm"
          >
            {showAll ? t('showLess') : t('showAll')}
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`}
            />
          </Button>
        )}
      </div>

      <div className="space-y-4">
        {displayedReviews.map((review) => (
          <div key={review.id} className="p-4 rounded-lg border bg-card space-y-3">
            {/* Reviewer Info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                {review.guestName.charAt(0)}
              </div>
              <div>
                <div className="font-medium text-sm">{review.guestName}</div>
                <div className="text-xs text-muted-foreground">
                  {t('nights', { count: review.nights })}
                </div>
              </div>
            </div>

            {/* Review Comment */}
            <p className="text-sm text-muted-foreground leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
