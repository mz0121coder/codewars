/*
Funny Dots
You will get two integers n (width) and m (height) and your task is to draw the following pattern. Each line is seperated with a newline (\n)

Both integers are equal or greater than 1; no need to check for invalid parameters.

Examples

                                            +---+---+---+
             +---+                          | o | o | o |
dot(1, 1) => | o |            dot(3, 2) =>  +---+---+---+            
             +---+                          | o | o | o |
                                            +---+---+---+
*/

function dot(width, height) {
	const oddRow = `+${'---+'.repeat(width)}`;
	const grid = [oddRow];
	const evenRow = `|${' o |'.repeat(width)}`;
	for (let i = 1; i <= height; i++) {
		grid.push(evenRow, oddRow);
	}
	return grid.join('\n');
}

console.log(dot(5, 10));
