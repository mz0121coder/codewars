/*
Can you write an algorithm to determine the number of decimal places of a number?

decimalPlaces(3.14); //yields 2
decimalPlaces(2.e-14); //yields 14
decimalPlaces(-3.14e-21); //yields 23
decimalPlaces(10.75); //yields 2
decimalPlaces(NaN); //yields 0
decimalPlaces(Infinity); //yields 0
Consider the decimal places to be the number of digits after the decimal separator when the number is expressed in ordinary decimal notation.
*/

// define variable result that starts at 0
// define variable digits equal to number as a string

// FOR REGULAR DECIMALS
// if digits includes '.'
// count length of individual digit characters following '.'
// add to result

// FOR EXPONENTIAL VALUES
// if digits includes 'e-'
// convert digits following 'e-' to Number, add to result

// return result

function decimalPlaces(n) {
	let result = 0;
	const digits = n.toString();
	if (digits.includes('.')) {
		const index = digits.indexOf('.');
		result += digits.slice(index + 1).match(/\d+/)[0].length;
	}
	if (digits.includes('e-')) {
		const expo = digits.match(/e-[\d]+/)[0].slice(2);
		result += Number(expo);
	}
	return result;
}

console.log(decimalPlaces(3.14)); //,2);
console.log(decimalPlaces(2e-14)); //, 14);
console.log(decimalPlaces(NaN)); //, 0);
