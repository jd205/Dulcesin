"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cake, List, WhatsappLogo, X } from "@phosphor-icons/react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { BUSINESS_NAME } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#productos", label: t.nav.products },
    { href: "#nosotros", label: t.nav.about },
    { href: "#contacto", label: t.nav.contact },
  ];

  const orderHref = buildWhatsAppLink(t.whatsappMessage(t.placeholderProduct));

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-cream-50/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="flex items-center gap-2 font-display text-xl font-bold text-raspberry-600"
        >
          <Cake size={28} weight="fill" className="text-raspberry-500" />
          {BUSINESS_NAME}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-cocoa-700 transition-colors hover:text-raspberry-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <a
            href={orderHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-raspberry-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-raspberry-600 active:scale-[0.97]"
          >
            <WhatsappLogo size={18} weight="fill" />
            {t.cta.orderWhatsapp}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full text-cocoa-700 transition-colors hover:bg-raspberry-50"
          >
            {menuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden border-t border-raspberry-100 bg-cream-50 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-semibold text-cocoa-700 transition-colors hover:bg-raspberry-50 hover:text-raspberry-600"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={orderHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-raspberry-500 px-5 py-3 text-sm font-bold text-white active:scale-[0.97]"
              >
                <WhatsappLogo size={18} weight="fill" />
                {t.cta.orderWhatsapp}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
