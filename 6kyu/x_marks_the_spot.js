/*
Write a function x(n) that takes in a number n and returns an nxn array with an X in the middle. The X will be represented by 1's and the rest will be 0's.
E.g.

x(5) === [[1, 0, 0, 0, 1],
          [0, 1, 0, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 1, 0, 1, 0],
          [1, 0, 0, 0, 1]];
          
x(6) === [[1, 0, 0, 0, 0, 1],
          [0, 1, 0, 0, 1, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 1, 0, 0, 1, 0],
          [1, 0, 0, 0, 0, 1]];
*/

// define a result array
// define indexes for first and last 1, start them at -1 and n
// loop from 1 up to n
// on each iteration, define an array that starts empty, increment first 1 index, decrement last 1 index, both by 1
// nested loop from 0 to n - 1
// on each iteration of nested loop (j):
// if current index for first or last 1 includes the index of nested current iteration (j)
// push 1 to an array
// else push 0 to an array
// push the array to the result array
// return result array

function x(n) {
	const result = [];
	let firstOne = -1;
	let lastOne = n;
	for (let i = 1; i <= n; i++) {
		const arr = [];
		firstOne++;
		lastOne--;
		for (let j = 0; j < n; j++) {
			if ([firstOne, lastOne].includes(j)) {
				arr.push(1);
			} else {
				arr.push(0);
			}
		}
		result.push(arr);
	}
	return result;
}

console.log(x(1)); //, [[1]]);
console.log(x(2)); //, [[1, 1], [1, 1]]);
console.log(x(3)); //, [[1, 0, 1], [0, 1, 0], [1, 0, 1]]);
console.log(x(4)); //, [[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1]]);
console.log(x(5)); //, [[1, 0, 0, 0, 1], [0, 1, 0, 1, 0], [0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [1, 0, 0, 0, 1]]);
console.log(x(6)); //, [[1, 0, 0, 0, 0, 1], [0, 1, 0, 0, 1, 0], [0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0], [0, 1, 0, 0, 1, 0], [1, 0, 0, 0, 0, 1]]);
