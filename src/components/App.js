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
import { SnackbarProvider } from 'notistack';
import Button from '@mui/material/Button';
import {
  Check
} from '@mui/icons-material';

ReactGA.initialize(config.googleAnalyticsId);

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

function App() {

  const notistackRef = React.createRef();
  const onClickDismiss = key => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <Router history={history}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            ref={notistackRef}
            action={(key) => (
              <Button onClick={onClickDismiss(key)}><Check style={{fill:'white'}}/></Button>
            )}
          >
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
                    <Footer/>
                  </div>
                )} /> 

                <Redirect from="*" to={"/"} />

              </Switch>
            </div>
          </SnackbarProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  );
}

export default App;
