import { Box, Link } from '@mui/material';
import React from 'react';
import { getPhotoAlbumByName } from '../../photos';
import ClosingMessage from '../ClosingMessage';
import { ContentFlowGrid } from '../ContentFlowGrid';
import Footer from '../Footer';
import PhotoViewer from '../PhotoViewer';

const McCloudAtNight = () => {
  return (
    <ContentFlowGrid>
      <Box>
        <h2>McCloud at Night</h2>
        <p>
          The images in this gallery are of a small town called McCloud. One
          night while the rest of my family slept I decided to venture out into
          the town to see what I could find. I was struck by how quiet and
          nostalgic it felt. I brought my camera along (after coming across a
          strange house - more on that later) and took pictures of sights that I
          thought looked interesting.
        </p>
      </Box>

      <PhotoViewer
        album={getPhotoAlbumByName('mccloud-church-down-the-street')}
        slimDescription={true}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('mccloud-church-witching-hour')}
        slimDescription={true}
      />

      <p>
        This ominous looking church loomed over the main part of town and had an
        eerie vibe to it. It's probably a perfectly normal church where nice
        people spend their Sunday, but it just has such a strange presence to
        it.
      </p>

      <PhotoViewer
        album={getPhotoAlbumByName('mccloud-illuminated')}
        slimDescription={true}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('mccloud-the-house')}
        slimDescription={true}
      />

      <Box>
        <p>
          In the middle of the darkness there was this old house on cinder
          blocks. I thought it would make a cool shot, so I went and got my
          camera, which then eventually led to me walking around and taking the
          other pictures in this gallery.
        </p>
        <p>
          Later I would discover that this house had been{' '}
          <Link
            href={
              'https://www.siskiyoudaily.com/picture-gallery/news/2020/11/17/st-josephs-rectory-moved-across-mccloud/6324358002/'
            }
          >
            moved there
          </Link>{' '}
          from a few streets over. It was a historic building, and rather than
          tear it down the owner sold it to someone who planned to use it as a
          place of business on Main Street. A few years later when I came back
          to the town it was still in the same place and still on cinder blocks.
        </p>
      </Box>

      <PhotoViewer
        album={getPhotoAlbumByName('mccloud-high-school')}
        slimDescription={true}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('mccloud-pocket-of-light')}
        slimDescription={true}
      />

      <p>
        An interesting fact about McCloud is that originally it was a company
        town where the company (affectionately known as "Mother McCloud") owned
        all of the houses. In the 1960's, as it was winding down, it sold the
        houses to the people who were living in them for $5k each. Sadly not all
        of the workers could afford this price tag.
      </p>

      <PhotoViewer
        album={getPhotoAlbumByName('mccloud-light-at-the-end-of-the-road')}
        slimDescription={true}
      />

      <PhotoViewer
        album={getPhotoAlbumByName('mccloud-lonely-road')}
        slimDescription={true}
      />

      <Box>
        <p>
          Another interesting fact about McCloud is that the town's water comes
          from the Konwakiton Glacier. Some hippies and mystics believe the
          water has special powers and will come from miles around to get jugs
          of it to take home with them. I can't say if its magical or not, but
          it does taste good.
        </p>
        <p>
          About 15 years ago Nestle got wind of this water supply and swooped in
          to buy it up. In classic super villain fashion the town was going to
          get a terrible deal and Nestle was going to be able to suck up all of
          their water. As an example of the company's douchebaggery, they
          promised the townsfolk that their water plant would bring jobs to the
          town, but after looking into this it was discovered that the plant
          would mostly be automated and that it would only bring{' '}
          <strong>2</strong> jobs to the area.
        </p>
        <p>
          Thankfully the project was{' '}
          <Link href={'https://caltrout.org/50th/nestle-mccloud'}>stopped</Link>{' '}
          at the 11th hour and the town was spared from Nestle's parasitic
          clutches. The town is slowly dying though, and I imagine other
          vultures will circle in and try to get at their water one day.
        </p>
      </Box>

      <PhotoViewer
        album={getPhotoAlbumByName('mccloud-playground')}
        slimDescription={true}
      />

      <p>
        I don't know why, but there's a certain creepy feeling that accompanies
        being at a playground at night. It feels wrong somehow and even though I
        think this is a cool shot, I tried to take it as quickly as possible
        just to get out of there. What really freaked me out though was that as
        I was leaving a group of teenagers approached me and yelled out: "hey
        faggot!". I thought for sure I was about to be jumped, but once they saw
        I was just some random guy doing photography they profusely apologized.
        They claimed they thought I was someone else, a "friend" of theirs.
      </p>

      <PhotoViewer
        album={getPhotoAlbumByName('mccloud-the-book')}
        slimDescription={true}
      />

      <Box>
        <p>
          Sometimes in these small towns you learn about local legends. This is
          a monument to Joaquin Miller, the "Poet of the Sierras" and author of
          "Life Among the Modocs". Miller lived near McCloud when he was living
          with the Wintu people (a local indigenous tribe).
        </p>
        <p>
          Miller lived a rather colorful life. To give the briefest of
          summaries: He was a self-styled Indian fighter who later took up arms
          with the local tribes. He explored the American north west and worked
          as a lawyer, cook, teacher, judge, and news paper editor. He committed
          a number of petty crimes, broke himself out of jail, and ran off to
          England, where he hit it big as a poet.
        </p>
        <p>
          While mostly unknown today, he was hugely popular when he died, and
          over 1000 people attended his funeral. The preacher who spoke called
          him "the last of America's great poets". However, chaos broke out
          before the ceremony could end and police had to recue his corpse from
          unruly spectators who had began to ransack his house.
        </p>
      </Box>

      <PhotoViewer
        album={getPhotoAlbumByName('mccloud-gas-station')}
        slimDescription={true}
      />

      <p>I just think gas stations look cool at night.</p>

      <PhotoViewer
        album={getPhotoAlbumByName('mccloud-at-night')}
        slimDescription={true}
      />

      <Box>
        <h2>Thank you</h2>
        <p>
          Thank you for checking out my gallery on McCloud at night. Hopefully
          you enjoyed these images and maybe got the same liminal space vibe
          that I got as I was exploring the town.
        </p>
        <p>
          Though these images were a little unsettling, the area around McCloud
          is actually quite beautiful and one of my favorite places to visit. If
          you enjoy the great outdoors I'd encourage you to check the place out
          as there are lots of things to do in the surrounding area.
        </p>
      </Box>

      <ClosingMessage />
      <Footer />
    </ContentFlowGrid>
  );
};

export { McCloudAtNight };
