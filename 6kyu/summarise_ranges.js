/*
Given a sorted array of numbers, return the summary of its ranges.

Examples
summaryRanges([1, 2, 3, 4]) === ["1->4"]
summaryRanges([1, 1, 1, 1, 1]) === ["1"]
summaryRanges([0, 1, 2, 5, 6, 9]) === ["0->2", "5->6", "9"]
summaryRanges([0, 1, 2, 3, 3, 3, 4, 5, 6, 7]) === ["0->7"]
summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10]) === ["0->7", "9->10"]
summaryRanges([-2,0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12]) ===["-2", "0->7", "9->10", "12"]
*/

/*
Start result as empty array, and range as array with first number
Define helper method that adds formatted range as string to result

Iterate through nums:
  lastNum is last number in range array
  add current number to range if it equals lastNum + 1
  else 
  call addRange helper method and reassign range to array with current number only
*/

function summaryRanges(nums) {
	const result = [];
	let range = [nums[0]];

	const addRange = () =>
		result.push(
			range.length > 1
				? `${range[0]}->${range[range.length - 1]}`
				: `${range[range.length - 1]}`
		);

	nums.forEach((num, i) => {
		const lastNum = range[range.length - 1];
		if (num === lastNum + 1) range.push(num);
		if (num > lastNum + 1) {
			addRange();
			range = [num];
		}
		if (i === nums.length - 1) addRange();
	});

	return [...new Set(result)];
}

console.log(summaryRanges([])); // []
console.log(summaryRanges([1, 1, 1, 1])); // ['1']
console.log(summaryRanges([1, 2, 3, 4])); // ['1->4']
console.log(summaryRanges([0, 1, 2, 5, 6, 9])); // ["0->2", "5->6", "9"]
console.log(summaryRanges([0, 1, 2, 3, 3, 3, 4, 5, 6, 7])); // ["0->7"]
console.log(summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7])); // ["0->7"]
console.log(summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10])); //  ["0->7","9->10"]
console.log(
	summaryRanges([-2, 0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12])
); // ["-2", "0->7", "9->10", "12"]
