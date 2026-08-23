"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Lang } from "@/lib/i18n";

const OPTIONS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center gap-0.5 rounded-full bg-white p-1 ring-1 ring-cocoa-900/10 ${className}`}
    >
      {OPTIONS.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => setLang(option.code)}
          aria-pressed={lang === option.code}
          className={`rounded-full px-3 py-1.5 text-xs font-bold tracking-wide transition-colors ${
            lang === option.code
              ? "bg-raspberry-500 text-white"
              : "text-cocoa-600 hover:text-raspberry-600"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
