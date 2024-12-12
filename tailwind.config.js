/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
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
      },
    },

    colors: {
      produtividade: "var(--produtividade)",
      produtividade2: "var(--produtividade2)",
      descansoCurto: "var(--descansoCurto)",
      descansoCurto2: "var(--descansoCurto2)",
      descansoLongo: "var(--descansoLongo)",
      descansoLongo2: "var(--descansoLongo2)",
      normal: "var(--normal)",
      config: "var(--config)",
      detalhes: "var(--detalhes)",
      main: "var(--main)",
      main2: "var(--main2)"
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

