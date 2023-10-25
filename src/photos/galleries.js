/*
  Notes:
  - All pageContent items need a unique name.
 */
import { Link } from '@mui/material';
import React from 'react';
import { LightsOut, MagicalText } from 'react-halloween';
import config from '../app.config';
import MainEnding from '../components/blurbs/MainEnding';
import MainImageToggles from '../components/blurbs/MainImageToggles';
import MainIntro from '../components/blurbs/MainIntro';
import MainPanoramas from '../components/blurbs/MainPanoramas';

function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

const galleries = [
  {
    name: 'main-standard',
    label: 'Main',
    description: 'The photographic portfolio of Patrick Gillespie.',
    pageContent: [
      { type: 'photo', name: 'patterson-park-pagoda-in-springtime' },
      {
        type: 'react',
        name: 'main-standard-intro-blurb',
        children: <MainIntro />,
      },
      { type: 'photo', name: 'baltimore-skyline-light-toggle' },
      {
        type: 'react',
        name: 'main-standard-toggle-blurb',
        children: <MainImageToggles />,
      },
      { type: 'photo', name: 'middle-branch-park-2019-pano' },
      {
        type: 'react',
        name: 'main-standard-panoramas-blurb',
        children: <MainPanoramas />,
      },
      { type: 'photo', name: 'downs-park-pier' },
      { type: 'photo', name: 'the-thunderbirds' },
      { type: 'photo', name: 'fort-armistead-sunrise-1' },
      { type: 'photo', name: 'something-in-the-mist' },
      { type: 'photo', name: 'mossbrae-falls' },
      { type: 'photo', name: 'fells-point-sunrise' },
      { type: 'photo', name: 'icy-domino-sugars-factory' },
      { type: 'photo', name: 'inner-harbor-sunrise' },
      {
        type: 'react',
        name: 'main-spring-footer-text',
        children: <MainEnding />,
      },
    ],
  },
  {
    name: 'main-spring',
    label: 'Main',
    description: 'The photographic portfolio of Patrick Gillespie.',
    pageContent: [
      { type: 'photo', name: 'patterson-park-pagoda-in-springtime' },
      {
        type: 'react',
        name: 'main-spring-intro-blurb',
        children: <MainIntro />,
      },
      { type: 'photo', name: 'baltimore-skyline-light-toggle' },
      {
        type: 'react',
        name: 'main-spring-toggle-blurb',
        children: <MainImageToggles />,
      },
      { type: 'photo', name: 'middle-branch-park-2019-pano' },
      {
        type: 'react',
        name: 'main-spring-panoramas-blurb',
        children: <MainPanoramas />,
      },
      { type: 'photo', name: 'mt-vernon-fountain' },
      { type: 'photo', name: 'downs-park-pier' },
      { type: 'photo', name: 'fort-armistead-sunrise-1' },
      { type: 'photo', name: 'mossbrae-falls' },
      { type: 'photo', name: 'fells-point-sunrise' },
      { type: 'photo', name: 'cherry-blossoms-dc' },
      { type: 'photo', name: 'inner-harbor-sunrise' },
      {
        type: 'react',
        name: 'main-spring-footer-text',
        children: <MainEnding />,
      },
    ],
  },
  {
    name: 'main-summer',
    label: 'Main',
    description: 'The photographic portfolio of Patrick Gillespie.',
    pageContent: [
      { type: 'photo', name: 'patterson-park-pagoda-in-springtime' },
      { type: 'photo', name: 'baltimore-skyline-light-toggle' },
      { type: 'photo', name: 'the-thunderbirds' },
      { type: 'photo', name: 'downs-park-pier' },
      { type: 'photo', name: 'fort-armistead-sunrise-1' },
      { type: 'photo', name: 'mossbrae-falls' },
      { type: 'photo', name: 'middle-branch-pier' },
      { type: 'photo', name: 'fells-point-sunrise' },
      { type: 'photo', name: 'jordan-lake' },
      { type: 'photo', name: 'inner-harbor-sunrise' },
    ],
  },
  {
    name: 'main-halloween',
    label: 'Main',
    description: 'The photographic portfolio of Patrick Gillespie.',
    pageContent: [
      { type: 'photo', name: 'halloween-houses' },
      { type: 'photo', name: 'a-pathway-to-nightmares' },
      { type: 'photo', name: 'something-in-the-mist' },
      { type: 'photo', name: 'foggy-carroll-park' },
      { type: 'photo', name: 'the-haunted-car' },
      { type: 'photo', name: 'downs-park-pier-foggy' },
      { type: 'photo', name: 'heart-lake-smoky' },
      { type: 'photo', name: 'old-american-brewery' },
    ],
  },
  {
    name: 'main-christmas',
    label: 'Main',
    description: 'The photographic portfolio of Patrick Gillespie.',
    pageContent: [
      { type: 'photo', name: '34th-street-1' },
      { type: 'photo', name: 'baltimore-skyline-light-toggle' },
      { type: 'photo', name: 'icy-domino-sugars-factory' },
      { type: 'photo', name: 'downs-park-pier' },
      { type: 'photo', name: 'fort-armistead-sunrise-1' },
      { type: 'photo', name: 'mossbrae-falls' },
      { type: 'photo', name: 'middle-branch-pier' },
      { type: 'photo', name: 'fells-point-sunrise' },
      { type: 'photo', name: 'kids' },
      { type: 'photo', name: 'inner-harbor-sunrise' },
    ],
  },
  {
    name: 'misc',
    label: 'Misc',
    description: 'The photographic portfolio of Patrick Gillespie.',
    pageContent: [
      { type: 'photo', name: 'mt-vernon-fountain' },
      { type: 'photo', name: 'a-pathway-to-nightmares' },
      { type: 'photo', name: '34th-street-1' },
      { type: 'photo', name: 'george-peabody-library' },
      { type: 'photo', name: 'foggy-carroll-park' },
      { type: 'photo', name: 'kids' },
      { type: 'photo', name: 'annapolis-rock-1' },
      { type: 'photo', name: 'the-haunted-car' },
      { type: 'photo', name: 'baltimore-skyline-2016-pano' },
    ],
  },
  {
    name: 'sunrises-and-sunsets',
    label: 'Sunrises/Sunsets',
    description: 'The photographic portfolio of Patrick Gillespie.',
    pageContent: [
      { type: 'photo', name: 'fort-armistead-sunrise-1' },
      { type: 'photo', name: 'fells-point-sunrise' },
      { type: 'photo', name: 'downs-park-pier' },
      { type: 'photo', name: 'domino-sugars-sunrise' },
      { type: 'photo', name: 'promenade-view-1' },
      { type: 'photo', name: 'broening-park-1' },
      { type: 'photo', name: 'federal-hill-view-1' },
      { type: 'photo', name: 'inner-harbor-sunrise' },
      { type: 'photo', name: 'fells-point-puddle' },
      { type: 'photo', name: 'middle-branch-boat-ramp' },
      { type: 'photo', name: 'jordan-lake' },
      { type: 'photo', name: 'fort-armistead-sunrise-2' },
      { type: 'photo', name: 'cherry-blossoms-dc' },
      { type: 'photo', name: 'baltimore-skyline-2016' },
    ],
  },
  {
    name: 'interactive',
    label: 'Interactive',
    description: 'A gallery of interactive photographic images.',
    pageContent: [
      { type: 'photo', name: 'baltimore-skyline-light-toggle' },
      {
        type: 'text',
        header: 'Interactive Images',
        text: [
          `These are images you can interact with in some way. Right now the section is pretty small but I hope to
            expand on it in the future.`,
        ],
      },
      { type: 'photo', name: 'domino-2021-sunrise-toggle' },
      { type: 'photo', name: 'middle-branch-pier' },
      { type: 'photo', name: 'broening-park-sunrise-nd-filter' },
      {
        type: 'photo',
        name: 'my-house-halloween-2023',
      },
    ],
  },
  {
    name: 'dark',
    label: 'Dark',
    description: 'Some spooky images.',
    pageContent: [
      { type: 'photo', name: 'a-pathway-to-nightmares' },
      {
        type: 'text',
        header: 'Dark',
        text: [
          `I'm not a fan of horror, but I love the spooky feeling that a forbidding landscape can give off.
           I don't often go out of my way to capture creepy images, but I get excited when an opportunity 
           presents itself. These pictures never do well on my social media, sandwiched between to photos of 
           sunsets and sunrises, but they have a special place in my heart.`,
        ],
      },
      { type: 'photo', name: 'something-in-the-mist' },
      { type: 'photo', name: 'foggy-carroll-park' },
      { type: 'photo', name: 'the-haunted-car' },
      { type: 'photo', name: 'downs-park-pier-foggy' },
      { type: 'photo', name: 'heart-lake-smoky' },
      { type: 'photo', name: 'old-american-brewery' },
    ],
  },
  {
    name: 'mccloud-at-night',
    label: 'McCloud at Night',
    description: 'A photographic essay on the town of McCloud, CA.',
    pageContent: [
      {
        type: 'photo',
        name: 'mccloud-church-down-the-street',
        photoProps: { showDetails: false },
      },
      {
        type: 'text',
        header: 'McCloud at Night',
        text: [
          `The images in this gallery are of a small town called McCloud. One night while the rest of my family slept 
          I decided to venture out into the town to see what I could find. 
          I was struck by how quiet and nostalgic it felt. I brought my camera along 
          (after coming across a strange house - more on that later) 
          and took pictures of sights that I thought looked interesting.`,
        ],
      },
      {
        type: 'photo',
        name: 'mccloud-church-witching-hour',
        photoProps: { showDetails: false },
      },
      {
        type: 'text',
        text: [
          `This ominous looking church loomed over the main part of town and had an eerie vibe to it. 
          It's probably a perfectly normal church where nice people spend their Sunday, 
          but it just has such a strange presence to it.`,
        ],
      },
      {
        type: 'photo',
        name: 'mccloud-illuminated',
        photoProps: { showDetails: false },
      },
      {
        type: 'photo',
        name: 'mccloud-the-house',
        photoProps: { showDetails: false },
      },
      {
        type: 'react',
        children: (
          <>
            <p>
              In the middle of the darkness there was this old house on cinder
              blocks. I thought it would make a cool shot, so I went and got my
              camera, which then eventually led to me walking around and taking
              the other pictures in this gallery.
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
              from a few streets over. It was a historic building, and rather
              than tear it down the owner sold it to someone who planned to use
              it as a place of business on Main Street. A few years later when I came back to the town it was
              still in the same place and still on cinder blocks.
            </p>
          </>
        ),
      },
      {
        type: 'photo',
        name: 'mccloud-high-school',
        photoProps: { showDetails: false },
      },
      {
        type: 'photo',
        name: 'mccloud-pocket-of-light',
        photoProps: { showDetails: false },
      },
      {
        type: 'text',
        text: [
          `An interesting fact about McCloud is that originally it was a company town where the company 
          (affectionately known as "Mother McCloud") owned all of the houses. 
          In the 1960's, as it was winding down, it sold the houses to the people who were living in them for $5k each. 
          Sadly not all of the workers could afford this price tag.`,
        ],
      },
      {
        type: 'photo',
        name: 'mccloud-light-at-the-end-of-the-road',
        photoProps: { showDetails: false },
      },
      {
        type: 'photo',
        name: 'mccloud-lonely-road',
        photoProps: { showDetails: false },
      },
      {
        type: 'react',
        children: (
          <>
            <p>
              Another interesting fact about McCloud is that the town's water
              comes from the Konwakiton Glacier. Some hippies and mystics
              believe the water has special powers and will come from miles
              around to get jugs of it to take home with them. I can't say if
              its magical or not, but it does taste good.
            </p>
            <p>
              About 15 years ago Nestle got wind of this water supply and
              swooped in to buy it up. In classic super villain fashion the town
              was going to get a terrible deal and Nestle was going to be able
              to suck up all of their water. As an example of the company's
              douchebaggery, they promised the townsfolk that their water plant
              would bring jobs to the town, but after looking into this it was
              discovered that the plant would mostly be automated and that it
              would only bring <strong>2</strong> jobs to the area.
            </p>
            <p>
              Thankfully the project was{' '}
              <Link href={'https://caltrout.org/50th/nestle-mccloud'}>
                stopped
              </Link>{' '}
              at the 11th hour and the town was spared from Nestle's parasitic
              clutches. The town is slowly dying though, and I imagine other
              vultures will circle in and try to get at their water one day.
            </p>
          </>
        ),
      },
      {
        type: 'photo',
        name: 'mccloud-playground',
        photoProps: { showDetails: false },
      },
      {
        type: 'text',
        text: [
          `I don't know why, but there's a certain creepy feeling that accompanies being at a playground at night.
          It feels wrong somehow and even though I think this is a cool shot, I tried to take it as quickly as possible
          just to get out of there.
          What really freaked me out though was that as I was leaving a group of teenagers
            approached me and yelled out: "hey faggot!". I thought for sure I was about to be jumped, but once they
            saw I was just some random guy doing photography they profusely 
            apologized. They claimed they thought I was someone else, a "friend" of theirs.`,
        ],
      },
      {
        type: 'photo',
        name: 'mccloud-the-book',
        photoProps: { showDetails: false },
      },
      {
        type: 'text',
        text: [
          `Sometimes in these small towns you learn about local legends.
            This is a monument to Joaquin Miller, the "Poet of the Sierras" and author of "Life Among the Modocs". 
             Miller lived near McCloud when he was living
             with the Wintu people (a local indigenous tribe).`,
          `Miller lived a rather colorful life. To give the briefest of summaries: He was a self-styled Indian fighter who later took up arms with
            the local tribes. He explored the American north west and 
            worked as a lawyer, cook, teacher, judge, and news paper editor. He committed a number
            of petty crimes, broke himself out of jail, and ran off to England, where he hit it big as a poet.`,
          `While mostly unknown today, he was hugely popular when he died, and over 1000 people attended his funeral. 
            The preacher who spoke
             called him "the last of America's great poets". However, chaos broke out before the ceremony could end
             and police had to recue his corpse from unruly spectators who had began to ransack his house.`,
        ],
      },
      {
        type: 'photo',
        name: 'mccloud-gas-station',
        photoProps: { showDetails: false },
      },
      {
        type: 'text',
        text: ['I just think gas stations look cool at night.'],
      },
      {
        type: 'photo',
        name: 'mccloud-at-night',
        photoProps: { showDetails: false },
      },
      {
        type: 'text',
        header: 'Thank you',
        text: [
          `Thank you for checking out my gallery on McCloud at night. 
            Hopefully you enjoyed these images and maybe got the same liminal space vibe that I got
            as I was exploring the town.`,
          `Though these images were a little unsettling, the area around McCloud is actually quite
            beautiful and one of my favorite places to visit. If you enjoy the great outdoors I'd encourage
            you to check the place out as there are lots of things to do in the surrounding area.`,
        ],
      },
    ],
  },

  // Christmas
  {
    name: 'christmas',
    label: 'Christmas',
    description: 'A gallery of houses that went all-out for Christmas.',
    pageContent: [
      {
        type: 'photo',
        name: '34th-street-1',
        photoProps: { slimDescription: true },
      },
      {
        type: 'react',
        header: 'Christmas',
        children: (
          <>
            <p>
              After my{' '}
              <Link href={'/gallery/halloween-houses'}>Halloween House</Link>{' '}
              escapades, it seemed only fitting to try and do something similar
              for Christmas. Thankfully it's a lot easier to find amazing
              Christmas lights. I think these shots are much nicer too. People
              love going all-out for Christmas.
            </p>
          </>
        ),
      },
      {
        type: 'photo',
        name: 'mount-drive',
        photoProps: { slimDescription: true },
      },
      {
        type: 'photo',
        name: 'washington-dc-temple',
        photoProps: { slimDescription: true },
      },
      {
        type: 'text',
        text: [
          `This surreal looking building is the Washington DC Mormon Temple. It's closed to the public most of the 
          year, but they open the grounds up to the public during December. It's mostly to try and recruit people. 
          They talk about Jesus and provide hot chocolate and cookies, but for me the main draw is the lights and 
          scenery. I wish there was more architecture like this.`,
        ],
      },
      {
        type: 'photo',
        name: 'winter-wonderland',
        photoProps: { slimDescription: true },
      },
      {
        type: 'photo',
        name: 'sedge-court',
        photoProps: { slimDescription: true },
      },
      {
        type: 'photo',
        name: 'ec-lights',
        photoProps: { slimDescription: true },
      },
      {
        type: 'text',
        text: [
          `The above place is known as "EC Lights" on Google Maps. In addition to a fancy light display there's
          music, dancing, and free popcorn and hot chocolate. The place was actually packed. I made the above image
          by taking many shots and then combining them to get a clear view of everything.`,
        ],
      },
      {
        type: 'photo',
        name: '34th-street-2015',
        photoProps: { slimDescription: true },
      },
      {
        type: 'photo',
        name: 'old-columbia-pike',
        photoProps: { slimDescription: true },
      },
      {
        type: 'photo',
        name: 'christmas-pagoda',
        photoProps: { slimDescription: true },
      },
      {
        type: 'photo',
        name: '34th-street-tree',
        photoProps: { slimDescription: true },
      },
      {
        type: 'react',
        children: (
          <>
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
              with 60+ images. I decided to save this page for displaying the
              best of the best. If you liked this gallery you may also like my{' '}
              <Link href={'/gallery/halloween-houses'}>
                Halloween Houses Gallery
              </Link>
              . It's a bit harder to find cool Halloween displays, but there are
              some good ones out there.
            </p>
          </>
        ),
      },
    ],
  },

  // Halloween
  {
    name: 'halloween-houses',
    label: 'Halloween Houses',
    description: 'A gallery of cool houses that went all-out for Halloween.',
    pageContent: [
      {
        type: 'photo',
        name: 'halloween-death-plague-dance-party',
        photoProps: { slimDescription: true },
      },
      {
        type: 'react',
        header: 'Halloween Houses',
        children: (
          <>
            <p>
              I've always been a big fan of Halloween. I usually keep my camera with me and sometimes when I see
              a really decked out house I'll stop and take a picture. This page is a collection of the best
              houses I've seen so far.
            </p>
          </>
        ),
      },
      {
        type: 'photo',
        name: 'my-house-halloween-2023',
        photoProps: { slimDescription: true },
      },
      {
        type: 'text',
        text: [
          `The above house is mine from 2023. I decided to get in on the fun after photographing a number of these types
           of houses. If you click the switch you can see what it looks like during the day. I think it would be cool
           to do more houses like this. `,
        ],
      },
      {
        type: 'photo',
        name: 'halloween-pumpkin-scarecrow',
        photoProps: { slimDescription: true },
      },
      {
        type: 'text',
        text: [
          `The most important part of any display is the lights. Not something you think about for Halloween, but
           without them you can't see anything. `,
        ],
      },
      {
        type: 'photo',
        name: 'halloween-dena-cemetery',
        photoProps: { slimDescription: true },
      },
      {
        type: 'text',
        text: [
          `For the above shot, the guy's flood lights came on right after I finished taking the shot. 
          I was like "oh shit, this guy is not cool with this" — but he ended up being pretty flattered and even 
          offered to turn everything back on (apparently he was doing a test run and didn't even see me until the 
          lights went on).`,
        ],
      },
      {
        type: 'photo',
        name: 'halloween-pirate-skeletons',
        photoProps: { slimDescription: true },
      },
      {
        type: 'text',
        text: [
          `The macabre displays people come up with are so much fun. `,
        ],
      },
      {
        type: 'photo',
        name: 'halloween-green-graveyard',
        photoProps: { slimDescription: true },
      },
      {
        type: 'photo',
        name: 'halloween-cutouts',
        photoProps: { slimDescription: true },
      },
      {
        type: 'text',
        text: [
          `Sadly finding these houses is kind of hard. At least really good ones worth displaying here. 
          I hope to find some more good ones as time goes on.
          `,
        ],
      },
      {
        type: 'photo',
        name: 'halloween-biohazard',
        photoProps: { slimDescription: true },
      },
      {
        type: 'react',
        children: (
          <>
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
              displaying the best of the best. Hopefully with each passing
              Halloween I can add some more to both galleries. Until then, if
              you like these kinds of photos check out my{' '}
              <Link href={'/gallery/christmas'}>Christmas Houses Gallery</Link>.
              It's (unsurprisingly) a lot easier to find really cool Christmas
              displays.
            </p>
          </>
        ),
      },
    ],
  },
  // end Halloween

  {
    name: 'panoramas',
    label: 'Panoramas',
    description: 'A set of panoramas from the Baltimore area.',
    pageContent: [
      { type: 'photo', name: 'baltimore-skyline-2016-pano' },
      {
        type: 'text',
        name: 'panorama-text-1',
        header: 'Grab the image and pull it that way 👈.',
        text: [
          `One of my goals for this site was to make viewing my panoramas easier. You can more easily view them
          by grabbing them with your mouse or finger and pulling them left or right.`,
        ],
      },
      { type: 'photo', name: 'middle-branch-park-2019-pano' },
      { type: 'photo', name: 'middle-branch-trailhead-no9-pano' },
      { type: 'photo', name: 'baltimore-skyline-2022-pano' },
      { type: 'photo', name: 'fells-point-2020-pano' },
    ],
  },
];

galleries.forEach((gg) => {
  gg.title = gg.label + ' | ' + config.title.main;

  gg.pageContent &&
    gg.pageContent.forEach((item) => {
      // give each content section a unique id. This will be used when React needs a "key".
      item.id = (item.name || '') + '_' + Math.random();
    });
});

// see app.php
console.log('galleries');
const _galleries = galleries.map((item) => ({
  name: item.name,
  title: item.label,
  photoName: item.pageContent.find((elm) => elm.type === 'photo').name,
  description: item.description,
}));
console.dir(_galleries);
console.log(JSON.stringify(_galleries).replace(/'/g, "\\'"));

export { galleries };
