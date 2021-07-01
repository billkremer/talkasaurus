const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      green: { 
        DEFAULT: "#17c3b2",
        dark: "#129588",
      },
      blue: {
        DEFAULT: "#227c9d",
        dark: "#195b73",
      },
      yellow: {
        DEFAULT: "#ffcb77",
        dark: "#ffb844",
      },
      white: {
        DEFAULT: "#fef9ef",
      },
      red: {
        DEFAULT: "#fe6d73",
        dark: "#fe3a42",
      },
      black: colors.black,
      almostblack: {
        DEFAULT: "#282c34",
      },

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
