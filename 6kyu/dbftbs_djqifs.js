/*
Caesar Ciphers are one of the most basic forms of encryption. It consists of a message and a key, and it shifts the letters of the message for the value of the key.

Read more about it here: https://en.wikipedia.org/wiki/Caesar_cipher

Your task
Your task is to create a function encryptor that takes 2 arguments - key and message - and returns the encrypted message.

Make sure to only shift letters, and be sure to keep the cases of the letters the same. All punctuation, numbers, spaces, and so on should remain the same.

Also be aware of keys greater than 26 and less than -26. There's only 26 letters in the alphabet!

Examples
A message 'Caesar Cipher' and a key of 1 returns 'Dbftbs Djqifs'.

A message 'Caesar Cipher' and a key of -1 returns 'Bzdrzq Bhogdq'.
*/

/*
PLAN
define lower and uppercase alphabet strings (repeated 10 times to handle large keys)
let result = ''
loop through message
on each iteration:
if character is uppercase letter:
get index from uppercase alphabet, adjust by key, add new letter to result
do same for lowercase letters
add other characters as they are
return result
*/

function encryptor(key, message) {
	const alpha = 'abcdefghijklmnopqrstuvwxyz'.repeat(10);
	const upper = alpha.toUpperCase().repeat(10);
	let result = '';
	for (let i = 0; i < message.length; i++) {
		if (/[A-Z]/.test(message[i])) {
			const index = upper.indexOf(message[i]);
			result += upper.slice(index + key)[0];
		} else if (/[a-z]/.test(message[i])) {
			const index = alpha.indexOf(message[i]);
			result += alpha.slice(index + key)[0];
		} else {
			result += message[i];
		}
	}
	return result;
}

console.log(encryptor(13, ''));
console.log(encryptor(0, 'no cypher'));
console.log(encryptor(13, 'Caesar Cipher'));
console.log(encryptor(-5, 'Hello World!'));
console.log(encryptor(27, 'Whoopi Goldberg'));
