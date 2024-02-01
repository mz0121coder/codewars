/*
In this kata, you have an integer array which was ordered by ascending except one number.

For Example: [1,2,3,4,17,5,6,7,8]
For Example: [19,27,33,34,112,578,116,170,800]
You need to figure out the first breaker. Breaker is the item, when removed from sequence, sequence becomes ordered by ascending.

For Example: [1,2,3,4,17,5,6,7,8] => 17 is the only breaker.

For Example: [19,27,33,34,112,578,116,170,800] => 578 is the only breaker.

For Example: [105, 110, 111, 112, 114, 113, 115] => 114 and 113 are breakers. 114 is the first breaker.
    When removed 114, sequence becomes ordered by ascending => [105, 110, 111, 112, 113, 115]
    When removed 113, sequence becomes ordered by ascending => [105, 110, 111, 112, 114, 115]

For Example: [1, 0, 2] => 1 and 0 are the breakers. 1 is the first breaker.
    When removed 1, sequence becomes ordered by ascending => [0, 2]
    When removed 0, sequence becomes ordered by ascending => [1, 2]
    
For Example: [1, 2, 0, 3, 4] => 0 is the only breaker.
    When removed 0, sequence becomes ordered by ascending. => [1, 2, 3, 4]
    
TASK:
Write a function that returns the first breaker.

Notes:

Input array does not contain any duplicate element.
*/

/*
define helper method that takes in an array and makes a sorted copy,
then checks if sorted copy === original

loop through input array, on each iteration:
call helper method on a copy without current number, 
return first number where the result is true
*/

function orderBreaker(input) {
	const isSorted = arr => {
		const sorted = [...arr].sort((a, b) => a - b);
		return JSON.stringify(arr) === JSON.stringify(sorted);
	};
	for (let i = 0; i < input.length; i++) {
		if (isSorted([...input.slice(0, i), ...input.slice(i + 1)]))
			return input[i];
	}
}

const tests = [
	[[2, 1], 2],
	[[0, -10], 0],
	[[15, 0], 15],
	[[1, 3, 2], 3],
	[[1, 0, 2], 1],
	[[1, 2, 0, 3, 4], 0],
	[[1, 2, 3, 4, -1], -1],
	[[-11, 5, 0, 3, 4], 5],
	[[-11, -5, 0, -2, 4], 0],
	[[5, 7, 6, 8, 9, 10], 7],
	[[1, 2, 3, 4, 17, 5, 6, 7, 8], 17],
	[[19, 27, 33, 34, 112, 578, 116, 170, 800], 578],
	[[105, 110, 111, 112, 114, 113, 115], 114],
	[[1001, 991, 992, 993, 994, 995, 996], 1001],
];

tests.forEach(([input, expected]) =>
	console.log(orderBreaker(input) === expected)
);
