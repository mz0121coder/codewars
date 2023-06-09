/*
You are back at your newly acquired decrypting job for the secret organization when a new assignment comes in. Apparently the enemy has been communicating using a device they call "The Mirror".
It is a rudimentary device with encrypts the message by switching its letter with its mirror opposite (A => Z), (B => Y), (C => X) etc.

Your job is to build a method called "mirror" which will decrypt the messages. Resulting messages will be in lowercase.

To add more secrecy, you are to accept a second optional parameter, telling you which letters or characters are to be reversed; if it is not given, consider the whole alphabet as a default.

To make it a bit more clear: e.g. in case of "abcdefgh" as the second optional parameter, you replace "a" with "h", "b" with "g" etc. .

For example:

mirror("Welcome home"), "dvoxlnv slnv" //whole alphabet mirrored here
mirror("hello", "abcdefgh"), "adllo" //notice only "h" and "e" get reversed
*/

// for code with 1 argument
// reverse all letters, return result as lowercase
// for code with 2 arguments
// if 2nd argument includes current character (lowercase)
// reverse 2nd argument and add character from current index to result
// return result as lowercase

function mirror(code) {
	const rev = str => str.split('').reverse().join('');
	let result = '';
	const lastArg = arguments[arguments.length - 1];
	for (let i = 0; i < code.length; i++) {
		const char = code[i].toLowerCase();
		if (arguments.length === 1) {
			const alphabet = 'abcdefghijklmnopqrstuvwxyz';
			const reverseAlphabet = rev(alphabet);
			if (alphabet.includes(char)) {
				const index = alphabet.indexOf(char);
				result += reverseAlphabet[index];
			} else {
				result += code[i];
			}
		}
		if (arguments.length === 2) {
			const letters = lastArg;
			const reverseLetters = rev(letters);
			if (letters.includes(char)) {
				const index = letters.indexOf(char);
				result += reverseLetters[index];
			} else {
				result += code[i].toLowerCase();
			}
		}
	}
	return result;
}
