/*
Task
Given a string str, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

Example
For str = "abcdc", the output should be "abcdcba".

Input/Output
[input] string str

A string consisting of lowercase latin letters.

Constraints: 3 ≤ str.length ≤ 10.

[output] a string
*/

// return string if it is already a palindrome
// store reversed string in variable
// loop backwards through reversed string
// extract letters from end to beginning, add to string
// check if this makes a palindrome
// return the palindrome as soon as one is made

function buildPalindrome(str) {
	const rev = str.split('').reverse().join('');
	if (rev === str) {
		return str;
	}
	for (let i = rev.length - 1; i >= 0; i--) {
		const letters = rev.slice(i);
		const newStr = str + letters;
		if (newStr.split('').reverse().join('') === newStr) {
			return newStr;
		}
	}
}

console.log(buildPalindrome('abcdc')); //,"abcdcba")
console.log(buildPalindrome('ababab')); //,"abababa")
