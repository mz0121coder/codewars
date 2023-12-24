/*
#Detail

Countdown is a British game show with number and word puzzles. The letters round consists of the contestant picking 9 shuffled letters - either picking from the vowel pile or the consonant pile. The contestants are given 30 seconds to try to come up with the longest English word they can think of with the available letters - letters can not be used more than once unless there is another of the same character.

#Task

Given an uppercase 9 letter string, letters, find the longest word that can be made with some or all of the letters. The preloaded array words (or $words in Ruby) contains a bunch of uppercase words that you will have to loop through. Only return the longest word; if there is more than one, return the words of the same lengths in alphabetical order. If there are no words that can be made from the letters given, return None/nil/null.

##Examples

letters = "ZZZZZZZZZ"
longest word = None

letters = "POVMERKIA", 
longest word = ["VAMPIRE"]

letters = "DVAVPALEM"
longest word = ["VAMPED", "VALVED", "PALMED"]
*/

/*
define helper method that takes in letters param and a word, 
and checks if the word can be made from the letters given

loop through given words, use helper method to check valid words,
and add them to an array, reassign max length to longest word length

if array is empty return null,
or return valid words with max length
*/

function longestWord(letters) {
	const checkWord = (letters, word) => {
		let str1 = letters;
		let str2 = word;
		for (const char of word) {
			str1 = str1.replace(char, '');
			str2 = str2.replace(char, '');
		}
		return str2 === '' && str1.length === letters.length - word.length;
	};

	const items = [];
	let maxLen = -1;
	for (const word of words) {
		if (checkWord(letters, word)) {
			items.push(word);
			if (word.length > maxLen) maxLen = word.length;
		}
	}

	return !items.length ? null : items.filter(word => word.length === maxLen);
}
