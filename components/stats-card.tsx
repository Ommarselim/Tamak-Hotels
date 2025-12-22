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
          ? "bg-[#eae2d7] dark:bg-[#3a3530]"
          : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
        className
      )}
    >
      <div className="flex flex-col gap-4 p-2">
        {/* Header with title and icon */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium text-[#949494] dark:text-gray-400">
              {title}
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-black dark:text-white">
                {value}
              </span>
              {currency && (
                <span className="text-base font-medium text-[#afb2ae] dark:text-gray-400">
                  {currency}
                </span>
              )}
            </div>
          </div>
          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded",
              variant === "highlighted"
                ? "bg-[#f7f7f7] dark:bg-gray-800"
                : "bg-[#eae2d7] dark:bg-gray-700"
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
                ? "bg-[#877348] dark:bg-[#a68b5c] text-white"
                : "bg-[#528748] dark:bg-[#6ea863] text-white"
            )}
          >
            {trend.isPositive ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}
            <span className="text-xs">{trend.value}</span>
          </div>
          <span className="text-xs text-[#7f7f7f] dark:text-gray-400">
            {trend.label}
          </span>
        </div>
      </div>
    </div>
  );
}
