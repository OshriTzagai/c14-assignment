"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "ספורט", href: "/" },
    { name: "תיירות", href: "/" },
    { name: "בריאות", href: "/" },
    { name: "טכנולוגיה", href: "/" },
    { name: "מדע", href: "/" },
    { name: "תרבות", href: "/" },
    { name: "פודקאסטים", href: "/" },
    { name: "פוליטי", href: "/" },
    { name: "בעולם", href: "/" },
    { name: "משפט", href: "/" },
    { name: "כלכלה", href: "/" },
    { name: "חדשות", href: "/" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[linear-gradient(90deg,_#C11A20_0%,_#E21F26_100%)] shadow-lg sticky top-0 z-50">
      {/* Main Navigation Container */}
      <div className="px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-center h-14 lg:h-16">
          {/* Left Section - Date and Live Icon */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <div className="text-white text-sm xl:text-base font-bold">
              יום רביעי כ׳ בתמוז התשפ״ה
            </div>
            <div className="flex items-center space-x-1 xl:space-x-2">
              <Image
                src="https://t4.ftcdn.net/jpg/05/59/28/91/360_F_559289170_iqYEig3oOxZT8X97BlqK8x8Eyng6VQHS.jpg"
                alt="LIVE"
                width={40}
                height={40}
                className="rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 hover:shadow-lg"
              />
              {/* <span className="text-white text-base font-bold">LIVE</span> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2 xl:space-x-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-sm xl:text-lg font-semibold hover:text-white-200 hover:scale-105 transition-all duration-300 px-2 xl:px-3 py-1 xl:py-2 rounded-md hover:bg-white/10"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Logo - Now on the right side */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center w-full">
              <Image
                src="https://www.c14.co.il/_next/static/media/logo-c14.589a43b1.svg"
                alt="C14 Logo"
                width={100}
                height={32}
                className="h-6 w-auto xl:h-8"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-200 p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
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
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[linear-gradient(180deg,_#C11A20_0%,_#E21F26_100%)] shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-gray-200 block px-3 py-2 text-lg font-bold transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Date and Live */}
            <div className="pt-4 border-t border-white/20 mt-4">
              <div className="text-white text-base font-bold px-3 py-2">
                יום רביעי כ׳ בתמוז התשפ״ה
              </div>
              <div className="flex items-center space-x-2 px-3 py-2">
                <Image
                  src="https://t4.ftcdn.net/jpg/05/59/28/91/360_F_559289170_iqYEig3oOxZT8X97BlqK8x8Eyng6VQHS.jpg"
                  alt="LIVE"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
