/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff5e14",
        secondary: "#e0f6f7",
        infoColor: "#0F2851",
        basicText: "#1E293B",
        iconColor: "#446193",
        mainWhite: "#FFF",
        green: "#60BB18",
        inactiveText: "#898D9E",
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        primaryCustom: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
        semiCustom: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    },
  },
  plugins: [],
};
