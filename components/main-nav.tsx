"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      <Link
        href="/"
        className={
          pathname === "/" 
            ? "text-white border-b border-white" 
            : "text-white/60 hover:text-white transition-colors"
        }
      >
        Home
      </Link>
      <Link
        href="/grant-research"
        className={
          pathname === "/grant-research"
            ? "text-white border-b border-white"
            : "text-white/60 hover:text-white transition-colors"
        }
      >
        Solutions
      </Link>
      <Link
        href="/about-developer"
        className={
          pathname === "/about-developer"
            ? "text-white border-b border-white"
            : "text-white/60 hover:text-white transition-colors"
        }
      >
        About Developer
      </Link>
    </nav>
  );
} 