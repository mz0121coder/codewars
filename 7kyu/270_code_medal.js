// extract hours, minutes, seconds from userTime
// store gold, silver, bronze in an array called medals
// loop through medals array
// on each iteration:
// extract medalHours, medalMinutes, medalSeconds from medal string
// if hours and minutes are less than medal hours and medal minutes, return the medal
// OR
// if hours and minutes are the same but seconds are less, return the medal
// return 'None' otherwise

function evilCodeMedal(userTime, gold, silver, bronze) {
	const [hours, minutes, seconds] = [
		userTime.slice(0, 2),
		userTime.slice(3, 5),
		userTime.slice(6, 8),
	];
	const winningMedal = ['Gold', 'Silver', 'Bronze'];
	const medals = [gold, silver, bronze];
	for (let i = 0; i < medals.length; i++) {
		//   if hours are less
		if (Number(hours < Number(medals[i].slice(0, 2)))) {
			return winningMedal[i];
		}
		//   if hours are less or equal and minutes are less
		if (
			Number(hours) <= Number(medals[i].slice(0, 2)) &&
			Number(minutes) < Number(medals[i].slice(3, 5))
		) {
			return winningMedal[i];
		}
		//   if hours and minutes are same and seconds are less
		if (
			hours === medals[i].slice(0, 2) &&
			minutes === medals[i].slice(3, 5) &&
			Number(seconds) < Number(medals[i].slice(6, 8))
		) {
			return winningMedal[i];
		}
	}
	return 'None';
}
