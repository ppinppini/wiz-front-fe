/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ktred: '#F53232',
        ktDeepRed: '#D60C0C',
        ktgray:'#231F20',
      }
    },
  },
  plugins: [],
}

