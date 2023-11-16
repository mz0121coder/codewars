/*
Write Number in Expanded Form - Part 2
This is version 2 of my 'Write Number in Exanded Form' Kata.

You will be given a number and you will need to return it as a string in expanded form :

expanded form illustration

For example:

expanded_from(807.304); // Should return "800 + 7 + 3/10 + 4/1000"
expanded_from(1.24); // should return "1 + 2/10 + 4/100"
expanded_from(7.304); // should return "7 + 3/10 + 4/1000"
expanded_from(0.04); // should return "4/100"
 */

/*
extract whole numbers and fractions
for whole numbers above 0, increase zeros (right to left) and add to whole array
for fractions, decrease fraction (left to right) and add to fractions array
join them with ' + '
*/

function expandedForm(num) {
	const [wholeNumbers, fractions] = num.toString().split('.');
	const wholeArr = [];
	const fractionsArr = [];

	let zeros = -1;
	for (let i = wholeNumbers.length - 1; i >= 0; i--) {
		const digit = Number(wholeNumbers[i]);
		zeros++;
		if (digit > 0) wholeArr.unshift(`${digit}${'0'.repeat(zeros)}`);
	}

	let fraction = 1;
	for (const digit of fractions) {
		fraction *= 10;
		if (Number(digit > 0)) fractionsArr.push(`${digit}/${fraction}`);
	}

	return [...wholeArr, ...fractionsArr].join(' + ');
}

console.log(expandedForm(807.304)); //, '800 + 7 + 3/10 + 4/1000');
console.log(expandedForm(1.24)); //, '1 + 2/10 + 4/100');
console.log(expandedForm(4.28)); //, '4 + 2/10 + 8/100');
console.log(expandedForm(7.304)); //, '7 + 3/10 + 4/1000');
