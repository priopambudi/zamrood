import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        "primary-text": "rgba(var(--primary-text))",
      },
      fontFamily: {
        albertSans: ["Albert Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
