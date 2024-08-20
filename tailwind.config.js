/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#f8f8f8",
        light: "#e9edf9",
        secondary: "#6d90ec",
        main: "#41B3A2", 
        opaque: "#41B3A2",
        black: "#161D2C",
        borderColor: "#41B3A2",//#7A1CAC
        pink: "#FB88B4",
        offWhite: "#f2f4f5",
      },
      boxShadow: {
        'custom': 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
      },
    },
  },
  plugins: [],
};
