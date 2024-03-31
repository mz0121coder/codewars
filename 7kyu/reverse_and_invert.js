/*
Reverse and invert all integer values in a given list.

reverse_invert([1,12,'a',3.4,87,99.9,-42,50,5.6]) = [-1,-21,-78,24,-5]
Remove all types other than integer.
*/

function reverseInvert(array) {
	const result = [];
	const format = num => {
		const reversed = `${num}`.replace(/\d+/, digits =>
			[...digits].reverse().join('')
		);
		return Number(reversed) * -1;
	};
	for (const item of array) {
		if (typeof item === 'number' && item % 1 === 0) result.push(format(item));
	}
	return result;
}

console.log(reverseInvert([1, 2, 3, 4, 5])); //, [-1,-2,-3,-4,-5]);
console.log(reverseInvert([-10])); //, [1]);
console.log(reverseInvert([-9, -18, 99])); //, [9,81,-99]);
console.log(
	reverseInvert([1, 12, 'a', 3.4, 87, 99.9, -42, 50, 5.6]),
	[-1, -21, -78, 24, -5]
);
console.log(reverseInvert([])); //, []);
