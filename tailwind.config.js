/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {

    extend: {
      screens: {
        xs: '480px'
      },
      colors: {
        coral: '#FF6B6B',
        navy: '#FF91BF',
        mint: '#88D8C0',
        cream: '#FAD4C0',
        gold: '#FFD700',
        charcoal: '#3A3A3A',
        boxSha: 'rgba(255, 213, 0, 0.3)',

      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Varela Round', 'san-serif'],
        parcifico: ['Pacifico', 'san-serif']
      },
    },
  },
  plugins: [],
}

