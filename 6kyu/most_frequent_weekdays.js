/*
What is your favourite day of the week? Check if it's the most frequent day of the week in the year.

You are given a year as integer (e. g. 2001). You should return the most frequent day(s) of the week in that year. The result has to be a list of days sorted by the order of days in week (e. g. ['Monday', 'Tuesday'], ['Saturday', 'Sunday'], ['Monday', 'Sunday']). Week starts with Monday.

Input: Year as an int.

Output: The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

Preconditions:

Week starts on Monday.
Year is between 1583 and 4000.
Calendar is Gregorian.
Examples (input -> output):
* 2427 -> ['Friday']
* 2185 -> ['Saturday']
* 2860 -> ['Thursday', 'Friday']
*/

/*
get index in week of first day of the year
e.g. if 0 => year starts with Sunday,
store as variable dayIndex
also check if year is leap year
create obj to count days
loop from 1 to 365 (or 366 if leap year):
day = week[dayIndex % 7]
store day as key in obj, and instances as value
increase dayIndex by 1

return most frequent days, sorted by order in a week starting from 'Monday'
*/

function mostFrequentDays(year) {
	const week = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	let dayIndex = new Date(`${year}-01-01`).getDay();
	const obj = {};
	let len = 365;
	if (year % 400 === 0) len = 366;
	if (year % 100 && year % 4 === 0) len = 366;
	let max = 0;

	for (let i = 1; i <= len; i++) {
		const day = week[dayIndex % 7];
		obj[day] = day in obj ? obj[day] + 1 : 1;
		if (obj[day] > max) max = obj[day];
		dayIndex++;
	}

	const results = Object.keys(obj)
		.filter(day => obj[day] === max)
		.sort((a, b) => {
			const week2 = [...week.slice(1), 'Sunday'];
			return week2.indexOf(a) - week2.indexOf(b);
		});

	return results;
}

console.log(mostFrequentDays(2427));
console.log(mostFrequentDays(2185));
console.log(mostFrequentDays(2860));
