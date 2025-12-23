'use client';

import { Room } from '@/lib/types/room';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { RoomGallery } from './room-gallery';
import { RoomFeatures } from './room-features';
import { RoomFacilities } from './room-facilities';
import { RoomRating } from './room-rating';
import { RoomReviews } from './room-reviews';
import { Bed, Users, Maximize } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoomDetailPanelProps {
  room: Room | null;
}

export function RoomDetailPanel({ room }: RoomDetailPanelProps) {
  const t = useTranslations('rooms');

  if (!room) {
    return (
      <div className="h-full flex items-center justify-center text-center px-8">
        <div>
          <div className="mb-4 text-6xl opacity-20">🛏️</div>
          <h3 className="text-lg font-semibold mb-2">{t('selectRoom')}</h3>
          <p className="text-sm text-muted-foreground">{t('selectRoomDescription')}</p>
        </div>
      </div>
    );
  }

  const statusColors = {
    Available: 'bg-[#E8F5E8] text-[#2E7D32]',
    Occupied: 'bg-[#FFF4E5] text-[#E65100]',
    Maintenance: 'bg-[#F3E5F5] text-[#6A1B9A]',
    Reserved: 'bg-[#E3F2FD] text-[#1565C0]',
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">
              {t(`types.${room.type.toLowerCase()}`)} {t('room')}
            </h2>
            {room.availableFrom && room.availableTo && (
              <p className="text-sm text-muted-foreground">
                {t('availableFrom')} {room.availableFrom} {t('to')} {room.availableTo}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span
              className={cn(
                'px-3 py-1.5 rounded-md text-sm font-medium',
                statusColors[room.status]
              )}
            >
              {t(`status.${room.status.toLowerCase()}`)}
            </span>
            <Button variant="outline" size="sm">
              {t('edit')}
            </Button>
          </div>
        </div>

        {/* Gallery */}
        <RoomGallery
          coverImage={room.coverImage}
          gallery={room.gallery}
          roomName={`${room.type} Room`}
        />

        {/* Specs */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Maximize className="h-4 w-4" />
            <span>{room.area} m²</span>
          </div>
          <div className="flex items-center gap-2">
            <Bed className="h-4 w-4" />
            <span>
              {room.beds} {t('bed', { count: room.beds })}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>
              {room.capacity} {t('person', { count: room.capacity })}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">{room.description}</p>

        {/* Features */}
        <RoomFeatures features={room.features} />

        {/* Facilities */}
        <RoomFacilities facilities={room.facilities} />

        {/* Rating */}
        <RoomRating rating={room.rating} />

        {/* Reviews */}
        <RoomReviews reviews={room.reviews} />
      </div>
    </div>
  );
}
