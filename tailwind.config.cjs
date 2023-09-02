/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: ["wp-block-button__link", "mb-10"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "Trebuchet MS", "Helvetica", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      purple: "#9B5DE5",
      "dark-purple": "#41294A",
      brightsun: {
        DEFAULT: "#FEE440",
      },
      cyan: {
        DEFAULT: "#41ECE0",
        300: "#EBFDFB",
      },
      magenta: "#EB002B",
      "dark-gray": "#595959",
      dark: "#242424",
      "dark-500": "rgba(36, 36, 36, 0.75)",
      slate: {
        100: "#f1f5f9",
        200: "#e2e8f0",
        400: "#94a3b8",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
