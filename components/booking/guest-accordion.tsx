'use client';

import { ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Guest } from '@/lib/types/booking';

interface GuestAccordionProps {
  guestNumber: number;
  isOpen: boolean;
  onToggle: () => void;
  guestData: Partial<Guest>;
  onUpdate: (data: Partial<Guest>) => void;
}

export function GuestAccordion({
  guestNumber,
  isOpen,
  onToggle,
  guestData,
  onUpdate,
}: GuestAccordionProps) {
  const t = useTranslations('booking');

  const formatGuestNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="border border-[#C4956C] rounded-lg overflow-hidden">
      {/* Accordion Header */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-6 bg-[#C4956C]/5 hover:bg-[#C4956C]/10 transition-colors"
      >
        <span className="text-[24px] font-normal">
          {t('guestInformationNumber', { number: formatGuestNumber(guestNumber) })}
        </span>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        )}
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="p-4 space-y-7">
          {/* Full Name */}
          <div className="space-y-3">
            <div className="space-y-1">
              <label className="block text-[24px] font-normal">{t('fullName')}</label>
              <p className="text-[19px] text-muted-foreground">{t('asWrittenOnGuestId')}</p>
            </div>
            <input
              type="text"
              value={guestData.fullName || ''}
              onChange={(e) => onUpdate({ fullName: e.target.value })}
              placeholder="عمر محمد"
              className="w-full h-[59px] px-4 border border-input rounded-lg bg-background text-[27px]"
            />
          </div>

          {/* Guest Type and Date of Birth */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-[34px]">
              <label className="block text-[24px] font-normal">{t('guestType')}</label>
              <div className="relative">
                <input
                  type="text"
                  value={guestData.guestType || 'Adult'}
                  readOnly
                  className="w-full h-[54px] px-4 border border-input rounded-lg bg-background text-[22px]"
                />
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </div>

            <div className="space-y-[34px]">
              <label className="block text-[24px] font-normal">{t('dateOfBirth')}</label>
              <div className="relative">
                <input
                  type="text"
                  value="2 April 2026"
                  readOnly
                  className="w-full h-[54px] px-4 border border-input rounded-lg bg-background text-[22px]"
                />
                <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* ID and Gender */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-[34px]">
              <label className="block text-[24px] font-normal">{t('id')}</label>
              <input
                type="text"
                value={guestData.nationalId || ''}
                onChange={(e) => onUpdate({ nationalId: e.target.value })}
                placeholder={t('nationalIdPlaceholder')}
                className="w-full h-[54px] px-4 border border-input rounded-lg bg-background text-[22px]"
              />
            </div>

            <div className="space-y-[34px]">
              <label className="block text-[24px] font-normal">{t('gender')}</label>
              <div className="relative">
                <input
                  type="text"
                  value={guestData.gender || 'Female'}
                  readOnly
                  className="w-full h-[54px] px-4 border border-input rounded-lg bg-background text-[22px]"
                />
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Country and Nationality */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-[34px]">
              <label className="block text-[24px] font-normal">{t('country')}</label>
              <div className="relative">
                <input
                  type="text"
                  value={guestData.country || 'Egypt'}
                  readOnly
                  className="w-full h-[54px] px-4 border border-input rounded-lg bg-background text-[22px]"
                />
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </div>

            <div className="space-y-[34px]">
              <label className="block text-[24px] font-normal">{t('nationality')}</label>
              <div className="relative">
                <input
                  type="text"
                  value={guestData.nationality || 'Egypt'}
                  readOnly
                  className="w-full h-[54px] px-4 border border-input rounded-lg bg-background text-[22px]"
                />
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Phone Number and Email */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-[34px]">
              <label className="block text-[24px] font-normal">{t('phoneNumber')}</label>
              <input
                type="tel"
                value={guestData.phoneNumber || ''}
                onChange={(e) => onUpdate({ phoneNumber: e.target.value })}
                placeholder="015648865548"
                className="w-full h-[54px] px-4 border border-input rounded-lg bg-background text-[22px]"
              />
            </div>

            <div className="space-y-[34px]">
              <label className="block text-[24px] font-normal">{t('email')}</label>
              <input
                type="email"
                value={guestData.email || ''}
                onChange={(e) => onUpdate({ email: e.target.value })}
                placeholder="user@gmail.com"
                className="w-full h-[54px] px-4 border border-input rounded-lg bg-background text-[22px]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
