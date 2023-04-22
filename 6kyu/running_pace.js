/*In this Kata, we will calculate running pace. To do that, we have to know the distance and the time.

Create the following function:

runningPace(distance, time)

Where: distance - A float with the number of kilometres

time - A string containing the time it took to travel the distance. It will always be minutes:seconds. For example "25:00" means 25 minutes. You don't have to deal with hours.

The function should return the pace, for example "4:20" means it took 4 minutes and 20 seconds to travel one kilometre.

Note: The pace should always return only the number of minutes and seconds. You don't have to convert these into hours. Floor the number of seconds.

*/

function runningPace(distance, time) {
	let totalTime = time.split(':')[0] * 60 + Number(time.split(':')[1]);
	const minutes = totalTime / distance / 60;
	const seconds = (minutes % 1) * 60;
	return (
		minutes.toString().replace(/\.\d+/, '') +
		':' +
		(seconds > 9.99 && seconds < 10
			? Math.round(seconds)
			: seconds === 0
			? '00'
			: Math.floor(seconds)
		).toString()
	);
}

console.log(runningPace(1, '3:15')); //, "3:15");
console.log(runningPace(5, '25:00')); //, "5:00");
console.log(runningPace(15, '75:00')); //, "5:00");
console.log(runningPace(2.51, '10:43')); //, "4:16");
console.log(runningPace(4.99, '22:32')); //, "4:30");
console.log(runningPace(0.2, '0:38')); //, "3:10");
console.log(runningPace(42.195, '122:57')); //, "2:54");
