import Collapse from '@mui/material/Collapse';
import { alpha } from '@mui/material/styles';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import ReactGA from 'react-ga';
import FloatingMenu from './FloatingMenu';
import ResponsiveContainer from './styled/ResponsiveContainer';

const AboutText = styled('div')(() => ({
  paddingBottom: '50px',
}));

const FadeBlock = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: '0px',
  display: 'block',
  width: '100%',
  height: '50px',
  
  // eslint-disable-next-line max-len
  backgroundImage: `linear-gradient(to bottom, ${alpha(theme.palette.background.default,0)}, ${alpha(theme.palette.background.default, 0.9)} 100%)`
}));

function PhotoDescription(props) {
  const {
    album,
    activeStep,
  } = props;

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
    <ResponsiveContainer sx={{ textAlign: 'left',position:'relative' }}>
      <Collapse in={ isTextOpen } collapsedSize={ 50 } style={{ position:'relative' }}>
        <AboutText>
          { typeof description === 'string' ? <p>{ description }</p> :
            description.map((para, idx) => (
              <p key={ idx }>{ para }</p>
            ))
          }
        </AboutText>

        <FadeBlock />

        <FloatingMenu 
          album={ album }
          description={ description }
          photoLabel={ photoLabel } 
          isTextOpen={ isTextOpen }
          toggleTextOpen={ toggleTextOpen }
          flickrURL={ album.flickr } 
          instagramURL={ album.instagram } 
        />
      </Collapse>
    </ResponsiveContainer>
  );
}

PhotoDescription.propTypes = {
  album: PropTypes.object,
  activeStep: PropTypes.number,
};

export default PhotoDescription;
