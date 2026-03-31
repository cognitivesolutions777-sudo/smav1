const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sma-green": "#7CB394",
        "sma-green-dark": "#6BA37D",
        "sma-green-light": "#B5D8C2",
        "sma-warm": "#DBA07A",
        "sma-warm-light": "#EBC4A8",
        "sma-cream": "#F7F4EF",
        "sma-text": "#2C3830",
        "sma-text-light": "#5A6E5E",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      animation: {
        pulse: "pulse 3s ease-in-out infinite",
        bounce: "bounce 2s infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
