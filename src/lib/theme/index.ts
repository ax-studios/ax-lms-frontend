import { createTheme as createMuiTheme } from '@mui/material';
import { Theme } from '@mui/system';
import { darkPalette, lightPalette } from './palette';
import shape from './shape';
import { createThemeComponents } from './styleOverrides';
import transitions from './transitions';
import typography from './typography';
import breakpoints from './breakpoints';

export const createTheme = (mode: 'dark' | 'light'): Theme => {
  const palette = mode === 'dark' ? darkPalette : lightPalette;

  // Create base theme
  const baseTheme = createMuiTheme({
    palette,
    shape,
    transitions,
    typography,
    breakpoints,
  });

  // Inject base theme to be used in components
  return createMuiTheme(
    {
      components: createThemeComponents(baseTheme),
    },
    baseTheme
  );
};
