/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        md: { max: "1700px" },
        ls: { max: "1350px" },
        tb: { max: "1024px" },
        mb: { max: "375px" },
      },
      fontFamily: {
        bgp: "BPG Banner Caps",
      },
      colors: {
        primary: "#F0F4F5",
        "gray-light": "#F0F4F5",
        "purple-primary": "#585EE3",
        "primary-light": "#F5F8FF",
      },
      boxShadow: {
        arrow: "0px 0px 20px 0px #0000001A",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
