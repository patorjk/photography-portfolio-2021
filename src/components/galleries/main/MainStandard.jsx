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

const MainStandard = () => {
  return (
    <ContentFlowGrid>
      <PhotoViewer
        album={getPhotoAlbumByName('patterson-park-pagoda-in-springtime')}
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
        album={getPhotoAlbumByName('downs-park-pier')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('the-thunderbirds')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('fort-armistead-sunrise-1')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('something-in-the-mist')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('mossbrae-falls')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('fells-point-sunrise')}
        slimDescription={false}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('icy-domino-sugars-factory')}
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

export { MainStandard };
