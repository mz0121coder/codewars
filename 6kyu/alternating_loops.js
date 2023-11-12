/*
Write

function combine()
that combines arrays by alternatingly taking elements passed to it.

E.g

combine(['a', 'b', 'c'], [1, 2, 3]) == ['a', 1, 'b', 2, 'c', 3]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]) == ['a', 1, 'b', 2, 'c', 3, 4, 5]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]) == ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]
Arrays can have different lengths.
 */

function combine() {
	const args = [...arguments];
	const max = Math.max(...args.map(arr => arr.length));
	const newArr = [];
	for (let i = 0; i < max; i++) {
		args.forEach(arr => {
			if (arr[i]) newArr.push(arr[i]);
		});
	}
	return newArr;
}

console.log(combine(['a', 'b', 'c'], [1, 2, 3])); //, ['a', 1, 'b', 2, 'c', 3]);
console.log(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5])); //, ['a', 1, 'b', 2, 'c', 3, 4, 5]);
console.log(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8])); //, ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]);
