/*
Converting a normal (12-hour) time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, right? Well, let's see if you can do it!

You will have to define a function named "to24hourtime", and you will be given an hour (always in the range of 1 to 12, inclusive), a minute (always in the range of 0 to 59, inclusive), and a period (either "am" or "pm") as input.

Your task is to return a four-digit string that encodes that time in 24-hour time.
*/

function to24hourtime(hour, minute, period) {
	let result = '';
	if (period === 'am') {
		result += hour === 12 ? '00' : hour < 10 ? `0${hour}` : `${hour}`;
	}
	if (period === 'pm') {
		result += hour === 12 ? '12' : `${hour + 12}`;
	}
	result += minute < 10 ? `0${minute}` : `${minute}`;
	return result;
}

console.log(to24hourtime(1, 0, 'am')); //, "0100", "Input =  1:00 am");
console.log(to24hourtime(1, 0, 'pm')); //, "1300", "Input =  1:00 pm");
console.log(to24hourtime(12, 0, 'am')); //, "0000", "Input = 12:00 am");
console.log(to24hourtime(12, 0, 'pm')); //, "1200", "Input = 12:00 pm");
console.log(to24hourtime(6, 30, 'am')); //, "0630", "Input =  6:30 am");
console.log(to24hourtime(9, 45, 'pm')); //, "2145", "Input =  9:45 pm");
