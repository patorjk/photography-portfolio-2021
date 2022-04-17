import {Link} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {StyledEngineProvider, ThemeProvider} from '@mui/material/styles';
import {styled} from '@mui/system';
import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import ReactGA from 'react-ga';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import Cookies from 'universal-cookie';
import About from './About.js';
import ContentGrid from './ContentGrid';
import Footer from './Footer.js';
import NavBar from './NavBar.js';
import SinglePhoto from './SinglePhoto';
import config from '../app.config.js';
import {galleries} from '../photos';
import {
  DefaultTheme,
  HalloweenTheme,
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
  case location.pathname?.match(/^\/photo/)?.input:
    name = /[^/]*$/.exec(location.pathname)[0];
    name = toTitleCase(name.replace(/-/g,' '));
    document.title = name + ' | ' + config.title.main;
    break;
  case location.pathname?.match(/^\/gallery/)?.input:
    name = /[^/]*$/.exec(location.pathname)[0];
    name = toTitleCase(name.replace(/-/g,' '));
    document.title = name + ' | ' + config.title.main;
    break;
  default:
    document.title = config.title.main;
  }
}

function usePageViews() {
  let location = useLocation();

  useEffect(
    () => {
      const loc = location.pathname + location.hash;
      console.log(`New location: ${loc}`);
      ReactGA.set({page: location.pathname + location.hash});
      ReactGA.pageview(location.pathname + location.hash);
      updatePageTitle(location);
    },
    [location]
  );
}

function getQueryParams() {
  let queryString = window.location.search || '';
  let query = {};
  let pairs = (queryString[0] === '?' ? queryString.substring(1) : queryString).split('&');
  for (let ii = 0; ii < pairs.length; ii++) {
    let pair = pairs[ii].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}

const ContentWrapper = styled('div')(() => ({
  display:'flex',
  flexDirection:'column',
  height:'100%'
}));

const MainContent = styled('div')(() => ({
  flex: '1 0 auto'
}));

function SinglePhotoRoute() {
  let params = useParams();
  return (
    <ContentWrapper>
      <MainContent>
        <SinglePhoto photoName={params.photo} />
      </MainContent>
      <Footer/>
    </ContentWrapper>
  );
}

function GalleryRoute(props) {
  const {
    gallery,
  } = props;

  return (
    <ContentWrapper>
      <MainContent>
        <ContentGrid items={gallery.pageContent}/>
      </MainContent>
      <Footer/>
    </ContentWrapper>
  );
}
GalleryRoute.propTypes = {
  gallery: PropTypes.object,
};

function PatorjkRoute() {
  return (
    <ContentWrapper>
      <MainContent>
        <div style={{padding: '20px'}}>
          <h3>How did you get here?</h3>
          <p>
            My analytics tell me this is a popular route (/patorjk), but I'm not sure how people are finding it.
            Did you mean to go to
            {' '}
            <Link href={'https://patorjk.com/'}>patorjk.com</Link>?
          </p>
        </div>
      </MainContent>
      <Footer/>
    </ContentWrapper>
  );
}

function MainRoute(props) {
  const {
    month,
  } = props;
  let mainGallery = galleries.find(item => item.name === 'main-standard');
  if ( month === '10') {
    mainGallery = galleries.find(item => item.name === 'main-halloween');
  } else if ( ['03','04','05'].indexOf(month) !== -1) {
    mainGallery = galleries.find(item => item.name === 'main-spring');
  } else if ( ['06','07','08'].indexOf(month) !== -1) {
    mainGallery = galleries.find(item => item.name === 'main-summer');
  } else if ( ['12'].indexOf(month) !== -1) {
    mainGallery = galleries.find(item => item.name === 'main-christmas');
  }

  return (<GalleryRoute gallery={mainGallery} />);
}
MainRoute.propTypes = {
  month: PropTypes.string,
};

function ScrollToTop() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function InnerApp() {
  usePageViews();
  let params = getQueryParams();
  let date = params.date || new Date().toISOString();
  let dateParams = date.match(/^\d\d\d\d-(\d\d)-(\d\d)/);
  if (dateParams === null) {
    dateParams = (new Date().toISOString()).match(/^\d\d\d\d-(\d\d)-(\d\d)/);
  }
  let [, month, day] = dateParams;

  // default theme
  let defaultTheme = DefaultTheme.theme;
  if (month === '10') {
    defaultTheme = HalloweenTheme.theme;
  }

  const cookies = new Cookies();
  let savedTheme = cookies.get('theme');
  const startingThemeItem = themes.find(tt => tt.label === savedTheme);
  const startingTheme = startingThemeItem ? startingThemeItem.theme : defaultTheme;

  const [theme, setTheme] = useState(startingTheme);

  const miscGallery = galleries.find(item => item.name === 'misc');
  const sunriseGallery = galleries.find(item => item.name === 'sunrises-and-sunsets');

  return (
    <>
      <ScrollToTop />
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar theme={theme} setTheme={setTheme} />
          <div style={{paddingTop:'64px',boxSizing:'border-box',height:'100%'}}>
            <Routes>

              <Route
                path={'/'}
                element={<MainRoute month={month} day={day} />}
              />

              {/* legacy */}
              <Route
                path={'/sunrises'}
                element={<GalleryRoute gallery={sunriseGallery} />}
              />

              {/* legacy */}
              <Route
                path={'/misc'}
                element={<GalleryRoute gallery={miscGallery} />}
              />

              {galleries.map( gallery => (
                <Route 
                  path={`/gallery/${gallery.name}`}
                  key={gallery.label} 
                  element={<GalleryRoute gallery={gallery} />}
                />
              ))}

              <Route
                path={'/patorjk'}
                element={<PatorjkRoute />}
              />

              <Route path='/photo/:photo' element={<SinglePhotoRoute />} />

              <Route path='/about' element={
                <ContentWrapper>
                  <MainContent>
                    <About/>
                  </MainContent>
                </ContentWrapper>
              }/>

            </Routes>
          </div>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

function App() {
  return (
    <Router>
      <InnerApp/>
    </Router>
  );
}

export default App;
