/*DESCRIPTION:
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
FUNDAMENTALS*/

const orderedCount = function (text) {
	const result = [];
	[...text.split('')]
		.filter((item, index, arr) => arr.indexOf(item) === index)
		.forEach(letter => {
			let re = new RegExp(`${letter}`, 'g');
			result.push([`${letter}`, text.match(re).length]);
		});
	return result;
};

console.log(orderedCount('abracadabra'));
