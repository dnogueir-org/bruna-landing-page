/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        cream:  '#FAF7F4',
        warm:   '#F4EDE4',
        blush:  '#E0CFC0',
        rose:   '#2C1810',
        taupe:  '#5C3A28',
        bark:   '#1A0E08',
        ink:    '#2D2425',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
