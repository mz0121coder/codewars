/*In this Kata, you will be given a string and your task will be to return the length of the longest prefix that is also a suffix. A prefix is the start of a string while the suffix is the end of a string. For instance, the prefixes of the string "abcd" are ["a","ab","abc"]. The suffixes are ["bcd", "cd", "d"]. You should not overlap the prefix and suffix.

for example:
solve("abcd") = 0, because no prefix == suffix. 
solve("abcda") = 1, because the longest prefix which == suffix is "a".
solve("abcdabc") = 3. Longest prefix which == suffix is "abc".
solve("aaaa") = 2. Longest prefix which == suffix is "aa". You should not overlap the prefix and suffix
solve("aa") = 1. You should not overlap the prefix and suffix.
solve("a") = 0. You should not overlap the prefix and suffix.
All strings will be lowercase and string lengths are 1 <= length <= 500

More examples in test cases. Good luck!*/

function solve(s) {
	let result = 0;
	for (let i = 1; i < s.length; i++) {
		const s1 = s.slice(0, i);
		if (s1.length <= s.length / 2 && s1 === s.slice(s.length - i)) {
			result = s1.length;
		}
	}
	return result;
}

console.log(solve('abcdabc')); //, 3);
console.log(solve('abcd')); //, 0);
console.log(solve('abcda')); //, 1);
console.log(solve('abcabc')); //, 3);
console.log(solve('abcabca')); //, 1);
console.log(solve('aaaa')); //, 2);
console.log(solve('aa')); //, 1);
console.log(solve('a')); //, 0);
