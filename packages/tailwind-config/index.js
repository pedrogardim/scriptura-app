/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6A7FDB",
        },
        background: "#343434",
        danger: { DEFAULT: "#F46463", light: "#F79191", dark: "#924F4F" },
        success: { DEFAULT: "#7CA859", light: "#A6C38D", dark: "#526840" },
        warning: { DEFAULT: "#EEC24F", light: "#F2CE73", dark: "#896C24" },
      },
    },
  },
  plugins: [],
};
