/*
Trivial example:

sum([1,2,3]) => 6
 1 + 2 + 3 = 6
Example #1:

sum([1,2,3], [4,5,6]) => 21
 1   2   3
 +   +   +
 4   5   6
 ↓   ↓   ↓
 5 + 7 + 9 = 21
Example #2:

sum([1,2,3], [4,5,6], (a, b) => a * b)) => 32
 1    2    3
 *    *    *
 4    5    6
 ↓    ↓    ↓
 4 + 10 + 18 = 32
Example #3:

sum([1,2,3], [4,5,6], [7,8,9], (a, b, c) => a * Math.pow(b, c)) => 31030722
     1        2          3
     *        *          *
     (        (          (
     4        5          6
     ^        ^          ^
     7        8          9
     )        )          )
     ↓        ↓          ↓
 16384 + 781250 + 30233088 = 31030722
In case arrays' lengths differ, replace non-existent values with zeroes, thus:

sum([1], [10, 20, 30]) => 61
  1    0    0
  +    +    +
 10   20   30
  ↓    ↓    ↓
 11 + 20 + 30 = 61
See example tests for more.

Input will always be VALID, i.e. at least one array (probably empty) will be passed to the function.

Good luck and have fun!
*/

/*
extract arrays from ...args, use Array.isArray, find max length of an array
add ending 0s if needed so all arrays have same length
find callback if it exists, typeof callback will be 'function'

use reduce method on first array, on each iteration:
get items at current index from each array in args
if callback exists, call the function with ...items as input, add output to total
if callback is undefined, add sum of ...items to total
return total
*/

function sum(...args) {
	// find max length of an array and callback if it exists
	const max = Math.max(
		...args.filter(el => Array.isArray(el)).map(arr => arr.length)
	);
	const callback = args.find(el => typeof el === 'function');
	// add endings 0s if needed so all arrays have same length
	const items = args
		.filter(el => Array.isArray(el))
		.map(arr => {
			const newArr = [...arr];
			const diff = max - arr.length;
			for (let i = 0; i < diff; i++) newArr.push(0);
			return newArr;
		});
	// use callback or sum of items at each index to get total
	return items[0].reduce((total, _, i) => {
		const newArgs = items.map(arr => arr[i]);
		if (callback) {
			total += callback(...newArgs);
		} else {
			for (const num of newArgs) total += num;
		}
		return total;
	}, 0);
}

console.log(sum([])); // 0
console.log(sum([1, 2, 3])); // 6
console.log(sum([1, 2, 3], a => 1)); // 3
console.log(sum([1, 2, 3], a => a * a)); // 14
console.log(sum([1, 2, 3], [4, 5, 6])); // 21
console.log(sum([1, 2, 3], [4], (a, b) => a - b)); // 2
console.log(sum([1, 2, 3], [], [4], (a, b, c) => a * b * c)); // 0
console.log(sum([1, 2, 3], [4, 5, 6], [7, 8, 9])); // 45
console.log(sum([1], [10, 20, 30])); // 61
console.log(sum([1], [10, 20, 30], (a, b) => a / b)); // 0.1
