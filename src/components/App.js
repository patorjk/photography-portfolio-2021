import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactGA from 'react-ga';
import {
  Redirect,
  Route,
  Router,
  Switch,
} from 'react-router-dom';
import About from './About.js';
import Footer from './Footer.js';
import NavBar from './NavBar.js';
import PhotoGrid from './PhotoGrid.js';
import SinglePhoto from './SinglePhoto';
import config from '../app.config.js';

ReactGA.initialize(config.googleAnalyticsId);
ReactGA.pageview(window.location.pathname + window.location.search);

const basicThemeDef = {
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
/*
const halloweenThemeDef = {
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
      paper: '#505050',
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
*/
const theme = createTheme(basicThemeDef);

function toTitleCase(text) {
  return text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
}

function updatePageTitle(location) {
  if (!location) {
    location = window.location;
  }
  let name;
  switch(location.pathname) {
  case '/':
    document.title = config.title.main;
    break;
  case '/about':
    document.title = config.title.about;
    break;
  case location.pathname.match(/^\/photo/)?.input:
    name = /[^/]*$/.exec(location.pathname)[0];
    name = toTitleCase(name.replace(/-/g,' '));
    document.title = name + ' | ' + config.title.main;
    break;
  default:
    document.title = config.title.main;
  }
}

const history = createBrowserHistory();
history.listen((location) => {

  window.scrollTo && window.scrollTo(0,0);

  updatePageTitle(location);

  ReactGA.set({ page: location.pathname + location.hash });
  ReactGA.pageview(location.pathname + location.hash);
});

// <Redirect from="/" exact to={"/main"} />

updatePageTitle();

function App() {
  return (
    <Router history={ history }>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={ theme }>
          <CssBaseline />
          <NavBar />
          <div style={ { paddingTop:'64px',boxSizing:'border-box',height:'100%' } }>
            <Switch>

              { config.categories.map( cat => (
                <Route path={ cat.path } exact key={ cat.name } render={ () => (
                  <div style={ { display:'flex',flexDirection:'column',height:'100%' } }>
                    <div style={ { flex: '1 0 auto' } }>
                      <PhotoGrid category={ cat.name } randomize={ cat.randomize } />
                    </div>
                    <Footer/>
                  </div>
                ) } /> 
              )) }

              <Route path='/photo/:photo' render={ (routeProps) => (
                <div style={ { display:'flex',flexDirection:'column',height:'100%' } }>
                  <div style={ { flex: '1 0 auto' } }>
                    <SinglePhoto photoName={ routeProps.match.params.photo } />
                  </div>
                  <Footer/>
                </div>
              ) } /> 

              <Route path='/about' render={ () => (
                <div style={ { display:'flex',flexDirection:'column',height:'100%' } }>
                  <div style={ { flex: '1 0 auto' } }>
                    <About />
                  </div>
                </div>
              ) } /> 

              <Redirect from='*' to={ '/' } />

            </Switch>
          </div>
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  );
}

export default App;
