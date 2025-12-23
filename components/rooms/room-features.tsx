'use client';

import { Feature } from '@/lib/types/room';
import { CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface RoomFeaturesProps {
  features: Feature[];
}

export function RoomFeatures({ features }: RoomFeaturesProps) {
  const t = useTranslations('rooms.features');

  const enabledFeatures = features.filter((f) => f.enabled);

  if (enabledFeatures.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold">{t('title')}</h3>
      <div className="space-y-3">
        {enabledFeatures.map((feature) => (
          <div key={feature.id} className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground leading-relaxed">
              {t(feature.labelKey)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
