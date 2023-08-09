/*
The pepe market is on the verge of collapse. In a last ditch attempt to make some quick cash, you decide to sift through the thousands of pepes on the Internet in order to identify the rarest, which are worth more. Since this would be tedious to do by hand, you decide to use your programming skills to streamline the process.

Your task in this kata is to implement a function that, given a list of pepes (pepes))//, returns the rarest pepe in the list. If two or more pepes are equally rare, return a list of these pepes, sorted in alphabetical order. Also, if the rarest pepe (or pepes) has a frequency of 5 or more, then it is not really a rare pepe, so your function should return 'No rare pepes!'.
*/

function findRarestPepe(pepes) {
	const items = {};
	pepes.forEach(el => {
		if (el in items) {
			items[el]++;
		} else {
			items[el] = 1;
		}
	});
	const min = Math.min(...Object.values(items));
	let result = Object.keys(items).filter(key => items[key] === min);
	result = result.length > 1 ? result.sort() : result[0];
	return min > 4 ? 'No rare pepes!' : result;
}

const pepes1 = [
	'Go Pepe',
	'Deep Learning Pepe',
	'Machine Learning Pepe',
	'Machine Learning Pepe',
	'Machine Learning Pepe',
];
console.log(findRarestPepe(pepes1)); //, ['Deep Learning Pepe', 'Go Pepe']);
const pepes2 = [
	'Codewars Pepe',
	'Codewars Pepe',
	'Codewars Pepe',
	'Codewars Pepe',
	'Codewars Pepe',
];
console.log(findRarestPepe(pepes2)); //, 'No rare pepes!');
