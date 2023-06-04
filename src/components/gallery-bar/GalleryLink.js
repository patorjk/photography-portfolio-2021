import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';
import React, { useState } from 'react';
import { Haunted } from 'react-halloween';
import { useNavigate } from 'react-router-dom';

const GalleryLink = ({ gallery, galleryName, glowOptions = {}, imgSrc }) => {
  const navigate = useNavigate();
  const [hovering, setHovering] = useState(false);

  const onClick = () => {
    navigate(`/gallery/${gallery}`);
  };
  const onKeyDown = (evt) => {
    if (evt.code === 'Space' || evt.code === 'Enter') {
      navigate(`/gallery/${gallery}`);
      evt.stopPropagation();
      evt.preventDefault();
    }
  };

  const onMouseEnter = () => {
    setHovering(true);
  };
  const onMouseLeave = () => {
    setHovering(false);
  };
  return (
    <Box
      sx={{
        cursor: 'pointer',
      }}
      aria-label={`Gallery link for ${gallery}`}
      tabIndex={'0'}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Box
        sx={{
          marginLeft: '10px',
          marginRight: '10px',
          width: '300px',
          height: '200px',
        }}
      >
        <Box
          sx={{
            width: '300px',
            height: '200px',
            backgroundColor: 'black',
            border: '1px solid grey',
            borderRadius: '10px',
            position: 'absolute',
            transform: 'translate(-10px, 0) rotate(-5deg)',
          }}
        ></Box>
        <Box
          sx={{
            width: '300px',
            height: '200px',
            backgroundColor: 'black',
            border: '1px solid grey',
            borderRadius: '10px',
            position: 'absolute',
          }}
        ></Box>
        <Haunted
          glowOptions={glowOptions}
          creatureOptions={gallery !== 'halloween-houses' ? null : {}}
          style={{
            width: '300px',
            height: '200px',
            backgroundColor: 'black',
            borderRadius: '10px',
            position: 'absolute',
            transform: 'translate(10px, 0) rotate(5deg)',
          }}
        >
          <Box
            sx={{
              width: '300px',
              height: '200px',
              border: '1px solid grey',
              borderRadius: '10px',
              backgroundImage: `url("${imgSrc}")`,
              backgroundSize: 'contain',
            }}
          ></Box>
        </Haunted>
      </Box>
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '15px',
          color: (theme) => theme.palette.primary.main,
          textDecoration: 'underline',
          textDecorationColor: (theme) =>
            hovering
              ? theme.palette.primary.main
              : alpha(theme.palette.primary.light, 0.4),
        }}
      >
        {galleryName}
      </Box>
    </Box>
  );
};

export { GalleryLink };
export default GalleryLink;
