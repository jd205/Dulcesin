import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        raspberry: {
          50: "#FDF3F3",
          100: "#FBE2E4",
          200: "#F5C6CC",
          300: "#EBA3AF",
          400: "#D67D91",
          500: "#B3546E",
          600: "#984059",
          700: "#7A3049",
          800: "#582435",
          900: "#341620",
        },
        mango: {
          50: "#FDF8ED",
          100: "#FAEECC",
          200: "#F2DA9B",
          300: "#E7C06E",
          400: "#D6A64C",
          500: "#C08D3A",
          600: "#9C7029",
          700: "#79561F",
          800: "#573D16",
          900: "#33240D",
        },
        pistachio: {
          50: "#F6F8F1",
          100: "#E9EFDF",
          200: "#D2DFC0",
          300: "#B4CC9B",
          400: "#93AE79",
          500: "#7B9861",
          600: "#607849",
          700: "#4A5C38",
          800: "#363F29",
          900: "#21271A",
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
