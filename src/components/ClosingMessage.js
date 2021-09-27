import React from 'react';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
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
}));

export default function(props) {
  const classes = useStyles();

  return (
    <div className={classes.paper} style={{textAlign:'left'}}>
      <p>
        Hello, and thank you for visiting. If you're interested in more of my work you can checkout
        my social media links up at the top. I also have a <a href="https://www.youtube.com/user/patorjk/">YouTube</a> channel, 
        and at some point I may try and do a video on this site.
        Though then again I might not, so if you sub you might be subbing to a channel that will be dormant for a while, and then when I finally do upload you'll be all confused about why you're subbed to the channel... so yeah, your decision :P.
      </p>
      <p>
        Still reading, eh? Just to explain the footer below this, I put random text there to see if anyone would read it. Mostly just stuff that makes me laugh, or on rare occasion something mildly informative.
      </p>
    </div>
  );
}