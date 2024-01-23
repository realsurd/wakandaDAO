/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Plus Jakarta Sans'],
      },
    },
    daisyui: {
      themes: ['lofi'],
    },
    plugins: [require('daisyui')],
  },
}
