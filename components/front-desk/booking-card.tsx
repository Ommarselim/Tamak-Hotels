'use client';

interface Booking {
  id: string;
  guestName: string;
  startDay: number;
  duration: number;
  status: string;
  checkInTime?: string;
  checkOutTime?: string;
  nights?: number;
}

interface BookingCardProps {
  booking: Booking;
}

export function BookingCard({ booking }: BookingCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'checked-in':
        return 'bg-[#A8CCD7]';
      case 'checked-out':
        return 'bg-[#D4C4A8]';
      case 'booked':
        return 'bg-[#D9B8A3]';
      default:
        return 'bg-gray-200';
    }
  };

  const getStatusInfo = () => {
    if (booking.status === 'checked-out') {
      return `checked-In ${booking.checkInTime} checked out ${booking.checkOutTime}`;
    }
    if (booking.status === 'checked-in') {
      return `checked-In ${booking.checkInTime}`;
    }
    if (booking.status === 'booked') {
      return `Booked ${booking.nights} nights`;
    }
    return '';
  };

  return (
    <div
      className={`absolute flex items-center px-1 h-[34px] rounded ${getStatusColor(
        booking.status
      )}`}
      style={{
        left: `${((booking.startDay - 1) / 30) * 100}%`,
        width: `${(booking.duration / 30) * 100}%`,
        top: '4px',
      }}
    >
      <div className="flex items-center gap-1 min-w-0">
        {/* Avatar placeholder */}
        <div className="w-5 h-5 rounded-full bg-white/50 flex-shrink-0" />

        {/* Guest Info */}
        <div className="min-w-0 flex-1">
          <p className="text-[12px] font-medium text-foreground truncate">{booking.guestName}</p>
          <p className="text-[12px] text-foreground/70 truncate">{getStatusInfo()}</p>
        </div>
      </div>
    </div>
  );
}
