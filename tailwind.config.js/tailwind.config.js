/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Changed from false to 'class' for future dark mode support
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css" // Added to include global CSS files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        blue: {
          600: '#2563eb', // Ensures consistency with your active link color
        },
        gray: {
          800: '#1f2937', // Matches your text-gray-800
          900: '#111827' // For your dark text
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Optional: better prose styles
  ],
}
