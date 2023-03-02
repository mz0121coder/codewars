/*
It looks at the letter, and sees it's index in the alphabet, the alphabet being a-z, if you didn't know. If it is odd, it is replaced with 1, if it's even, its replaced with 0. Note that the index should start from 0. Also, if the character isn't a letter, it remains the same.
Example
encode("Hello World!"); // => "10110 00111!"
This is because H's index is 7, which is odd, so it is replaced by 1, and so on.
Have fun (en)coding!*/

function encode(plaintext) {
	let result = '';
	const alphabet = Array.from(Array(26))
		.map((e, i) => i + 65)
		.map(x => String.fromCharCode(x));
	for (let i = 0; i < plaintext.length; i++) {
		if (alphabet.includes(plaintext[i].toUpperCase())) {
			const index = alphabet.indexOf(plaintext[i].toUpperCase());
			switch (index % 2) {
				case 1:
					result += '1';
					break;
				case 0:
					result += '0';
			}
		} else {
			result += plaintext[i];
		}
	}
	return result;
}
console.log(encode('Hello World!'));
