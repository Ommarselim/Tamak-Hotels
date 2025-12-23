'use client';

import { Room } from '@/lib/types/room';
import { RoomCard } from './room-card';
import { useTranslations } from 'next-intl';

interface RoomsListProps {
  rooms: Room[];
  selectedRoomId?: string;
  onRoomSelect: (room: Room) => void;
}

export function RoomsList({ rooms, selectedRoomId, onRoomSelect }: RoomsListProps) {
  const t = useTranslations('rooms');

  if (rooms.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 text-6xl opacity-20">🏨</div>
        <h3 className="text-lg font-semibold mb-2">{t('noRooms')}</h3>
        <p className="text-sm text-muted-foreground">{t('noRoomsDescription')}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          room={room}
          isSelected={room.id === selectedRoomId}
          onClick={() => onRoomSelect(room)}
        />
      ))}
    </div>
  );
}
