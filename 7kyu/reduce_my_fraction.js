/*
Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]
All numerators and denominators will be positive integers.

Note: This is an introductory Kata for a series... coming soon!
*/

// without recursion
function reduce(fraction) {
	const [numerator, denominator] = fraction;
	let reducable = true;
	let divisor = numerator;
	while (reducable) {
		if (numerator % divisor === 0 && denominator % divisor === 0) {
			reducable = false;
			return [numerator / divisor, denominator / divisor];
		}
		divisor--;
	}
}

console.log(reduce([60, 20])); // [3, 1]
console.log(reduce([80, 120])); // [2, 3]
console.log(reduce([4, 2])); // [2, 1]
console.log(reduce([45, 120])); // [3, 8]
console.log(reduce([1000, 1])); // [1000, 1]
console.log(reduce([1, 1])); // [1, 1]

function shoot(x) {
	let score1 = 0;
	let score2 = 0;
	x.forEach(round => {
		const [game, bool] = round;
		const pointsPerHit = bool ? 2 : 1;
		score1 += [...game.P1].filter(char => char === 'X').length * pointsPerHit;
		score2 += [...game.P2].filter(char => char === 'X').length * pointsPerHit;
	});
	return score1 > score2
		? 'Pete Wins!'
		: score2 > score1
		? 'Phil Wins!'
		: 'Draw!';
}
