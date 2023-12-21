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
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "avenir next",
        "avenir",
        "segoe ui",
        "helvetica neue",
        "helvetica",
        "Cantarell",
        "Ubuntu",
        "roboto",
        "noto",
        "arial",
        "sans-serif",
      ],
    },
    colors: {
      blue: {
        dark: "#8fcafc",
        light: "#0054b6",
      },
      amber: {
        dark: "#ff9581",
        light: "#b14c00",
      },
      l0: {
        dark: "#242120",
        light: "#fafafa",
      },
      l1: {
        dark: "#494949",
        light: "#bbbbbb",
      },
      l2: {
        dark: "#a0a0a0",
        light: "#6f6f6f",
      },
      l3: {
        dark: "#e5e5e5",
        light: "#3a3a3a",
      },
    },
  },
};
export default config;
