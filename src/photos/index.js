import {Link} from '@mui/material';
import React from 'react';
/*
	Photos.

	name: photo album name
	photoFolders: A list of folder names for the image sources. If more than 1 is provided a stepper will be provided
	  with the image. (see the transitionOptions prop)
	tags: Tags for the image.
	aspect: Image aspect.
	flickr: URL to flickr version of image.
	instagram: URL to instagram version of image.
	description: A text description of the image.
	altText: alt text for the image.
	transitionOptions: {
	  	type: 'stepper' (default) | 'toggle',
		toggleLabel: label for toggle (if type is toggle)
		imageStart (default 0), image index to start at
		slowTransition: (default false)
	}

	Generated parameters:
	id: ID for the image, the name of the first variant is used.
	album: array of arrays of the sized images.
*/

let albums = [
  {
    name: 'patterson-park-pagoda-in-springtime',
    photoFolders: ['2019_pagoda'], // doubles as the ID for the photo
    tags: ['main', 'baltimore', '2019'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/47536723332/',
    description: [
      'Springtime in Baltimore.'
    ],
    altText: 'Springtime in Baltimore'
  },
  {
    name: 'baltimore-skyline-light-toggle',
    photoFolders: ['2018_baltimore_skyline_lights_off', '2018_baltimore_skyline_lights_on'],
    tags: ['main', 'baltimore', '2018'],
    transitionOptions: {
      type: 'toggle',
      toggleLabel: 'Click the switch to turn Baltimore\'s lights on and off 👈 😁😁😁',
      imageStart: 1
    },
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/44674533262/',
    description: [
      // eslint-disable-next-line max-len
      'A view of Baltimore\'s skyline from 2018. I took a series of images as the sun set and found I liked the city lights better an hour after sunrset, but the sky from around 10 minutes after sunset. I took the two images and overlaid them in photostop and was able to blend them into one. However, I had fun toggling the effect on and off because it looked like I was powering on/off the city. ',
      'Maybe I\'m just easily amused, but I figured I\'d put it up here so others could play around with it too.'
    ],
    altText: 'Baltimore Skyline Light Toggle'
  },
  {
    name: 'domino-2021-sunrise-toggle',
    photoFolders: ['2021_01_domino_sunrise_1', '2021_01_domino_sunrise_2'],
    tags: ['main', 'baltimore', '2021'],
    transitionOptions: {
      type: 'toggle',
      toggleLabel: 'Click the switch to switch between night and day 👈 😁😁😁',
      imageStart: 0
    },
    aspect: '8x10',
    flickr: 'https://www.flickr.com/photos/40423570@N07/51755438998',
    description: [
      'Sunrise next to the Domino Sugars plant in Baltimore. '
    ],
    altText: 'Sunrise Toggle'
  },
  {
    name: 'downs-park-pier',
    photoFolders: ['2020_downs_sunrise', '2019_downs_sunrise', '2020_downs_spooky'],
    tags: ['main', 'sunrise', '2019'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/46482748235/',
    description: [
      // eslint-disable-next-line max-len
      'One of my favorite places to go for the sunrise. No two mornings are identical. As an aside, if you look closely in the first photo you\'ll see a couple out on the pier - they were getting their engagement photos taken.'
    ],
    altText: 'Downs Park Sunrise'
  },
  {
    name: 'the-thunderbirds',
    photoFolders: ['2018_the_thunderbirds'],
    tags: ['main', 'airshow', '2018'],
    aspect: '1x1',
    flickr: 'https://www.flickr.com/photos/40423570@N07/44256887115/',
    instagram: 'https://www.instagram.com/p/BoruZZKFlmz/',
    description: [
      'The Thunderbirds. This shot was my most viewed shot on my old photography website.'
    ],
    altText: 'The Thunderbirds'
  },
  {
    name: 'fort-armistead-sunrise-1',
    photoFolders: ['2016-03-12_sunrise'],
    tags: ['main', 'sunrise', 'baltimore', '2016'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/25705211566/',
    description: [
      // eslint-disable-next-line max-len
      'I ruined my shoes for this shot. After I set up my camera on the banks of this inlet I realized I was slowly sinking into the mud. However, the most spectacular sunrise I\'d ever seen was in front of me so I didn\'t want to move. When the colors had finally faded I was in over my ankles. My shoes actually came off as I tried to escape. I would later vigorously wash them, but they were never the same.'
    ],
    altText: 'Fort Armistead Sunrise'
  },
  {
    name: 'something-in-the-mist',
    photoFolders: ['2020_something_in_the_mist'],
    tags: ['main', 'creepy', '2020'],
    aspect: '16x9',
    flickr: 'https://www.flickr.com/photos/40423570@N07/49499354128/',
    instagram: 'https://www.instagram.com/p/B8UMPG7JSa4/',
    // eslint-disable-next-line max-len
    description: 'Normally this abandoned pier is a huge eyesore, something that spoils the landscape of the area, however, on a morning so foggy that the other side of the harbor wasn\'t visible it jumped out at me. Almost like an abandoned island floating in the middle of nowhere.',
    altText: 'Something in the Mist'
  },
  {
    name: 'mossbrae-falls',
    photoFolders: ['2019-08-23_mossbrae_falls'],
    tags: ['main', 'waterfall', '2019'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/48660329588/',
    description: [
      // eslint-disable-next-line max-len
      'Getting to this place was an adventure in and of itself. There\'s no direct trail and I had to wade through a waist-deep section of the Sacramento River. However, the resulting sight was awe inspiring. The water looks like it\'s coming out of the underbrush on the mountain, and the falls run along the river. I know this sounds silly, but the place feels magical.',
      // eslint-disable-next-line max-len
      'Also, as a neat bit of trivia, Arnold Schwarzenegger took President George H.W. Bush here when he was showing off California to the former president.'
    ],
    altText: 'Mossbrae Falls'
  },
  {
    name: 'middle-branch-pier',
    photoFolders: ['2019_middle_branch_pier', '2018_middle_branch_pier'],
    transitionOptions: {
      type: 'toggle',
      toggleLabel: 'Click the switch to see what the pier looked like one year earlier 😮',
      imageStart: 0
    },
    tags: ['main', 'sunrise', 'baltimore', '2019'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/48152204987',
    description: [
      // eslint-disable-next-line max-len
      'I think most people look at this shot and just kind of shrug, thinking of it as just another sunrise pier photo. But I spent over a year trying to get this shot. When I came across this pier I could tell there was a nice photo just waiting to be captured. All that was needed was a morning with little to no wind (so the water would be smooth) and a nice sunrise. However, after showing up a few times over the course of a few months, I realized that since the pier pointed north (meaning the sun rose off camera to the right), it would take an epic sunrise/sunset that lit up the whole sky to create the shot I had in mind.',
      // eslint-disable-next-line max-len
      'I spent several months trying to figure out when the best day would be. Over a dozen times I woke up early and drove down to the park, only to be rewarded with a very "meh" shot. Finally one night there was a storm and I was sure a great sunrise was waiting on the other side of it. When I got to the park the following morning I saw the sight you see in the second picture (when you click the toggle button). It was a dreary, unpleasant sight and there was trash everywhere. I was defeated. Why was I punishing myself like this? There\'s no shot here, and even if there was, no one cares about this park, everyone\'s always leaving their trash everywhere. I went home and tried to forget about this place.',
      // eslint-disable-next-line max-len
      'Almost exactly a year later I awoke from my sleep thinking about this shot. It was still dark outside and I figured since I hadn\'t been there in a while so I might as well give it one more try. When I got to the park I was met with the view you saw in the first image. It was completely unreal.',
      // eslint-disable-next-line max-len
      'Now, to be clear, I don\'t think I was divinely woken up to go take this photo, but it\'s one of those weird coincidences that sticks in the mind. There\'s also probably a moral in here about not giving up and being open to giving something another chance, or maybe even just listening to your gut. My first instincts were correct, a nice shot was possible, the place just needed the right lighting (and also for the area to be cleaned up, which some good people must have done).'
    ],
    altText: 'Middle Branch Pier Sunrise'
  },
  {
    name: 'domino-sugars-sunrise',
    photoFolders: ['2020_purple_domino_sugars'],
    tags: ['sunrise', 'baltimore', '2020'],
    aspect: '8.5x11',
    flickr: 'https://www.flickr.com/photos/40423570@N07/49785668918/',
    instagram: 'https://www.instagram.com/p/B_IMUjCJTFe/',
    description: [
      'Domino Sugars... how did I never notice the "s" at the end of sugars...'
    ],
    altText: 'Domino Sugars Sunrise'
  },
  {
    name: 'promenade-view-1',
    photoFolders: ['2020-02-16_sunrise'],
    tags: ['sunrise', 'baltimore', '2020'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/49549964818/',
    description: [
      'A view from along Baltimore\'s Inner Harbor promenade.'
    ],
    altText: 'Promenade View'
  },
  {
    name: 'broening-park-1',
    photoFolders: ['2020-02-12_sunrise'],
    tags: ['sunrise', 'baltimore', '2020'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/49540770052/',
    description: [
      'A view from Broening Park in Baltimore.'
    ],
    altText: 'Broening Park'
  },
  {
    name: 'fells-point-sunrise',
    photoFolders: ['2020_fells_sunrise'],
    tags: ['main', 'sunrise', 'baltimore', '2020'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/49444935107/',
    instagram: 'https://www.instagram.com/p/B73wKrJJthJ/',
    description: [
      // eslint-disable-next-line max-len
      'I was up early one morning exploring Fells Point when I saw the clouds start to change color. I followed the promenade until I came upon this spot.'
    ],
    altText: 'Fells Point Sunrise'
  },
  {
    name: 'icy-domino-sugars-factory',
    photoFolders: ['2019_a_song_of_ice_and_sugar'],
    tags: ['main', 'baltimore', '2019'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/46972143511/',
    description: [
      // eslint-disable-next-line max-len
      'The thing I remember most about this shot was how incredibly cold it was. My hands were numb and my beard had ice in it. However, I really wanted to get a shot where there was snow around the building, since it would make the building look like it was spilling out sugar.'
    ],
    altText: 'Domino Sugars'
  },
  {
    name: 'federal-hill-view-1',
    photoFolders: ['2019_predawn_federal_hill'],
    tags: ['sunrise', 'baltimore', '2019'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/46068156685/',
    description: [
      'A pre-dawn view from Federal Hill.'
    ],
    altText: 'Federal Hill'
  },
  {
    name: 'inner-harbor-sunrise',
    photoFolders: ['2019_colors_and_shapes'],
    tags: ['main', 'sunrise', 'baltimore', '2019'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/33185613028/',
    description: [
      'Colors and shapes from Baltimore\'s Inner Harbor.'
    ],
    altText: 'Baltimore Inner Harbor'
  },
  {
    name: 'fells-point-puddle',
    photoFolders: ['2019_fells_puddle'],
    tags: ['sunrise', 'baltimore', '2019'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/40171359453/',
    description: [
      'Fells Point Puddle'
    ],
    altText: 'Fells Puddle'
  },
  {
    name: 'middle-branch-boat-ramp',
    photoFolders: ['2019_boat_ramp'],
    tags: ['sunrise', 'baltimore', '2019'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/48040741787/',
    description: [
      'Middle Branch Park Boat Ramp'
    ],
    altText: 'Boat Ramp'
  },
  {
    name: 'baltimore-skyline-2016',
    photoFolders: ['2016_bmore_skyline'],
    tags: ['sunrise', 'baltimore', '2019'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/32739919647/',
    description: [
      'Baltimore City Skyline (2016)'
    ],
    altText: 'Baltimore City Skyline'
  },
  {
    name: 'jordan-lake',
    photoFolders: ['2018_nc_sunrise'],
    tags: ['sunrise', '2018'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/44481116881/',
    description: [
      // eslint-disable-next-line max-len
      'The sun rising over Jordan Lake in North Calorina. I went down to Durham with my family for a long weekend and on the morning we were to return home I decided to sneak out early to catch the sun rise. I\'d seen this lake on the map and thought it might make for a nice spot. I had never been here before and neither had the person working the front desk at the hotel we were staying at, so I wasn\'t sure what to expect.',
      // eslint-disable-next-line max-len
      'I found this spot entirely by chance. I parked at some random spot along the road and just kind of walked until I came across a view that looked nice. The lake itself looked like a wonderful little area. It\'s a shame I didn\'t have more time to explore the area.'
    ],
    altText: 'Jordan Lake'
  },
  {
    name: 'fort-armistead-sunrise-2',
    photoFolders: ['2016_armistead_sunrise2','2016_armistead_sunrise1'],
    tags: ['sunrise', '2018'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/31139325476/',
    description: [
      'Fort Armistead Sunrise.'
    ],
    altText: 'Fort Armistead Sunrise'
  },
  {
    name: 'cherry-blossoms-dc',
    photoFolders: ['2016_jefferson_tree'],
    tags: ['sunrise', '2016'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/25429707924/',
    description: [
      'Sunrise at the Washington DC Cherry Blossoms.'
    ],
    altText: 'Cherry Blossoms'
  },
  {
    name: 'mt-vernon-fountain',
    photoFolders: ['2019_mt_vernon_fountain'],
    tags: ['baltimore', '2019'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/47038743724/',
    description: [
      'Baltimore in Spring.'
    ],
    altText: 'Mt Vernon Fountain'
  },
  {
    name: 'a-pathway-to-nightmares',
    photoFolders: ['2018_a_pathway_to_nightmares'],
    tags: ['spooky', '2018'],
    aspect: '16x9',
    flickr: 'https://www.flickr.com/photos/40423570@N07/25943790027/',
    description: [
      `I want to title this "A Pathway to Nightmares" because its a landscape that seems like its out of a nightmare.
       However, in reality this pathway leads to a really nice playground so that seems a bit silly. However, I love
       the creepiness of this image.`
    ],
    altText: 'A Pathway to Nightmares'
  },
  {
    name: '34th-street-1',
    photoFolders: ['2018_34th_street'],
    tags: ['christmas', '2018'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/32449000578/',
    description: [
      '34th Street.'
    ],
    altText: `Every year in December the people who live on this street - 34th Street - go all out with decorating 
    their houses.`
  },
  {
    name: 'george-peabody-library',
    photoFolders: ['2016_Peabody'],
    tags: ['baltimore', '2016'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/23977620954/',
    description: [
      // eslint-disable-next-line max-len
      'There\'s a great short story titled "The Library of Babel", which is about a library that contains all possible 410-page books. Most of these books are just gibberish, but within the library every single human thought, story, and idea is captured. In fact, within the library there must exist a book which is a perfect index of the library\'s contents (and also many which are fake indexes). The librarians who inhabit the place are in a state of despair, and many seek to purify the library by destroying the books which are gibbish. Anyway, whenever I think of that story, I think of this place, the George Peabody Library in Baltimore.'
    ],
    altText: 'George Peabody Library'
  },
  {
    name: 'foggy-carroll-park',
    photoFolders: ['2018_carroll_park'],
    tags: ['spooky', '2018'],
    aspect: '16x10',
    flickr: 'https://www.flickr.com/photos/40423570@N07/41785088311/',
    description: [
      `I had originally planned to shoot the sunrise over Druid Lake in Baltimore, but when I arrived I found that the
       city was in the midst of doing a big construction project and there was a fence around the lake. 
       Distraught, I decided to go home.`,
      `As I made my way through unfamiliar backstreets a fog came over the city and I thought the skyline looked
       really surreal as it faded into the haze. I pulled into the park next to me and ran to the highest spot I could
       find. From there I took this picture.`
    ],
    altText: 'Carroll Park'
  },
  {
    name: 'kids',
    photoFolders: ['2017_kids'],
    tags: ['people', '2017'],
    aspect: '10x8',
    flickr: 'https://www.flickr.com/photos/40423570@N07/37835534304/',
    description: [
      'Kids.'
    ],
    altText: 'Kids'
  },
  {
    name: 'annapolis-rock-1',
    photoFolders: ['2017_annapolis_rock'],
    tags: ['people', '2017'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/38603331716/',
    description: [
      'Western Maryland.'
    ],
    altText: 'Annapolis Rock'
  },
  {
    name: 'the-haunted-car',
    photoFolders: ['2017_haunted_car1', '2017_haunted_car2'],
    tags: ['people', '2017'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/37562177870/',
    description: [
      `I was taken to this spot by an Urbex YouTuber I used to follow. He'd done a video on the car and
       when I asked him where it was he offered to take me out to see it. I thought that was pretty cool of him,
       though I felt a little strange going deep into the woods with someone I didn't know.`,
      `The hike to the car took around an hour and I was really happy with the images I was able to capture. 
      To me the first one has a strange beauty to it and the second one I just find hilariously fun.`,
    ],
    altText: 'The Haunted Car'
  },
  {
    name: 'baltimore-skyline-2016-pano',
    photoFolders: ['2016_pano1','2016_pano2','2016_pano3'],
    tags: ['sunrise', '2016'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/31139325476/',
    description: [
      `Baltimore Skyline 2016. This was taken from my in-law's condo. To get the 180+ degree view I took 3 shots from
       each of their two balconies and then stitched the images together in Photoshop.`,
      `The dynamic range for this shot was insane. I had tried to do it a few times previously
       but I always ended up with the sky being blown out on one side. I finally got an evening where it worked out.`
    ],
    altText: 'Baltimore Skyline',
    transitionOptions: {
      slowTransition: true
    }
  },
  {
    name: 'middle-branch-park-2019-pano',
    photoFolders: ['2019_mb_sunrise_pano1','2019_mb_sunrise_pano2'],
    tags: ['sunrise', '2019'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/48033984648/',
    description: [
      `If you saw my Middle Branch Dock photo, which is elsewhere on this site, this is from that same sunrise. 
      This was taken from the end of the dock.`
    ],
    altText: 'Baltimore Sunrise',
    transitionOptions: {
      slowTransition: true
    }
  },
  {
    name: 'mccloud-church-down-the-street',
    photoFolders: ['2021_mccloud_at_night_01'],
    tags: ['2021'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/51578322234/',
    description: [
      ''
    ],
    altText: '',
  },
  {
    name: 'mccloud-church-witching-hour',
    photoFolders: ['2021_mccloud_at_night_02'],
    tags: ['2021'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/51578559305/',
    description: [
      ''
    ],
    altText: '',
  },
  {
    name: 'mccloud-illuminated',
    photoFolders: ['2021_mccloud_at_night_03'],
    tags: ['2021'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/51577874638/',
    description: [
      ''
    ],
    altText: 'House',
  },
  {
    name: 'mccloud-pocket-of-light',
    photoFolders: ['2021_mccloud_at_night_04'],
    tags: ['2021'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/51577636961/',
    description: [
      ''
    ],
    altText: '',
  },
  {
    name: 'mccloud-light-at-the-end-of-the-road',
    photoFolders: ['2021_mccloud_at_night_05'],
    tags: ['2021'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/51576821947/',
    description: [
      ''
    ],
    altText: '',
  },
  {
    name: 'mccloud-lonely-road',
    photoFolders: ['2021_mccloud_at_night_06'],
    tags: ['2021'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/51578319779/',
    description: [
      ''
    ],
    altText: '',
  },
  {
    name: 'mccloud-playground',
    photoFolders: ['2021_mccloud_at_night_07'],
    tags: ['2021'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/51578317329/',
    description: [
      ''
    ],
    altText: '',
  },
  {
    name: 'mccloud-the-book',
    photoFolders: ['2021_mccloud_at_night_11'],
    tags: ['2021'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/51576821647/',
    description: [
      ''
    ],
    altText: '',
  },
  {
    name: 'mccloud-the-house',
    photoFolders: ['2021_mccloud_at_night_08'],
    tags: ['2021'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/51576827772/',
    description: [
      '#8'
    ],
    altText: 'House',
  },
  {
    name: 'mccloud-gas-station',
    photoFolders: ['2021_mccloud_at_night_09'],
    tags: ['2021'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/51576827092/',
    description: [
      '#8'
    ],
    altText: 'Gas station',
  },
  {
    name: 'mccloud-at-night',
    photoFolders: ['2021_mccloud_at_night_10'],
    tags: ['2021'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/51577875728/',
    description: [
      '#8'
    ],
    altText: 'House',
  },
  {
    name: 'mccloud-high-school',
    photoFolders: ['2021_mccloud_at_night_12'],
    tags: ['2021'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/52004331497/',
    description: [
      '#8'
    ],
    altText: 'House',
  }
];

// add in the sizes field
let large = (window.devicePixelRatio > 1);
let _600 = large ? '1200' : '600';
let _900 = large ? '1800' : '900';
let _1200 = large ? '2400' : '1200';
let _1536 = large ? '3072' : '1536';
let baseImg = './';

function getImagesSizes(folder) {
  return {
    '600': require(baseImg + folder + '/' + _600 + '.jpg'),
    '900': require(baseImg + folder + '/' + _900 + '.jpg'),
    '1200': require(baseImg + folder + '/' + _1200 + '.jpg'),
    '1536': require(baseImg + folder + '/' + _1536 + '.jpg')
  };
}

const createPhotoAlbum = function(input) {
  let album = Object.assign({}, input);
  album.id = album.id || album.photoFolders[0];
  album.photoFolders.forEach(folderName => {
    album.photos = album.photos || [];
    try {
      album.photos.push(getImagesSizes(folderName));
    } catch (err) {
      console.dir(err);
    }
  });
  return album;
};

albums = albums.map(album => (createPhotoAlbum(album)));

/*
  Notes:
  - All pageContent items need a unique name.
 */
const galleries = [
  {
    name: 'main-standard',
    label: 'Main',
    pageContent: [
      {type: 'photo', name: 'patterson-park-pagoda-in-springtime'},
      {type: 'photo', name: 'baltimore-skyline-light-toggle'},
      {type: 'photo', name: 'domino-2021-sunrise-toggle'},
      {type: 'photo', name: 'downs-park-pier'},
      {type: 'photo', name: 'the-thunderbirds'},
      {type: 'photo', name: 'fort-armistead-sunrise-1'},
      {type: 'photo', name: 'something-in-the-mist'},
      {type: 'photo', name: 'mossbrae-falls'},
      {type: 'photo', name: 'middle-branch-pier'},
      {type: 'photo', name: 'fells-point-sunrise'},
      {type: 'photo', name: 'icy-domino-sugars-factory'},
      {type: 'photo', name: 'inner-harbor-sunrise'},
    ]
  },
  {
    name: 'main-spring',
    label: 'Main',
    pageContent: [
      {type: 'photo', name: 'patterson-park-pagoda-in-springtime'},
      {type: 'photo', name: 'baltimore-skyline-light-toggle'},
      {type: 'photo', name: 'mt-vernon-fountain'},
      {type: 'photo', name: 'downs-park-pier'},
      {type: 'photo', name: 'fort-armistead-sunrise-1'},
      {type: 'photo', name: 'mossbrae-falls'},
      {type: 'photo', name: 'middle-branch-pier'},
      {type: 'photo', name: 'fells-point-sunrise'},
      {type: 'photo', name: 'cherry-blossoms-dc'},
      {type: 'photo', name: 'inner-harbor-sunrise'},
      {
        type: 'react',
        name: 'main-spring-footer-text',
        children: (
          <>
            <h3>Thank you for stopping by!</h3>
            <p>
              If you have a sec, check out the new gallery I put up called
              {' '}
              <Link
                href={'/gallery/mccloud-at-night/'}
              >McCloud at Night</Link>
              {'. '}
              It's a set of images I took while exploring the small town of McCloud, California.
              The images have a "liminal space" type feel to them, and are a bit darker than the images
              in the main gallery.
            </p>

          </>
        )
      },
    ]
  },
  {
    name: 'main-summer',
    label: 'Main',
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
    pageContent: [
      {type: 'photo', name: 'a-pathway-to-nightmares'},
      {type: 'photo', name: 'something-in-the-mist'},
      {type: 'photo', name: 'foggy-carroll-park'},
      {type: 'photo', name: 'the-haunted-car'},
    ]
  },
  {
    name: 'main-christmas',
    label: 'Main',
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
    pageContent: [
      {type: 'photo', name: 'baltimore-skyline-light-toggle'},
      {
        type: 'text',
        name: 'interactive-text-1',
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
    pageContent: [
      {type: 'photo', name: 'a-pathway-to-nightmares'},
      {type: 'photo', name: 'something-in-the-mist'},
      {type: 'photo', name: 'foggy-carroll-park'},
      {type: 'photo', name: 'the-haunted-car'},
    ]
  },
  {
    name: 'mccloud-at-night',
    label: 'McCloud at Night',
    pageContent: [
      {type: 'photo', name: 'mccloud-church-down-the-street', photoProps: {showDetails: false}},
      {
        type: 'text',
        name: 'mccloud-at-night-text-1',
        text:
          [`McCloud is an old mountain town that rests in the shadow of Mount Shasta, an active volcano at the 
            southern end of the Cascade Range in northern California. 
            The town was founded around a lumber company ("Mother McCloud") which closed down in the second half of 
            the 20th century. Today its population is less than 1000.`]
      },
      {type: 'photo', name: 'mccloud-church-witching-hour', photoProps: {showDetails: false}},
      {
        type: 'text',
        name: 'mccloud-at-night-text-2',
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
        name: 'mccloud-at-night-text-3',
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
        name: 'mccloud-at-night-react-1',
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
        name: 'mccloud-at-night-text-4',
        text:
          [`Around 30 kids attend the local high school, meaning if you were to go to here you'd most likely
            know everyone in your high school.`]
      },
      {type: 'photo', name: 'mccloud-pocket-of-light', photoProps: {showDetails: false}},
      {
        type: 'text',
        name: 'mccloud-at-night-text-5',
        text:
          [`The McCloud River Lumber Company was known as "Mother McCloud" because it owned the houses its workers 
            lived in and it took great pride in taking care of them. In the 1960's the company was sold to 
            U.S. Plywood who sold the houses to the people living in them for $5k each. Sadly not all of the workers
            could afford this price tag.`]
      },
      {type: 'photo', name: 'mccloud-light-at-the-end-of-the-road', photoProps: {showDetails: false}},
      {
        type: 'text',
        name: 'mccloud-light-at-the-end-of-the-road-text',
        text:
          [`A patch of light in the darkness. It's was incredibly dark as I walked the streets. Lamp posts were like
            beacons the void.`]
      },
      {type: 'photo', name: 'mccloud-lonely-road', photoProps: {showDetails: false}},
      {
        type: 'text',
        name: 'lonely-road-text',
        text:
          ['The road out of town.']
      },
      {type: 'photo', name: 'mccloud-playground', photoProps: {showDetails: false}},
      {
        type: 'text',
        name: 'mccloud-playground-text',
        text:
          [`I got a strong liminal space vibe from this empty playground. As I left this area a group of teenagers
            approached me and yelled out: "hey faggot!", I thought I was about to be jumped, but they profusely 
            apologized when they realized I wasn't the person they were looking for, whom they claimed was a friend 
            of theirs.`]
      },
      {type: 'photo', name: 'mccloud-the-book', photoProps: {showDetails: false}},
      {
        type: 'text',
        name: 'the-book-text',
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
        name: 'mccloud-gas-station-text',
        text:
          ['I just think gas stations look cool at night.']
      },
      {type: 'photo', name: 'mccloud-at-night', photoProps: {showDetails: false}},
      {
        type: 'text',
        name: 'mccloud-thank-you-text',
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
  {
    name: 'panoramas',
    label: 'Panorama',
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
      {
        type: 'text',
        name: 'panorama-text-2',
        header: 'Wait, only 2?',
        text:
          [`There will be more soon. Based on my stats most people don't return, so I'm probably saying this in vain, 
            but: I'm working on it. I just started revamping this site and have a bunch of different galleries 
            I want to add (as of 4/10/22). So assuming I get the time I need this section should fill out within 
            the next month.`]
      }
    ]
  },
];

/////////////////////////////////////////// Exports

export {galleries};

export {createPhotoAlbum};

export function getPhotoAlbumByName(name) {
  return albums.find(album => {
    return album.name === name;
  });
}

export default albums;

