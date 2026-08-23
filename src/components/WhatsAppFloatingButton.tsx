"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatsAppFloatingButton() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();

  return (
    <motion.a
      href={buildWhatsAppLink(t.whatsappMessage(t.placeholderProduct))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.cta.orderWhatsapp}
      initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg sm:bottom-6 sm:right-6 ${
        reduce ? "" : "animate-pulse-glow"
      }`}
    >
      <WhatsappLogo size={28} weight="fill" />
    </motion.a>
  );
}
