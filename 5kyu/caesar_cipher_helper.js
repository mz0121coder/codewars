/*
Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

For example:

var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode('Codewars'); // returns 'HTIJBFWX'
c.decode('BFKKQJX'); // returns 'WAFFLES'
If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
The shift will always be in range of [1, 26].
*/

const CaesarCipher = function (shift) {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.repeat(100);
	this.encode = s => {
		// console.log(s, shift);
		return s.replace(
			/[a-z]/gi,
			char => alphabet[alphabet.indexOf(char.toUpperCase()) + shift]
		);
	};
	this.decode = s => {
		return s.replace(
			/[a-z]/gi,
			char => alphabet[alphabet.lastIndexOf(char.toUpperCase()) - shift]
		);
	};
};
