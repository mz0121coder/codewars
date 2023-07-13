/*
Variation of this nice kata, the war has expanded and become dirtier and meaner; both even and odd numbers will fight with their pointy 1s. And negative integers are coming into play as well, with, ça va sans dire, a negative contribution (think of them as spies or saboteurs).

A number's strength is determined by the number of set bits (1s) in its binary representation. Negative integers work against their own side so their strength is negative. For example -5 = -101 has strength -2 and +5 = +101 has strength +2.

The side with the largest cumulated strength wins.

Again, three possible outcomes: odds win, evens win and tie.

Examples:

bitsWar([1,5,12]) => "odds win" //1+101 vs 1100, 3 vs 2
bitsWar([7,-3,20]) => "evens win" //111-11 vs 10100, 3-2 vs 2
bitsWar([7,-3,-2,6]) => "tie" //111-11 vs -1+110, 3-2 vs -1+2
*/

// if array is empty return 'tie'
// define variables for odds, evens and their scores
// loop through odds and evens
// add their scores (number of 1s in binary rep, negative for < 0)
// return winner or tie

function bitsWar(numbers) {
	if (!numbers.length) {
		return 'tie';
	}
	const evens = numbers.filter(n => n % 2 === 0);
	const odds = numbers.filter(n => n % 2);

	const getScore = arr =>
		arr
			.map(n => {
				const str = n.toString(2);
				const score = str.includes('1') ? str.match(/1/g).length : 0;
				return str[0] === '-' ? score * -1 : score;
			})
			.reduce((acc, curr) => acc + curr, 0);

	const evenScore = getScore(evens);
	const oddScore = getScore(odds);
	console.log({ numbers, evenScore, oddScore });

	return evenScore > oddScore
		? 'evens win'
		: oddScore > evenScore
		? 'odds win'
		: 'tie';
}

console.log(bitsWar([1, 5, 12])); //, "odds win");
console.log(bitsWar([7, -3, 20])); //, "evens win");
console.log(bitsWar([7, -3, -2, 6])); //, "tie");
console.log(bitsWar([-3, -5])); //, "evens win");
console.log(bitsWar([])); //, "tie");
