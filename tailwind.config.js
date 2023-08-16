/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('/public/images/bg-image.jpg') ",
      },
    },
  },
  plugins: [],
}
