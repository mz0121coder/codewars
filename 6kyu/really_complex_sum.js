/*
Your program will receive an array of complex numbers represented as strings. Your task is to write the complexSum function which have to return the sum as a string.

Complex numbers can be written in the form of a+bi, such as 2-3i where 2 is the real part, 3 is the imaginary part, and i is the "imaginary unit".

When you add two complex numbers, the real and the imaginary part needs to be added separately,so for example 2+3i + 5-i = (2+5)+(3i-i) = 7+2i

Both the complex and the imaginary part can be 0, so 123, -2i or i are also complex numbers.

Complex numbers must be returned in their shortest form, so e.g. 0+1*i should be just i, and 10+0i should be 10. This is also how you will get them!

For simplicity, the coefficients will always be integers. If the array is empty, return 0.

Have fun! :)
*/

/*
define variable to count numbers and i units
loop through arr
use regex to match numeric portion (if exists) of each element
add/decrease num count
use regex to match i portion (if exists) of each element
add/decrease i count

use switch statements to handle different quanitites of both counts
return correct message at the end
*/

function complexSum(arr) {
	let numCount = 0;
	let iCount = 0;
	arr.forEach(el => {
		// numeric part (if it exists) of each item
		const num = el.match(/^[-+]?[0-9]+$|^[-+]?[0-9]+[+-]/);
		if (num) {
			const digits = Number(num[0].match(/[0-9]+/)[0]);
			numCount += num[0][0] === '-' ? digits * -1 : digits;
		}
		// imaginary part
		const imaginary = el.match(/[+-]?[0-9]*i/);
		if (imaginary) {
			const sign = imaginary[0][0];
			const units = imaginary[0].replace(/[+-]/, '');
			const amount = units === 'i' ? 1 : Number(units.match(/^[0-9]+/)[0]);
			iCount += sign === '-' ? amount * -1 : amount;
		}
	});
	// format strings for both parts
	const numStr = numCount !== 0 ? `${numCount}` : '';
	let iString = '';
	switch (true) {
		case iCount === 1 && numCount !== 0:
			iString = '+i';
			break;
		case iCount === 1 && numCount === 0:
			iString = 'i';
			break;
		case iCount === -1:
			iString = '-i';
			break;
		case iCount < -1:
			iString = `${iCount}i`;
			break;
		case iCount > 1 && numCount !== 0:
			iString = `+${iCount}i`;
			break;
		case iCount > 1 && numCount === 0:
			iString = `${iCount}i`;
	}
	return numStr === '' && iString === '' ? '0' : `${numStr}${iString}`;
}

console.log(complexSum(['2+3i', '3-i']));
