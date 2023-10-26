import { Box, Link } from '@mui/material';
import React from 'react';
import { MagicalText } from 'react-halloween';
import { getPhotoAlbumByName } from '../../photos';
import ClosingMessage from '../ClosingMessage';
import { ContentFlowGrid } from '../ContentFlowGrid';
import Footer from '../Footer';
import PhotoViewer from '../PhotoViewer';

const Christmas = () => {
  return (
    <ContentFlowGrid>
      <Box>
        <h2>Christmas</h2>
        <p>
          After my{' '}
          <Link href={'/gallery/halloween-houses'}>Halloween House</Link>{' '}
          escapades, it seemed only fitting to try and do something similar for
          Christmas. Thankfully it's a lot easier to find amazing Christmas
          lights. I think these shots are much nicer too. People love going
          all-out for Christmas.
        </p>
      </Box>

      <PhotoViewer
        album={getPhotoAlbumByName('34th-street-1')}
        slimDescription={true}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('mount-drive')}
        slimDescription={true}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('washington-dc-temple')}
        slimDescription={true}
      />

      <p>
        This surreal looking building is the Washington DC Mormon Temple. It's
        closed to the public most of the year, but they open the grounds up to
        the public during December. It's mostly to try and recruit people. They
        talk about Jesus and provide hot chocolate and cookies, but for me the
        main draw is the lights and scenery. I wish there was more architecture
        like this.
      </p>

      <PhotoViewer
        album={getPhotoAlbumByName('winter-wonderland')}
        slimDescription={true}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('sedge-court')}
        slimDescription={true}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('ec-lights')}
        slimDescription={true}
      />

      <p>
        The above place is known as "EC Lights" on Google Maps. In addition to a
        fancy light display there's music, dancing, and free popcorn and hot
        chocolate. The place was actually packed. I made the above image by
        taking many shots and then combining them to get a clear view of
        everything.
      </p>

      <PhotoViewer
        album={getPhotoAlbumByName('34th-street-2015')}
        slimDescription={true}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('old-columbia-pike')}
        slimDescription={true}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('christmas-pagoda')}
        slimDescription={true}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('34th-street-tree')}
        slimDescription={true}
      />

      <Box>
        <h3>
          <MagicalText
            animationTime={10}
            showAdornments={false}
            text={'Is there any more?'}
          />
        </h3>
        <p>
          I have a{' '}
          <Link
            href={
              'https://www.flickr.com/photos/40423570@N07/albums/72177720304864106'
            }
          >
            Flickr Christmas Gallery
          </Link>{' '}
          with 60+ images. I decided to save this page for displaying the best
          of the best. If you liked this gallery you may also like my{' '}
          <Link href={'/gallery/halloween-houses'}>
            Halloween Houses Gallery
          </Link>
          . It's a bit harder to find cool Halloween displays, but there are
          some good ones out there.
        </p>
      </Box>

      <ClosingMessage />
      <Footer />
    </ContentFlowGrid>
  );
};

export { Christmas };
