/*
Character counts
The object is to count the number of occurances of a specified character (or set of characters) in a string.

Instructions
Complete the placeholder function characterCount.

it should return the number of times a single character appears in the string, or
if multiple characters are specified (either by providing an array or string of length 2 or more), it should return an array of character counts
see the unit tests provided for a more comprehensive definition
NOTE: The tests assume that if no arguments are provided to the function (i.e. ''.characterCount()), then the result is undefined.
*/

/**
 * Returns the number of times the given character appears in the string,
 * or if more than one character is supplied an array of character counts.
 */

// return undefined if charsToCount is a falsy value
// otherwise loop through each character in the argument
// on each iteration
// define a variable count, equal to the length of letters in the string equal to current character(might be 0)
// push count to a result array
// return first item in result if length of array is 1, or return full array if length > 1

String.prototype.characterCount = function (charsToCount) {
	if (!charsToCount) {
		return undefined;
	}
	const result = [];
	for (let i = 0; i < charsToCount.length; i++) {
		const count = this.split('').filter(
			char => char === charsToCount[i]
		).length;
		result.push(count);
	}
	return result.length > 1 ? result : result[0];
};
