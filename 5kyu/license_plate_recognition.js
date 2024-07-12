/*
You have been hired by a company making speed cameras. Your mission is to write the controller software turning the picture taken by the camera into a license plate number.

Specification
The sensor matrix outputs a 3-line string using pipes and underscores. We want to translate this into a string with regular digits when these are recognized, and a ? when they are not. See the input and output examples below.

we plan to sell to various countries, so we make no assumption on length
there are no 0s or 1s on license plates
the input string sometimes misses one of the bottom two horizontal stripes. Since there is no ambiguity, we must return the digit instead of a question mark
Input
A non-empty string with pipes and underscores. It will always have 3 lines of identical length (which will always be a multiple of 3).

 _  _        _  _  _  _ \n
 _| _||_||_ |_   || ||_|\n
|_  _|  | _|| |  ||_| _|
Output
A string with regular digits and question marks.

234?6789
*/

function recognize(s) {
	let result = '';
	const map = {
		' _ \n _|\n|_ ': '2',
		' _ \n _|\n _|': '3',
		'   \n|_|\n  |': '4',
		' _ \n|_ \n _|': '5',
		' _ \n|_ \n|_|': '6',
		' _ \n  |\n  |': '7',
		' _ \n|_|\n|_|': '8',
		' _ \n|_|\n _|': '9',
	};
	// Extract digits from input string
	const digits = {};
	const rows = s.split('\n');
	for (const row of rows) {
		let index = 0;
		for (let i = 0; i < row.length; i += 3) {
			const section = row.slice(i, i + 3);
			digits[index] = digits[index] || [];
			digits[index].push(section);
			index++;
		}
	}
	for (const key in digits) digits[key] = digits[key].join('\n');
	// Check if valid, no more than 1 missing
	const isValid = (key, string) => {
		let differences = 0;
		for (let i = 0; i < key.length; i++) {
			if (key[i] !== string[i] && key[i] !== '_') return false;
			if (key[i] !== string[i]) {
				if (i === 1 && key[i] === '_' && string[i] === ' ') return false;
				if (string[i] !== ' ') return false;
				if (string[i] === ' ') differences++;
			}
		}
		return differences < 2;
	};
	// Add correct values to result
	for (let i = 0; i < Object.keys(digits).length; i++) {
		const string = digits[i];
		if (string in map) {
			result += map[string];
		} else {
			let isMatchAdded = false;
			for (const key in map) {
				if (isValid(key, string) && !isMatchAdded) {
					result += map[key];
					isMatchAdded = true;
					break;
				}
			}
			if (!isMatchAdded) result += '?';
		}
	}
	return result;
}

const SAMPLE1 =
	' _  _     _  _  _  _  _ \n' +
	' _| _||_||_ |_   ||_||_|\n' +
	'|_  _|  | _||_|  ||_| _|';

const SAMPLE2 =
	' _  _     _  _  _  _  _ \n' +
	' _|  ||_||_ |_   ||_|| |\n' +
	'|_  _|  |  ||_|  || | _|';

const SAMPLE3 =
	' _  _     _     _  _  _ \n' +
	' _|  ||_||_ |_   ||_|| |\n' +
	'|_  _|  |  ||_|  || | _|';

console.log(recognize(SAMPLE1)); // 23456789
console.log(recognize(SAMPLE2)); // 23456789
console.log(recognize(SAMPLE3)); // 2345?789
