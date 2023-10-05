/*
DESCRIPTION:
School students Alice and Bob send messages to each other. To ensure that their messages are not readable by teachers they encrypt text with simple algorythm. Every message contains only latin letters (lowercase and uppercase))//, digits from 0 to 9 and space symbol.

So, the encryption algorythm is:

Reverse the whole string.
Replace every letter with it ASCII code in quotes (A to '65', h to '104' and so on).
Insert digits and spaces as is.
E.g. this message:

9Hi Alice4
is encrypted as

4'101''99''105''108''65' '105''72'9
Your task is to write function decrypt to get source messages from encrypted strings.
*/

// const decrypt = str => {
// 	let result = '';
// 	const chars = str.match(/'[\d]+'|\d+|\s+/g) || '';
// 	for (let i = chars.length - 1; i >= 0; i--) {
// 		if (/'[\d]+'/.test(chars[i])) {
// 			result += String.fromCharCode(Number(chars[i].match(/[\d]+/)[0]));
// 		} else {
// 			result += chars[i];
// 		}
// 	}
// 	return result.replace(/\d+/g, x => x.split('').reverse().join(''));
// };

const decrypt = str =>
	str
		.replace(/'\d+'/g, x => String.fromCharCode(Number(x.match(/\d+/)[0])))
		.split('')
		.reverse()
		.join('');

console.log(decrypt("'101''99''105''108''65'")); //, 'Alice');
console.log(decrypt("'98''111''66'")); //, 'Bob');
console.log(decrypt('30 71')); //, '17 03');
