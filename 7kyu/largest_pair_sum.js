/*Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.
*/

function largestPairSum(numbers) {
	const sortedArr = numbers.sort((a, b) => b - a);
	return sortedArr[0] + sortedArr[1];
}

console.log(largestPairSum([10, 14, 2, 23, 19])); //, 42);
console.log(largestPairSum([-100, -29, -24, -19, 19])); //, 0);
console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2])); //, 10);
console.log(largestPairSum([-10, -8, -16, -18, -19])); //, -18);
