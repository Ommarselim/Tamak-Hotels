'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <button
        className="bg-white dark:bg-gray-800 rounded-[4px] w-[35px] h-[35px] flex items-center justify-center"
        disabled
      >
        <Sun className="h-6 w-6 text-gray-600 dark:text-gray-400" />
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="bg-white dark:bg-gray-800 rounded-[4px] w-[35px] h-[35px] flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          {theme === 'dark' ? (
            <Moon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          ) : (
            <Sun className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          )}
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className={theme === 'light' ? 'bg-gray-100 dark:bg-gray-800' : ''}
        >
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className={theme === 'dark' ? 'bg-gray-100 dark:bg-gray-800' : ''}
        >
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className={theme === 'system' ? 'bg-gray-100 dark:bg-gray-800' : ''}
        >
          <span className="mr-2">💻</span>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
