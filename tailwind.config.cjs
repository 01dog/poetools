const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        'mytheme': {
          ...require('daisyui/src/colors/themes')['[data-theme=wireframe]'],
          "fontFamily": "Helvetica",
        }
      }
    ]
  },
}

module.exports = config;