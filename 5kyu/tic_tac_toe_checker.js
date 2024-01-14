/*
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
*/

/*
destructure rows, columns and diagonals from board
store them in an array 
loop through each item:
if item.join('') == '111' return 1
if item.join('') == '222' return 2
else
if a row includes 0, return -1
otherwise return 0
*/

function isSolved(board) {
	const col = (arr, i) => arr.map(row => row[i]);
	const [row1, row2, row3] = board;
	const [col1, col2, col3] = [col(board, 0), col(board, 1), col(board, 2)];
	const [diag1, diag2] = [
		[board[0][0], board[1][1], board[2][2]],
		[board[2][0], board[1][1], board[0][2]],
	];
	const items = [row1, row2, row3, col1, col2, col3, diag1, diag2];
	for (const el of items) {
		if (el.join('') === '111') return 1;
		if (el.join('') === '222') return 2;
	}
	return board.some(row => row.includes(0)) ? -1 : 0;
}

console.log(
	isSolved([
		[0, 0, 1],
		[0, 1, 2],
		[2, 1, 0],
	])
);
