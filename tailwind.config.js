/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          veryDarkGray: 'hsla(240, 4%, 11%, 1)',
          dimGray: 'hsla(240, 4%, 41%, 1)',
          veryLightGray: 'hsla(220, 10%, 94%, 1)',
          ultraLightGray: 'hsla(210, 7%, 96%, 1)',
          white: 'hsla(0, 0%, 100%, 1)',
        }
      },
    },
  },
  plugins: [],
}

