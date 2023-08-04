/*
In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

For example: 
solve("abc") = True, because it contains a,b,c
solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
solve("dabc") = True, because it contains a, b, c, d
solve("abbc") = False, because b does not occur once.
solve("v") = True
All inputs will be lowercase letters.

More examples in test cases. Good luck!
*/

// function solve(s) {
// 	const indexes = s
// 		.split('')
// 		.sort()
// 		.map(char => 'abcdefghijklmnopqrstuvwxyz'.indexOf(char));
// 	return (
// 		indexes.length === 1 ||
// 		indexes.slice(1).every((num, i) => num === indexes[i] + 1)
// 	);
// }

const solve = s =>
	'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''));

console.log(solve('abc')); //,true);
console.log(solve('abd')); //,false);
console.log(solve('dabc')); //,true);
console.log(solve('abbc')); //,false);
