/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#775a19',
        'gold-light': '#c5a059',
        rose: '#7f5353',
        'rose-light': '#fec3c3',
        onSurface: '#201a1a',
        surface: '#fff8f7',
        surfaceLow: '#fef1f1',
        surfaceLowest: '#ffffff',
        surfaceHigh: '#f2e5e5',
        outline: '#d1c5b4',
      },
      fontFamily: {
        heading: ['"EB Garamond"', 'Georgia', 'serif'],
        body: ['"Jost"', 'sans-serif'],
      },
      borderRadius: {
        pill: '9999px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
