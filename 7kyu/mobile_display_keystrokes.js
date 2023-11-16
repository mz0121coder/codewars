/*
Do you remember the old mobile display keyboards? Do you also remember how inconvenient it was to write on it?
Well, here you have to calculate how many keystrokes you have to do for a specific word.

This is the layout:


Given a string, return the number of keystrokes necessary to type it. You can assume that the input will entirely consist of characters included in the mobile layout (lowercase letters, digits, and the symbols * and #).

Examples
"*#"       =>  2 (1 + 1)
"123"      =>  3 (1 + 1 + 1)
"abc"      =>  9 (2 + 3 + 4)
"codewars" => 26 (4 + 4 + 2 + 3 + 2 + 2 + 4 + 5)
*/

function mobileKeyboard(str) {
	const keys = [
		'1',
		'2abc',
		'3def',
		'4ghi',
		'5jkl',
		'6mno',
		'7pqrs',
		'8tuv',
		'9wxyz',
		'*',
		'0',
		'#',
	];
	let count = 0;
	for (const char of str) {
		const keypad = keys.find(item => item.includes(char));
		const keystrokes = keypad.split('').findIndex(el => el === char) + 1;
		count += keystrokes;
	}
	return count;
}

console.log(mobileKeyboard('')); // 0
console.log(mobileKeyboard('123')); // 3
console.log(mobileKeyboard('codewars')); // 26
console.log(mobileKeyboard('zruf')); // 16
console.log(mobileKeyboard('thisisasms')); //, 37
console.log(mobileKeyboard('longwordwhichdontreallymakessense')); // 107
