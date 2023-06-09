/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark: '#151515',
        light: '#ffffff',
        darkblue: '#052f5f',
        primary: '#0eb582',
        secondary: '#2a374c',
        bglight: '#f0f6f4',
        bgblue: '#18406b',
      },
      fontFamily:{
        'Poppins' :['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'bannerBg': "url('./img/slider-bg2.jpg')",
      }
    },
  },
  plugins: [],
}