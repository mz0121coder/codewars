/*
Task
Given an array of integers, sum consecutive even numbers and consecutive odd numbers. Repeat the process while it can be done and return the length of the final array.

Example
For arr = [2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]

The result should be 6.

[2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]  -->
         2+2+6       0+2+0     5+5+7+7       3+3+9
[2, 1,   10,    5,    2,        24,     4,   15   ] -->
                               2+24+4
[2, 1,   10,    5,             30,           15   ]
The length of final array is 6
Input/Output
[input] integer array arr

A non-empty array,

1 ≤ arr.length ≤ 1000

0 ≤ arr[i] ≤ 1000

[output] an integer

The length of the final array
*/

/*
define function to get sum of an array of digits
define arrays to store result, odds and evens

loop through arr, on each iteration:
IF NUMBER IS EVEN: 
add to evens array
add sum of odds (if odds length > 1) to result
otherwise add odds as they are
then empty the odds array
IF NUMBER IS ODD: 
add to odds array
add sum of evens (if evens length > 1) to result
otherwise add evens as they are
then empty the evens array
ON LAST ITERATION:
push even/odd sum to result if their length > 1
otherwise push evens/odds as they are

FINAL CHECK:
define boolean isConsecutive, set to false
check result and reassign isConsecutive to true if result still has consecutive odds/evens

if isConsecutive === false return result length
otherwise repeat sumGroups function on result (recursion)
*/

function sumGroups(arr) {
	//   function to sum an array of digits
	const sum = nums => nums.reduce((acc, curr) => acc + curr, 0);
	const result = [];
	const odds = [];
	const evens = [];

	for (let i = 0; i < arr.length; i++) {
		//   if number is even, add to evens array
		if (arr[i] % 2 === 0) {
			evens.push(arr[i]);
			//     add sum of odds (if more than 1) to result, then empty the odds array
			if (odds.length > 1) {
				result.push(sum(odds));
			} else {
				result.push(...odds);
			}
			odds.length = 0;
		}
		//   if number is odd, add to odds array
		if (arr[i] % 2 !== 0) {
			odds.push(arr[i]);
			//     add sum of evens (if more than 1) to result, then empty the evens array
			if (evens.length > 1) {
				result.push(sum(evens));
			} else {
				result.push(...evens);
			}
			evens.length = 0;
		}
		//  for last iteration, push the even/odd sum to result if length > 1
		if (i === arr.length - 1) {
			if (odds.length > 1) {
				result.push(sum(odds));
			} else {
				result.push(...odds);
			}
			if (evens.length > 1) {
				result.push(sum(evens));
			} else {
				result.push(...evens);
			}
		}
	}
	let isConsecutive = false;
	//   repeat the process if result still has consecutive evens/odds
	for (let i = 0; i < result.length; i++) {
		if (
			(arr[i] % 2 && arr[i + 1] % 2) ||
			(arr[i] % 2 === 0 && arr[i + 1] % 2 === 0)
		) {
			isConsecutive = true;
		}
	}
	return isConsecutive ? sumGroups(result) : result.length;
}

console.log(sumGroups([2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9])); //,6)

console.log(sumGroups([2, 1, 2, 2, 6, 5, 0, 2, 0, 3, 3, 3, 9, 2])); //,5)

console.log(sumGroups([1])); //,1)

console.log(sumGroups([2])); //,1)

console.log(sumGroups([1, 2])); //,2)

console.log(sumGroups([1, 1, 2, 2])); //,1)
