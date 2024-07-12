/*
The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

The result array should be sorted in ascending order of values.

Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

Examples
[1, 2, 3, 4]  should return [[1, 3], [2, 4]]

[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

[1, 23, 3, 4, 7] should return [[1, 3]]

[4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]
*/

/*
Sort input from low to high
  Loop through sorted input, on each iteration:
    Current array starts with current number:
    Loop through rest of input after current index:
    If difference is 2, add the other digit to array,
    then add array to result, 
    then reassign array to contain just the starting number again
*/

function twosDifference(input) {
	const result = [];
	const digits = [...input].sort((a, b) => a - b);
	digits.forEach((num, i) => {
		let arr = [num];
		for (let j = i + 1; j < digits.length; j++) {
			const diff = Math.abs(num - digits[j]);
			if (diff === 2) {
				arr.push(digits[j]);
				result.push(arr);
				arr = [num];
			}
		}
	});
	return result;
}

console.log(twosDifference([1, 2, 3, 4])); // [[1,3],[2,4]]
console.log(twosDifference([1, 3, 4, 6])); // [[1,3],[4,6]]
