'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { BookingStepIndicator } from './booking-step-indicator';
import { RoomInfoForm } from './room-info-form';
import { GuestInfoForm } from './guest-info-form';
import { BookingFormData } from '@/lib/types/booking';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: BookingFormData) => void;
}

export function BookingModal({ isOpen, onClose, onSubmit }: BookingModalProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<Partial<BookingFormData>>({
    guestsNumber: 1,
    guests: [{}],
  });

  if (!isOpen) return null;

  const handleNext = (stepData: Partial<BookingFormData>) => {
    setFormData({ ...formData, ...stepData });
    setCurrentStep(2);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleSubmit = (stepData: Partial<BookingFormData>) => {
    const finalData = { ...formData, ...stepData } as BookingFormData;
    onSubmit(finalData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-[846px] max-h-[90vh] overflow-y-auto bg-background rounded-lg shadow-lg">
        <div className="p-10">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-start justify-between mb-12">
              <h2 className="text-[34px] font-semibold">Booking Room</h2>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <BookingStepIndicator currentStep={currentStep} totalSteps={2} />
          </div>

          {/* Forms */}
          {currentStep === 1 ? (
            <RoomInfoForm initialData={formData} onNext={handleNext} onCancel={onClose} />
          ) : (
            <GuestInfoForm
              initialData={formData}
              onSubmit={handleSubmit}
              onBack={handleBack}
              onCancel={onClose}
            />
          )}
        </div>
      </div>
    </div>
  );
}
