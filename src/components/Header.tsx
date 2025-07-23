"use client";
import { menuItems } from "@/content/menu";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle body scroll based on mobile menu state
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 ${scrolled ? "bg-dark" : ""}`}>
      <div className="container mx-auto">
        <div
          className={`flex items-center justify-between gap-4 border-b py-4 relative z-50 ${scrolled ? "border-none" : "border-white/20"
            }`}
        >
          <Link href="/" className="inline-flex items-center" onClick={closeMobileMenu}>
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={187}
              height={55}
              className="w-auto h-8 md:h-[55px]"
              priority
              sizes="(max-width: 768px) 100px, 187px"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-yellow-400 hover:underline flex items-center px-2 lg:px-3 py-2 text-sm lg:text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <button
              type="button"
              className="btn-primary-outline !px-6 hover:bg-white hover:text-dark transition-all duration-300"
            >
              Contattaci
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Full Screen */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-dark pt-24 h-screen z-40 overflow-y-auto">
            <div className="container mx-auto px-4">
              <nav>
                <ul className="flex flex-col items-center space-y-3">
                  {menuItems.map((item) => (
                    <li key={item.name} className="w-full text-center">
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-white hover:text-yellow-400 text-lg font-medium"
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li className="w-full text-center !mt-5">
                    <button
                      type="button"
                      className="btn-primary-outline hover:bg-white hover:text-dark transition-all duration-300 px-12 py-4 !h-12 text-xl"
                      onClick={closeMobileMenu}
                    >
                      Contattaci
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;