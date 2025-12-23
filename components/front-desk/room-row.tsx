'use client';

import { ChevronDown, Plus } from 'lucide-react';
import { BookingCard } from './booking-card';

interface Booking {
  id: string;
  guestName: string;
  startDay: number;
  duration: number;
  status: string;
  checkInTime?: string;
  checkOutTime?: string;
  nights?: number;
  row?: number;
}

interface RoomRowProps {
  room: {
    number: string;
    bookings: Booking[];
  };
}

export function RoomRow({ room }: RoomRowProps) {
  // Organize bookings by rows
  const rows: Booking[][] = [[], []];
  room.bookings.forEach((booking) => {
    const rowIndex = booking.row ? booking.row - 1 : 0;
    if (!rows[rowIndex]) rows[rowIndex] = [];
    rows[rowIndex].push(booking);
  });

  const maxRows = Math.max(1, ...room.bookings.map((b) => b.row || 1));

  return (
    <div className="relative">
      {/* Room Number Header */}
      <div className="flex items-center justify-center gap-1 py-2 bg-muted/30">
        <span className="text-[17px] font-normal">Room {room.number}</span>
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </div>

      {/* Booking Grid */}
      <div className="relative" style={{ minHeight: `${maxRows * 76}px` }}>
        {/* Day Grid Background */}
        <div className="absolute inset-0 grid grid-cols-30">
          {Array.from({ length: 30 }).map((_, index) => (
            <div key={index} className="border-r border-border last:border-r-0" />
          ))}
        </div>

        {/* Bookings */}
        {rows.map((rowBookings, rowIndex) => (
          <div
            key={rowIndex}
            className="absolute left-0 right-0"
            style={{ top: `${rowIndex * 76}px`, height: '76px' }}
          >
            <div className="relative grid grid-cols-30 h-full">
              {rowBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </div>
          </div>
        ))}

        {/* Empty slots with add buttons */}
        <div className="absolute inset-0 grid grid-cols-30 pointer-events-none">
          {Array.from({ length: 30 }).map((_, index) => {
            const hasBooking = room.bookings.some(
              (b) => index + 1 >= b.startDay && index + 1 < b.startDay + b.duration
            );
            if (!hasBooking && index % 5 === 0) {
              return (
                <div key={index} className="flex items-center justify-center pointer-events-auto">
                  <button className="w-5 h-5 rounded-full bg-muted hover:bg-muted-foreground/20 flex items-center justify-center transition-colors">
                    <Plus className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}
