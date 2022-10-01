const themes = ['dark', 'winter', 'synthwave', 'halloween', 'cmyk', 'forest'];
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes,
  },
};
