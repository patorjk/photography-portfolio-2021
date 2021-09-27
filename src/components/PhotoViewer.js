import React, { useState, useEffect, useRef, useCallback } from 'react';
import MediaQuery from 'react-responsive';

import makeStyles from '@mui/styles/makeStyles';

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import Collapse from '@mui/material/Collapse';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import ReactGA from 'react-ga';
import FloatingMenu from './FloatingMenu';
import useBreakpoints from '../hooks/breakpoints.js';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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
  aboutText: {
    paddingBottom: '50px',
  },
  fadeBlock: {
    position: 'absolute',
    bottom: '0px',
    display: 'block',
    width: '100%',
    height: '50px',
  
    backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9) 100%)'
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
  },

  // slow speed
  currentPhotoToggle: {
    position: 'absolute',
    transition: 'left 0s ',
    left: '0',
  },
  prevPhotoToggle: {
    position: 'absolute',
    transition: 'left 0s ',
    left: '-100%'
  },
  nextPhotoToggle: {
    position: 'absolute',
    transition: 'left 0s ',
    left: '100%'
  }
}));

function Photo(props) {
  let {
    album,
    heartBreak,
    setHeartBreak
  } = props;

  const classes = useStyles();
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(album.imageStart || 0);
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
    const onResize = (evt) => {
      setCurrentBreakpoint( getBreakpoint() );
      setIsOffScreen(false); // TODO - fix this
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [getBreakpoint]);

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

  const toggleChange = (event) => {
    ReactGA.event({
      category: 'Image Toggle',
      action: 'Toggled',
      label: photoLabel
    });

    if (event.target.checked) {
      setActiveStep(1);
    } else {
      setActiveStep(0);
    }
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

                  [classes.prevPhoto]: idx < activeStep && !slowTransition && !album.toggle,
                  [classes.currentPhoto]: idx === activeStep && !slowTransition && !album.toggle,
                  [classes.nextPhoto]: idx > activeStep && !slowTransition && !album.toggle,

                  [classes.prevPhotoSlow]: idx < activeStep && slowTransition && !album.toggle,
                  [classes.currentPhotoSlow]: idx === activeStep && slowTransition && !album.toggle,
                  [classes.nextPhotoSlow]: idx > activeStep && slowTransition && !album.toggle,

                  [classes.prevPhotoToggle]: idx < activeStep && album.toggle,
                  [classes.currentPhotoToggle]: idx === activeStep && album.toggle,
                  [classes.nextPhotoToggle]: idx > activeStep && album.toggle,
                })} 
                width={aspects[album.aspect][point].width} 
                height={aspects[album.aspect][point].height} 
                alt={album.altText} />
            ))}

          </MediaQuery>
        ))}
      </div>

      {(isImageSet && !album.toggle) ? 
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

      {album.toggle ?
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="top"
              control={<Switch color="primary" onChange={toggleChange} defaultChecked={album.imageStart === 1} />}
              label={album.toggleLabel}
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
        : null
      }

      {album.description ? 
        <div className={clsx(classes.paper)}>
          <Collapse in={isTextOpen} collapsedSize={50} style={{position:'relative'}}>
            <div className={classes.aboutText}>
              {typeof album.description === "string" ? <p>{album.description}</p> :
                album.description.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))
              }
            </div>

            <div className={classes.fadeBlock}/>

            <FloatingMenu 
              album={album}
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