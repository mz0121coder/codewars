/*
You will get an odd integer n (>= 3) and your task is to draw an X. Each line is separated with \n.

Use the following characters: ■ □ For Ruby, Crystal and PHP: whitespace and o

Examples

                                     ■□□□■
            ■□■                      □■□■□
  x(3) =>   □■□             x(5) =>  □□■□□
            ■□■                      □■□■□
                                     ■□□□■
*/

function x(n) {
	let left = -1;
	let right = n;
	const shape = [];
	for (let i = 0; i < n; i++) {
		left++;
		right--;
		let row = '';
		for (let j = 0; j < n; j++) {
			row += [left, right].includes(j) ? '■' : '□';
		}
		shape.push(row);
	}
	return shape.join('\n');
}

console.log(x(3));
console.log(x(5));
console.log(x(17));
