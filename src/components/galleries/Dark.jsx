import { Box, Link } from '@mui/material';
import React from 'react';
import { getPhotoAlbumByName } from '../../photos';
import ClosingMessage from '../ClosingMessage';
import { ContentFlowGrid } from '../ContentFlowGrid';
import Footer from '../Footer';
import PhotoViewer from '../PhotoViewer';

const Dark = () => {
  return (
    <ContentFlowGrid>
      <Box>
        <h2>Dark</h2>
        <p>
          I'm not a fan of horror, but I love the spooky feeling that a
          forbidding landscape can give off. I don't often go out of my way to
          capture creepy images, but I get excited when an opportunity presents
          itself. These pictures never do well on my social media, sandwiched
          between to photos of sunsets and sunrises, but they have a special
          place in my heart.
        </p>
      </Box>

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

      <ClosingMessage />
      <Footer />
    </ContentFlowGrid>
  );
};

export { Dark };
