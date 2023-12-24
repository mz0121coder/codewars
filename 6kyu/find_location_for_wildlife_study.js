/*
Researchers found some old data from a wildlife study done in the past. The developer working on a program to organize the data left the project before it was completed. The researchers need you to write a function to get the formal name of a location from a string that was entered by the original observers in the study.

A location name will be all the capitalized words before the word "Park", "Preserve", "Reservation", "Reserve" or "Recreation Area". The location name will also include those words: "Park", "Preserve", etc.

The location name could be at the very beginning of the sentence or preceded by only one word in which case your code should not return the preceding words: "The", "At" or "In".

Note: Those three words will be the only words preceding a location name at the beginning of a sentence in the data given.

In some cases, the location name will be the only thing entered.

Examples:

Input: "The bird was in the parking lot at North Chagrin Reservation foraging under a sycamore tree."
Your code would return the string: "North Chagrin Reservation"

Input: "At Lingmeyer Beach Park in the far eastern dunes."
Your code would return the string "Lingmeyer Beach Park"

Input: "Newcastle Shorebird Reserve"
Your code would return "Newcastle Shorebird Reserve"

Input: "At the north entrance to Ypsilanti Lakeshore Preserve."
Your code would return only "Ypsilanti Lakeshore Preserve"

Please help the researchers with your coding skills.
*/
// 1st solution
// function findTheLocation(str) {
// 	const names = [];
// 	const words = str.split(' ');
// 	const isValid = s => /^[A-Z][a-z]+/.test(s) && !/^(the|at|in)$/i.test(s);
// 	let group = [];
// 	for (let i = 0; i < words.length; i++) {
// 		if (isValid(word)) {
// 			group.push(word.replace(/\.$/, ''));
// 			if (i === words.length - 1) names.push(group.join(' '));
// 		} else {
// 			const location = group.join(' ');
// 			if (
// 				group.length > 1 &&
// 				/(Park|Reservation|Reserve|Recreation Area|Preserve)$/.test(location)
// 			) {
// 				names.push(location);
// 			}
// 			group = [];
// 		}
// 	}
// 	return names[0];
// }

/*
define empty location string
define helper methods to check for a valid word and location

loop through words in str, on each iteration:
if word is valid, add it to current group (array)
if group is valid location, reassign location to group.join(' ')
else group = []

return location
*/

// cleaned up
function findTheLocation(str) {
	let location = '';
	const isValidWord = s => /^[A-Z][a-z]+/.test(s) && !/^(the|at|in)$/i.test(s);
	const isValidLocation = arr =>
		arr.length > 1 &&
		/(Park|Reservation|Reserve|Recreation Area|Preserve)$/.test(arr.join(' '));

	let group = [];
	for (const word of str.split(' ')) {
		if (isValidWord(word)) {
			group.push(word.replace(/\.$/, ''));
			if (isValidLocation(group)) location = group.join(' ');
		} else {
			group = [];
		}
	}
	return location;
}

console.log(
	findTheLocation(
		'The bird was in the parking lot at North Chagrin Reservation foraging under a sycamore tree.'
	)
); //, "North Chagrin Reservation");
console.log(
	findTheLocation('At Lingmeyer Beach Park in the far eastern dunes.')
); //, "Lingmeyer Beach Park");
console.log(findTheLocation('Newcastle Shorebird Reserve')); //, "Newcastle Shorebird Reserve");
