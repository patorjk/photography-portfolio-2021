import React, { useState } from 'react';

import Collapse from '@mui/material/Collapse';
import clsx from 'clsx';
import ReactGA from 'react-ga';
import FloatingMenu from './FloatingMenu';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  paper: {
    color: theme.palette.text.secondary,
    position:'relative',
    textAlign: 'left',
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
  fadeBlock: {
    position: 'absolute',
    bottom: '0px',
    display: 'block',
    width: '100%',
    height: '50px',
  
    backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9) 100%)'
  },
  aboutText: {
    paddingBottom: '50px',
  },
}));

function PhotoDescription(props) {
  const {
    album,
    activeStep,
  } = props;

  const classes = useStyles();
  let photoLabel = album.id;

  const [isTextOpen, setIsTextOpen] = useState(false);

  const toggleTextOpen = () => {
    ReactGA.event({
      category: 'Text',
      action: 'Toggle Description',
      label: photoLabel
    });
    setIsTextOpen(!isTextOpen);
  };

  const description = album.descriptions ? album.descriptions[activeStep] : album.description;

  return (
    <div className={clsx(classes.paper)}>
      <Collapse in={isTextOpen} collapsedSize={50} style={{position:'relative'}}>
        <div className={classes.aboutText}>
          {typeof description === "string" ? <p>{description}</p> :
            description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))
          }
        </div>

        <div className={clsx({
          [classes.fadeBlock]: true
        })}/>

        <FloatingMenu 
          album={album}
          photoLabel={photoLabel} 
          isTextOpen={isTextOpen}
          toggleTextOpen={toggleTextOpen}
          flickrURL={album.flickr} 
          instagramURL={album.instagram} 
        />
      </Collapse>
    </div>
  );
}

export default PhotoDescription;