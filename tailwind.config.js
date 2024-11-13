/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    // screens: {
    //   tablet: "1280px",
    // },
    extend: {
      inset: {
        "15px": "14px",
      },
      colors: {
        back: "#f4f4f4",
        backTo: "#f4f4f4",
      },
    },
  },
  variants: {
    display: ["group-hover"],
  },
  plugins: [],
};
