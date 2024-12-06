/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        grey: {
          light: "#FAFAFA",
          dark: "#333333",
          normal: "#737373",
          semilight: "#D9D9D9",
        },
        customRed: "#FF3939", 
        customPurple: "#633CFF",
      },
      fontSize: {
        "[8px]": "8px",
      },
      spacing: {
        "[0.15px]": "0.15px",
      },
      boxShadow: {
        "inset-white": "0 0 0px 1000px white inset",
      },
    },
  },
  plugins: [],
}

