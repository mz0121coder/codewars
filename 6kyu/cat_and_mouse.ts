/*
You will be given a string(x) featuring a cat 'C', a dog 'D' and a mouse 'm'.The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from its current position. The cat can jump at most (j) characters, and cannot jump over the dog.

So:

if j = 5:

..C.....m...D returns 'Caught!' <-- not more than j characters between the cat and the mouse

.....C............m......D returns 'Escaped!' <-- as there are more than j characters between the two, the cat cannot jump far enough

if j = 10:

...m.........C...D returns 'Caught!' <-- Cat can jump far enough and jump is not over dog

...m....D....C....... returns 'Protected!' <-- Cat can jump far enough, but dog is in the way, protecting the mouse

Finally, if not all three animals are present, return 'boring without all three'
*/

export function catMouse(x: string, j: number): string {
	if (['C', 'D', 'm'].some(char => !x.includes(char)))
		return 'boring without all three';

	const catIndex = x.indexOf('C');
	const mouseIndex = x.indexOf('m');
	let count = 0;
	let isProtected = false;

	if (mouseIndex > catIndex) {
		for (let i = catIndex + 1; i < mouseIndex; i++) {
			count++;
			if (count >= j) return 'Escaped!';
			if (x[i] === 'D') isProtected = true;
		}
	} else {
		for (let i = catIndex - 1; i > mouseIndex; i--) {
			count++;
			if (count >= j) return 'Escaped!';
			if (x[i] === 'D') isProtected = true;
		}
	}

	return isProtected ? 'Protected!' : 'Caught!';
}

console.log(catMouse('..D.....Cm', 13));
console.log(catMouse('............C.............D..m...', 8));
console.log(catMouse('m.C...', 5));
