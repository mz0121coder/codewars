/*
*************************
*  Create a frame!      *
*           __     __   *
*          /  \~~~/  \  *
*    ,----(     ..    ) *
*   /      \__     __/  *
*  /|         (\  |(    *
* ^  \  /___\  /\ |     *
*    |__|   |__|-..     *
*************************
Given an array of strings and a character to be used as border, output the frame with the content inside.

Notes:

Always keep a space between the input string and the left and right borders.
The biggest string inside the array should always fit in the frame.
The input array is never empty.
Example
frame(['Create', 'a', 'frame'], '+')

Output:

++++++++++
+ Create +
+ a      +
+ frame  +
++++++++++
*/

/*
row width -> length of biggest word in text + 4
outer rows -> repeat char by width
inner rows -> char + ' ' + word + ' '.repeat((width - 3) - word length) + char
*/
const frame = (text, char) => {
	const width = Math.max(...text.map(word => word.length)) + 4;
	const outerRow = `${char}`.repeat(width);
	const grid = [outerRow];
	for (const word of text) {
		const row = `${char} ${word}${' '.repeat(width - 3 - word.length)}${char}`;
		grid.push(row);
	}
	grid.push(outerRow);
	return grid.join('\n');
};

const tests = [
	{
		array: ['Small', 'frame'],
		character: '~',
		output: '~~~~~~~~~\n~ Small ~\n~ frame ~\n~~~~~~~~~',
	},
	{
		array: ['Create', 'this', 'kata'],
		character: '+',
		output: '++++++++++\n+ Create +\n+ this   +\n+ kata   +\n++++++++++',
	},
	{
		array: ['This is a very long single frame'],
		character: '-',
		output:
			'------------------------------------\n- This is a very long single frame -\n------------------------------------',
	},
];

tests.forEach(({ array, character, _ }) =>
	console.log(frame(array, character))
);
