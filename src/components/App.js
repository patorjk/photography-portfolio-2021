import React from 'react';
import NavBar from './NavBar.js'
import CssBaseline from '@mui/material/CssBaseline';
import {
  Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
import About from './About.js'
import SinglePhoto from './SinglePhoto';
import PhotoGrid from './PhotoGrid.js'
import Footer from './Footer.js'
import { createBrowserHistory } from "history";
import config from '../app.config.js';
import ReactGA from 'react-ga';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';

ReactGA.initialize(config.googleAnalyticsId);
ReactGA.pageview(window.location.pathname + window.location.search);

const defaultTheme = createTheme();

const theme = createTheme({
  palette: {
    primary: {
      main: '#607d8b'
    }
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
          backgroundColor: defaultTheme.palette.background.default,
        },
      }
    },
  }
});

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

  switch(location.pathname) {
    case "/":
      document.title = config.title.main;
      break;
    case "/about":
      document.title = config.title.about;
      break;
    case location.pathname.match(/^\/photo/)?.input:
      let name = /[^/]*$/.exec(location.pathname)[0];
      name = toTitleCase(name.replace(/-/g,' '));
      document.title = name + " | " + config.title.main;
      break;
    default:
      document.title = config.title.main;
  }
}

const history = createBrowserHistory()
history.listen((location, action) => {

  window.scrollTo && window.scrollTo(0,0);

  updatePageTitle(location);

  ReactGA.set({ page: location.pathname + location.hash});
  ReactGA.pageview(location.pathname + location.hash);
});

// <Redirect from="/" exact to={"/main"} />

updatePageTitle();

function App() {
  return (
    <Router history={history}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <div style={{paddingTop:'64px',boxSizing:'border-box',height:'100%'}}>
            <Switch>

              {config.categories.map( cat => (
                <Route path={cat.path} exact key={cat.name} render={() => (
                  <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
                    <div style={{flex: '1 0 auto'}}>
                      <PhotoGrid category={cat.name} randomize={cat.randomize} />
                      </div>
                    <Footer/>
                  </div>
                )} /> 
              ))}

              <Route path="/photo/:photo" render={(routeProps) => (
                <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
                  <div style={{flex: '1 0 auto'}}>
                    <SinglePhoto photoName={routeProps.match.params.photo} />
                    </div>
                  <Footer/>
                </div>
              )} /> 

              <Route path="/about" render={() => (
                <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
                  <div style={{flex: '1 0 auto'}}>
                    <About />
                  </div>
                </div>
              )} /> 

              <Redirect from="*" to={"/"} />

            </Switch>
          </div>
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  );
}

export default App;
