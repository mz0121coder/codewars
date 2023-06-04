/*Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true
Arguments consist of only lowercase letters.
*/

// check if first letter is a vowel or consonant
// if vowel, all letters with even index should also be vowels, all letters with odd index should be consonants
// switch the order if first letter is a consonant
// loop through each letter in word
// add even/odd letters to an array for vowels & consonants, depending on the order
// check every item in vowels array is a vowel
// check every item in consonants array is a consonant

function isAlt(word) {
	const vowels = [];
	const consonants = [];
	const isVowel = str => 'aeiou'.includes(str);

	for (let i = 0; i < word.length; i++) {
		if (i % 2 === 0) {
			if (isVowel(word[0])) {
				vowels.push(word[i]);
			} else {
				consonants.push(word[i]);
			}
		} else {
			if (isVowel(word[0])) {
				consonants.push(word[i]);
			} else {
				vowels.push(word[i]);
			}
		}
	}

	return (
		vowels.every(item => isVowel(item)) &&
		consonants.every(item => !isVowel(item))
	);
}

console.log(isAlt('amazon')); // true
console.log(isAlt('apple')); // false
console.log(isAlt('banana')); // false
