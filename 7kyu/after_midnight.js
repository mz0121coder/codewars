/*
Instructions
Write a function that takes a negative or positive integer, which represents the number of minutes before (-) or after (+) Sunday midnight, and returns the current day of the week and the current time in 24hr format ('hh:mm') as a string.

Examples
      0  =>  should return 'Sunday 00:00'
     -3  =>  should return 'Saturday 23:57'
     45  =>  should return 'Sunday 00:45'
    759  =>  should return 'Sunday 12:39'
   1236  =>  should return 'Sunday 20:36'
   1447  =>  should return 'Monday 00:07'
   7832  =>  should return 'Friday 10:32'
  18876  =>  should return 'Saturday 02:36'
 259180  =>  should return 'Thursday 23:40' 
-349000  =>  should return 'Tuesday 15:20'
*/

function dayAndTime(n) {
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	const day = days.at(Math.floor((n / 1440) % 7));

	let time = n % 1440;
	let hrs = 0;
	let secs = 0;
	if (time < 0) {
		hrs = Math.floor(24 - Math.abs(time / 60));
		secs = 60 - (Math.abs(time) % 60);
	} else {
		hrs = Math.floor(time / 60);
		secs = time % 60;
	}
	// console.log({ day, time, hrs, secs });
	return `${day} ${hrs < 10 ? 0 : ''}${hrs}:${secs < 10 ? 0 : ''}${secs}`;
}

console.log(dayAndTime(0)); //, 'Sunday 00:00');
console.log(dayAndTime(-3)); //, 'Saturday 23:57');
console.log(dayAndTime(45)); //, 'Sunday 00:45');
console.log(dayAndTime(759)); //, 'Sunday 12:39');
console.log(dayAndTime(1236)); //, 'Sunday 20:36');
console.log(dayAndTime(1447)); //, 'Monday 00:07');
console.log(dayAndTime(7832)); //, 'Friday 10:32');
console.log(dayAndTime(18876)); //, 'Saturday 02:36');
console.log(dayAndTime(259180)); //, 'Thursday 23:40');
console.log(dayAndTime(-349000)); //, 'Tuesday 15:20');
