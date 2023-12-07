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
        dark: "rgb(157, 87, 244)",
        light: "rgb(157, 87, 244)",
      },
      amber: {
        dark: "rgb(246, 133, 17)",
        light: "rgb(228, 111, 0)",
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
