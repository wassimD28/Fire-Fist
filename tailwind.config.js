/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        custom: {
          bg: "#170707",
          semiBg1: "#230a0a",
          semiBg2: "#340e0e",
          semiBg3: "#3d1919",
          primary: "#f21b1b",
          secondary: "#831717",
          accent: "#ea4141",
          text: "#f7eded",
        },
      },
    },
  },
  plugins: [],
};
