/*
Given a list of unique words. Find all pairs of distinct indices (i, j) in the given list so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

Examples:

["bat", "tab", "cat"] # [[0, 1], [1, 0]]
["dog", "cow", "tap", "god", "pat"] # [[0, 3], [2, 4], [3, 0], [4, 2]]
["abcd", "dcba", "lls", "s", "sssll"] # [[0, 1], [1, 0], [2, 4], [3, 2]]
Non-string inputs should be converted to strings.

Return an array of arrays containing pairs of distinct indices that form palindromes. Pairs should be returned in the order they appear in the original list.
*/

const palindromePairs = words => {
	const result = [];
	words.forEach((el, idx) => {
		for (let i = 0; i < words.length; i++) {
			if (i !== idx) {
				const str = el.toString() + words[i].toString();
				if (str.split('').reverse().join('') === str) {
					result.push([idx, i]);
				}
			}
		}
	});
	return result;
};

console.log(palindromePairs(['bat', 'tab', 'cat'])); //, [[0, 1], [1, 0]]);
console.log(palindromePairs(['dog', 'cow', 'tap', 'god', 'pat'])); //, [[0, 3], [2, 4], [3, 0], [4, 2]])
console.log(palindromePairs(['abcd', 'dcba', 'lls', 's', 'sssll'])); //, [[0, 1], [1, 0], [2, 4], [3, 2]])
