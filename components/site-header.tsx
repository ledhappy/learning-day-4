"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#catalog", label: "Каталог" },
  { href: "#science", label: "Наука" },
  { href: "#about", label: "О бренде" },
  { href: "#faq", label: "FAQ" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const headerBg = scrolled
    ? "bg-white/85 backdrop-blur-md border-b border-stone-200"
    : "bg-transparent border-b border-transparent";

  const linkBase =
    "text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded";
  const linkColor = scrolled
    ? "text-stone-700 hover:text-stone-900 focus-visible:ring-stone-900"
    : "text-white/90 hover:text-white focus-visible:ring-white";

  const ctaBase =
    "rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const ctaColor = scrolled
    ? "bg-stone-900 text-white hover:bg-stone-800 focus-visible:ring-stone-900"
    : "bg-white text-stone-900 hover:bg-white/90 focus-visible:ring-white";

  const hamburgerColor = scrolled ? "text-stone-900" : "text-white";

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ${headerBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          <Link
            href="#"
            aria-label="Geberich — на главную"
            className="relative h-12 w-12 md:h-14 md:w-14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-900 rounded"
          >
            <Image
              src="/brand/logo-geberich-white.png"
              alt="Geberich"
              fill
              priority
              loading="eager"
              sizes="56px"
              className={`object-contain transition-opacity duration-300 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            />
            <Image
              src="/brand/logo-geberich.png"
              alt=""
              aria-hidden="true"
              fill
              loading="eager"
              sizes="56px"
              className={`object-contain transition-opacity duration-300 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>

          <nav
            aria-label="Основная навигация"
            className="hidden md:flex items-center gap-8"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${linkBase} ${linkColor}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="#retailers"
              aria-label="Перейти к каталогу маркетплейсов"
              className={`hidden md:inline-flex ${ctaBase} ${ctaColor}`}
            >
              Где купить
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Открыть меню"
              aria-expanded={isOpen}
              className={`md:hidden p-2 rounded transition-colors ${hamburgerColor} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                scrolled ? "focus-visible:ring-stone-900" : "focus-visible:ring-white"
              }`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: reduced ? 0 : "100%", opacity: reduced ? 0 : 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: reduced ? 0 : "100%", opacity: reduced ? 0 : 1 }}
            transition={{ duration: reduced ? 0 : 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[60] bg-stone-900 flex flex-col px-6 py-6 md:hidden"
          >
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Закрыть меню"
                className="p-2 text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              >
                <X size={24} />
              </button>
            </div>

            <nav
              aria-label="Мобильная навигация"
              className="flex flex-col gap-6 mt-8"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-light text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white rounded"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="#retailers"
              onClick={() => setIsOpen(false)}
              aria-label="Перейти к каталогу маркетплейсов"
              className="mt-auto inline-flex items-center justify-center w-full rounded-full bg-white text-stone-900 py-4 font-semibold transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            >
              Где купить
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
