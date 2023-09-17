/*
You are given num (up to 15 digits, never less than 0).

If the length of num is even, return odd numbers as ints and even ones as strings, based on their position in the given number. Strings alternate in type cases: starting in lowercase to uppercase and so on based on position. If the length of num is odd, all the rules are opposite. See sample tests.

Note: Positions of numbers are 1-based.
*/

function conv(num) {
	const numStrings = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
	};
	const sequence = num.toString();
	const isEven = sequence.length % 2 === 0;

	let result = '';
	for (let pos = 1; pos <= sequence.length; pos++) {
		const digit = sequence[pos - 1];
		const string = isEven
			? `${numStrings[digit]}${numStrings[digit].toUpperCase()}`
			: `${numStrings[digit].toUpperCase()}${numStrings[digit]}`;

		if (isEven) {
			if (Number(digit % 2) !== 0) result += digit;
			if (Number(digit) % 2 === 0) result += string.repeat(pos).slice(0, pos);
		} else {
			if (Number(digit % 2) !== 0) result += string.repeat(pos).slice(0, pos);
			if (Number(digit) % 2 === 0) result += digit;
		}
	}
	return result;
}

console.log(conv(0)); //, "0")
console.log(conv(11)); //, "11")
console.log(conv(1101)); //, "11zer1")
console.log(conv(54563)); //, "F4FIV6THREE")
console.log(conv(47309534)); //, "f73zero953fourFOUR")
console.log(conv(34266262106)); //, "T4266262ONEoneONE06")
console.log(conv(15795379351687)); //, "15795379351sixSIXsixSIXeightEIGHTeig7")
console.log(conv(157953793516872)); //, "OFISEVNINEFIVEfTHREEtSEVENseNINEnineTHREEthreFIVEfiveFIONEoneONEon68SEVENsevenSEVE2")
