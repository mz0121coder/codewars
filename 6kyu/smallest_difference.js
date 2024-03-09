/*
Given two arrays of integers, find the pair of values with the smallest difference and return that difference.

If both arrays are empty, return -1.

If one array is empty, return the smallest value from the non-empty array.

Note: Try to solve this without brute force.

Example:

  arr1 = [1, 3, 5, 23, 5]
  arr2 = [45, 34, 67, 2, 0]
  
  Output = 1
  
Example empty array:

  arr1 = [1, 3, 5, 23, 5]
  arr2 = []
  
  Output = 1
  
Example two empty arrays:

  arr1 = []
  arr2 = []
  
  Output = -1
*/

/*
Create copies of unique numbers from the arrays, sorted low to high
If 1 array is empty return smallest number from other array
If both are empty return -1
Start min diff as Infinity, loop through first unique copy:
Nested loop through 2nd unique copy, 
get the absolute difference between each pear and reassign min diff
*/

function smallestDiff(arr1, arr2) {
	const items1 = [...new Set(arr1.sort((a, b) => a - b))];
	const items2 = [...new Set(arr2.sort((a, b) => a - b))];
	if (!arr1.length && arr2.length) return items2[0];
	if (!arr2.length && arr1.length) return items1[0];
	if (!arr1.length && !arr2.length) return -1;
	let minDiff = Infinity;
	for (const num1 of items1) {
		for (const num2 of items2) {
			const diff = Math.abs(num1 - num2);
			minDiff = Math.min(diff, minDiff);
		}
	}
	return minDiff;
}

let min = 0;
let arr1 = [1, 3, 5, 23, 5];
let arr2 = [45, 34, 67, 2, 0];
let longArr = [
	23, 4, 4, 2, 5, 6, 3434, 5, 7788, 3, 2, 45, 2, 56, 78, 89, 900, 2, 3, 4, 5, 6,
	7, 8, 10, 5, 7, 23, 2222, 45, 34, 56, 56, 23, 45, 56, 45454, 33, 45, 12, 16,
	23, 2, 67, 78, 7, 99, 31, 27, 14, 13, 56, 72, 2, 78, 89, 34, 33, 2, 22, 55, 6,
	22, 19, 45, 37, 19, 10, 2, 3, 4, 9,
];
let negArr = [-3, -1, -5, -56];

console.log(smallestDiff([], [])); //, -1)

console.log(smallestDiff(arr1, [])); //, 1)

console.log(smallestDiff(arr2, [])); //, 0)

console.log(smallestDiff(arr1, arr2)); //, 1)

console.log(smallestDiff(arr1, longArr)); //, 0)

console.log(smallestDiff(negArr, longArr)); //, 3)

function smallestProduct(arr) {
	const product = nums => nums.reduce((acc, curr) => acc * curr, 1);
	return Math.min(...arr.map(subArr => product(subArr)));
}
