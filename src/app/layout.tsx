import type { Metadata } from "next";
import { Lilita_One, Plus_Jakarta_Sans } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const displayFont = Lilita_One({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dulcesin: Bakery",
  description:
    "Cakes, cupcakes, and desserts made with care. Pick your craving and order straight from WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable}`}>
      <body className="bg-cream-50 font-sans text-cocoa-800 antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
