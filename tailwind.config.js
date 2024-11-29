/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ['"Work Sans"', 'sans-serif'],
      },

      fontSize: {
        'sm-timer': "5rem",
        'md-timer': "9.5rem",
        'lg-timer': "11.5rem",
        'desktop-timer': "11.25rem",
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
      'md-mobile': '480px',
      'lg-mobile': '768px',
      'desktop': '960px',
    },
  },
  plugins: [],
}

