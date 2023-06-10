/*
Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22

in the same manner:

05:25 --> 06:35

01:50 --> 10:10

11:58 --> 12:02

12:01 --> 11:59

Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string.

Return the real time as a string.

Consider hours to be between 1 <= hour < 13.

So there is no 00:20, instead it is 12:20.

There is no 13:20, instead it is 01:20.
*/

// swap hours > 12 with their left side,
// swap hours < 12 with their right side
// store new hour as variable
// subtract minutes from 60 to get new minutes
// if new minutes < 10, add a 0 to the start
// if new minutes === 60, add 1 to new hour, add 0 to its start if < 10
// return new hour : 00
// else return new hour : new minutes

function WhatIsTheTime(timeInMirror) {
	const right = ['12', '01', '02', '03', '04', '05'];
	const left = ['11', '10', '09', '08', '07', '06'];
	const [hours, minutes] = timeInMirror.split(':');
	const newHours = right.includes(hours)
		? left[right.indexOf(hours)]
		: right[left.indexOf(hours)];
	const newMinutes = 60 - Number(minutes);
	if (newMinutes < 10) {
		return `${newHours}:0${newMinutes}`;
	}
	if (newMinutes === 60) {
		const nextHours = Number(newHours) + 1;
		return nextHours < 10 ? `0${nextHours}:00` : `${nextHours}:00`;
	}
	return `${newHours}:${newMinutes}`;
}
