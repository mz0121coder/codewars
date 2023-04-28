/*DESCRIPTION:
Write a method that takes an array of signed integers, and returns the longest contiguous subsequence of this array that has a total sum of elements of exactly 0.

If more than one equally long subsequences have a zero sum, return the one starting at the highest index.

For example:
maxZeroSequenceLength([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11]) should return
[92, -115, 17, 2, 2, 2], because this is the longest zero-sum sequence in the array.
*/

const maxZeroSequence = function (arr) {
	const sequences = [];
	// iterate over every number in arr
	arr.forEach((num, index) => {
		let sum = 0;
		// start at index of that number
		for (let i = index; i < arr.length; i++) {
			// add up the sum of numbers from that item to rest of arr
			sum += arr[i];
			// if sum is 0, push that subsequence to sequences array
			if (sum === 0) {
				sequences.push(arr.slice(index, i + 1));
			}
		}
	});
	// sort sequences from highest to lowest length
	const result = sequences
		.sort((a, b) => b.length - a.length)
		// only show every sequence with same length as max length
		.filter((item, index, arr) => item.length === arr[0].length);
	// if sequences is empty, return []
	//  else return first item in sequences (longest sequence)
	return !sequences.length ? [] : result[result.length - 1];
};

console.log(maxZeroSequence([3, 6, 24, -92]));
console.log(maxZeroSequence([1, 2, -3, 7, 8, -16])); //,[1, 2, -3]);
console.log(
	maxZeroSequence([
		25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11,
	])
); //,[92, -115, 17, 2, 2, 2]);

// console.log(
// 	[
// 		1, 55, -11, 77, 62, 35, 21, 55, 86, 79, -61, 20, 23, -31, -52, 82, -95, -77,
// 		4, -18, 29, -5, -87, 51, 71, -53, -33, 88, -81, -81, 36, -92, 13, -92, -29,
// 		-94, -33, 31, 73, -28, 2, -46, -65, 58, -39, -6, -72, 78, -80, -38, 28, 23,
// 		46, 57, 31, 33, -2, 53,
// 	].length
// );
// console.log(
// 	[
// 		-11, 77, 62, 35, 21, 55, 86, 79, -61, 20, 23, -31, -52, 82, -95, -77, 4,
// 		-18, 29, -5, -87, 51, 71, -53, -33, 88, -81, -81, 36, -92, 13, -92, -29,
// 		-94, -33, 31, 73, -28, 2, -46, -65, 58, -39, -6, -72, 78, -80, -38, 28, 23,
// 		46, 57, 31, 33, -2, 53, 85, -29,
// 	].length
// );
