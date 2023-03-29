/*DESCRIPTION:
Given two arrays of strings, return the number of times each string of the second array appears in the first array.

Example
array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
array2 = ['abc', 'cde', 'uap']
How many times do the elements in array2 appear in array1?

'abc' appears twice in the first array (2)
'cde' appears only once (1)
'uap' does not appear in the first array (0)
Therefore, solve(array1, array2) = [2, 1, 0]

Good luck!

If you like this Kata, please try:

Word values

Non-even substrings

ALGORITHMS*/

function solve(a, b) {
	const result = [];
	b.forEach(x => result.push(a.filter(y => y === x).length));
	return result;
}

console.log(solve(['abc', 'abc', 'xyz', 'abcd', 'cde'], ['abc', 'cde', 'uap'])); //[(2, 1, 0)]

console.log(solve(['abc', 'xyz', 'abc', 'xyz', 'cde'], ['abc', 'cde', 'xyz'])); //[(2, 1, 2)]

console.log(
	solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox'])
); //[ (2, 0, 1)]

console.log(10 * (1.1 ^ (20 - 11)));
(10 * 1.1) ^ (20 - 11);

var humanYearsCatYearsDogYears = function (humanYears) {
	let catYears = 0;
	let dogYears = 0;
	let result = [0, 0, 0];
	for (let i = 1; i <= humanYears; i++) {
		if (i === 1) {
			catYears += 15;
			dogYears += 15;
		} else if (i === 2) {
			catYears += 9;
			dogYears += 9;
		} else {
			catYears += 4;
			dogYears += 4;
		}
	}
	result = [humanYears, catYears, dogYears];
	return result;
};
