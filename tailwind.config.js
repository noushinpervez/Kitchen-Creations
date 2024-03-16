/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-bg':
          "linear-gradient(0deg, rgba(21, 11, 43, 0.90) 0%, rgba(21, 11, 43, 0.00) 100%), url('https://i.ibb.co/qJd4c56/d57b5fb5ad84c9f6a9b1eb9782e9b11b.jpg')",
      },
      colors: {
        buttonColor: '#0BE58A',
        textColor: '#150B2B',
        dark: '#282828',
        darkParagraph: '#878787',
        hover: '#ececff',
      },
    },
  },
  plugins: [require('daisyui')],
}