/*
Task
Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

Given an integer n, find its digit degree.

Example
For n = 5, the output should be 0;

For n = 100, the output should be 1;

For n = 91, the output should be 2.

Input/Output
[input] integer n

Constraints: 5 ≤ n ≤ 109.

[output] an integer
*/

function digitDegree(n) {
	let degree = 0;
	let digits = n;
	const digitSum = num =>
		num
			.toString()
			.split('')
			.reduce((acc, curr) => acc + Number(curr), 0);
	while (digits > 9) {
		digits = digitSum(digits);
		degree++;
	}
	return degree;
}

console.log(digitDegree(5)); //,0)
console.log(digitDegree(100)); //,1)
console.log(digitDegree(91)); //,2)
console.log(digitDegree(99)); //,2)
console.log(digitDegree(1234567)); //,3)
console.log(digitDegree(1000000000)); //,1)
