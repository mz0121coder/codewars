/*You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

Examples
"abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
"abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
"123abc!" is a valid word because all of the characters only appear once in the word.
*/
// get all unique characters in s, ignore case
// check each character occurs same number of times
function validateWord(s) {
	const str = s.toLowerCase();
	return [...new Set(str.split(''))]
		.map(item => str.split('').filter(char => char === item).length)
		.every((el, i, arr) => el === arr[0]);
}

console.log(validateWord('abcabc')); //, true, 'The word was: "abcabc" \n');
console.log(validateWord('Abcabc')); //, true, 'The word was: "Abcabc" \n');
console.log(validateWord('abc123')); //, true, 'The word was: "abc123" \n');
console.log(validateWord('abcabcd')); //, false, 'The word was: "abcabcd" \n');
console.log(validateWord('abc!abc!')); //, true, 'The word was: "abc!abc!" \n');
console.log(validateWord('abc:abc')); //, false, 'The word was: "abc:abc" \n');
