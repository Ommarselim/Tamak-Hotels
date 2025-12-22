'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { Search, Calendar, Bell, Globe, ChevronDown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ThemeSwitcher } from '@/components/theme-switcher';

interface DashboardHeaderProps {
  className?: string;
  title?: string;
  subtitle?: string;
  userName?: string;
  userRole?: string;
  userAvatar?: string;
  onMenuClick?: () => void;
}

export function DashboardHeader({
  className,
  title,
  subtitle,
  userName = 'Manar Rabie',
  userRole = 'Admin',
  userAvatar,
  onMenuClick,
}: DashboardHeaderProps) {
  const t = useTranslations('dashboard');

  return (
    <div
      className={cn(
        'flex items-center justify-between gap-[22px] px-6 py-6 bg-[#f7f7f7] dark:bg-gray-900',
        className
      )}
    >
      {/* Mobile menu button */}
      <Button variant="outline" size="icon" className="lg:hidden" onClick={onMenuClick}>
        <Menu className="h-5 w-5" />
      </Button>

      {/* Left side - Title and Search */}
      <div className="flex items-center gap-6 flex-1 min-w-0">
        {/* Title Section */}
        <div className="flex flex-col gap-1 min-w-0 w-[169px]">
          <h1 className="text-[32px] font-semibold text-black dark:text-white leading-normal">
            {title || t('title')}
          </h1>
          <p className="text-sm text-[#a1a1a1] dark:text-gray-500">{subtitle || t('helloAdmin')}</p>
        </div>

        {/* Search Input */}
        <div className="hidden md:flex items-center gap-2.5 bg-white dark:bg-gray-800 border border-[#e9eaec] dark:border-gray-700 rounded-[10px] px-5 py-2.5 w-[392px]">
          <Search className="w-5 h-5 text-[#737373] dark:text-gray-500" />
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            className="flex-1 text-sm text-[#737373] dark:text-gray-300 bg-transparent outline-none placeholder:text-[#737373] dark:placeholder:text-gray-500"
          />
        </div>

        {/* Date Range Picker */}
        <div className="hidden lg:flex items-center gap-2.5 bg-white dark:bg-gray-800 border border-[#e9eaec] dark:border-gray-700 rounded-[10px] px-5 py-2.5">
          <span className="text-sm text-[#737373] dark:text-gray-300 whitespace-nowrap">
            {t('dateRange')}
          </span>
          <Calendar className="w-5 h-5 text-[#737373] dark:text-gray-500" />
        </div>
      </div>

      {/* Right side - User Profile and Actions */}
      <div className="flex items-center gap-5">
        {/* User Profile */}
        <div className="flex items-center gap-1.5">
          <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden">
            {userAvatar ? (
              <img src={userAvatar} alt={userName} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-semibold">
                {userName.charAt(0)}
              </div>
            )}
          </div>
          <div className="hidden sm:flex flex-col gap-1">
            <div className="flex items-center gap-0.5">
              <span className="text-sm font-medium text-[#080808] dark:text-gray-100">
                {userName}
              </span>
              <ChevronDown className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            </div>
            <span className="text-sm text-gray-400 dark:text-gray-500">{userRole}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1 lg:gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 lg:w-9 lg:h-9 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 relative"
          >
            <Bell className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600 dark:text-gray-400" />
            <div className="absolute top-1 right-1 lg:top-2 lg:right-2 w-2 h-2 bg-red-500 rounded-full" />
          </Button>
        </div>
      </div>
    </div>
  );
}
