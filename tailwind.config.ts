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
        foreground: "rgba(var(--foreground))",
        "primary-text": "rgba(var(--primary-text))",
        "secondary-text": "rgba(var(--secondary-text))",
        "tertiary-text": "rgba(var(--tertiary-text))",
        "muted-text": "rgba(var(--muted-text))",
      },
      fontFamily: {
        albertSans: ["Albert Sans", "sans-serif"],
        unbounded: ["Unbounded", "sans-serif"],
      },
      spacing: {
        custom: "72px",
      },
    },
  },
  plugins: [],
};
export default config;
