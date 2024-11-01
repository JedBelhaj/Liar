/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        around:
          "0px 4px 16px rgba(17, 17, 26, 0.1), 0px 8px 24px rgba(17, 17, 26, 0.1), 0px 16px 56px rgba(17, 17, 26, 0.1)",
        aroundinner: "inset -5px 5px 10px 5px #00000024",
      },
      fontFamily: {
        dongle: ["Dongle", "sans-serif"],
      },
    },
  },
  plugins: [],
};
