import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        boxIn: "2px 2px 5px rgba(161, 172, 170, 0.90) inset",
        boxOut: "2px 2px 5px rgba(161, 172, 170, 0.90)",
      },
      animation: {
        "rotate-center": "rotate-center 1.0s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite  both"
      },
      keyframes: {
        "rotate-center": {
          "0%": {
            transform: "rotate(-30deg)"
          },
          to: {
            transform: "rotate(330deg)"
          }
        }
      },
    },
    colors: {
      background: "#D6E5E3",
      darkbackground: "#183D4D",
      font: "#6B7271",
      darkfont: "#E0E0E0",
      alart: "EE2E31",
    },
  },
  darkMode: "class",
};
export default config;
