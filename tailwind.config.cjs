const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.svelte"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
    extend: {
      colors: {
        //       primary: 'var(--color-primary)',
        "dark" : "#3c4858",
        "lighter-dark": "#23262B",
        "light": "#FCFCFC",
        "primary" : "#FEBF32"
        /*
        "primary": "#6D28D9",
        "secondary": "#BE185D",
        "tertiary": "#059669",
        "mycolor": "rgb(189, 0, 120)"
        */
      }
    },
  },
  variants: {
    extend: {
      padding: ["hover"],
      height: ["hover"],
      backgroundColor: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
