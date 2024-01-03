/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%':{ transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(0%)'}
        },
        slideback:{
          '0%':{ transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(100%)'}
        },
      },
      animation: {
        slide: 'slide 0.6s ease both',
        slideback: 'slideback 0.5s ease both'
      }
    },
    fontFamily:{
      'robot': ['Roboto', 'sans-serif'],
      'dance': ['Dancing Script', 'cursive'],
      'pixel': ['Pixelify Sans']
    }
  },
  plugins: [],
}