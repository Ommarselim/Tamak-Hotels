'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { useIsRTL } from '@/lib/use-rtl';
import Link from 'next/link';
import { useEffect } from 'react';
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
  X,
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

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobile && isOpen && onClose) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobile, isOpen, onClose]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobile, isOpen]);

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
      href: '/front-desk',
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
    <>
      {/* Mobile Backdrop */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-transform duration-300 ease-in-out',
          // Desktop styles
          'lg:relative lg:rounded-tr-[10px] lg:rounded-br-[10px] lg:w-[261px] lg:h-full lg:translate-x-0',
          // Mobile styles
          'fixed top-0 bottom-0 z-50 w-[280px] h-screen',
          isRTL ? 'right-0' : 'left-0',
          // Mobile transform
          isMobile && (isOpen ? 'translate-x-0' : isRTL ? 'translate-x-full' : '-translate-x-full'),
          // RTL specific mobile transforms
          isMobile && isRTL && (isOpen ? 'lg:translate-x-0' : 'translate-x-full lg:translate-x-0'),
          className
        )}
      >
        {/* Mobile Close Button */}
        {isMobile && (
          <button
            onClick={onClose}
            className="lg:hidden absolute top-4 right-4 z-10 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        )}

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
        <nav className="flex-1 px-4 py-5 space-y-2 overflow-y-auto">
          {sidebarItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => isMobile && onClose?.()}
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
    </>
  );
}
