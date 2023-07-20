/*
A new task for you!

You have to create a method, that corrects a given time string.
There was a problem in addition, so many of the time strings are broken.
Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
Examples
"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01"  
If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/

/*
return "" if timestring is empty
return null if timestring is null or doesn't match correct format

extract hours, minutes and seconds from timestring
if seconds >= 60, add 1 to minutes and reduce seconds by 60
if minutes >= 60, add 1 to hours and reduce minutes by 60
if hours >= 24, change hours to its division remainder by 24
e.g. hours === 52, => becomes (52 % 24) => 4

return new string with correct format
add 0 to start of digits < 10
'hh:mm:ss'
*/

function timeCorrect(timestring) {
	if (timestring === '') {
		return '';
	}
	if (
		timestring === null ||
		(timestring.length > 0 && !/^\d{2}:\d{2}:\d{2}$/.test(timestring))
	) {
		return null;
	}

	let [hours, minutes, seconds] = timestring.split(':');
	if (Number(seconds) >= 60) {
		minutes = `${Number(minutes) + 1}`;
		seconds = `${Number(seconds) - 60}`;
	}
	if (Number(minutes) >= 60) {
		hours = `${Number(hours) + 1}`;
		minutes = `${Number(minutes) - 60}`;
	}
	if (Number(hours) >= 24) {
		hours = `${Number(hours) % 24}`;
	}
	return [hours, minutes, seconds]
		.map(item => (item.length < 2 ? `0${item}` : item))
		.join(':');
}

console.log(timeCorrect(null)); //, null);
console.log(timeCorrect('')); //, "");

// Invalid Format
console.log(timeCorrect('001122')); //, null);
console.log(timeCorrect('00;11;22')); //, null);
console.log(timeCorrect('0a:1c:22')); //, null);

// Correction Tests
console.log(timeCorrect('09:10:01')); //, "09:10:01");
console.log(timeCorrect('11:70:10')); //, "12:10:10");
console.log(timeCorrect('19:99:09')); //, "20:39:09");
console.log(timeCorrect('19:99:99')); //, "20:40:39");
console.log(timeCorrect('24:01:01')); //, "00:01:01");
console.log(timeCorrect('52:01:01')); //, "04:01:01");
