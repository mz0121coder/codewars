/*
A digital, 24-hour clock is hung on my classrooms wall, displaying, well, the time in hh:mm:ss format.

There are multiple types of good times. It could be if ...

[hh, mm, ss] is an nondecreasing arithmetic progression where the difference of consecutive numbers is 0, 1, or 2. e.g. (11:12:13, 13:15:17) but NOT 23:21:19

[hh, mm, ss] is an arithmetic progression where the numbers end with the same last digit. e.g. (00:20:40, 23:13:03)

[0, hh, mm, ss] is an arithmetic progression

hhmmss is a palindrome and only two types of digits are in the time. e.g. (11:55:11, 05:55:50)

the time is 12:34:56

Task is to return the next good time, excluding the current time. Note that time can loop to the next day.

Examples:

00:00:00 -> 00:01:02 (1)
10:59:23 -> 11:00:11 (4)
09:18:27 -> 09:19:29 (2)
23:52:18 -> 00:00:00 (1,2,3)
08:10:12 -> 08:16:24 (3)
12:33:56 -> 12:34:56 (4)
*/

function nextGoodTime(t) {
	const isGood = time => {
		const [h, m, s] = time.split(':').map(n => parseInt(n));
		const digitSet = new Set(time.match(/\d/g));
		const endSet = new Set([h, m, s].map(n => `${n}`.slice(-1)));
		switch (true) {
			case m - h === s - m &&
				([0, 1, 2].includes(m - h) || endSet.size === 1 || h === s - m):
			case digitSet.size === 2 && [...time].reverse().join('') === time:
			case time === `12:34:56`:
				return true;
			default:
				return false;
		}
	};

	const format = units => (units < 10 ? `0${units}` : `${units}`);
	const increment = time => {
		let isMinsChanged = false;
		let [h, m, s] = time.split(':').map(n => parseInt(n));
		s = (s + 1) % 60;
		if (s === 0) {
			m = (m + 1) % 60;
			isMinsChanged = true;
		}
		if (m === 0 && isMinsChanged) h = (h + 1) % 24;
		return `${format(h)}:${format(m)}:${format(s)}`;
	};

	let str = increment(t);
	while (!isGood(str)) str = increment(str);
	return str;
}
