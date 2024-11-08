/*
Task
An ATM ran out of 10 dollar bills and only has 100, 50 and 20 dollar bills.

Given an amount between 40 and 10000 dollars (inclusive) and assuming that the ATM wants to use as few bills as possible, determinate the minimal number of 100, 50 and 20 dollar bills the ATM needs to dispense (in that order).

Example
For n = 250, the result should be [2, 1, 0].

For n = 260, the result should be [2, 0, 3].

For n = 370, the result should be [3, 1, 1].

Input/Output
[input] integer n Amount of money to withdraw. Assume that n is always exchangeable with [100, 50, 20] bills.
[output] integer array An array of number of 100, 50 and 20 dollar bills needed to complete the withdraw (in that order).
*/

function withdraw(n) {
	let hundred = 0,
		fifty = 0,
		twenty = 0,
		amount = n;
	while (amount > 0) {
		if (amount % 100 === 0) {
			hundred++;
			amount -= 100;
		} else if (amount % 50 === 0) {
			fifty++;
			amount -= 50;
		} else {
			twenty++;
			amount -= 20;
		}
	}
	return [hundred, fifty, twenty];
}

console.log(withdraw(40)); // [0, 0, 2]

console.log(withdraw(250)); // [2, 1, 0]

console.log(withdraw(260)); // [2, 0, 3]

console.log(withdraw(230)); // [1, 1, 4]

console.log(withdraw(60)); // [0, 0, 3]
