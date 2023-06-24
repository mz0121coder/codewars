/*
Description:
Remove the minimum number of exclamation marks from the start/end of each word in the sentence to make their amount equal on both sides.

Notes:
Words are separated with spaces
Each word will include at least 1 letter
There will be no exclamation marks in the middle of a word
Examples
remove("Hi!") === "Hi"
remove("!Hi! Hi!") === "!Hi! Hi"
remove("!!Hi! !Hi!!") === "!Hi! !Hi!"
remove("!!!!Hi!! !!!!Hi !Hi!!!") === "!!Hi!! Hi !Hi!"
*/

// split string by spaces to get words
// loop through words
// find '!' if any at start and end
// store the minimum of the two (based on length) as a variable exc
// return exc + letters in word + exc
// join with spaces

function remove(s) {
	return s
		.split(' ')
		.map(word => {
			const start = word.match(/^!*/)[0].length;
			const end = word.match(/!*$/)[0].length;
			const exc = '!'.repeat(Math.min(start, end));
			const letters = word.match(/[a-z]+/gi)[0];
			return exc + letters + exc;
		})
		.join(' ');
}

console.log(remove('Hi!')); // , "Hi")
console.log(remove('!Hi! Hi!')); // , "!Hi! Hi")
console.log(remove('!!Hi! !Hi!!')); // , "!Hi! !Hi!")
console.log(remove('!!!!Hi!! !!!!Hi !Hi!!!')); // , "!!Hi!! Hi !Hi!")
