'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Search,
  Calendar,
  Plus,
  Upload,
  Eye,
  MoreHorizontal,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const bookings = [
  {
    id: 'LH4546',
    guest: 'Omar Selim',
    roomType: 'Suite',
    room: 'Room 101',
    duration: '3 nights',
    checkIn: '1/03/2021',
    checkOut: '5/03/2021',
    status: 'Checked-In',
  },
  {
    id: 'LH4546',
    guest: 'Ali Ibrahim',
    roomType: 'Suite',
    room: 'Room 101',
    duration: '3 nights',
    checkIn: '1/03/2021',
    checkOut: '10/03/2021',
    status: 'Checked-In',
  },
  {
    id: 'LH4546',
    guest: 'Yahia Mohamed',
    roomType: 'Single',
    room: 'Room 101',
    duration: '2 nights',
    checkIn: '1/03/2021',
    checkOut: '15/03/2021',
    status: 'Checked-In',
  },
  {
    id: 'LH4546',
    guest: 'Laila Ahmad',
    roomType: 'Triple',
    room: 'Room 101',
    duration: '2 nights',
    checkIn: '1/03/2021',
    checkOut: '16/03/2021',
    status: 'Pending',
  },
  {
    id: 'LH4546',
    guest: 'Ahmed Dad',
    roomType: 'Double',
    room: 'Room 101',
    duration: '2 nights',
    checkIn: '5/03/2021',
    checkOut: '8/03/2021',
    status: 'Checked-In',
  },
  {
    id: 'LH4546',
    guest: 'Omar Selim',
    roomType: 'Suite',
    room: 'Room 101',
    duration: '3 nights',
    checkIn: '1/03/2021',
    checkOut: '9/03/2021',
    status: 'Checked-In',
  },
  {
    id: 'LH4546',
    guest: 'Ahmed Dad',
    roomType: 'Single',
    room: 'Room 101',
    duration: '2 nights',
    checkIn: '1/03/2021',
    checkOut: '9/03/2021',
    status: 'Canceled',
  },
  {
    id: 'LH4546',
    guest: 'Yahia Mohamed',
    roomType: 'Suite',
    room: 'Room 101',
    duration: '2 nights',
    checkIn: '1/03/2021',
    checkOut: '9/03/2021',
    status: 'Checked-In',
  },
  {
    id: 'LH4546',
    guest: 'Laila Ahmad',
    roomType: 'Triple',
    room: 'Room 101',
    duration: '5 nights',
    checkIn: '1/03/2021',
    checkOut: '16/03/2021',
    status: 'Pending',
  },
  {
    id: 'LH4546',
    guest: 'Yahia Mohamed',
    roomType: 'Suite',
    room: 'Room 101',
    duration: '2 nights',
    checkIn: '1/03/2021',
    checkOut: '16/03/2021',
    status: 'Checked-In',
  },
];

const roomTypeColors: Record<string, string> = {
  Suite: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  Single: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Double: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Triple: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
};

const statusColors: Record<string, string> = {
  'Checked-In': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  Canceled: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
};

export function BookingListTable() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">Booking List</h2>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search gust name or room type.."
              className="pl-9 w-full sm:w-[350px]"
            />
          </div>
          <Button variant="outline" className="justify-start gap-2">
            <span className="text-sm">07 Jan 2026 - 14 Jan 2026</span>
            <Calendar className="h-4 w-4 ml-auto" />
          </Button>
        </div>
      </div>

      {/* Filters and Actions */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <Button variant="default" size="sm" className="h-8">
              <span className="text-xs">Update</span>
            </Button>
            <Button variant="outline" size="sm" className="h-8">
              <span className="text-xs">8 Selected</span>
            </Button>
            <Button variant="outline" size="sm" className="h-8">
              <Filter className="h-3 w-3 mr-1" />
              <span className="text-xs">Filter</span>
              <Badge variant="secondary" className="ml-1.5 h-4 px-1.5 text-[10px]">
                4
              </Badge>
            </Button>
            <span className="text-xs text-muted-foreground">120 Resutls</span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8">
              <Plus className="h-3 w-3 mr-1" />
              <span className="text-xs">Add New</span>
            </Button>
            <Button variant="outline" size="sm" className="h-8">
              <Upload className="h-3 w-3 mr-1" />
              <span className="text-xs">Import/Export</span>
            </Button>
            <Button variant="outline" size="sm" className="h-8">
              <Eye className="h-3 w-3 mr-1" />
              <span className="text-xs">View</span>
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-3">
                  <Checkbox />
                </th>
                <th className="text-left py-3 px-3 text-xs font-medium text-muted-foreground whitespace-nowrap">
                  Booking ID
                </th>
                <th className="text-left py-3 px-3 text-xs font-medium text-muted-foreground whitespace-nowrap">
                  Guest Name
                </th>
                <th className="text-left py-3 px-3 text-xs font-medium text-muted-foreground whitespace-nowrap">
                  Room Type
                </th>
                <th className="text-left py-3 px-3 text-xs font-medium text-muted-foreground whitespace-nowrap">
                  Room Number
                </th>
                <th className="text-left py-3 px-3 text-xs font-medium text-muted-foreground whitespace-nowrap">
                  Duration
                </th>
                <th className="text-left py-3 px-3 text-xs font-medium text-muted-foreground whitespace-nowrap">
                  Check-in
                </th>
                <th className="text-left py-3 px-3 text-xs font-medium text-muted-foreground whitespace-nowrap">
                  Check-out
                </th>
                <th className="text-left py-3 px-3 text-xs font-medium text-muted-foreground whitespace-nowrap">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index} className="border-b hover:bg-muted/50">
                  <td className="py-3 px-3">
                    <Checkbox />
                  </td>
                  <td className="py-3 px-3 text-sm">{booking.id}</td>
                  <td className="py-3 px-3 text-sm">{booking.guest}</td>
                  <td className="py-3 px-3">
                    <Badge
                      variant="secondary"
                      className={`${roomTypeColors[booking.roomType] || ''} text-xs`}
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-current mr-1.5" />
                      {booking.roomType}
                    </Badge>
                  </td>
                  <td className="py-3 px-3 text-sm">{booking.room}</td>
                  <td className="py-3 px-3 text-sm">{booking.duration}</td>
                  <td className="py-3 px-3 text-sm">{booking.checkIn}</td>
                  <td className="py-3 px-3 text-sm">{booking.checkOut}</td>
                  <td className="py-3 px-3">
                    <Badge
                      variant="secondary"
                      className={`${statusColors[booking.status] || ''} text-xs`}
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-current mr-1.5" />
                      {booking.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 pt-4 border-t">
          <div className="flex items-center gap-4 text-sm">
            <span className="text-muted-foreground">1-20 of 300</span>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Row/Page:</span>
              <Button variant="outline" size="sm" className="h-8">
                7/12
                <ChevronDown className="h-3 w-3 ml-2" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {[1, 2, 3, 4, 5, 6, 7].map((page) => (
              <Button
                key={page}
                variant={page === 1 ? 'default' : 'outline'}
                size="icon"
                className="h-8 w-8"
              >
                {page}
              </Button>
            ))}
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
