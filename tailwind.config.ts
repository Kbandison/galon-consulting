import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'mobile': '640px',
      // => @media (min-width: 640px) { ... }

      'tablet': '768px',
      // => @media (min-width: 1024px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 640px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }

      'ultra': '1441px',
      // => @media (min-width: 640px) { ... }
    },
    extend: {
      colors: {
        butn: "#FF6B35",
        char: "#6C5A49",
        background: "#FFFBDB"

      },
    },
  },
  plugins: [],
} satisfies Config;
