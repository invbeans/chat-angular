/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'friend-list': '#5cb8b3',
        'friend-block': '#499995',
        'nav-div': '#4f807d',
        'global-bg': '#486b69',
        'dialog-bg': '#93c9c6',
        'other-message': '#529c7c',
        'self-message': '#989c52'

      }
    },
  },
  plugins: [],
};
