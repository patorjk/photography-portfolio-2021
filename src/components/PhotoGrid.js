import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { getPhotoAlbumsByCategory } from '../photos/index.js';
import PhotoViewer from './PhotoViewer.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0),
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
      width: '960px'
    },
    [theme.breakpoints.up('lg')]: {
      width: '1280px'
    },
    [theme.breakpoints.up('xl')]: {
      width: '1920px'
    },
  },
  gridItem: {
    marginBottom: '50px'
  },
}));

function PhotoGrid(props) {

  const classes = useStyles();

  const [heartBreak, setHeartBreak] = useState(false);

  let photos = getPhotoAlbumsByCategory(props.category);

  return (
    <div className={classes.root}>

      <Grid container alignItems="center" justify="center" align="center">

        {photos.map((photo, idx) => (
          <Grid item xs={12} className={classes.gridItem} key={idx}>
              <PhotoViewer album={photo} heartBreak={heartBreak} setHeartBreak={setHeartBreak} />
          </Grid>
        ))}

        <Grid item xs={12} className={classes.gridItem}>
            <div className={classes.paper} style={{textAlign:'left'}}>
              <p>
                Hello, and thank you for visiting. This website is under contruction and will most likely be finished in ~2 weeks. However, let's be realistic, I don't expect you to bookmark it and come back in 2 weeks, I just want to give a reason for why it looks a little incomplete.  I am grateful you stopped by though. If you'd like to see more of my work you can check out the social media I listed at the top.
              </p>
              <p>
                If you really wanted to be made aware of when it's done, I might do a <a href="https://www.youtube.com/user/patorjk/">YouTube</a> video on it, so you can sub to me there. Though then again I might not, so you might be subbing to a channel that will be dormant for a while, and then when I finally do upload you'll be all confused about why you're subbed to the channel.. so yeah, your decision :P.
              </p>
            </div>
        </Grid>

      </Grid>

    </div>
  );
}

export default PhotoGrid;