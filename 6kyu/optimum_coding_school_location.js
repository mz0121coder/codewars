/*
DESCRIPTION:
Preface
You are currently working together with a local community to build a school teaching children how to code. First plans have been made and the community wants to decide on the best location for the coding school. In order to make this decision data about the location of students and potential locations is collected.

Problem
In order to be able to attract and teach as many students as possible we want to minimize the total traveling distance for potential students. The streets system is organized in a traditional grid system and students can only travel horizontally or vertically (not diagonal).

The locations of interested students is given as an array with the first value of each entry presenting the x coordinate and the second value presenting the y coordinate:

var students = [[3,7],[2,2],[14,1], ...];
Potential locations are passed as an array of objects with an unique id, a x and y coordinate:

var locations = [{id: 1, x: 3, y: 4}, {id: 2, x: 8, y: 2}, ...];
Your task is now to evaluate which of the school locations would be best to minimize the distance for all potential students to the school.

The desired output should consist of a string indicating the ID of the best suitable location and the x and y coordinates in the following form:

"The best location is number 1 with the coordinates x = 3 and y = 4"
*/

/*
define a helper that takes in an obj with x and y coords
as well as an array of arrays with x/y coords,
loops through the array and calculates + returns total distance

loop through locations, calling helper method on location and students
reassign best location and min distance

return best location number and coords in string with the correct format
*/
const optimumLocation = function (students, locations) {
	const getDistance = (coords, distances) => {
		let total = 0;
		for (const item of distances) {
			const [x, y] = item;
			total += Math.abs(coords.x - x);
			total += Math.abs(coords.y - y);
		}
		return total;
	};
	let min = Infinity;
	let best = null;
	locations.forEach((coords, i) => {
		const distance = getDistance(coords, students);
		if (distance < min) {
			min = distance;
			best = { ...coords, number: i + 1 };
		}
	});
	return `The best location is number ${best.number} with the coordinates x = ${best.x} and y = ${best.y}`;
};

console.log(
	optimumLocation(
		[
			[3, 7],
			[2, 2],
			[14, 1],
		],
		[
			{ id: 1, x: 3, y: 4 },
			{ id: 2, x: 8, y: 2 },
		]
	)
); //, "The best location is number 1 with the coordinates x = 3 and y = 4")

console.log(
	optimumLocation(
		[
			[152, 7],
			[1, 211],
			[14, 56],
			[12, 4],
			[142, 7],
		],
		[
			{ id: 1, x: 63, y: 55 },
			{ id: 2, x: 55, y: 21 },
			{ id: 3, x: 144, y: 12 },
		]
	)
); //,  "The best location is number 2 with the coordinates x = 55 and y = 21")
