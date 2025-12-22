"use client";

import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  currency?: string;
  icon: React.ReactNode;
  trend: {
    value: string;
    isPositive: boolean;
    label: string;
  };
  variant?: "default" | "highlighted";
  className?: string;
}

export function StatsCard({
  title,
  value,
  currency,
  icon,
  trend,
  variant = "default",
  className,
}: StatsCardProps) {
  return (
    <div
      className={cn(
        "h-[106px] overflow-hidden rounded-lg p-2",
        variant === "highlighted"
          ? "bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900"
          : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
        className
      )}
    >
      <div className="flex flex-col gap-4 p-2">
        {/* Header with title and icon */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
              {title}
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {value}
              </span>
              {currency && (
                <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                  {currency}
                </span>
              )}
            </div>
          </div>
          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded",
              variant === "highlighted"
                ? "bg-amber-100 dark:bg-amber-900/50"
                : "bg-gray-100 dark:bg-gray-700"
            )}
          >
            {icon}
          </div>
        </div>

        {/* Trend indicator */}
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "flex items-center gap-1 rounded-lg px-2 py-1",
              trend.isPositive
                ? "bg-amber-700 dark:bg-amber-800 text-white"
                : "bg-green-700 dark:bg-green-800 text-white"
            )}
          >
            {trend.isPositive ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}
            <span className="text-xs">{trend.value}</span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {trend.label}
          </span>
        </div>
      </div>
    </div>
  );
}
