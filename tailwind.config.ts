import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "quartz":"#4B4B4B",
        "chinese-black":"#0B1215",
        "smoky-black":"#0C0C0C",
        "ghost-white":"#F9F9F9"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        geist: ['var(--font-geist)', 'sans-serif'],
        aeonik: ['var(--font-aeonik)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
