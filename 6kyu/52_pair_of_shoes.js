/*
Create two hash maps from shoes (one for left, one for right) of:
keys -> shoe sizes
values -> count
Check all sizes are present and have same count in both maps
*/

/*
Task
Yesterday you found some shoes in your room. Each shoe is described by two values:

type indicates if it's a left or a right shoe;
size is the size of the shoe.
Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

Example
For:

shoes = [[0, 21], 
         [1, 23], 
         [1, 21], 
         [0, 23]]
the output should be true;

For:

shoes = [[0, 21], 
         [1, 23], 
         [1, 21], 
         [1, 23]]
the output should be false.

Input/Output
[input] 2D integer array shoes
Array of shoes. Each shoe is given in the format [type, size], where type is either 0 or 1 for left and right respectively, and size is a positive integer.

Constraints: 2 ≤ shoes.length ≤ 50,  1 ≤ shoes[i][1] ≤ 100.

[output] a boolean value

true if it is possible to pair the shoes, false otherwise.
*/

function pairOfShoes(shoes) {
	const left = {};
	const right = {};
	for (const [side, size] of shoes) {
		if (side === 0) left[size] = (left[size] || 0) + 1;
		if (side === 1) right[size] = (right[size] || 0) + 1;
	}
	for (const size in left) {
		if (!(size in right) || right[size] !== left[size]) return false;
	}
	for (const size in right) {
		if (!(size in left) || left[size] !== right[size]) return false;
	}
	return true;
}

console.log(
	pairOfShoes([
		[0, 20],
		[0, 21],
		[1, 19],
		[1, 22],
	])
); // false
console.log(
	pairOfShoes([
		[0, 21],
		[1, 23],
		[1, 21],
		[0, 23],
	])
); // true
console.log(
	pairOfShoes([
		[0, 23],
		[1, 23],
		[1, 23],
		[0, 23],
		[0, 23],
		[0, 23],
	])
); // false
console.log(
	pairOfShoes([
		[0, 21],
		[1, 23],
		[1, 21],
		[1, 23],
	])
); // false
console.log(
	pairOfShoes([
		[0, 23],
		[1, 21],
		[1, 23],
		[0, 21],
		[1, 22],
		[0, 22],
	])
); // true
console.log(
	pairOfShoes([
		[0, 23],
		[1, 21],
		[1, 23],
		[0, 21],
	])
); // true
console.log(
	pairOfShoes([
		[0, 23],
		[1, 21],
		[1, 23],
		[0, 21],
	])
); // true
console.log(pairOfShoes([[0, 23]])); // false
console.log(
	pairOfShoes([
		[0, 23],
		[1, 23],
	])
); // true
console.log(
	pairOfShoes([
		[0, 23],
		[1, 22],
	])
); // false
