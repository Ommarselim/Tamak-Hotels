import { RoomsPage } from '@/components/rooms';
import { BaseLayout } from '@/components/base-layout';

export default function RoomsRoute() {
  return (
    <BaseLayout activeItem="rooms">
      <RoomsPage />
    </BaseLayout>
  );
}
