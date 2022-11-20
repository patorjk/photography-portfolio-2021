import {Link} from '@mui/material';
import React from 'react';
import {galleries} from './galleries';
import config from '../app.config.js';
import MainEnding from '../components/blurbs/MainEnding';
import MainImageToggles from '../components/blurbs/MainImageToggles';
import MainIntro from '../components/blurbs/MainIntro';
import MainPanoramas from '../components/blurbs/MainPanoramas';

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
      `Built in 1891 as a people's lookout tower, this pagoda is located in Baltimore, Maryland of all places.
      It's one of the city's most popular landmarks and a highlight of one of its nicest parks.`
    ],
    altText: 'Patterson Park Pagoda'
  },
  {
    name: 'baltimore-skyline-light-toggle',
    photoFolders: ['2018_baltimore_skyline_lights_off', '2018_baltimore_skyline_lights_on'],
    tags: ['main', 'baltimore', '2018'],
    transitionOptions: {
      type: 'toggle',
      toggleLabel: 'Click the switch to turn Baltimore\'s lights on and off',
      imageStart: 1
    },
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/44674533262/',
    description: [
      `A view of Baltimore's skyline from 2018. I superimposed two images to create the lights on/off effect.
      I found it kind of fun, though maybe I'm just easily amused. 
      I figured I'd put it up here so others could play around with it too.`
    ],
    altText: 'Baltimore Skyline Light Toggle (power the city on and off)'
  },
  {
    name: 'domino-2021-sunrise-toggle',
    photoFolders: ['2021_01_domino_sunrise_1', '2021_01_domino_sunrise_2'],
    tags: ['main', 'baltimore', '2021'],
    transitionOptions: {
      type: 'toggle',
      toggleLabel: 'Click the switch to switch between night and day',
      imageStart: 0
    },
    aspect: '8x10',
    flickr: [
      'https://www.flickr.com/photos/40423570@N07/51755438998',
      'https://www.flickr.com/photos/40423570@N07/51177443441/',
    ],
    description: [
      'Sunrise next to the Domino Sugars plant in Baltimore. '
    ],
    altText: 'Domino Sugars Planet Day/Night Image Toggle'
  },
  {
    name: 'downs-park-pier',
    photoFolders: ['2020_downs_sunrise', '2019_downs_sunrise', '2020_downs_spooky'],
    tags: ['main', 'sunrise', '2019'],
    aspect: '6x4',
    flickr: [
      'https://www.flickr.com/photos/40423570@N07/51017115833/',
      'https://www.flickr.com/photos/40423570@N07/46482748235/',
      'https://www.flickr.com/photos/40423570@N07/50535452467',
    ],
    description: [
      // eslint-disable-next-line max-len
      'No two mornings are identical. As an aside, if you look closely in the first photo you\'ll see a couple out on the pier - they were getting their engagement photos taken.'
    ],
    altText: 'Downs Park Pier Sunrise'
  },
  {
    name: 'downs-park-pier-foggy',
    photoFolders: ['2020_downs_spooky'],
    tags: ['main', 'sunrise', '2019'],
    aspect: '6x4',
    flickr: [
      'https://www.flickr.com/photos/40423570@N07/50535452467',
    ],
    description: [
      // eslint-disable-next-line max-len
      'Taken a week or so before Halloween.'
    ],
    altText: 'A Haunting View of Downs Park Pier'
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
    altText: 'Something in the Mist - Abandoned Pier in Baltimore'
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
    flickr: [
      'https://www.flickr.com/photos/40423570@N07/48152204987',
      'https://www.flickr.com/photos/40423570@N07/48174788687/'
    ],
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
    altText: 'Middle Branch Pier - The difference a year makes'
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
    altText: 'Sunrise Behind the Domino Sugars Planet in Baltimore'
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
    altText: 'Sunrise Along Baltimore\'s Promenade'
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
    altText: 'Sunrise at Broening Park in Baltimore'
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
    altText: 'Sunrise at Fells Point in Baltimore'
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
    altText: 'An Icy Morning at the Domino Sugars Plant'
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
    altText: 'Sunrise at Federal Hill Park in Baltimore'
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
    altText: 'Sunrise at Baltimore\'s Inner Harbor'
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
    altText: 'Sunrise from the Fells Puddle in Baltimore'
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
    altText: 'Baltimore Boat Ramp Sunrise'
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
    altText: 'Baltimore City Skyline Sunset'
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
    altText: 'Jordan Lake Sunrise'
  },
  {
    name: 'fort-armistead-sunrise-2',
    photoFolders: ['2016_armistead_sunrise2','2016_armistead_sunrise1'],
    tags: ['sunrise', '2018'],
    aspect: '6x4',
    flickr: [
      'https://www.flickr.com/photos/40423570@N07/31139325476/',
      'https://www.flickr.com/photos/40423570@N07/30999597372/',
    ],
    description: [
      'Fort Armistead Sunrise.'
    ],
    altText: 'Fort Armistead Sunrise - The Sun Aligns!'
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
    altText: 'Cherry Blossoms Sunrise'
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
    altText: 'Mt Vernon Fountain in Baltimore'
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
      'Every year in December the people who live on this street, 34th Street, go all out with decorating their houses.'
    ],
    altText: 'Baltimore\'s 34th Street at Christmas Time'
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
    altText: 'George Peabody Library in Baltimore'
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
    altText: 'A Foggy Morning in Carroll Park'
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
    altText: 'Smiling Kids'
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
    altText: 'Annapolis Rock Overlook'
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
    altText: 'Baltimore Skyline Panorama',
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
      `This majestic view was once home to an auto junkyard. Thankfully someone had some sense and it's now the view
      from a public park.`
    ],
    altText: 'Baltimore Sunrise Panorama',
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
    altText: 'McCloud Church',
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
    altText: 'The Witching Hour in McCloud',
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
    altText: 'McCloud House',
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
    altText: 'Light at the End of the Road',
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
    altText: 'A Lonely Road',
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
    altText: 'McCloud Playground',
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
    altText: 'McCloud Book Statue',
  },
  {
    name: 'mccloud-the-house',
    photoFolders: ['2021_mccloud_at_night_08'],
    tags: ['2021'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/51576827772/',
    description: [
      ''
    ],
    altText: 'An Uprooted House',
  },
  {
    name: 'mccloud-gas-station',
    photoFolders: ['2021_mccloud_at_night_09'],
    tags: ['2021'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/51576827092/',
    description: [
      ''
    ],
    altText: 'McCloud Gas Station',
  },
  {
    name: 'mccloud-at-night',
    photoFolders: ['2021_mccloud_at_night_10'],
    tags: ['2021'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/51577875728/',
    description: [
      ''
    ],
    altText: 'McCloud House',
  },
  {
    name: 'mccloud-high-school',
    photoFolders: ['2021_mccloud_at_night_12'],
    tags: ['2021'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/52004331497/',
    description: [
      ''
    ],
    altText: 'McCloud High School',
  },
  {
    name: 'middle-branch-trailhead-no9-pano',
    photoFolders: ['2018_mbt9_1', '2018_mbt9_2'],
    tags: ['2018'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/28870755928/',
    description: 'A panorama from Middle Branch Park in Baltimore.',
    altText: 'Baltimore Sunrise Panorama from Trailhead #9',
  },
  {
    name: 'heart-lake-smoky',
    photoFolders: ['2021_heart_lake_smoky'],
    tags: ['2021'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/51887885864/',
    description: 'A creepy morning at Heart Lake.',
    altText: 'Mt Shasta from Heart Lake',
  },
  {
    name: 'old-american-brewery',
    photoFolders: ['2019_old_american_brewery'],
    tags: ['2019'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/52011933849/',
    description: [
      `The Old American Brewery looms over a row of townhouses. This is a strange yet iconic spot in Baltimore.
      Photographers can make the brewery smaller or larger by adjusting the focal length of their lens. I'd only ever
      seen daylight shots of this place so I thought it might be cool to stop by after dark.`,
      `Wow did I not think that through.
      The area turned out to be pretty sketchy and it's one of the few times I've felt unsafe taking a photo. 
      Although it's a cool spot, I'm not sure I see myself returning.`
    ],
    altText: 'Old American Brewery in Baltimore',
  },
  {
    name: 'halloween-houses',
    photoFolders: ['2021_halloween_house_1', '2021_halloween_house_2'],
    tags: ['2021'],
    aspect: '16x10',
    flickr: 'https://www.flickr.com/photos/40423570@N07/51624805640/',
    description: [
      `I love it when someone goes all out for Halloween. In 2021 I drove around with my daughter looking for
      "Halloween Houses". We only found a few, but the ones we did find were amazing. 
      It might be cool to make a larger gallery of these, but the really good houses are few and far between.
      They definitely need more love though. I always loved trick-or-treating at these kind of places!`,
    ],
    altText: 'Halloween House in Glenn Bernie',
  },
  {
    name: 'halloween-death-plague-dance-party',
    photoFolders: ['2021_halloween_house_1'],
    tags: ['2021'],
    aspect: '16x10',
    flickr: 'https://www.flickr.com/photos/40423570@N07/51624805640/',
    description: [``],
    caption: 'Greenway Rd, Glenn Bernie, MD (2021)',
    altText: 'Halloween House in Glenn Bernie',
  },
  {
    name: 'halloween-pumpkin-scarecrow',
    photoFolders: ['2021_halloween_house_2'],
    tags: ['2021'],
    aspect: '16x10',
    flickr: 'https://www.flickr.com/photos/40423570@N07/51634527438',
    description: [``],
    caption: 'Baylor Rd, Glenn Bernie, MD',
    altText: 'Halloween House in Glenn Bernie (2021)',
  },
  {
    name: 'halloween-dena-cemetery',
    photoFolders: ['2022_dena_cemetery'],
    tags: ['2022'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/52465471694/',
    description: [``],
    caption: 'Maple Avenue, Pasadena, MD',
    altText: 'Halloween House in Pasadena, MD (2022)',
  },
  {
    name: 'halloween-pirate-skeletons',
    photoFolders: ['2022_pirate_skeletons'],
    tags: ['2022'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/52465471694/',
    description: [``],
    caption: 'Park Rd, Riveria Beach, MD',
    altText: 'Halloween House in Riveria Beach, MD (2022)',
  },
  {
    name: 'halloween-green-graveyard',
    photoFolders: ['2022_halloween_graveyard'],
    tags: ['2022'],
    aspect: '16x10',
    flickr: 'https://www.flickr.com/photos/40423570@N07/52452299661/',
    description: [``],
    caption: 'Red Birch Rd, Millersville, MD',
    altText: 'Halloween House in Millersville, MD (2022)',
  },
  {
    name: 'halloween-cutouts',
    photoFolders: ['2022_halloween_baylor'],
    tags: ['2022'],
    aspect: '16x10',
    flickr: 'https://www.flickr.com/photos/40423570@N07/52461746940',
    description: [``],
    caption: 'Baylor Rd, Glenn Bernie, MD',
    altText: 'Halloween House in Glenn Bernie (2021)',
  },
  {
    name: 'halloween-biohazard',
    photoFolders: ['2022_halloween_biohazard'],
    tags: ['2022'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/52478846382/',
    description: [``],
    caption: 'Maple Avenue, Pasadena, MD',
    altText: 'Halloween House in Pasadena, MD (2022)',
  },


  {
    name: 'baltimore-skyline-2022-pano',
    photoFolders: ['2022_bmore_pano_1', '2022_bmore_pano_2'],
    tags: ['2022'],
    aspect: '16x10',
    flickr: 'https://www.flickr.com/photos/40423570@N07/51844197590/',
    description: [
      'A panorama from the Inner Harbor in Baltimore.',
    ],
    altText: 'Baltimore Skyline Panorama',
  },
  {
    name: 'fells-point-2020-pano',
    photoFolders: ['2020_fells_pano_1', '2020_fells_pano_2'],
    tags: ['2020'],
    aspect: '6x4',
    flickr: 'https://www.flickr.com/photos/40423570@N07/52019390315/',
    description: [
      'A panorama from Fells Point in Baltimore.',
    ],
    altText: 'Baltimore Fells Point Sunrise Panorama',
  },

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

function getImagesSizesOriginal(folder) {
  return {
    '600': require(baseImg + folder + '/600.jpg'),
    '900': require(baseImg + folder + '/900.jpg'),
    '1200': require(baseImg + folder + '/1200.jpg'),
    '1536': require(baseImg + folder + '/1536.jpg')
  };
}

const createPhotoAlbum = function(input) {
  let album = Object.assign({}, input);
  album.id = album.id || album.photoFolders[0];
  album.title = album.title || album.altText + ' | ' + config.title.main;
  album.photoFolders.forEach(folderName => {
    album.photos = album.photos || [];
    album.photosNormalSize = album.photosNormalSize || [];
    try {
      album.photos.push(getImagesSizes(folderName));
      album.photosNormalSize.push(getImagesSizesOriginal(folderName));
    } catch (err) {
      console.dir(err);
    }
  });
  return album;
};

console.log(`number of photos: ${albums.length}`);

albums = albums.map(album => (createPhotoAlbum(album)));


/////////////////////////////////////////// Exports

export {createPhotoAlbum};
export {galleries};

export function getPhotoAlbumByName(name) {
  return albums.find(album => {
    return album.name === name;
  });
}

// see app.php
console.log('albums');
let _albums = albums.map(item => ({
  name: item.name,
  des: Array.isArray(item.description) ? item.description.join('') : item.description || 'A really cool photo',
  title: item.altText,
  photo: item.photos[0]['600'],
}));
console.dir(_albums);
console.log(JSON.stringify(_albums).replace(/'/g, '\\\''));

export default albums;

