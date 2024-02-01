/*
This is a question from codingbat

Given an integer n greater than or equal to 0, create and return an array with the following pattern:

squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
squareUp(2) => [0, 1, 2, 1]
squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
n<=1000.

Check out my other kata!
*/

/*
Define a sequence array that starts with numbers counting down from n to 1
Add this starting sequence to a result array with spread operator
Loop from 0 to n - 2, on each iteration:
Replace number in sequence at current index with 0
Then add new sequence to beginning of result with spread operator

Return result array after all patterns are added
*/

const squareUp = n => {
	const sequence = [];
	for (let i = n; i > 0; i--) sequence.push(i);
	const result = [...sequence];
	for (let i = 0; i < n - 1; i++) {
		sequence[i] = 0;
		result.unshift(...sequence);
	}
	return result;
};

console.log(squareUp(4)); //, [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]);
console.log(squareUp(9)); //, [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 2, 1, 0, 0, 0, 0, 0, 4, 3, 2, 1, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 0, 0, 6, 5, 4, 3, 2, 1, 0, 0, 7, 6, 5, 4, 3, 2, 1, 0, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(squareUp(1)); //, [1]);
