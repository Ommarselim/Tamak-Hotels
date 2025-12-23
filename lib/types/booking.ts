export type RoomType = 'Single' | 'Double' | 'Triple' | 'Suite';

export type GuestType = 'Adult' | 'Child';

export type Gender = 'Male' | 'Female';

export type BookingStatus = 'booked' | 'checked-in' | 'checked-out' | 'cancelled';

export interface Guest {
  id: string;
  fullName: string;
  guestType: GuestType;
  dateOfBirth: Date;
  nationalId: string;
  gender: Gender;
  country: string;
  nationality: string;
  phoneNumber: string;
  email: string;
  idPhotoUrl?: string;
}

export interface Booking {
  id: string;
  roomNumber: string;
  roomType: RoomType;
  checkInDate: Date;
  checkOutDate: Date;
  nightsNumber: number;
  guests: Guest[];
  status: BookingStatus;
  checkedInTime?: string;
  checkedOutTime?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Room {
  id: string;
  number: string;
  type: RoomType;
  status: 'available' | 'occupied' | 'maintenance';
  bookings: Booking[];
}

export interface BookingFormData {
  // Step 1: Room Information
  checkInDate: Date;
  checkOutDate: Date;
  nightsNumber: number;
  roomType: RoomType;
  roomNumber: string;

  // Step 2: Guest Information
  guestsNumber: number;
  guests: Partial<Guest>[];
}

export interface CalendarDay {
  date: Date;
  dayNumber: number;
  dayName: string;
  isToday: boolean;
}
