/*
Do you have in mind the good old TicTacToe?

Assuming that you get all the data in one array, you put a space around each value, | as a columns separator and multiple - as rows separator, with something like ["O", "X", " ", " ", "X", " ", "X", "O", " "] you should be returning this structure (inclusive of new lines):

 O | X |   
-----------
   | X |   
-----------
 X | O |   
Now, to spice up things a bit, we are going to expand our board well beyond a trivial 3 x 3 square and we will accept rectangles of big sizes, still all as a long linear array.

For example, for "O", "X", " ", " ", "X", " ", "X", "O", " ", "O"] (same as above, just one extra "O") and knowing that the length of each row is 5, you will be returning

 O | X |   |   | X 
-------------------
   | X | O |   | O 
And worry not about missing elements, as the array/list/vector length is always going to be a multiple of the width.
*/

function displayBoard(board, width) {
	const table = [];
	for (let i = 0; i < board.length; i += width) {
		const row = board
			.slice(i, i + width)
			.map(el => ` ${el} `)
			.join(`|`);
		table.push(row);
	}
	return table.join('\n' + '-'.repeat(table[0].length) + '\n');
}

console.log(displayBoard(['O', 'X', 'X', 'O'], 2)); //," O | X \n-------\n X | O ");
console.log(displayBoard(['O', 'X', ' ', ' ', 'X', ' ', 'X', 'O', ' '], 3)); //," O | X |   \n-----------\n   | X |   \n-----------\n X | O |   ");
console.log(
	displayBoard(['O', 'X', ' ', ' ', 'X', ' ', 'X', 'O', ' ', 'O'], 5)
); //," O | X |   |   | X \n-------------------\n   | X | O |   | O ");
console.log(
	displayBoard(['O', 'X', ' ', ' ', 'X', ' ', 'X', 'O', ' ', 'O'], 2)
); //," O | X \n-------\n   |   \n-------\n X |   \n-------\n X | O \n-------\n   | O ");
console.log(
	displayBoard(
		[
			'1',
			'2',
			'3',
			'4',
			'5',
			'1',
			'2',
			'3',
			'4',
			'5',
			'1',
			'2',
			'3',
			'4',
			'5',
			'1',
			'2',
			'3',
			'4',
			'5',
			'1',
			'2',
			'3',
			'4',
			'5',
			'1',
			'2',
			'3',
			'4',
			'5',
			'1',
			'2',
			'3',
			'4',
			'5',
			'1',
		],
		6
	)
); //," 1 | 2 | 3 | 4 | 5 | 1 \n-----------------------\n 2 | 3 | 4 | 5 | 1 | 2 \n-----------------------\n 3 | 4 | 5 | 1 | 2 | 3 \n-----------------------\n 4 | 5 | 1 | 2 | 3 | 4 \n-----------------------\n 5 | 1 | 2 | 3 | 4 | 5 \n-----------------------\n 1 | 2 | 3 | 4 | 5 | 1 ");
