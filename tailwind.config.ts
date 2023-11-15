import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
    colors: {
      back: {
        dark: "#1a1a1a",
        light: "#fafafa",
      },
      front: {
        dark: "#e5e5e5",
        light: "#3a3a3a",
      },
      frontDimmed: {
        dark: "#a0a0a0",
        light: "#6f6f6f",
      },
    },
  },
};
export default config;
