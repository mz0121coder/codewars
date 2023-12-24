/*
The cuckoo bird pops out of the cuckoo clock and chimes once on the quarter hour, half hour, and three-quarter hour. At the beginning of each hour (1-12), it chimes out the hour. Given the current time and a number n, determine the time when the cuckoo bird has chimed n  times.

Input Parameters:
initial_time - a string in the format "HH:MM", where 1 ≤ HH ≤ 12 and 0 ≤ MM ≤ 59, with leading 0’s if necessary.
n - an integer representing the target number of chimes, with 1 <= n <= 200.

Return Value: The time when the cuckoo bird has chimed n  times - a string in the same format as initial_time.

If the cuckoo bird chimes at initial_time, include those chimes in the count. If the nth chime is reached on the hour, report the time at the start of that hour (i.e. assume the cuckoo finishes chiming before the minute is up).

Example: "03:38", 19   should return "06:00".
Explanation: It chimes once at "03:45", 4 times at "04:00", once each at "04:15", "04:30", "04:45", 5 times at "05:00", and once each at "05:15", "05:30", "05:45". At this point it has chimed 16 times, so the 19th chime occurs when it chimes 6 times at "06:00".

Source: International Collegiate Programming Contest, North Central North American Regional, 2023.
*/

/*
Add times from 01:00 to 12:59 to a times array
Add 2 copies of times to the array with ... to handle large inputs

Start count at 0
Loop from index (in times) of inputTime to times.length:
Extract hrs and mins from current time
If mins == '00' add hrs to count
If mins == (15|30|45) add 1 to count
When count >= chimes return current time
*/

function cuckooClock(inputTime, chimes) {
	const times = [];
	for (let hour = 1; hour <= 12; hour++) {
		for (let mins = 0; mins <= 59; mins++) {
			times.push(
				`${hour < 10 ? '0' : ''}${hour}:${mins < 10 ? '0' : ''}${mins}`
			);
		}
	}
	times.push(...times, ...times, ...times);

	let count = 0;
	for (let i = times.indexOf(inputTime); i < times.length; i++) {
		const [hrs, mins] = times[i].split(':');
		if (mins === '00') count += Number(hrs);
		if (/(15|30|45)/.test(mins)) count++;
		if (count >= chimes) return times[i];
	}
}

const initialTimes = ['08:17', '08:17', '08:17', '08:17', '08:17'];
const chimes = [113, 114, 115, 150, 200];
// const expectedTimes = ["08:00", "08:15", "08:30", "11:00", "05:45"];

for (let i = 0; i < initialTimes.length; i++) {
	console.log(cuckooClock(initialTimes[i], chimes[i]));
}
