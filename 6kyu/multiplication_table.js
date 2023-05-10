/*Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

multiplicationTable = function (size) {
	const result = [];
	let currentMultiple = 0;
	for (let i = 1; i <= size; i++) {
		currentMultiple++;
		const currentRow = [];
		for (let x = 1; x <= size; x++) {
			currentRow.push(x * currentMultiple);
		}
		result.push(currentRow);
	}
	return result;
};

console.log(multiplicationTable(3)); //, [[1,2,3], [2,4,6], [3,6,9]]);
