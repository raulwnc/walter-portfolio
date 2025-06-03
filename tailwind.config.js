/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
  "./app/**/*.{js,ts,jsx,tsx}",        // for Next.js 13+ App Router support
  "./pages/**/*.{js,ts,jsx,tsx}",      // for older Pages Router
  "./components/**/*.{js,ts,jsx,tsx}", // reusable UI components
  "./styles/**/*.{css,scss}"           // custom styles or globals
],
  safelist: [
  'text-center', 'text-gray-800', 'font-sans',
  'py-12', 'px-4', 'sm:px-6', 'sm:py-20', 'md:px-8',
  'bg-gradient-to-br', 'from-blue-50', 'to-blue-100',
  'text-blue-600', 'font-medium', 'border-b-2', 'border-blue-600'
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
        blue: {
          600: '#2563eb',
        },
        gray: {
          800: '#1f2937',
          900: '#111827'
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};


