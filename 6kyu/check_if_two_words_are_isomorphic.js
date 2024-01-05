/*
Two strings a and b are called isomorphic if there is a one to one mapping possible for every character of a to every character of b. And all occurrences of every character in a map to same character in b.

Task
In this kata you will create a function that return True if two given strings are isomorphic to each other, and False otherwise. Remember that order is important.

Your solution must be able to handle words with more than 10 characters.

Example
True:

CBAABC DEFFED
XXX YYY
RAMBUNCTIOUSLY THERMODYNAMICS
False:

AB CC
XXY XYY
ABAB CD
*/

/*
if a.length !== b.length return false
create an object to map characters in a and b
loop through b, on each iteration:
if char isn't a key in the object, add it as a key
if a[i] is already a value for another key, return false
otherwise set a[i] as value for current key, 
add a[i] to result string

check if result === a
*/

function isomorph(a, b) {
	if (a.length !== b.length) return false;
	let str = '';
	const map = {};
	for (let i = 0; i < b.length; i++) {
		if (!(b[i] in map)) {
			if (Object.values(map).some(val => val === a[i])) return false;
			map[b[i]] = a[i];
		}
		str += map[b[i]];
	}
	return str === a;
}

console.log(isomorph('ESTATE', 'DUELED')); //, true)
console.log(isomorph('XXX', 'YYY')); //, true)

console.log(isomorph('SEE', 'SAW')); //, false)
console.log(isomorph('XXY', 'XYY')); //, false)

console.log(isomorph('abcdefghijk', 'abcdefghijba')); //, false);
