/**
 * Room Types and Interfaces
 * Comprehensive type definitions for the Rooms management system
 */

export type RoomType = 'Single' | 'Double' | 'Suite' | 'Deluxe' | 'Family';

export type RoomStatus = 'Available' | 'Occupied' | 'Maintenance' | 'Reserved';

export type ViewType = 'Sea View' | 'City View' | 'Garden View' | 'Pool View' | 'Mountain View';

export type FacilityType =
  | 'wifi'
  | 'safetyBox'
  | 'airConditioning'
  | 'flatScreenTV'
  | 'miniFridge'
  | 'coffeeTeaMaker'
  | 'jacuzzi'
  | 'ironingBoard'
  | 'blackoutCurtains';

export interface Facility {
  id: FacilityType;
  icon: string;
  labelKey: string;
}

export interface Feature {
  id: string;
  labelKey: string;
  enabled: boolean;
}

export interface RoomImage {
  id: string;
  url: string;
  alt: string;
}

export interface RoomRating {
  overall: number;
  facilities: number;
  services: number;
  comfort: number;
  location: number;
  totalReviews: number;
}

export interface Review {
  id: string;
  guestName: string;
  guestAvatar?: string;
  nights: number;
  rating: number;
  comment: string;
  date: string;
}

export interface Room {
  id: string;
  roomNumber: string;
  type: RoomType;
  status: RoomStatus;
  viewType: ViewType;
  area: number; // in square meters
  beds: number;
  capacity: number;
  pricePerDay: number;
  currency: string;
  description: string;
  coverImage: string;
  gallery: RoomImage[];
  features: Feature[];
  facilities: FacilityType[];
  rating: RoomRating;
  reviews: Review[];
  availableFrom?: string;
  availableTo?: string;
  hotelId?: string;
}

export interface RoomFormData {
  hotelId: string;
  type: RoomType;
  status: RoomStatus;
  roomNumber: string;
  viewType: ViewType;
  capacity: number;
  beds: number;
  area: number;
  pricePerDay: number;
  coverImage: File | null;
  gallery: File[];
  facilities: FacilityType[];
  features: Feature[];
  description?: string;
}

export interface RoomFilters {
  search: string;
  priceRange: 'all' | 'low' | 'medium' | 'high';
  status: RoomStatus | 'all';
  type: RoomType | 'all';
}
