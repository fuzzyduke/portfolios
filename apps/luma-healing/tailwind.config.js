/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luma: {
          lavender: {
            50: '#FAF7FC',
            100: '#F4EFF8',
            200: '#E8DCF0',
            300: '#D9C8E5',
            400: '#C8B4D9', // Signature lavender
            500: '#B096C4',
            600: '#9476AB',
            700: '#75588C',
            800: '#563D69',
            900: '#342244',
          },
          sage: {
            50: '#F7F9F6',
            100: '#EEF2EC',
            200: '#DCE4DA',
            300: '#C3D2C0',
            400: '#A7B8A1', // Signature sage
            500: '#8A9D84',
            600: '#6C7E66',
            700: '#52614E',
          },
          gold: {
            50: '#FCFBF6',
            100: '#F9F5EA',
            200: '#F2E8CE',
            300: '#E7D6A9',
            400: '#D9B77A', // Signature warm gold
            500: '#C49C57',
            600: '#A37C39',
          },
          cream: {
            50: '#FDFCF9',
            100: '#F6F3EE', // Signature cream / off-white
            200: '#ECE6DB',
            300: '#DFD6C5',
          },
          cosmic: '#1E1926',
        },
        whatsapp: {
          500: '#25D366',
          600: '#1da851',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 8s ease-in-out infinite',
        'glow-spin': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
