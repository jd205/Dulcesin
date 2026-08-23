"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, WhatsappLogo } from "@phosphor-icons/react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/context/LanguageContext";

const FLOATERS = [
  { image: "/gallery/cake-mermaid-theme.jpg", alt: "Mermaid two-tier cake", size: 128, top: "4%", left: "8%", delay: 0 },
  { image: "/gallery/cake-pink-disco.jpg", alt: "Pink disco birthday cake", size: 96, top: "56%", left: "0%", delay: 1.2 },
  { image: "/gallery/cake-fairy-rainbow.jpg", alt: "Fairy garden cake", size: 84, top: "72%", left: "58%", delay: 2.1 },
  { image: "/gallery/cake-caramel-rose.jpg", alt: "Caramel rose birthday cake", size: 72, top: "6%", left: "62%", delay: 0.6 },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.09 } },
  };

  const item = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center lg:text-left"
        >
          <motion.h1
            variants={item}
            className="font-display text-4xl font-extrabold leading-[1.1] text-cocoa-900 sm:text-5xl"
          >
            {t.hero.headlineBefore}
            <span className="text-raspberry-500">{t.hero.headlineHighlight}</span>
            {t.hero.headlineAfter}
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-[46ch] text-lg leading-relaxed text-cocoa-700 lg:mx-0"
          >
            {t.hero.subtext}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href={buildWhatsAppLink(t.whatsappMessage(t.placeholderProduct))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-raspberry-500 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-raspberry-500/20 transition-transform hover:-translate-y-0.5 hover:bg-raspberry-600 active:scale-[0.97] sm:w-auto"
            >
              <WhatsappLogo size={20} weight="fill" />
              {t.cta.orderWhatsapp}
            </a>
            <a
              href="#productos"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-cocoa-800/15 bg-white px-7 py-3.5 text-base font-bold text-cocoa-800 transition-transform hover:-translate-y-0.5 hover:border-raspberry-300 active:scale-[0.97] sm:w-auto"
            >
              {t.cta.seeProducts}
              <ArrowDown size={18} weight="bold" />
            </a>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto h-[280px] w-full max-w-md lg:h-[420px]">
          {FLOATERS.map((f, i) => (
            <motion.div
              key={i}
              initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: reduce ? 0 : 0.3 + i * 0.12,
                ease: [0.23, 1, 0.32, 1],
              }}
              className={`absolute overflow-hidden rounded-full shadow-xl ring-4 ring-white ${
                reduce ? "" : "animate-blob"
              }`}
              style={{
                width: f.size,
                height: f.size,
                top: f.top,
                left: f.left,
                animationDelay: `${f.delay}s`,
              }}
            >
              <Image
                src={f.image}
                alt={f.alt}
                fill
                sizes={`${f.size}px`}
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
