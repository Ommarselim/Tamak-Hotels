'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { colors } from '@/lib/design-tokens';
import { HomeIcon, LogOut, MoreHorizontal } from 'lucide-react';

interface RecentActivitiesCardProps {
  className?: string;
}

interface Activity {
  id: number;
  time: string;
  title: string;
  description: string;
  icon: 'home' | 'checkout';
  iconBg: string;
}

const activities: Activity[] = [
  {
    id: 1,
    time: '03:45PM',
    title: 'Room Cleaning Completed',
    description: 'Maria Gonzalez cleaned and prepared Room 204 for new guests.',
    icon: 'home',
    iconBg: '#e5a179',
  },
  {
    id: 2,
    time: '11:45AM',
    title: 'Guest Check-Out',
    description:
      'Manar Rabie completed check-out process and updated room availability for Room 305.',
    icon: 'checkout',
    iconBg: colors.primary[100],
  },
  {
    id: 3,
    time: '11:45AM',
    title: 'Guest Check-Out',
    description:
      'Manar Rabie completed check-out process and updated room availability for Room 305.',
    icon: 'checkout',
    iconBg: colors.primary[100],
  },
];

export function RecentActivitiesCard({ className }: RecentActivitiesCardProps) {
  const t = useTranslations('dashboard');

  return (
    <div
      className={cn(
        'bg-[var(--color-surface)] dark:bg-gray-800 overflow-hidden rounded-[10px] relative',
        className
      )}
      style={{ height: '275px' }}
    >
      <div className="px-3 py-3">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h3
            className="font-semibold"
            style={{
              fontSize: '16px',
              lineHeight: 'normal',
              color: colors.semantic.text.primary,
            }}
          >
            {t('recentActivities')}
          </h3>
          <button>
            <MoreHorizontal size={20} style={{ color: colors.neutral[400] }} />
          </button>
        </div>

        {/* Activities List */}
        <div className="flex flex-col gap-3">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-1">
              {/* Icon */}
              <div
                className="flex-shrink-0 rounded-[15px] flex items-center justify-center"
                style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: activity.iconBg,
                }}
              >
                {activity.icon === 'home' ? (
                  <HomeIcon size={16} style={{ color: colors.semantic.text.inverse }} />
                ) : (
                  <LogOut size={16} style={{ color: colors.neutral[400] }} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-0.5" style={{ width: '205px' }}>
                {/* Time */}
                <p
                  className="font-normal"
                  style={{
                    fontSize: '8px',
                    lineHeight: 'normal',
                    color: colors.neutral[400],
                  }}
                >
                  {activity.time}
                </p>

                {/* Title and Description */}
                <div className="flex flex-col gap-0.5">
                  <p
                    className="font-medium"
                    style={{
                      fontSize: '10px',
                      lineHeight: 'normal',
                      color: colors.neutral[950],
                    }}
                  >
                    {activity.title}
                  </p>
                  <p
                    className="font-normal"
                    style={{
                      fontSize: '8px',
                      lineHeight: '1.55',
                      color: colors.neutral[400],
                    }}
                  >
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
