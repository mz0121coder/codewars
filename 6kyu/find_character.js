/*When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

Description:
Give you a character matrix. Find out the character which has the smallest amount.

Arguments:

matrix: A string that contains some letters. Each row is separated by "\n".
Results & Note:

Returns the characters which has smallest amount, using string format.
If more than one characters are found, sort them according to the order A-Za-z0-9.
You can assume that there are at least two characters in the matrix.
Please ignore the "\n" ;-)
Some Examples
matrix=
00000000
0000O000
00000000
00000000
00000000
findCharacters(matrix) === "O"


matrix=
mmmmmmmmmmmmm
mmmmmmmmmmmmm
mmmmmmmmmmmmm
mmmmmmmmmnmmm
findCharacters(matrix) === "n"

matrix=
AAAAAAAAAAA
AABBBBBBBBB
BCCCCCCCCDD
DDDDEEEEFFF
findCharacters(matrix) === "F"

matrix=
AAAAA
ABBBB
BCCCC
DDDDE
EEEEF
FFFFF
findCharacters(matrix) === "CD"
*/

// find characters with smallest amount/frequency
// ignore \n
// sort them according to the order
// A-Za-z0-9

function findCharacters(matrix) {
	const findFrequency = item => matrix.match(new RegExp(`${item}`, 'g')).length;
	const uniqueLetters = [...new Set(matrix.split(''))].filter(
		el => el !== '\n'
	);
	const lowestAmount = Math.min(
		...uniqueLetters.map(letter => findFrequency(letter))
	);
	const result = uniqueLetters
		.filter(el => findFrequency(el) === lowestAmount)
		.sort()
		.join('');
	return result.replace(/(\d+)([A-Z]+)/i, '$2$1');
}

let matrix = `00000000
0000O000
00000000
00000000
00000000`;
console.log(findCharacters(matrix)); //, 'O');

matrix = `mmmmmmmmmmmmm
mmmmmmmmmmmmm
mmmmmmmmmmmmm
mmmmmmmmmnmmm`;
console.log(findCharacters(matrix)); //, 'n');

matrix = `AAAAAAAAAAA
AABBBBBBBBB
BCCCCCCCCDD
DDDDEEEEFFF`;
console.log(findCharacters(matrix)); //, 'F');

matrix = `AAAAA
ABBBB
BCCCC
DDDDE
EEEEF
FFFFF`;
console.log(findCharacters(matrix)); //, 'CD');
matrix = `3v652
1uwyt
v254v
t54tv
x45yx
s7x45
5402v
2x3xw
5w22v`;
console.log(findCharacters(matrix)); //, 'su0167');
