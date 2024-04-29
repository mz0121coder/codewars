/*
Based of the game counter-strike

The bomb has been planted and you are the last CT (counter-terrorist) alive

You need to defuse the bomb in time!

Task:

Given a matrix m and an integer time representing the seconds left before the bomb detonates, determine if it is possible to defuse the bomb in time. The time limit is inclusive.

In the matrix m:

"CT" represents the counter terrorist
"B" represents the bomb
"K" represents the kit
"0" represents empty space
The defuse kit may or may not be present in the matrix

You can defuse the bomb in 2 ways:

If you defuse the bomb without the defuse kit, it will cost 10 seconds
If you defuse the bomb with the defuse kit, it will cost only 5 seconds
each move the CT makes in any direction costs 1 second

the CT can move diagonally, horizontally and vertically.

Example 1

time = 14

m = 
[
  ["0", "0", "0", "0", "B"],
  ["0", "0", "0", "0", "CT"],
  ["0", "0", "0", "0", "0"],
  ["0", "K", "0", "0", "0"],
]
returns true

Explanation:

The CT moves upwards and gets to the bomb with 13 seconds left

The CT defuses the bomb without the kit which costs 10 seconds

The bomb is succesfully defused

Alternative

the CT can pickup the kit which costs 3 seconds

Then get to the bomb which costs 3 seconds

And defuse the bomb which costs 5 seconds

The bomb is succesfully defused

Example 2

time = 10

m = 
[
  ["CT", "0", "0", "0", "0", "0", "0"],
  [ "0", "0", "0", "0", "0", "0", "0"],
  [ "0", "0", "0", "0", "0", "0", "0"],
  [ "0", "0", "0", "0", "0", "0", "0"],
  [ "0", "0", "0", "0", "0", "0", "0"],
  [ "0", "0", "0", "0", "0", "0", "0"],
  [ "0", "0", "0", "0", "0", "0", "0"],
  [ "0", "0", "0", "0", "0", "0", "B"]
]
returns false

Explanation:

There is no kit present so the CT has to defuse without it

the CT takes 7 seconds to get to the bomb but there is only 10 seconds remaining

the bomb detonates!

Good luck!

Bingo bango bongo bish bash bosh.
*/

/*
Find starting x and y coordinates of CT and bomb

	start no kit time at 0
	while x or y coords are not equal for CT and bomb:
	increase/decrease both coords as needed, increment no kit time by 1
	when CT coords equal bomb coords, add 10 to no kit time

	If there is no kit: return boolean -> no kit time <= max time

	If there is a kit: 
	start kit time at 0
	reset CT coords to their starting point from map
	find coords of kit from map 
	use while loop again to adjust x and y coords of CT to reach kit, increase kit time by 1 each iteration
	when CT reaches kit, increase kit time by 5

	Return boolean -> kit time OR no kit time <= max time
*/

function bombHasBeenPlanted(map, time) {
	let ctY = map.findIndex(arr => arr.includes('CT'));
	let ctX = map[ctY].indexOf('CT');

	const bombY = map.findIndex(arr => arr.includes('B'));
	const bombX = map[bombY].indexOf('B');

	const hasKit = map.flat().includes('K');

	let noKitTime = 0;

	const adjustCoords = (y1, y2, x1, x2, timeMeasure) => {
		while (y1 !== y2 || x1 !== x2) {
			if (y1 < y2) {
				y1++;
			} else if (y1 > y2) {
				y1--;
			}
			if (x1 < x2) {
				x1++;
			} else if (x1 > x2) {
				x1--;
			}
			timeMeasure++;
		}
	};

	adjustCoords(ctY, bombY, ctX, bombX, noKitTime);
	noKitTime += 10;

	if (hasKit) {
		ctY = map.findIndex(arr => arr.includes('CT'));
		ctX = map[ctY].indexOf('CT');

		const kitY = map.findIndex(arr => arr.includes('K'));
		const kitX = map[kitY].indexOf('K');

		let kitTime = 0;
		adjustCoords(ctY, kitY, ctX, kitX, kitTime);
		kitTime += 5;

		adjustCoords(ctY, bombY, ctX, bombX, noKitTime);

		return Math.min(kitTime, noKitTime) <= time;
	} else {
		return noKitTime <= time;
	}
}

const map1 = [
	['CT', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', 'B'],
];
console.log(bombHasBeenPlanted(map1, 7)); //, false);

const map2 = [['CT', 'B', '0', '0', '0']];
console.log(bombHasBeenPlanted(map2, 9)); //, false);

const map3 = [
	['CT', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0'],
	['0', '0', '0', 'B', '0'],
	['0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0'],
];
console.log(bombHasBeenPlanted(map3, 13)); //, true);

const map4 = [
	['0', '0', '0', 'CT'],
	['0', '0', '0', '0'],
	['B', '0', '0', '0'],
];

console.log(bombHasBeenPlanted(map4, 13)); //, true);

const map5 = [
	['0', '0', '0', '0', '0', '0'],
	['CT', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', 'B'],
	['0', '0', '0', '0', '0', '0'],
	['0', '0', 'K', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0'],
];
console.log(bombHasBeenPlanted(map5, 13)); //, true);

const map6 = [
	['0', 'K', '0', 'CT'],
	['0', '0', '0', '0'],
	['0', '0', '0', '0'],
	['B', '0', '0', '0'],
];
console.log(bombHasBeenPlanted(map6, 12)); //, true)
