/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('../public/img/icon/background.jpg')",
      },
      colors :{
        'tarot-green' : '#7ec352',
        'tarot-blue' : '#27aae1',
        'tarot-pink' : '#f65066',
        'tarot-yellow' : "#ffc843"
      },
      height : {
        600 :'600px'
      },
      maxHeight:{
        600 :'600px'
      },
      maxWidth : {
        1000 : '1000px'
      },
      width :{
        800 : '800px'
      }
    },
  },
  plugins: [],
}