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
      md: "576px",
      mdl: "768px",
      lg: "992px",
      lgl: "1024px",
      xl: "1200px",
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('assets/image/blob-haikei.svg')",
      },
      fontFamily: {
        'sukhumvit': ['Sukhumvit', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      container: {
        center: true,
        padding: "1rem",
        
        screens: {
          md: "667px",
          mdl: "768px",
          lg: "960px",
          lgl: "1000px",
        }
      },
      colors: {
        "primary": "#02D66A"
      },
      keyframes:{
        scrolling: {
          '0%,20%,50%,80%,100%': {transform:'translateY(0)'},
          '40%':{transform:'translateY(-20px)'},
          '60%':{transform:'translateY(-10px)'},
        }
      },
      animation:{
        "hero-scrolling": 'scrolling 2s linear infinite'
      }
    },
  },
  plugins: [],
}

