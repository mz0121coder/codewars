/*Format any integer provided into a string with "," (commas) in the correct places.

Example:

For n = 100000 the function should return '100,000';
For n = 5678545 the function should return '5,678,545';
for n = -420902 the function should return '-420,902'.
*/

const numberFormat = function (number) {
	let format = '';
	// get digits as a string
	const digits = number.toString().replaceAll('-', '');
	// loop backwards, every 3 items, add a comma to result (except for first digit)
	let count = 0;
	for (let i = digits.length - 1; i >= 0; i--) {
		count++;
		if (count === 3) {
			if (i > 0) {
				format += digits[i] + ',';
			} else {
				format += digits[i];
			}
			count = 0;
		} else {
			format += digits[i];
		}
	}
	// add '-' to start if number is negative
	const result = format.split('').reverse().join('');
	return number.toString()[0] === '-' ? '-' + result : result;
};

console.log(numberFormat(100000)); //, '100,000');
console.log(numberFormat(5678545)); //, '5,678,545');
