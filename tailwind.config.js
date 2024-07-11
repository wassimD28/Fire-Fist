/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        custom: {
          bg: "#000000",
          semiBg1: "#101010",
          semiBg2: "#1b1b1b",
          semiBg3: "#2e2e2e",
          semiBg4: "#462424",
          primary: "#892CDC",
          secondary: "#52057B",
          accent: "#BC6FF1",
          text: "#FFFFFF",
        },
        fontFamily: {
          'poppins': ['Poppins','sans-serif'],
        },
        fill: {
          custom: {
            primary: "#892CDC",
            secondary: "#52057B",
            accent: "#BC6FF1",
            text: "#FFFFFF",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
