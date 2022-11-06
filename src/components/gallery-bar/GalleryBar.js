import {Box} from '@mui/material';
import React from 'react';
import {GalleryLink} from './GalleryLink';
import {getPhotoAlbumByName} from '../../photos';

const GalleryBar = () => {
  const mccloud = getPhotoAlbumByName('mccloud-church-down-the-street');
  const imgSrc = mccloud.photosNormalSize[0]['600'];

  const halloween = getPhotoAlbumByName('halloween-death-plague-dance-party');
  const halloweenSrc =halloween.photosNormalSize[0]['600'];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <GalleryLink
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
  )
};
export {GalleryBar};
export default GalleryBar;
