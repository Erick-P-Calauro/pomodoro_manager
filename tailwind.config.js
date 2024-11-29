/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: ["./src/**/*.{html,js,ts}","./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ['"Work Sans"', 'sans-serif'],
      },

      fontSize: {
        'sm-timer': "7.5rem",
        'md-timer': "8rem",
        "desktop-timer": "10rem"
      }
    },

    colors: {
      produtividade: "#EB6B6B",
      produtividade2: "#D75757",
      descansoCurto: "#7BCAAD",
      descansoCurto2: "#67B699",
      descansoLongo: "#98AFE1",
      descansoLongo2: "#849BCD",
      textoNormal: "#FAF6F6",
      textoConfig: "#5E5252",
    },

    screens: {
      'sm-mobile': '320px',
      'md-mobile': '500px',
      'desktop': '960px',
    },
  },
  plugins: [],
}

