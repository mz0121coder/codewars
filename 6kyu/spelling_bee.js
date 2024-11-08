/*
How many bees are in the beehive?
bees can be facing UP, DOWN, LEFT, or RIGHT
bees can share parts of other bees
Examples
Ex1

bee.bee     
.e..e..
.b..eeb
Answer: 5

Ex2

bee.bee     
e.e.e.e
eeb.eeb
Answer: 8

Notes
The hive may be empty or null/None/nil/...
Python: the hive is passed as a list of lists (not a list of strings)
*/

const howManyBees = hive => {
	let bees = 0;
	const regex = /(bee|eeb)/;
	hive?.forEach((_, row) => {
		for (let col = 0; col < hive[row].length; col++) {
			if (hive[row][col] === 'b') {
				//         check vertical matches - upwards
				if (
					row > 1 &&
					regex.test(hive[row][col] + hive[row - 1][col] + hive[row - 2][col])
				)
					bees++;
				//         check vertical matches - downwards
				if (
					hive.length > 2 &&
					row < hive.length - 2 &&
					regex.test(hive[row][col] + hive[row + 1][col] + hive[row + 2][col])
				)
					bees++;
				//         check matches to left
				if (
					hive[row].length > 2 &&
					col > 1 &&
					regex.test(hive[row].slice(col - 2, col + 1).join(''))
				)
					bees++;
				//         check matches to right
				if (
					hive[row].length > 2 &&
					col < hive[row].length - 2 &&
					regex.test(hive[row].slice(col, col + 3).join(''))
				)
					bees++;
			}
		}
	});
	return bees;
};

const hive1 = ['bee.bee'.split(''), '.e..e..'.split(''), '.b..eeb'.split('')];
const hive2 = ['bee.bee'.split(''), 'e.e.e.e'.split(''), 'eeb.eeb'.split('')];

console.log(howManyBees(hive1));
console.log(howManyBees(hive2));
