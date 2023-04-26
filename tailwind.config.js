/** @type {import("tailwindcss").Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': colors['sky']['600'],
        'primary-color-light': colors['sky']['500'],
        'primary-color-dark': colors['sky']['700'],
        'primary-color-darker': colors['sky']['800']
      }
    }
  },
  plugins: [require('daisyui')]
}
