/*Create a function that takes an array of letters, and combines them into words in a sentence.

The array will be formatted as so:

[
  ['J','L','L','M'],
  ['u','i','i','a'],
  ['s','v','f','n'],
  ['t','e','e','']
]
The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.

Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).

Examples:

[
  ['J','L','L','M'],
  ['u','i','i','a'],
  ['s','v','f','n'],
  ['t','e','e','']
] // => "Just Live Life Man"

[ 
  [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
  [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
  [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
  [ '', 'o', '', '', 'e', '', '', 'l' ],
  [ '', 'c', '', '', 'r', '', '', '' ],
  [ '', 'h', '', '', 'h', '', '', '' ],
  [ '', 'o', '', '', 'o', '', '', '' ],
  [ '', 'n', '', '', 'u', '', '', '' ],
  [ '', 'd', '', '', 's', '', '', '' ],
  [ '', 'r', '', '', 'e', '', '', '' ],
  [ '', 'i', '', '', '', '', '', '' ],
  [ '', 'a', '', '', '', '', '', '' ]
] // => "The Mitochondria is the powerhouse of the cell"
*/

// loop through first letters (first nested array)
// nested loop from first letter to end of column to form a word
// push word to words array
// join words to make sentence

function arrAdder(arr) {
	const words = [];
	const firstLetters = arr[0];
	firstLetters.forEach((letter, index) => {
		let word = '';
		for (let i = 0; i < arr.length; i++) {
			word += arr[i][index];
		}
		words.push(word);
	});
	return words.join(' ');
}

console.log(
	arrAdder([
		['J', 'L', 'L', 'M'],
		['u', 'i', 'i', 'a'],
		['s', 'v', 'f', 'n'],
		['t', 'e', 'e', ''],
	])
); // Just Live Life Man

console.log(
	arrAdder([
		['T', 'M', 'i', 't', 'p', 'o', 't', 'c'],
		['h', 'i', 's', 'h', 'o', 'f', 'h', 'e'],
		['e', 't', '', 'e', 'w', '', 'e', 'l'],
		['', 'o', '', '', 'e', '', '', 'l'],
		['', 'c', '', '', 'r', '', '', ''],
		['', 'h', '', '', 'h', '', '', ''],
		['', 'o', '', '', 'o', '', '', ''],
		['', 'n', '', '', 'u', '', '', ''],
		['', 'd', '', '', 's', '', '', ''],
		['', 'r', '', '', 'e', '', '', ''],
		['', 'i', '', '', '', '', '', ''],
		['', 'a', '', '', '', '', '', ''],
	])
); // The Mitochondria is the powerhouse of the cell
