/*Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
*/

// loop through each number, call it n
// nested loop
// check the current number in nested loop + n === value && i !== index(of n)
// if true, push to result
// this pushes each result twice so slice(0,2)

function twoSum(numbers, target) {
	const result = [];
	numbers.forEach((n, index) => {
		for (let i = 0; i < numbers.length; i++) {
			if (n + numbers[i] === target && i !== index) {
				result.push(index, i);
				break;
			}
		}
	});
	return result.slice(0, 2);
}

console.log(twoSum([1, 2, 3], 4)); //[0,2]
console.log(twoSum([1234, 5678, 9012], 14690)); //[1,2]
console.log(twoSum([2, 2, 3], 4)); //[0,1]
console.log(twoSum([2, 3, 1], 4)); //[1,2]
