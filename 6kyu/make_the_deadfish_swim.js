/*Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/
function parse(data) {
	const arr = [];
	let calc = 0;
	for (let i = 0; i < data.length; i++) {
		switch (data[i]) {
			case 'i':
				calc++;
				break;
			case 'd':
				calc--;
				break;
			case 's':
				calc *= calc;
				break;
			case 'o':
				arr.push(calc);
		}
	}
	return arr;
}
console.log(parse('iiisdoso'));
