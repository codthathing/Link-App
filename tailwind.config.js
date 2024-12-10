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
        purple: {
          "custom":"#633CFF",
          "hover": "#BEADFF",
          "light": "#EFEBFF",
        },
      },
      fontSize: {
        "[8px]": "8px",
      },
      spacing: {
        "[0.15px]": "0.15px",
      },
      boxShadow: {
        "inset": "0 0 0px 1000px inset",
        "all-sides": "0.5px 0.5px 17.5px, -0.5px -0.5px 17.5px",
      },
      borderColor: {
        customRed: "#FF3939",
        grey: {
          semilight: "#D9D9D9",
          light: "#FAFAFA",
        }, 
        purple: {
          "custom":"#633CFF",
        },
      },
      gridTemplateRows: {
        "[max_minmax]": "max-content minmax(0, 1fr)",
      },
    },
  },
  plugins: [],
}

