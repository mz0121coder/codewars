/*
In this Kata, you will be given a series of times at which an alarm sounds. Your task will be to determine the maximum time interval between alarms. Each alarm starts ringing at the beginning of the corresponding minute and rings for exactly one minute. The times in the array are not in chronological order. Ignore duplicate times, if any.

For example:
solve(["14:51"]) = "23:59". If the alarm sounds now, it will not sound for another 23 hours and 59 minutes.
solve(["23:00","04:22","18:05","06:24"]) == "11:40". The max interval that the alarm will not sound is 11 hours and 40 minutes.
In the second example, the alarm sounds 4 times in a day.

More examples in test cases. Good luck!
*/

function solve(arr) {
	if (arr.length === 1) return `23:59`;
	const getTime = str => {
		const [hh, mm] = str.split(':').map(el => parseInt(el));
		return hh * 60 + mm;
	};
	const times = [...arr].sort((a, b) => getTime(a) - getTime(b));
	times.push(times[0]);

	const getDifference = (str1, str2) => {
		const time1 = getTime(str1);
		const time2 = getTime(str2);
		const diff1 = 1440 - time1 + time2;
		const diff2 = Math.abs(time2 - time1);
		return Math.min(diff1, diff2) - 1;
	};

	let maxDiff = 0;
	for (let i = 1; i < times.length; i++)
		maxDiff = Math.max(maxDiff, getDifference(times[i - 1], times[i]));

	const formatTime = num => {
		let time = num;
		const hours = Math.floor(time / 60);
		time -= hours * 60;
		return `${hours < 10 ? '0' : ''}${hours}:${time < 10 ? '0' : ''}${time}`;
	};
	return formatTime(maxDiff);
}

console.log(solve(['14:51'])); // "23:59"
console.log(solve(['23:00', '04:22', '18:05', '06:24'])); // "11:40"
console.log(solve(['21:14', '15:34', '14:51', '06:25', '15:30'])); // "09:10"
