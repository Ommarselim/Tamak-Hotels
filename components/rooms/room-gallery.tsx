'use client';

import { useState } from 'react';
import { RoomImage } from '@/lib/types/room';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface RoomGalleryProps {
  coverImage: string;
  gallery: RoomImage[];
  roomName: string;
}

export function RoomGallery({ coverImage, gallery, roomName }: RoomGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(coverImage);

  const allImages = [{ id: 'cover', url: coverImage, alt: roomName }, ...gallery];

  const displayedThumbnails = allImages.slice(0, 4);
  const remainingCount = allImages.length - 4;

  return (
    <div className="space-y-3">
      {/* Main Image */}
      <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-muted">
        <Image src={selectedImage} alt={roomName} fill className="object-cover" priority />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {displayedThumbnails.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image.url)}
            className={cn(
              'relative aspect-[4/3] rounded-md overflow-hidden bg-muted transition-all',
              selectedImage === image.url ? 'ring-2 ring-primary' : 'hover:opacity-80'
            )}
          >
            <Image src={image.url} alt={image.alt} fill className="object-cover" />
            {index === 3 && remainingCount > 0 && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">+{remainingCount}</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
