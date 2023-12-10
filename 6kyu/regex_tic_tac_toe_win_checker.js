/*
Earlier this year I was in a contest on HackerRank which included a code golf-style challenge to write a regular expression of 50 or fewer characters that could determine whether or not a tic tac toe (also known as noughts and crosses or Xs and Os) board had a winner.

I'm not going to force you to keep your regex at or under 50 characters here, or even force you to use a regex if you really don't want to (though if you really don't want to write a regex, why don't you do one of the other tic tac toe katas here instead?), but why not challenge yourself, maybe learn something, and perhaps earn some Best Practices/Clever honor points for yourself as well?

Your function will receive a string of nine "X", "O", and/or "-" characters representing the state of a tic tac toe board, for example the string

"X-OXXXO-O"
would represent the board

X-O
XXX
O-O
where player X has won by getting three in a row horizontally on the middle row.

Your function needs to return True/true/TRUE (depending on the language you're using) if either the X or the O player has won the game by getting three in a row vertically, horizontally, or diagonally; or False/false/FALSE if there is no winner.

A few more examples:

"---------" - False - no one has even made a move yet!

"XOOOXXXXO" - False - no one got three in a row here.

"OXO-XOX-O" - True - player O won by getting three in a row vertically in the third column.

Note: Occasionally one of the random boards in the Test Suite will have two three-in-a-rows instead of one or none, and this still counts as a winning board. If the two three-in-a-rows belong to the same player, this just means that the second player played so badly that the first player's fifth and final move created two three-in-a-rows. If the two three-in-a-rows belong to different players, this just means that although one player won the game, afterward (as sometimes happens in real life) the other player made their mark in another square anyway, just because even though they already lost, they feel better doing that. :-)

Have fun!
*/

function regexTicTacToeWinChecker(board) {
	const rows = [board.slice(0, 3), board.slice(3, 6), board.slice(6)];
	const cols = [
		`${board[0]}${board[3]}${board[6]}`,
		`${board[1]}${board[4]}${board[7]}`,
		`${board[2]}${board[5]}${board[8]}`,
	];
	const diag = [
		`${board[0]}${board[4]}${board[8]}`,
		`${board[2]}${board[4]}${board[6]}`,
	];

	const hasWinner = arr => arr.some(el => /^(XXX|OOO)$/.test(el));
	return hasWinner(rows) || hasWinner(cols) || hasWinner(diag);
}

const winners = [
	'XXX-O-O-O',
	'X--OOOX-X',
	'O--OO-XXX',
	'O-XOX-O-X',
	'OXOOXOXX-',
	'X-O-OOXXO',
	'XO--X-OOX',
	'X-OXOOOXX',
];

winners.forEach(el => console.log(regexTicTacToeWinChecker(el)));

const notWinners = [
	'XO-------',
	'XX-XOO---',
	'-XX-OO-O-',
	'OXO--XXO-',
	'OOXXXO---',
	'OXXX-XOO-',
	'OOXXX----',
	'XXOOXXOO-',
	'OXOXOX---',
];

notWinners.forEach(el => console.log(regexTicTacToeWinChecker(el)));
