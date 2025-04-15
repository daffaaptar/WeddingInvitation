/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#000000',
        noir: '#151515',
        charcoal: '#2C3444',
        gold: '#C6A96C',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'], // Untuk teks biasa
        serif: ['"Cormorant Garamond"', 'serif'], // Untuk heading / display
      },
      spacing: {
        section: '60px',
      },
      maxWidth: {
        content: '1440px',
      },
      transitionDuration: {
        800: '800ms',
      },
    },
  },
  plugins: [],
};