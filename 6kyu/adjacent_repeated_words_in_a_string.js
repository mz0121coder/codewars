/*
You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? For example, you've been distracted for a second. Did you notice that "the" is doubled in the first sentence of this description?

As as aS you can see, it's not easy to spot those errors, especially if words differ in case, like "as" at the beginning of this sentence.

Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other counts as one.

Examples
"dog cat"                  -->  0
"dog DOG cat"              -->  1
"apple dog cat"            -->  0
"pineapple apple dog cat"  -->  0
"apple apple dog cat"      -->  1
"apple dog apple dog cat"  -->  0
"dog dog DOG dog dog dog"  -->  1
"dog dog dog dog cat cat"  -->  2
"cat cat dog dog cat cat"  -->  3
*/

function countAdjacentPairs(searchString) {
	const adjacent = new Set();
	let section = 1;
	const words = searchString.toLowerCase().split(' ');
	for (let i = 1; i < words.length; i++) {
		const [word, last] = [words[i], words[i - 1]];
		if (word === last) {
			adjacent.add(`word-${section}`);
		} else {
			section++;
		}
	}
	return adjacent.size;
}

console.log(countAdjacentPairs(''), 0); //, "An empty string should return 0.")
console.log(countAdjacentPairs('orange Orange kiwi pineapple apple'), 1); //, "Case should be ignored. countAdjacentPairs('orange Orange kiwi pineapple apple')")
console.log(countAdjacentPairs('banana banana banana'), 1); //, "Once a word has been paired, it is ignored. countAdjacentPairs('banana banana banana')")
console.log(
	countAdjacentPairs(
		'banana banana banana terracotta banana terracotta terracotta pie!'
	),
	2
); //, "Once a word has been paired, it is ignored. Grab all pairs. countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!')")
console.log(countAdjacentPairs('pineapple apple'), 0); //, "A pineapple is not an apple. countAdjacentPairs('pineapple apple')")
