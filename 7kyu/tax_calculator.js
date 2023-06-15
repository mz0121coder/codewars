/*Write a function to calculate compound tax using the following table:
For $10 and under, the tax rate should be 10%.
For $20 and under, the tax rate on the first $10 is %10, and the tax on the rest is 7%.
For $30 and under, the tax rate on the first $10 is still %10, the rate for the next $10 is still 7%, and everything else is 5%.
Tack on an additional 3% for the portion of the total above $30.
Return 0 for invalid input(anything that's not a positive real number).
Examples:
An input of 10, should return 1 (1 is 10% of 10)
An input of 21, should return 1.75 (10% of 10 + 7% of 10 + 5% of 1)
* Note that the returned value should be rounded to the nearest penny.*/

function taxCalculator(total) {
	let result = 0;
	if (total >= 1 && total <= 10) {
		result = total * 0.1;
	} else if (total <= 20) {
		result = 0.07 * (total - 10) + 1;
	} else if (total <= 30) {
		result = 0.05 * (total - 20) + 1.7;
	} else {
		result = 0.03 * (total - 30) + 2.2;
	}
	return total >= 1 ? Number(result.toFixed(2).replace(/0$/, '')) : 0;
}

console.log(taxCalculator(10)); //, 1, "Incorrect Value for '10'");

console.log(taxCalculator(15)); //, 1.35, "Incorrect Value for '15'");

console.log(taxCalculator(25)); //, 1.95, "Incorrect Value for '25'");

console.log(taxCalculator(35)); //, 2.35, "Incorrect Value for '35'");
