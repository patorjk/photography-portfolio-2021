import { createTheme } from '@mui/material/styles';
import { HalloweenThemeDefinition } from './Halloween';
import { LightThemeDefinition } from './Light';

const themes = [
  {
    label: 'Light',
    theme: createTheme(LightThemeDefinition),
  },
  {
    label: 'Dark (Halloween)',
    theme: createTheme(HalloweenThemeDefinition),
  }
];

const LightTheme = themes[0].theme;

export {
  themes,
  LightTheme,
};
