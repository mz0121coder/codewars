/*DESCRIPTION:
You have a string that consists of zeroes and ones. Now choose any two adjacent positions in the string: if one of them is 0))//, and the other one is 1))//, remove these two digits from the string.

Return the length of the resulting (smallest) string that you can get after applying this operation multiple times?

Note: after each operation))//, the remaining digits are separated by spaces and thus not adjacent anymore - see the examples below.

Examples
For "01010" the result should be 1:

"01010"  -->  "  010"  -->  "    0"
For "110100" the result should be 2:

"110100"  -->  "1  100"  -->  "1    0"
Input/Output
[input] string s
The initial string.

[output] an integer
The minimum length of the string that may remain after applying the described operations as many times as possible.
*/

function zeroAndOne(s) {
	const arr = [s];
	for (let i = 1; i < Infinity; i++) {
		if (arr[i - 1].match(/10|01/)) {
			arr.push(arr[i - 1].replace(/01|10/)); //, ' '));
		} else {
			return arr[arr.length - 1].match(/\d/g)?.length ?? 0;
		}
	}
}

console.log(zeroAndOne('01010')); //, 1);
console.log(zeroAndOne('11101111')); //, 6);
console.log(zeroAndOne('01')); //, 0);
console.log(zeroAndOne('10')); //, 0);
console.log(zeroAndOne('110110')); //, 2);
console.log(zeroAndOne('110100')); //, 2);
