/*
Write a function that takes a single array as an argument (containing multiple strings and/or positive numbers and/or arrays), and returns one of four possible string values, depending on the ordering of the lengths of the elements in the input array:

Your function should return...

“Increasing” - if the lengths of the elements increase from left to right (although it is possible that some neighbouring elements may also be equal in length)
“Decreasing” - if the lengths of the elements decrease from left to right (although it is possible that some neighbouring elements may also be equal in length)
“Unsorted” - if the lengths of the elements fluctuate from left to right
“Constant” - if all element's lengths are the same.
Numbers and Strings should be evaluated based on the number of characters or digits used to write them.

Arrays should be evaluated based on the number of elements counted directly in the parent array (but not the number of elements contained in any sub-arrays).

Happy coding! :)
*/

function orderType(arr) {
	const lengths = arr.map(el =>
		Array.isArray(el) ? el.length : `${el}`.length
	);
	return lengths.slice(1).every((num, i) => num === lengths[i])
		? 'Constant'
		: lengths.slice(1).every((num, i) => num >= lengths[i])
		? 'Increasing'
		: lengths.slice(1).every((num, i) => num <= lengths[i])
		? 'Decreasing'
		: 'Unsorted';
}

console.log(orderType(['a', 'b', 'c'])); // "Constant"
console.log(orderType(['abcde', 'abcd', 'abc'])); // "Decreasing"
console.log(
	orderType([['yz'], ['uv', 'wx'], ['ab', 'cdef', 'g'], ['hi', 'jk', 'lmnopq']])
); // "Increasing"
console.log(orderType(['abc', 'abcde', 'c'])); // "Unsorted"
console.log(orderType([1, 'b', ['p'], 2])); // "Constant"
console.log(orderType([123, 1234, 12345, 123456])); // "Increasing"
console.log(orderType(['a', 'abc', 'abcde', 'ab'])); // "Unsorted"
console.log(
	orderType([
		[1, 2, 3, 4],
		[5, 6, 7],
		[8, 9],
	])
); // "Decreasing"
console.log(orderType([1, 2, 3, 4, 56])); // "Increasing"
console.log(
	orderType([
		['ab', 'cdef', 'g'],
		['hi', 'jk', 'lmnopq'],
		['rst', 'uv', 'wx'],
		['yz'],
	])
); // "Decreasing"
console.log(
	orderType([
		[1, 23, 456, 78910],
		['abcdef', 'ghijklmno', 'pqrstuvwxy'],
		[[1, 23, 456, 78910, ['abcdef', 'ghijklmno', 'pqrstuvwxy']], 1234],
	])
); // "Decreasing"
