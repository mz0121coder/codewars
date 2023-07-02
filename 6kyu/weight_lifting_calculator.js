/*
As a keen weightlifter you are constantly working out how much weight to put on each end of the bar in order to make it even.

You do this by taking your total weight w, which is always a multiple of 2.5, and dividing it by 2 and then working out which weights to put on each end of the bar based on those available to you. Don't forget that the bar already weighs 20kg and shouldn't factor into your final calculation.

Your gym is well stocked, you have an unlimited number of each of these weights:

20kg
15kg
10kg
5kg
2.5kg
1.25kg
Working this out every time is getting tiresome. Create a function that returns an array showing the smallest combination of weights you can put on to reach the total weight w. Return a false error for any weight that cannot be split evenly on the bar or is <20.

For example:

your total weight is w = 175

175 - 20kg bar weight = 155 = 77.5kg on each side of the bar

so the expected output would be:

[20, 20, 20, 15, 2.5]

Finally, if the input is exactly 20kg then the function should return an empty array as that is the result for a bar without any weight.
*/

// subtract 20 from w, store as variable remaining that will be reassigned
// define empty weights array
// while remaining is greater than 0
// if remaining is greater than or equal to 40
// decrease remaining by 40
// add 20 to weights array (representing 20 on each side)
// do the same for 30, 10, 5, 2.5 until remaining reaches 0
// return empty array for w equal to 20
// return  false for starting remaining under 20 or remaining that can't be split equally (w - 20 should be divisible by 2.5)
// return weights array for all other cases

function liftingCalc(w) {
	const weights = [];
	let remaining = w - 20;
	while (remaining > 0) {
		if (remaining >= 40) {
			remaining -= 40;
			weights.push(20);
		} else if (remaining >= 30 && remaining < 40) {
			remaining -= 30;
			weights.push(15);
		} else if (remaining >= 20 && remaining < 30) {
			remaining -= 20;
			weights.push(10);
		} else if (remaining >= 10 && remaining < 20) {
			remaining -= 10;
			weights.push(5);
		} else if (remaining >= 5 && remaining < 10) {
			remaining -= 5;
			weights.push(2.5);
		} else {
			remaining -= 2.5;
			weights.push(1.25);
		}
	}
	return w === 20 ? [] : w < 20 || (remaining / 2) % 2.5 ? false : weights;
}

console.log(liftingCalc(250)); //, [20, 20, 20, 20, 20, 15]);
console.log(liftingCalc(175)); //, [20, 20, 20, 15, 2.5]);
console.log(liftingCalc(95)); //, [20, 15, 2.5]);
