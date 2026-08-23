import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        raspberry: {
          50: "#FDF1F5",
          100: "#FBDCE7",
          200: "#F6B4CD",
          300: "#F084AC",
          400: "#EA5389",
          500: "#E23470",
          600: "#C71F5A",
          700: "#A0174A",
          800: "#7A1339",
          900: "#4F0C25",
        },
        mango: {
          50: "#FFF8EB",
          100: "#FFEDC2",
          200: "#FFDA8A",
          300: "#FFC24D",
          400: "#FFAD1F",
          500: "#F79300",
          600: "#D97600",
          700: "#B15C00",
          800: "#7A3F00",
          900: "#4D2800",
        },
        pistachio: {
          400: "#6FBE8F",
          500: "#4CA374",
          600: "#38855C",
        },
        cream: {
          50: "#FFFCF7",
          100: "#FFF7EC",
          200: "#FCEEDA",
        },
        cocoa: {
          600: "#5B3A2C",
          700: "#43291F",
          800: "#2E1B14",
          900: "#1E110C",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(18px, -22px) scale(1.08)" },
          "66%": { transform: "translate(-14px, 14px) scale(0.94)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.55)" },
          "50%": { boxShadow: "0 0 0 14px rgba(37, 211, 102, 0)" },
        },
      },
      animation: {
        blob: "blob 9s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
