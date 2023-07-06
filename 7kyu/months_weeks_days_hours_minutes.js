/*
Given a number of minutes, translate it into a readible human timestamp.

For example: 100 minutes equals "1 hour 40 minutes" And: 52874 minutes equals "1 month 1 week 1 day 17 hours 14 minutes"

Given that each month has 28 days.

The largest amount of minutes you'll have to test for is under a year so you'll have to translate it to Months, Weeks, Days, Hours and Minutes.
*/

// define variable time equal to the 'value' parameter, will be reassigned lated
// define variables for times from one minute up to one month
// set them equal to the correct amount of minutes(use google and a calculator)
// 28 days in a month for this kata
// for each of these values:
// if time is greater than or equal to the number
// divide time by its corresponding variable e.g. time / oneMonth
// floor it down to a whole number, store it as a variable e.g. months
// decrease time by the variable * its related single value
// e.g. time -= months * oneMonth
// add the calculated value to a result array with an 's' at the end for plurals
// repeat for all time frames, start at largest (months))//, go down to minutes
// join result array with spaces to form a sentence and return it

function displayValue(value) {
	let time = value;

	const oneMinute = 1;
	const oneHour = 60;
	const oneDay = 1440;
	const oneWeek = 10080;
	const oneMonth = 40320;

	const result = [];

	if (time >= oneMonth) {
		const months = Math.floor(time / oneMonth);
		time -= months * oneMonth;
		result.push(months === 1 ? `${months} month` : `${months} months`);
	}

	if (time >= oneWeek) {
		const weeks = Math.floor(time / oneWeek);
		time -= weeks * oneWeek;
		result.push(weeks === 1 ? `${weeks} week` : `${weeks} weeks`);
	}

	if (time >= oneDay) {
		const days = Math.floor(time / oneDay);
		time -= days * oneDay;
		result.push(days === 1 ? `${days} day` : `${days} days`);
	}

	if (time >= oneHour) {
		const hours = Math.floor(time / oneHour);
		time -= hours * oneHour;
		result.push(hours === 1 ? `${hours} hour` : `${hours} hours`);
	}

	if (time >= oneMinute) {
		const minutes = Math.floor(time / oneMinute);
		time -= minutes * oneMinute;
		result.push(minutes === 1 ? `${minutes} minute` : `${minutes} minutes`);
	}

	return result.join(' ');
}

console.log(displayValue(1)); //, "1 minute")
console.log(displayValue(100)); //, "1 hour 40 minutes")
console.log(displayValue(40321)); //, "1 month 1 minute")
console.log(displayValue(52874)); //, "1 month 1 week 1 day 17 hours 14 minutes")
