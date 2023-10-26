/*
  Notes:
  - All pageContent items need a unique name.
 */
import { Link } from '@mui/material';
import React from 'react';
import { LightsOut, MagicalText } from 'react-halloween';
import config from '../app.config';
import MainEnding from '../components/blurbs/MainEnding';
import MainImageToggles from '../components/blurbs/MainImageToggles';
import MainIntro from '../components/blurbs/MainIntro';
import MainPanoramas from '../components/blurbs/MainPanoramas';
import { Christmas } from '../components/galleries/Christmas';
import { Dark } from '../components/galleries/Dark';
import { Halloween } from '../components/galleries/Halloween';
import { Interactive } from '../components/galleries/Interactive';
import { MainChristmas } from '../components/galleries/main/MainChristmas';
import { MainHalloween } from '../components/galleries/main/MainHalloween';
import { MainSpring } from '../components/galleries/main/MainSpring';
import { MainStandard } from '../components/galleries/main/MainStandard';
import { MainSummer } from '../components/galleries/main/MainSummer';
import { McCloudAtNight } from '../components/galleries/McCloudAtNight';
import { Panoramas } from '../components/galleries/Panoramas';
import { SunrisesAndSunsets } from '../components/galleries/SunrisesAndSunsets';

function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

const galleries = [
  {
    name: 'main-standard',
    label: 'Main',
    description: 'The photographic portfolio of Patrick Gillespie.',
    photoName: 'patterson-park-pagoda-in-springtime',
    component: MainStandard,
  },
  {
    name: 'main-spring',
    label: 'Main',
    description: 'The photographic portfolio of Patrick Gillespie.',
    photoName: 'patterson-park-pagoda-in-springtime',
    component: MainSpring,
  },
  {
    name: 'main-summer',
    label: 'Main',
    description: 'The photographic portfolio of Patrick Gillespie.',
    photoName: 'patterson-park-pagoda-in-springtime',
    component: MainSummer,
  },
  {
    name: 'main-halloween',
    label: 'Main',
    description: 'The photographic portfolio of Patrick Gillespie.',
    photoName: 'patterson-park-pagoda-in-springtime',
    component: MainHalloween,
  },
  {
    name: 'main-christmas',
    label: 'Main',
    description: 'The photographic portfolio of Patrick Gillespie.',
    photoName: 'patterson-park-pagoda-in-springtime',
    component: MainChristmas,
  },
  {
    name: 'sunrises-and-sunsets',
    label: 'Sunrises/Sunsets',
    description: 'The photographic portfolio of Patrick Gillespie.',
    photoName: 'fort-armistead-sunrise-1',
    component: SunrisesAndSunsets,
  },
  {
    name: 'interactive',
    label: 'Interactive',
    description: 'A gallery of interactive photographic images.',
    photoName: 'baltimore-skyline-light-toggle',
    component: Interactive,
  },
  {
    name: 'dark',
    label: 'Dark',
    description: 'Some spooky images.',
    photoName: 'a-pathway-to-nightmares',
    component: Dark,
  },
  {
    name: 'mccloud-at-night',
    label: 'McCloud at Night',
    description: 'A photographic essay on the town of McCloud, CA.',
    photoName: 'mccloud-church-witching-hour',
    component: McCloudAtNight,
  },

  // Christmas
  {
    name: 'christmas',
    label: 'Christmas',
    description: 'A gallery of houses that went all-out for Christmas.',
    photoName: '34th-street-1',
    component: Christmas,
  },

  // Halloween
  {
    name: 'halloween-houses',
    label: 'Halloween Houses',
    description: 'A gallery of cool houses that went all-out for Halloween.',
    photoName: 'halloween-death-plague-dance-party',
    component: Halloween,
  },
  // end Halloween

  {
    name: 'panoramas',
    label: 'Panoramas',
    description: 'A set of panoramas from the Baltimore area.',
    photoName: 'baltimore-skyline-2016-pano',
    component: Panoramas,
  },
];

galleries.forEach((gg) => {
  gg.title = gg.label + ' | ' + config.title.main;
});

// see app.php
console.log('galleries');
const _galleries = galleries.map((item) => ({
  name: item.name,
  title: item.label,
  photoName: item.photoName,
  description: item.description,
}));
console.dir(_galleries);
console.log(JSON.stringify(_galleries).replace(/'/g, "\\'"));

export { galleries };
