import { Card } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  trend: number;
  trendLabel: string;
  icon: React.ReactNode;
  iconBgColor?: string;
}

export function StatCard({
  title,
  value,
  trend,
  trendLabel,
  icon,
  iconBgColor = 'bg-primary/10',
}: StatCardProps) {
  const isPositive = trend >= 0;

  return (
    <Card className="p-4">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs text-muted-foreground mb-2">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
        <div className={cn('rounded-lg p-2', iconBgColor)}>{icon}</div>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <div
          className={cn(
            'flex items-center gap-1 px-2 py-1 rounded',
            isPositive
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
              : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
          )}
        >
          {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
          <span className="font-medium">{Math.abs(trend)}%</span>
        </div>
        <span className="text-muted-foreground">{trendLabel}</span>
      </div>
    </Card>
  );
}
