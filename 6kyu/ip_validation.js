/* Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
IPs should be considered valid if they consist of four octets, 
with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string
*/

function isValidIP(str) {
	let dots = 0;
	// loop over characters to find number of dots
	for (let x = 0; x < str.length; x++) {
		if (str[x] === '.') {
			dots++;
		}
	}
	// split string by dots and test the requirements
	return (
		str
			.split('.')
			.filter(
				input =>
					input.toString().match(/^[1-9]{1}[0-9]*[0-9]*$|^[0]$/) && input <= 255
			) // check filtered value equals original string and number of dots are right
			.join('.') === str && dots === 3 // true or false
	);
}

console.log(isValidIP('137.255.156.100')); // true
console.log(isValidIP('123.456.789.0')); // false
console.log(isValidIP('12.255.56.1')); // true
console.log(isValidIP('0.0.0.0')); // true
console.log(isValidIP('01.02.03.04')); // false
console.log(isValidIP('\n1.2.3.4')); // false
console.log(isValidIP('1e0.1e1.1e2.2e2')); // false
