import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        work: ["var(--font-work-sans)"],
        cairo: ["var(--font-cairo)"],
        poppins: ["var(--font-poppins)"],
        battambang: ["var(--font-battambang)"],
        comfortaa: ["var(--font-comfortaa)"],
        luckiest: ["var(--font-luckiest)"],
      },
    },
    screens: {
      mobile: "320px",
      xmobile: "375px",
      "2xmobile": "410px",
      sm: "480px",
      md: "640px",
      "2md": "820px",
      slg: "950px",
      lg: "1024px",
      llg: "1094px",
      xl: "1280px",
      "2xl": "1336px",
    },
    colors: {
      primary: {
        "100": "#FFE8F0",
        DEFAULT: "#EE2B69",
      },
      secondary: {
        "100": "#a8733e",
        DEFAULT: "#BB8146",
      },
      black: {
        "100": "#333333",
        "200": "#141413",
        "300": "#7D8087",
        DEFAULT: "#000000",
      },
      white: {
        "100": "#F7F7F7",
        DEFAULT: "#FFFFFF",
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
};

export default config;
