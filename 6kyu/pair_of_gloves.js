/*
Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/

function numberOfPairs(gloves) {
	// get count for any glove in the array
	const gloveCount = item =>
		gloves.join('').match(new RegExp(`${item}`, 'g')).length;
	// get all gloves that appear at least twice
	const totalPairs = [...new Set(gloves)]
		.filter(glove => gloveCount(glove) >= 2)
		// pairs for each valid glove, round down
		.map(x => Math.floor(gloveCount(x) / 2))
		// sum of pairs
		.reduce((acc, curr) => acc + curr, 0);
	return totalPairs;
}

console.log(numberOfPairs(['red', 'red'])); // 1
console.log(numberOfPairs(['red', 'green', 'blue'])); // 0
console.log(
	numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black'])
); // 3
