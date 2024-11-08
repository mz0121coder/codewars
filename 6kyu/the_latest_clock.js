/*
Write a function which receives 4 digits and returns the latest time of day that can be built with those digits.

The time should be in HH:MM format.

Examples:

digits: 1, 9, 8, 3 => result: "19:38"
digits: 9, 1, 2, 5 => result: "21:59" (19:25 is also a valid time, but 21:59 is later)
Notes
Result should be a valid 24-hour time, between 00:00 and 23:59.
Only inputs which have valid answers are tested.
 */

function latestClock(a, b, c, d) {
	const digits = [a, b, c, d];
	const digitsUnder4 = digits.filter(num => num < 4);
	const startsWith2 =
		digits.includes(2) &&
		digitsUnder4.length > 1 &&
		(digitsUnder4.length > 2 || digits.some(num => [4, 5].includes(num)));
	if (startsWith2) {
		const num1 = 2;
		digits.splice(digits.indexOf(2), 1);
		const num2 = Math.max(...digits.filter(num => num < 4));
		digits.splice(digits.indexOf(num2), 1);
		digits.sort((a, b) => b - a);
		const num3 = digits[0] < 6 ? digits.shift() : digits.pop();
		const num4 = digits.shift();
		return `${num1}${num2}:${num3}${num4}`;
	} else {
		const num1 = Math.max(...digits.filter(n => n < 2));
		digits.splice(digits.indexOf(num1), 1);
		const num2 = Math.max(...digits);
		digits.splice(digits.indexOf(num2), 1);
		digits.sort((a, b) => b - a);
		const num3 = digits[0] < 6 ? digits.shift() : digits.pop();
		const num4 = digits.shift();
		return `${num1}${num2}:${num3}${num4}`;
	}
}

console.log(latestClock(1, 9, 8, 3)); // '19:38'
console.log(latestClock(9, 1, 2, 5)); // '21:59'
console.log(latestClock(1, 2, 8, 9)); // '19:28'
console.log(latestClock(0, 0, 0, 0)); // '00:00'
console.log(latestClock(2, 4, 0, 0)); // '20:40'
