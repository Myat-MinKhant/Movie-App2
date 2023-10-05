/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      sm2: '640px',
      md: '760px',
      lg: '1050px',
      xl: '1360px'
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', " sans-serif"]
      },
      backgroundImage: {
        'bg-img': "url('/src/assets/Background.png')"
      },
      colors: {
        'light-black': 'rgba(0, 0, 0, 0.10)',
        grey: {
          50: '#EBEEF5',
          100: '#C3C8D4',
          200: '#A8AEBF',
          300: '#8E95A9',
          400: '#767E94',
          600: '#475069',
          700: '#323B54',
          900: '#121829'
        },
        primary: {
          300: '#9C92F8',
          400: '#7B6EF6',
          500: '#5A4AF4',
          600: '#483BC3',
          700: '#362C92',
          800: '#251E62',
          900: '#120F31',
        },
        skyblue: {
          main: '#12efec'
        },
        blue: {
          main: '#0091ea'
        },
        rating: {
          main: '#FFAD49'
        }
      },
      screens: {
        "xs": "460px"
      },
      aspectRatio: {
        "2/3": "2/3"
      }
    },
  },
  plugins: [],
}

