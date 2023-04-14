/*
Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space))//, without leading/trailing spaces.

Examples
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"
FUNDAMENTALSSTRINGSALGORITHMS
*/

function remove(string) {
	return string
		.split(' ')
		.filter(item => !item.includes('!') || item.match(/!/g).length > 1)
		.join(' ');
}

console.log(remove('Hi!')); //, '');
console.log(remove('Hi! Hi!')); //, '');
console.log(remove('Hi! Hi! Hi!')); //, '');
console.log(remove('Hi Hi! Hi!')); //, 'Hi');
console.log(remove('Hi! !Hi Hi!')); //, '');
console.log(remove('Hi! Hi!! Hi!')); //, 'Hi!!');
console.log(remove('Hi! !Hi! Hi!')); //, '!Hi!');
