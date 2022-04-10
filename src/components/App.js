import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
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
import ContentGrid from './ContentGrid';
import Footer from './Footer.js';
import NavBar from './NavBar.js';
import PhotoGrid from './PhotoGrid.js';
import SinglePhoto from './SinglePhoto';
import config from '../app.config.js';
import { galleries } from '../photos';
import {
  LightTheme,
  themes
} from '../themes';

ReactGA.initialize(config.googleAnalyticsId);
ReactGA.pageview(window.location.pathname + window.location.search);

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

const ContentWrapper = styled('div')(() => ({
  display:'flex',
  flexDirection:'column',
  height:'100%'
}));

const MainContent = styled('div')(() => ({
  flex: '1 0 auto'
}));

function App() {
  const cookies = new Cookies();
  let savedTheme = cookies.get('theme');
  const startingThemeItem = themes.find(tt => tt.label === savedTheme);
  const startingTheme = startingThemeItem ? startingThemeItem.theme : LightTheme;

  const [theme, setTheme] = useState(startingTheme);
  return (
    <Router history={ history }>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={ theme }>
          <CssBaseline />
          <NavBar theme={ theme } setTheme={ setTheme } />
          <div style={{ paddingTop:'64px',boxSizing:'border-box',height:'100%' }}>
            <Switch>

              { /* legacy - will remove this later */ }
              { config.categories.map( cat => (
                <Route path={ cat.path } exact key={ cat.name } render={ () => (
                  <ContentWrapper>
                    <MainContent>
                      <PhotoGrid category={ cat.name } randomize={ cat.randomize } />
                    </MainContent>
                    <Footer/>
                  </ContentWrapper>
                ) } /> 
              )) }

              { galleries.map( gallery => (
                <Route path={ `/gallery/${gallery.name}` } exact key={ gallery.label } render={ () => (
                  <ContentWrapper>
                    <MainContent>
                      <ContentGrid items={ gallery.pageContent } />
                    </MainContent>
                    <Footer/>
                  </ContentWrapper>
                ) } />
              )) }
              
              <Route path='/photo/:photo' render={ (routeProps) => (
                <ContentWrapper>
                  <MainContent>
                    <SinglePhoto photoName={ routeProps.match.params.photo } />
                  </MainContent>
                  <Footer/>
                </ContentWrapper>
              ) } /> 

              <Route path='/about' render={ () => (
                <ContentWrapper>
                  <MainContent>
                    <About />
                  </MainContent>
                </ContentWrapper>
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
