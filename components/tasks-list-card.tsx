'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { colors } from '@/lib/design-tokens';
import { Plus, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface TasksListCardProps {
  className?: string;
}

interface Task {
  id: number;
  date: string;
  department: string;
  description: string;
  completed: boolean;
}

const initialTasks: Task[] = [
  {
    id: 1,
    date: '12Jan 2026',
    department: 'Reception',
    description: 'Approve / reject pending reservations',
    completed: false,
  },
  {
    id: 2,
    date: '12Jan 2026',
    department: 'Housekeeping',
    description: 'Approve / reject pending reservations',
    completed: true,
  },
  {
    id: 3,
    date: '12Jan 2026',
    department: 'Reception',
    description: 'Approve / reject pending reservations',
    completed: false,
  },
];

export function TasksListCard({ className }: TasksListCardProps) {
  const t = useTranslations('dashboard');
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  return (
    <div
      className={cn(
        'bg-[var(--color-surface)] dark:bg-gray-800 overflow-hidden rounded-[10px] relative',
        className
      )}
      style={{ height: '218px' }}
    >
      <div className="px-3 py-3">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3
            className="font-semibold"
            style={{
              fontSize: '16px',
              lineHeight: 'normal',
              color: colors.semantic.text.primary,
            }}
          >
            {t('tasks')}
          </h3>
          <button
            className="rounded-[4px] flex items-center justify-center"
            style={{
              width: '24px',
              height: '24px',
              backgroundColor: colors.neutral[950],
            }}
          >
            <Plus size={16} style={{ color: colors.semantic.text.inverse }} />
          </button>
        </div>

        {/* Tasks List */}
        <div className="flex flex-col gap-2">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-start gap-1.5">
              {/* Checkbox */}
              <button
                onClick={() => toggleTask(task.id)}
                className="flex-shrink-0 rounded-[2px] flex items-center justify-center"
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: task.completed ? colors.primary[400] : 'transparent',
                  border: task.completed ? 'none' : `2px solid ${colors.neutral[200]}`,
                }}
              >
                {task.completed && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6L5 9L10 3"
                      stroke={colors.neutral[950]}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>

              {/* Task Content */}
              <div
                className="flex-1 px-1.5 py-1.5 rounded-[4px]"
                style={{
                  backgroundColor: task.completed ? colors.primary[400] : colors.primary[100],
                  height: '46px',
                }}
              >
                <div className="flex flex-col gap-1">
                  {/* Date and Department */}
                  <div className="flex items-start justify-between">
                    <span
                      className="font-normal"
                      style={{
                        fontSize: '10px',
                        color: task.completed ? '#d4d4d4' : '#838383',
                      }}
                    >
                      {task.date}
                    </span>
                    <div className="flex items-center gap-0.5">
                      <span
                        className="font-normal"
                        style={{
                          fontSize: '10px',
                          lineHeight: '1.55',
                          color: task.completed ? '#d4d4d4' : '#838383',
                        }}
                      >
                        {task.department}
                      </span>
                      <ChevronDown
                        size={14}
                        style={{ color: task.completed ? '#d4d4d4' : '#838383' }}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="font-normal"
                    style={{
                      fontSize: '10px',
                      lineHeight: '1.55',
                      color: colors.neutral[950],
                    }}
                  >
                    {task.description}
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
