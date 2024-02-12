/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}", "./src/App.jsx"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1600px",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      inconsolata: ["Inconsolata", "monospace"],
    },
    extend: {
      colors: {
        black: "#000000",
        accentOrange: "#FFA000",
        accentPink: "#FF4081",
        accentBlue: "#5C6BC0",
        accentGreen: "#C6FF00",
        accentPurple: "#AB47BC",
        secondaryGrey: "#616161",
      },
    },
  },
  plugins: [],
};
