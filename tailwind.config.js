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
        bggreen: '#dbf4ec',
        bggreenlight: '#f7fdfb',
      },
      fontFamily:{
        'Poppins' :['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'bannerBg': "url('./img/slider-bg2.jpg')",
        'lessonBg': "url('./img/shape.png')",
      },
      keyframes: {
        sliding1:{
          from: {
            left:'0',
          },
          to: {
            left:'100%',
          },
        },
        sliding2:{
          from: {
            right:'0',
          },
          to: {
            right:'100%',
          },
        }
      },
      animation:{
        sliding1: 'sliding1 3s linear infinite',
        sliding2: 'sliding2 3s linear infinite',
      }
    },
  },
  plugins: [],
}