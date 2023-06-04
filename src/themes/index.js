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
  },
];

const DefaultTheme = themes[1];
const HalloweenTheme = themes[1];

export { themes, DefaultTheme, HalloweenTheme };
