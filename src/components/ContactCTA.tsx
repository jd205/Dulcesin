"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactCTA() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section id="contacto" className="relative overflow-hidden bg-raspberry-500 py-20 lg:py-24">
      <div
        aria-hidden
        className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-mango-300/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-raspberry-300/40 blur-3xl"
      />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="relative mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
          {t.contact.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-[48ch] text-base leading-relaxed text-raspberry-50">
          {t.contact.body}
        </p>

        <a
          href={buildWhatsAppLink(t.whatsappMessage(t.placeholderProduct))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-raspberry-600 shadow-lg transition-transform hover:-translate-y-0.5 active:scale-[0.97]"
        >
          <WhatsappLogo size={20} weight="fill" />
          {t.cta.orderWhatsapp}
        </a>
      </motion.div>
    </section>
  );
}
