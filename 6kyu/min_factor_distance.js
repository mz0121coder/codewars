/*
Write a function that returns the smallest distance between two factors of a number. The input will always be a number greater than one.

Example:

13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]

Hence the asnwer will be 2 (=13-11)
*/

function minDistance(n) {
	const arr = [];
	let result = Infinity;
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) {
			arr.push(i);
		}
		if (arr.length > 1) {
			const diff = arr.at(-1) - arr.at(-2);
			if (diff < result) {
				result = diff;
			}
			if (diff === 1) {
				return diff;
			}
		}
	}
	return result;
}

console.log(minDistance(8)); //, 1);
console.log(minDistance(25)); //, 4);
console.log(minDistance(13013)); //, 2);
console.log(minDistance(218683)); //, 198);
