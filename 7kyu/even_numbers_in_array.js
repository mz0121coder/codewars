/*Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/

// reverse array
// make a count equal to number
// make an array just for even numbers
// loop through sorted array
// if current number is even, reduce count by 1 and push number to even numbers array
// when count is 0, stop the loop

function evenNumbers(array, number) {
	let count = number;
	const evenNumbers = [];
	for (let i = array.length - 1; i >= 0; i--) {
		if (array[i] % 2 === 0) {
			count--;
			if (count >= 0) {
				evenNumbers.push(array[i]);
			}
		}
	}
	return evenNumbers.reverse();
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); //, [4, 6, 8]);
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)); //, [-8, 26]);
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)); //, [6]);
