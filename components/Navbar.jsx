"use client";
import { assets, navLinks } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeToggle from "./ui/ThemeToggle";

const ArrowIcon = () => (
  <svg className="w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div
        className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden"
        aria-hidden="true"
      >
        <Image src={assets.header_bg_color} alt="" className="w-full" priority />
      </div>

      <nav
        className={`w-full fixed top-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme/70 dark:shadow-white/10"
            : ""
        }`}
      >
        <a href="#top" aria-label="Sumit Singh — go to top">
          <Image
            src={assets.logo}
            alt="Sumit Singh logo"
            className="w-16 md:w-20 cursor-pointer rounded-full object-contain dark:hidden"
          />
          <Image
            src={assets.logo_dark}
            alt="Sumit Singh logo"
            className="w-16 md:w-20 cursor-pointer rounded-full object-contain hidden dark:block"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 xl:px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                className="font-Ovo transition-colors hover:text-violet-600 dark:hover:text-violet-300"
                href={href}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-8 py-2.5 border border-gray-400 hover:border-gray-900 rounded-full font-Ovo dark:border-white/50 transition-colors hover:bg-gray-100 dark:hover:bg-darkHover dark:hover:border-gray-300"
          >
            Contact
            <ArrowIcon />
          </a>

          <button
            className="md:hidden grid place-items-center w-10 h-10"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <ul
        id="mobile-menu"
        inert={!isMenuOpen}
        aria-hidden={!isMenuOpen}
        className={`md:hidden flex flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-darkHover dark:text-white transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute right-6 top-6 grid place-items-center w-8 h-8"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <svg className="w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a className="font-Ovo" onClick={closeMenu} href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
