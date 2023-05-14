/*In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
-- We sort by highest frequency to lowest frequency.
-- If two elements have same frequency, we sort by increasing value.
More examples in test cases.

Good luck!

Please also try Simple time difference

*/

function solve(arr) {
	const result = [];
	const test = [...arr];
	// get highest frequency
	const highestFrequency = Math.max(
		...arr.map(n => arr.filter(item => item === n).length)
	);
	// loop from highest down to 1
	for (let i = highestFrequency; i > -1; i--) {
		// get all numbers with same frequency, sort from lowest to highest
		const sameFrequency = [];
		arr.forEach(n => {
			if (test.filter(num => num === n).length === i) {
				sameFrequency.push(n);
			}
		});
		sameFrequency.sort((a, b) => a - b);
		if (sameFrequency.length > 0) {
			result.push(...sameFrequency);
		}
	}
	return result;
}

console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7])); //,[3,3,3,5,5,7,7,2,9])
console.log(solve([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1])); //,[1,1,1,0,0,6,6,8,8,2,3,5,9])
console.log(solve([5, 9, 6, 9, 6, 5, 9, 9, 4, 4])); //,[9,9,9,9,4,4,5,5,6,6])
console.log(solve([4, 4, 2, 5, 1, 1, 3, 3, 2, 8])); //,[1,1,2,2,3,3,4,4,5,8])
console.log(solve([4, 9, 5, 0, 7, 3, 8, 4, 9, 0])); //,[0,0,4,4,9,9,3,5,7,8])
