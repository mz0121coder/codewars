/*
You are given a line from a movie subtitle file as a string.
The line consists of time interval when the text is shown:

start(hh:mm:ss,ms) --> stop(hh:mm:ss,ms)

and the text itself, for example:

01:09:02,684 --> 01:09:03,601 Run Forrest, run!

Your task is to write a function subs_offset_apply which takes such string and offset
(integer) in miliseconds as arguments, and returns the string with the offset applied.
Examples:

string = "01:09:02,684 --> 01:09:03,601 Run Forrest, run!"  
subs_offset_apply(string, 3663655)
output: "02:10:06,339 --> 02:10:07,256 Run Forrest, run!"

"00:43:22,074 --> 00:43:24,159 No, I am your father."
subs_offset_apply(string, 1789)   
output: "00:43:23,863 --> 00:43:25,948 No, I am your father." 

"00:03:06,241 --> 00:03:07,618 I'll be back."
subs_offset_apply(string, -21789) 
output: "00:02:44,452 --> 00:02:45,829 I'll be back."
Time constraints:

00:00:00,000 <= t <= 99:59:59,999

In case of too big negative or positive offset, which results in exceeding the constraints,
the function should return a string "Invalid offset".
You'll be given only valid strings.
Have Fun!
*/
function subsOffsetApply(str, offset) {
	let result = str;
	let isError = false;

	const getMilliseconds = time => {
		let millis = 0;
		const [hrs, mins, secs, mils] = time.split(/[:,]/).map(el => Number(el));
		millis += hrs * 3600000;
		millis += mins * 60000;
		millis += secs * 1000;
		millis += mils;
		return millis;
	};

	const timeStrings = str.match(/\d{2}:\d{2}:\d{2},\d{3}/g);

	const format = num => `${num > 9 ? '' : '0'}${num}`;

	for (const timeString of timeStrings) {
		result = result.replace(timeString, () => {
			let change = offset;
			let millis = getMilliseconds(timeString);

			// adjust milliseconds based on the offset
			if (change < 0) {
				// handle negative offset
				const hrs = Math.floor(Math.abs(change) / 3600000);
				change += hrs * 3600000;
				millis -= hrs * 3600000;

				const mins = Math.floor(Math.abs(change) / 60000);
				change += mins * 60000;
				millis -= mins * 60000;

				const secs = Math.floor(Math.abs(change) / 1000);
				change += secs * 1000;
				millis -= secs * 1000;

				millis += change;
			} else {
				// handle positive offset
				const hrs = Math.floor(change / 3600000);
				change -= hrs * 3600000;
				millis += hrs * 3600000;

				const mins = Math.floor(change / 60000);
				change -= mins * 60000;
				millis += mins * 60000;

				const secs = Math.floor(change / 1000);
				change -= secs * 1000;
				millis += secs * 1000;

				millis += change;
			}

			let hrs = Math.floor(millis / 3600000);
			millis -= hrs * 3600000;
			let mins = Math.floor(millis / 60000);
			millis -= mins * 60000;
			let secs = Math.floor(millis / 1000);
			millis -= secs * 1000;

			if (hrs < 0 || hrs > 99) {
				isError = true;
				return 'Invalid offset';
			}

			return `${format(hrs)}:${format(mins)}:${format(secs)},${
				millis < 10 ? '00' : millis < 100 ? '0' : ''
			}${millis}`;
		});
	}

	return isError ? 'Invalid offset' : result;
}
