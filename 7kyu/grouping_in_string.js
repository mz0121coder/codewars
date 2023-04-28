/*In this kata you have to find whether same elements of the string are grouped together.

Example

Input	Output
112233	true
11223311	false

Explanation
In first example same elements are grouped together: (11)(22)(33)), hence it should return true
In the second example there are two different groups of 1's: (11)2233(11)), hence it should return false

*/

const isConsecutive = str => {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		if (result[result.length - 1] !== str[i]) {
			result += str[i];
		}
	}
	return result.length === [...new Set(str.split(''))].length;
};

console.log(isConsecutive('112200')); //, true);
console.log(isConsecutive('1222334556667')); //, true);
console.log(isConsecutive('001234400522')); //, false);
