/*
Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

Good luck :)
*/

/*
define 2 empty strings, max and substring
loop through str
if substring length > 0:
if (alphabet idx of char >= alphabet idx of last char in substring)
add char to substring
if substring == '', reassign to char
if substring length > max length, max = substring
return max
*/

function longest(str) {
	let max = '';
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let substring = '';

	for (const char of str) {
		const idx = alphabet.indexOf(char);
		if (substring.length) {
			const lastIdx = alphabet.indexOf(substring.slice(-1));
			if (idx >= lastIdx) substring += char;
			if (idx < lastIdx) substring = char;
		} else {
			substring = char;
		}
		if (substring.length > max.length) max = substring;
	}

	return max;
}

console.log(longest('asdfaaaabbbbcttavvfffffdf'));
console.log(longest('asdfbyfgiklag'));
