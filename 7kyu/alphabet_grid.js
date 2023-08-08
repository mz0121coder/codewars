/*
Task:
You need to write a function grid that returns an alphabetical grid of size NxN, where a = 0, b = 1, c = 2....

Examples:
grid(4)

a b c d
b c d e
c d e f
d e f g
grid(10)

a b c d e f g h i j
b c d e f g h i j k
c d e f g h i j k l
d e f g h i j k l m
e f g h i j k l m n
f g h i j k l m n o
g h i j k l m n o p
h i j k l m n o p q
i j k l m n o p q r
j k l m n o p q r s
Notes:
After "z" comes "a"
If function receive N < 0 should return:
null
*/

function grid(N) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.repeat(1000);
	const result = [];
	for (let i = 1; i <= N; i++) {
		let str = alphabet
			.slice(i - 1, i - 1 + N)
			.replace(/[a-z]/g, x => `${x} `)
			.trim();
		result.push(str);
	}
	return N < 0 ? null : result.join('\n');
}

console.log(grid(0)); //, '');
console.log(grid(1)); //, 'a');
console.log(grid(2)); //, 'a b\nb c');
console.log(grid(4)); //, 'a b c d\nb c d e\nc d e f\nd e f g');
console.log(grid(6)); //, 'a b c d e f\nb c d e f g\nc d e f g h\nd e f g h i\ne f g h i j\nf g h i j k');
console.log(grid(-1)); //, null);
console.log(grid(-5)); //, null);
