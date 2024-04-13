/*
Hit the target
This is the second part of the kata :3 🎈🎆🎇🎆🎈
given a matrix n x n (2-7), determine if the arrow is directed to the target (x).
Now there are one of 4 types of arrows ( '^', '>', 'v', '<' ) and only one target (x)
An empty spot will be denoted by a space " ", the target with a cross "x", and the scope ">"
Examples:
given matrix 4x4:
[
  [' ', 'x', ' ', ' '],
  [' ', ' ', ' ', ' '], --> return true
  [' ', '^', ' ', ' '],
  [' ', ' ', ' ', ' ']
] 
given matrix 4x4:
[
  [' ', ' ', ' ', ' '],
  [' ', 'v', ' ', ' '], --> return false
  [' ', ' ', ' ', 'x'],
  [' ', ' ', ' ', ' ']
] 
given matrix 4x4:
[
  [' ', ' ', ' ', ' '],
  ['>', ' ', ' ', 'x'], --> return true
  [' ', '', ' ', ' '],
  [' ', ' ', ' ', ' ']
] 

In this example, only a 4x4 matrix was used, the problem will have matrices of dimensions from 2 to 7
And here is the first part of this kata - click me ●v●
Happy hacking as they say! 💻
*/

/*
Find row and col of arrow in matrix:
If arrow points up: items are in same col above row of arrow
If arrow points down: items are in same col below row of arrow
If arrow points left: items are in same row, before column of arrow
If arrow points right: items are in same row, after column of arrow
Check if items include target 'x'
*/

const solution = matrix => {
	const row = matrix.findIndex(arr => /[<>\^v]/.test(arr.join('')));
	const col = matrix[row].findIndex(el => /[<>\^v]/.test(el));
	const arrow = matrix[row][col];
	let items;
	if (arrow === '^') items = matrix.slice(0, row).map(arr => arr[col]);
	if (arrow === 'v') items = matrix.slice(row + 1).map(arr => arr[col]);
	if (arrow === '<') items = matrix[row].slice(0, col);
	if (arrow === '>') items = matrix[row].slice(col + 1);
	return items.includes('x');
};

console.log(
	solution([
		['^', ' '],
		[' ', 'x'],
	])
); //, false);

console.log(
	solution([
		['>', ' '],
		[' ', 'x'],
	])
); //, false);

console.log(
	solution([
		['x', '<'],
		[' ', ' '],
	])
); //, true);

console.log(
	solution([
		[' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', 'v'],
		[' ', ' ', ' ', ' ', 'x'],
		[' ', ' ', ' ', ' ', ' '],
	])
); //, true);

console.log(
	solution([
		[' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' '],
		[' ', 'x', ' ', ' ', ' '],
		[' ', ' ', ' ', '>', ' '],
		[' ', ' ', ' ', ' ', ' '],
	])
); //, false);

console.log(
	solution([
		[' ', 'x'],
		[' ', '^'],
	])
); //, true);
