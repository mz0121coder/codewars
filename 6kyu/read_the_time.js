// make a 24 hours array starting from midnight
// make a minutes array based on the syntax
// 0 = o'clock
// 15 = quarter past
// 1-14 and 16-29 = n minutes past
// 30 = half past
// 31-44 and 46-59 = n minutes to
// 45 = quarter to
// get index from the arrays for current hour and current minute
// get current hour from hours array using the hour index
// get next hour using the index + 1
// get current minutes from minutes array using the minute index
// get minutes to next hour
// if hour and minutes are both 0, return midnight
// if only minutes are 0 return current hour + " o'clock"
// if minutes are less than 31, return current minutes past current hour
// if minutes are above 30, return minutes to next hour

function solve(time) {
	const hours = [
		'midnight',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'midnight',
	];

	const minutes = [
		"o'clock",
		'one minute past',
		'two minutes past',
		'three minutes past',
		'four minutes past',
		'five minutes past',
		'six minutes past',
		'seven minutes past',
		'eight minutes past',
		'nine minutes past',
		'ten minutes past',
		'eleven minutes past',
		'twelve minutes past',
		'thirteen minutes past',
		'fourteen minutes past',
		'quarter past',
		'sixteen minutes past',
		'seventeen minutes past',
		'eighteen minutes past',
		'nineteen minutes past',
		'twenty minutes past',
		'twenty one minutes past',
		'twenty two minutes past',
		'twenty three minutes past',
		'twenty four minutes past',
		'twenty five minutes past',
		'twenty six minutes past',
		'twenty seven minutes past',
		'twenty eight minutes past',
		'twenty nine minutes past',
		'half past',
		'twenty nine minutes to',
		'twenty eight minutes to',
		'twenty seven minutes to',
		'twenty six minutes to',
		'twenty five minutes to',
		'twenty four minutes to',
		'twenty three minutes to',
		'twenty two minutes to',
		'twenty one minutes to',
		'twenty minutes to',
		'nineteen minutes to',
		'eighteen minutes to',
		'seventeen minutes to',
		'sixteen minutes to',
		'quarter to',
		'fourteen minutes to',
		'thirteen minutes to',
		'twelve minutes to',
		'eleven minutes to',
		'ten minutes to',
		'nine minutes to',
		'eight minutes to',
		'seven minutes to',
		'six minutes to',
		'five minutes to',
		'four minutes to',
		'three minutes to',
		'two minutes to',
		'one minute to',
	];
	// index of current hour and minute
	const hourIndex = Number.parseInt(time.split(':')[0], 10);
	const minuteIndex = Number.parseInt(time.split(':')[1], 10);
	// current hour
	const currentHour = hours[hourIndex];
	// next hour
	const nextHour = hours[hourIndex + 1];
	// current minute
	const currentMinute = minutes[minuteIndex];
	if (minuteIndex === 0) {
		// midnight
		if (hourIndex === 0) {
			return currentHour;
		}
		// o'clock
		return currentHour + ' ' + currentMinute;
		// minutes past current hour
	} else if (minuteIndex < 31) {
		return currentMinute + ' ' + currentHour;
		// minutes to next hour
	} else {
		return currentMinute + ' ' + nextHour;
	}
}
