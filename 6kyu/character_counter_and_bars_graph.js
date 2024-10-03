/*
1) Given some text, count each alphabetic character's occurrence in it, regardless of the case.

2) Let's suppose you have to use an old terminal window to represent the occurrencies of each character in a text-based horizontal bar graph. The terminal has a maximum width, provided as parameter (max_units_on_screen), and you have to abide by it.

For example, if the maximum width is 80, your longest bar in the graph will be scaled to this size and all the others have to be represented and scaled proportionally to this size. Every unit of the bar will be represented by the character #. See examples below for typical output format.

3) The bars of the graph have to be sorted by number of occurrencies (from biggest to lowest, before getting scaled), then by alphabetic order of the letter (from a to z). Approximation of decimal numbers will happen on the lowest integer (for example: 57.1, 57.2, 57.68, 57.999 will all get reduced to 57 )

Example

Input:

count_and_print_graph("just a short text", 4)
Output:

t:####
s:##
a:#
e:#
h:#
j:#
o:#
r:#
u:#
x:#
Example 2

Input:

count_and_print_graph("just a short text", 23)
Output:

t:#######################
s:###########
a:#####
e:#####
h:#####
j:#####
o:#####
r:#####
u:#####
x:#####
*/

function countCharsBarGraph(text, maxw) {
	const map = {};
	let maxCount = 0;
	for (const char of text.toLowerCase().replace(/[^a-z]/g, '')) {
		map[char] = (map[char] || 0) + 1;
		maxCount = Math.max(maxCount, map[char]);
	}
	const values = [...new Set(Object.values(map).sort((a, b) => b - a))];
	const result = [];
	const scale = maxw / maxCount;
	for (const val of values) {
		const keys = Object.keys(map)
			.filter(key => map[key] === val)
			.sort();
		keys.forEach(key =>
			result.push(`${key}:${'#'.repeat(Math.floor(scale * map[key]))}`)
		);
	}
	return result.join('\n');
}

const text1 = 'aaazbbbzzfffffzRRrTTkkjjkkkkTtrr';
const text2 = 'aaazzzzRRrTTTtrr';
const text3 = 'aaazzzzRRrTTTtrr';

console.log(countCharsBarGraph(text1, 100));
console.log(countCharsBarGraph(text2, 5));
console.log(countCharsBarGraph(text3, 10));
