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
    animation: {
      vert: 'moveVertical 30s ease infinite',
      'circle-reverse': 'moveInCircle 20s reverse infinite',
      'circle-linear': 'moveInCircle 40s linear infinite',
      'circle-ease': 'moveInCircle 20s ease infinite',
      horizontal: 'moveHorizontal 40s ease infinite'
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
      keyframes: {
        moveInCircle: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        moveVertical: {
          "0%": { transform: "translateY(-50%)" },
          "50%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(-50%)" },
        },
        moveHorizontal: {
          "0%": { transform: "translateX(-50%) translateY(-10%)" },
          "50%": { transform: "translateX(50%) translateY(10%)" },
          "100%": { transform: "translateX(-50%) translateY(-10%)" },
        },
      },
    },
  },
  plugins: [],
};
