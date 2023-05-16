/*You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.*/

// make lengths array
// get min and max
// use a loop to fill a new array from min to max, 1 at a time
// find item not included in lengths array, or 0 if empty

function getLengthOfMissingArray(arrayOfArrays) {
	if (
		arrayOfArrays === null ||
		arrayOfArrays.length === 0 ||
		arrayOfArrays.some(item => item === null || item.length === 0)
	) {
		return 0;
	}
	const result = [];
	const itemLengths = arrayOfArrays.map(arr => arr.length);
	const min = Math.min(...itemLengths);
	const max = Math.max(...itemLengths);
	for (let i = min; i <= max; i++) {
		result.push(i);
	}
	return result.find(num => !itemLengths.includes(num)) ?? 0;
}

console.log(
	getLengthOfMissingArray([
		[3, 1, 0],
		[2],
		[3, 0, 2, 0],
		[],
		[2, 1, 4, 4, 1, 3],
		[1, 3, 4, 1, 3],
	])
);

console.log(
	getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
); //, 3);
console.log(
	getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
); //, 2);
console.log(getLengthOfMissingArray([[null], [null, null, null]])); //, 2);
console.log(
	getLengthOfMissingArray([
		['a', 'a', 'a'],
		['a', 'a'],
		['a', 'a', 'a', 'a'],
		['a'],
		['a', 'a', 'a', 'a', 'a', 'a'],
	])
); //, 5);

console.log(getLengthOfMissingArray([])); //, 0);
