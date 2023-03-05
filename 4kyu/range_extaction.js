/*A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
*/
// function solution(list) {
// 	let sequence = '';
// 	for (let i = 0; i < list.length; i++) {
// 		if (
// 			list[i + 1] === list[i] + 1 &&
// 			list[i + 2] === list[i + 1] + 1 &&
// 			!sequence.endsWith('-')
// 		) {
// 			sequence += `${list[i].toString()}-`;
// 		}
// 		if (list[i + 1] !== list[i] + 1) {
// 			sequence += `${list[i].toString()},`;
// 		}
// 		if (list[i] !== list[i - 1] + 1 && !sequence.includes(list[i])) {
// 			sequence += `${list[i].toString()},`;
// 		}
// 	}
// 	return sequence;
// }

// cleaner solution
function solution(list) {
	const sequence = list.map((num, i) =>
		// every number that is preceded by (num-1) and followed by (num+1) is transformed to '-'
		// must be at least a 3 number sequence
		list[i - 1] === num - 1 && list[i + 1] === num + 1 ? '-' : num
	);
	return (
		sequence
			// only show items that are not '-' or are not preceded by '-'
			// this eliminates the repetition in a sequence to only show one dash for each range
			// instead of one dash per number e.g. '7---11' changed to '7-11'
			.filter((num, i) => num !== '-' || sequence[i - 1] !== '-')
			.join(',')
			.replace(/,-,/g, '-')
	);
}

console.log(
	solution([
		-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
	])
);
// "-6,-3-1,3-5,7-11,14,15,17-20")
console.log(
	solution([
		-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
		19, 20,
	])
);
// "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
