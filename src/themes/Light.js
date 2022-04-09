const LightThemeDef = {
  palette: {
    primary: {
      main: '#607d8b',
      light: 'rgb(127, 151, 162)',
      dark: 'rgb(67,87,97)',
      contrastText: '#fff'
    },
    text: {
      primary: 'rgb(0, 0, 0, .87)',
      secondary: 'rgba(0,0,0,0.54)',
      disabled: 'rgba(0,0,0,0.38)',
      hint: 'rgba(0,0,0,0.38)',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: [
      '"PT Sans"',
      'sans-serif',
    ]
  },
  shadows: Array(25).fill('none'),
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: 'rgb(0, 0, 0, .87)',
        },
      }
    },
  }
};

export { LightThemeDef };
