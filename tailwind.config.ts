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
      purple: {
        dark: "#9D57F4",
        light: "#9D57F4",
      },
      amber: {
        dark: "#F68511",
        light: "#E46F00",
      },
      back: {
        dark: "#1a1a1a",
        light: "#fafafa",
      },
      font: {
        dark: "#e5e5e5",
        light: "#3a3a3a",
      },
      fontLighter: {
        dark: "#a0a0a0",
        light: "#6f6f6f",
      },
      fontLightest: {
        dark: "#494949",
        light: "#bbbbbb",
      },
    },
  },
};
export default config;
