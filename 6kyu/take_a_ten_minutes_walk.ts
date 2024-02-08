/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/

/*
X, Y, and time all start at 0
Loop through walk array, for each item: 
Update values based and increase time by 1

Check if X and Y are 0 and time is 10
*/

export function isValidWalk(walk: string[]) {
	let y = 0;
	let x = 0;
	let time = 0;
	for (const el of walk) {
		if (el === 's') y--;
		if (el === 'n') y++;
		if (el === 'w') x--;
		if (el === 'e') x++;
		time++;
	}
	return y === 0 && x === 0 && time === 10;
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); //, true);
console.log(
	isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])
); //, false);
console.log(isValidWalk(['w'])); //, false);
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); //, false);
