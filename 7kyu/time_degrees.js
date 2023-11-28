/*
Time , time , time . Your task is to write a function that will return the degrees on a analog clock from a digital time that is passed in as parameter . The digital time is type string and will be in the format 00:00 . You also need to return the degrees on the analog clock in type string and format 360:360 . Remember to round of the degrees . Remeber the basic time rules and format like 24:00 = 00:00 and 12:60 = 13:00 . Create your own validation that should return "Check your time !" in any case the time is incorrect or the format is wrong , remember this includes passing in negatives times like "-01:-10".

A few examples :
clock_degree("00:00") will return : "360:360"
clock_degree("01:01") will return : "30:6"
clock_degree("00:01") will return : "360:6"
clock_degree("01:00") will return : "30:360"
clock_degree("01:30") will return : "30:180"
clock_degree("24:00") will return : "Check your time !"
clock_degree("13:60") will return : "Check your time !"
clock_degree("20:34") will return : "240:204"
Remember that discrete hour hand movement is required - snapping to each hour position and also coterminal angles are not allowed. Goodluck and Enjoy!
*/

function clockDegree(s) {
	if (/^\d{2}:\d{2}$/.test(s)) {
		const [hrs, mins] = s.split(':').map(el => Number(el));
		if (hrs < 24 && mins < 60)
			return `${
				[12, 0].includes(hrs) ? '360' : hrs > 12 ? (hrs - 12) * 30 : hrs * 30
			}:${mins === 0 ? '360' : mins * 6}`;
	}
	return 'Check your time !';
}

console.log(clockDegree('01:01')); //,"30:6");
console.log(clockDegree('00:00')); //,"360:360");
console.log(clockDegree('01:03')); //,"30:18");
console.log(clockDegree('01:30')); //,"30:180");
console.log(clockDegree('12:05')); //,"360:30");
console.log(clockDegree('26:78')); //,"Check your time !");
console.log(clockDegree('23:60')); //,"Check your time !");
console.log(clockDegree('24:60')); //,"Check your time !");
console.log(clockDegree('16:25')); //,"120:150");
console.log(clockDegree('17:09')); //,"150:54");
console.log(clockDegree('19:00')); //,"210:360");
console.log(clockDegree('20:34')); //,"240:204");
console.log(clockDegree('23:20')); //,"330:120");
console.log(clockDegree('24:00')); //,"Check your time !");
console.log(clockDegree('-09:00')); //,"Check your time !");
