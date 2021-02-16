import React from 'react';
import NavBar from './NavBar.js'
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,

} from 'react-router-dom'
import About from './About.js'
import PhotoGrid from './PhotoGrid.js'
import Footer from './Footer.js'
import { createBrowserHistory } from "history";
import config from '../app.config.js';
import ReactGA from 'react-ga';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import Button from '@material-ui/core/Button';
import {
  Check
} from '@material-ui/icons';

ReactGA.initialize(config.googleAnalyticsId);

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
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
  overrides: {
    MuiToolbar: {
      root: {
        backgroundColor: defaultTheme.palette.background.default,
      },
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
      <MuiThemeProvider theme={theme}>
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
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
