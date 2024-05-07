/** @type {import('tailwindcss').Config} */

export default {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      backgroundImage: (theme) => ({
        "custom-background":
          "url('https://img.freepik.com/free-vector/dark-black-background-design-with-stripes_1017-38064.jpg?w=826&t=st=1714757213~exp=1714753~hmac=d6d596220d7e430ae3afd2b8b2801f6815c76e16727aca2c755eff399b73369c')",
      }),
      colors: {
        primary: "#FF6347", // or '#FFA500' for orange
        secondary: "#FFD700",
        background: "#FFFFFF",
        text: "#333333",
        accent: "#008080",
        gray: {
          100: "#f7f7f7",
          200: "#efefef",
          400: "#b4abab",
          600: "#808080",
          900: "#1e1e1e",
          "100_01": "#f5f5f5",
          "100_cc": "#f5f5f5cc",
        },
        blue_gray: { 500: "#607d8b", 900: "#333333" },
        primaryClr: { 600: "#656d76", 900: "#000000", A700_01: "#000000" },
        whiteClr: { A700: "#ffffff", A700_01: "#ffffff" },
        green: { A700_99: "#0db64799" },
        light_blue: { 200: "#8dd8f8", A200_99: "#3bbff899", A200: "#3bbff8" },
        redClr: { 500: "#f83535", "500_99": "#f8353599" },
      },
      boxShadow: {
        xs: "0px -10px 13px 0px #0000003f",
        sm: "0px 0px 13px 5px #00000029",
      },
      fontFamily: { montserrat: "Montserrat", opensans: "Open Sans" },
    },
  },
  plugins: [],
};
