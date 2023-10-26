import { Box, Link } from '@mui/material';
import React from 'react';
import MainEnding from '../../blurbs/MainEnding';
import MainImageToggles from '../../blurbs/MainImageToggles';
import MainIntro from '../../blurbs/MainIntro';
import MainPanoramas from '../../blurbs/MainPanoramas';
import { getPhotoAlbumByName } from '../../../photos';
import ClosingMessage from '../../ClosingMessage';
import { ContentFlowGrid } from '../../ContentFlowGrid';
import Footer from '../../Footer';
import PhotoViewer from '../../PhotoViewer';

const MainHalloween = () => {
  return (
    <ContentFlowGrid>
      <PhotoViewer
        album={getPhotoAlbumByName('halloween-houses')}
        slimDescription={false}
      />

      <MainIntro />

      <PhotoViewer
        album={getPhotoAlbumByName('my-house-halloween-2023')}
        slimDescription={false}
      />

      <MainImageToggles />

      <PhotoViewer
        album={getPhotoAlbumByName('middle-branch-park-2019-pano')}
        slimDescription={false}
      />

      <MainPanoramas />

      <PhotoViewer
        album={getPhotoAlbumByName('a-pathway-to-nightmares')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('something-in-the-mist')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('foggy-carroll-park')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('the-haunted-car')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('downs-park-pier-foggy')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('heart-lake-smoky')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('old-american-brewery')}
        slimDescription={false}
      />

      <MainEnding />

      <ClosingMessage />
      <Footer />
    </ContentFlowGrid>
  );
};

export { MainHalloween };
