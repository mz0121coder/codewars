/*
Lately, feature requests have been piling up and you need a way to make global estimates of the time it would take to implement them all. If you estimate feature A to take 4 to 6 hours to implement, and feature B to take 2 to 5 hours, then in the best case it will only take you 6 (4 + 2) hours to implement both features, and in the worst case it will take you 11 (6 + 5). In the average case, it will take you 8.5 hours.

To help you streamline the estimation process, write a function that returns a tuple (JS: array) of the global best case, average case and worst case given a tuple of tuples (JS: array of arrays) representing best case and worst case guesses.

For example,

estimates = ((1, 2), (3, 4))
global_estimate(estimates) == (4, 5, 6)
For example,

estimates = [[1, 2], [3, 4]]
globalEstimate(estimates) == [4, 5, 6]
Don't worry about rounding or invalid input.
*/

function globalEstimate(estimates) {
	let min = 0;
	let max = 0;
	estimates.forEach(arr => {
		min += Math.min(...arr);
		max += Math.max(...arr);
	});
	const avg = (min + max) / estimates[0].length;
	return [min, avg, max];
}

console.log(
	globalEstimate([
		[1, 2],
		[3, 4],
	])
);
console.log(
	globalEstimate([
		[0, 1],
		[0, 10],
	])
);
console.log(
	globalEstimate([
		[0, 0],
		[0, 0],
	])
);
console.log(globalEstimate([[1, 1]]));
console.log(
	globalEstimate([
		[1, 3],
		[1, 4],
		[1, 5],
	])
);
