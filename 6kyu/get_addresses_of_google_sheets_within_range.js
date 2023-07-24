/*
get first and last cell
if first cell is after last cell, return []
if first cell === last cell, return []

get index of first and last letter and their digits
loop from start digit to end digit
on each iteration:
nested loop from first letter index to last letter index
push `${letter}${digit}` to a result array
return result
*/

function getCellAddresses(range) {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const [start, end] = range.split(':');
	const startIndex = alphabet.indexOf(start[0]);
	const endIndex = alphabet.indexOf(end[0]);
	const startDigit = Number(start.match(/\d+/)[0]);
	const endDigit = Number(end.match(/\d+/)[0]);
	if (startIndex > endIndex || start === end) {
		return [];
	}
	const result = [];
	for (let i = startDigit; i <= endDigit; i++) {
		for (let j = startIndex; j <= endIndex; j++) {
			const cell = `${alphabet[j]}${i}`.replace('-', '');
			result.push(cell);
		}
	}
	return result;
}

console.log(getCellAddresses('G8:X31'));
