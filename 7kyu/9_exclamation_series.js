/*Remove or add a exclamation mark at the end of words of the sentence. Words are separated by spaces in the sentence. That is: If a word has one ! at the end, remove it; If a word has no ! at the end, add a ! to the end; If there are more than one ! at the end of word, keep it.

Examples
removeOrAdd("Hi!") === "Hi"
removeOrAdd("Hi! Hi!") === "Hi Hi"
removeOrAdd("Hi! Hi") === "Hi Hi!"
removeOrAdd("Hi! Hi Hi!!") === "Hi Hi! Hi!!"
removeOrAdd("!Hi! !Hi !Hi!!") === "!Hi !Hi! !Hi!!"
Note*/

function removeOrAdd(string) {
	return string
		.split(' ')
		.map(item =>
			item.match(/[a-z]+!$/i)
				? item.slice(0, item.length - 1)
				: item.match(/[a-z]$/i)
				? item + '1'
				: item
		)
		.join(' ');
}

console.log(removeOrAdd('Hi!')); //, "Hi");
console.log(removeOrAdd('Hi! Hi!')); //, "Hi Hi");
console.log(removeOrAdd('Hi! Hi')); //, "Hi Hi!");
console.log(removeOrAdd('Hi! Hi Hi!!')); //, "Hi Hi! Hi!!");
console.log(removeOrAdd('!Hi! !Hi !Hi!!')); //, "!Hi !Hi! !Hi!!");

function countBy(x, n) {
	let z = [];
	for (let i = x; i <= n * x; i += x) {
		z.push(i);
	}
	return z;
}
