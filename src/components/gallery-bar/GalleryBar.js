import {Box} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { Eyes } from 'react-halloween';
import useEvent from '../../hooks/useEvent';
import {GalleryLink} from './GalleryLink';
import {getPhotoAlbumByName} from '../../photos';

const GalleryBar = () => {
  const theme = useTheme();
  const [eyesOpen, setEyesOpen] = useState(false);
  const mccloud = getPhotoAlbumByName('mccloud-church-down-the-street');
  const imgSrc = mccloud.photosNormalSize[0]['600'];
  const mccloudGlowOptions = {
    boxShadowOff: `0px 0px 0px ${alpha(theme.palette.primary.main, 0)}`,
    boxShadowOn: `0px 0px 40px ${alpha(theme.palette.primary.main, 1)}`

  };

  const onMouseEnter = useEvent(() => {
    setEyesOpen(true);
  });
  const onMouseLeave = useEvent(() => {
    setEyesOpen(false);
  });

  const halloween = getPhotoAlbumByName('halloween-death-plague-dance-party');
  const halloweenSrc =halloween.photosNormalSize[0]['600'];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Eyes
        width={200}
        irisColor={'crimson'}
        eyeBallColor={'rgb(255,220,220)'}
        pupilColor={'rgb(70,0,0)'}
        pupilSize={0.7}
        eyeShape={1}
        open={eyesOpen}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '3rem',
        }}
      >
        <GalleryLink
          glowOptions={mccloudGlowOptions}
          gallery={'mccloud-at-night'}
          imgSrc={imgSrc}
          galleryName={'McCloud at Night'}
        />

        <GalleryLink
          gallery={'halloween-houses'}
          imgSrc={halloweenSrc}
          galleryName={'Halloween Houses'}
        />

      </Box>
    </Box>
  )
};
export {GalleryBar};
export default GalleryBar;
