/*
Given a time in AM/PM format as a string, convert it to military (24-hour) time as a string.

Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock

Sample Input: 07:05:45PM Sample Output: 19:05:45

Try not to use built in DateTime libraries.

For more information on military time, check the wiki https://en.wikipedia.org/wiki/24-hour_clock#Military_time
*/
// Function to convert time to military time format
// Array to store time components
// Extract hours, minutes, seconds, and end (AM/PM) from input
// Check if end is AM
// If hours is 12, convert to 00
// Check if end is PM
// If hours is 12, keep it as 12
// Convert hours to military format by adding 12
// Add minutes and seconds to the time array
// Join the time components with ':' separator and return the result

const getMilitaryTime = function (input) {
	const time = [];
	const [hours, minutes, seconds, end] = [
		input.slice(0, 2),
		input.slice(3, 5),
		input.slice(6, 8),
		input.slice(8),
	];
	if (end === 'AM') {
		time.push(hours === '12' ? '00' : hours);
	}
	if (end === 'PM') {
		time.push(hours === '12' ? '12' : Number(hours) + 12);
	}
	time.push(minutes, seconds);
	return time.join(':');
};

console.log(getMilitaryTime('12:00:01AM')); //, '00:00:01')
console.log(getMilitaryTime('11:46:47PM')); //, '23:46:47')
