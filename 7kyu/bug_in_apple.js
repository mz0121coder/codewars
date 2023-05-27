/*This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version.

Task:
Find out "B"(Bug) in a lot of "A"(Apple).

There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

input: string Array apple

output: Location of "B", [x,y]*/

function sc(apple) {
	// index of nested array containing 'B'
	const row = apple.findIndex(arr => arr.includes('B'));
	// index of 'B' in the nested array
	const col = apple[row].indexOf('B');
	return [row, col];
}

console.log(
	sc([
		['B', 'A', 'A', 'A', 'A'],
		['A', 'A', 'A', 'A', 'A'],
		['A', 'A', 'A', 'A', 'A'],
		['A', 'A', 'A', 'A', 'A'],
		['A', 'A', 'A', 'A', 'A'],
	])
); // [0,0]

console.log(
	sc([
		['A', 'A', 'A', 'A', 'A'],
		['A', 'A', 'A', 'A', 'A'],
		['A', 'A', 'A', 'A', 'A'],
		['A', 'A', 'A', 'A', 'A'],
		['A', 'B', 'A', 'A', 'A'],
	])
); // [4,1]

function calc(x) {
	let total1 = '';
	let total2 = '';
	for (let i = 0; i < x.length; i++) {
		total1 += x[i].charCodeAt();
	}
	total2 = total1.replace(/7/g, '1');
	return total1 === total2 ? 0 : total1.match(/7/g).length * 6;
}
