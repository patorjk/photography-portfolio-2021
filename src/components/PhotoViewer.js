import React, { useState, useEffect, useRef, useCallback } from 'react';
import MediaQuery from 'react-responsive';

import makeStyles from '@mui/styles/makeStyles';

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import clsx from 'clsx';
import Button from '@mui/material/Button';
import ReactGA from 'react-ga';
import useBreakpoints from '../hooks/breakpoints.js';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import PhotoDescription from './PhotoDescription';

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
  image: {
    textAlign:'center',
    position: 'absolute',
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
}));

function Photo(props) {
  let {
    album,
  } = props;

  const classes = useStyles();
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(album.transitionOptions?.imageStart || 0);
  const [imageNearView, setImageNearView] = useState(false);
  const [isOffScreen, setIsOffScreen] = useState(false);
  const [canMoveStepper, setCanMoveStepper] = useState(true);
  const container = useRef();
  const [clientX, setClientX] = useState(null);
  const [xOffset, setXOffset] = useState(0);

  const {
    aspects,
    ranges,
    breakpoints
  } = useBreakpoints();

  const slowTransition = album.transitionOptions ? album.transitionOptions.slowTransition : false;
  const transitionTime = slowTransition ? 3000 : 1000;
  const isImageSet = album.photos.length > 1 ? true : false;
  const imgSetSize = album.photos.length;
  const transitionType = album.transitionOptions?.type ? album.transitionOptions.type : 'stepper';
  const photos = album.photos;
  let photoLabel = props.album.id;

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


  const onPointerDown = useCallback((event) => {
    setClientX(event.clientX);
  }, [setClientX]);
  const onPointerMove = useCallback((event) => {
    if (clientX !== null && transitionType === 'stepper' && photos.length > 1) {
      setXOffset(event.clientX - clientX);
    }
  }, 
  [
    clientX,
    transitionType,
    photos,
  ]);
  const onPointerUp = useCallback((event) => {
    let rect = container.current.getBoundingClientRect();
    if (rect && rect.width) {
      if (Math.abs(xOffset) > rect.width/2) {
        if (xOffset < 0) {

          ReactGA.event({
            category: 'Image Drag',
            action: 'Drag Left',
            label: photoLabel
          });

          setActiveStep(Math.min(photos.length - 1, activeStep + 1));
        } else {

          ReactGA.event({
            category: 'Image Drag',
            action: 'Drag Right',
            label: photoLabel
          });

          setActiveStep(Math.max(0, activeStep - 1));
        }
      }
    }

    setClientX(null);
    setXOffset(0);
  }, 
  [
    setClientX,
    xOffset,
    setXOffset,
    activeStep,
    setActiveStep,
    container,
    photos,
    photoLabel,
  ]);
  useEffect(() => {
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointerup", onPointerUp);
    }
  }, [onPointerUp])

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

  let containerStyle = {
    height: window.innerWidth <= 600 ? (window.innerWidth * aspects[album.aspect].ratio) : aspects[album.aspect][currentBreakpoint].height + 'px',
    width: window.innerWidth <= 600 ? '100%' : aspects[album.aspect][currentBreakpoint].width + 'px',
    overflow: 'hidden',
    position: 'relative'
  };

  const getImageLeft = (index) => {
    if (index === activeStep) {
      return xOffset + 'px';
    }
    if (index === (activeStep - 1)) {
      return `calc(-100% + ${xOffset}px)`;
    }
    if (index < activeStep) {
      return '-200%';
    }
    if (index === (activeStep + 1)) {
      return `calc(100% + ${xOffset}px)`;
    }
    if (index > activeStep) {
      return '200%';
    }
  };
  const getImageTransition = (index) => {
    if (clientX !== null || transitionType === 'toggle') {
      return 'left 0s';
    } else if (transitionType === 'stepper') {
      if (slowTransition) {
        return 'left 3s';
      } else {
        return 'left 1s';
      }
    } else {
      return 'left 0s';
    }
  };
  const getImageCursor = () => {
    if (clientX === null && transitionType === 'stepper' && photos.length > 1) {
      return 'grab';
    } else if (clientX !== null && transitionType === 'stepper' && photos.length > 1) {
      return 'grabbing';
    } else {
      return 'default';
    }
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
                })} 
                style={{
                  'left': getImageLeft(idx),
                  'transition': getImageTransition(idx),
                  'cursor': getImageCursor(),
                  'touchAction': 'none',
                }}
                width={aspects[album.aspect][point].width} 
                height={aspects[album.aspect][point].height} 
                alt={album.altText} 
                draggable={false}
                onPointerDown={onPointerDown}
                onPointerUp={onPointerUp}
                onPointerMove={onPointerMove}
              />
            ))}

          </MediaQuery>
        ))}
      </div>

      {(isImageSet && transitionType === 'stepper') ? 
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

      {(isImageSet && transitionType === 'toggle') ?
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="top"
              control={<Switch color="primary" onChange={toggleChange} defaultChecked={album.transitionOptions.imageStart === 1} />}
              label={album.transitionOptions.toggleLabel}
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
        : null
      }

      {(album.description || album.descriptions) ? 
        <PhotoDescription
          album={album}
          activeStep={activeStep}
        />
        : null
      }
    </div>
  );
}

export default Photo;