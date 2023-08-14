/*
Write a function that takes as parameters an array (arr) and 2 integers (x and y). The function should return the mean between the mean of the the first x elements of the array and the mean of the last y elements of the array.

The mean should be computed if both x and y have values higher than 1 but less or equal to the array's length. Otherwise the function should return -1.

Examples
[1, 3, 2, 4], 2, 3 => should return 2.5
because: the mean of the the first 2 elements of the array is (1+3)/2=2 and the mean of the last 3 elements of the array is (4+2+3)/3=3 so the mean of those 2 means is (2+3)/2=2.5.

[1, 3, 2, 4], 1, 2 => should return -1
because x is not higher than 1.

[1, 3, 2, 4], 2, 8 => should return -1
because 8 is higher than the array's length.
*/

function getMean(arr, x, y) {
	let mean1 = -1;
	let mean2 = -1;
	if ([x, y].every(n => n > 1 && n <= arr.length)) {
		const arr1 = arr.slice(0, x);
		mean1 = arr1.reduce((a, b) => a + b, 0) / arr1.length;

		const arr2 = arr.slice(-y);
		mean2 = arr2.reduce((a, b) => a + b, 0) / arr2.length;
	}
	return (mean1 + mean2) / 2;
}

console.log(getMean([1, 3, 2, 4], 2, 3)); //,2.5);
console.log(getMean([1, 3, 2], 2, 2)); //,2.25);
console.log(getMean([1, 3, 2, 4], 1, 2)); //,-1);
console.log(getMean([1, 3, 2, 4], 2, 8)); //,-1);
