module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Futura"],
      },
    },
  },
  variants: {},
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".underline": {
          "text-decoration-color": "#E0E7FF",
        },
      });
    },
  ],
};
