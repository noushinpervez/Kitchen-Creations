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
          "linear-gradient(0deg, rgba(21, 11, 43, 0.90) 0%, rgba(21, 11, 43, 0.00) 100%), url('https://img.freepik.com/fotos-gratis/cogumelo-de-vista-lateral-fritando-com-fogao-e-fogo-e-mao-humana-na-panela_176474-3150.jpg?w=1060&t=st=1711378891~exp=1711379491~hmac=d27ebf38e23e47234c84fadd527d780b0f6e376e73dfc588f83eb943708f1eab')",
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