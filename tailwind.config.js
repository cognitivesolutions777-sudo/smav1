/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sma-green': '#4A7C34',
        'sma-orange': '#E87722',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 3s ease-in-out infinite',
        'bounce': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};
