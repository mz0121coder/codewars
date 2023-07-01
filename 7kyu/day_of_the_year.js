/*
Work out what number day of the year it is.

toDayOfYear([1, 1, 2000]) => 1
The argument passed into the function is an array with the format [D, M, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

The year can be evenly divided by 4;
If the year can be evenly divided by 100, it is NOT a leap year, unless;
The year is also evenly divisible by 400. Then it is a leap year.
*/

// define days variable, start at 0
// loop from 1 up to current month
// add correct days based on the month
// if months include February
// check if it is a leap year and add 29 days
// or add 28 for non leap year
// add days for current month
// return total days

function toDayOfYear(arr) {
	const [day, month, year] = arr;
	let days = 0;
	const isLeapYear = (year % 4 === 0 && year % 100) || year % 400 === 0;
	// 	console.log({ arr, year, isLeapYear });
	for (let i = 1; i < month; i++) {
		days +=
			i === 1
				? 31
				: i === 2 && isLeapYear
				? 29
				: i === 2 && !isLeapYear
				? 28
				: i === 3
				? 31
				: i === 4
				? 30
				: i === 5
				? 31
				: i === 6
				? 30
				: i === 7
				? 31
				: i === 8
				? 31
				: i === 9
				? 30
				: i === 10
				? 31
				: i === 11
				? 30
				: 31;
	}
	days += day;
	return days;
}

console.log(toDayOfYear([25, 12, 2017])); //, 359,);
console.log(toDayOfYear([31, 10, 1991])); //, 304);
console.log(toDayOfYear([1, 5, 3000])); //, 121);
console.log(toDayOfYear([14, 3, 1066])); //, 73);
console.log(toDayOfYear([5, 11, 1604])); //, 310);
console.log(toDayOfYear([31, 12, 2000])); //, 366);
console.log(toDayOfYear([31, 12, 2001])); //, 365);
console.log(toDayOfYear([31, 12, 2004])); //, 366);
console.log(toDayOfYear([31, 12, 2100])); //, 365);
