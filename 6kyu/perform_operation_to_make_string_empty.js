/*
You are given a string "string"

Perform the following operation until "string" becomes empty:

For every alphabet character from 'a' to 'z', remove the first occurrence of that character in "string" (if it exists).
Example, let initially string = "aabcbbca". We do the following operations:

Remove the underlined characters string = "(a)a(b)(c)bbca". The resulting string is string = "abbca".

Remove the underlined characters string = "(a)(b)b(c)a". The resulting string is string = "ba".

Remove the underlined characters string = "(b)(a)". The resulting string is string = "".

Return the value of the string string right before applying the last operation. In the example above, answer is "ba".
You can assume on next:

string will never be empty

string.length <= 5 * 10**5

string will contains only of lowercase English letters.
*/

/*
Time complexity O(n)
Space complexity O(n)
Optimised futher (without the sorting) for very large test cases

The last replacement will contain all characters with max count 
e.g. 'abbcczk' -> 'bc'

So just return characters with the max count, in the same order that they appear in the input string
*/

function lastNonEmptyString(str) {
	let maxCount = 0;
	const map = {};
	for (const char of str) {
		map[char] = (map[char] || 0) + 1;
		maxCount = Math.max(maxCount, map[char]);
	}
	const mostCommon = [...str].reverse().filter(char => map[char] === maxCount);
	return [...new Set(mostCommon)].reverse().join('');
}

/*
Optimised but still not ideal
Time complexity O(n log(n)) due to sorting
Space complexity O(n)
*/
function lastNonEmptyString(str) {
	let maxCount = 0;
	const map = {};
	for (const char of str) {
		map[char] = (map[char] || 0) + 1;
		maxCount = Math.max(maxCount, map[char]);
	}

	return Object.keys(map)
		.filter(key => map[key] === maxCount)
		.sort((a, b) => str.lastIndexOf(a) - str.lastIndexOf(b))
		.join('');
}

/*
Brute force solution - times out for larger inputs
Time complexity O(n^2)
Space complexity O(n)

Not optimal as worst case scenario is the while loop iterates n times, and within each iteration, the for of loop will iterate over all unique characters in the string
*/

function lastNonEmptyString(str) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let result = str;
	while (true) {
		const letters = new Set([...result]);
		if (letters.size === result.length) return result;
		for (const char of [...letters]) result = result.replace(char, '');
	}
}
