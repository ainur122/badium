const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.tsx", "./src/**/*.html", "./src/**/*.ts"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
    },
  },
  variants: {
    extend: {},
  },
};
