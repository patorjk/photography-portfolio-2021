import { Box, Link } from '@mui/material';
import React from 'react';
import { getPhotoAlbumByName } from '../../photos';
import ClosingMessage from '../ClosingMessage';
import { ContentFlowGrid } from '../ContentFlowGrid';
import Footer from '../Footer';
import PhotoViewer from '../PhotoViewer';

const Interactive = () => {
  return (
    <ContentFlowGrid>
      <Box>
        <h2>Interactive Images</h2>
        <p>
          These are images you can interact with in some way. Right now the
          section is pretty small but I hope to expand on it in the future.
        </p>
      </Box>

      <PhotoViewer
        album={getPhotoAlbumByName('baltimore-skyline-light-toggle')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('domino-2021-sunrise-toggle')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('middle-branch-pier')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('broening-park-sunrise-nd-filter')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('my-house-halloween-2023')}
        slimDescription={false}
      />

      <ClosingMessage />
      <Footer />
    </ContentFlowGrid>
  );
};

export { Interactive };
