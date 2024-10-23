module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          primary: "#615EFC",
          second: "#7E8EF1",
          errorcolor: "#DF454A",
          bg: "#EEEEEE",
        },
        gray: {
          700: "#E9E9E9",
          400: "#C4C4C4",
          300: "#F0F0F0",
        },
      },
    },
  },
  plugins: [ function ({ addUtilities }) {
    addUtilities({
        '.no-scrollbar': {
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
        },
        '.no-scrollbar::-webkit-scrollbar': {
            'display': 'none',
        },
    });
}],
};
