"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { useIsRTL } from "@/lib/use-rtl";
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
} from "lucide-react";

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
  activeItem = "dashboard",
  isMobile = false,
  isOpen = true,
  onClose,
}: AdminSidebarProps) {
  const t = useTranslations("dashboard");
  const isRTL = useIsRTL();

  const sidebarItems: SidebarItem[] = [
    {
      key: "title",
      icon: LayoutDashboard,
      href: "/dashboard",
      active: activeItem === "dashboard",
    },
    {
      key: "frontDesk",
      icon: Users,
      href: "/dashboard/front-desk",
      active: activeItem === "frontDesk",
    },
    {
      key: "reservation",
      icon: CalendarCheck,
      href: "/dashboard/reservations",
      active: activeItem === "reservation",
    },
    {
      key: "rooms",
      icon: Home,
      href: "/dashboard/rooms",
      active: activeItem === "rooms",
    },
    {
      key: "guests",
      icon: UserCheck,
      href: "/dashboard/guests",
      active: activeItem === "guests",
    },
    {
      key: "staff",
      icon: UsersRound,
      href: "/dashboard/staff",
      active: activeItem === "staff",
    },
    {
      key: "housekeeping",
      icon: Star,
      href: "/dashboard/housekeeping",
      active: activeItem === "housekeeping",
    },
    {
      key: "inventory",
      icon: Package,
      href: "/dashboard/inventory",
      active: activeItem === "inventory",
    },
    {
      key: "calendar",
      icon: Calendar,
      href: "/dashboard/calendar",
      active: activeItem === "calendar",
    },
    {
      key: "financials",
      icon: DollarSign,
      href: "/dashboard/financials",
      active: activeItem === "financials",
    },
    {
      key: "reviews",
      icon: StarIcon,
      href: "/dashboard/reviews",
      active: activeItem === "reviews",
    },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={cn(
          "bg-white dark:bg-gray-900 dark:border-gray-800 overflow-hidden relative w-[261px] h-full transition-transform duration-300 ease-in-out",
          // RTL: border-left and rounded-left corners, LTR: border-right and rounded-right corners
          isRTL
            ? "border-l border-gray-200 rounded-bl-[10px] rounded-tl-[10px]"
            : "border-r border-gray-200 rounded-br-[10px] rounded-tr-[10px]",
          // Mobile positioning
          isMobile &&
            isRTL &&
            "fixed right-0 top-0 z-50 lg:relative lg:translate-x-0",
          isMobile &&
            !isRTL &&
            "fixed left-0 top-0 z-50 lg:relative lg:translate-x-0",
          // Mobile slide animation
          isMobile && !isOpen && isRTL && "translate-x-full",
          isMobile && !isOpen && !isRTL && "-translate-x-full",
          className
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-center p-4 border-b border-gray-200 dark:border-gray-800">
          <h1 className="font-bold text-2xl text-amber-800 dark:text-amber-400 font-serif">
            TAMAK
          </h1>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2 p-4 pt-6">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.key}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  item.active
                    ? "bg-amber-700 dark:bg-amber-800 text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-amber-800 dark:hover:text-amber-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span>{t(item.key)}</span>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
