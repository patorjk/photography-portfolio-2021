import React from 'react';
import Grid from '@mui/material/Grid';
import makeStyles from '@mui/styles/makeStyles';

import clsx from 'clsx';
import { createPhotoAlbum } from '../photos/index.js';
import PhotoViewer from './PhotoViewer.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  stepper: {
    flexGrow: 1,
  },
  paper: {
    color: theme.palette.text.secondary,
    [theme.breakpoints.up('xs')]: {
      width: '100%'
    },
    [theme.breakpoints.up('sm')]: {
      width: '600px'
    },
    [theme.breakpoints.up('md')]: {
      width: '900px'
    },
    [theme.breakpoints.up('lg')]: {
      width: '1200px'
    },
    [theme.breakpoints.up('xl')]: {
      width: '1536px'
    },
  },
  aboutSection: {
    textAlign: 'left',
  },
  aboutHeader: {
    marginTop: 0,
  },
  aboutImage: {
    textAlign:'center'
  }
}));

function About() {
  const classes = useStyles();

  let aboutAlbum =  {
    photoFolders: [
      '2016_cherry_pat',
      '2017_cherry_pat',
      '2018_cherry_pat',
      '2019_cherry_pat',
      '2020_cherry_pat',
      '2021_cherry_pat_1',
      '2021_cherry_pat_2',
    ],
    aspect: "6x4",
    altText: "Me, sitting under a tree",
  };
  aboutAlbum = createPhotoAlbum(aboutAlbum);

  return (
    <div className={classes.root}>

      <Grid container spacing={0} justifyContent="center" alignItems="center" align="center">
        <Grid item xs={12}>
          <div className={classes.paper}>
            <PhotoViewer album={aboutAlbum} />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={clsx(classes.paper, classes.aboutSection)}>
            <h3 className={classes.aboutHeader}>About</h3>
            <p>
              My name is Pat, I'm a software developer and amateur photographer. I setup this site to show off some of my favorite photos. If you're interested in more of my work you can find me on <a href="https://www.flickr.com/photos/40423570@N07/" target="_blank" rel="noopener noreferrer">Flickr</a> and <a href="https://www.instagram.com/patorjk/" target="_blank" rel="noopener noreferrer">Instagram</a>.
            </p>
            <p>
              Additionally, I run a programming site which you can find here: <a href="http://patorjk.com/" target="_blank" rel="noopener noreferrer">patorjk.com</a> (it's mostly stuff from my high school and college days)
            </p>
            <p>
              The above set of images are self portraits from my yearly trip down to the Tidal Basin in Washington DC to see the Cherry Blossoms. I rarely take photos of myself but on one visit I decided it was such a nice morning that I should take a photo to remember it. Since then I've continued the tradition, regardless if the mornings are nice or kind of drab.
            </p>
          </div>
        </Grid>

      </Grid>

    </div>
  );
}

export default About;