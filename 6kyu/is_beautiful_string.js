/*
Task
A string is said to be beautiful if "b" occurs in it no more times than "a"; "c" occurs in it no more times than "b"; etc.

Given a string s, check whether it is beautiful.

Example
For s = "bbbaacdafe", the output should be true;

a   b   c   d   e   f   g ...  z
|   |   |   |   |   |   |      |
3 ≥ 3 > 1 ≥ 1 ≥ 1 ≥ 1 > 0 ... ≥0
It's so beautiful ;-)
For s = "aabbb", the output should be false;

a   b   c   d ...  z
|   |   |   |      |
2 < 3 > 0 ≥ 0 ... ≥0
It's not beautiful ;-)
For s = "bbc", the output should be false.

a   b   c   d ...  z
|   |   |   |      |
0 < 2 > 1 > 0 ... ≥0
It's not beautiful ;-)
Input/Output
[input] string s A string of lowercase letters. Constraints: 3 ≤ inputString.length ≤ 50.

[output] a boolean value
*/

function isBeautifulString(s) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const map = {};
	for (const char of alphabet) map[char] = 0;
	for (const char of s) map[char]++;
	const values = Object.values(map);
	for (let i = 1; i < 26; i++) {
		const [curr, prev] = [values[i], values[i - 1]];
		if (curr > prev) return false;
	}
	return true;
}

console.log(isBeautifulString('bbbaacdafe')); // true

console.log(isBeautifulString('aabbb')); // false

console.log(isBeautifulString('bbc')); // false

console.log(isBeautifulString('bbbaa')); // false

console.log(isBeautifulString('bbbaaa')); // true
