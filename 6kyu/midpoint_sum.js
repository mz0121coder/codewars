/*
Midpoint Sum
For a given list of integers, return the index of the element where the sums of the integers to the left and right of the current element are equal.

Ex:

ints = [4, 1, 7, 9, 3, 9]
# Since 4 + 1 + 7 = 12 and 3 + 9 = 12, the returned index would be 3

ints = [1, 0, -1]
# Returns None/nil/undefined/etc (depending on the language) as there
# are no indices where the left and right sums are equal
Here are the 2 important rules:

The element at the index to be returned is not included in either of the sum calculations!
Both the first and last index cannot be considered as a "midpoint" (So None for [X] and [X, X])
*/

/*
return undefined if array n length is < 3

start left and right sums at 0
loop through each item in array (except first and last)
on each iteration:
check sums of numbers to left and right 
if left sum equals right sum return the index

otherwise return undefined
*/

const midpointSum = function (n) {
	if (n.length < 3) {
		return undefined;
	}
	for (let i = 1; i < n.length - 1; i++) {
		const left = n.slice(0, i).reduce((acc, curr) => acc + curr, 0);
		const right = n.slice(i + 1).reduce((acc, curr) => acc + curr, 0);
		if (left === right) {
			return i;
		}
	}
	return undefined;
};

console.log(midpointSum([4, 1, 7, 9, 3, 9])); // == 3, "[4,1,7,9,3,9] should return 3")
console.log(midpointSum([1, 0, 1])); // == 1, "[1,0,1] should equal 1")
console.log(midpointSum([9, 0, 1, 2, 3, 4])); // == 2, "[9,0,1,2,3,4] should equal 2")
console.log(midpointSum([0, 0, 4, 0])); // == 2, "[0,0,4,0] should equal 2")
console.log(midpointSum([-10, 3, 7, 8, -6, -13, 21])); // == 4, "[-10,3,7,8,-6,-13,21] should equal 4")
console.log(
	midpointSum([
		1, 1, 1, 1, -5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1,
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	])
); // ==  52, "Large valid sequence: [1,1,1,1,-5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] should equal 52")
