/*
You're looking through different hex codes, and having trouble telling the difference between #000001 and #100000

We need a way to tell which is red, and which is blue!

That's where you create hex_color()!

It should read an RGB input, and return whichever value (red, blue, or green) is of greatest concentration!

But, if multiple colors are of equal concentration, you should return their mix!

red + blue = magenta

green + red = yellow

blue + green = cyan

red + blue + green = white
One last thing, if the string given is empty, or has all 0's, return black!

Examples:

hexColor('087 255 054') == 'green'
hexColor('181 181 170') == 'yellow'
hexColor('000 000 000') == 'black'
hexColor('001 001 001') == 'white'
*/

function hexColor(codes) {
	const [r, g, b] = codes.split(' ').map(str => Number(str));
	const colours = [r, g, b];
	const max = Math.max(r, g, b);
	const maxValues = [r, g, b].filter(el => el === max);
	switch (true) {
		case !maxValues.length || max === 0:
			return 'black';
		case maxValues.length === 1:
			return ['red', 'green', 'blue'][colours.indexOf(max)];
		case r === max && b === max && g !== max:
			return 'magenta';
		case g === max && r === max && b !== max:
			return 'yellow';
		case b === max && g === max && r !== max:
			return 'cyan';
		case [r, g, b].every(el => el === max):
			return 'white';
	}
}

console.log(hexColor('')); //, 'black')
console.log(hexColor('000 000 000')); //, 'black')
console.log(hexColor('121 245 255')); //, 'blue')
console.log(hexColor('027 100 100')); //, 'cyan')
console.log(hexColor('021 021 021')); //, 'white')
console.log(hexColor('255 000 000')); //, 'red')
console.log(hexColor('000 147 000')); //, 'green')
console.log(hexColor('212 103 212')); //, 'magenta')
console.log(hexColor('101 101 092')); //, 'yellow')
