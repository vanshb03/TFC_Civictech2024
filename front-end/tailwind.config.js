module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_cc: "#ffffffcc", A700: "#ffffff" },
        gray: {
          50: "#f8f9fa",
          100: "#f5f4f4",
          300: "#dddddd",
          500: "#b8967b",
          700: "#565656",
        },
        black: { 900: "#000000", "900_33": "#00000033", "900_19": "#00000019" },
        blue_gray: { 100: "#d3d4d5" },
        deep_orange: { 100: "#f5b4b4" },
      },
      fontFamily: { styreneaweb: "Styrene A Web" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#00000019,#00000019)",
        gradient1: "linear-gradient(180deg ,#00000033,#00000033)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
