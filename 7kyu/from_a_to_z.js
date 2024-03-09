/*
Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
Note that if the range is given in capital letters, return the string in capitals also!

Examples
"a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
"h-o" ➞ "hijklmno"
"Q-Z" ➞ "QRSTUVWXYZ"
"J-J" ➞ "J"
Notes
A hyphen will separate the two letters in the string.
You don't need to worry about error handling in this kata (i.e. both letters will be the same case and the second letter will not be before the first alphabetically).
*/

function gimmeTheLetters(sp) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const [start, end] = [alphabet.indexOf(sp[0]), alphabet.indexOf(sp[2])];
	return alphabet.slice(start, end + 1);
}

console.log(gimmeTheLetters('J-J')); //, 'J', `'J-J'`)
console.log(gimmeTheLetters('Z-Z')); //, 'Z', `'Z-Z'`)
console.log(gimmeTheLetters('a-a')); //, 'a', `'a-a'`)
console.log(gimmeTheLetters('a-b')); //, 'ab', `'a-b'`)
console.log(gimmeTheLetters('y-z')); //, 'yz', `'y-z'`)
console.log(gimmeTheLetters('H-I')); //, 'HI', `'H-I'`)
console.log(gimmeTheLetters('g-i')); //, 'ghi', `'g-i'`)
console.log(gimmeTheLetters('W-Y')); //, 'WXY', `'W-Y'`)
console.log(gimmeTheLetters('Q-Z')); //, 'QRSTUVWXYZ',       `'Q-Z'`)
console.log(gimmeTheLetters('F-O')); //, 'FGHIJKLMNO',       `'F-O'`)
console.log(gimmeTheLetters('C-R')); //, 'CDEFGHIJKLMNOPQR', `'C-R'`)
console.log(gimmeTheLetters('h-o')); //, 'hijklmno',          `'h-o'`)
console.log(gimmeTheLetters('e-k')); //, 'efghijk',           `'e-k'`)
console.log(gimmeTheLetters('a-q')); //, 'abcdefghijklmnopq', `'a-q'`)
console.log(gimmeTheLetters('a-z')); //, 'abcdefghijklmnopqrstuvwxyz', `'a-z'`)
console.log(gimmeTheLetters('A-Z')); //, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', `'A-Z'`)
