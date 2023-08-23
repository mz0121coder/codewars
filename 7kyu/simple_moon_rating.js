/*
When you look at movie ratings, you usually see it as decimal numbers representing average of all viewers' votes. While it is very informative, it's not very visually appealing. That's what stars, or in our case- moons, are created for.

Your task is to transform decimal number rating, which is in range 0-10, into 5-moons scale. Your final rating should be rounded to "0.5" (nearest half moon). Input is always valid.

Write a function which returns valid rating represented as moons ('o','c','x') in single string.
 */

function moonRating(rating) {
	// round rating to nearing 0.5
	let num = rating % 1 < 0.5 ? Math.floor(rating) : Math.round(rating);
	let result = '';
	// full moon
	if (num >= 2) result += 'o'.repeat(Math.floor(num / 2));
	//   half moon
	result += 'c'.repeat(num % 2);
	//   empty moon
	result += 'x'.repeat(5 - result.length);
	return result;
}

const ratings = {
	0: 'xxxxx',
	0.6: 'cxxxx',
	1.5: 'oxxxx',
	3.9: 'ooxxx',
	5: 'oocxx',
	6: 'oooxx',
	7.2: 'ooocx',
	8.7: 'ooooc',
	10: 'ooooo',
};

Object.keys(ratings).forEach(key => console.log(moonRating(key)));
