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
      text_color_1: '#212529'
    }
  },
  plugins: [],
}

