/*
Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

For this kata assume that all characters are lowercase.

Example
madam -> True
adamm -> True
junk -> False

Hint
The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.
*/

/*
Use hashmap to track character counts from input
Check how many characters have odd counts, store as odds
Return odds < 2
*/

function permuteAPalindrome(input) {
	const charCount = {};
	for (const char of input) {
		charCount[char] = (charCount[char] || 0) + 1;
	}
	let odds = 0;
	for (const key in charCount) {
		const count = charCount[key];
		if (count % 2 !== 0) odds++;
	}
	return odds < 2;
}

// const permuteAPalindrome = input =>
// 	[...input].sort().join('').replace(/(.)\1/g, '').length < 2;

console.log(permuteAPalindrome('a')); // true
console.log(permuteAPalindrome('aa')); // true
console.log(permuteAPalindrome('baa')); // true
console.log(permuteAPalindrome('aab')); // true
console.log(permuteAPalindrome('baabcd')); // false
console.log(permuteAPalindrome('racecars')); // false

console.log(permuteAPalindrome('abcdefghba')); // false
console.log(permuteAPalindrome('')); // true
