/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "src/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {

      fontFamily: {
        helvetica: ["Helvetica","Arial","Sans"],
        helveticaBold: ["Helvetica Bold"],
      },
      keyframes: {

        moveUp: {
          '0%,100%': {transform: 'translateY(30%)'},
          '50%': {transform: 'translateY(0%)'}
        },


        moveFade: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '50%': {
            opacity: '0',
            transform: 'translateY(30%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0pxs)',
          },
        }

      },
      animation: {
        moveFade: 'moveFade 6s ease-in-out infinite',
        moveUp: 'moveUp 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

