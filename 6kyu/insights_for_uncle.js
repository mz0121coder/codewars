/*
Story
Uncle Tom the farmer needs to decide what vegetable he’ll grow this year. Since last year he barely covered costs due to a sudden fall in price for his cucumber, this year he has decided to check which vegetables prices had fallen the most during the previous years. Can you help Uncle Tom quantify the falls in price for each vegetable?

Input
A list of numbers, corresponding to a series for the price value of a vegetable over a period.

Example:

[10, 11, 1, 11, 29, 10, 14, 20, 5, 1, 10]
Expected Output
A number, representing the largest fall in price in the series, rounded when needed to a maximum of four decimal points ( ex. 1.0001).

Example:

28
*/

function maxFall(arr) {
	let max = -Infinity;
	let maxDiff = -Infinity;

	for (const num of arr) {
		if (num > max) max = num;
		if (num < max) {
			const diff = max - num;
			if (diff > maxDiff) maxDiff = diff;
		}
	}
	return /\.\d{4,}$/.test(`${maxDiff}`) ? Number(maxDiff.toFixed(4)) : maxDiff;
}

Test.assertEquals(maxFall([10, 11, 1, 11, 29, 10, 14, 20, 5, 1, 10])); //, 28);
Test.assertEquals(maxFall([50, 20, 10, 1, 60, 20, 25])); //, 49);
Test.assertEquals(maxFall([5, 3, 5, 6, 2, 6, 10, 30, 32, 20, 10, 1.1])); //, 30.9);
