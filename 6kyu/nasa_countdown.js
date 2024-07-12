/*
You have the job to implement a countdown function that will be used for the next NASA spatial mission. The function takes a duration in milliseconds and return a string in countdown format.

If it's counting down, the first character should be '-', if it's counting up it should be '+'. Then it should return the number of: hours (min 2 units), minutes (2 units) and seconds (2 units).

countdown(-154800000)  // return  '-43:00:00'
countdown(0)           // return  '+00:00:00'
countdown(61000)       // return  '+00:01:01'
countdown(360000000)   // return '+100:00:00'
*/

function countdown(millisecs) {
	let hrs = 0,
		mins = 0,
		secs = 0;
	let time = Math.abs(millisecs);

	hrs += Math.floor(time / 3600000);
	time -= hrs * 3600000;

	mins += Math.floor(time / 60000);
	time -= mins * 60000;

	secs += Math.floor(time / 1000);
	time -= secs * 1000;

	const format = num => (num < 10 ? `0${num}` : `${num}`);

	return `${millisecs < 0 ? '-' : '+'}${format(hrs)}:${format(mins)}:${format(
		secs
	)}`;
}

console.log(countdown(-154800000)); // '-43:00:00'
console.log(countdown(0)); // '+00:00:00'
console.log(countdown(61000)); // '+00:01:01'
console.log(countdown(360000000)); // '+100:00:00'
