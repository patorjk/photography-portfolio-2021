import React, {useState} from 'react'
import ReactGA from 'react-ga';
import {
  IconButton
} from '@material-ui/core';
import {
  Favorite,
  FavoriteBorder
} from '@material-ui/icons';
import {makeStyles} from '@material-ui/styles';
import { useSnackbar } from 'notistack';
import Tooltip from '@material-ui/core/Tooltip';
import confetti from 'canvas-confetti';

const useStyles = makeStyles(theme => ({
  favoriteIcon: {
    fill: theme.palette.secondary.main
  },
  likeBtn: {
    color: theme.palette.primary.main,
  }
}));

export default function(props) {

  const [liked, setLiked] = useState(false);
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [position, setPosition] = useState(0);

  const {
    heartBreak,
    setHeartBreak
  } = props;

  const responses = [
    [
      "Aww, thank you!",
      "You're the best!",
      "I feel so loved 😊",
      "You like me, you really like me!"
    ],
    "Don't be silly, you can't double like a photo! You're too kind! Go sub to me on YouTube or Flickr or something!",
    "Heh, your finger slipped... yeah that's what happened... don't worry, I've kept the photo liked. 😑",
    "Noooooo, I need likes! Don't do this!",
    "What kind of filthy bastard tries to unlike a photo!? You make me sick! I mean, uh, excuse me. I-I don't know what came over me. Have I told you how beautiful you are today? And how amazingly smart and funny you are too? You're so amazing... now let's just keep this photo liked and move along to the next one... 😁",
    "Never!",
    "💔"
  ];

  const actions = [
    "Single Like (Like step 1)",
    "Double Like (Like step 2)",
    "Slipped (Like step 3)",
    "Noooooo (Like step 4)",
    "Flithy Bastard (Like step 5)",
    "Never! (Like step 6)",
    "Heart Break (Like step 7)"
  ];

  const click = (evt) => {
    let newStatus = liked;
    let msg = '';

    // record event
    if (heartBreak !== true) {
      ReactGA.event({
        category: 'Like',
        action: actions[ position ]
      });
    }

    // confetti when like button changes
    if (position === 0 || (position === 7 && newStatus === false) ) {
      console.log('!!!')
      let xPos = evt.clientX / window.innerWidth;
      let yPos = evt.clientY / window.innerHeight;

      confetti({
        origin: {
          x: xPos,
          y: yPos,
        }
      });
    }

    if (position < responses.length && heartBreak !== true) {
      if (position === 0) {
        msg = responses[0][ Math.floor(Math.random() * responses[0].length) ];
        newStatus = !newStatus;
      } else {
        msg = responses[position];
      }

      if (position === responses.length - 1) {
        newStatus = !newStatus;
        setHeartBreak(true);
      }

      enqueueSnackbar(msg, {
        variant: position < 2 ? 'info' : 'warning'
      });
      setPosition(position + 1);
      setLiked(newStatus);
    } else {
      setLiked(!newStatus);
    }
  };

  return (
    <Tooltip title="Like">
      <IconButton onClick={click}>
        {liked ? 
          <Favorite className={classes.favoriteIcon} />
          :
          <FavoriteBorder className={classes.likeBtn} />
        }
      </IconButton>
    </Tooltip>
  ); 
};