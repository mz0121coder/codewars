/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

// 1 liner
// const cleanString = s =>
// 	[...s].reduce((a, b) => (b === '#' ? a.slice(0, -1) : a + b), '');

function cleanString(s) {
	let result = '';
	for (let i = 0; i < s.length; i++) {
		if (s[i] !== '#') {
			result += s[i];
		} else {
			result = result.slice(0, -1);
		}
	}
	return result;
}

console.log(cleanString('abc#d##c')); //, 'ac');
console.log(cleanString('abc####d##c#')); //, '');
