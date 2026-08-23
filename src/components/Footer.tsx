"use client";

import { Cake, WhatsappLogo } from "@phosphor-icons/react";
import { BUSINESS_NAME } from "@/lib/config";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-cocoa-900 py-10 text-cream-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
        <div className="flex items-center gap-2 font-display text-lg font-bold">
          <Cake size={22} weight="fill" className="text-mango-300" />
          {BUSINESS_NAME}
        </div>

        <p className="max-w-md text-sm leading-relaxed text-cream-100/70">
          {t.footer.body}
        </p>

        <a
          href={buildWhatsAppLink(t.whatsappMessage(t.placeholderProduct))}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-cream-100/20 px-4 py-2 text-sm font-semibold text-cream-100 transition-colors hover:border-mango-300 hover:text-mango-300"
        >
          <WhatsappLogo size={16} weight="fill" />
          {t.footer.whatsapp}
        </a>
      </div>
    </footer>
  );
}
