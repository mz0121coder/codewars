/*
This is a simplified version of Racing #2: Accelerated Drag Race.

Anna and Bob are good friends, but also rival drag racers. Bob just got his engine reconditioned and wants to prove that he is the fastest of the two.

In this kata, you will simulate a drag race between Anna and Bob and determine the winner. You will do this by implementing the function dragRace (or drag_race in Python).

Input

You are given the length of the track in meters (len in JavaScript, length in Python). Also, you are given the two competing cars (anna and bob).

The cars are Car objects. In JavaScript, they have the following properties.

speed        -> the speed of the car in m/s
reactionTime -> the reaction time of its driver in s
In Python, these are the properties of Car objects.

speed         -> the speed of the car in m/s
reaction_time -> the reaction time of its driver in s
The reaction time indicates how long it takes before the driver starts to drive after the start of the race. For example if Anna has a reaction time of 1s, and Bob has a reaction time of 2s, Bob starts driving one second later than Anna.

The cars do not require any time to accelerate to their speed. In other words, the cars go from zero to their speed in literally no time.

Output

If there is no winner, return the string It's a draw.

If there is a winner, return the string [name] is the winner.
*/

/*
Start seconds and distance for racers at 0
While true, increase seconds
if seconds >= a racer's reaction time, increase racer's distance by their speed per second
if one racer's distance is >= track length before other racer, they are the winner
*/

function dragRace(len, anna, bob) {
	let time = 0;
	let annaDistance = 0;
	let bobDistance = 0;
	const finish = [];
	while (true) {
		if (time >= anna.reactionTime / 10) {
			annaDistance += anna.speed;
			if (annaDistance >= len) finish.push('Anna');
		}
		if (time >= bob.reactionTime / 10) {
			bobDistance += bob.speed;
			if (bobDistance >= len) finish.push('Bob');
		}
		if (finish.length === 1) return `${finish[0]} is the winner`;
		if (finish.length === 2)
			return annaDistance > bobDistance
				? `Anna is the winner`
				: bobDistance > annaDistance
				? `Bob is the winner`
				: `It's a draw`;
		time += 0.1;
	}
}

console.log(dragRace(100, ANNA, BOB)); // "Anna is the winner"
console.log(dragRace(150, ANNA, BOB)); // "Bob is the winner"
console.log(dragRace(120, ANNA, BOB)); // "It's a draw"
