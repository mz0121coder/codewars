/*
INFO:
Timmy spends a lot of time talking on the phone and he would like to see which friends he talks to the most. TASK:
Complete the function closestFriends that takes an array history as input. Each element of history is a string in the following format "(000) 000-0000 00:00:00" (where the first part "(000) 000-0000" represents the phone number Timmy talked to and the second "00:00:00" is the call duration (hours : minutes : seconds). Your job is to find the three contacts Timmy talked to the most and return their names in an array sorted by total call durations.
A global variable phonebook is preloaded and contains all the contacts and their phone numbers.

var phonebook = {
     'John' : '(555) 010-3535',
    'Melissa' : '(442) 130-5165',
  'Jack' : '(333) 010-5135'
    //and so on...
};
The input history array will always have at least three different phone numbers.

EXAMPLE:

var history = ["(555) 010-3535 00:13:24", "(442) 130-5165 01:36:26",
"(333) 010-5135 01:38:24"];
closestFriends(history)  // should return ['Jack','Melissa','John'];
Good luck!
*/

/*
Define helper methods to get name and get time 
Loop through history:
Extract name and time (seconds) for each item using methods
Add name and time as keys & values to a times object
Return top 3 names by total time 
*/

function closestFriends(history) {
	const getName = str => {
		for (const name in phonebook) {
			if (phonebook[name] === str) {
				return name;
			}
		}
	};

	const getTime = str => {
		const [hrs, mins, secs] = str.split(':').map(el => Number(el));
		return hrs * 3600 + mins * 60 + secs;
	};

	const times = {};

	history.forEach(item => {
		const phone = item.match(/\(\d{3}\) \d{3}\-\d{4}/)[0];
		const total = item.match(/(\d\d:){2}\d\d/)[0];
		const name = getName(phone);
		times[name] = name in times ? times[name] + getTime(total) : getTime(total);
	});

	return Object.keys(times)
		.sort((a, b) => times[b] - times[a])
		.slice(0, 3);
}

const phonebook = {
	Alfred: '(210) 013-1040',
	Rob: '(424) 012-2013',
	Jason: '(210) 011-0987',
	Betty: '(127) 042-3341',
	Ewa: '(424) 009-3030',
	Bella: '(210) 011-5010',
	Jane: '(424) 013-1032',
	Ray: '(123) 013-7743',
	Mike: '(127) 011-6751',
	Jonathan: '(161) 022-7510',
	Melissa: '(161) 021-6210',
	John: '(110) 010-2689',
	Jack: '(127) 018-6512',
	Michael: '(110) 012-5135',
	Shane: '(424) 017-4123',
	Monica: '(141) 011-6123',
	Rudolf: '(141) 012-6691',
};

const h1 = [
	'(110) 012-5135 01:11:20',
	'(141) 011-6123 00:36:46',
	'(424) 009-3030 01:05:32',
	'(141) 012-6691 01:06:12',
	'(127) 042-3341 01:59:47',
	'(127) 018-6512 00:32:26',
	'(424) 017-4123 01:16:58',
];
const h2 = [
	'(123) 013-7743 00:49:47',
	'(110) 010-2689 01:17:40',
	'(110) 012-5135 00:16:54',
	'(161) 022-7510 00:16:24',
	'(127) 011-6751 01:01:53',
	'(424) 012-2013 01:46:29',
	'(123) 013-7743 00:59:13',
	'(127) 042-3341 04:32:45',
];
const h3 = [
	'(141) 012-6691 01:12:59',
	'(110) 012-5135 00:44:20',
	'(127) 018-6512 01:59:23',
	'(127) 018-6512 01:59:58',
	'(127) 011-6751 00:05:05',
	'(210) 013-1040 01:07:19',
	'(424) 012-2013 01:30:37',
];

console.log(closestFriends(h1)); // [ 'Betty', 'Shane', 'Michael' ]
console.log(closestFriends(h2)); // [ 'Betty', 'Ray', 'Rob' ]
console.log(closestFriends(h3)); // [ 'Jack', 'Rob', 'Rudolf' ]
