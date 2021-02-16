import React, { useState, useEffect, useRef, useCallback } from 'react';
import MediaQuery from 'react-responsive';

import { makeStyles } from '@material-ui/core/styles';

import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import ReactGA from 'react-ga';
import FloatingMenu from './FloatingMenu';
import useBreakpoints from '../hooks/breakpoints.js';

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
      width: '960px'
    },
    [theme.breakpoints.up('lg')]: {
      width: '1280px'
    },
    [theme.breakpoints.up('xl')]: {
      width: '1920px'
    },
  },
  aboutText: {
    paddingBottom: '50px',
  },
  fadeBlock: {
    position: 'absolute',
    bottom: '0px',
    display: 'block',
    width: '100%',
    height: '50px',
  
    backgroundImage: 'linear-gradient(to bottom, rgba(250, 250, 250, 0), rgba(250, 250, 250, 0.9) 100%)'
  },
  image: {
    textAlign:'center'
  },
  stepper: {
    flexGrow: 1,
  },
  photoContainer: {
    transition: 'opacity 1s',
    opacity: 1
  },
  photoContainerOffScreen: {
    opacity: 0,
  },

  // normal speed
  currentPhoto: {
    position: 'absolute',
    transition: 'left 1s ',
    left: '0',
  },
  prevPhoto: {
    position: 'absolute',
    transition: 'left 1s ',
    left: '-100%'
  },
  nextPhoto: {
    position: 'absolute',
    transition: 'left 1s ',
    left: '100%'
  },

  // slow speed
  currentPhotoSlow: {
    position: 'absolute',
    transition: 'left 3s ',
    left: '0',
  },
  prevPhotoSlow: {
    position: 'absolute',
    transition: 'left 3s ',
    left: '-100%'
  },
  nextPhotoSlow: {
    position: 'absolute',
    transition: 'left 3s ',
    left: '100%'
  }
}));

function Photo(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const [isTextOpen, setIsTextOpen] = useState(false);
  const [imageNearView, setImageNearView] = useState(false);
  const [isOffScreen, setIsOffScreen] = useState(false);
  const [canMoveStepper, setCanMoveStepper] = useState(true);
  const container = useRef();

  const {
    aspects,
    ranges,
    breakpoints
  } = useBreakpoints();

  useEffect(() => {
    console.log('useEffect onScroll');
    const onScroll = (evt) => {
      if (container.current) {
        let rect = container.current.getBoundingClientRect();
        
        let _isOffScreen = (
           (rect.x + rect.width) < 0 
             || (rect.y + rect.height) < 0
             || (rect.x > window.innerWidth || rect.y > window.innerHeight)
         );
        
        setIsOffScreen(_isOffScreen);

        if (!imageNearView) {
          let threshold = (window.innerHeight * 3) + window.pageYOffset;
          if (rect.top < threshold) {
            setImageNearView(true);
            console.log('load image!');
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [container, imageNearView]);

  // handle window resize
  const getBreakpoint = useCallback(() => {
    return breakpoints.slice(1).reduce((current, point) => {
      return (point < window.innerWidth) ? point : current;
    }, breakpoints[1]);
  }, [breakpoints]);
  const [currentBreakpoint, setCurrentBreakpoint] = useState( getBreakpoint() );
  useEffect(() => {
    console.log('useEffect onResize');
    const onResize = (evt) => {
      setCurrentBreakpoint( getBreakpoint() );
      setIsOffScreen(false); // TODO - fix this
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [getBreakpoint]);

  let {
    album,
    heartBreak,
    setHeartBreak
  } = props;

  const slowTransition = album.slowTransition;
  const transitionTime = slowTransition ? 3000 : 1000;
  const isImageSet = album.photos.length > 1 ? true : false;
  const imgSetSize = album.photos.length;
  const photos = album.photos;
  let photoLabel = props.album.id;

  const handleNext = () => {
    if (!canMoveStepper) return;
    setCanMoveStepper(false);

    ReactGA.event({
      category: 'Stepper',
      action: 'Next Photo',
      label: photoLabel
    });
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    setTimeout(() => {
      setCanMoveStepper(true);
    }, transitionTime);
  };

  const handleBack = () => {
    if (!canMoveStepper) return;
    setCanMoveStepper(false);

    ReactGA.event({
      category: 'Stepper',
      action: 'Previous Photo',
      label: photoLabel
    });
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

    setTimeout(() => {
      setCanMoveStepper(true);
    }, transitionTime);
  };

  const toggleTextOpen = () => {
    ReactGA.event({
      category: 'Text',
      action: 'Toggle Description',
      label: photoLabel
    });
    setIsTextOpen(!isTextOpen);
  };

  let browserWidth = window.innerWidth;

  let containerStyle = {
    height: window.innerWidth <= 600 ? (window.innerWidth * aspects[album.aspect].ratio) : aspects[album.aspect][currentBreakpoint].height + 'px',
    width: window.innerWidth <= 600 ? '100%' : aspects[album.aspect][currentBreakpoint].width + 'px',
    overflow: 'hidden',
    position: 'relative'
  };

  return (
    <div className={clsx({
      [classes.paper]: true,
      [classes.photoContainer]: true,
      [classes.photoContainerOffScreen]: isOffScreen
    })} ref={container}>

      <div style={containerStyle}>
        {breakpoints.map(point => (
          <MediaQuery minWidth={ranges[point].min} maxWidth={ranges[point].max} key={point} >

            {photos.map((img, idx) => (
              <img 
                key={idx}
                src={img[Math.max(point, 600)]} 
                className={clsx({
                  [classes.image]: true,

                  [classes.prevPhoto]: idx < activeStep && !slowTransition,
                  [classes.currentPhoto]: idx === activeStep && !slowTransition,
                  [classes.nextPhoto]: idx > activeStep && !slowTransition,

                  [classes.prevPhotoSlow]: idx < activeStep && slowTransition,
                  [classes.currentPhotoSlow]: idx === activeStep && slowTransition,
                  [classes.nextPhotoSlow]: idx > activeStep && slowTransition,
                })} 
                width={aspects[album.aspect][point].width} 
                height={aspects[album.aspect][point].height} 
                alt={album.altText} />
            ))}

          </MediaQuery>
        ))}
      </div>

      {isImageSet ? 
        <MobileStepper
          variant="dots"
          steps={imgSetSize}
          position="static"
          activeStep={activeStep}
          className={classes.stepper}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === imgSetSize - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Previous
            </Button>
          }
        />
        : null
      }

      {album.description ? 
        <div className={clsx(classes.paper)}>
          <Collapse in={isTextOpen} collapsedHeight={50} style={{position:'relative'}}>
            <div className={classes.aboutText}>
              {typeof album.description === "string" ? <p>{album.description}</p> :
                album.description.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))
              }
            </div>

            <div className={classes.fadeBlock}/>

            <FloatingMenu 
              photoLabel={photoLabel} 
              isTextOpen={isTextOpen}
              toggleTextOpen={toggleTextOpen}
              setHeartBreak={setHeartBreak}
              heartBreak={heartBreak}
              flickrURL={album.flickr} 
              instagramURL={album.instagram} />
          </Collapse>
        </div>
        : null
      }
    </div>
  );
}

export default Photo;