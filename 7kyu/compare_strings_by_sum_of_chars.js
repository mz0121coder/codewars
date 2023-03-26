/*Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal
*/

function compare(s1, s2) {
	// copy s1 and s2
	let s1Test = s1;
	let s2Test = s2;
	// variables for sum
	let sum1 = 1;
	let sum2 = 2;
	// set as empty based on test rules
	if (s1 === null || s1.match(/[^A-Za-z]/)) {
		s1Test = '';
	}
	if (s2 === null || s2.match(/[^A-Za-z]/)) {
		s2Test = '';
	}
	// if not empty, add sum of chars ascii codes
	if (s1Test.length && s2Test.length) {
		sum1 = s1
			.toUpperCase()
			.split('')
			.reduce((x, y) => x + y.charCodeAt(0), 0);
		sum2 = s2
			.toUpperCase()
			.split('')
			.reduce((x, y) => x + y.charCodeAt(0), 0);
	}
	// return test result
	return s1Test === s2Test || sum1 === sum2;
}

console.log(compare('kl', 'lz')); //, false);
console.log(compare('!!', '7476')); //, true);
console.log(compare('##', '1176')); //, true);
console.log(compare('zz1', '')); //, true);
console.log(compare('AD', 'BC')); //, true);
console.log(compare('AD', 'DD')); //, false);
console.log(compare('gf', 'FG')); //, true);
console.log(compare('Ad', 'DD')); //, false);
console.log(compare('ZzZz', 'ffPFF')); //, true);
console.log(compare(null, 'BC')); //, false);
console.log(compare(null, null)); //, true);
console.log(compare(null, '')); //, true);
console.log(compare('', '')); //, true);
