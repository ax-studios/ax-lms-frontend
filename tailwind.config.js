function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        scale: {
          '0%': { scale: '0' },
          '100%': { scale: '100%' },
        },
      },
      animation: {
        scale: 'scale 100ms linear',
      },
      gridTemplateColumns: {
        '1/5': '1fr 5fr',
      },
      colors: {
        'base-content': withOpacity('--base-content'),
        primary: withOpacity('--primary'),
        'primary-focus': withOpacity('--primary-focus'),
        'primary-accent': withOpacity('--primary-accent'),
        'base-100': withOpacity('--base-100'),
        'base-200': withOpacity('--base-200'),
        'base-300': withOpacity('--base-300'),
      },
    },
  },
};
