/*
Given a name, turn that name into a perfect square matrix (nested array with the amount of arrays equivalent to the length of each array).

You will need to add periods (.) to the end of the name if necessary, to turn it into a matrix.

If the name has a length of 0, return "name must be at least one letter"

Examples
"Bill" ==> [ ["B", "i"],
             ["l", "l"] ]

"Frank" ==> [ ["F", "r", "a"],
              ["n", "k", "."],
              [".", ".", "."] ]
*/

const matrixfy = str => {
	if (str.length === 0) return 'name must be at least one letter';
	let rowLength = 0;
	while (rowLength * rowLength < str.length) {
		rowLength++;
	}
	const matrix = [];
	for (let i = 0; i < rowLength * rowLength; i += rowLength) {
		let section = str.slice(i, i + rowLength);
		section += '.'.repeat(rowLength - section.length);
		matrix.push(section.split(''));
	}
	return matrix;
};

console.log(matrixfy('Franklin'));
