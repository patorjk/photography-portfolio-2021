/*
	Photos.

	photoFolders: A list of folder names for the image sources. If more than 1 is provided a stepper will be provided with the image.
	tags: Tags for the image.
	category: Main category for the image.
	aspect: Image aspect.
	flickr: URL to flickr version of image.
	instagram: URL to instagram version of image.
	description: A text description of the image.
	altText: alt text for the image.

	Generated parameters:
	id: ID for the image, the name of the first variant is used.
	album: array of arrays of the sized images.
*/

let albums = [
	{
		photoFolders: ["2019_pagoda"], // doubles as the ID for the photo
		tags: ["main", "baltimore", "2019"],
		category: "main",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/47536723332/",
		description: [
			"Springtime in Baltimore... wait Baltimore?? Yes, this is in Baltimore. This pagoda is located in Patterson Park, which is one of several large parks which dot the city. It's one of the city's hidden gems."
		],
		altText: "Pagoda in Spring",
	},
	{
		photoFolders: ["2020_fells_sunrise"],
		tags: ["main", "sunrise", "baltimore", "2020"],
		category: "main",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/49444935107/",
		instagram: "https://www.instagram.com/p/B73wKrJJthJ/",
		description: [
			"Fells Point, Baltimore. It's always nice to just stumble upon a good shot. I was up early one morning exploring Fells when I saw the clouds start to change color, so I followed the promenade until I could get a clear shot. When I came upon this open area I was stunned. Probably one of the nicest sunrises of 2020, and definitely one of the nicest sunrise spots in Baltimore. And the colors you see here weren't messed with, these colors are straight out of the camera. It really looked this surreal.",
		],
		altText: "Fells Point Sunrise",
	},
	{
		photoFolders: ["2018_the_thunderbirds"],
		tags: ["main", "airshow", "2018"],
		category: "main",
		aspect: "1x1",
		flickr: "https://www.flickr.com/photos/40423570@N07/44256887115/",
		instagram: "https://www.instagram.com/p/BoruZZKFlmz/",
		description: [
			'This was actually taken with a macro lens - the type of lens people usually use to take pictures of really small stuff. It\'s an odd choice to bring to an airshow, but at the time all of my other lenses were wide angle lenses, which are good for landscapes but bad for things that are far away.',
			'I felt kind of silly using it, especially when many of the other photographers there had really nice super zoom lenses, but I was able to capture this shot, which I thought was pretty good and which ended up as my most viewed photo on my old photography website. '
		],
		altText: "The Thunderbirds",
	},
	{
		photoFolders: ["2016-03-12_sunrise"],
		tags: ["main", "sunrise", "baltimore", "2016"],
		category: "main",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/25705211566/",
		description: [
			"I ruined my shoes for this shot. After I set up my camera on the banks of this inlet I realized I was slowly sinking into the mud. However, the most spectacular sunrise I'd ever seen was in front of me so I didn't want to move. When the colors had finally faded I was in over my ankles. My shoes actually came off as I tried to escape. I would later vigorously wash them, but they were never the same. ",
			"Also, just off frame was the crazy amount of trash that had washed up on the shore (an old tire, one of those orange barrels they put on the road, etc etc). This inlet is off the beaten trial and kind of hard to get to, which is probably why it was so unkept."
		],
		altText: "Sunrise",
	},
	{
		photoFolders: ["2020_something_in_the_mist"],
		tags: ["main", "creepy", "2020"],
		category: "main",
		aspect: "16x9",
		flickr: "https://www.flickr.com/photos/40423570@N07/49499354128/",
		instagram: "https://www.instagram.com/p/B8UMPG7JSa4/",
		description: "Something in the mist... normally this abandoned pier is a huge eyesore, something that spoils the landscape of the area, however, on a morning so foggy that the other side of the harbor wasn't visible it jumped out at me. Almost like an abandoned island floating in the middle of nowhere.",
		altText: "Something in the Mist",
	},
	{
		photoFolders: ["2019-08-23_mossbrae_falls"],
		tags: ["main", "waterfall", "2019"],
		category: "main",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/48660329588/",
		description: [
			"Mossbrae Falls. Getting to this place was an adventure in and of itself. There's no direct trail and I had to wade through a waist-deep section of the Sacramento River. However, the resulting sight was awe inspiring. The water looks like it's coming out of the underbrush on the mountain, and the falls run along the river. I know this sounds silly, but the place feels magical.",
			"Also, as a neat bit of trivia, Arnold Schwarzenegger took President George H.W. Bush here when he was showing off California to the former president."
		],
		altText: "Mossbrae Falls",
	},
	{
		photoFolders: ["2019_middle_branch_pier", "2018_middle_branch_pier"],
		tags: ["main", "sunrise", "baltimore", "2019"],
		category: "main",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/48152204987",
		description: [
			"I think most people look at this shot and just kind of shrug, thinking of it as just another sunrise pier photo. But I spent over a year trying to get this shot. When I came across this pier in Middle Branch Park, Baltimore, I could tell there was a nice photo just waiting to be captured. All that was needed was a morning with little to no wind (so the water would be smooth) and a nice sunrise. However, after showing up a few times over the course of a few months, I realized that since the pier pointed north (meaning the sun rose off camera to the right), it would take an epic sunrise/sunset that lit up the whole sky to create the shot I had in mind.",
			"I spent several months trying to figure out when the best day would be. Over a dozen times I woke up early and drove down to the park, only to be rewarded with a very \"meh\" shot. Finally one night there was a storm and I was sure a great sunrise was waiting on the other side of it. When I got to the park the following morning I saw the sight you see in the second picture (when you click the \"Next\" button). It was a dreary, unpleasant sight and there was trash everywhere. I was defeated. Why am I punishing myself like this? There's no shot here, and even if there was, no one cares about this park, everyone's always leaving their trash everywhere. I went home and tried to forget about this place.",
			"Almost exactly a year later I awoke from my sleep thinking about this shot. It was still dark outside and I figured since I hadn't been there in a while I might as well give it one more try. When I got to the park I was met with the view you saw in the first image. It was completely unreal.",
			"Now, to be clear, I don't think I was divinely woken up to go take this photo, but it's one of those weird coincidences that sticks in the mind. There's also probably a moral in here about not giving up and being open to giving something another chance, or maybe even just listening to your gut. My first instincts were correct, a nice shot was possible, the place just needed the right lighting (and also for the trash to be picked up, which thankfully some did)."
		],
		altText: "Pier Sunrise",
	},
	{
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
		photoFolders: ["2020-02-16_sunrise"],
		tags: ["sunrise", "baltimore", "2020"],
		category: "sunrise",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/49549964818/",
		description: [
			"A view from along Baltimore's Inner Harbor promenade."
		],
		altText: "View from along Baltimore's Inner Harbor promenade",
	},
	{
		photoFolders: ["2020-02-12_sunrise"],
		tags: ["sunrise", "baltimore", "2020"],
		category: "sunrise",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/49540770052/",
		description: [
			"A view from Broening Park in Baltimore."
		],
		altText: "A view from Broening Park in Baltimore",
	},
	{
		photoFolders: ["2019_downs_sunrise"],
		tags: ["main", "sunrise", "2019"],
		category: "main",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/46482748235/",
		description: [
			"Downs Park Pier"
		],
		altText: "A Downs Park sunrise",
	},
	{
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
		photoFolders: ["2018_nc_sunrise"],
		tags: ["sunrise", "2018"],
		category: "sunrise",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/44481116881/",
		description: [
			"The sun rising over Jordan Lake in North Calorina. I went down to Durham with my family for a long weekend and on the morning we were to return home I decided to sneak out early to catch the sun rise. I'd seen this lake on the map and thought it might make for a nice spot. I had never been here before and neither had the person working the front desk at the hotel we were staying at, so I wasn't sure what to expect.",
			"I found this spot entirely by chance. I parked at some random spot along the road and just kind of walked until I came across a view that looked nice. The lake itself looked like a wonderful little area. It's a shame I didn't have more time to explore the area."
		],
		altText: "NC Sunrise",
	},
	{
		photoFolders: ["2016_armistead_sunrise2","2016_armistead_sunrise1"],
		tags: ["sunrise", "2018"],
		category: "sunrise",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/31139325476/",
		description: [
			"Fort Armistead Sunrise.",
		],
		altText: "Sunrise",
	},
	{
		photoFolders: ["2016_jefferson_tree"],
		tags: ["sunrise", "2016"],
		category: "sunrise",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/25429707924/",
		description: [
			"Sunrise at the Washington DC Cherry Blossoms.",
		],
		altText: "Sunrise",
	},
	{
		photoFolders: ["2019_mt_vernon_fountain"],
		tags: ["baltimore", "2019"],
		category: "misc",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/47038743724/",
		description: [
			"Baltimore in Spring.",
		],
		altText: "Photo",
	},
	{
		photoFolders: ["2018_a_pathway_to_nightmares"],
		tags: ["spooky", "2018"],
		category: "misc",
		aspect: "16x9",
		flickr: "https://www.flickr.com/photos/40423570@N07/25943790027/",
		description: [
			"Spookiness.",
		],
		altText: "Photo",
	},
	{
		photoFolders: ["2018_34th_street"],
		tags: ["christmas", "2018"],
		category: "misc",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/32449000578/",
		description: [
			"34th Street.",
		],
		altText: "Photo",
	},
	{
		photoFolders: ["2016_Peabody"],
		tags: ["baltimore", "2016"],
		category: "misc",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/23977620954/",
		description: [
			"There's a great short story titled \"The Library of Babel\", which is about a library that contains all possible 410-page books. Most of these books are just gibberish, but within the library every single human thought, story, and idea is captured. In fact, within the library there must exist a book which is a perfect index of the library's contents (and also many which are fake indexes). The librarians who inhabit the place are in a state of despair, and many seek to purify the library by destroying the books which are gibbish. Anyway, whenever I think of that story, I think of this place, the George Peabody Library in Baltimore."
		],
		altText: "Photo",
	},
	{
		photoFolders: ["2018_carroll_park"],
		tags: ["spooky", "2018"],
		category: "misc",
		aspect: "16x10",
		flickr: "https://www.flickr.com/photos/40423570@N07/41785088311/",
		description: [
			"A foggy morning in Baltimore.",
		],
		altText: "Photo",
	},
	{
		photoFolders: ["2017_kids"],
		tags: ["people", "2017"],
		category: "misc",
		aspect: "10x8",
		flickr: "https://www.flickr.com/photos/40423570@N07/37835534304/",
		description: [
			"Kids.",
		],
		altText: "Photo",
	},
	{
		photoFolders: ["2017_annapolis_rock"],
		tags: ["people", "2017"],
		category: "misc",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/38603331716/",
		description: [
			"Western Maryland.",
		],
		altText: "Photo",
	},
	{
		photoFolders: ["2017_haunted_car1", "2017_haunted_car2"],
		tags: ["people", "2017"],
		category: "misc",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/37562177870/",
		description: [
			"The Haunted Car.",
		],
		altText: "Photo",
	},
	{
		photoFolders: ["2016_pano1","2016_pano2","2016_pano3"],
		tags: ["sunrise", "2018"],
		category: "misc",
		aspect: "6x4",
		flickr: "https://www.flickr.com/photos/40423570@N07/31139325476/",
		description: [
			"Baltimore Skyline 2016.",
		],
		altText: "Pano",
		slowTransition: true
	},
];

// add in the sizes field
let large = (window.devicePixelRatio > 1) ? true : false;
let _600 = large ? "1200" : "600";
let _960 = large ? "1920" : "960";
let _1280 = large ? "2560" : "1280";
let baseImg = './';

function getImagesSizes(folder) {
	return {
		"600": require(baseImg + folder + "/" + _600 + '.jpg'),
		"960": require(baseImg + folder + "/" + _960 + '.jpg'),
		"1280": require(baseImg + folder + "/" + _1280 + '.jpg'),
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

export function getPhotoAlbumsByCategory(cat) {
	return albums.filter(album => {
		return album.category === cat;
	});
}

export default albums;

