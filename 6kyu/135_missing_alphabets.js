/*
Task
Given string s, which contains only letters from a to z in lowercase.

A set of alphabet is given by abcdefghijklmnopqrstuvwxyz.

2 sets of alphabets mean 2 or more alphabets.

Your task is to find the missing letter(s). You may need to output them by the order a-z. It is possible that there is more than one missing letter from more than one set of alphabet.

If the string contains all of the letters in the alphabet, return an empty string ""

Example
For s='abcdefghijklmnopqrstuvwxy'

The result should be 'z'

For s='aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyy'

The result should be 'zz'

For s='abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxy'

The result should be 'ayzz'

For s='codewars'

The result should be 'bfghijklmnpqtuvxyz'

Input/Output
[input] string s
Given string(s) contains one or more set of alphabets in lowercase.

[output] a string
Find the letters contained in each alphabet but not in the string(s). Output them by the order a-z. If missing alphabet is repeated, please repeat them like "bbccdd", not "bcdbcd"
*/

function missingAlphabets(s) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const map = {};
	let result = '';
	let maxCount = 0;
	for (const char of s) {
		map[char] = (map[char] || 0) + 1;
		maxCount = Math.max(maxCount, map[char]);
	}
	for (const char of alphabet) {
		const count = map[char] || 0;
		const diff = maxCount - count;
		if (diff > 0) result += char.repeat(diff);
	}
	return result;
}

console.log(missingAlphabets('abcdefghijklmnopqrstuvwxy')); //, 'z');

console.log(missingAlphabets('abcdefghijklmnopqrstuvwxyz')); //, '');

console.log(
	missingAlphabets('aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyy')
); //, 'zz');

console.log(
	missingAlphabets('abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxy')
); //, 'ayzz');

console.log(missingAlphabets('codewars')); //, 'bfghijklmnpqtuvxyz');
