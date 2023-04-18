/*Task:
Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

Example:
Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.

_ NOTE: All numbers will be integers >= 0, and the array will never be empty. _

*/

// sort array lowest to highest
// make count variable
// loop through sorted array
// subtract each number from maxBudget
// if remainder is greater than or equal to 0; add 1 to count
// return count when next item will turn it negative or if all numbers are subtracted

function howManyGifts(maxBudget, gifts) {
	let remainingBudget = maxBudget;
	let count = 0;
	gifts
		.sort((a, b) => a - b)
		.forEach(num => {
			remainingBudget -= num;
			if (remainingBudget >= 0) {
				count++;
			}
		});
	return count;
}

console.log(howManyGifts(20, [13, 2, 4, 6, 1])); //, 4);
