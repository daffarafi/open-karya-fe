/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A2647',
        secondary: '#144272',
        tertiary: '#205295',
      },
    },
    container: {
      center: true,
      padding: '14px',
    },
    transitionDuration: {
      DEFAULT: '500ms',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
