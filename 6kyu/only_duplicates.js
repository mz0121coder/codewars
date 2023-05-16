/*
Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"
*/

function onlyDuplicates(str) {
	let duplicates = '';
	for (let i = 0; i < str.length; i++) {
		if (str.match(new RegExp(`${str[i]}`, 'g')).length > 1) {
			duplicates += str[i];
		}
	}
	return duplicates;
}

console.log(onlyDuplicates('abccdefee')); //, 'cceee')
console.log(onlyDuplicates('hello')); //, 'll')
console.log(onlyDuplicates('colloquial')); //, 'ollol')
console.log(onlyDuplicates('foundersandcoders')); //, 'ondersndoders')
