import Collapse from '@mui/material/Collapse';
import { alpha } from '@mui/material/styles';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import ReactGA from 'react-ga4';
import FloatingMenu from './FloatingMenu';
import ResponsiveContainer from './styled/ResponsiveContainer';

const AboutText = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isCollapsed',
})((props) => ({
  paddingLeft: '12px',
  paddingRight: '12px',
  paddingBottom: '50px',
  fontStyle: props.isCollapsed ? 'italic' : 'normal',
  fontSize: props.isCollapsed ? '0.85rem' : '1rem',
  opacity: props.isCollapsed ? '0.7' : '1',
  transition: 'font-size 1s, opacity 1s',
}));

const FadeBlock = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: '0px',
  display: 'block',
  width: '100%',
  height: '50px',

  // eslint-disable-next-line max-len
  backgroundImage: `linear-gradient(to bottom, ${alpha(
    theme.palette.background.default,
    0
  )}, ${alpha(theme.palette.background.default, 0.9)} 100%)`,
}));

function PhotoDescription(props) {
  const { album, activeStep, slim = false } = props;

  let photoLabel = album.id;

  const [isTextOpen, setIsTextOpen] = useState(false);

  const toggleTextOpen = () => {
    ReactGA.event({
      category: 'Text',
      action: 'Toggle Description',
      label: photoLabel,
    });
    setIsTextOpen(!isTextOpen);
  };

  let description = album.descriptions
    ? album.descriptions[activeStep]
    : album.description;
  const flickrURL = Array.isArray(album.flickr)
    ? album.flickr[activeStep]
    : album.flickr;

  // overwrite description with the caption
  if (slim === true) {
    description = album.caption || '';
  }

  return (
    <ResponsiveContainer sx={{ textAlign: 'left', position: 'relative' }}>
      <Collapse
        in={isTextOpen}
        collapsedSize={50}
        style={{ position: 'relative' }}
      >
        <AboutText isCollapsed={!isTextOpen}>
          {typeof description === 'string' ? (
            <p>{description}</p>
          ) : (
            description.map((para, idx) => <p key={idx}>{para}</p>)
          )}
        </AboutText>

        {slim === false && <FadeBlock />}

        <FloatingMenu
          album={album}
          description={slim ? false : description}
          photoLabel={photoLabel}
          isTextOpen={isTextOpen}
          toggleTextOpen={toggleTextOpen}
          flickrURL={flickrURL}
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
