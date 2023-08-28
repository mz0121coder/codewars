/*
As part of this Kata, you need to find the length of the sequence in an array, between the first and the second occurrence of a specified number.

For example, for a given array arr

[0, -3, 7, 4, 0, 3, 7, 9]
Finding length between two 7s like

lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7)
would return 5.

For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

If there are less or more than two occurrences of the number to search for, return 0, or in Haskell, Nothing.
*/

const lengthOfSequence = (arr, n) => {
	const nCount = arr.filter(el => el === n).length;
	const [start, end] = [arr.indexOf(n), arr.lastIndexOf(n) + 1];
	return nCount === 2 ? arr.slice(start, end).length : 0;
};

console.log(lengthOfSequence[(1, 1)]);
console.log(lengthOfSequence[(1, 2, 3, 1)]);
console.log(lengthOfSequence[(-7, 5, 0, 2, 9, 5)]);
console.log(lengthOfSequence[(-7, 6, 2, -7, 4)]);
