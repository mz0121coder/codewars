/*
Getting the Minimum Absolute Difference
Task
Given an array arr = a1,a2,a3,a4, ... aN and consider the absolute difference between two elements as the absolute value of ai - aj, where i != j for any elements in arr.

Find the minimum absolute difference (MAD) between any two elements in arr.

Example
For arr = [-10,0,-3,1]

The MAD is 1.

Explanation:
``` |0-10| = 10 |-3-(-10)| = 7 |1-10| = 9 |-10-0| = 10 |-3-0| = 3 |1-0| = 1 |-10-(-3)| = 7 |0-3| = 3 |1-3| = 2 |-10-(-3)| = 7 |0-3| = 3 |1-3| = 2 |-10-1)| = 11 |0-1| = 1 |-3-1| = 4 ``` The minimum value is `1`.
Note that the same value can appear more than once in arr. In that case, the MAD will be 0.

Also, each array has at least two elements and its contains only integers. You can consider the arr as a valid one and do not need to validate it.
*/

/*
PLAN 
let min = Infinity
loop through arr, on each iteration:
loop through other items
get absolute difference between arr[i] and each other item
if diff === 0 return 0
if diff < min, min = diff
return min
*/

function getting_mad(arr) {
	let min = Infinity;
	for (let i = 0; i < arr.length; i++) {
		const newArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
		for (let j = 0; j < newArr.length; j++) {
			const diff = Math.abs(arr[i] - newArr[j]);
			if (diff < min) {
				min = diff;
			}
			if (min === 0) {
				return min;
			}
		}
	}
	return min;
}

console.log(getting_mad([-69, -808, 828, 57]));
