/*My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

"dolphin" -> "The Dolphin"

However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:

"alaska" -> "Alaskalaska"

Complete the function that takes a noun as a string, and returns her preferred band name written as a string.
*/
function bandNameGenerator(str) {
	const name = `${str[0].toUpperCase()}${str.substring(1)}`;
	return str[0] === str.at(-1) ? `${name}${str.substring(1)}` : `The ${name}`;
}

console.log(bandNameGenerator('knife')); //, 'The Knife');
console.log(bandNameGenerator('tart')); //, 'Tartart');
console.log(bandNameGenerator('sandles')); //, 'Sandlesandles');
console.log(bandNameGenerator('bed')); //, 'The Bed');
