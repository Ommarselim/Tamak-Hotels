'use client';

import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { useRouter, usePathname } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LanguageSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="bg-white dark:bg-gray-800 rounded-[4px] w-[35px] h-[35px] flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
          disabled={isPending}
        >
          <Globe className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          <span className="sr-only">Switch language</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => onSelectChange('en')}
          className={currentLocale === 'en' ? 'bg-gray-100 dark:bg-gray-800' : ''}
        >
          <span className="mr-2">🇬🇧</span> English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onSelectChange('ar')}
          className={currentLocale === 'ar' ? 'bg-gray-100 dark:bg-gray-800' : ''}
        >
          <span className="mr-2">🇸🇦</span> العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
