/*Create a function mispelled(word1, word2):

mispelled('versed', 'xersed'); // returns true
mispelled('versed', 'applb'); // returns false
mispelled('versed', 'v5rsed'); // returns true
mispelled('1versed', 'versed'); // returns true
mispelled('versed', 'versed'); // returns true
It checks if the word2 differs from word1 by at most one character.

This can include an extra char at the end or the beginning of either of words.

In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.*/

const mispelled = (word1, word2) => {
	let test = false;
	let count = 0;
	for (let i = 0; i < word1.length; i++) {
		if (word1[i] !== word2[i]) {
			count++;
		}
	}
	if (word1.length > word2.length) {
		if (word1.slice(1) === word2) {
			test = true;
		}
	}
	if (word2.length > word1.length) {
		if (word2.slice(1) === word1) {
			test = true;
		}
	}
	return (
		word1 === word2 ||
		test === true ||
		(count < 2 && word1.length === word2.length) ||
		(count < 2 && word1.length - word2.length === 1) ||
		(count < 2 && word2.length - word1.length === 1)
	);
};

console.log(mispelled('versed', 'applb')); //false);
console.log(mispelled('versed', 'xersed')); //true);
console.log(mispelled('versed', 'v5rsed')); //true);
console.log(mispelled('1versed', 'versed')); //true);
console.log(mispelled('versed', 'versed1')); //true);
console.log(mispelled('versed', 'aversed')); //true);
console.log(mispelled('aaversed', 'versed')); //false);
console.log(mispelled('versed', 'aaversed')); //false);
