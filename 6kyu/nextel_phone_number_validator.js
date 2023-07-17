/*
Nextel phones have phone number and ID number known as Nextel ID your task is to validate any Nextel ID.

You can search online for examples but to save you some time here are some examples.

Valid IDs:

72 * 673639 * 2
52 * 50875 * 12
30 * 5 * 547604
3 * 05 * 547604
6235 * 1 * 5292
Non Valid IDs:

72 * 673639 * 22
72 * 6736392 *
72 * 673 * 639 * 2
Extra hints:

valid numbers can have any number of spaces between asterisks and numbers, at the beginning or at the end
*/

/*
check for 9 total digit characters (0-9)
and 2 asterisk characters  (*)

str should start and end with spaces and/or digits
str should not have consecutive asterisk characters 
(should be separated by digits and/or spaces)
*/

const isValidNextelPhoneNumber = str =>
	str.match(/\d/g)?.length === 9 &&
	str.match(/\*/g)?.length === 2 &&
	/^\d.+\d$/.test(str.trim()) &&
	!str.includes('**');

console.log(isValidNextelPhoneNumber('72 * 673639 * 2')); //,true)
console.log(isValidNextelPhoneNumber('62')); //,false)
console.log(isValidNextelPhoneNumber('    52   * 50875     * 12')); //,true)
console.log(isValidNextelPhoneNumber(' 30 * 5 * 547604   ')); //,true)
console.log(isValidNextelPhoneNumber(' 30 * 5 * 54760*4')); //,false)
console.log(isValidNextelPhoneNumber('6*2')); //,false)
