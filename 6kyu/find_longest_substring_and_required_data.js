/*
We have to find the longest substring of identical characters in a very long string.

Let's see an example:

s1 = "1111aa994bbbb1111AAAAAFF?<mmMaaaaaaaaaaaaaaaaaaaaaaaaabf"
The longest substring in s1 is "aaaaaaaaaaaaaaaaaaaaaaaaa" having a length of 25, made of character, "a", with its corresponding ascii code equals to "97", and having its starting index 29 and the ending one 53.

We express the results using an array in the following order: ["97", 25, [29,53]]

The symbols '!"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~' that a string may have will be considered as noise, so they cannot be a solution even though the substring, made of one of them, is the longest of all. In other words, the allowed characters may be the uppercase or lower letters of the English alphabet or the decimal digits ('0123456789')

Let's see an example to show what happens if we have non alphanumeric symbols.

s2 = "1111aa994bbbb1111AAAAAFF????????????????????????????" The longest substring is "AAAAA" so the result for it is:

['65', 5, [17, 21]]
If there are two or more substrings with the maximum length value, it will be chosen the one that starts first, from left to right.

Make an agile code that may output an array like the one shown above when it receives a huge string.

Features of the random tests:

number of tests = 210
length of the strings up to a bit more than:
10.000.000 (python and javascript)
6.000.000 (ruby)
*/

function findLongestSubstr(s) {
	let maxLength = 1;
	let endIndex = 0;
	let char = s[0];
	let length = 1;

	for (let i = 1; i < s.length; i++) {
		if (s[i] === char && /[A-Za-z0-9]/.test(char)) {
			length++;
			if (length > maxLength) {
				maxLength = length;
				endIndex = i;
			}
		} else {
			char = s[i];
			length = 1;
		}
	}

	const ascii = `${s[endIndex].charCodeAt()}`;
	const startIndex = endIndex - maxLength + 1;
	return [ascii, maxLength, [startIndex, endIndex]];
}

const s1 = '1111aa994bbbb1111AAAAAFF?<mmMaaaaaaaaaaaaaaaaaaaaaaaaabf';
console.log(findLongestSubstr(s1)); // ['97', 25, [29, 53]]

const s2 = '1111aa994bbbb1111AAAAAFF????????????????????????????';
console.log(findLongestSubstr(s2)); // ['65', 5, [17, 21]]

const s3 = '1111aa994bbbb1111AAAAAFFcfgBBBBB';
console.log(findLongestSubstr(s3)); // ['65', 5, [17, 21]]
