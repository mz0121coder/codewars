/*
Build a pyramid
You will get a string s with an even length, and an integer n which represents the height of the pyramid and your task is to draw the following pattern. Each line is seperated with "\n".

n will always be greater than 3. No need to check for invalid parameters
There are no whitespaces at the end of the lines
Example
build_pyramid("00-00..00-00", 7) should return:

                                    00-00..00-00
                              0000--0000....0000--0000
                        000000---000000......000000---000000
                   00000000----00000000........00000000----00000000
            0000000000-----0000000000..........0000000000-----0000000000
      000000000000------000000000000............000000000000------000000000000
00000000000000-------00000000000000..............00000000000000-------00000000000000
*/

/*
extract blocks (letters and numbers) and non-blocks from str
loop from 1 to n,
repeat blocks/non-blocks n times and add this row to pyramid array
add correct beginning space to each row
join and return pyramid array with \n 
*/

function buildPyramid(str, n) {
	const blocks = [...new Set(str.match(/[a-z\d]+/gi))];
	const joins = [...new Set(str.match(/[^a-z\d]+/gi))];

	const pyramid = [];
	for (let i = 1; i <= n; i++) {
		let row = str;
		for (const el of blocks.concat(joins))
			row = row.replaceAll(el, el.repeat(i));
		pyramid.push(row);
	}

	const maxWidth = pyramid.at(-1).length;
	return pyramid
		.map(row => {
			const space = maxWidth - row.length;
			return `${' '.repeat(space / 2)}${row}`;
		})
		.join('\n');
}

console.log(buildPyramid('00-00..00-00', 3)); //, "            00-00..00-00\n      0000--0000....0000--0000\n000000---000000......000000---000000",

console.log(buildPyramid('00-00..00-00', 7)); //, "                                    00-00..00-00\n                              0000--0000....0000--0000\n                        000000---000000......000000---000000\n                  00000000----00000000........00000000----00000000\n            0000000000-----0000000000..........0000000000-----0000000000\n      000000000000------000000000000............000000000000------000000000000\n00000000000000-------00000000000000..............00000000000000-------00000000000000",
