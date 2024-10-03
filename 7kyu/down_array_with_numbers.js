/*
Given a number n, make a down arrow shaped pattern.

For example, when n = 5, the output would be:

123454321
 1234321
  12321
   121
    1
and for n = 11, it would be:

123456789010987654321
 1234567890987654321
  12345678987654321
   123456787654321
    1234567654321
     12345654321
      123454321
       1234321
        12321
         121
          1
          
An important thing to note in the above example is that the numbers greater than 9 still stay single digit, like after 9 it would be 0 - 9 again instead of 10 - 19.

Note:

There are spaces for the indentation on the left of each line and no spaces on the right.
Return "" if given n<1.
Have fun!
*/

function getADownArrowOf(n) {
	if (n < 1) return '';
	let digits = `1234567890`.repeat(n);
	const shape = [];
	for (let i = 0; i < n; i++) {
		const left = digits.slice(0, n - i);
		const right = [...left.slice(0, -1)].reverse().join('');
		shape.push(' '.repeat(i) + left + right);
	}
	return shape.join('\n');
}

console.log(getADownArrowOf(1)); // "1"
console.log(getADownArrowOf(3)); // "12321\n 121\n  1"
console.log(getADownArrowOf(5)); // "123454321\n 1234321\n  12321\n   121\n    1"
