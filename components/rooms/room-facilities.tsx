'use client';

import { FacilityType } from '@/lib/types/room';
import { useTranslations } from 'next-intl';
import { Wifi, Shield, AirVent, Tv, Coffee, Bath, Wind, LampDesk } from 'lucide-react';

interface RoomFacilitiesProps {
  facilities: FacilityType[];
}

const facilityIcons: Record<FacilityType, React.ReactNode> = {
  wifi: <Wifi className="h-5 w-5" />,
  safetyBox: <Shield className="h-5 w-5" />,
  airConditioning: <AirVent className="h-5 w-5" />,
  flatScreenTV: <Tv className="h-5 w-5" />,
  miniFridge: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 8h14M9 7v4"
      />
    </svg>
  ),
  coffeeTeaMaker: <Coffee className="h-5 w-5" />,
  jacuzzi: <Bath className="h-5 w-5" />,
  ironingBoard: <LampDesk className="h-5 w-5" />,
  blackoutCurtains: <Wind className="h-5 w-5" />,
};

export function RoomFacilities({ facilities }: RoomFacilitiesProps) {
  const t = useTranslations('rooms.facilities');

  if (facilities.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold">{t('title')}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {facilities.map((facilityId) => (
          <div key={facilityId} className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <div className="text-primary">{facilityIcons[facilityId]}</div>
            <span>{t(facilityId)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
