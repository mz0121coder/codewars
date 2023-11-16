/*
Task
Write a function that accepts msg string and returns local tops of string from the highest to the lowest.
The string's tops are from displaying the string in the below way:

                                                      3
                              p                     2   4
            g               o   q                 1
  b       f   h           n       r             z
a   c   e       i       m          s          y
      d           j   l             t       x
                    k                 u   w
                                        v
The next top is always 1 character higher than the previous one. For the above example, the solution for the abcdefghijklmnopqrstuvwxyz1234 input string is 3pgb.

When the msg string is empty, return an empty string.
The input strings may be very long. Make sure your solution has good performance.
Check the  cases for more samples.
*/

/*
loop through chars in msg
increase/decrease position if direction is up/down
change direction and reassign peak/trough when there is a new high/low
add peaks to beginning of result string
*/

function tops(msg) {
	let tops = '';
	let peak = 0;
	let trough = 0;
	let position = -1;
	let direction = 'up';

	for (let i = 0; i < msg.length; i++) {
		if (direction === 'up') position++;
		if (direction === 'down') position--;
		if (position > peak) {
			peak = position;
			tops = `${msg[i]}${tops}`;
			direction = 'down';
		}
		if (position < trough) {
			trough = position;
			direction = 'up';
		}
	}
	return tops;
}

console.log(tops(''));
console.log(tops('12'));
console.log(tops('abcdefghijklmnopqrstuvwxyz12345'));
console.log(tops('abcdefghijklmnopqrstuvwxyz1236789ABCDEFGHIJKLMN'));
