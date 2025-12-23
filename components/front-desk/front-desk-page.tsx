'use client';

import { useState } from 'react';
import { Search, Plus, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { BookingModal } from '@/components/booking/booking-modal';
import { RoomCalendar } from './room-calendar';
import { BookingFormData } from '@/lib/types/booking';

export function FrontDeskPage() {
  const t = useTranslations('frontDesk');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoomRange] = useState('100 : 104');

  const handleBookingSubmit = (data: BookingFormData) => {
    console.log('Booking submitted:', data);
    // Handle booking submission here
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="space-y-4">
        <div>
          <h1 className="text-[39px] font-semibold leading-none">{t('title')}</h1>
          <p className="text-[17px] text-muted-foreground mt-1">{t('autoUpdates')}</p>
        </div>

        {/* Search and Add Book Button */}
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              className="w-full h-[42px] pl-[50px] pr-4 border border-input rounded-lg bg-background text-[22px]"
            />
          </div>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="flex items-center gap-2 px-[10px] h-[42px] bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
          >
            <span className="text-[19px] font-normal">{t('addBook')}</span>
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Filters Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Room Range Selector */}
            <div className="relative">
              <button className="flex items-center gap-2 px-2 h-7 border border-input rounded-lg bg-background hover:bg-muted transition-colors">
                <span className="text-[17px]">{selectedRoomRange}</span>
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Available Filter */}
            <button className="px-2 h-7 text-[17px] text-foreground hover:bg-muted rounded-lg transition-colors">
              {t('available')} (06)
            </button>

            {/* Room Type Filters */}
            <div className="flex items-center gap-2">
              <button className="px-2 h-7 text-[17px] text-foreground hover:bg-muted rounded-lg transition-colors border border-input">
                {t('single')} (06)
              </button>
              <button className="px-2 h-7 text-[17px] text-foreground hover:bg-muted rounded-lg transition-colors bg-foreground text-background">
                {t('double')} (4)
              </button>
              <button className="px-2 h-7 text-[17px] text-foreground hover:bg-muted rounded-lg transition-colors border border-input">
                {t('triple')} (06)
              </button>
              <button className="px-2 h-7 text-[17px] text-foreground hover:bg-muted rounded-lg transition-colors border border-input">
                {t('suite')} (06)
              </button>
            </div>
          </div>

          {/* Date Navigation */}
          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-muted rounded transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-[17px] text-muted-foreground px-2">{t('dateRange')}</span>
            <button className="p-1 hover:bg-muted rounded transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Calendar View */}
      <RoomCalendar />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onSubmit={handleBookingSubmit}
      />
    </div>
  );
}
