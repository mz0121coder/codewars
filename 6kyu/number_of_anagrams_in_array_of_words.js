/*
An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

Some examples:

There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
*/

function anagramCounter(wordsArray) {
	let anagrams = 0;
	const checkWords = (word1, word2) => {
		let str1 = word1;
		let str2 = word2;
		for (const char of str2) {
			str1 = str1.replace(char, '');
			str2 = str2.replace(char, '');
		}
		return str1 === '' && str2 === '';
	};

	wordsArray.forEach((word, idx, arr) => {
		const otherWords = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
		for (const str of otherWords) {
			if (checkWords(word, str)) anagrams += 0.5;
		}
	});
	return anagrams;
}

console.log(anagramCounter(['dell', 'ledl', 'abc', 'cba'])); // , 2, "This should be 2");
console.log(anagramCounter(['dell', 'ledl', 'lled', 'cba'])); // , 3, "This should be 3");
console.log(
	anagramCounter(['dell', 'ledl', 'abc', 'cba', 'bca', 'bac', 'cab'])
); // , 11, "This should be 11");
