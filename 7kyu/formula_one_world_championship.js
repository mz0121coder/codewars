/*
Situation
It's the final few races of the Formula One race season!!! The season has been hard fought, but who can still win mathematically win the World Championship?

Arguments
You are provided with two pieces of data as arguments. The first argument is an object containing a list of drivers and their current individuals points scored so far this season. Example below:

{
  "Hamilton": 200,
  "Bottas": 180,
  "Raikkonen": 210
}
The second argument is the number of race remaining in the season. Number of races remaining will always be 7 or fewer, but greater than 0.

Task
Your task is to find out who can still mathematically win the championship (no matter how unlikely in reality). In Formula One a driver scores 25 points for a win. Drivers score 0 points if they do not complete the race or finish lower than 10th. Points for other placings are irrelevant to this kata.

Return the drivers who can mathematically still win the championship in a string of the following format:

If one driver has an unassailable lead return "X has already won the championship!"

If multiple drivers can win the championship, return "X, Y and Z can still win the championship.". Drivers should be returned in alphabetical order.

Note
This kata does not assess the potential for tied scores at the end of the season. If a driver can theoretically only tie with other drivers at the top of the championship table, he should be considered a possible winner of the championship.
*/

/*
calculate current max score
calculate points needed for each racer to win
divide points by 25
if points / 25 <= races remaining or racer already has max score:
add racer to winners

sort winners
return correct result
*/

function canStillWin(table, racesRemaining) {
	const winners = [];
	const maxScore = Math.max(...Object.values(table));

	for (const racer in table) {
		const score = table[racer];
		const pointsNeeded = maxScore - score;
		if (pointsNeeded === 0) {
			winners.push(racer);
		} else {
			const racesToWin = pointsNeeded / 25;
			if (racesToWin <= racesRemaining) winners.push(racer);
		}
	}

	winners.sort();
	return winners.length === 1
		? `${winners[0]} has already won the championship!`
		: `${winners.slice(0, -1).join(', ')} and ${
				winners[winners.length - 1]
		  } can still win the championship.`;
}

console.log(
	canStillWin(
		{
			Hamilton: 300,
			Vettel: 275,
			Bottas: 310,
			Raikkonen: 260,
			Verstappen: 175,
			Ocon: 300,
		},
		4
	)
); //, "Bottas, Hamilton, Ocon, Raikkonen and Vettel can still win the championship.");
console.log(
	canStillWin(
		{
			Hamilton: 375,
			Vettel: 375,
			Bottas: 426,
			Raikkonen: 212,
			Verstappen: 191,
		},
		2
	)
); //, "Bottas has already won the championship!");
console.log(
	canStillWin({ Hamilton: 125, Vettel: 174, Bottas: 95, Raikkonen: 190 }, 7)
); //, "Bottas, Hamilton, Raikkonen and Vettel can still win the championship.");
console.log(canStillWin({ Hamilton: 300, Vettel: 275 }, 1)); //, "Hamilton and Vettel can still win the championship.");
