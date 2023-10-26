import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useDesktop } from '../hooks/useDesktop';
import About from './About.js';
import { Dark } from './galleries/Dark';
import { MainStandard } from './galleries/main/MainStandard';
import { SunrisesAndSunsets } from './galleries/SunrisesAndSunsets';
import NavBar from './NavBar.js';
import SinglePhoto from './SinglePhoto';
import config from '../app.config.js';
import { galleries } from '../photos';
// eslint-disable-next-line no-duplicate-imports
import photos from '../photos';

import { DefaultTheme, HalloweenTheme, themes } from '../themes';
import '../i18n';

ReactGA.initialize(config.googleAnalyticsId);

function getPageInfo(location) {
  if (!location) {
    location = window.location;
  }
  let title = 'Patrick Gillespie Photography';
  let description = 'Some cool photos of stuff.';
  let name, elm;

  switch (location.pathname) {
    case '/':
      title = config.title.main;
      break;
    case '/about':
      title = config.title.about;
      description = '7 years of going to the cherry blossoms.';
      break;
    case location.pathname?.match(/^\/photo/)?.input:
      name = /[^/]*$/.exec(location.pathname.replace(/\/$/, ''))[0];
      elm = photos.find((photo) => photo.name === name) || {};
      title = elm.title || config.title.main;
      description =
        elm.description || elm.altText || elm.caption || 'A cool photo.';
      break;
    case location.pathname?.match(/^\/gallery/)?.input:
      name = /[^/]*$/.exec(location.pathname.replace(/\/$/, ''))[0];
      elm = galleries.find((gal) => gal.name === name) || {};
      title = elm.title || config.title.main;
      description = elm.description;
      break;
  }

  return {
    title,
    description,
  };
}

function usePageViews() {
  let location = useLocation();

  useEffect(() => {
    const loc = location.pathname + location.hash;
    console.log(`New location: ${loc}`);
    ReactGA.set({ page: location.pathname + location.hash });
  }, [location]);

  return getPageInfo(location);
}

function getQueryParams() {
  let queryString = window.location.search || '';
  let query = {};
  let pairs = (
    queryString[0] === '?' ? queryString.substring(1) : queryString
  ).split('&');
  for (let ii = 0; ii < pairs.length; ii++) {
    let pair = pairs[ii].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}

function SinglePhotoRoute() {
  let params = useParams();
  return <SinglePhoto photoName={params.photo} />;
}

function MainRoute(props) {
  const { month } = props;
  let mainGallery = galleries.find((item) => item.name === 'main-standard');
  if (month === '10') {
    mainGallery = galleries.find((item) => item.name === 'main-halloween');
  } else if (['03', '04', '05'].indexOf(month) !== -1) {
    mainGallery = galleries.find((item) => item.name === 'main-spring');
  } else if (['06', '07', '08'].indexOf(month) !== -1) {
    mainGallery = galleries.find((item) => item.name === 'main-summer');
  } else if (['12'].indexOf(month) !== -1) {
    mainGallery = galleries.find((item) => item.name === 'main-christmas');
  }

  return <mainGallery.component />;
}
MainRoute.propTypes = {
  month: PropTypes.string,
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function InnerApp() {
  const { title: pageTitle, description: pageDescription } = usePageViews();
  const { i18n } = useTranslation();

  useEffect(() => {
    console.log('Language:' + i18n.language);
    ReactGA.event({
      category: 'i18n',
      action: 'language',
      label: i18n.language,
    });
  }, [i18n.language]);

  const isDesktopOrLaptop = useDesktop();

  let params = getQueryParams();
  let date = params.date || new Date().toISOString();
  let dateParams = date.match(/^\d\d\d\d-(\d\d)-(\d\d)/);
  if (dateParams === null) {
    dateParams = new Date().toISOString().match(/^\d\d\d\d-(\d\d)-(\d\d)/);
  }
  let [, month, day] = dateParams;

  // default theme
  let defaultTheme = DefaultTheme.theme;
  if (month === '10') {
    defaultTheme = HalloweenTheme.theme;
  }

  const cookies = new Cookies();
  let savedTheme = cookies.get('theme');
  const startingThemeItem = themes.find((tt) => tt.label === savedTheme);
  const startingTheme = startingThemeItem
    ? startingThemeItem.theme
    : defaultTheme;

  const [theme, setTheme] = useState(startingTheme);

  return (
    <React.Suspense fallback={'loading...'}>
      <ScrollToTop />
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Helmet>
            <title>{pageTitle}</title>
            <meta name={'description'} content={pageDescription} />
          </Helmet>
          <NavBar theme={theme} setTheme={setTheme} />
          <div
            style={{
              paddingTop: isDesktopOrLaptop ? '64px' : 0,
              boxSizing: 'border-box',
              height: '100%',
            }}
          >
            <Routes>
              <Route
                path={'/'}
                element={<MainRoute month={month} day={day} />}
              />

              {/* legacy */}
              <Route path={'/sunrises'} element={<SunrisesAndSunsets />} />

              {/* legacy */}
              <Route path={'/misc'} element={<MainStandard />} />

              {/* gallery was renamed */}
              <Route
                path={`/gallery/spooky`}
                key={'spooky'}
                element={<Dark />}
              />

              {galleries.map((gallery) => (
                <Route
                  path={`/gallery/${gallery.name}`}
                  key={gallery.label}
                  element={<gallery.component />}
                />
              ))}

              <Route
                path={'/patorjk'}
                element={<MainRoute month={month} day={day} />}
              />

              <Route path="/photo/:photo" element={<SinglePhotoRoute />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </ThemeProvider>
      </StyledEngineProvider>
    </React.Suspense>
  );
}

function App() {
  return (
    <Router>
      <HelmetProvider>
        <InnerApp />
      </HelmetProvider>
    </Router>
  );
}

export default App;
