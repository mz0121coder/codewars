/*
You are standing on top of an amazing Himalayan mountain. The view is absolutely breathtaking! you want to take a picture on your phone, but... your memory is full again! ok, time to sort through your shuffled photos and make some space...

Given a gallery of photos, write a function to sort through your pictures. You get a random hard disk drive full of pics, you must return an array with the 5 most recent ones PLUS the next one (same year and number following the one of the last).

You will always get at least a photo and all pics will be in the format YYYY.imgN

Examples:

sortPhotos["2016.img1","2016.img2","2015.img3","2016.img4","2013.img5"]) ==["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]
sortPhotos["2016.img1"]) ==["2016.img1","2016.img2"]
*/

/*
object with keys equal to yrs in pictures
values equal to an array of pictures in each year

sort each array by ending img number(low to high)

flatten Object values, get up to 5 (most recent) pictures
new img = last img with 1 added to ending number 
return [...pics, newImg]
*/

function sortPhotos(pics) {
	const obj = {};
	// keys equal to each year, values of arrays with pictures in current year
	pics.forEach(pic => {
		const year = pic.slice(0, 4);
		if (!(year in obj)) {
			obj[year] = [pic];
		} else {
			obj[year].push(pic);
		}
	});
	// sort arrays by ending digits (low to high)
	for (const key in obj) {
		obj[key] = obj[key].sort(
			(a, b) => Number(a.match(/\d+$/)[0]) - Number(b.match(/\d+$/)[0])
		);
	}
	const mostRecent = Object.values(obj).flat().slice(-5);
	const newImg = mostRecent.at(-1).replace(/\d+$/, n => `${Number(n) + 1}`);
	return [...mostRecent, newImg];
}

console.log(
	sortPhotos(['2016.img1', '2016.img2', '2016.img3', '2016.img4', '2016.img5'])
); //,["2016.img1","2016.img2","2016.img3","2016.img4","2016.img5","2016.img6"]);
console.log(
	sortPhotos(['2016.img4', '2016.img5', '2016.img1', '2016.img3', '2016.img2'])
); //,["2016.img1","2016.img2","2016.img3","2016.img4","2016.img5","2016.img6"]);
console.log(
	sortPhotos(['2012.img2', '2016.img1', '2016.img3', '2016.img4', '2016.img5'])
); //,["2012.img2","2016.img1","2016.img3","2016.img4","2016.img5","2016.img6"]);
console.log(
	sortPhotos([
		'2016.img1',
		'2013.img3',
		'2016.img2',
		'2015.img3',
		'2012.img7',
		'2016.img4',
		'2013.img5',
	])
); //,["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]);
console.log(
	sortPhotos([
		'2016.img7',
		'2016.img2',
		'2016.img3',
		'2015.img3',
		'2012.img8',
		'2016.img4',
		'2016.img5',
	])
); //,["2016.img2","2016.img3","2016.img4","2016.img5","2016.img7","2016.img8"]);
