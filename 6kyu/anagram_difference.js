/*
Given two words, how many letters do you have to remove from them to make them anagrams?
Example
First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10
Hints
A word is an anagram of another word if they have the same letters (usually in a different order).
Do not worry about case. All inputs will be lowercase.
*/

/*
If one of the inputs is empty, return length of longest string
Create 2 hash maps to count common letters in both strings
Start anagram as an empty string
Loop through any 1 of the 2 hash maps:
Repeat key by minimum of its value from the 2 hash maps, add this to anagram
Return difference -> (w1 length - anagram length) + (w2 length - anagram length)
*/

function anagramDifference(w1, w2) {
	if ([w1, w2].some(str => !str.length)) return Math.max(w1.length, w2.length);
	const commonChars = (s1, s2) =>
		[...s1]
			.filter(letter => s2.includes(letter))
			.reduce((obj, char) => {
				obj[char] = (obj[char] || 0) + 1;
				return obj;
			}, {});
	const [map1, map2] = [commonChars(w1, w2), commonChars(w2, w1)];
	let anagram = '';
	for (const key in map1) anagram += key.repeat(Math.min(map1[key], map2[key]));
	const difference = w1.length - anagram.length + (w2.length - anagram.length);
	return difference;
}

const testCases = [
	// w1     w2   expected
	['', '', 0],
	['a', '', 1],
	['', 'a', 1],
	['ab', 'a', 1],
	['ab', 'cd', 4],
	['aab', 'a', 2],
	['a', 'aab', 2],
	['codewars', 'hackerrank', 10],
];

for (const [w1, w2, expected] of testCases)
	console.log(anagramDifference(w1, w2) === expected);
