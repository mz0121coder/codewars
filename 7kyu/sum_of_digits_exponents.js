/*Not considering number 1, the integer 153 is the first integer having this property: the sum of the third-power of each of its checkDigits is equal to 153. Take a look: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153

The next number that experiments this particular behaviour is 370 with the same power.

Write the function eq_sum_powdig())//, that finds the numbers below a given upper limit hMax (inclusive) that fulfills this property but with different exponents as the power for the checkDigits.

eq_sum_powdig(hMax, exp): ----> sequence of numbers (sorted list) (Number one should not be considered).

Let's see some cases:

eqSumPowdig(100, 2) ----> []

eqSumPowdig(1000, 2) ----> []

eqSumPowdig(200, 3) ----> [153]

eqSumPowdig(370, 3) ----> [153, 370]
Enjoy it !!

*/

function eqSumPowdig(hMax, exp) {
	const result = [];
	for (let i = 2; i <= hMax; i++) {
		const digits = i.toString();
		const exponents = digits
			.split('')
			.reduce((total, current) => total + Math.pow(Number(current), exp), 0);
		if (exponents === i) {
			result.push(exponents);
		}
	}
	return result;
}

// function eqSumPowdig(hMax, exp) {
// 	const result = [];
// 	// loop through numbers starting at 2 up to hMax
// 	for (let i = 2; i <= hMax; i++) {
// 		// array of digits in current iteration
// 		// e.g. 153 => ['1', '5', '3']
// 		const digitsArray = i.toString().split('');
// 		// add up the sum of each digit in array to the power of exp
// 		// e.g. hMax=153, if exp is 3
// 		// 1^3 + 5^3 + 3^3 = 153
// 		const exponents = digitsArray.reduce(
// 			(total, current) => total + Math.pow(Number(current), exp),
// 			0
// 		);
// 		// if sum of exponents equals the number at current iteration
// 		// add to result array
// 		if (exponents === i) {
// 			result.push(exponents);
// 		}
// 	}
// 	return result;
// }

console.log(eqSumPowdig(100, 2)); //, [])
console.log(eqSumPowdig(1000, 2)); //, [])
console.log(eqSumPowdig(2000, 2)); //, [])
console.log(eqSumPowdig(200, 3)); //, [153])
console.log(eqSumPowdig(370, 3)); //, [153, 370])
console.log(eqSumPowdig(400, 3)); //, [153, 370, 371])
console.log(eqSumPowdig(500, 3)); //, [153, 370, 371, 407])
console.log(eqSumPowdig(1000, 3)); //, [153, 370, 371, 407])
console.log(eqSumPowdig(1500, 3)); //, [153, 370, 371, 407])
