/*Kata Task
Given a list of random integers, return the Three Amigos.

These are 3 numbers that live next to each other in the list, and who have the most in common with each other by these rules:

lowest statistical range
same parity
Notes
The list will contain at least 3 numbers
If there is more than one answer then return the first one found (reading the list left to right)
If there is no answer (e.g. no 3 adjacent numbers with same parity) then return an empty list.
Examples
ex1

Input = [1, 2, 34, 2, 1, 5, 3, 5, 7, 234, 2, 1]

Result = [5,3,5]

ex2

Input = [2, 4, 6, 8, 10, 2, 2, 2, 1, 1, 1, 5, 3]

Result = [2,2,2]

ex3

Input = [2, 4, 5, 3, 6, 3, 1, 56, 7, 6, 3, 12]

Result = []

*/

// find all sets of 3 that are even or odd
// push them to a test array
// sort from lowest to highest range (max - min)
// return the first item in sorted array

function threeAmigos(numbers) {
	const result = [];
	// max - min of an array
	const getRange = arr => Math.max(...arr) - Math.min(...arr);
	// get all sets of 3 numbers
	for (let i = 1; i < numbers.length - 1; i++) {
		const range = numbers.slice(i - 1, i + 2);
		// push current set if all 3 numbers are odd, or all 3 are even
		if (range.every(n => n % 2 === 0) || range.every(n => n % 2 !== 0)) {
			result.push(range);
		}
	}
	// sort from lowest to highest range, get first item, or [] if no ranges
	return result.sort((a, b) => getRange(a) - getRange(b))[0] ?? [];
}

console.log(threeAmigos([1, 2, 34, 2, 1, 5, 3, 5, 7, 234, 2, 1])); //, [5,3,5]);
console.log(threeAmigos([2, 4, 6, 8, 10, 2, 2, 2, 1, 1, 1, 5, 3])); //, [2,2,2]);
console.log(threeAmigos([2, 4, 5, 3, 6, 3, 1, 56, 7, 6, 3, 12])); //, []);
