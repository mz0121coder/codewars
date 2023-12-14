/*
Task:
Complete the function piecesValue/pieces_value that accepts two arguments, an 8x8 array (arr),representing a chess board and a string (s). Depending on the value of the string s (which can be either "white" or "black") calculate the value of the pieces on the table for the corresponding player(white or black).
Empty fields will be marked as a space " " while the fields with pieces look like this:

"w-king"   //meaning white king
"b-bishop" //a black bishop
"w-pawn"   //white pawn
...and so on. Preloaded for you there is an object called hash (values in python):

const hash = Object.freeze({
  queen: 9, rook: 5, bishop: 3, knight: 3, pawn: 1
});
Having the estimated value of each piece. This is a rough estimation and the real piece value depends on other factors in game as well ,such as the game being a closed or open one, which can favor either knights or bishops. (If you are interested more about that here: open vs closed game.) But for our purposes we will use the mentioned values.
Note: the value of a king cannot be estimated because without it the game would be over, so DO NOT take into consideration the value of the king.You will not be tested for invalid input.
Example case:
piecesValue([[' ',' ',' ',' ',' ',' ',' ',' '],
             [' ',' ','b-queen',' ',' ',' ',' ','w-queen'],
             [' ','b-king',' ',' ','w-rook',' ',' ',' '],
             [' ',' ',' ',' ',' ',' ',' ',' '],
             [' ',' ',' ',' ',' ',' ',' ',' '],
             ['w-king',' ',' ',' ',' ',' ',' ',' '],
             [' ',' ',' ',' ',' ',' ',' ',' '],
             [' ',' ',' ',' ',' ',' ',' ',' ']], 
             'white');
//should be 14 since white has a queen and a rook 
//while the same table would return 9 for 'black'

piecesValue([[' ',' ',' ',' ',' ',' ',' ',' '],
             [' ',' ','b-queen',' ',' ',' ',' ','w-queen'],
             [' ','b-king',' ','b-pawn','w-rook',' ',' ',' '],
             [' ',' ',' ',' ','w-pawn',' ',' ',' '],
             [' ',' ',' ',' ',' ','w-bishop',' ',' '],
             ['w-king',' ',' ',' ',' ',' ',' ',' '],
             [' ',' ',' ','b-pawn',' ',' ',' ',' '],
             [' ',' ',' ',' ',' ',' ',' ',' ']],
             'white');
//should return 18 for 'white' (queen, rook, pawn, bishop)
//and 11 in case s is 'black'(queen, pawn, pawn)
Happy coding warrior!
*/
/*
define method to get score for a row
loop through array, calling method on each row
add points to a total score
return score
*/

const hash = Object.freeze({
	queen: 9,
	rook: 5,
	bishop: 3,
	knight: 3,
	pawn: 1,
});

function piecesValue(arr, s) {
	const getScore = array =>
		array.reduce((acc, curr) => {
			const [colour, piece] = curr.split('-');
			const points = piece !== 'king' && colour === s[0] ? hash[piece] : 0;
			return acc + points;
		}, 0);

	let score = 0;
	arr.forEach(row => (score += getScore(row)));
	return score;
}

const r1 = [
	['b-bishop', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', 'b-queen', ' ', ' ', ' ', ' ', 'w-queen'],
	[' ', 'b-king', ' ', 'b-pawn', 'w-rook', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', 'w-pawn', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', 'w-bishop', ' ', ' '],
	['w-king', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', 'b-pawn', 'b-pawn', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];
const r2 = [
	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', 'b-king', ' ', ' '],
	[' ', 'b-knight', ' ', ' ', 'w-pawn', ' ', ' ', ' '],
	[' ', ' ', 'w-bishop', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', 'w-pawn', ' ', ' ', ' ', 'w-pawn', ' ', ' '],
	[' ', ' ', ' ', ' ', 'b-pawn', ' ', ' ', ' '],
	[' ', 'w-rook', ' ', ' ', ' ', 'w-king', ' ', ' '],
];
const r3 = [
	[' ', ' ', ' ', ' ', 'b-king', ' ', ' ', ' '],
	[' ', 'b-bishop', ' ', ' ', 'b-pawn', 'b-pawn', ' ', ' '],
	[' ', ' ', ' ', ' ', 'b-knight', ' ', ' ', ' '],
	[' ', ' ', 'w-queen', ' ', ' ', ' ', ' ', ' '],
	[' ', 'w-bishop', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' ', 'b-rook'],
	[' ', 'w-pawn', 'w-pawn', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', 'w-king', ' ', ' ', ' ', ' ', ' '],
];

console.log(piecesValue(r1, 'white')); //, 18);
console.log(piecesValue(r1, 'black')); //, 15);
console.log(piecesValue(r2, 'white')); //, 11);
console.log(piecesValue(r2, 'black')); //, 4);
console.log(piecesValue(r3, 'white')); //, 14);
console.log(piecesValue(r3, 'black')); //, 13);
