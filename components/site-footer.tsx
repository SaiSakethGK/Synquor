"use client";

import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-6 bg-black">
      <div className="container flex flex-col items-center justify-center gap-4">
        <p className="text-xs text-white/60 text-center">
          By{" "}
          <Link
            href="/about-developer"
            className="underline underline-offset-4 hover:text-white/80 transition-colors"
          >
            Sai Saketh Gooty Kase
          </Link>
        </p>
        <p className="text-center text-sm text-white/70">
          © 2025 <span className="orbit-font brand-glow text-lg">0rbiΔccel</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 