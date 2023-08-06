/*
Task:
In this kata, your task will be to replace sad emoticons with funny ones.

The emoticons, will be represented from:

Eyes: marked as :, ; or =
Nose (optional): marked as - or ~
Mouth: marked as ( or [
Examples:
smile("Howdy :(")  // should return "Howdy :)"
smile("Never be sad =[")  // should return "Never be sad =]"
smile("Change this `=(` and this `:[`")  // should return "Change this `=)` and this `:]`"
*/

function smile(text) {
	return text.replace(/[:;=][-~]?[\(\[]/g, x =>
		x.slice(-1) === '[' ? x.slice(0, -1) + ']' : x.slice(0, -1) + ')'
	);
}

console.log(smile('Howdy :(')); //, 'Howdy :)');
console.log(smile('Never be sad =[')); //, 'Never be sad =]');
console.log(smile("It's been raining all day ;-(")); //, 'It\'s been raining all day ;-)');
console.log(smile('My friend got married ;~[')); //, 'My friend got married ;~]');
