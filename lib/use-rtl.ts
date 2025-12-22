"use client";

import { useParams } from "next/navigation";

/**
 * Hook to check if the current locale is RTL (Right-to-Left)
 * @returns boolean - true if RTL, false if LTR
 */
export function useIsRTL(): boolean {
  const params = useParams();
  const locale = params.locale as string;

  // Arabic is RTL
  return locale === "ar";
}

/**
 * Hook to get the current direction (rtl or ltr)
 * @returns "rtl" | "ltr"
 */
export function useDirection(): "rtl" | "ltr" {
  const isRTL = useIsRTL();
  return isRTL ? "rtl" : "ltr";
}

/**
 * Hook to get the current locale
 * @returns string - current locale code (e.g., "en" or "ar")
 */
export function useCurrentLocale(): string {
  const params = useParams();
  return params.locale as string;
}
