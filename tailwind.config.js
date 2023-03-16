/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#231f20",
        eee: "#EEEEEE",
        gray6: "#6b6f78",
        gray7: "#707171",
        blue2:"#2f5acf",
        blue3:"#325bcb",
      },
      height:{
        header:"35px",
        navbar:"57px",
        carousel:"calc(100vh - 142px)",
      }
    },
  },
  plugins: [],
};
