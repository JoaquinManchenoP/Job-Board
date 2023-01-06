/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      'xsm': '250px',
      'sm': '350px',
      'md': '450px',
      'lg': '600px',
      'xl': '750px',
    },
    extend: {}
  },
  plugins: []
};