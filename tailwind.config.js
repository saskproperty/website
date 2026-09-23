/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f4',
          100: '#dcf0e3',
          200: '#bbe1c9',
          300: '#8bcca8',
          400: '#57af85',
          500: '#319066',
          600: '#237451',
          700: '#1d5d43',
          800: '#1a4a38',
          900: '#163c2f',
          950: '#0a241a',
        },
        accent: {
          50: '#fffef5',
          100: '#fefacc',
          200: '#fcf5a3',
          300: '#f9ee6b',
          400: '#f4df37',
          500: '#e6c414',
          600: '#c79c0c',
          700: '#9d740e',
          800: '#825c14',
          900: '#6d4c17',
        },
        neutral: {
          50: '#f8faf9',
          100: '#f1f5f3',
          200: '#e4ebe7',
          300: '#cbd8d1',
          400: '#9ab1a5',
          500: '#6f8b7d',
          600: '#567066',
          700: '#475b53',
          800: '#3a4a44',
          900: '#313f3a',
          950: '#1a2622',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
