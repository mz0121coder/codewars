/*
Hello, fellow Warrior!
Or, should I say, Secret Agent?
This is your chance to prove that you are true spy material, and not just some amateur with a tuxedo!
The first step on your way to the double 0 is also the most important: Learn how to craft and decode a secret password to communicate safely with other agents.

THE KATA

This Kata will be divided in two parts.

In the first, you will create a function that takes a string as argument and returns a jumbled string, with the following rules and restrictions:

The input string MUST be a 9 characters long word (made only of lowercase letters from "a" to "z" of the English alphabet). If the argument doesn't meet this requirement (or no argument at all is passed to the function), it must return "BANG!" (there are no second chances in the spy world!)
The string must be divided into 3 equal parts of 3 characters each:
The first and third letter will be converted to the corresponding number, according to the English alphabet (ex. a = 1, b = 2, c = 3 ... z = 26, etc.)
The fourth, fifth, and sixth letter will be reversed.
The seventh, eighth, and ninth letter will be substituted with the letter that follows them in the English alphabet (z will be substituted with a).
Finally, the returned string must be in the following order: Part 2, Part 3, and Part 1
Examples:

encrypt("jamesbond"); // should return: "bsepoe10a13"
encrypt("I'll kill you, 007!"); // should return "BANG!"
In the second part of the Kata, you will create another function that takes a jumbled password and acts as follows:

It decrypts the password argument, reversing the rules and following the same restrictions set in part 1 of the kata.
It compares the decrypted string to an array of secret passcodes (you can't see the passcodes, but you can test if yours is present in the array). Watch out: Not all of the secret passcodes are valid strings!
It must return:
"Nice to meet you, fellow Agent!" if the passcode is both valid and contained in the array, or;
"BANG!" if the passcode is not in the array, or if the string is not valid.
Examples:

decrypt("bsepoe10a13"); //should return: "Nice to meet you, fellow Agent!"```
decrypt("How are you still alive, 007??"); //should return "BANG!"
*/

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const indexMap = {};
const map = [...alphabet].reduce((obj, char, i) => {
	obj[char] = i + 1;
	indexMap[i + 1] = char;
	return obj;
}, {});

function encrypt(passcode) {
	if (!passcode || !/^[a-z]{9}$/.test(passcode)) return 'BANG!';

	const substitute = str => {
		let res = '';
		for (const char of str) {
			const index = map[char];
			res += char === 'z' ? 'a' : alphabet[index];
		}
		return res;
	};

	const part1 = `${map[passcode[0]]}${passcode[1]}${map[passcode[2]]}`;
	const part2 = [...passcode.slice(3, 6)].reverse().join('');
	const part3 = substitute(passcode.slice(6));
	return part2 + part3 + part1;
}

//Section 2: Decryption
/*
var validPasscodes = passcodes; // Do not change this! Only the boss knows all the passcodes,
// but you can still check through this var
*/

function decrypt(password) {
	if (!/[a-z]{6}\d{1,2}[a-z]\d{1,2}/.test(password)) return 'BANG!';
	const substitute = str => {
		let res = '';
		for (const char of str) {
			const index = map[char];
			res += char === 'a' ? 'z' : alphabet[index - 2];
		}
		return res;
	};
	const formatDigit = num => {
		return alphabet[parseInt(num - 1)];
	};

	const part3 = substitute(password.slice(3, 6));
	const part2 = [...password.slice(0, 3)].reverse().join('');
	const digits = password.match(/\d+/g);
	const part1 =
		formatDigit(digits[0]) +
		password.slice(6).replace(/\d+/g, '') +
		formatDigit(digits[1]);

	const decryption = part1 + part2 + part3;
	// const isValid = /^[a-z]{9}$/.test(decryption) && passcodes.includes(decryption);
	const isValid = /^[a-z]{9}$/.test(decryption);
	return isValid ? 'Nice to meet you, fellow Agent!' : 'BANG!';
}

console.log(encrypt('jamesbond')); // "bsepoe10a13"
console.log(encrypt('paparazzi')); // "araaaj16a16"
console.log(encrypt('james')); // "BANG!", "Argument string must be 9 characters long"

console.log(decrypt('jkcbdl2l1')); // "Nice to meet you, fellow Agent!"
console.log(decrypt('araaaj16a16')); // "Nice to meet you, fellow Agent!"
console.log(decrypt('psljft5v9')); // "BANG!", "Passcode must be in array of secret passcodes"
