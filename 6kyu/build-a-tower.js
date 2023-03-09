/*Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {
	const tower = [];
	let count = -1;
	// spacing on each side, increase by 1 for each floor
	let spaceCount = nFloors;
	let space = ' ';
	// decrease bricks by 2 for each floor
	let brick = '*';
	for (let i = 0; i < nFloors; i++) {
		count += 2;
		spaceCount--;
		tower.push(
			`${space.repeat(spaceCount)}${brick.repeat(count)}${space.repeat(
				spaceCount
			)}`
		);
	}
	return tower;
}

console.log(towerBuilder(6));

/* 
[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/
