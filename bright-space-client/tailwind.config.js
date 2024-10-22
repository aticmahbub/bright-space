/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
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
        50: "#FFECD6",   // Lightest tone
        100: "#FFE3C0",
        200: "#FFCB80",
        300: "#FFB340",
        400: "#FF9B20",
        500: "#FF9500",   // Base color
        600: "#E08600",
        700: "#B36900",
        800: "#865000",
        900: "#593600"    // Darkest tone
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

