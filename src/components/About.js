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
      '2022_cherry_pat',
      '2021_cherry_pat_2',
      '2020_cherry_pat',
      '2019_cherry_pat',
      '2018_cherry_pat',
      '2017_cherry_pat',
      '2016_cherry_pat',
    ],
    descriptions: [
      "Year 7 (2022): They cut off the top of my tree! Sadly I read online that these trees typically only live 15-20 years 😭, though they can live over 100 with proper care - so hopefully the park service is able to save this one. However, I've decided I'm going to continue on even if the tree dies.",
      "Year 6 (2021): This is almost the prefect shot (in my mind). With this shot I feel like I finally figured out how to nail the lighting. The only problem is the top of the tree is dying. You can see it start to die in 2020.",
      "Year 5 (2020): The pandemic was just going into full swing and I felt bad just showing up, but after the previous year I felt I should try. This is kind of a crummy shot, but it goes along well with the year. Behind me is the stump of the tree I talked about in the previous 2 shots.",
      "Year 4 (2019): Another nice morning. This whole section was roped off by the park service (they had just removed the tree I mentioned in Year 3) and I briefly thought of discontinuing the tradition, but it seemed like a shame to kill it off so unceremoniously so I stepped over the ropes and quickly took this shot. Thankfully I didn't get in trouble.",
      `Year 3 (2018): This was the year it became a tradition. It was a nice morning and I saw the spot again and was like "I'm doing it!" My only regret is that I framed the shot to include the dying tree that's almost directly behind me (in Year 5 you can see this tree's stump behind me - they removed it prior to Year 4's blossoms). This may be the best year for the main tree's blossoms. After Year 4 this tree starts to decline (though maybe it'll make a come back?).`,
      `Year 2 (2017): This was the year a freeze killed many of the blossoms. It was a pretty "meh" morning and I wasn't getting many good shots. I saw this spot again and decided to recreate my shot from the previous year just for fun.`,
      `Year 1 (2016): Technically this was my second year in a row visiting the Cherry Blossoms, but it was the first where I really knew what I was doing photography-wise and it was a really nice morning. My best shots of the area are from this day. Anyway, it was so nice I decided to do a self portrait next to the branches of this one particular tree.`,
    ],
    aspect: "6x4",
    altText: "Me, sitting under a tree",
    showShareLink: false,
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