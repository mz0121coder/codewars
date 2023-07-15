/*
check the following are false:
More or less than three candidates take part in the game.
A candidate did not roll the wheel or rolled it more than twice.
Scores are not valid. => each score should be a multiple of 5, less than or equal to 100
Invalid user entry (no name or no score).

find first candidate with score closest to 100 (still <= 100)
*/

function winner(candidates) {
	if (
		candidates.length === 3 &&
		candidates.every(
			item =>
				'name' in item &&
				'scores' in item &&
				[1, 2].includes(item.scores.length) &&
				item.scores.every(score => score % 5 === 0 && score <= 100)
		)
	) {
		const getDiff = person =>
			100 - person.scores.reduce((acc, curr) => acc + curr, 0);
		const winners = candidates
			.filter(item => getDiff(item) > -1)
			.sort((a, b) => getDiff(a) - getDiff(b));
		console.log(candidates);
		return winners.length > 0 ? winners[0].name : false;
	}
	return false;
}

const c1 = { name: 'Bob', scores: [10, 65] };
const c2 = { name: 'Bill', scores: [90, 5] };
const c3 = { name: 'Charlie', scores: [40, 55] };

console.log(winner([c1, c2, c3])); // "Bill"
