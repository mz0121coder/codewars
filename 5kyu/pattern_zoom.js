/*
Task
Complete the pattern, using the special characters ■   □
In this kata, let's us draw a square, with a zoom effect.
Rules
parameter n: The side length of the square, always be a positive odd number.
return a string square that ■ and □ alternate expansion and each line is separated by \n.
Example
zoom(1)

  ■

zoom(3)

□□□
□■□
□□□

zoom(5)

■■■■■
■□□□■
■□■□■
■□□□■
■■■■■

zoom(7)

□□□□□□□
□■■■■■□
□■□□□■□
□■□■□■□
□■□□□■□
□■■■■■□
□□□□□□□

zoom(9)

■■■■■■■■■
■□□□□□□□■
■□■■■■■□■
■□■□□□■□■
■□■□■□■□■
■□■□□□■□■
■□■■■■■□■
■□□□□□□□■
■■■■■■■■■

zoom(25)

■■■■■■■■■■■■■■■■■■■■■■■■■
■□□□□□□□□□□□□□□□□□□□□□□□■
■□■■■■■■■■■■■■■■■■■■■■■□■
■□■□□□□□□□□□□□□□□□□□□□■□■
■□■□■■■■■■■■■■■■■■■■■□■□■
■□■□■□□□□□□□□□□□□□□□■□■□■
■□■□■□■■■■■■■■■■■■■□■□■□■
■□■□■□■□□□□□□□□□□□■□■□■□■
■□■□■□■□■■■■■■■■■□■□■□■□■
■□■□■□■□■□□□□□□□■□■□■□■□■
■□■□■□■□■□■■■■■□■□■□■□■□■
■□■□■□■□■□■□□□■□■□■□■□■□■
■□■□■□■□■□■□■□■□■□■□■□■□■
■□■□■□■□■□■□□□■□■□■□■□■□■
■□■□■□■□■□■■■■■□■□■□■□■□■
■□■□■□■□■□□□□□□□■□■□■□■□■
■□■□■□■□■■■■■■■■■□■□■□■□■
■□■□■□■□□□□□□□□□□□■□■□■□■
■□■□■□■■■■■■■■■■■■■□■□■□■
■□■□■□□□□□□□□□□□□□□□■□■□■
■□■□■■■■■■■■■■■■■■■■■□■□■
■□■□□□□□□□□□□□□□□□□□□□■□■
■□■■■■■■■■■■■■■■■■■■■■■□■
■□□□□□□□□□□□□□□□□□□□□□□□■
■■■■■■■■■■■■■■■■■■■■■■■■■
*/

function zoom(n) {
	const str = '■□';
	const result = [];
	// index from str of middle squares on each row
	let middleIdx = -1;
	let rows = -1;
	let count = -1;
	while (result.length < n) {
		count++;
		middleIdx++;
		// index of outer squares
		let outerIdx = middleIdx;
		rows += 2;
		//     current row with middle squares
		const currentRow = str[middleIdx % 2].repeat(rows).split('');
		while (currentRow.length < n) {
			outerIdx++;
			currentRow.push(str[outerIdx % 2]);
			currentRow.unshift(str[outerIdx % 2]);
		}
		if (count === 0) {
			// only add middle row on first iteration
			result.push(currentRow.join(''));
		} else {
			// add row above and below middle on other rounds
			result.push(currentRow.join(''));
			result.unshift(currentRow.join(''));
		}
	}
	return result.join('\n');
}

console.log(zoom(5));
console.log(zoom(11));
console.log(zoom(25));
