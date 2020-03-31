const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#5285FF",
        primary_light: "#8eb4ff",
        primary_dark: "#0059cb",
        secondary: "#160267",
        secondary_light: "#4d2d96",
        secondary_dark: "#00003c",
      },
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
      spacing: {
        "44": "11rem",
        "60": "15rem",
      },
      letterSpacing: {
        widy: "0.010em",
      },
      fontSize: {
        "1xl": "1.35rem",
        "2_5xl": "1.65rem",
      },
      fontFamily: {
        body: ["Overpass", ...defaultTheme.fontFamily.sans],
        header: ["Work Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
