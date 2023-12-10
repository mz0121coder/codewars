/*
Given three arrays of integers, return the sum of elements that are common in all three arrays.

For example:

common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
More examples in the test cases.

Good luck!
*/

function common(a, b, c) {
	const mapA = {};
	const mapB = {};
	const mapC = {};

	for (const num of a) {
		if (num in mapA) {
			mapA[num]++;
		} else {
			mapA[num] = 1;
		}
	}
	for (const num of b) {
		if (num in mapB) {
			mapB[num]++;
		} else {
			mapB[num] = 1;
		}
	}
	for (const num of c) {
		if (num in mapC) {
			mapC[num]++;
		} else {
			mapC[num] = 1;
		}
	}

	let result = 0;
	for (const num in mapC) {
		if (num in mapA && num in mapB) {
			result += num * Math.min(mapA[num], mapB[num], mapC[num]);
		}
	}
	return result;
}

console.log(common([1, 2, 3], [5, 3, 2], [7, 3, 2])); //,5);
console.log(common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2])); //,7);
