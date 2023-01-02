/*
  Notes:
  - All pageContent items need a unique name.
 */
import {Link} from '@mui/material';
import React from 'react';
import { LightsOut, MagicalText } from 'react-halloween';
import config from '../app.config';
import MainEnding from '../components/blurbs/MainEnding';
import MainImageToggles from '../components/blurbs/MainImageToggles';
import MainIntro from '../components/blurbs/MainIntro';
import MainPanoramas from '../components/blurbs/MainPanoramas';

function isTouchDevice() {
  return (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));
}

const galleries = [
  {
    name: 'main-standard',
    label: 'Main',
    description: 'The photographic portfolio of Patrick Gillespie.',
    pageContent: [
      {type: 'photo', name: 'patterson-park-pagoda-in-springtime'},
      {type: 'react', name: 'main-standard-intro-blurb', children: (<MainIntro />)},
      {type: 'photo', name: 'baltimore-skyline-light-toggle'},
      {type: 'react', name: 'main-standard-toggle-blurb', children: (<MainImageToggles />)},
      {type: 'photo', name: 'middle-branch-park-2019-pano'},
      {type: 'react', name: 'main-standard-panoramas-blurb', children: (<MainPanoramas />)},
      {type: 'photo', name: 'downs-park-pier'},
      {type: 'photo', name: 'the-thunderbirds'},
      {type: 'photo', name: 'fort-armistead-sunrise-1'},
      {type: 'photo', name: 'something-in-the-mist'},
      {type: 'photo', name: 'mossbrae-falls'},
      {type: 'photo', name: 'fells-point-sunrise'},
      {type: 'photo', name: 'icy-domino-sugars-factory'},
      {type: 'photo', name: 'inner-harbor-sunrise'},
      {type: 'react', name: 'main-spring-footer-text', children: (<MainEnding />)},
    ]
  },
  {
    name: 'main-spring',
    label: 'Main',
    description: 'The photographic portfolio of Patrick Gillespie.',
    pageContent: [
      {type: 'photo', name: 'patterson-park-pagoda-in-springtime'},
      {type: 'react', name: 'main-spring-intro-blurb', children: (<MainIntro />)},
      {type: 'photo', name: 'baltimore-skyline-light-toggle'},
      {type: 'react', name: 'main-spring-toggle-blurb', children: (<MainImageToggles />)},
      {type: 'photo', name: 'middle-branch-park-2019-pano'},
      {type: 'react', name: 'main-spring-panoramas-blurb', children: (<MainPanoramas />)},
      {type: 'photo', name: 'mt-vernon-fountain'},
      {type: 'photo', name: 'downs-park-pier'},
      {type: 'photo', name: 'fort-armistead-sunrise-1'},
      {type: 'photo', name: 'mossbrae-falls'},
      {type: 'photo', name: 'fells-point-sunrise'},
      {type: 'photo', name: 'cherry-blossoms-dc'},
      {type: 'photo', name: 'inner-harbor-sunrise'},
      {type: 'react', name: 'main-spring-footer-text', children: (<MainEnding />)},
    ]
  },
  {
    name: 'main-summer',
    label: 'Main',
    description: 'The photographic portfolio of Patrick Gillespie.',
    pageContent: [
      {type: 'photo', name: 'patterson-park-pagoda-in-springtime'},
      {type: 'photo', name: 'baltimore-skyline-light-toggle'},
      {type: 'photo', name: 'the-thunderbirds'},
      {type: 'photo', name: 'downs-park-pier'},
      {type: 'photo', name: 'fort-armistead-sunrise-1'},
      {type: 'photo', name: 'mossbrae-falls'},
      {type: 'photo', name: 'middle-branch-pier'},
      {type: 'photo', name: 'fells-point-sunrise'},
      {type: 'photo', name: 'jordan-lake'},
      {type: 'photo', name: 'inner-harbor-sunrise'},
    ]
  },
  {
    name: 'main-halloween',
    label: 'Main',
    description: 'The photographic portfolio of Patrick Gillespie.',
    pageContent: [
      {type: 'photo', name: 'halloween-houses'},
      {type: 'photo', name: 'a-pathway-to-nightmares'},
      {type: 'photo', name: 'something-in-the-mist'},
      {type: 'photo', name: 'foggy-carroll-park'},
      {type: 'photo', name: 'the-haunted-car'},
      {type: 'photo', name: 'downs-park-pier-foggy'},
      {type: 'photo', name: 'heart-lake-smoky'},
      {type: 'photo', name: 'old-american-brewery'},
    ]
  },
  {
    name: 'main-christmas',
    label: 'Main',
    description: 'The photographic portfolio of Patrick Gillespie.',
    pageContent: [
      {type: 'photo', name: '34th-street-1'},
      {type: 'photo', name: 'baltimore-skyline-light-toggle'},
      {type: 'photo', name: 'icy-domino-sugars-factory'},
      {type: 'photo', name: 'downs-park-pier'},
      {type: 'photo', name: 'fort-armistead-sunrise-1'},
      {type: 'photo', name: 'mossbrae-falls'},
      {type: 'photo', name: 'middle-branch-pier'},
      {type: 'photo', name: 'fells-point-sunrise'},
      {type: 'photo', name: 'kids'},
      {type: 'photo', name: 'inner-harbor-sunrise'},
    ]
  },
  {
    name: 'misc',
    label: 'Misc',
    description: 'The photographic portfolio of Patrick Gillespie.',
    pageContent: [
      {type: 'photo', name: 'mt-vernon-fountain'},
      {type: 'photo', name: 'a-pathway-to-nightmares'},
      {type: 'photo', name: '34th-street-1'},
      {type: 'photo', name: 'george-peabody-library'},
      {type: 'photo', name: 'foggy-carroll-park'},
      {type: 'photo', name: 'kids'},
      {type: 'photo', name: 'annapolis-rock-1'},
      {type: 'photo', name: 'the-haunted-car'},
      {type: 'photo', name: 'baltimore-skyline-2016-pano'},
    ]
  },
  {
    name: 'sunrises-and-sunsets',
    label: 'Sunrises/Sunsets',
    description: 'The photographic portfolio of Patrick Gillespie.',
    pageContent: [
      {type: 'photo', name: 'fort-armistead-sunrise-1'},
      {type: 'photo', name: 'fells-point-sunrise'},
      {type: 'photo', name: 'downs-park-pier'},
      {type: 'photo', name: 'domino-sugars-sunrise'},
      {type: 'photo', name: 'promenade-view-1'},
      {type: 'photo', name: 'broening-park-1'},
      {type: 'photo', name: 'federal-hill-view-1'},
      {type: 'photo', name: 'inner-harbor-sunrise'},
      {type: 'photo', name: 'fells-point-puddle'},
      {type: 'photo', name: 'middle-branch-boat-ramp'},
      {type: 'photo', name: 'jordan-lake'},
      {type: 'photo', name: 'fort-armistead-sunrise-2'},
      {type: 'photo', name: 'cherry-blossoms-dc'},
      {type: 'photo', name: 'baltimore-skyline-2016'},
    ]
  },
  {
    name: 'interactive',
    label: 'Interactive',
    description: 'A gallery of interactive photographic images.',
    pageContent: [
      {type: 'photo', name: 'baltimore-skyline-light-toggle'},
      {
        type: 'text',
        header: 'What\'s this section about anyway?',
        text:
          [`These are images you can interact with in some way. Right now the section is pretty small but I hope to
            expand on it sometime soon.`]
      },
      {type: 'photo', name: 'domino-2021-sunrise-toggle'},
      {type: 'photo', name: 'middle-branch-pier'},
    ]
  },
  {
    name: 'dark',
    label: 'Dark',
    description: 'Some spooky images.',
    pageContent: [
      {type: 'photo', name: 'a-pathway-to-nightmares'},
      {
        type: 'text',
        header: 'Dark',
        text:
          [`I'm not a fan of horror, but I love the spooky feeling that a forbidding landscape can give off.
           I don't often go out of my way to capture creepy images, but I get excited when an opportunity 
           presents itself. These pictures never do well on my social media, sandwiched between to photos of 
           sunsets and sunrises, but they have a special place in my heart.`,]
      },
      {type: 'photo', name: 'something-in-the-mist'},
      {type: 'photo', name: 'foggy-carroll-park'},
      {type: 'photo', name: 'the-haunted-car'},
      {type: 'photo', name: 'downs-park-pier-foggy'},
      {type: 'photo', name: 'heart-lake-smoky'},
      {type: 'photo', name: 'old-american-brewery'},
      {type: 'photo', name: 'halloween-houses'},
    ]
  },
  {
    name: 'mccloud-at-night',
    label: 'McCloud at Night',
    description: 'A photographic essay on the town of McCloud, CA.',
    pageContent: [
      {type: 'photo', name: 'mccloud-church-down-the-street', photoProps: {showDetails: false}},
      {
        type: 'text',
        text:
          [`The images in this gallery are of a small town called McCloud. One night while the rest of my family slept 
          I decided to venture out into the town to see what I could find. 
          I was struck by how quiet and nostalgic it felt. I brought my camera along 
          (after coming across a strange house - more on that later) 
          and took pictures of sights that I thought looked interesting.`]
      },
      {type: 'photo', name: 'mccloud-church-witching-hour', photoProps: {showDetails: false}},
      {
        type: 'text',
        text:
          [`This ominous looking church loomed over the main part of town and had an eerie vibe to it. 
          It's probably a perfectly normal church where nice people spend their Sunday, 
          but it just has such a strange presence to it.`]
      },
      {type: 'photo', name: 'mccloud-illuminated', photoProps: {showDetails: false}},
      {
        type: 'react',
        children: (
          <>
            <p>
              I didn't know it at the time, but the images I was capturing fit an aesthetic known as
              {' '}
              <Link
                href={'https://www.youtube.com/watch?v=N63pQGhvK4M'}
                target={'_blank'}
              >liminal space</Link>
              {'. '}
              A liminal space is a place between "states of being" that feels unsettling yet familiar.
              Typically liminal spaces are of abandoned or empty settings that normally have people in them —
              a park after dark, an empty office, a long hallway.
              There's a transitional nature to them.
              They're a snapshot of the time between "what was" and "what's next".
            </p>
          </>
        )
      },
      {type: 'photo', name: 'mccloud-the-house', photoProps: {showDetails: false}},
      {
        type: 'react',
        children: (
          <>
            <p>
              The house above was the first image I captured and what motivated me to go and get my camera.
              This was along Main Street, and in the middle of the darkness there was this old house on cinder blocks.
              It looked like it had been moved there, but why? And was moving houses really a thing?
            </p>
            <p>
              Later I would discover that the house had in fact been
              {' '}
              <Link
                href={'https://www.siskiyoudaily.com/picture-gallery/news/2020/11/17/st-josephs-rectory-moved-across-mccloud/6324358002/'}
                target={'_blank'}
              >moved there</Link>
              {' '}
              from a few streets over. It was a historic building, and rather than tear it down the owner sold it to
              someone who planned to use it as a place of business on Main Street.
              If there ever was a state of being between "what was" and "what's next", this seems to be it.
            </p>
          </>
        )
      },
      {type: 'photo', name: 'mccloud-high-school', photoProps: {showDetails: false}},
      {
        type: 'text',
        text:
          [`An empty parking lot next to the local high school. 
          At the time I just thought it looked cool, especially with the light illuminating the emptiness.`]
      },
      {type: 'photo', name: 'mccloud-pocket-of-light', photoProps: {showDetails: false}},
      {
        type: 'text',
        text:
          [`An interesting fact about McCloud is that originally it was a company town where the company 
          (affectionately known as "Mother McCloud") owned all of the houses. 
          In the 1960's, as it was winding down, it sold the houses to the people who were living in them for $5k each. 
          Sadly not all of the workers could afford this price tag.`]
      },
      {type: 'photo', name: 'mccloud-light-at-the-end-of-the-road', photoProps: {showDetails: false}},
      {
        type: 'text',
        text:
          [`A patch of light in the darkness. It's was incredibly dark as I walked the streets. Lamp posts were like
            beacons the void.`]
      },
      {type: 'photo', name: 'mccloud-lonely-road', photoProps: {showDetails: false}},
      {
        type: 'react',
        children: (
          <>
            <p>
              Another interesting fact about McCloud is that the town's water comes from the Konwakiton Glacier.
              Some hippies and mystics believe the water has special powers and will come from miles around to get
              jugs of it to take home with them. I can't say if its magical or not, but it does taste good.
            </p>
            <p>
              About 15 years ago Nestle got wind of this water supply and swooped in to buy it up. In classic super
              villain fashion the town was going to get a terrible deal and Nestle was going to be able to suck up
              all of their water. As an example of the company's douchebaggery, they promised the townsfolk that their
              water plant would bring jobs to the town, but after looking into this it was discovered that the plant
              would mostly be automated and that it would only bring <strong>2</strong> jobs to the area.
            </p>
            <p>
              Thankfully the project was
              {' '}
              <Link
                href={'https://caltrout.org/50th/nestle-mccloud'}
                target={'_blank'}
              >stopped</Link>
              {' '}
              at the 11th hour and the town was spared from Nestle's parasitic clutches. The town is slowly dying
              though, and I imagine other vultures will circle in and try to get at their water one day.
            </p>
          </>
        )
      },
      {type: 'photo', name: 'mccloud-playground', photoProps: {showDetails: false}},
      {
        type: 'text',
        text:
          [`I don't know why, but there's a certain creepy feeling that accompanies being at a playground at night.
          It feels wrong somehow and even though I think this is a cool shot, I tried to take it as quickly as possible
          just to get out of there.
          What really freaked me out though was that as I was leaving a group of teenagers
            approached me and yelled out: "hey faggot!". I thought for sure I was about to be jumped, but once they
            saw I was just some random guy doing photography they profusely 
            apologized. They claimed they thought I was someone else, a "friend" of theirs.`]
      },
      {type: 'photo', name: 'mccloud-the-book', photoProps: {showDetails: false}},
      {
        type: 'text',
        text:
          [
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
          ]
      },
      {type: 'photo', name: 'mccloud-gas-station', photoProps: {showDetails: false}},
      {
        type: 'text',
        text:
          ['I just think gas stations look cool at night.']
      },
      {type: 'photo', name: 'mccloud-at-night', photoProps: {showDetails: false}},
      {
        type: 'text',
        header: 'Thank you',
        text:
          [
            `Thank you for checking out my gallery on McCloud at night. 
            Hopefully you enjoyed these images and maybe got the same liminal space vibe that I got
            as I was exploring the town.`,
            `Though these images were a little unsettling, the area around McCloud is actually quite
            beautiful and one of my favorite places to visit. If you enjoy the great outdoors I'd encourage
            you to check the place out as there are lots of things to do in the surrounding area.`
          ]
      },
    ]
  },

  // Halloween
  {
    name: 'halloween-houses',
    label: 'Halloween Houses',
    description: 'A gallery of cool houses that went all-out for Halloween.',
    pageContent: [
      {type: 'photo', name: 'halloween-death-plague-dance-party', photoProps: {showDetails: false}},
      {
        type: 'react',
        children: (
          <>
            <p>
              Halloween doesn't get a lot of love when it comes to people celebrating the displays people come up with.
              I always see people taking pictures of Christmas lights, but I don't really see many photos of Halloween
              displays. The stuff
              people come up with is pretty cool though, and this gallery is dedicated to those people who go all out for
              Halloween.
            </p>
            {!isTouchDevice() && <LightsOut size={400} />}
          </>
        )
      },
      {type: 'photo', name: 'halloween-pumpkin-scarecrow', photoProps: {showDetails: false}},
      {
        type: 'text',
        text:
          [`The idea for this gallery started while I was on a bike ride the week before Halloween in 2021. I passed a 
          really decked out house (the first photo in this gallery) and decided to come back at night and take a photo. 
          I thought it looked pretty cool and decided to go out in search of other "Halloween Houses".  `]
      },
      {type: 'photo', name: 'halloween-dena-cemetery', photoProps: {showDetails: false}},
      {
        type: 'text',
        text:
          [`Sometimes cool houses will be hidden where you least expect them. The rest of the neighborhood will be 
          quiet and discrete, and then you'll come across a house with a really awesome display.
          `]
      },
      {type: 'photo', name: 'halloween-pirate-skeletons', photoProps: {showDetails: false}},
      {
        type: 'text',
        text:
          [`Sometimes there will be whole neighborhoods where it seems like everyone has decorations up. 
          The neighborhood where I found the most cool stuff had no homeowners association, which makes me wonder if 
          those play a role in dictating what people can do.
          `]
      },
      {type: 'photo', name: 'halloween-green-graveyard', photoProps: {showDetails: false}},
      {
        type: 'text',
        text:
          [`I've only been at this for 2 years, but already I'm seeing that people like to build upon their setups each year. 
          `]
      },
      {type: 'photo', name: 'halloween-cutouts', photoProps: {showDetails: false}},
      {
        type: 'text',
        text:
          [`Though on the flip side, I've noticed that sometimes a house will go from decked out, to nothing. 
          When this happens I'm not sure if the original owner moved or if they just decided to take a break. 
          In 2020 I came across a really cool house - they had a display with what had to be 20+ skeletons, 
          but when I revisited it in 2021 and 2022, there were no decorations up. 
          `]
      },
      {type: 'photo', name: 'halloween-biohazard', photoProps: {showDetails: false}},
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
              You can check out more in my
              {' '}
              <Link
                href={'https://www.flickr.com/photos/40423570@N07/albums/72177720303296931'}
                target={'_blank'}
              >Flickr Halloween Gallery</Link>
              {' '}
              (there are 20+ more images there). I decided to save this page for displaying the best of the best.
              Hopefully with each passing Halloween I can add some more and more to both galleries.
            </p>
          </>
        )
      },
    ]
  },
  // end Halloween

  {
    name: 'panoramas',
    label: 'Panoramas',
    description: 'A set of panoramas from the Baltimore area.',
    pageContent: [
      {type: 'photo', name: 'baltimore-skyline-2016-pano'},
      {
        type: 'text',
        name: 'panorama-text-1',
        header: 'Grab the image and pull it that way 👈.',
        text:
          [`One of my goals for this site was to make viewing my panoramas easier. You can more easily view them
          by grabbing them with your mouse or finger and pulling them left or right.`]
      },
      {type: 'photo', name: 'middle-branch-park-2019-pano'},
      {type: 'photo', name: 'middle-branch-trailhead-no9-pano'},
      {type: 'photo', name: 'baltimore-skyline-2022-pano'},
      {type: 'photo', name: 'fells-point-2020-pano'},
    ]
  },
];

galleries.forEach(gg => {
  gg.title = gg.label + ' | ' + config.title.main;

  gg.pageContent && gg.pageContent.forEach(item => {
    // give each content section a unique id. This will be used when React needs a "key".
    item.id = (item.name || '') + '_' + Math.random();
  })
});

// see app.php
console.log('galleries');
const _galleries = galleries.map(item => ({
  name: item.name,
  title: item.label,
  photoName: item.pageContent.find(elm => elm.type === 'photo').name,
  description: item.description
}));
console.dir(_galleries);
console.log(JSON.stringify(_galleries).replace(/'/g, '\\\''));

export {galleries};
