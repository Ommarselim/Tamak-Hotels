import { BaseLayout } from '@/components/base-layout';
import { FrontDeskPage } from '@/components/front-desk/front-desk-page';

export default function FrontDesk() {
  return (
    <BaseLayout activeItem="frontDesk">
      <FrontDeskPage />
    </BaseLayout>
  );
}
