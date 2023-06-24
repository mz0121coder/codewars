/*
In this kata you have to extend the dictionary with a method, that returns a list of words matching a pattern. This pattern may contain letters (lowercase) and placeholders ("?"). A placeholder stands for exactly one arbitrary letter.

Example:

var fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
fruits.getMatchingWords('lemon');     // must return []
fruits.getMatchingWords('cherr??');   // must return []
fruits.getMatchingWords('?a?a?a');    // must return ['banana', 'papaya']
fruits.getMatchingWords('??????');    // must return ['banana', 'papaya', 'cherry']
Additional Notes:

the words and patterns are all lowercase
the order of the returned words doesn't matter
*/

function Dictionary(words) {
	this.words = words;
}
// start with empty result aray
// loop through each word whose length is equal to pattern
// set a variable match to true
// on each iteration, loop through all characters of pattern
// if current character is '?', word[i] can be any letter
// if current character is a letter, word[i] must be the same letter
// if these conditions are not met, set match to false for that word
// if match remains true, add word to result array

Dictionary.prototype.getMatchingWords = function (pattern) {
	const result = [];
	const validWords = this.words.filter(word => word.length === pattern.length);
	validWords.forEach(word => {
		let match = true;
		for (let i = 0; i < pattern.length; i++) {
			if (pattern[i] === '?' && !/[a-z]/.test(word[i])) {
				match = false;
			}
			if (/[a-z]/.test(pattern[i]) && word[i] !== pattern[i]) {
				match = false;
			}
		}
		if (match === true) {
			result.push(word);
		}
	});
	return result;
};

const fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
console.log(fruits.getMatchingWords('lemon')); //, []);
console.log(fruits.getMatchingWords('cherr??')); //, []);
console.log(fruits.getMatchingWords('?a?a?a')); //, ['banana', 'papaya']);
console.log(fruits.getMatchingWords('??????')); //, ['banana', 'papaya', 'cherry']);
console.log(fruits.getMatchingWords('?????')); //, ['apple']);
