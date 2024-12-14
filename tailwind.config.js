/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ['"Work Sans"', 'sans-serif'],
      },

      fontSize: {
        'mobile-timer': "5rem",
        'desktop-timer': "11rem",
      },

      boxShadow: {
        'tinyBoxShadow': "var(--tinyBoxShadow)",
        'mdBoxhadow': "var(--mdBoxShadow)",
        'lgBoxShadow': "var(--lgBoxShadow)"
      }
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
      'lg-mobile': '700px',
      'desktop': '960px',
    },
  },
  plugins: [],
}

