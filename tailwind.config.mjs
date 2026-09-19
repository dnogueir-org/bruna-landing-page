/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        cream:  '#FAF7F4',
        warm:   '#F4EDE4',
        blush:  '#E8D5D8',
        rose:   '#6B1E2E',
        taupe:  '#8B4A58',
        bark:   '#4A1020',
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
