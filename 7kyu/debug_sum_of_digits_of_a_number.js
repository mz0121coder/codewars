/*DESCRIPTION:
Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14*/

function getSumOfDigits(integer) {
	return integer
		.toString()
		.split('')
		.reduce((acc, curr) => acc + Number(curr), 0);
}

console.log(getSumOfDigits(123)); //, 6, 'Incorrect answer for integer=123');
console.log(getSumOfDigits(223)); //, 7, 'Incorrect answer for integer=223');
console.log(getSumOfDigits(0)); //, 0, 'Incorrect answer for integer=0');
