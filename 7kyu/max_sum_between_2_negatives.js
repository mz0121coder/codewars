/*Task
You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements. No negative element should be present in the sum. If there is no such sum: -1 for Python, C++, JavaScript, Java, CoffeeScript and COBOL, Nothing for Haskell, None for Rust.

Example 1
[4, -1, 6, -2, 3, 5, -7, 7] -> 8
     ^      ^         ^
Sum between -1 and -2 is 6, between -2 and -7 is 3 + 5 = 8. It's also not 14 (between -1 and -7), because this includes a negative number (-2).

Example 2
[4, -1, -2] -> 0
     ^   ^
There is nothing between -1 and -2, so return 0.
*/

function maxSumBetweenTwoNegatives(a) {
	const sums = [];
	let isBetweenNegatives = false;
	let newSum = 0;
	a.forEach((n, i) => {
		if (n < 0) {
			isBetweenNegatives = true;
		}
		if (n > 0 && isBetweenNegatives) {
			newSum += n;
		}
		if (isBetweenNegatives && n < 0) {
			sums.push(newSum);
			newSum = 0;
		}
	});
	return a.filter(n => n < 0).length < 2 ? -1 : Math.max(...sums);
}

console.log(maxSumBetweenTwoNegatives([-1, 6, -2, 3, 5, -7])); //, 8 );
console.log(maxSumBetweenTwoNegatives([5, -1, -2])); //, 0 );
console.log(maxSumBetweenTwoNegatives([1, -2])); //, -1 );
