'use client';

import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { BookingFormData, Guest } from '@/lib/types/booking';
import { GuestAccordion } from './guest-accordion';

interface GuestInfoFormProps {
  initialData: Partial<BookingFormData>;
  onSubmit: (data: Partial<BookingFormData>) => void;
  onBack: () => void;
  onCancel: () => void;
}

export function GuestInfoForm({ initialData, onSubmit, onCancel }: GuestInfoFormProps) {
  const t = useTranslations('booking');
  const [guestsNumber] = useState(initialData.guestsNumber || 3);
  const [guests, setGuests] = useState<Partial<Guest>[]>(
    initialData.guests || Array(guestsNumber).fill({})
  );
  const [openAccordions, setOpenAccordions] = useState<number[]>([0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ guestsNumber, guests });
  };

  const toggleAccordion = (index: number) => {
    setOpenAccordions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const updateGuest = (index: number, data: Partial<Guest>) => {
    const updatedGuests = [...guests];
    updatedGuests[index] = { ...updatedGuests[index], ...data };
    setGuests(updatedGuests);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {/* Guests Number */}
      <div className="space-y-[34px]">
        <label className="block text-[24px] font-normal">{t('guestsNumber')}</label>
        <div className="relative">
          <input
            type="text"
            value={`${guestsNumber}`}
            readOnly
            className="w-full h-[54px] px-4 border border-input rounded-lg bg-background text-[22px]"
          />
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        </div>
      </div>

      {/* Guest Accordions */}
      <div className="space-y-6">
        {Array.from({ length: guestsNumber }).map((_, index) => (
          <GuestAccordion
            key={index}
            guestNumber={index + 1}
            isOpen={openAccordions.includes(index)}
            onToggle={() => toggleAccordion(index)}
            guestData={guests[index] || {}}
            onUpdate={(data) => updateGuest(index, data)}
          />
        ))}
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
          {t('submitData')}
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
}
