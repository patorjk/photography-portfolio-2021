import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import { getPhotoAlbumByName } from '../../photos';
import ClosingMessage from '../ClosingMessage';
import { ContentFlowGrid } from '../ContentFlowGrid';
import Footer from '../Footer';
import PhotoViewer from '../PhotoViewer';

const Panoramas = () => {
  return (
    <ContentFlowGrid>
      <Box>
        <h2>Panoramas</h2>
        <p>
          One of my goals for this site was to make viewing my panoramas easier.
          You can more easily view them by grabbing them with your mouse or
          finger and pulling them left or right.
        </p>
      </Box>

      <PhotoViewer album={getPhotoAlbumByName('baltimore-skyline-2016-pano')} />

      <h2>Grab the image and pull it that way 👈.</h2>

      <PhotoViewer
        album={getPhotoAlbumByName('middle-branch-park-2019-pano')}
      />
      <PhotoViewer
        album={getPhotoAlbumByName('middle-branch-trailhead-no9-pano')}
      />
      <PhotoViewer album={getPhotoAlbumByName('baltimore-skyline-2022-pano')} />
      <PhotoViewer album={getPhotoAlbumByName('fells-point-2020-pano')} />

      <ClosingMessage />
      <Footer />
    </ContentFlowGrid>
  );
};

export { Panoramas };
