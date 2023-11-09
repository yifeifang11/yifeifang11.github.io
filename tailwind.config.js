/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        greybg: "#f5f4f4",
        bluetext: "rgba(181, 234, 215, 0.3)",
        purpletext: "rgba(199, 206, 234, 0.3)",
        grey_transparent: "rgba(217, 217, 217, 0.3)",
        bluetext_dark: "rgba(181, 234, 215, 0.7)",
        purpletext_dark: "rgba(199, 206, 234, 0.7)",
      },
    },
  },
  plugins: [],
};
