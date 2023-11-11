/*
Multiplication - Generators #2
Generators can be used to wonderful things. You can use them for numerous things, but here is one specific example. You are studying for a test so you must practice your multiplication, but you don't have a multiplication table showing the different examples. You have decided to create a generator that prints out a limitless list of time tables.
Task
Your generator must take one parameter `a` then everytime the generator is called you must return a string in the format of: `'a x b = c'` where c is the answer. Also, the value of `b`, which starts at 1, must increment by 1 each time!
*/

function* generator(a) {
	let b = 0;
	while (true) {
		b++;
		yield `${a} x ${b} = ${a * b}`;
	}
}

const gen = generator(1);
console.log(gen.next().value); //, '1 x 1 = 1')//, '1 x 1 = 1')
console.log(gen.next().value); //, '1 x 2 = 2')//, '1 x 2 = 2')
console.log(gen.next().value); //, '1 x 3 = 3')//, '1 x 3 = 3')
console.log(gen.next().value); //, '1 x 4 = 4')//, '1 x 4 = 4')
console.log(gen.next().value); //, '1 x 5 = 5')//, '1 x 5 = 5')
