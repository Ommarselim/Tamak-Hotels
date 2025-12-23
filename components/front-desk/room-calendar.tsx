'use client';

import { RoomRow } from './room-row';
import { CalendarHeader } from './calendar-header';

// Mock data for demonstration
const rooms = [
  {
    number: '100',
    bookings: [
      {
        id: '1',
        guestName: 'Ali Ahmed',
        startDay: 1,
        duration: 2,
        status: 'checked-out',
        checkInTime: '12:45pm',
        checkOutTime: '08:05am',
      },
      {
        id: '2',
        guestName: 'Hana Ahmed',
        startDay: 3,
        duration: 1,
        status: 'checked-out',
        checkInTime: '12:45pm',
        checkOutTime: '08:05am',
      },
      {
        id: '3',
        guestName: 'Hana Ahmed',
        startDay: 8,
        duration: 10,
        status: 'checked-in',
        checkInTime: '12:45pm',
      },
      { id: '4', guestName: 'Ali Ahmed', startDay: 22, duration: 8, status: 'booked', nights: 7 },
    ],
  },
  {
    number: '200',
    bookings: [
      { id: '5', guestName: 'Ali Ahmed', startDay: 1, duration: 6, status: 'booked', nights: 6 },
      {
        id: '6',
        guestName: 'Ali Ahmed',
        startDay: 1,
        duration: 6,
        status: 'booked',
        nights: 6,
        row: 2,
      },
      { id: '7', guestName: 'Hana Ahmed', startDay: 8, duration: 8, status: 'booked', nights: 8 },
      { id: '8', guestName: 'Hana Ahmed', startDay: 22, duration: 4, status: 'booked', nights: 4 },
      {
        id: '9',
        guestName: 'Hana Ahmed',
        startDay: 22,
        duration: 4,
        status: 'booked',
        nights: 4,
        row: 2,
      },
      { id: '10', guestName: 'Hana Ahmed', startDay: 26, duration: 3, status: 'booked', nights: 3 },
    ],
  },
  {
    number: '300',
    bookings: [
      {
        id: '11',
        guestName: 'Ali Ahmed',
        startDay: 1,
        duration: 7,
        status: 'checked-out',
        checkInTime: '12:45pm',
        checkOutTime: '08:05am',
      },
      {
        id: '12',
        guestName: 'Ali Ahmed',
        startDay: 1,
        duration: 7,
        status: 'checked-out',
        checkInTime: '12:45pm',
        checkOutTime: '08:05am',
        row: 2,
      },
      { id: '13', guestName: 'Hana Ahmed', startDay: 8, duration: 7, status: 'booked', nights: 7 },
      { id: '14', guestName: 'Hana Ahmed', startDay: 18, duration: 4, status: 'booked', nights: 4 },
    ],
  },
  {
    number: '400',
    bookings: [
      {
        id: '15',
        guestName: 'Ali Ahmed',
        startDay: 1,
        duration: 7,
        status: 'checked-out',
        checkInTime: '12:45pm',
        checkOutTime: '08:05am',
      },
      {
        id: '16',
        guestName: 'Ali Ahmed',
        startDay: 1,
        duration: 7,
        status: 'checked-out',
        checkInTime: '12:45pm',
        checkOutTime: '08:05am',
        row: 2,
      },
      { id: '17', guestName: 'Hana Ahmed', startDay: 8, duration: 7, status: 'booked', nights: 7 },
    ],
  },
];

export function RoomCalendar() {
  return (
    <div className="border border-input rounded-lg overflow-hidden">
      <CalendarHeader />
      <div className="divide-y divide-border">
        {rooms.map((room) => (
          <RoomRow key={room.number} room={room} />
        ))}
      </div>
    </div>
  );
}
