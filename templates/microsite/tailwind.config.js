/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          500: '#0284c7',
          600: '#0369a1',
          700: '#035485',
          800: '#075985',
          900: '#0c4a6e',
          dark: '#0f172a',
        },
        whatsapp: {
          500: '#25D366',
          600: '#1da851',
          700: '#14803c',
        }
      }
    },
  },
  plugins: [],
}
