'use client';

import { useState } from 'react';
import { Room, RoomFilters, RoomFormData } from '@/lib/types/room';
import { RoomsHeader } from './rooms-header';
import { RoomsList } from './rooms-list';
import { RoomDetailPanel } from './room-detail-panel';
import { AddRoomModal } from './add-room-modal';
import { useTranslations } from 'next-intl';

// Mock data for demonstration
const mockRooms: Room[] = [
  {
    id: '1',
    roomNumber: '100',
    type: 'Single',
    status: 'Available',
    viewType: 'Sea View',
    area: 30,
    beds: 1,
    capacity: 1,
    pricePerDay: 100,
    currency: 'SAR',
    description:
      'Features a single bed, en-suite bathroom, work desk, and essential amenities for a practical and functional stay.',
    coverImage: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop',
    gallery: [],
    features: [
      { id: '1', labelKey: 'singleBed', enabled: true },
      { id: '2', labelKey: 'privateBathroom', enabled: true },
      { id: '3', labelKey: 'workDesk', enabled: true },
    ],
    facilities: [
      'wifi',
      'safetyBox',
      'airConditioning',
      'flatScreenTV',
      'miniFridge',
      'coffeeTeaMaker',
    ],
    rating: {
      overall: 4.0,
      facilities: 4.8,
      services: 2.5,
      comfort: 4.8,
      location: 1.8,
      totalReviews: 200,
    },
    reviews: [
      {
        id: '1',
        guestName: 'Hana Ahmed',
        nights: 3,
        rating: 4,
        comment:
          'The single room was clean, comfortable, and perfect for a solo stay. The bed was cozy, the room had a small work desk which was very useful, and the bathroom was clean with good water pressure. The room size is compact but well organized, and all essential amenities were provided. Overall, a great value for a short and practical stay.',
        date: '2025-12-20',
      },
      {
        id: '2',
        guestName: 'Ali Ibrahim',
        nights: 5,
        rating: 5,
        comment:
          'The single room was clean, comfortable, and perfect for a solo stay. The bed was cozy, the room had a small work desk which was very useful, and the bathroom was clean with good water pressure.',
        date: '2025-12-18',
      },
    ],
    availableFrom: '15',
    availableTo: '17',
  },
  {
    id: '2',
    roomNumber: '200',
    type: 'Double',
    status: 'Occupied',
    viewType: 'City View',
    area: 40,
    beds: 2,
    capacity: 2,
    pricePerDay: 400,
    currency: 'SAR',
    description:
      'Features double bed, en-suite bathroom, work desk, and essential amenities for a practical and functional stay.',
    coverImage: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
    gallery: [],
    features: [
      { id: '1', labelKey: 'singleBed', enabled: false },
      { id: '2', labelKey: 'privateBathroom', enabled: true },
      { id: '3', labelKey: 'workDesk', enabled: true },
    ],
    facilities: ['wifi', 'safetyBox', 'airConditioning', 'flatScreenTV'],
    rating: {
      overall: 4.2,
      facilities: 4.5,
      services: 3.8,
      comfort: 4.6,
      location: 4.0,
      totalReviews: 150,
    },
    reviews: [],
    availableFrom: '15',
    availableTo: '17',
  },
  {
    id: '3',
    roomNumber: '300',
    type: 'Suite',
    status: 'Available',
    viewType: 'Sea View',
    area: 50,
    beds: 4,
    capacity: 4,
    pricePerDay: 700,
    currency: 'SAR',
    description:
      'Features double bed, en-suite bathroom, work desk, and essential amenities for a practical and functional stay.',
    coverImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop',
    gallery: [],
    features: [
      { id: '1', labelKey: 'singleBed', enabled: true },
      { id: '2', labelKey: 'privateBathroom', enabled: true },
      { id: '3', labelKey: 'workDesk', enabled: true },
    ],
    facilities: [
      'wifi',
      'safetyBox',
      'airConditioning',
      'flatScreenTV',
      'miniFridge',
      'coffeeTeaMaker',
      'jacuzzi',
    ],
    rating: {
      overall: 4.8,
      facilities: 4.9,
      services: 4.7,
      comfort: 4.9,
      location: 4.7,
      totalReviews: 85,
    },
    reviews: [],
    availableFrom: '15',
    availableTo: '17',
  },
];

export function RoomsPage() {
  const t = useTranslations('rooms');
  const [filters, setFilters] = useState<RoomFilters>({
    search: '',
    priceRange: 'all',
    status: 'all',
    type: 'all',
  });
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(mockRooms[0]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Filter rooms based on filters
  const filteredRooms = mockRooms.filter((room) => {
    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesSearch =
        room.roomNumber.toLowerCase().includes(searchLower) ||
        room.type.toLowerCase().includes(searchLower) ||
        room.description.toLowerCase().includes(searchLower);
      if (!matchesSearch) return false;
    }

    // Status filter
    if (filters.status !== 'all' && room.status !== filters.status) {
      return false;
    }

    // Type filter
    if (filters.type !== 'all' && room.type !== filters.type) {
      return false;
    }

    // Price filter
    if (filters.priceRange !== 'all') {
      if (filters.priceRange === 'low' && room.pricePerDay > 200) return false;
      if (filters.priceRange === 'medium' && (room.pricePerDay <= 200 || room.pricePerDay > 500))
        return false;
      if (filters.priceRange === 'high' && room.pricePerDay <= 500) return false;
    }

    return true;
  });

  const handleAddRoom = (data: RoomFormData) => {
    console.log('Adding room:', data);
    // Handle room addition logic
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
        <RoomsHeader
          filters={filters}
          onFiltersChange={setFilters}
          onAddRoom={() => setIsAddModalOpen(true)}
        />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-6">
        {/* Rooms List */}
        <div className="bg-card rounded-xl border p-6">
          <RoomsList
            rooms={filteredRooms}
            selectedRoomId={selectedRoom?.id}
            onRoomSelect={setSelectedRoom}
          />
        </div>

        {/* Room Detail Panel */}
        <div className="bg-card rounded-xl border overflow-hidden lg:sticky lg:top-6 lg:h-[calc(100vh-120px)]">
          <RoomDetailPanel room={selectedRoom} />
        </div>
      </div>

      {/* Add Room Modal */}
      <AddRoomModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddRoom}
      />
    </div>
  );
}
