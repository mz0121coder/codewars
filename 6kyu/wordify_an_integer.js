/*
Turn a given number (an integer > 0, < 1000) into the equivalent English words. For the purposes of this kata, no hyphen is needed in numbers 21-99.

Examples:

wordify(1) == "one"
wordify(12) == "twelve"
wordify(17) == "seventeen"
wordify(56) == "fifty six"
wordify(90) == "ninety"
wordify(326) == "three hundred twenty six"
Based on "Speech module" mission from Checkio.
*/

/*
define obj for numbers 1-19
define obj for units of 10, from 20 - 90

if(n < 20) return correct word
if(n < 100):
find largest divisor that is a unit of 10, add to string
if n doesn't end with 0, also add word for ending digit

else:
find largest divisor that is a unit of 100, add to string
after substracting this number, 
if remainder is between 1 and 19: add the correct word to string and return it
else:
find largest divisor that is a unit of 10, add to string
if n doesn't end with 0, also add word for ending digit
*/

function wordify(n) {
	const obj1 = {
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
	};

	const obj2 = {
		90: 'ninety',
		80: 'eighty',
		70: 'seventy',
		60: 'sixty',
		50: 'fifty',
		40: 'forty',
		30: 'thirty',
		20: 'twenty',
	};

	if (n < 20) {
		return obj1[`${n}`];
	} else if (n < 100) {
		const tens = Math.floor(n / 10);
		const singles = n % 10;
		return singles === 0
			? obj2[`${tens}`]
			: `${obj2[tens * 10]} ${obj1[singles]}`;
	} else {
		let num = n;
		let str = '';
		const hundreds = Math.floor(n / 100);
		str += `${obj1[hundreds]} hundred`;
		num -= hundreds * 100;
		if (num > 0 && num < 20) return `${str} ${obj1[num]}`;

		const tens = Math.floor(num / 10);
		if (tens > 0) str += ` ${obj2[tens * 10]}`;
		const singles = n % 10;
		if (singles > 0) str += ` ${obj1[singles]}`;
		return str;
	}
}

console.log(wordify(1)); // "one"
console.log(wordify(10)); // "ten"
console.log(wordify(12)); // "twelve"
console.log(wordify(17)); // "seventeen"
console.log(wordify(56)); // "fifty six"
console.log(wordify(90)); // "ninety"
console.log(wordify(100)); // "one hundred"
console.log(wordify(326)); // "three hundred twenty six"
