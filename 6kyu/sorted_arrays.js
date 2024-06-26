/*
Given any number of arrays each sorted in ascending order, find the nth smallest number of all their elements.

All the arguments except the last will be arrays, the last argument is n.

nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value
Be mindful of performance.
*/

/*
Arguments are any number of nested arrays, followed by a number
Flatten and sort the arrays, 
return item at index: number - 1
*/

const nthSmallest = (arrays, num) =>
	arrays.flat().sort((a, b) => a - b)[num - 1];
