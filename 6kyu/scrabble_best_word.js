/*
You're playing to scrabble. But counting points is hard.

You decide to create a little script to calculate the best possible value.

The function takes two arguments :

`points` : an array of integer representing for each letters from A to Z the points that it pays
`words` : an array of strings, uppercase

You must return the index of the shortest word which realize the highest score.
If the length and the score are the same for two elements, return the index of the first one.
*/

/*
define method to return score for a string
start max score at 0
start best word as ''
start index as -1
loop through words:
call method on each word, if current score > max score:
reassign max score, best word and index
if current score == max score and word length < best word length:
reassign best word and index
*/

function getBestWord(points, words) {
	let maxScore = 0;
	let bestWord = 0;
	let index = -1;

	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const getScore = str =>
		[...str].reduce((score, char) => {
			score += points[alphabet.indexOf(char.toUpperCase())];
			return score;
		}, 0);

	words.forEach((word, i) => {
		const currScore = getScore(word);
		if (currScore > maxScore) {
			maxScore = currScore;
			bestWord = word;
			index = i;
		}
		if (currScore === maxScore && word.length < bestWord.length) {
			bestWord = word;
			index = i;
		}
	});

	return index;
}

const points = [
	1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10, 10, 10,
	10,
];
const simpleWords = ['WHO', 'IS', 'THE', 'BEST', 'OF', 'US'];
const rndmWords = [
	'NOQ',
	'TXAY',
	'S',
	'OM',
	'ESFT',
	'CJUKQ',
	'QL',
	'QO',
	'ASTK',
	'Y',
];
const firstBestWord = ['JGPCWVWFW', 'JXHNKBJJG'];

console.log(getBestWord(points, simpleWords)); // 0
console.log(getBestWord(points, rndmWords)); // 5
console.log(getBestWord(points, firstBestWord)); // 0
