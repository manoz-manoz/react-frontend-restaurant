/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Vite + React files
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'scroll-loop': 'scroll 10s linear infinite',
      },
      colors: {
        clifford: '#da373d', // custom color
      },
      fontFamily: {
        custom: ['Nunito', 'sans-serif'], // custom font
        bebas:['Bebas Neue', 'sans-serif']
      },
    },
  },
  plugins: [],
}
