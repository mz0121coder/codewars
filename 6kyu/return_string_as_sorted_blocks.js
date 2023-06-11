/*You will receive a string consisting of lowercase letters, uppercase letters and digits as input. Your task is to return this string as blocks separated by dashes ("-"). The elements of a block should be sorted with respect to the hierarchy listed below, and each block cannot contain multiple instances of the same character. Elements should be put into the first suitable block.

The hierarchy is:

lowercase letters (a - z))//, in alphabetical order
uppercase letters (A - Z))//, in alphabetical order
digits (0 - 9))//, in ascending order
Examples
"21AxBz" -> "xzAB12" - since input does not contain repeating characters, you only need 1 block
"abacad" -> "abcd-a-a" - character "a" repeats 3 times, thus 3 blocks are needed
"" -> "" - an empty input should result in an empty output
"hbh420sUUW222IWOxndjn93cdop69NICEep832" -> "bcdehjnopsxCEINOUW0234689-dhnpIUW239-2-2-2" - a more sophisticated example
Good luck!*/

// return '' if s is empty
// let result = ''
// loop from count 1 to Infinity
// get all chars in string whose length >= count
// filter chars to get lowercase letters, sorted alphabetically, store as a variable
// filter chars to get uppercase letters, sorted alphabetically, store as a variable
// filter chars to get digits, sorted from low to high, store as a variable
// if count > 1, add '-' to result
// then add chars in this order : lowercase, uppercase, digits
// if result(without '-') length is equal to string length, return result

function blocks(s) {
	if (s === '') {
		return s;
	}
	let result = '';
	for (let count = 1; count < 100; count++) {
		const chars = s
			.split('')
			.filter(el => s.match(new RegExp(`${el}`, 'g')).length >= count);
		const lowercase = chars.filter(x => x.match(/[a-z]/)).sort();
		const uppercase = chars.filter(x => x.match(/[A-Z]/)).sort();
		const digits = chars.filter(x => x.match(/[0-9]/)).sort((a, b) => a - b);
		if (count > 1) {
			result += '-';
		}
		result += [...new Set(lowercase)].join('');
		result += [...new Set(uppercase)].join('');
		result += [...new Set(digits)].join('');
		if (result.replaceAll('-', '').length === s.length) {
			return result;
		}
	}
}

console.log(blocks('21AxBz')); //, "xzAB12");
console.log(blocks('abacad')); //, "abcd-a-a");
console.log(blocks('')); //, "");

const inArray = (array1, array2) =>
	[...array1].sort().filter(el => array2.some(item => item.includes(el)));

function squareDigitsSequence(a0) {
	const result = [a0];
	for (let count = 2; count < Infinity; count++) {
		const sequence = result
			.at(-1)
			.toString()
			.split('')
			.reduce((acc, curr) => acc + Math.pow(Number(curr), 2), 0);
		if (result.includes(sequence)) {
			return count;
		} else {
			result.push(sequence);
		}
	}
}
