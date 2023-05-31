/*
Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.

At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.

Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.

Example:
[10,10,10,18,20,20] --> 12
*/

// get array of passed scores (less than or under 18)
// if no passed scores, return 'No pass scores registered.'
// add up the points, divide sum by length of array
// round to nearest integer

function passed(list) {
	const points = list.filter(el => el <= 18);
	const average = points.reduce((acc, curr) => acc + curr, 0) / points.length;
	return points.length === 0
		? 'No pass scores registered.'
		: Math.round(average);
}
