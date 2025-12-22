'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { useIsRTL } from '@/lib/use-rtl';
import Link from 'next/link';
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  Home,
  UserCheck,
  UsersRound,
  Star,
  Package,
  Calendar,
  DollarSign,
  StarIcon,
} from 'lucide-react';

interface SidebarItem {
  key: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  active?: boolean;
}

interface AdminSidebarProps {
  className?: string;
  activeItem?: string;
  isMobile?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

export function AdminSidebar({
  className,
  activeItem = 'dashboard',
  isMobile = false,
  isOpen = true,
  onClose,
}: AdminSidebarProps) {
  const t = useTranslations('dashboard');
  const isRTL = useIsRTL();

  const sidebarItems: SidebarItem[] = [
    {
      key: 'title',
      icon: LayoutDashboard,
      href: '/dashboard',
      active: activeItem === 'dashboard',
    },
    {
      key: 'frontDesk',
      icon: Users,
      href: '/dashboard/front-desk',
      active: activeItem === 'frontDesk',
    },
    {
      key: 'reservation',
      icon: CalendarCheck,
      href: '/dashboard/reservations',
      active: activeItem === 'reservation',
    },
    {
      key: 'rooms',
      icon: Home,
      href: '/dashboard/rooms',
      active: activeItem === 'rooms',
    },
    {
      key: 'guests',
      icon: UserCheck,
      href: '/dashboard/guests',
      active: activeItem === 'guests',
    },
    {
      key: 'staff',
      icon: UsersRound,
      href: '/dashboard/staff',
      active: activeItem === 'staff',
    },
    {
      key: 'housekeeping',
      icon: Star,
      href: '/dashboard/housekeeping',
      active: activeItem === 'housekeeping',
    },
    {
      key: 'inventory',
      icon: Package,
      href: '/dashboard/inventory',
      active: activeItem === 'inventory',
    },
    {
      key: 'calendar',
      icon: Calendar,
      href: '/dashboard/calendar',
      active: activeItem === 'calendar',
    },
    {
      key: 'financials',
      icon: DollarSign,
      href: '/dashboard/financials',
      active: activeItem === 'financials',
    },
    {
      key: 'reviews',
      icon: StarIcon,
      href: '/dashboard/reviews',
      active: activeItem === 'reviews',
    },
  ];

  return (
    <aside
      className={cn(
        'bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 rounded-tr-[10px] rounded-br-[10px] w-[261px] h-full flex flex-col',
        className
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-center p-4 border-b border-[#f2f2f2] h-[71px]">
        <h1
          className="text-[28px] font-bold text-[#5d3f36]"
          style={{ fontFamily: 'Caladea, serif' }}
        >
          LOGO
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-5 space-y-2">
        {sidebarItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={cn(
              'flex items-center gap-2.5 px-4 py-2 rounded-lg text-[18px] font-medium transition-colors',
              item.active
                ? 'bg-[#ad8662] text-white'
                : 'text-[#afb2ae] hover:bg-gray-50 dark:hover:bg-gray-800'
            )}
          >
            <item.icon className="w-5 h-5" />
            <span>{t(item.key)}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
