'use client';

import { useState } from 'react';
import { Calendar, ChevronDown, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { BookingFormData, RoomType } from '@/lib/types/booking';

interface RoomInfoFormProps {
  initialData: Partial<BookingFormData>;
  onNext: (data: Partial<BookingFormData>) => void;
  onCancel: () => void;
}

export function RoomInfoForm({ initialData, onNext, onCancel }: RoomInfoFormProps) {
  const t = useTranslations('booking');
  const [formData] = useState({
    checkInDate: initialData.checkInDate || new Date(),
    checkOutDate:
      initialData.checkOutDate || new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
    nightsNumber: initialData.nightsNumber || 5,
    roomType: (initialData.roomType || 'Double') as RoomType,
    roomNumber: initialData.roomNumber || '102',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {/* Check-in and Check-out */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-[34px]">
          <label className="block text-[24px] font-normal">{t('checkIn')}</label>
          <div className="relative">
            <input
              type="text"
              value={formatDate(formData.checkInDate)}
              readOnly
              className="w-full h-[54px] px-4 border border-input rounded-lg bg-background text-[22px]"
            />
            <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>
        </div>

        <div className="space-y-[34px]">
          <label className="block text-[24px] font-normal">{t('checkOut')}</label>
          <div className="relative">
            <input
              type="text"
              value={formatDate(formData.checkOutDate)}
              readOnly
              className="w-full h-[54px] px-4 border border-input rounded-lg bg-background text-[22px]"
            />
            <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Nights Number */}
      <div className="space-y-[34px]">
        <label className="block text-[24px] font-normal">{t('nightsNumber')}</label>
        <div className="relative">
          <input
            type="text"
            value={`${formData.nightsNumber}`}
            readOnly
            className="w-full h-[54px] px-4 border border-input rounded-lg bg-background text-[22px]"
          />
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        </div>
      </div>

      {/* Room Type and Room Number */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-[34px]">
          <label className="block text-[24px] font-normal">{t('roomType')}</label>
          <div className="relative">
            <input
              type="text"
              value={formData.roomType}
              readOnly
              className="w-full h-[54px] px-4 border border-input rounded-lg bg-background text-[22px]"
            />
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>
        </div>

        <div className="space-y-[34px]">
          <label className="block text-[24px] font-normal">{t('roomNumber')}</label>
          <div className="relative">
            <input
              type="text"
              value={formData.roomNumber}
              readOnly
              className="w-full h-[54px] px-4 border border-input rounded-lg bg-background text-[22px]"
            />
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-3 pt-10">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 h-14 text-[29px] font-normal text-foreground hover:bg-muted rounded-lg transition-colors"
        >
          {t('cancel')}
        </button>
        <button
          type="submit"
          className="flex items-center gap-2 px-4 h-14 bg-foreground text-background text-[29px] font-normal rounded-lg hover:bg-foreground/90 transition-colors"
        >
          {t('next')}
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
}
