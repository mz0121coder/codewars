/*
Description:
Your task in order to complete this Kata is to write a function which formats a working hours schedule, given as an array of objects, in a human-friendly way.

The function must accept an unsorted array. If the array is empty, it just returns an empty array. Otherwise, it should make a sorted human-friendly schedule of working hours and return it as a string.

The output format for one day should be SUN: 11:00 - 23:00.

If two or more days of the week in a row have the same working hours they should be concatenated and have the following format: MON - WED: 11:00 - 23:00.

It is much easier to understand with an example:

** Input **

  
const data = [
    {
        "day": "sat",
        "from": "10:00",
        "to": "23:00"
    },
    {
        "day": "mon",
        "from": "11:00",
        "to": "23:00"
    },
    {
        "day": "tue",
        "from": "11:00",
        "to": "23:00"
    },
    {
        "day": "wed",
        "from": "11:00",
        "to": "23:00"
    },
    {
        "day": "thu",
        "from": "12:00",
        "to": "23:00"
    },
    {
        "day": "fri",
        "from": "12:00",
        "to": "23:00"
    },
    {
        "day": "sun",
        "from": "11:00",
        "to": "23:00"
    }
]
** Output **

MON - WED: 11:00 - 23:00
THU - FRI: 12:00 - 23:00
SAT: 10:00 - 23:00
SUN: 11:00 - 23:00
Be careful because some days may be missed. You may be given an array only of Monday and Friday with the same hours, but they shouldn't be concatenated.
*/

const readableTimetable = workdays => {
	if (!workdays.length) return [];

	const map = workdays.reduce((obj, { day, from, to }) => {
		obj[day.toUpperCase()] = `${from} - ${to}`;
		return obj;
	}, {});

	let leftIndex = 0;
	let rightIndex = -1;
	let prevHours = '';

	const addHours = () =>
		result.push(
			leftIndex === rightIndex
				? `${days[leftIndex]}: ${prevHours}`
				: `${days[leftIndex]} - ${days[rightIndex]}: ${prevHours}`
		);

	const result = [];
	const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

	for (let i = 0; i < days.length; i++) {
		if (!(days[i] in map)) continue;
		const hours = map[days[i]];
		if (hours === prevHours && i === rightIndex + 1) {
			rightIndex = i;
		} else {
			if (prevHours !== '') addHours();
			leftIndex = i;
			rightIndex = i;
			prevHours = hours;
		}
	}

	addHours();
	return result.join('\n');
};

const test0 = [
	{ day: 'mon', from: '11:00', to: '23:00' },
	{ day: 'tue', from: '11:00', to: '22:00' },
	{ day: 'wed', from: '11:00', to: '23:00' },
	{ day: 'thu', from: '12:00', to: '22:00' },
	{ day: 'fri', from: '12:00', to: '23:00' },
	{ day: 'sat', from: '10:00', to: '22:00' },
	{ day: 'sun', from: '11:00', to: '23:00' },
];

const test1 = [
	{ day: 'mon', from: '11:00', to: '23:00' },
	{ day: 'tue', from: '11:00', to: '23:00' },
	{ day: 'wed', from: '11:00', to: '23:00' },
	{ day: 'thu', from: '12:00', to: '23:00' },
	{ day: 'fri', from: '12:00', to: '23:00' },
	{ day: 'sat', from: '10:00', to: '23:00' },
	{ day: 'sun', from: '11:00', to: '23:00' },
];

const test2 = [
	{ day: 'mon', from: '11:00', to: '23:00' },
	{ day: 'tue', from: '11:00', to: '23:00' },
	{ day: 'thu', from: '11:00', to: '23:00' },
	{ day: 'sat', from: '11:00', to: '23:00' },
	{ day: 'sun', from: '11:00', to: '23:00' },
];

console.log(readableTimetable(test0));
console.log(readableTimetable(test1));
console.log(readableTimetable(test2));
