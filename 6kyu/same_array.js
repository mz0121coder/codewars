/*
Given two arrays, the purpose of this Kata is to check if these two arrays are the same. "The same" in this Kata means the two arrays contains arrays of 2 numbers which are same and not necessarily sorted the same way. i.e. [[2,5], [3,6]] is same as [[5,2], [3,6]] or [[6,3], [5,2]] or [[6,3], [2,5]] etc

[[2,5], [3,6]] is NOT the same as [[2,3], [5,6]]
Two empty arrays [] are the same
[[2,5], [5,2]] is the same as [[2,5], [2,5]] but NOT the same as [[2,5]]
[[2,5], [3,5], [6,2]] is the same as [[2,6], [5,3], [2,5]] or [[3,5], [6,2], [5,2]], etc
An array can be empty or contain a minimun of one array of 2 integers and up to 100 array of 2 integers
Note:

[[]] is not applicable because if the array of array are to contain anything, there have to be two numbers.
100 randomly generated tests that can contains either "same" or "not same" arrays.
*/

function same(aArr, bArr) {
	const stringify = items => {
		const sorted = [...items].flat().sort((a, b) => a - b);
		return JSON.stringify(sorted);
	};
	return stringify(aArr) === stringify(bArr);
}

console.log(
	same(
		[
			[2, 3],
			[3, 4],
		],
		[
			[4, 3],
			[2, 4],
		]
	)
); //, "Value not what is expected for [[2,3], [3,4]] and [[4,3], [2, 4]]");
console.log(
	same(
		[
			[2, 3],
			[3, 2],
		],
		[[2, 3]]
	)
); //, "Value not what is expected for [[2,3], [3,2]] and [[2,3]]");
