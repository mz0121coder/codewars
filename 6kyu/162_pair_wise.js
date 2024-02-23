/*
Task
Given an array arr and a number n. Call a pair of numbers from the array a Perfect Pair if their sum is equal to n.

Find all of the perfect pairs and return the sum of their indices.

Note that any element of the array can only be counted in one Perfect Pair. Also if there are multiple correct answers, return the smallest one.

Example
For arr = [1, 4, 2, 3, 0, 5] and n = 7, the result should be 11.

Since the Perfect Pairs are (4, 3) and (2, 5) with indices 1 + 3 + 2 + 5 = 11.

For arr = [1, 3, 2, 4] and n = 4, the result should be 1.

Since the element at index 0 (i.e. 1) and the element at index 1 (i.e. 3) form the only Perfect Pair.

Input/Output
[input] integer array arr
array of non-negative integers.

[input] integer n
positive integer

[output] integer
sum of indices and 0 if no Perfect Pair exists.
*/

/*
Make a copy of arr, start sum at 0
Using a nested loop, add indexes of pairs equal to n to the sum 
Replace the numbers at their indexes with a random number e.g. 200
*/

function pairwise(arr, n) {
	const res = [...arr];
	let sum = 0;
	for (let i = 0; i < res.length - 1; i++) {
		for (let j = i + 1; j < res.length; j++) {
			if (res[i] + res[j] === n) {
				sum += i + j;
				res.splice(i, 1, 100);
				res.splice(j, 1, 100);
			}
		}
	}
	return sum;
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7)); // 11
console.log(pairwise([1, 3, 2, 4], 4)); // 1
console.log(pairwise([1, 1, 1], 2)); // 1
console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); // 10
console.log(pairwise([15, 1, 1], 5)); // 0
