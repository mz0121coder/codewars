/*7 Wonders
7 Wonders is a board game that consists of building your city, gathering resources and fighting your neighbors.

One part of the game is also to research science in order to gain points at the end of the game. There are 3 types of science glyphs you can gather:

Compasses
Gears
Tablets
The way points are added up works as described here:

Step 1
Each distinct set of three different glyphs is worth 7 points:

1 Compass, 1 Gear and 1 Tablet    =  7 points
2 Compasses, 1 Gear and 1 Tablet  =  7 points (because it's just one disctinct set)
Note that a distinct set of three different glyphs means 1 Compass, 1 Gear and 1 Tablet. No more, no less!

Step 2
The amount of each glyph you own is squared and then summed up:

1 Compass, 1 Gear and 1 Tablet    =  1*1 + 1*1 + 1*1  =  3 points
2 Compasses, 1 Gear and 1 Tablet  =  2*2 + 1*1 + 1*1  =  6 points
Finally
The total science points is equal to the sum of the two steps:

1 Compass, 1 Gear and 1 Tablet    =  7 + 3  =  10 points
2 Compasses, 1 Gear and 1 Tablet  =  7 + 6  =  13 points
You will be given 3 inputs corresponding to the amount of each glyph you have acquired in the game. Your task is to output the final score. Take into account that you may have no glyphs at all!*/

// add up total sets (min value of 3 arguments * 7)
// add up points for each glyph (amount * amount)
// return the sum

function solve(compasses, gears, tablets) {
	const totalSets = Math.min(...arguments) * 7;
	const glyphPoints = [...arguments].reduce(
		(acc, curr) => acc + curr * curr,
		0
	);
	return totalSets + glyphPoints;
}

console.log(act(0, 0, 0, 0));
console.log(act(1, 1, 1, 10));
console.log(act(1, 1, 1, 10));
console.log(act(2, 1, 1, 13));
console.log(act(4, 2, 2, 38));
console.log(act(7, 2, 2, 71));
