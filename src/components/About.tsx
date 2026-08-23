"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Heart, Sparkle, Truck } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";

const ICONS = [Heart, Sparkle, Truck];

export default function About() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="bg-cream-100 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="font-display text-3xl font-extrabold text-cocoa-900 sm:text-4xl">
            {t.about.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[55ch] text-base leading-relaxed text-cocoa-600">
            {t.about.body}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {t.about.points.map((point, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={point.title}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.5,
                  delay: reduce ? 0 : i * 0.08,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 ring-1 ring-cocoa-900/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-raspberry-50 text-raspberry-500">
                  <Icon size={24} weight="fill" />
                </span>
                <h3 className="font-display text-base font-bold text-cocoa-900">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-cocoa-600">
                  {point.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
