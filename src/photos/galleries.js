/*
  Notes:
  - All pageContent items need a unique name.
 */
import {Link} from '@mui/material';
import React from 'react';
import config from '../app.config';
import MainEnding from '../components/blurbs/MainEnding';
import MainImageToggles from '../components/blurbs/MainImageToggles';
import MainIntro from '../components/blurbs/MainIntro';
import MainPanoramas from '../components/blurbs/MainPanoramas';

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
    name: 'spooky',
    label: 'Spooky',
    description: 'Some spooky images.',
    pageContent: [
      {type: 'photo', name: 'a-pathway-to-nightmares'},
      {
        type: 'text',
        header: 'Spooky',
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
          [`McCloud is an old mountain town that rests in the shadow of Mount Shasta, an active volcano at the 
            southern end of the Cascade Range in northern California. 
            The town was founded around a lumber company ("Mother McCloud") which closed down in the second half of 
            the 20th century. Today its population is less than 1000.`]
      },
      {type: 'photo', name: 'mccloud-church-witching-hour', photoProps: {showDetails: false}},
      {
        type: 'text',
        text:
          [`This is St. Joseph’s Catholic Church, it was built in 1931. 
            Prior to its construction the original Catholic church built on this spot was exhumed and moved to another 
            part of the town.
            Today this building is apart of the McCloud Historic District, which was
            put on the National Register of Historic Places in the early 1990's. `]
      },
      {type: 'photo', name: 'mccloud-illuminated', photoProps: {showDetails: false}},
      {
        type: 'text',
        text:
          [`The week I was in McCloud a thick haze of smoke hung in the air, you can see its eerie glow around
            the street lamps in each photo. 
            This smoke came from wild fires that were burning over 100 miles away.
            These fires burned over 2 and a half million acres of California land over the course of 2021.`,
          `On a normal night the sky above McCloud is a sea of hundreds of stars.
            It's a spectacular view to behold. Sadly, with
            the smoke permeating the landscape, no stars were visible (this becomes more evident in the book photo
            below). 
          `]
      },
      {type: 'photo', name: 'mccloud-the-house', photoProps: {showDetails: false}},
      {
        type: 'react',
        children: (
          <>
            <p>
              I stumbled across the above building on a night walk and found it unsettling and strange.
              It gave me a strong
              {' '}
              <Link
                href={'https://www.youtube.com/watch?v=N63pQGhvK4M'}
                target={'_blank'}
              >Liminal Space</Link>
              {' '}
              vibe. The scene inspired me to explore the town more, to see if I could find other
              spots that gave me that liminal space feeling.
            </p>
            <p>
              When I looked into this house's history I found that it was
              originally a home for priests and nuns, but that it had recently been
              {' '}
              <Link
                href={'https://www.siskiyoudaily.com/picture-gallery/news/2020/11/17/st-josephs-rectory-moved-across-mccloud/6324358002/'}
                target={'_blank'}
              >sold and moved</Link>
              {' '}
              to a spot on Main St, with the hopes of using it for a commercial business.
              The process of moving and installing the old house proved to be just as
              expensive as buying it.
            </p>

          </>
        )
      },
      {type: 'photo', name: 'mccloud-high-school', photoProps: {showDetails: false}},
      {
        type: 'text',
        text:
          [`Around 30 kids attend the local high school, meaning if you were to go to here you'd most likely
            know everyone in your high school.`]
      },
      {type: 'photo', name: 'mccloud-pocket-of-light', photoProps: {showDetails: false}},
      {
        type: 'text',
        text:
          [`The McCloud River Lumber Company was known as "Mother McCloud" because it owned the houses its workers 
            lived in and it took great pride in taking care of them. In the 1960's the company was sold to 
            U.S. Plywood who sold the houses to the people living in them for $5k each. Sadly not all of the workers
            could afford this price tag.`]
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
        type: 'text',
        text:
          ['The road out of town.']
      },
      {type: 'photo', name: 'mccloud-playground', photoProps: {showDetails: false}},
      {
        type: 'text',
        text:
          [`I got a strong liminal space vibe from this empty playground. As I left this area a group of teenagers
            approached me and yelled out: "hey faggot!", I thought I was about to be jumped, but they profusely 
            apologized when they realized I wasn't the person they were looking for, whom they claimed was a friend 
            of theirs.`]
      },
      {type: 'photo', name: 'mccloud-the-book', photoProps: {showDetails: false}},
      {
        type: 'text',
        text:
          [
            `A monument to Joaquin Miller, the "Poet of the Sierras". 
             This statue was created by a local artist to honor Miller, who lived near McCloud when he was living
             with the Wintu people (which would later help inspire Miller's most celebrated work: 
             "Life Among the Modocs").`,
            `Miller lived a rather colorful life. He was a self-styled Indian fighter who later took up arms with
            the local tribes. He fathered a child with one of the Wintu people. He explored the American north west and 
            worked as a lawyer, cook, teacher, judge, and news paper editor (to list a few). He committed a number
            of petty crimes, broke himself out of jail, and became a fugitive. 
            He hit it big as a poet in England and had a hit play in America. And in his later years he became an 
            environmentalist, becoming one of California's first tree-huggers.`,
            `He was hugely popular when he died, and over 1000 people attended his funeral. The preacher who spoke
             called him "the last of America's great poets". However, chaos broke out before the ceremony could end
             and police had to recue his corpse from unruly spectators who had began to ransack his house.`
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
            `Thank you for checking out my gallery on McCloud at night. It was born out a drive to
            see if I could create some interesting photos from a walk through this quiet town.
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
    description: 'A gallery of houses that went all-out for Halloween',
    pageContent: [
      {type: 'photo', name: 'halloween-death-plague-dance-party', photoProps: {showDetails: false}},
      {
        type: 'text',
        text:
          [`Halloween doesn't get a lot of love when it comes to people celebrating the displays people come up with. 
          I always see people taking pictures of Christmas lights, but I don't really see many photos of Halloween 
          displays. The stuff 
          people come up with is pretty cool though, and this gallery is dedicated to those people who go all out for 
          Halloween.`]
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
            <h3>Where's the rest?</h3>
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

export {galleries};
