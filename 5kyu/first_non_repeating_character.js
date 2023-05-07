/*Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

*/

// set empty string as result
// loop over each letter in s
// check first indexOf letter === last index of letter (ignore case)
// set letter (if it exists) as result and end loop

function firstNonRepeatingLetter(s) {
	let result = '';
	const str = s.toUpperCase();
	for (let i = 0; i < s.length; i++) {
		const letter = s[i].toUpperCase();
		if (str.indexOf(letter) === str.lastIndexOf(letter)) {
			result = s[i];
			break;
		}
	}
	return result;
}

console.log(firstNonRepeatingLetter('a')); //, 'a');
console.log(firstNonRepeatingLetter('stress')); //, 't');
console.log(firstNonRepeatingLetter('moonmen')); //, 'e');
