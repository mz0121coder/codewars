/*
This Kata is intended as a small challenge for my students

Create a function, called compute, that accepts an integer argument, N, and returns the value of the following expression, where N is a odd positive integer given by the user

Expression : 1 +....+ 1/(N)^2

For example, when N = 9, compute() should evaluate the following: 1 + 1/(3)^2 + 1/(5)^2 + 1/(7)^2 + 1/(9)^2 == ~1.1838649533887629

Note: User input of an even number OR a number less than 3 should return 0.

compute(5); // => 1.1511111111111112
compute(9); // => 1.1838649533887629
compute(-1); // => 0
compute(8); // => 0
*/

function compute(n) {
	let result = 0;
	if (n % 2 === 1) {
		for (let i = 1; i <= n; i += 2) {
			if (i === 1) {
				result += i;
			} else {
				result += 1 / (i * i);
			}
		}
	}
	return result;
}
console.log(compute(9));
