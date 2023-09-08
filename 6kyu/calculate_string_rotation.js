/*
Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.

For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.

If the second string isn't a valid rotation of the first string, the method returns -1.
Examples:
"coffee", "eecoff" => 2
"eecoff", "coffee" => 4
"moose", "Moose" => -1
"isn't", "'tisn" => 2
"Esham", "Esham" => 0
"dog", "god" => -1
*/

function shiftedDiff(first, second) {
	let str = first;
	if (str === second) return 0;
	for (let count = 1; count <= str.length; count++) {
		str = str.slice(-1) + str.slice(0, -1);
		if (str === second) return count;
	}
	return -1;
}

console.log(shiftedDiff('eecoff', 'coffee')); //, 4);
console.log(shiftedDiff('Moose', 'moose')); //, -1);
console.log(shiftedDiff("isn't", "'tisn")); //, 2);
console.log(shiftedDiff('Esham', 'Esham')); //, 0);
console.log(shiftedDiff(' ', ' ')); //, 0);
console.log(shiftedDiff('hoop', 'pooh')); //, -1);
console.log(shiftedDiff('  ', ' ')); //, -1);
