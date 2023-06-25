/*
Write two functions max and min which returns the maximum and minimum value of the argument passed into them respectively.

Example
max(1,2,3,4) //returns 4
max(1,2,3,['4']) //returns 4; note it returned 4 not '4'
max(1,2,[3,4]) //returns 4
max(1,2,[3,[4]]) //returns 4
max(1,2,[3,['4r']]) //returns NaN
max([[],[-4]]) // returns -4
max() or max([]) //returns 0
And so goes for min

Further Instructions
functions will take any number of arguments
Arrays of numbers can be to any depth
You can't use Math.max, Math.min, and require
If one of the arguments can not be evaluated to a number, return NaN
*/

// store flattened arguments as variable items
// return 0 if items are empty
// if one of the items can't be evaluated to a number, return NaN
// otherwise sort items and return max or min

function max() {
	const items = [...arguments].flat(Infinity);
	if (!items.length) {
		return 0;
	}
	if (items.some(el => el.toString().match(/[^-\d]/))) {
		return NaN;
	}
	const max = Number([...items].sort((a, b) => Number(b) - Number(a))[0]);
	return max;
}

function min() {
	const items = [...arguments].flat(Infinity);
	if (!items.length) {
		return 0;
	}
	if (items.some(el => el.toString().match(/[^-\d]/))) {
		return NaN;
	}
	const min = Number([...items].sort((a, b) => Number(a) - Number(b))[0]);
	return min;
}

console.log(max(1, 2, 3, 4)); //, 4);
console.log(max(1, 2, [3, 4])); //, 4);
console.log(max(1, 2, [3, [4]])); //, 4);

console.log(min(1, 2, 3, 4)); //, 1);
console.log(min([1, 2], 3, 4)); //, 1);
console.log(min(1, 2, [3, [4, 0]])); //, 0);
