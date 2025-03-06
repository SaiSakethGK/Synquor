"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button 
        className="p-2 text-white" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-14 left-0 right-0 z-50 bg-black border-b border-white/10 p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className={
                pathname === "/" 
                  ? "text-white" 
                  : "text-white/60 hover:text-white transition-colors"
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/grant-research"
              className={
                pathname === "/grant-research"
                  ? "text-white"
                  : "text-white/60 hover:text-white transition-colors"
              }
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/about-developer"
              className={
                pathname === "/about-developer"
                  ? "text-white"
                  : "text-white/60 hover:text-white transition-colors"
              }
              onClick={() => setIsOpen(false)}
            >
              About Developer
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
} 