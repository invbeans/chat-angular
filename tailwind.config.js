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
        'other-message': '#989c52',
        'self-message': '#529c7c',
        'modal-bg': '#739c99',
        'modal-button': '#557d76',
        'modal-input': '#9bccc2',
        'dialog-input': '#35403f',
        'edit-button': '#bf9c4b',
        'search-div': '#ad984c',
        'search-button': '#dbb658',

      }
    },
  },
  plugins: [],
};
