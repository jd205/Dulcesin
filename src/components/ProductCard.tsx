"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react";
import type { Product } from "@/data/products";
import type { Lang } from "@/lib/i18n";
import { useLanguage } from "@/context/LanguageContext";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function ProductCard({
  product,
  lang,
  categoryLabel,
  orderLabel,
}: {
  product: Product;
  lang: Lang;
  categoryLabel: string;
  orderLabel: string;
}) {
  const { t } = useLanguage();

  return (
    <motion.div
      layout
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-md shadow-cocoa-900/5 ring-1 ring-cocoa-900/5 transition-shadow hover:shadow-xl hover:shadow-raspberry-500/10"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-200">
        <Image
          src={product.image}
          alt={product.name[lang]}
          fill
          sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-cocoa-800 backdrop-blur-sm">
          {categoryLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-lg font-bold text-cocoa-900 transition-colors group-hover:text-raspberry-500">
          {product.name[lang]}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-cocoa-600">
          {product.description[lang]}
        </p>

        <a
          href={buildWhatsAppLink(t.whatsappMessage(product.name[lang]))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-cocoa-900 px-4 py-2.5 text-sm font-bold text-white transition-colors group-hover:bg-raspberry-500 active:scale-[0.97]"
        >
          <WhatsappLogo size={16} weight="fill" />
          {orderLabel}
        </a>
      </div>
    </motion.div>
  );
}
