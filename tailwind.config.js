/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    backgroundPosition: {
      bottom: 'bottom',
      'bottom-4': 'center bottom 1rem',
      center: 'center',
      left: 'left',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'top-4': 'center top 1rem',
    },
    screens: {
      xs: "320px",
      sm: "375px",
      sml: "500px",
      md: "667px",
      mdl: "768px",
      lg: "960px",
      lgl: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        'sukhumvit': ['Sukhumvit', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        "primary": "#6C63FF"
      }
    },
  },
  plugins: [],
}

