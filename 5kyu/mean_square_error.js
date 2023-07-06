/*
Complete the function that

accepts two integer arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values
and returns the average of those squared absolute value difference between each member pair.
Examples
[1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
[10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
[-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2
*/

// define sum variable as 0
// loop through each number in firstArray
// define variable diff, equal to absolute difference between number and secondArray number at same index
// square diff and add to result
// return sum divided by length of firstArray

const solution = function (firstArray, secondArray) {
	let sum = 0;
	firstArray.forEach((num, i) => {
		const diff = Math.abs(num - secondArray[i]);
		sum += diff * diff;
	});
	return sum / firstArray.length;
};

console.log(solution([1, 2, 3], [4, 5, 6])); //, 9)
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2])); //, 16.5)
console.log(solution([0, -1], [-1, 0])); //, 1)
