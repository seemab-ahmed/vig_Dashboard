/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial-gradient': 'radial-gradient(circle closest-corner at center 120px, #ff9a3b3e, #33333300 55%)',
        'gradient-light': ' radial-gradient(circle, rgba(124,73,23,0.09567577030812324) 0%, rgba(36,19,3,0) 100%)',
    
       },
    },
  },
  plugins: [],
};
