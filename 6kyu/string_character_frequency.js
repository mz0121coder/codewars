/*
In this Kata, we are going to determine if the count of each of the characters in a string can be equal if we remove a single character from that string.

For example:

solve('abba') = false -- if we remove any character, the count of each character will not be equal.
solve('abbba') = true -- if we remove one b, the count of each character becomes 2.
solve('aaaa') = true -- if we remove one character, the remaining characters have same count.
solve('wwwf') = true -- if we remove f, the remaining letters have same count.
More examples in the test cases. Empty string is not tested.

Good luck!
*/

/*
Use a map for character counts in s
Use a set for unique char counts

Store unique counts in an array called frequencies
If frequencies length is 1:
  Return true if there is 1 unique char or unique chars count equals length of s

If frequencies length is 2:
  Count occurrences of max & min frequencies
  Return true if min count is 1 and min equals 1
  OR
  max count is 1 and max - min === 1

Return false
*/

function solve(s) {
	const charCounts = {};
	const uniqueChars = new Set();

	for (const char of s) {
		charCounts[char] = (charCounts[char] || 0) + 1;
		uniqueChars.add(char);
	}

	const frequencies = [...new Set(Object.values(charCounts))];

	if (frequencies.length === 1)
		return uniqueChars.size === 1 || uniqueChars.size === s.length;

	if (frequencies.length === 2) {
		const max = Math.max(...frequencies);
		const min = Math.min(...frequencies);
		const maxCount = Object.values(charCounts).filter(n => n === max).length;
		const minCount = Object.values(charCounts).filter(n => n === min).length;
		const diff = max - min;
		return (minCount === 1 && min === 1) || (maxCount === 1 && diff === 1);
	}

	return false;
}

console.log(solve('aaaa')); // true
console.log(solve('abba')); // false
console.log(solve('abbba')); // true
console.log(solve('aabbcc')); // false
console.log(solve('aaaabb')); // false
console.log(solve('aabbccddd')); // true
console.log(solve('aabcde')); // true
console.log(solve('abcde')); // true
console.log(solve('aaabcde')); // false
console.log(solve('abbccc')); // false
