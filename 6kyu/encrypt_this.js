/*Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/
// var encryptThis = function (text) {
// 	return text.length <= 1
// 		? text.charCodeAt(0).toString()
// 		: text
// 				.split(' ')
// 				.map(word =>
// 					word.length <= 1
// 						? word.charCodeAt(0)
// 						: word.length === 2
// 						? word.charCodeAt(0) + word.at(-1)
// 						: word.charCodeAt(0) +
// 						  word.at(-1) +
// 						  word.substring(2, word.length - 1) +
// 						  word[1]
// 				)
// 				.join(' ');
// };
const encryptThis = text =>
	text
		.split(' ')
		.map(word =>
			word
				.replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
				.replace(/^\w/, word.charCodeAt(0))
		)
		.join(' ');

console.log(encryptThis('A wise old owl lived in an oak')); // "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
console.log(encryptThis('Hello'));
console.log(encryptThis('good'));
console.log(encryptThis('hello world'));
console.log(encryptThis('A'));
console.log(encryptThis(''));
