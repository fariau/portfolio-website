import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          50: "#EDFBF7",
          100: "#D3F5EA",
          200: "#A6E8D3",
          300: "#71D4B8",
          400: "#3FBB9C",
          500: "#219E82",
          600: "#187F69",
          700: "#136356",
          800: "#0F4A41",
          900: "#0B332D",
          950: "#071F1B",
        },
      },
    },
  },
  plugins: [],
};
export default config;