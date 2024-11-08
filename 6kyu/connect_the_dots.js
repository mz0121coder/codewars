/*
Kata Task
Connect the dots in order to make a picture!

Notes
There are 2-26 dots labelled a b c ...
Make lines to connect the dots a -> b, b -> c, etc
The line char is *
Use only straight lines - vertical, horizontal, or diagonals of a square
The paper is rectangular - \n terminates every line
All input is valid
Examples
Input	Expected
 
 a       b 
          
            
 d       c 
 
          
 *********
         *
         *
 *********
 
Input	Expected
 
    a
   e
      
 d     b
  
         
    c
 
     
    *
   * *
  *   *
 *     *
  *   *
   * *
    *
*/

function connectTheDots(paper) {
	const grid = paper.split('\n');
	const coords = {};
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[row].length; col++) {
			if (/[a-z]/.test(grid[row][col])) {
				coords[grid[row][col]] = [row, col];
				grid[row] = grid[row].slice(0, col) + '*' + grid[row].slice(col + 1);
			}
		}
	}
	let [row, col] = coords.a;
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	for (let i = 1; i < alphabet.length; i++) {
		if (alphabet[i] in coords) {
			const [targetRow, targetCol] = coords[alphabet[i]];
			while (row !== targetRow || col !== targetCol) {
				if (row < targetRow) row++;
				if (row > targetRow) row--;
				if (col < targetCol) col++;
				if (col > targetCol) col--;
				grid[row] = grid[row].slice(0, col) + '*' + grid[row].slice(col + 1);
			}
		} else {
			break;
		}
	}
	return grid.join('\n');
}

const input1 =
	'           \n' +
	' a       b \n' +
	' e         \n' +
	'           \n' +
	' d       c \n' +
	'           \n';

console.log(connectTheDots(input1));

const input2 =
	'           \n' +
	'     a     \n' +
	'    e      \n' +
	'           \n' +
	'  d     b  \n' +
	'           \n' +
	'           \n' +
	'     c     \n' +
	'           \n';

console.log(connectTheDots(input2));
