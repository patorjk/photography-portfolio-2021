import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';
import { createBrowserHistory } from 'history';
import React, { useState } from 'react';
import ReactGA from 'react-ga';
import {
  Redirect,
  Route,
  Router,
  Switch,
} from 'react-router-dom';
import Cookies from 'universal-cookie';
import About from './About.js';
import Footer from './Footer.js';
import NavBar from './NavBar.js';
import PhotoGrid from './PhotoGrid.js';
import SinglePhoto from './SinglePhoto';
import config from '../app.config.js';
import {
  HalloweenThemeDef,
  LightThemeDef
} from '../themes';

ReactGA.initialize(config.googleAnalyticsId);
ReactGA.pageview(window.location.pathname + window.location.search);

const basicTheme = createTheme(LightThemeDef);
const halloweenTheme = createTheme(HalloweenThemeDef);

const themes = [
  {
    label: 'Light',
    theme: basicTheme,
  },
  {
    label: 'Dark (Halloween)',
    theme: halloweenTheme,
  }
];

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
  const cookies = new Cookies();
  let savedTheme = cookies.get('theme');
  const startingThemeItem = themes.find(tt => tt.label === savedTheme);
  const startingTheme = startingThemeItem ? startingThemeItem.theme : basicTheme;

  const [theme, setTheme] = useState(startingTheme);
  return (
    <Router history={ history }>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={ theme }>
          <CssBaseline />
          <NavBar theme={ theme } themes={ themes } setTheme={ setTheme } />
          <div style={{ paddingTop:'64px',boxSizing:'border-box',height:'100%' }}>
            <Switch>

              { config.categories.map( cat => (
                <Route path={ cat.path } exact key={ cat.name } render={ () => (
                  <div style={{ display:'flex',flexDirection:'column',height:'100%' }}>
                    <div style={{ flex: '1 0 auto' }}>
                      <PhotoGrid category={ cat.name } randomize={ cat.randomize } />
                    </div>
                    <Footer/>
                  </div>
                ) } /> 
              )) }

              <Route path='/photo/:photo' render={ (routeProps) => (
                <div style={{ display:'flex',flexDirection:'column',height:'100%' }}>
                  <div style={{ flex: '1 0 auto' }}>
                    <SinglePhoto photoName={ routeProps.match.params.photo } />
                  </div>
                  <Footer/>
                </div>
              ) } /> 

              <Route path='/about' render={ () => (
                <div style={{ display:'flex',flexDirection:'column',height:'100%' }}>
                  <div style={{ flex: '1 0 auto' }}>
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
