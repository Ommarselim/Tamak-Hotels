"use client"

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("common");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8 text-center max-w-2xl"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          {t("welcome")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg text-muted-foreground"
        >
          {t("welcomeBack")} - Professional UI, Animations & i18n Setup
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            variant="default"
            size="lg"
          >
            {mounted ? (theme === "dark" ? "☀️ Light" : "🌙 Dark") : "Theme"}
          </Button>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="lg">
              {t("hello")}
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/dashboard">
              <Button variant="secondary" size="lg">
                Go to Dashboard
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 p-6 rounded-lg border bg-card text-card-foreground shadow-sm"
        >
          <h2 className="text-2xl font-semibold mb-4">Libraries Installed:</h2>
          <ul className="text-left space-y-2 text-muted-foreground">
            <li>✅ shadcn/ui - Professional UI Components</li>
            <li>✅ Motion - High-class animations</li>
            <li>✅ next-intl - Multi-language & RTL support</li>
            <li>✅ next-themes - Dark mode support</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}
