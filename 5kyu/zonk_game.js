/*
Zonk is addictive dice game. In each round player rolls 6 dice. Then (s)he composes combinations from them. Each combination gives certain points.

Then player can take one or more dice combinations to his hand and re-roll remaining dice or save his score. Dice in player's hand won't be taken into account in subsequent rolls.

If no combinations can be composed - situation is called "zonk". Player thrown zonk loses all points in this round and next player moves. So it's player decision when to reroll and when to stop and save his score.

Your task is simple - just evaluate current roll and return maximum number of points can be scored from it. If no combinations can be made - function must return string "Zonk" (without quotes).

There are different variations of Zonk. In this kata, we will use most common table of combinations:

Combination	Example roll	Points
Straight (1,2,3,4,5 and 6)	6 3 1 2 5 4	1000 points
Three pairs of any dice	2 2 4 4 1 1	750 points
Three of 1	1 4 1 1	1000 points
Three of 2	2 3 4 2 2	200 points
Three of 3	3 4 3 6 3 2	300 points
Three of 4	4 4 4	400 points
Three of 5	2 5 5 5 4	500 points
Three of 6	6 6 2 6	600 points
Four of a kind	1 1 1 1 4 6	2 × Three-of-a-kind score (in example, 2000 pts)
Five of a kind	5 5 5 4 5 5	3 × Three-of-a-kind score (in example, 1500 pts)
Six of a kind	4 4 4 4 4 4	4 × Three-of-a-kind score (in example, 1600 pts)
Every 1	4 3 1 2 2	100 points
Every 5	5 2 6	50 points
Each die cannot be used in multiple combinations the same time, so three pairs of 2, 3 and 5 will worth you only 750 points (for three pairs), not 850 (for three pairs and two fives). But you can select multiple combinations, 2 2 2 1 6 will worth you 300 points (200 for three-of-kind '2' plus 100 for single '1' die)

Examples:
  getScore([1,2,3]); // returns 100 = points from one 1
  getScore([3,4,1,1,5]); // returns 250 = points from two 1 and one 5
  getScore([2,3,2,3,3,2]); // returns 500 = three of 2 + three of 3
  getScore([1,1,1,1,1,5]); // returns 3050 = five 1 + one 5
  getScore([2,3,4,3,6,6]); // returns "Zonk" = no combinations here
  getScore([2,2,6,6,2,2]); // returns 400 = four 2, this cannot be scored as three pairs
  getScore([1,3,4,3,4,1]); // returns 750 = three pairs
  getScore([3,3,3,3]); // returns 600 = four of 3
  getScore([1,2,3,4,5]); // returns 150 = it's not straight
Of course, in real Zonk game it's sometimes not worth to collect all combination from roll. Taking less dice and rerolling more remaining may be better, but task is just to calculate maximum possible score from current single roll.

P.S. Inspired by this kata: https://www.codewars.com/kata/5270d0d18625160ada0000e4
*/

// make a string copy of dice rolls (sorted from low to high)
// return 1000 for straight 1 to 6
// return 750 for 3 pairs of any dice
// otherwise for numbers 1 to 6:
// check if rolls includes the number
// depending on how many times the number appears in the string
// add the correct amount to a score variable (use the table)
// return score

function getScore(dice) {
	//   string copy of dice rolls (sorted from low to high)
	const rolls = [...dice].sort((a, b) => a - b).join('');
	// straight 1 to 6
	if (rolls === '123456') {
		return 1000;
	}
	//   three pairs of any dice
	else if (
		rolls.length === 6 &&
		[...new Set(rolls.split(''))].every(
			n => rolls.match(new RegExp(n, 'g')).length === 2
		)
	) {
		return 750;
	} else {
		let score = 0;
		// score for all other combinations
		if (rolls.includes('1')) {
			switch (rolls.match(/1/g).length) {
				case 1:
					score += 100;
					break;
				case 2:
					score += 200;
					break;
				case 3:
					score += 1000;
					break;
				case 4:
					score += 2000;
					break;
				case 5:
					score += 3000;
					break;
				case 6:
					score += 4000;
			}
		}

		if (rolls.includes('2')) {
			switch (rolls.match(/2/g).length) {
				case 1:
					score += 0;
					break;
				case 2:
					score += 0;
					break;
				case 3:
					score += 200;
					break;
				case 4:
					score += 400;
					break;
				case 5:
					score += 600;
					break;
				case 6:
					score += 800;
			}
		}

		if (rolls.includes('3')) {
			switch (rolls.match(/3/g).length) {
				case 1:
					score += 0;
					break;
				case 2:
					score += 0;
					break;
				case 3:
					score += 300;
					break;
				case 4:
					score += 600;
					break;
				case 5:
					score += 900;
					break;
				case 6:
					score += 1200;
			}
		}

		if (rolls.includes('4')) {
			switch (rolls.match(/4/g).length) {
				case 1:
					score += 0;
					break;
				case 2:
					score += 0;
					break;
				case 3:
					score += 400;
					break;
				case 4:
					score += 800;
					break;
				case 5:
					score += 1200;
					break;
				case 6:
					score += 1600;
			}
		}

		if (rolls.includes('5')) {
			switch (rolls.match(/5/g).length) {
				case 1:
					score += 50;
					break;
				case 2:
					score += 100;
					break;
				case 3:
					score += 500;
					break;
				case 4:
					score += 1000;
					break;
				case 5:
					score += 1500;
					break;
				case 6:
					score += 2000;
			}
		}

		if (rolls.includes('6')) {
			switch (rolls.match(/6/g).length) {
				case 1:
					score += 0;
					break;
				case 2:
					score += 0;
					break;
				case 3:
					score += 600;
					break;
				case 4:
					score += 1200;
					break;
				case 5:
					score += 1800;
					break;
				case 6:
					score += 2400;
			}
		}
		return score > 0 ? score : 'Zonk';
	}
}

console.log(getScore([1])); // 100
console.log(getScore([2])); // Zonk
console.log(getScore([3])); // Zonk
console.log(getScore([4])); // Zonk
console.log(getScore([5])); // 50
console.log(getScore([6])); // Zonk

console.log(getScore([1, 1])); //, 200);
console.log(getScore([1, 1, 1])); //, 1000);
console.log(getScore([2, 2, 3, 3, 6, 6])); //, 750);
console.log(getScore([1, 2, 3, 4, 5, 6])); //, 1000);
console.log(getScore([3, 2, 6, 4, 4, 6])); //, "Zonk");
