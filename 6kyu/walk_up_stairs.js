/*
define empty result array
define a string variable, initially empty
define number variable that starts at 0
starting space is 2 * ((n * 2) - 2) for first step
define a space in a variable, initially equal to starting space

loop from 1 up to n
increase number by 1, unless i is divisible by 10 (then reassign num to 0)

on first iteration:
reassign string to '1 1'
push " ".repeat(space) + string to result

on all other iterations:
decrease space by 4
reassign string to:
1st half + ' num num ' + 2nd half
push " ".repeat(space) + string to result
*/

const stairs = n => {
	const result = [];
	let string = '';
	let num = 0;
	let space = 2 * (n * 2 - 2);
	// loop from 1 to n
	for (let i = 1; i <= n; i++) {
		num++;
		// reset num to 0 if i is a multiple of 10
		if (i % 10 === 0) {
			num = 0;
		}
		if (i === 1) {
			// for the first iteration, set string to '1 1'
			string = '1 1';
			result.push(' '.repeat(space) + string);
		} else {
			// for other iterations, update string based on previous string
			space -= 4;
			const digits = string.match(/\d/g);
			string = `${digits
				.slice(0, digits.length / 2)
				.join(' ')} ${num} ${num} ${digits.slice(digits.length / 2).join(' ')}`;
			result.push(' '.repeat(space) + string);
		}
	}
	// return the final result as a string separated by new lines
	return n < 1 ? '' : result.join('\n');
};

console.log(stairs(10));
