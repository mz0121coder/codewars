/*Take a string and return a hash with all the ascii values of the characters in the string. Returns nil if the string is empty. The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphebetic characters as well.
 */

function charToAscii(string) {
	let test = '';
	let result = {};
	string.split('').forEach(x => {
		if (!test.includes(x) && x.match(/[a-z]/i)) {
			test += x;
			result[x] = x.charCodeAt(0);
		}
	});
	return result === {} || !string.length ? null : result;
}

console.log(charToAscii('')); //null,"deals with an empty str");
console.log(charToAscii('a')); //{"a":97},"deals with one char");
console.log(charToAscii('aaa')); //{"a":97},"deals with repeated characters");
console.log(charToAscii('hello world')); //{"h":104, "e":101, "l":108, "o":111, "w":119, "r":114, "d":100},"deals with spaces");
console.log(charToAscii('ABaa ^')); //{"A":65, "B":66, "a":97},"deals with uppercase characters and non alphebetic characters");
