/*
Check if the elements of an array form an arithmetic progression or if the array contains a sequence of elements that form an arithmetic progression.

If the entire array forms an arithmetic sequence, the function returns true. If it's not an arithmetic progression itself but it contains at least one, return the index of the element where the first arithmetic sequence starts. If it's not one itself and it doesn't contain any, return false.

An arithmetic sequence will always consist of at least 3 numbers. If this condition is not satisfied, the function will return undefined.

The function hasArithmProg takes a single parameter, arr, and can return a boolean, a number(the index) or undefined.

An arithmetic progression is a sequence of numbers such that the difference between two consecutive terms is a constant quantity.

e.g. 1, 2, 3, 4,... constant = 1 e.g. 9, 7, 5, 3,... constant = -2

https://en.wikipedia.org/wiki/Arithmetic_progression
*/

function hasArithmProg(arr) {
	let sequenceIndex = -1;
	let currIndex = 0;
	let lastDiff = arr[1] - arr[0];
	let count = 2;
	for (let i = 2; i < arr.length; i++) {
		const currDiff = arr[i] - arr[i - 1];
		if (currDiff === lastDiff) {
			count++;
			if (count > 2) sequenceIndex = currIndex;
		} else {
			if (sequenceIndex > -1) break;
			lastDiff = currDiff;
			currIndex = i - 1;
			count = 2;
		}
	}
	if (arr.length < 3) return undefined;
	if (sequenceIndex === 0) return true;
	if (sequenceIndex > 0) return sequenceIndex;
	return false;
}

console.log(hasArithmProg([9, 5, 1])); //, true);
console.log(hasArithmProg([9, 1, 2, 14, 46])); //, false);
console.log(hasArithmProg([90, 2, 4, 6, 8, 14])); //, 1);
console.log(hasArithmProg([2, 10, 4, 6])); //, false)
console.log(hasArithmProg([9, 1])); //, undefined);
