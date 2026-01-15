"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logoImage from "../images/logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 flex h-16 items-center justify-between bg-white/60 px-4 text-black backdrop-blur-sm md:h-20 md:px-8">
      <Link href="/" className="relative flex h-full items-end">
        <Image
          src={logoImage}
          alt="Tegelhandel Rob v.d. Boer logo"
          className="h-full w-auto translate-y-2 object-contain scale-110 md:scale-125 md:translate-y-4"
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 text-base font-medium uppercase tracking-wide">
        <Link
          href="/"
          className="transition-colors hover:text-gray-700"
        >
          home
        </Link>
        <Link
          href="/assortiment"
          className="transition-colors hover:text-gray-700"
        >
          assortiment
        </Link>
        <Link
          href="/showroom"
          className="transition-colors hover:text-gray-700"
        >
          showroom
        </Link>
        <Link
          href="/over-ons"
          className="transition-colors hover:text-gray-700"
        >
          over ons
        </Link>
        <Link
          href="/contact"
          className="transition-colors hover:text-gray-700"
        >
          contact
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex items-center justify-center w-10 h-10 text-black"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 md:hidden">
          <div className="flex flex-col px-4 py-4 space-y-3">
            <Link
              href="/"
              className="text-sm font-medium uppercase tracking-wide transition-colors hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              home
            </Link>
            <Link
              href="/assortiment"
              className="text-sm font-medium uppercase tracking-wide transition-colors hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              assortiment
            </Link>
            <Link
              href="/showroom"
              className="text-sm font-medium uppercase tracking-wide transition-colors hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              showroom
            </Link>
            <Link
              href="/over-ons"
              className="text-sm font-medium uppercase tracking-wide transition-colors hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              over ons
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium uppercase tracking-wide transition-colors hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
