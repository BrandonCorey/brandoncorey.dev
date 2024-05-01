import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*{.js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        loaf: "#f1d492",
      },
      animation: {
        fadeIn: "fadeIn 1.5s",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
    darkMode: "class",
  },
};

export default config;
