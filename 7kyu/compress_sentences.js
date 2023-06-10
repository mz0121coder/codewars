/*
Your task is to make a program takes in a sentence (without puncuation))//, adds all words to a list and returns the sentence as a string which is the positions of the word in the list. Casing should not matter too.

Example
"Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country"
becomes
"01234567802856734"

Another example
"the one bumble bee one bumble the bee"
becomes
"01231203"
*/

// make array of words in sentence, ignore casing
// make array of unique words
// map of words array, return index of word from unique words array
// join as string

function compress(sentence) {
	const words = sentence.toUpperCase().split(' ');
	const uniqueWords = [...new Set(words)];
	return words.map(word => uniqueWords.indexOf(word)).join('');
}

console.log(compress('The bumble bee')); //, "012")
console.log(compress('SILLY LITTLE BOYS silly little boys')); //, "012012")
console.log(
	compress(
		'Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country'
	)
); //, "01234567802856734")
console.log(
	compress(
		'The number 0 is such a strange number Strangely it has zero meaning'
	)
); //, "012345617891011")
