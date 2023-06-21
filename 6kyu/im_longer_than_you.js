/*Create a function longer that accepts a string and sorts the words in it based on their respective lengths in an ascending order. If there are two words of the same lengths, sort them alphabetically. Look at the examples below for more details.

longer("Another Green World") => Green World Another
longer("Darkness on the edge of Town") => of on the Town edge Darkness
longer("Have you ever Seen the Rain") => the you Have Rain Seen ever
Assume that only only Alphabets will be entered as the input. Uppercase characters have priority over lowercase characters. That is,

longer("hello Hello") => Hello hello
Don't forget to rate this kata and leave your feedback!! Thanks*/

// get minimum and maximum word lengths
// loop from min to max;
// show words with length equal to i (current iteration length)
// sort these words alphabetically
// push to result array
// join as space separated string and return result

function longer(s) {
	const result = [];
	const words = s.split(' ');
	const wordLengths = s.split(' ').map(word => word.length);
	const min = Math.min(...wordLengths);
	const max = Math.max(...wordLengths);
	for (let i = min; i <= max; i++) {
		const currWords = words.filter(word => word.length === i).sort();
		result.push(...currWords);
	}
	return result.join(' ');
}

console.log(longer('Another Green World')); //, "Green World Another")
console.log(longer('Another Green World')); //, "Green World Another")
console.log(longer('Darkness on the edge of Town')); //, "of on the Town edge Darkness")
console.log(longer('Have you ever Seen the Rain')); //, "the you Have Rain Seen ever")
console.log(longer('Like a Rolling Stone')); //, "a Like Stone Rolling")
console.log(longer('This will be our Year')); //, "be our This Year will")
console.log(longer('hello Hello')); //, "Hello hello")

function solve(compasses, gears, tablets) {
	// add up total sets (min value of 3 arguments * 7)
	const totalSets = Math.min(...arguments) * 7;
	// add up points for each glyph (amount * amount)
	const glyphPoints = [...arguments].reduce(
		(acc, curr) => acc + curr * curr,
		0
	);
	// return the sum
	return totalSets + glyphPoints;
}
