/*
Description
Your task is to take arrays of numbers and compress them into ranges.

The numbers in the array are mostly consecutive. If you convert them as ranges, it will save a lot of space. You should write a function that will convert an array of numbers into a string. A range, or series of consecutive numbers, will be represented as two numbers separated by an underscore, a range of one just by the number its self and multiple ranges separated by commas.

For example,
The numbers 5, 6, 7, 8 and 9 would be displayed as "5_9"
The number 6 would just be "6"
The numbers 3,4,5,6,9 would be "3_6,9"

Using the above system, you should write two functions:
toRange - convert an array of numbers to a range string
toArray - convert a range string back to an array

Warnings
The numbers could arrive all jumbled up so you'll need to sort them Sometimes the same number may appear more than once, duplicates should be discarded.

Edge cases
An empty array should become an empty string if passed to toRange and vise versa for the toArray function. Also, ranges of 2 digits will take the same space whether they are represented as a sequence or a range. I.e. "5,6,8,9".length === "5_6,8_9".length so there will be no compression, but represent them as a range anyway for consistency.

Good luck!
*/

export function toRange(arr: number[]): string {
	if (!arr.length) return '';
	if (arr.length === 1) return `${arr[0]}`;

	const sorted: number[] = [...arr].sort((a, b) => a - b);
	const digits: number[] = [...new Set(sorted)];
	const ranges: string[] = [];
	let rangeStart = digits[0];
	let count = 1;
	for (let i = 1; i < digits.length; i++) {
		if (digits[i] === digits[i - 1] + 1) {
			count++;
			if (i === digits.length - 1) ranges.push(`${rangeStart}_${digits[i]}`);
		} else {
			ranges.push(
				count > 1 ? `${rangeStart}_${digits[i - 1]}` : `${rangeStart}`
			);
			if (i === digits.length - 1) ranges.push(`${digits[i]}`);
			rangeStart = digits[i];
			count = 1;
		}
	}
	return ranges.join(',');
}

export function toArray(str: string): number[] {
	if (!str.length) return [];

	const arr: number[] = [];
	str.split(',').forEach(el => {
		if (el.includes('_')) {
			const [start, end] = el.split('_').map(s => Number(s));
			for (let n = start; n <= end; n++) arr.push(n);
		} else {
			arr.push(Number(el));
		}
	});
	return arr;
}

console.log(toRange([3, 4, 5, 6, 9]));
console.log(toArray('3_6,9'));
