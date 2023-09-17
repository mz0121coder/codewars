/*
You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:

"01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. Substrings in the input string are separated by ,  or ,.

To compare the results of the teams you are asked for giving three statistics; range, average and median.

Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.

Mean or Average : To calculate mean, add together all of the numbers and then divide the sum by the total count of numbers.

Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

Your task is to return a string giving these 3 values. For the example given above, the string result will be

"Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

of the form: "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"`

where hh, mm, ss are integers (represented by strings) with each 2 digits.

Remarks:
if a result in seconds is ab.xy... it will be given truncated as ab.
if the given string is "" you will return ""
*/
/*
define function that takes in a string, calculates hrs, mins, secs 
and returns total value in seconds
define function that takes in a time in seconds and formats it 
to show hh|mm|ss 

extract all times from strg, call first function on each time
sort them from lowest to highest

range => highest - lowest
mean => total / times length
median
*/

function stat(strg) {
	if (!/\d+\|\d+\|\d+/.test(strg)) return '';
	//   function that takes in string, returns its total time in seconds
	const getTime = str => {
		let total = 0;
		const [hrs, mins, secs] = str.match(/\d+/g).map(el => Number(el));
		total += hrs * 3600;
		total += mins * 60;
		total += secs;
		return total;
	};
	// function that formats seconds to hh|mm|ss
	const formatTime = time => {
		let remaining = time;
		let hrs = 0;
		let mins = 0;
		let secs = 0;
		while (remaining >= 3600) {
			remaining -= 3600;
			hrs++;
		}
		while (remaining >= 60) {
			remaining -= 60;
			mins++;
		}
		secs = remaining;
		//  return formatted string
		return `${hrs < 10 ? '0' : ''}${hrs}|${mins < 10 ? '0' : ''}${mins}|${
			secs < 10 ? '0' : ''
		}${secs}`;
	};
	// sort times from strg from low to high (total seconds)
	const timeStrings = strg
		.match(/\d+\|\d+\|\d+/g)
		.sort((a, b) => getTime(a) - getTime(b));
	// calculate range
	const highToLow =
		getTime(timeStrings[timeStrings.length - 1]) - getTime(timeStrings[0]);
	const range = formatTime(highToLow);
	// calculate mean
	const totalSeconds = timeStrings.reduce(
		(acc, curr) => acc + getTime(curr),
		0
	);
	const average = formatTime(Math.floor(totalSeconds / timeStrings.length));
	// calculate median
	let median = '';
	if (timeStrings.length % 2 === 0) {
		const lowerMiddle = getTime(timeStrings[timeStrings.length / 2 - 1]);
		const upperMiddle = getTime(timeStrings[timeStrings.length / 2]);
		const middle = Math.floor((lowerMiddle + upperMiddle) / 2);
		//    console.log({lowerMiddle, upperMiddle, middle}, formatTime(middle))
		median = formatTime(middle);
	} else {
		const middle = getTime(timeStrings[Math.floor(timeStrings.length / 2)]);
		median = formatTime(middle);
	}
	// 	console.log({ range, average, median });
	return `Range: ${range} Average: ${average} Median: ${median}`;
}

console.log(stat('01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17')); //, "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34")
console.log(
	stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41')
); //, "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00")
