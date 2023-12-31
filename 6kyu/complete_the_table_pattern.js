/*
Description:
Give you two number rows , columns and a string str. Returns a rows x columns table pattern and fill in the str(each grid fill in a char, the length of str is always less than or equals to the total numbers of grids):

If rows = 4 and columns = 4, str = "Hello World!"
The pattern should be a 4x4 table like this:
+---+---+---+---+
| H | e | l | l |   From left to right
+---+---+---+---+
| o |   | W | o |   and from top to bottom
+---+---+---+---+
| r | l | d | ! |   each curr separated by "\n"
+---+---+---+---+
|   |   |   |   |
+---+---+---+---+
Some examples:
pattern(3, 3, "codewars") should return:
+---+---+---+
| c | o | d |
+---+---+---+
| e | w | a |
+---+---+---+
| r | s |   |
+---+---+---+

pattern(4, 3, "Nice pattern") should return:
+---+---+---+
| N | i | c |
+---+---+---+
| e |   | p |
+---+---+---+
| a | t | t |
+---+---+---+
| e | r | n |
+---+---+---+

pattern(3, 4, "Nice pattern") should return:
+---+---+---+---+
| N | i | c | e |
+---+---+---+---+
|   | p | a | t |
+---+---+---+---+
| t | e | r | n |
+---+---+---+---+
*/

/*
define variable: line as `+---`.repeat(columns) + '+'
start table as [line]
start idx at -1:
loop from 0 to rows - 1:
start pattern as '|'
  nested loop from 0 to cols - 1, increasing idx by 1 each time:
  if idx >= str length add '   |' to pattern
  else add ` str[i] |` to pattern
push pattern and line to table

return table.join('\n')
*/

function pattern(rows, columns, str) {
	const line = `+---`.repeat(columns) + '+';
	const table = [line];

	let idx = -1;
	for (let row = 0; row < rows; row++) {
		let pattern = '|';
		for (let col = 0; col < columns; col++) {
			idx++;
			pattern += ` ${idx < str.length ? str[idx] : ' '} |`;
		}
		table.push(pattern, line);
	}

	return table.join('\n');
}

console.log(pattern(4, 4, 'Hello World!'));

console.log(pattern(3, 3, 'codewars'));

console.log(pattern(3, 4, 'Nice pattern'));

console.log(pattern(4, 3, 'Nice pattern'));
