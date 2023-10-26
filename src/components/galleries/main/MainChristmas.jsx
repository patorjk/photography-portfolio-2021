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

const MainChristmas = () => {
  return (
    <ContentFlowGrid>
      <PhotoViewer
        album={getPhotoAlbumByName('34th-street-1')}
        slimDescription={false}
      />

      <MainIntro />

      <PhotoViewer
        album={getPhotoAlbumByName('baltimore-skyline-light-toggle')}
        slimDescription={false}
      />

      <MainImageToggles />

      <PhotoViewer
        album={getPhotoAlbumByName('middle-branch-park-2019-pano')}
        slimDescription={false}
      />

      <MainPanoramas />

      <PhotoViewer
        album={getPhotoAlbumByName('icy-domino-sugars-factory')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('downs-park-pier')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('fort-armistead-sunrise-1')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('mossbrae-falls')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('middle-branch-pier')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('fells-point-sunrise')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('kids')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('inner-harbor-sunrise')}
        slimDescription={false}
      />

      <MainEnding />

      <ClosingMessage />
      <Footer />
    </ContentFlowGrid>
  );
};

export { MainChristmas };
