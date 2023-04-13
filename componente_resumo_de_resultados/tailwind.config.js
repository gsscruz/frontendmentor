/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        dark_navy: '#303B59',
        white: '#FFFFFF',
        yellow: '#FFB21E',
        blue: '#1125D6',
        light_blue: '#CAC9FF',
        green: '#00BB8F',
        red: '#FF5555',
        gradient1_1: '#7755FF',
        gradient1_2: '#6943FF',
        gradient1_3: '#2F2CE9',
        gradient2_1: '#4D21C9',
        gradient2_2: '#2521C9',
      },
    },
    fontFamily: {
      sans: ['Hanken\\ Grotesk'],
    },
  },
  plugins: [],
};
