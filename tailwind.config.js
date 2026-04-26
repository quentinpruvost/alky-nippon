/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'jp-red': '#BC002D',    // Le rouge Torii
        'jp-black': '#1A1A1A',  // Le noir des textes profonds
        'jp-gray': '#666666',   // Le gris des descriptions
        'jp-light': '#F5F5F5',  // Le fond des sections claires
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};