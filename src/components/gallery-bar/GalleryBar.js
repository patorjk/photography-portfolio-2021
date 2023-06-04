import { Box } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import React, { useCallback, useState } from 'react';
import { Eyes } from 'react-halloween';
import { useLocation } from 'react-router-dom';
import { GalleryLink } from './GalleryLink';
import { getPhotoAlbumByName } from '../../photos';

/*
TODO: Ugh, this file is ugly and needs to be refactored
 */

const GalleryBar = () => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const [eyesOpen, setEyesOpen] = useState(false);
  const mccloud = getPhotoAlbumByName('mccloud-church-down-the-street');
  const imgSrc = mccloud.photosNormalSize[0]['600'];
  const mccloudGlowOptions = {
    boxShadowOff: `0px 0px 0px ${alpha(theme.palette.primary.main, 0)}`,
    boxShadowOn: `0px 0px 40px ${alpha(theme.palette.primary.main, 1)}`,
  };
  const christmasGlowOptions = {
    boxShadowOff: `0px 0px 0px ${alpha('#009535', 0)}`,
    boxShadowOn: `0px 0px 40px ${alpha('#009535', 1)}`,
  };
  const sunriseGlowOptions = {
    boxShadowOff: `0px 0px 0px ${alpha('#EC5972', 0)}`,
    boxShadowOn: `0px 0px 40px ${alpha('#EC5972', 1)}`,
  };
  const panoramaGlowOptions = {
    boxShadowOff: `0px 0px 0px ${alpha('#FEBC5B', 0)}`,
    boxShadowOn: `0px 0px 40px ${alpha('#FEBC5B', 1)}`,
  };
  const interactiveGlowOptions = {
    boxShadowOff: `0px 0px 0px ${alpha('#93B3E2', 0)}`,
    boxShadowOn: `0px 0px 40px ${alpha('#93B3E2', 1)}`,
  };

  const onMouseEnter = useCallback(() => {
    setEyesOpen(true);
  }, [setEyesOpen]);
  const onMouseLeave = useCallback(() => {
    setEyesOpen(false);
  }, [setEyesOpen]);

  const halloween = getPhotoAlbumByName('halloween-death-plague-dance-party');
  const halloweenSrc = halloween.photosNormalSize[0]['600'];

  const christmas = getPhotoAlbumByName('34th-street-1');
  const christmasSrc = christmas.photosNormalSize[0]['600'];

  const sunrise = getPhotoAlbumByName('fort-armistead-sunrise-2');
  const sunriseSrc = sunrise.photosNormalSize[0]['600'];

  const panorama = getPhotoAlbumByName('middle-branch-park-2019-pano');
  const panoramaSrc = panorama.photosNormalSize[0]['600'];

  const interactive = getPhotoAlbumByName('baltimore-skyline-light-toggle');
  const interactiveSrc = interactive.photosNormalSize[0]['600'];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px',
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
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          gap: '3rem',
        }}
      >
        {pathname.indexOf('mccloud-at-night') === -1 && (
          <GalleryLink
            glowOptions={mccloudGlowOptions}
            gallery={'mccloud-at-night'}
            imgSrc={imgSrc}
            galleryName={'McCloud at Night'}
          />
        )}

        {pathname.indexOf('halloween-houses') === -1 && (
          <GalleryLink
            gallery={'halloween-houses'}
            imgSrc={halloweenSrc}
            galleryName={'Halloween Houses'}
          />
        )}

        {pathname.indexOf('christmas') === -1 && (
          <GalleryLink
            glowOptions={christmasGlowOptions}
            gallery={'christmas'}
            imgSrc={christmasSrc}
            galleryName={'Christmas'}
          />
        )}

        {pathname.indexOf('sunrises-and-sunsets') === -1 && (
          <GalleryLink
            glowOptions={sunriseGlowOptions}
            gallery={'sunrises-and-sunsets'}
            imgSrc={sunriseSrc}
            galleryName={'Sunrises & Sunsets'}
          />
        )}

        {pathname.indexOf('panoramas') === -1 && (
          <GalleryLink
            glowOptions={panoramaGlowOptions}
            gallery={'panoramas'}
            imgSrc={panoramaSrc}
            galleryName={'Panoramas'}
          />
        )}

        {pathname.indexOf('interactive') === -1 && (
          <GalleryLink
            glowOptions={interactiveGlowOptions}
            gallery={'interactive'}
            imgSrc={interactiveSrc}
            galleryName={'Interactive'}
          />
        )}
      </Box>
    </Box>
  );
};
export { GalleryBar };
export default GalleryBar;
