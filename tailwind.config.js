/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        pine: {
          400: '#3d5c42',
          600: '#2D4530',
          900: '#1a2e1c',
        },
        slate: {
          400: '#8a9aa4',
          600: '#6B7B84',
        },
        sand: {
          100: '#EEE9DA',
          200: '#E1DBC9',
          300: '#C8C2AD',
        },
        brown: {
          600: '#5E4B3B',
        },
        charcoal: {
          700: '#2E2E2E',
          800: '#252525',
          900: '#1C1C1C',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};