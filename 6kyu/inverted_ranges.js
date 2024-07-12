/*
invertedRanges([]) == [[0, 100]];
A list of ranges which cover numbers between 0 and 100 would return an empty list

invertedRanges([[0, 100]]) == [];
invertedRanges([[0, 50], [51, 100]]) == [];
A list of ranges which cover some numbers between 0 and 100 must return the ranges that aren't covered

invertedRanges([[0, 25], [51, 75]]) == [[26, 50], [76, 100]];
*/

function invertedRanges(ranges) {
	if (!ranges.length) return [[0, 100]];
	const result = [];
	let max = 0;

	ranges.forEach(([num1, num2], i) => {
		max = num2 + 1;
		if (i === 0 && num1 > 0) result.push([0, num1 - 1]);
		if (max < 100) {
			if (i === ranges.length - 1) {
				result.push([max, 100]);
			} else {
				const num3 = ranges[i + 1][0];
				if (max < num3) result.push([max, num3 - 1]);
			}
		}
	});

	return result;
}

console.log(invertedRanges([[0, 100]])); //, []
console.log(
	invertedRanges([
		[0, 50],
		[51, 100],
	])
); //, []
console.log(invertedRanges([])); //, [[0, 100]]
console.log(
	invertedRanges([
		[0, 25],
		[51, 75],
	])
); //, [[26, 50], [76, 100]]
console.log(invertedRanges([[25, 50]])); //, [[0, 24], [51, 100]]
