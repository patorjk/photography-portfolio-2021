import { Box, Link } from '@mui/material';
import React from 'react';
import { MagicalText } from 'react-halloween';
import { getPhotoAlbumByName } from '../../photos';
import ClosingMessage from '../ClosingMessage';
import { ContentFlowGrid } from '../ContentFlowGrid';
import Footer from '../Footer';
import PhotoViewer from '../PhotoViewer';

const Halloween = () => {
  return (
    <ContentFlowGrid>
      <Box>
        <h2>Halloween Houses</h2>
        <p>
          I've always been a big fan of Halloween. I usually keep my camera with
          me and sometimes when I see a really decked out house I'll stop and
          take a picture. This page is a collection of the best houses I've seen
          so far.
        </p>
      </Box>

      <PhotoViewer
        album={getPhotoAlbumByName('halloween-death-plague-dance-party')}
        slimDescription={true}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('my-house-halloween-2023')}
        slimDescription={true}
      />

      <p>
        The above house is mine from 2023. I decided to get in on the fun after
        photographing a number of these types of houses. If you click the switch
        you can see what it looks like during the day. I think it would be cool
        to do more houses like this.
      </p>

      <PhotoViewer
        album={getPhotoAlbumByName('halloween-pumpkin-scarecrow')}
        slimDescription={true}
      />

      <p>
        The most important part of any display is the lights. Not something you
        think about for Halloween, but without them you can't see anything.
      </p>

      <PhotoViewer
        album={getPhotoAlbumByName('halloween-dena-cemetery')}
        slimDescription={true}
      />

      <p>
        For the above shot, the guy's flood lights came on right after I
        finished taking the shot. I was like "oh shit, this guy is not cool with
        this" — but he ended up being pretty flattered and even offered to turn
        everything back on (apparently he was doing a test run and didn't even
        see me until the lights went on).
      </p>

      <PhotoViewer
        album={getPhotoAlbumByName('halloween-pirate-skeletons')}
        slimDescription={true}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('halloween-green-graveyard')}
        slimDescription={true}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('halloween-cutouts')}
        slimDescription={true}
      />

      <p>
        Sadly finding these houses is kind of hard. At least really good ones
        worth displaying here. I hope to find some more good ones as time goes
        on.
      </p>

      <PhotoViewer
        album={getPhotoAlbumByName('halloween-biohazard')}
        slimDescription={true}
      />

      <Box>
        <h3>
          <MagicalText
            animationTime={10}
            showAdornments={false}
            text={"Where's the rest?"}
          />
        </h3>
        <p>
          You can check out more in my{' '}
          <Link
            href={
              'https://www.flickr.com/photos/40423570@N07/albums/72177720303296931'
            }
          >
            Flickr Halloween Gallery
          </Link>{' '}
          (there are 20+ more images there). I decided to save this page for
          displaying the best of the best. Hopefully with each passing Halloween
          I can add some more to both galleries. Until then, if you like these
          kinds of photos check out my{' '}
          <Link href={'/gallery/christmas'}>Christmas Houses Gallery</Link>.
          It's (unsurprisingly) a lot easier to find really cool Christmas
          displays.
        </p>
      </Box>

      <ClosingMessage />
      <Footer />
    </ContentFlowGrid>
  );
};

export { Halloween };
