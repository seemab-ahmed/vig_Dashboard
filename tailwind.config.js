/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'color-change': 'color-change 4s linear infinite',
      },
      keyframes: {
      
        'color-change': {
          '0%': { backgroundColor: 'red' }, 
          '50%': { backgroundColor: 'blue' }, 
          '100%': { backgroundColor: 'yellow' },
        },
      },
      backgroundImage: {
        'custom-radial-gradient': 'radial-gradient(circle closest-corner at center, rgba(255, 154, 59, 0.3), rgba(51, 51, 51, 0) 55%)',
        'custom-radial-gradientnd': 'radial-gradient(rgba(255, 153, 59, 0.25), rgba(16, 16, 16, 0)) 50% 50% at 50% 50%',
        'custom-radial-gradientlite': 'linear-gradient(90deg, #100A04 0%, rgba(16, 10, 4, 0) 50%, #100A04 100%)',
        'gradient-light': 'radial-gradient(circle, rgba(124, 73, 23, 0.0957) 0%, rgba(36, 19, 3, 0) 100%)',
      },
    },
  },
  plugins: [],
};
