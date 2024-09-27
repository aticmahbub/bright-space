/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      english_font_family: 'Poppins, system-ui',
      bengal_font_family: 'Noto Serif Bengali, system-ui'
    },
    colors: {
      primary_color_1: '#F2277E',
      about_banner_background_color: '#F7F8FD',
      horizontal_line_color: '#6F6F6F',
      text_color_1: '#212529',
      white: '#FFFFFF',
      primary: {
        50: "#FFE6EB",
        100: "#FCDDE0",
        200: "#FABACB",
        300: "#F6969F",
        400: "#F4716A",
        500: "#FF1949",
        600: "#E0003C",
        700: "#B30030",
        800: "#860025",
        900: "#59001A",
      },
      secondary: {
        50: "#E5E7F7", // lightest shade
        100: "#C0C4F0",
        200: "#9BA1E8",
        300: "#767EDD",
        400: "#515BD3",
        500: "#2A3290", // base color
        600: "#242A7D",
        700: "#1E236A",
        800: "#181C56",
        900: "#121543", // darkest shade
      },
    }
  },
  plugins: [],
}

