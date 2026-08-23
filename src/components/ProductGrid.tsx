"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { products } from "@/data/products";
import type { CategoryKey } from "@/lib/i18n";
import { useLanguage } from "@/context/LanguageContext";
import ProductCard from "./ProductCard";

const CATEGORY_KEYS: CategoryKey[] = ["cakes", "savory", "sweets"];

export default function ProductGrid() {
  const [active, setActive] = useState<CategoryKey | "all">("all");
  const reduce = useReducedMotion();
  const { t, lang } = useLanguage();

  const filtered = useMemo(
    () =>
      active === "all"
        ? products
        : products.filter((p) => p.categoryKey === active),
    [active],
  );

  return (
    <section id="productos" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="font-display text-3xl font-extrabold text-cocoa-900 sm:text-4xl">
          {t.products.heading}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-cocoa-600">
          {t.products.subtext}
        </p>
      </motion.div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
            active === "all"
              ? "bg-raspberry-500 text-white"
              : "bg-white text-cocoa-700 ring-1 ring-cocoa-900/10 hover:bg-raspberry-50"
          }`}
        >
          {t.products.all}
        </button>
        {CATEGORY_KEYS.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setActive(key)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
              active === key
                ? "bg-raspberry-500 text-white"
                : "bg-white text-cocoa-700 ring-1 ring-cocoa-900/10 hover:bg-raspberry-50"
            }`}
          >
            {t.categories[key]}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {filtered.map((product, i) => (
          <motion.div
            key={product.id}
            layout
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: reduce ? 0 : (i % 4) * 0.06,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            <ProductCard product={product} lang={lang} categoryLabel={t.categories[product.categoryKey]} orderLabel={t.products.order} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
