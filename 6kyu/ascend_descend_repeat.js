/*
You are given three integer inputs: length, minimum, and maximum.

Return a string that:

Starts at minimum
Ascends one at a time until reaching the maximum, then
Descends one at a time until reaching the minimum
repeat until the string is the appropriate length
Examples:

 length: 5, minimum: 1, maximum: 3   ==>  "12321"
 length: 14, minimum: 0, maximum: 2  ==>  "01210121012101"
 length: 11, minimum: 5, maximum: 9  ==>  "56789876567"
Notes:

length will always be non-negative
negative numbers can appear for minimum and maximum values
hyphens/dashes ("-") for negative numbers do count towards the length
the resulting string must be truncated to the exact length provided
return an empty string if maximum < minimum or length == 0
minimum and maximum can equal one another and result in a single number repeated for the length of the string
*/

/*
return string that repeats minimum (length times) if min === max
return "" if max === min or length < 1

loop from min to max, pushing to a result array
loop from max - 1 to min + 1, push to result array
slice result from start to second last item, join as string, repeat length times, slice this from index 0 to length
*/

function ascendDescend(length, minimum, maximum) {
	if (minimum === maximum) {
		return minimum.toString().repeat(length);
	}
	if (maximum < minimum || length < 1) {
		return '';
	}
	const result = [];
	for (let i = minimum; i <= maximum; i++) {
		result.push(i);
	}
	for (let j = maximum - 1; j >= minimum; j--) {
		result.push(j);
	}
	return result.slice(0, -1).join('').repeat(length).slice(0, length);
}

console.log(ascendDescend(5, 1, 3)); // "12321");
console.log(ascendDescend(14, 0, 2)); // "01210121012101");
console.log(ascendDescend(11, 5, 9)); // "56789876567");
