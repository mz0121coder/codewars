/*
Given an array of integers, return the smallest common factors of all integers in the array.

When i say Smallest Common Factor i mean the smallest number above 1 that can divide all numbers in the array without a remainder.

scf([200, 30, 18, 8, 64, 34]) //=> 2
scf([21, 45, 51, 27, 33]) //=> 3
scf([133, 147, 427, 266]) //=> 7
If there are no common factors above 1, return 1 (technically 1 is always a common factor).
*/

function scf(array) {
	let result = Infinity;
	const min = Math.min(...array);
	for (let factor = 2; factor <= min; factor++) {
		if (array.every(num => num % factor === 0)) {
			result = factor;
			break;
		}
	}
	return result > min || !array.length ? 1 : result;
}

console.log(scf([200, 30, 18, 8, 64, 34])); //, 2);
console.log(scf([21, 45, 51, 27, 33])); //, 3);
console.log(scf([133, 147, 427, 266])); //, 7);
console.log(scf([3, 5, 7])); //, 1);
console.log(scf([])); //, 1);
