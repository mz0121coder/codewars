/*
To participate in a prize draw each one gives his/her firstname.

Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

The length of the firstname is added to the sum of these ranks hence a number som.

An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.

Example:
names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]

PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
The *weight* associated with PauL is 2 so PauL's *winning number* is 54 * 2 = 108.
Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.

Task:
parameters: st a string of firstnames, we an array of weights, n a rank

return: the firstname of the participant whose rank is n (ranks are numbered from 1)

Example:
names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]
n: 4

The function should return: "PauL"
Notes:
The weight array is at least as long as the number of names, it may be longer.

If st is empty return "No participants".

If n is greater than the number of participants then return "Not enough participants".

See Examples Test Cases for more examples.
*/

/*
define method to score a string:
method should return string's length + ranking of it's letters (ignore case)
use the method to calculate winning numbers for each string, sort from high to low
loop through winning numbers (ignore duplicates) 
on each iteration:
  find all strings with same winning number, sort them alphabetically and add them to a result array

return nth scorer:
  item at index n - 1 in flat result array
*/

const rank = (st, we, n) => {
	const strings = st.split(',');
	if (st === '') return 'No participants';
	if (n > strings.length) return 'Not enough participants';
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';

	const scoreString = str =>
		str.length +
		[...str.toLowerCase()].reduce(
			(acc, char) => acc + (alphabet.indexOf(char) + 1),
			0
		);

	const winningNumbers = strings.map(
		(str, i) => scoreString(strings[i]) * we[i]
	);

	const result = [];
	for (const num of [...new Set(winningNumbers)].sort((a, b) => b - a)) {
		const sameScorers = strings.filter((str, i) => winningNumbers[i] === num);
		result.push([...sameScorers].sort());
	}

	const nthScorer = result.flat()[n - 1];
	return nthScorer;
};

console.log(
	rank(
		'Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin',
		[4, 2, 1, 4, 3, 1, 2],
		4
	)
); // "Benjamin"
console.log(rank('Lagon,Lily', [1, 5], 2)); // "Lagon"
console.log(
	rank(
		'Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin',
		[4, 2, 1, 4, 3, 1, 2],
		8
	)
); // "Not enough participants"
console.log(rank('', [4, 2, 1, 4, 3, 1, 2], 6)); // "No participants"
