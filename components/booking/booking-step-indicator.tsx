'use client';

import { useTranslations } from 'next-intl';

interface BookingStepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function BookingStepIndicator({ currentStep, totalSteps }: BookingStepIndicatorProps) {
  const t = useTranslations('booking');

  const getStepLabel = (step: number) => {
    switch (step) {
      case 1:
        return t('roomInformation');
      case 2:
        return t('guestInformation');
      default:
        return '';
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="relative w-full h-4 bg-muted rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-[#C4956C] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Step Label */}
      <div className="flex items-center justify-between">
        <span className="text-[22px] font-normal text-foreground">{getStepLabel(currentStep)}</span>
        <span className="text-[24px] font-normal text-muted-foreground">
          {currentStep}/{totalSteps}
        </span>
      </div>
    </div>
  );
}
