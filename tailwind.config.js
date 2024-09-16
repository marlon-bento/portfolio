/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'roxo-profundo': '#070A14',
        'roxo-mediano': '#00121E',
        'roxo-fraco': '#C2B2FF',
        'description': '#BEBDBD',
     
      },
    },
  },
  plugins: [],
}