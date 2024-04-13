/*
Make me a window. I'll give you a number (N). You return a window.

Rules:

The window will always be 2 x 2.

The window needs to have N number of periods across and N number of periods vertically in each pane.

Example:

N = 3

---------
|...|...|
|...|...|
|...|...|
|---+---|
|...|...|
|...|...|
|...|...|
---------
Note: there should be no trailing new line characters at the end.
*/

function makeAWindow(num) {
	const middleRow = `|${'-'.repeat(num)}+${'-'.repeat(num)}|`;
	const window = [];
	for (let i = 0; i < num; i++) {
		window.push(`|${'.'.repeat(num)}|${'.'.repeat(num)}|`);
	}
	window.push(middleRow);
	window.push(...window.slice(0, -1));
	const outerRow = '-'.repeat(window[0].length);
	window.unshift(outerRow);
	window.push(outerRow);
	return window.join('\n');
}

console.log(makeAWindow(3)); //, "---------\n|...|...|\n|...|...|\n|...|...|\n|---+---|\n|...|...|\n|...|...|\n|...|...|\n---------");
