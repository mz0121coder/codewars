/*Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

*/
function findLongest(array) {
	return array
		.sort((a, b) => a.toString().length - b.toString().length)
		.filter(
			(el, i, arr) =>
				el.toString().length === arr[arr.length - 1].toString().length
		)[0];
}

console.log(findLongest([1, 10, 100])); //, 100)
console.log(findLongest([9000, 8, 800])); //, 9000)
console.log(findLongest([8, 900, 500])); //, 900)

const reverseNumber = n =>
	(n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('');
