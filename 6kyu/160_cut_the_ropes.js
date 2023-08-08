/*Task
You are given N ropes, where the length of each rope is a positive integer. At each step, you have to reduce all the ropes by the length of the smallest rope.

The step will be repeated until no ropes are left. Given the length of N ropes, print the number of ropes that are left before each step.

Example
For a = [3, 3, 2, 9, 7], the result should be [5, 4, 2, 1]

 You have 5 ropes:                           3 3 2 9 7   ( 5 left) step 1:          1 1 0 7 5   ( 4 left) step 2:          0 0 0 6 4   ( 2 left) step 3:          0 0 0 0 2   ( 1 left) step 4:          0 0 0 0 0     Hence the result is [5, 4, 2, 1]

Input/Output
[input] integer array a
length of each rope.

3 <= a.length <= 2000

1 <= a[i] <= 100

[output] an integer array
number of ropes before each step.*/

function cutTheRopes(a) {
	let ropes = [...a];
	const result = [];
	while (ropes.length >= 1) {
		result.push(ropes.length);
		const min = Math.min(...ropes);
		ropes = ropes.filter(num => num !== min);
	}
	console.log({ ropes, result });
	return result;
}

console.log(cutTheRopes([3, 3, 2, 9, 7])); //,[5, 4, 2, 1])

console.log(cutTheRopes([1, 2, 3, 4, 3, 3, 2, 1])); //,[8, 6, 4, 1])

console.log(
	cutTheRopes([13035, 6618, 13056, 20912, 1119, 13035, 6618, 6618, 8482, 13056])
); //,[10, 9, 6, 5, 3, 1])
