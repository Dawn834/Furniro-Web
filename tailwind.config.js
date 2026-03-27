/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tc-body': 'rgba(137, 137, 137, 1)',
        'tc-body-dark': 'rgba(0, 0, 0, 1)',
        'tc-title': 'rgba(51, 51, 51, 1)',
        'color-badge': 'rgba(233, 113, 113, 1)',
        'color-badge-new': 'rgba(46, 193, 172, 1)',
        'primary': 'rgba(184, 142, 47, 1)',
        'bg-regular': 'rgba(249, 241, 231, 1)',
        'bg-card': 'rgba(244, 245, 247, 1)',
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}

