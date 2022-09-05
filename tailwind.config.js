/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Oswald", "ui-sans-serif", "system-ui"],
        mono: ["Krona One", "ui-monospace"],
      },
      colors: {
        green: {
          50: "#E9FBF0",
          100: "#CFF7DE",
          200: "#9FEFBC",
          300: "#6FE69B",
          400: "#40DE7A",
          500: "#22C55E",
          600: "#1B9D4B",
          700: "#147538",
          800: "#0D4E25",
          900: "#072713",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-img": {
          "background-image": "url(/bg.png)",
        },
      };

      addUtilities(utilities);
    }),
  ],
};
