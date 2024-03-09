/*
Late last night in the Tanner household, ALF was repairing his spaceship so he might get back to Melmac. Unfortunately for him, he forgot to put on the parking brake, and the spaceship took off during repair. Now it's hovering in space.

ALF has the technology to bring the spaceship home if he can lock on to its location.

Given a map:

..........
..........
..........
.......X..
..........
..........
The map will be given in the form of a string with \n separating new lines. The bottom left of the map is [0, 0]. X is ALF's spaceship.

In this example:

findSpaceship(map) => [7, 2]
If you cannot find the spaceship, the result should be

"Spaceship lost forever."
*/

/*
If a row in map contains X:
return [col, row]
else return message
*/

function findSpaceship(map) {
	const grid = map?.split('\n').reverse();
	const row = grid?.findIndex(arr => arr.includes('X'));
	if (row > -1) {
		const col = grid[row]?.indexOf('X');
		return [col, row];
	}
	return 'Spaceship lost forever.';
}

console.log(
	findSpaceship('..........\n..........\n.......X..\n..........\n..........')
); //, [7, 2])
console.log(findSpaceship('.......\nX.......')); //, [0, 0])
console.log(
	findSpaceship('........................'),
	'Spaceship lost forever.'
);
console.log(findSpaceship(), 'Spaceship lost forever.');
console.log(findSpaceship('X')); //, [0, 0])
