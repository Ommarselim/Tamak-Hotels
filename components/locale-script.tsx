"use client"

import { useEffect } from "react";
import { useParams } from "next/navigation";

export function LocaleScript() {
  const params = useParams();
  const locale = params?.locale as string;

  useEffect(() => {
    if (typeof window !== "undefined" && locale) {
      const html = document.documentElement;
      html.setAttribute("lang", locale);
      html.setAttribute("dir", locale === "ar" ? "rtl" : "ltr");
    }
  }, [locale]);

  return null;
}



