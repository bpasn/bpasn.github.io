/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
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
        'wave-contact':"url('assets/image/contact_wave.svg')"
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes:{
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scrolling: {
          '0%,20%,50%,80%,100%': {transform:'translateY(0)'},
          '40%':{transform:'translateY(-20px)'},
          '60%':{transform:'translateY(-10px)'},
        }
      },
      animation:{
        "hero-scrolling": 'scrolling 2s linear infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      }
    },
  },
  plugins: [],
}

