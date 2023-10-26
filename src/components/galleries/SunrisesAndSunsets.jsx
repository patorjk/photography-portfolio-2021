import { Box, Link } from '@mui/material';
import React from 'react';
import { getPhotoAlbumByName } from '../../photos';
import ClosingMessage from '../ClosingMessage';
import { ContentFlowGrid } from '../ContentFlowGrid';
import Footer from '../Footer';
import PhotoViewer from '../PhotoViewer';

const SunrisesAndSunsets = () => {
  return (
    <ContentFlowGrid>
      <Box>
        <h2>Sunrises and Sunsets</h2>
        <p>
          Most of these are sunrises. It's fun to be out exploring while
          everyone else is busy sleeping.
        </p>
      </Box>

      <PhotoViewer
        album={getPhotoAlbumByName('fort-armistead-sunrise-1')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('fells-point-sunrise')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('downs-park-pier')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('domino-sugars-sunrise')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('promenade-view-1')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('broening-park-1')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('federal-hill-view-1')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('inner-harbor-sunrise')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('fells-point-puddle')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('middle-branch-boat-ramp')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('jordan-lake')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('fort-armistead-sunrise-2')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('cherry-blossoms-dc')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('baltimore-skyline-2016')}
        slimDescription={false}
      />

      <ClosingMessage />
      <Footer />
    </ContentFlowGrid>
  );
};

export { SunrisesAndSunsets };
