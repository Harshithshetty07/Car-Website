/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}', // for app directory
      './pages/**/*.{js,ts,jsx,tsx}', // for pages directory
      './components/**/*.{js,ts,jsx,tsx}', // if you have component files
    ],
    theme: {
      extend: {
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
            dancing: ['"Dancing Script"', 'cursive'],
          },
          fontSize: {
            '9xl': '6rem',
          },
          zIndex: {
            '100': '100',
          },
          transitionProperty: {
            'right': 'right',
          },
          colors: {
            'car-orange': 'hsl(36, 90%, 54%)',
            'car-green': 'hsl(166, 90%, 40%)',
            'car-blue': 'hsl(204, 90%, 50%)',
          },
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1920px',
        },
      },
    },
    plugins: [],
  };
  