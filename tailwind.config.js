/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        diagonalSlide: {
          '0%': { transform: 'translate(-150px, -80px)' },
          '40%': {transform: 'translate(-5px, -20px)'},
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        'diagonal-slide': 'diagonalSlide 0.5s ease-out forwards',
      },
      colors: {
        ktred: '#F53232',
        ktDeepRed: '#D60C0C',
        ktgray:'#231F20',
      }
    },

  },
  plugins: [],
}

