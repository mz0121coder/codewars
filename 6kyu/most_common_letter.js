/*
Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

If such letters are two or more, choose the one that appears in the string( earlier.

For example:

('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd'
*/

function replaceCommon(string, letter) {
	const frequency = x => string.split('').filter(el => el === x).length;
	const mostFrequent = string
		.match(/[a-z]/g)
		.sort((a, b) => frequency(b) - frequency(a))[0];
	return string.replaceAll(mostFrequent, letter);
}

console.log(replaceCommon('my mom loves me as never did', 't')); //, 'ty tot loves te as never did');
console.log(replaceCommon('real talk bro', 'n')); //, 'neal talk bno');
console.log(replaceCommon('great job go ahead', 'k')); //, 'grekt job go khekd');
console.log(replaceCommon('yyyaaa twwww ttt uuu ccca', 'p')); //, 'yyyppp twwww ttt uuu cccp');

function isAValidMessage(message) {
	// get numbers in message
	const numbers = message.match(/\d+/g);
	//   get strings
	const strings = message.match(/[a-z]+/g);
	//   check each number matches length of its string or message is empty
	return (
		message === '' ||
		numbers.every((n, i, arr) => Number(n) === strings[i].length)
	);
}
