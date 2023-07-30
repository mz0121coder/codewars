/*
The alphabetized kata
Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:
alphabetized("The Holy Bible") // "BbeehHilloTy"
*/

function alphabetized(s) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	return s
		.replace(/[^A-Za-z]/g, '')
		.split('')
		.sort(
			(a, b) =>
				alphabet.indexOf(a.toLowerCase()) - alphabet.indexOf(b.toLowerCase())
		)
		.join('');
}

console.log(alphabetized('The Holy Bible')); //, 'BbeehHilloTy')
