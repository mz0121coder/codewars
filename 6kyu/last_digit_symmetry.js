/*Consider the number 1176 and its square (1176 * 1176) = 1382976. Notice that:

the first two digits of 1176 form a prime.
the first two digits of the square 1382976 also form a prime.
the last two digits of 1176 and 1382976 are the same.
Given two numbers representing a range (a, b))//, how many numbers satisfy this property within that range? (a <= n < b)

Example
solve(2, 1200) = 1, because only 1176 satisfies this property within the range 2 <= n < 1200. See test cases for more examples. The upper bound for the range will not exceed 1,000,000.

Good luck!
*/

function solve(a, b) {
	const result = [];
	for (let i = a; i <= b; i++) {
		result.push(i);
	}
	return result.filter(n => {
		function isPrime(number) {
			// Check if number is less than 2 or not an integer
			if (number < 2 || !Number.isInteger(number)) {
				return false;
			}
			// Check if number is 2
			if (number === 2) {
				return true;
			}
			// Check if number is even
			if (number % 2 === 0) {
				return false;
			}
			// Check odd numbers up to the square root of the number
			for (let i = 3; i <= Math.sqrt(number); i += 2) {
				if (number % i === 0) {
					return false;
				}
			}
			return true;
		}
		return (
			// check first 2 digits of n & n^2 are prime
			isPrime(Number(n.toString().slice(0, 2))) &&
			isPrime(Number(Math.pow(n, 2).toString().slice(0, 2))) &&
			// check last 2 digits of n & n^2 are the same
			n.toString().slice(-2) === Math.pow(n, 2).toString().slice(-2)
		);
	}).length;
}

console.log(solve(2, 1200)); //,1);
console.log(solve(2, 100000)); //,247);
console.log(solve(2, 1000000)); //,2549);
console.log(solve(100000, 1000000)); //,2302);
