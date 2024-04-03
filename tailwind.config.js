/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F7FFE5",
        "gray-50": "#EFE6E6",
        "gray-100": "#539165",
        "gray-500": "#263A29",
        "primary-100": "#E1F0DA",
        "primary-300": "#A5DD9B",
        "primary-500": "#00b257",
        "secondary-400": "#00b257",
        "secondary-500": "#A5DD9B",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #00b257 0%, #E1F0DA 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
