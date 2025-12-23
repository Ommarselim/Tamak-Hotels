'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  X,
  ChevronDown,
  Plus,
  Upload,
  Wifi,
  Shield,
  AirVent,
  Tv,
  Coffee,
  Bath,
  Wind,
  LampDesk,
  CheckCircle2,
  Circle,
  ArrowRight,
} from 'lucide-react';
import { RoomFormData, RoomType, RoomStatus, ViewType, FacilityType } from '@/lib/types/room';
import { cn } from '@/lib/utils';

interface AddRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: RoomFormData) => void;
}

export function AddRoomModal({ isOpen, onClose, onSubmit }: AddRoomModalProps) {
  const t = useTranslations('rooms.addRoomModal');
  const [formData, setFormData] = useState<RoomFormData>({
    hotelId: '',
    type: 'Double',
    status: 'Available',
    roomNumber: '',
    viewType: 'Sea View',
    capacity: 2,
    beds: 2,
    area: 35,
    pricePerDay: 100,
    coverImage: null,
    gallery: [],
    facilities: ['wifi', 'safetyBox', 'airConditioning', 'flatScreenTV'],
    features: [
      { id: '1', labelKey: 'singleBed', enabled: true },
      { id: '2', labelKey: 'privateBathroom', enabled: true },
      { id: '3', labelKey: 'workDesk', enabled: true },
    ],
  });

  const facilityIcons: Record<FacilityType, React.ReactNode> = {
    wifi: <Wifi className="h-5 w-5" />,
    safetyBox: <Shield className="h-5 w-5" />,
    airConditioning: <AirVent className="h-5 w-5" />,
    flatScreenTV: <Tv className="h-5 w-5" />,
    miniFridge: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 8h14M9 7v4"
        />
      </svg>
    ),
    coffeeTeaMaker: <Coffee className="h-5 w-5" />,
    jacuzzi: <Bath className="h-5 w-5" />,
    ironingBoard: <LampDesk className="h-5 w-5" />,
    blackoutCurtains: <Wind className="h-5 w-5" />,
  };

  const allFacilities: FacilityType[] = [
    'wifi',
    'safetyBox',
    'airConditioning',
    'flatScreenTV',
    'miniFridge',
    'coffeeTeaMaker',
    'jacuzzi',
    'ironingBoard',
    'blackoutCurtains',
  ];

  const toggleFacility = (facility: FacilityType) => {
    setFormData((prev) => ({
      ...prev,
      facilities: prev.facilities.includes(facility)
        ? prev.facilities.filter((f) => f !== facility)
        : [...prev.facilities, facility],
    }));
  };

  const toggleFeature = (featureId: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.map((f) => (f.id === featureId ? { ...f, enabled: !f.enabled } : f)),
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  const handleSaveDraft = () => {
    // Handle draft save logic
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-background rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-semibold">{t('title')}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Related Hotel */}
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('relatedHotel')}</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between h-12">
                    <span className="text-muted-foreground">{t('hotelNamePlaceholder')}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem onClick={() => setFormData({ ...formData, hotelId: '1' })}>
                    Tamak Hotel Main
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFormData({ ...formData, hotelId: '2' })}>
                    Tamak Hotel Beach
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Room Type & Status */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t('roomType')}</label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between h-12">
                      <span>{formData.type}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {(['Single', 'Double', 'Suite'] as RoomType[]).map((type) => (
                      <DropdownMenuItem
                        key={type}
                        onClick={() => setFormData({ ...formData, type })}
                      >
                        {type}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t('roomStatus')}</label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between h-12">
                      <span>{formData.status}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {(['Available', 'Occupied', 'Maintenance'] as RoomStatus[]).map((status) => (
                      <DropdownMenuItem
                        key={status}
                        onClick={() => setFormData({ ...formData, status })}
                      >
                        {status}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Room Number & View Type */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t('roomNumber')}</label>
                <input
                  type="text"
                  placeholder="104 A1"
                  value={formData.roomNumber}
                  onChange={(e) => setFormData({ ...formData, roomNumber: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t('viewType')}</label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between h-12">
                      <span>{formData.viewType}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {(['Sea View', 'City View', 'Garden View', 'Pool View'] as ViewType[]).map(
                      (view) => (
                        <DropdownMenuItem
                          key={view}
                          onClick={() => setFormData({ ...formData, viewType: view })}
                        >
                          {view}
                        </DropdownMenuItem>
                      )
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Capacity & Beds */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t('capacity')}</label>
                <div className="relative">
                  <input
                    type="number"
                    value={formData.capacity}
                    onChange={(e) =>
                      setFormData({ ...formData, capacity: parseInt(e.target.value) })
                    }
                    className="w-full h-12 px-4 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    /4
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t('numberOfBeds')}</label>
                <div className="relative">
                  <input
                    type="number"
                    value={formData.beds}
                    onChange={(e) => setFormData({ ...formData, beds: parseInt(e.target.value) })}
                    className="w-full h-12 px-4 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    /4
                  </span>
                </div>
              </div>
            </div>

            {/* Area & Price */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t('area')}</label>
                <input
                  type="text"
                  placeholder="35m²"
                  value={`${formData.area}m²`}
                  onChange={(e) =>
                    setFormData({ ...formData, area: parseInt(e.target.value) || 0 })
                  }
                  className="w-full h-12 px-4 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t('pricePerDay')}</label>
                <input
                  type="text"
                  placeholder="100 SAR"
                  value={`${formData.pricePerDay} SAR`}
                  onChange={(e) =>
                    setFormData({ ...formData, pricePerDay: parseInt(e.target.value) || 0 })
                  }
                  className="w-full h-12 px-4 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Cover & Gallery */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t('cover')}</label>
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="flex-1 h-12 justify-start">
                    <Upload className="h-4 w-4 mr-2" />
                    {t('uploadCover')}
                  </Button>
                  <Button variant="outline" size="icon" className="h-12 w-12">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t('gallery')}</label>
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="flex-1 h-12 justify-start">
                    <Upload className="h-4 w-4 mr-2" />
                    {t('uploadImages')} <span className="ml-1 text-muted-foreground">/5</span>
                  </Button>
                  <Button variant="outline" size="icon" className="h-12 w-12">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Facilities */}
            <div className="space-y-3">
              <label className="text-sm font-medium">{t('facilities')}</label>
              <div className="border rounded-lg p-4">
                <div className="flex flex-wrap gap-3">
                  {allFacilities.slice(0, 4).map((facility) => (
                    <button
                      key={facility}
                      onClick={() => toggleFacility(facility)}
                      className={cn(
                        'flex items-center gap-2 px-3 py-2 rounded-md border text-sm transition-colors',
                        formData.facilities.includes(facility)
                          ? 'bg-primary/10 border-primary text-primary'
                          : 'hover:bg-muted'
                      )}
                    >
                      {facilityIcons[facility]}
                      <span>{t(`facilityLabels.${facility}`)}</span>
                    </button>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="mt-3 w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  {t('addMoreFacilities')}
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <label className="text-sm font-medium">
                {t('features')} <span className="text-muted-foreground">({t('optional')})</span>
              </label>
              <div className="border rounded-lg p-4 space-y-2">
                {formData.features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => toggleFeature(feature.id)}
                    className="flex items-start gap-2 w-full text-left py-1 hover:bg-muted/50 rounded px-2 -mx-2 transition-colors"
                  >
                    {feature.enabled ? (
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                    <span className="text-sm">{t(`featureLabels.${feature.labelKey}`)}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t">
          <Button variant="outline" onClick={handleSaveDraft} className="px-6">
            {t('saveToDraft')}
          </Button>
          <Button onClick={handleSubmit} className="px-6">
            {t('addRoom')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
