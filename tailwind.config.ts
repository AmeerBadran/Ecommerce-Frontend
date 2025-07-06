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
      width: {
        sidebar: "280px",
        "sidebar-small": "85px",
        content: "calc(100% - 280px)",
      },

      height: {
        header: "64px",
        footer: "48px",
        main: "calc(100vh - 64px - 48px)",
      },
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
      llg: "1120px",
      xl: "1280px",
      "2xl": "1336px",
    },
    colors: {
      primary: {
        "100": "#FFE8F0",
        DEFAULT: "#EE2B69",
      },
      secondary: {
        "100": "#d98530",
        DEFAULT: "#c27324",
      },
      black: {
        "100": "#333333",
        "200": "#141413",
        "300": "#7D8087",
        "400": "#1f2128",
        DEFAULT: "#000000",
      },
      white: {
        "100": "#F7F7F7",
        "200": "#F2F2F2",
        DEFAULT: "#FFFFFF",
      },
      "my-color": "#0F62FE",
    },
  },
  plugins: [tailwindcssAnimate, typography],
};

export default config;
