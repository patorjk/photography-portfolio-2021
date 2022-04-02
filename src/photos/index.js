/*
	Photos.

	name: photo album name
	photoFolders: A list of folder names for the image sources. If more than 1 is provided a stepper will be provided with the image. (see the transitionOptions prop)
	tags: Tags for the image.
	category: Main category for the image.
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
		name: "patterson-park-pagoda-in-springtime",
		photoFolders: ["2019_pagoda"], // doubles as the ID for the photo
		tags: ["main", "baltimore", "2019"],
		category: "main",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/47536723332/",
		description: [
			"Springtime in Baltimore."
		],
		altText: "Springtime in Baltimore",
	},
	{
		name: "baltimore-skyline-light-toggle",
		photoFolders: ["2018_baltimore_skyline_lights_off", "2018_baltimore_skyline_lights_on"],
		tags: ["main", "baltimore", "2018"],
		category: "main",
		transitionOptions: {
			type: 'toggle',
			toggleLabel: "Click the switch to turn Baltimore's lights on and off 👈 😁😁😁",
			imageStart: 1,
		},
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/44674533262/",
		description: [
			"A view of Baltimore's skyline from 2018. I took a series of images as the sun set and found I liked the city lights better an hour after sunrset, but the sky from around 10 minutes after sunset. I took the two images and overlaid them in photostop and was able to blend them into one. However, I had fun toggling the effect on and off because it looked like I was powering on/off the city. ",
			"Maybe I'm just easily amused, but I figured I'd put it up here so others could play around with it too."
		],
		altText: "Baltimore Skyline Light Toggle",
	},
	{
		name: "domino-2021-sunrise-toggle",
		photoFolders: ["2021_01_domino_sunrise_1", "2021_01_domino_sunrise_2"],
		tags: ["main", "baltimore", "2021"],
		category: "main",
		transitionOptions: {
			type: 'toggle',
			toggleLabel: "Click the switch to switch between night and day 👈 😁😁😁",
			imageStart: 0,
		},
		aspect: "8x10",
		flickr: "https://www.flickr.com/photos/40423570@N07/51755438998",
		description: [
			"Sunrise next to the Domino Sugars plant in Baltimore. ",
		],
		altText: "Sunrise Toggle",
	},
	{
		name: "downs-park-pier",
		photoFolders: ["2020_downs_sunrise", "2019_downs_sunrise", "2020_downs_spooky"],
		tags: ["main", "sunrise", "2019"],
		category: "main",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/46482748235/",
		description: [
			"One of my favorite places to go for the sunrise. No two mornings are identical. As an aside, if you look closely in the first photo you'll see a couple out on the pier - they were getting their engagement photos taken."
		],
		altText: "Downs Park Sunrise",
	},
	{
		name: "the-thunderbirds",
		photoFolders: ["2018_the_thunderbirds"],
		tags: ["main", "airshow", "2018"],
		category: "main",
		aspect: "1x1",
		flickr: "https://www.flickr.com/photos/40423570@N07/44256887115/",
		instagram: "https://www.instagram.com/p/BoruZZKFlmz/",
		description: [
			'The Thunderbirds. This shot was my most viewed shot on my old photography website.',
		],
		altText: "The Thunderbirds",
	},
	{
		name: "fort-armistead-sunrise-1",
		photoFolders: ["2016-03-12_sunrise"],
		tags: ["main", "sunrise", "baltimore", "2016"],
		category: "main",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/25705211566/",
		description: [
			"I ruined my shoes for this shot. After I set up my camera on the banks of this inlet I realized I was slowly sinking into the mud. However, the most spectacular sunrise I'd ever seen was in front of me so I didn't want to move. When the colors had finally faded I was in over my ankles. My shoes actually came off as I tried to escape. I would later vigorously wash them, but they were never the same.",
		],
		altText: "Fort Armistead Sunrise",
	},
	{
		name: "something-in-the-mist",
		photoFolders: ["2020_something_in_the_mist"],
		tags: ["main", "creepy", "2020"],
		category: "main",
		aspect: "16x9",
		flickr: "https://www.flickr.com/photos/40423570@N07/49499354128/",
		instagram: "https://www.instagram.com/p/B8UMPG7JSa4/",
		description: "Normally this abandoned pier is a huge eyesore, something that spoils the landscape of the area, however, on a morning so foggy that the other side of the harbor wasn't visible it jumped out at me. Almost like an abandoned island floating in the middle of nowhere.",
		altText: "Something in the Mist",
	},
	{
		name: "mossbrae-falls",
		photoFolders: ["2019-08-23_mossbrae_falls"],
		tags: ["main", "waterfall", "2019"],
		category: "main",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/48660329588/",
		description: [
			"Getting to this place was an adventure in and of itself. There's no direct trail and I had to wade through a waist-deep section of the Sacramento River. However, the resulting sight was awe inspiring. The water looks like it's coming out of the underbrush on the mountain, and the falls run along the river. I know this sounds silly, but the place feels magical.",
			"Also, as a neat bit of trivia, Arnold Schwarzenegger took President George H.W. Bush here when he was showing off California to the former president."
		],
		altText: "Mossbrae Falls",
	},
	{
		name: "middle-branch-pier",
		photoFolders: ["2019_middle_branch_pier", "2018_middle_branch_pier"],
		transitionOptions: {
			type: 'toggle',
			toggleLabel: "Click the switch to see what the pier looked like one year earlier 😮",
			imageStart: 0,
		},
		tags: ["main", "sunrise", "baltimore", "2019"],
		category: "main",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/48152204987",
		description: [
			"I think most people look at this shot and just kind of shrug, thinking of it as just another sunrise pier photo. But I spent over a year trying to get this shot. When I came across this pier I could tell there was a nice photo just waiting to be captured. All that was needed was a morning with little to no wind (so the water would be smooth) and a nice sunrise. However, after showing up a few times over the course of a few months, I realized that since the pier pointed north (meaning the sun rose off camera to the right), it would take an epic sunrise/sunset that lit up the whole sky to create the shot I had in mind.",
			"I spent several months trying to figure out when the best day would be. Over a dozen times I woke up early and drove down to the park, only to be rewarded with a very \"meh\" shot. Finally one night there was a storm and I was sure a great sunrise was waiting on the other side of it. When I got to the park the following morning I saw the sight you see in the second picture (when you click the toggle button). It was a dreary, unpleasant sight and there was trash everywhere. I was defeated. Why was I punishing myself like this? There's no shot here, and even if there was, no one cares about this park, everyone's always leaving their trash everywhere. I went home and tried to forget about this place.",
			"Almost exactly a year later I awoke from my sleep thinking about this shot. It was still dark outside and I figured since I hadn't been there in a while so I might as well give it one more try. When I got to the park I was met with the view you saw in the first image. It was completely unreal.",
			"Now, to be clear, I don't think I was divinely woken up to go take this photo, but it's one of those weird coincidences that sticks in the mind. There's also probably a moral in here about not giving up and being open to giving something another chance, or maybe even just listening to your gut. My first instincts were correct, a nice shot was possible, the place just needed the right lighting (and also for the area to be cleaned up, which some good people must have done)."
		],
		altText: "Middle Branch Pier Sunrise",
	},
	{
		name: "domino-sugars-sunrise",
		photoFolders: ["2020_purple_domino_sugars"],
		tags: ["sunrise", "baltimore", "2020"],
		category: "sunrise",
		aspect: "8.5x11",
		flickr: "https://www.flickr.com/photos/40423570@N07/49785668918/",
		instagram: "https://www.instagram.com/p/B_IMUjCJTFe/",
		description: [
			'Domino Sugars... how did I never notice the "s" at the end of sugars...',
		],
		altText: "Domino Sugars Sunrise",
	},
	{
		name: "promenade-view-1",
		photoFolders: ["2020-02-16_sunrise"],
		tags: ["sunrise", "baltimore", "2020"],
		category: "sunrise",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/49549964818/",
		description: [
			"A view from along Baltimore's Inner Harbor promenade."
		],
		altText: "Promenade View",
	},
	{
		name: "broening-park-1",
		photoFolders: ["2020-02-12_sunrise"],
		tags: ["sunrise", "baltimore", "2020"],
		category: "sunrise",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/49540770052/",
		description: [
			"A view from Broening Park in Baltimore."
		],
		altText: "Broening Park",
	},
	{
		name: "fells-point-sunrise",
		photoFolders: ["2020_fells_sunrise"],
		tags: ["main", "sunrise", "baltimore", "2020"],
		category: "main",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/49444935107/",
		instagram: "https://www.instagram.com/p/B73wKrJJthJ/",
		description: [
			"I was up early one morning exploring Fells Point when I saw the clouds start to change color. I followed the promenade until I came upon this spot.",
		],
		altText: "Fells Point Sunrise",
	},
	{
		name: "icy-domino-sugars-factory",
		photoFolders: ["2019_a_song_of_ice_and_sugar"],
		tags: ["main", "baltimore", "2019"],
		category: "main",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/46972143511/",
		description: [
			"The thing I remember most about this shot was how incredibly cold it was. My hands were numb and my beard had ice in it. However, I really wanted to get a shot where there was snow around the building, since it would make the building look like it was spilling out sugar."
		],
		altText: "Domino Sugars",
	},
	{
		name: "federal-hill-view-1",
		photoFolders: ["2019_predawn_federal_hill"],
		tags: ["sunrise", "baltimore", "2019"],
		category: "sunrise",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/46068156685/",
		description: [
			"A pre-dawn view from Federal Hill."
		],
		altText: "Federal Hill",
	},
	{
		name: "inner-harbor-sunrise",
		photoFolders: ["2019_colors_and_shapes"],
		tags: ["main", "sunrise", "baltimore", "2019"],
		category: "main",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/33185613028/",
		description: [
			"Colors and shapes from Baltimore's Inner Harbor."
		],
		altText: "Baltimore Inner Harbor",
	},
	{
		name: "fells-point-puddle",
		photoFolders: ["2019_fells_puddle"],
		tags: ["sunrise", "baltimore", "2019"],
		category: "sunrise",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/40171359453/",
		description: [
			"Fells Point Puddle"
		],
		altText: "Fells Puddle",
	},
	{
		name: "middle-branch-boat-ramp",
		photoFolders: ["2019_boat_ramp"],
		tags: ["sunrise", "baltimore", "2019"],
		category: "sunrise",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/48040741787/",
		description: [
			"Middle Branch Park Boat Ramp"
		],
		altText: "Boat Ramp",
	},
	{
		name: "baltimore-skyline-2016",
		photoFolders: ["2016_bmore_skyline"],
		tags: ["sunrise", "baltimore", "2019"],
		category: "sunrise",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/32739919647/",
		description: [
			"Baltimore City Skyline (2016)"
		],
		altText: "Baltimore City Skyline",
	},
	{
		name: "jordan-lake",
		photoFolders: ["2018_nc_sunrise"],
		tags: ["sunrise", "2018"],
		category: "sunrise",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/44481116881/",
		description: [
			"The sun rising over Jordan Lake in North Calorina. I went down to Durham with my family for a long weekend and on the morning we were to return home I decided to sneak out early to catch the sun rise. I'd seen this lake on the map and thought it might make for a nice spot. I had never been here before and neither had the person working the front desk at the hotel we were staying at, so I wasn't sure what to expect.",
			"I found this spot entirely by chance. I parked at some random spot along the road and just kind of walked until I came across a view that looked nice. The lake itself looked like a wonderful little area. It's a shame I didn't have more time to explore the area."
		],
		altText: "Jordan Lake",
	},
	{
		name: "fort-armistead-sunrise-2",
		photoFolders: ["2016_armistead_sunrise2","2016_armistead_sunrise1"],
		tags: ["sunrise", "2018"],
		category: "sunrise",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/31139325476/",
		description: [
			"Fort Armistead Sunrise.",
		],
		altText: "Fort Armistead Sunrise",
	},
	{
		name: "cherry-blossoms-dc",
		photoFolders: ["2016_jefferson_tree"],
		tags: ["sunrise", "2016"],
		category: "sunrise",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/25429707924/",
		description: [
			"Sunrise at the Washington DC Cherry Blossoms.",
		],
		altText: "Cherry Blossoms",
	},
	{
		name: "mt-vernon-fountain",
		photoFolders: ["2019_mt_vernon_fountain"],
		tags: ["baltimore", "2019"],
		category: "misc",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/47038743724/",
		description: [
			"Baltimore in Spring.",
		],
		altText: "Mt Vernon Fountain",
	},
	{
		name: "a-pathway-to-nightmares",
		photoFolders: ["2018_a_pathway_to_nightmares"],
		tags: ["spooky", "2018"],
		category: "misc",
		aspect: "16x9",
		flickr: "https://www.flickr.com/photos/40423570@N07/25943790027/",
		description: [
			"Spookiness.",
		],
		altText: "A Pathway to Nightmares",
	},
	{
		name: "34th-street-1",
		photoFolders: ["2018_34th_street"],
		tags: ["christmas", "2018"],
		category: "misc",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/32449000578/",
		description: [
			"34th Street.",
		],
		altText: "34th Street",
	},
	{
		name: "george-peabody-library",
		photoFolders: ["2016_Peabody"],
		tags: ["baltimore", "2016"],
		category: "misc",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/23977620954/",
		description: [
			"There's a great short story titled \"The Library of Babel\", which is about a library that contains all possible 410-page books. Most of these books are just gibberish, but within the library every single human thought, story, and idea is captured. In fact, within the library there must exist a book which is a perfect index of the library's contents (and also many which are fake indexes). The librarians who inhabit the place are in a state of despair, and many seek to purify the library by destroying the books which are gibbish. Anyway, whenever I think of that story, I think of this place, the George Peabody Library in Baltimore."
		],
		altText: "George Peabody Library",
	},
	{
		name: "foggy-carroll-park",
		photoFolders: ["2018_carroll_park"],
		tags: ["spooky", "2018"],
		category: "misc",
		aspect: "16x10",
		flickr: "https://www.flickr.com/photos/40423570@N07/41785088311/",
		description: [
			"A foggy morning in Baltimore.",
		],
		altText: "Carroll Park",
	},
	{
		name: "kids",
		photoFolders: ["2017_kids"],
		tags: ["people", "2017"],
		category: "misc",
		aspect: "10x8",
		flickr: "https://www.flickr.com/photos/40423570@N07/37835534304/",
		description: [
			"Kids.",
		],
		altText: "Kids",
	},
	{
		name: "annapolis-rock-1",
		photoFolders: ["2017_annapolis_rock"],
		tags: ["people", "2017"],
		category: "misc",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/38603331716/",
		description: [
			"Western Maryland.",
		],
		altText: "Annapolis Rock",
	},
	{
		name: "the-haunted-car",
		photoFolders: ["2017_haunted_car1", "2017_haunted_car2"],
		tags: ["people", "2017"],
		category: "misc",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/37562177870/",
		description: [
			"The Haunted Car.",
		],
		altText: "The Haunted Car",
	},
	{
		name: "baltimore-skyline-2016-pano",
		photoFolders: ["2016_pano1","2016_pano2","2016_pano3"],
		tags: ["sunrise", "2018"],
		category: "misc",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/31139325476/",
		description: [
			"Baltimore Skyline 2016.",
		],
		altText: "Baltimore Skyline",
		transitionOptions: {
			slowTransition: true
		},
	},
];

// add in the sizes field
let large = (window.devicePixelRatio > 1) ? true : false;
let _600 = large ? "1200" : "600";
let _900 = large ? "1800" : "900";
let _1200 = large ? "2400" : "1200";
let _1536 = large ? "3072" : "1536";
let baseImg = './';

function getImagesSizes(folder) {
	return {
		"600": require(baseImg + folder + "/" + _600 + '.jpg'),
		"900": require(baseImg + folder + "/" + _900 + '.jpg'),
		"1200": require(baseImg + folder + "/" + _1200 + '.jpg'),
		"1536": require(baseImg + folder + "/" + _1536 + '.jpg'),
	};
}

const createPhotoAlbum = function(input) {
	let album = Object.assign({}, input);
	album.id = album.id || album.photoFolders[0];
	album.photoFolders.forEach(folderName => {
		album.photos = album.photos || [];
		album.photos.push( getImagesSizes(folderName) );
	});
	return album;
}

albums = albums.map(album => (createPhotoAlbum(album)))

/////////////////////////////////////////// Exports

export { createPhotoAlbum };

export function getPhotoAlbumByName(name) {
	return albums.find(album => {
		return album.name === name;
	});
}

export function getPhotoAlbumsByCategory(cat) {
	return albums.filter(album => {
		return album.category === cat;
	});
}

export default albums;

