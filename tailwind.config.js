/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('/src/asserts/bg1.jpg')",
      },
    },
    colors: {
      orange: " rgb(202, 59, 16)",
      yellow: "#fff72b",
      sky: "#f6f9fc",
      white: "#ffffff",
      pink: " #fff0e6",
      black: "#262626",
    },
    screens: {
      sm: " 640px	",
      md: "768px",
      lg: "1024px",
      xl: "1280px	",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
