/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        textWhite:"#FFFFFF",
      
        White:"#FDFDFE",
        LightGreen:"#DFFFF0",
        primary: "#00040f",
        secondary: "#00f6ff",
        lightCyan1:"#DEF9FA",
        lightCyan2:"#9DEDF0",
        lightCyan3:"#33BBCF",
        green: "#1fd8cd",
        cyan:"#12badf",
        pink:"#c5018e ",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};