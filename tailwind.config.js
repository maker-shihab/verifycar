/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-klarna-bg",
    "bg-card-bg",
    "bg-banco-bg",
    "bg-googlePay-bg",
    "bg-ideal-bg",
    "bg-eps-bg",
    "border-klarna-border",
    "border-card-border",
    "border-banco-border",
    "border-googlePay-border",
    "border-ideal-border",
    "border-eps-border"
  ],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1632px',
      },
    },
    extend: {
      colors: {
        dark: '#131313',
        yellow: {
          400: "#FBBD32"
        },
        gray: {
          100: '#9F9F9F',
          200: '#B0B0B0',
          300: '#828282',
          400: '#525252',
        },
        klarna: {
          bg: "#ffa8ce11",
          border: "#FFA8CD"
        },
        card: {
          bg: "#52525211",
          border: "#525252"
        },
        banco: {
          bg: "#004d9113",
          border: "#004E91"
        },
        googlePay: {
          bg: "#ffffff1d",
          border: "#FFFFFF"
        },
        ideal: {
          bg: "#d5017213",
          border: "#D50172"
        },
        eps: {
          bg: "#c8036f13",
          border: "#C8036F"
        }
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(90deg, #FFFFFF 19.05%, #999999 81.28%)',
      },
    },
  },

  plugins: [],
}
