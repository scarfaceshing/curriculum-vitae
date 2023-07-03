/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ['./src/**/*.{js,jsx,ts,tsx}'],
 theme: {
  extend: {
   container: {
    center: true,
   },
   fontFamily: {
    montserrat: ['Montserrat', 'sans-serif'],
   },
   fontWeight: {
    thin: '100',
    hairline: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
   },
   screens: {
    '930-765-screen': [{ max: '930px', min: '765px' }],
   },
   listStyleType: {
    square: 'square',
   },
  },
 },
 plugins: [],
}
