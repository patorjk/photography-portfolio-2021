import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactGA from 'react-ga4';
import { useTranslation } from 'react-i18next';
import MediaQuery from 'react-responsive';
import PhotoDescription from './PhotoDescription';
import ResponsiveContainer from './styled/ResponsiveContainer';
import useBreakpoints from '../hooks/breakpoints.js';

function Photo(props) {
  let { album, showDetails, slimDescription = false } = props;

  const theme = useTheme();
  const { t } = useTranslation();

  const [activeStep, setActiveStep] = useState(
    album.transitionOptions?.imageStart || 0
  );
  const [imageNearView, setImageNearView] = useState(false);
  const [isOffScreen, setIsOffScreen] = useState(false);
  const [canMoveStepper, setCanMoveStepper] = useState(true);
  const container = useRef();
  const [clientX, setClientX] = useState(null);
  const [xOffset, setXOffset] = useState(0);

  const { aspects, ranges, breakpoints } = useBreakpoints();

  const slowTransition = album.transitionOptions
    ? album.transitionOptions.slowTransition
    : false;
  const transitionTime = slowTransition ? 3000 : 1000;
  const isImageSet = album.photos.length > 1 ? true : false;
  const imgSetSize = album.photos.length;
  const transitionType = album.transitionOptions?.type
    ? album.transitionOptions.type
    : 'stepper';
  const photos = album.photos;
  let photoLabel = props.album.id;

  useEffect(() => {
    const onScroll = () => {
      if (container.current) {
        let rect = container.current.getBoundingClientRect();

        let _isOffScreen =
          rect.x + rect.width < 0 ||
          rect.y + rect.height < 0 ||
          rect.x > window.innerWidth ||
          rect.y > window.innerHeight;

        setIsOffScreen(_isOffScreen);

        if (!imageNearView) {
          let threshold = window.innerHeight * 3 + window.pageYOffset;
          if (rect.top < threshold) {
            setImageNearView(true);
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [container, imageNearView]);

  // handle window resize
  const getBreakpoint = useCallback(() => {
    return breakpoints.slice(1).reduce((current, point) => {
      return point < window.innerWidth ? point : current;
    }, breakpoints[1]);
  }, [breakpoints]);
  const [currentBreakpoint, setCurrentBreakpoint] = useState(() => getBreakpoint());
  useEffect(() => {
    const onResize = () => {
      setCurrentBreakpoint(getBreakpoint());
      setIsOffScreen(false); // TODO - fix this
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [getBreakpoint]);

  const onPointerDown = useCallback(
    (event) => {
      setClientX(event.clientX);
    },
    [setClientX]
  );
  const onPointerMove = useCallback(
    (event) => {
      if (
        clientX !== null &&
        transitionType === 'stepper' &&
        photos.length > 1
      ) {
        setXOffset(event.clientX - clientX);
        event.stopPropagation();
        event.preventDefault();
      }
    },
    [clientX, transitionType, photos]
  );
  const onPointerUp = useCallback(() => {
    let rect = container.current.getBoundingClientRect();
    if (rect && rect.width) {
      if (Math.abs(xOffset) > rect.width / 4) {
        if (xOffset < 0) {
          ReactGA.event({
            category: 'Image Drag',
            action: 'Drag Left',
            label: photoLabel,
          });

          setActiveStep(Math.min(photos.length - 1, activeStep + 1));
        } else {
          ReactGA.event({
            category: 'Image Drag',
            action: 'Drag Right',
            label: photoLabel,
          });

          setActiveStep(Math.max(0, activeStep - 1));
        }
      }
    }

    setClientX(null);
    setXOffset(0);
  }, [
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
    window.addEventListener('pointerup', onPointerUp);
    return () => {
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [onPointerUp]);

  const handleNext = () => {
    if (!canMoveStepper) return;
    setCanMoveStepper(false);

    ReactGA.event({
      category: 'Stepper',
      action: 'Next Photo',
      label: photoLabel,
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
      label: photoLabel,
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
      label: photoLabel,
    });

    if (event.target.checked) {
      setActiveStep(1);
    } else {
      setActiveStep(0);
    }
  };

  let containerStyle = {
    // eslint-disable-next-line max-len
    height:
      window.innerWidth <= 600
        ? window.innerWidth * aspects[album.aspect].ratio
        : aspects[album.aspect][currentBreakpoint].height + 'px',
    width:
      window.innerWidth <= 600
        ? '100%'
        : aspects[album.aspect][currentBreakpoint].width + 'px',
    overflow: 'hidden',
    position: 'relative',
  };

  const getImageLeft = (index) => {
    if (index === activeStep) {
      return xOffset + 'px';
    }
    if (index === activeStep - 1) {
      return `calc(-100% + ${xOffset}px)`;
    }
    if (index < activeStep) {
      return '-200%';
    }
    if (index === activeStep + 1) {
      return `calc(100% + ${xOffset}px)`;
    }
    if (index > activeStep) {
      return '200%';
    }
  };
  const getImageTransition = () => {
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
    } else if (
      clientX !== null &&
      transitionType === 'stepper' &&
      photos.length > 1
    ) {
      return 'grabbing';
    } else {
      return 'default';
    }
  };
  const getImageTouchAction = () => {
    if (transitionType === 'stepper' && photos.length > 1) {
      return 'pan-y';
    } else {
      return 'auto';
    }
  };

  return (
    <ResponsiveContainer
      sx={{
        position: 'relative',
        textAlign: 'left',
        transition: 'opacity 1s',
        opacity: isOffScreen ? 0 : 1,
      }}
      ref={container}
    >
      <div style={containerStyle}>
        {breakpoints.map((point) => (
          <MediaQuery
            minWidth={ranges[point].min}
            maxWidth={ranges[point].max}
            key={point}
          >
            {photos.map((img, idx) => (
              <img
                key={idx}
                src={img[Math.max(point, 600)]}
                style={{
                  left: getImageLeft(idx),
                  transition: getImageTransition(idx),
                  cursor: getImageCursor(),
                  touchAction: getImageTouchAction(),
                  textAlign: 'center',
                  position: 'absolute',
                }}
                width={aspects[album.aspect][point].width}
                height={aspects[album.aspect][point].height}
                alt={album.altText}
                draggable={false}
                onPointerDown={onPointerDown}
                onPointerUp={onPointerUp}
                onPointerMove={onPointerMove}
                onPointerCancel={onPointerUp}
              />
            ))}
          </MediaQuery>
        ))}
      </div>

      {isImageSet && transitionType === 'stepper' ? (
        <MobileStepper
          variant="dots"
          steps={imgSetSize}
          position="static"
          activeStep={activeStep}
          style={{ flexGrow: 1 }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === imgSetSize - 1}
            >
              {t('photo.next')}
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              {t('photo.previous')}
            </Button>
          }
        />
      ) : null}

      {isImageSet && transitionType === 'toggle' ? (
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="top"
              control={
                <Switch
                  color="primary"
                  checked={activeStep === 1}
                  onChange={toggleChange}
                />
              }
              label={album.transitionOptions.toggleLabel}
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
      ) : null}

      {showDetails !== false ? (
        <PhotoDescription
          album={album}
          activeStep={activeStep}
          slim={slimDescription}
        />
      ) : null}
    </ResponsiveContainer>
  );
}

Photo.propTypes = {
  album: PropTypes.object,
  showDetails: PropTypes.bool,
  slimDescription: PropTypes.bool,
};

export default Photo;
