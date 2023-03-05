/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A2647',
        secondary: '#144272',
        tertiary: '#205295',
        'landing-bg': '#0a1321',
        info: '#72a7f7',
        success: '#72a7f7',
        warning: '#72a7f7',
        danger: '#72a7f7',
        muted: '#a1a9b3',
      },
      transitionDuration: {
        DEFAULT: '500ms',
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-123%)' },
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
