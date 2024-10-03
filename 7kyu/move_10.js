/*
Move every letter in the provided string forward 10 letters through the alphabet.
If it goes past 'z', start again at 'a'.
Input will be a string with length > 0.
*/

function moveTen(s) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const letterToIndex = [...alphabet].reduce((obj, char, i) => {
		obj[char] = (i + 10) % 26;
		return obj;
	}, {});

	let result = '';
	for (const letter of s) result += alphabet[letterToIndex[letter]];
	return result;
}

console.log(moveTen('testcase')); // "docdmkco"
console.log(moveTen('codewars')); // "mynogkbc"
console.log(moveTen('exampletesthere')); // "ohkwzvodocdrobo"
