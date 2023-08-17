/*
You are writing a chat room app. Users have fed back that seeing everyone's full names on the screen creates too much noise, and have asked for it to be reduced. However, we still want to be able to uniquely identify everyone. The team have come up with a few rules that will hopefully help in solving this problem!

If only one person in the chat room has a specific first name, only their first name will be written out.

John Smith -> John

If two or more people have a specific first name, but don't share a second name initial, their first name and second name initial will be written out.

John Smith -> John S
John Adams -> John A

Finally, if two or more people have a specific first name and last name initial, their full name will be written out.

John Smith -> John Smith
John Simms -> John Simms

To help tidy up the output, management have also asked that the chat room list should be alphebetised, by the users screen names and should all be in Title Case.

JOHN smith -> John Smith
*/

function generateChatRoomNames(users) {
	const obj1 = {};
	const obj2 = {};
	// format names e.g. JOE => Joe
	const list = users.map(el =>
		el.replace(/[a-z]+/gi, w => w[0].toUpperCase() + w.slice(1).toLowerCase())
	);
	list.forEach(user => {
		//   match first name
		const str1 = user.match(/[a-z]+/i)[0];
		// match first name and last name's 1st letter
		const str2 = user.match(/[a-z]+ [A-Z]/i)[0];
		if (str1 in obj1) {
			obj1[str1]++;
		} else {
			obj1[str1] = 1;
		}
		if (str2 in obj2) {
			obj2[str2]++;
		} else {
			obj2[str2] = 1;
		}
	});
	return list
		.map(el => {
			const str1 = el.match(/[a-z]+/i)[0];
			const str2 = el.match(/[a-z]+ [A-Z]/i)[0];
			return obj1[str1] === 1
				? str1
				: obj1[str1] > 1 && obj2[str2] === 1
				? str2
				: el;
		})
		.sort();
}

let names = ['Joe Bloggs'];
let expectedResult = ['Joe'];
console.log(generateChatRoomNames(names)); //, expectedResult)

names = ['JOE Bloggs'];
expectedResult = ['Joe'];
console.log(generateChatRoomNames(names)); //, expectedResult)

names = ['Joe Bloggs', 'John Smith'];
expectedResult = ['Joe', 'John'];
console.log(generateChatRoomNames(names)); //, expectedResult)

names = ['Joe Bloggs', 'John Smith', 'Jane Doe'];
expectedResult = ['Jane', 'Joe', 'John'];
console.log(generateChatRoomNames(names)); //, expectedResult)

names = ['Joe Bloggs', 'John Smith', 'Jane Doe', 'Jane Bloggs'];
expectedResult = ['Jane B', 'Jane D', 'Joe', 'John'];
console.log(generateChatRoomNames(names)); //, expectedResult)

names = ['Joe Bloggs', 'John Smith', 'Jane Doe', 'Jane Bloggs', 'John Scott'];
expectedResult = ['Jane B', 'Jane D', 'Joe', 'John Scott', 'John Smith'];
console.log(generateChatRoomNames(names)); //, expectedResult)
