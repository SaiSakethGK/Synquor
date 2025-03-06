"use client";

import { EnvVarWarning } from "@/components/env-var-warning";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Geist } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { MobileNav } from "@/components/mobile-nav";
import { MainNav } from "@/components/main-nav";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"], display: "swap" });
const brandName = `0rbi\u0394ccel`;

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return nothing during SSR to prevent hydration issues
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <div className="relative flex min-h-screen flex-col bg-black text-white">
        <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
          <div className="container flex h-14 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-white orbit-font brand-glow text-lg">
                0rbiΔccel
              </span>
            </Link>
            <div className="flex items-center justify-end space-x-4">
              <MainNav />
              <MobileNav />
            </div>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </div>
    </ThemeProvider>
  );
} 