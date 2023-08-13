/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: '#500724',
        slate: '#94a3b8',
        cyan_700: '#0e7490',
        cyan_950: '#083344',
        blue_950:  '#172554',
      },
    },
  },
  plugins: [],
}
