'use client';

import { Room } from '@/lib/types/room';
import { useTranslations } from 'next-intl';
import { Bed, Users, Maximize } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface RoomCardProps {
  room: Room;
  isSelected?: boolean;
  onClick: () => void;
}

export function RoomCard({ room, isSelected, onClick }: RoomCardProps) {
  const t = useTranslations('rooms');

  const statusColors = {
    Available: 'bg-[#E8F5E8] text-[#2E7D32]',
    Occupied: 'bg-[#FFF4E5] text-[#E65100]',
    Maintenance: 'bg-[#F3E5F5] text-[#6A1B9A]',
    Reserved: 'bg-[#E3F2FD] text-[#1565C0]',
  };

  const priceColors = {
    Single: 'bg-[#D2B48C]',
    Double: 'bg-[#C19A6B]',
    Suite: 'bg-[#8B7355]',
    Deluxe: 'bg-[#8B6914]',
    Family: 'bg-[#A0826D]',
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        'group bg-card rounded-xl border transition-all cursor-pointer hover:shadow-md overflow-hidden',
        isSelected && 'ring-2 ring-primary shadow-md'
      )}
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <Image
          src={
            room.coverImage ||
            'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop'
          }
          alt={`${room.type} Room ${room.roomNumber}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold">{t(`types.${room.type.toLowerCase()}`)}</h3>
          <span
            className={cn('px-2.5 py-1 rounded-md text-xs font-medium', statusColors[room.status])}
          >
            {t(`status.${room.status.toLowerCase()}`)}
          </span>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Maximize className="h-4 w-4" />
            <span>{room.area} m²</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bed className="h-4 w-4" />
            <span>
              {room.beds} {t('bed', { count: room.beds })}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="h-4 w-4" />
            <span>
              {room.capacity} {t('person', { count: room.capacity })}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{room.description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t">
          <div className="text-sm text-muted-foreground">
            {room.availableFrom && room.availableTo && (
              <span>
                {t('availableFrom')} {room.availableFrom} {t('to')} {room.availableTo}
              </span>
            )}
          </div>
          <div
            className={cn(
              'flex items-center gap-2 px-3 py-1.5 rounded-lg text-white font-semibold',
              priceColors[room.type]
            )}
          >
            <span className="text-lg">{room.pricePerDay}</span>
            <span className="text-xs opacity-90">{room.currency}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
