/*
It is a simple, real world task. You will receive a single string as input. It will have the month (2 digits) and year(2 or 4 digits). These are separated by one character ("-" or "/", maybe some spaces too). For example:

02/21
02 / 21
02 / 2021
02-2021
Assume that all dates are in the XXI century.

Your task is to write a function that returns true or false if the expiry date is not in the past. Note, current month should still return true.

Good luck.
*/

/*
get month and yr from date
get current month and yr
check if curr month <= date month & curr yr <= date yr
OR
curr yr < date yr
*/

function checkExpiryValid(date) {
	const currMonth = Number(new Date().toLocaleDateString().match(/^\d+/)[0]);
	const currYear = Number(new Date().toLocaleDateString().match(/\d{2}$/)[0]);
	const cardMonth = Number(date.match(/^\d+/)[0]);
	const cardYear = Number(date.match(/\d{2}$/)[0]);
	return (
		(currMonth <= cardMonth && currYear <= cardYear) || currYear < cardYear
	);
}

console.log(checkExpiryValid('03/15')); //, false, 'should not approve dates in the past')
console.log(checkExpiryValid('03/33')); //, true, 'should approve dates in the future')
console.log(checkExpiryValid('03-15')); //, false, 'should work with any separator')
console.log(checkExpiryValid('03 / 15')); //, false, 'should work with any separator')
console.log(checkExpiryValid('03-2015')); //, false, 'should work with any length of separators')
