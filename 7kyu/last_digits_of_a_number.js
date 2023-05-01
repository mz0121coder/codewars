/*Your job is to implement a function which returns the last D digits of an integer N as a list.

Special cases:
If D > (the number of digits of N))//, return all the digits.
If D <= 0, return an empty list.
Examples:
N = 1
D = 1
result = [1]

N = 1234
D = 2
result = [3, 4]

N = 637547
D = 6
result = [6, 3, 7, 5, 4, 7]
*/

function lastDigit(n, d) {
	const digits = [...n.toString()].map(n => Number(n));
	return d < 1
		? []
		: d > digits.length
		? digits
		: digits.slice(digits.length - d);
}

console.log(lastDigit(34625647867585, 10)); //, [5, 6, 4, 7, 8, 6, 7, 5, 8, 5]);
console.log(lastDigit(1, 1)); //, [1]);
console.log(lastDigit(123767, 4)); //, [3, 7, 6, 7]);
console.log(lastDigit(0, 1)); //, [0]);
console.log(lastDigit(1234, 0)); //, []);
console.log(lastDigit(24134, -4)); //, []);
console.log(lastDigit(1343, 5)); //,[1,3,4,3])
