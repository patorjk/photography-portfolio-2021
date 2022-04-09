const HalloweenThemeDef = {
  palette: {
    type: 'dark',
    mode: 'dark',
    primary: {
      main: '#e07f3b',
      light: 'rgb(231,155,99)',
      dark: 'rgb(158,91,42)',
      contrastText: 'rgba(0,0,0,0.87)'
    },
    secondary: {
      main: '#f6e38c',
    },
    grey: {
      '50': '#fafafa',
      '100': '#f5f5f5',
      '200': '#eee',
      '300': '#e0e0e0',
      '400': '#bdbdbd',
      '500': '#9e9e9e',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121',
      'A100': '#f5f5f5',
      'A200': '#eee',
      'A400': '#bdbdbd',
      'A700': '#616161',
    },
    tonalOffset: 0.2,
    text: {
      primary: '#fff',
      secondary: 'rgba(255,255,255,0.7)',
      disabled: 'rgba(255,255,255,0.5)',
      hint: 'rgba(255,255,255,0.5)',
      icon: 'rgba(255,255,255,0.5)'
    },
    divider: 'rgba(255,255,255,0.12)',
    background: {
      default: '#202020',
      paper: '#202020',
    },
    action: {
      active: '#fff',
      hover: 'rgba(255,255,255,0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255,255,255,0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255,255,255,0.3)',
      disabledBackground: 'rgba(255,255,255,0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255,255,255,0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    }
  },
  shadows: Array(25).fill('none'),
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: '#202020',
          color: '#fff',
        },
      }
    },
  }
};

export { HalloweenThemeDef };
