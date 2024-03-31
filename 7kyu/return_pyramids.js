/*
The task is very simple.

You must to return pyramids. Given a number n you print a pyramid with n floors

For example , given a n=4 you must to print this pyramid:

   /\
  /  \
 /    \
/______\ 
   
Other example, given a n=6 you must to print this pyramid:

     /\
    /  \
   /    \
  /      \
 /        \
/__________\
Another example, given a n=10, you must to print this pyramid:

         /\
        /  \
       /    \
      /      \
     /        \
    /          \
   /            \
  /              \
 /                \
/__________________\
Note: a line feed character is needed at the end of the string. Case n=0 should so return "\n".
*/

/*
Start left space as ' '.repeat(n - 1)
Start middle space as 0
Start row as left space + /' '.repeat(middle space)\ + '\n'
Start result as row
Loop from 1 to n - 1:
  Reduce left space by 1 unless its length is < 0
  Increase middle space by 2
  Reassign row to new left space + /' '.repeat(new middle space)\ + '\n'
  On last iteration:
    Replace whitespace between / and \ with underscores
  Add row to result
Return result
*/

function pyramid(n) {
	let left = n - 1;
	let middle = 0;
	let row = `${' '.repeat(left)}/${' '.repeat(middle)}\\\n`;
	let result = row;
	for (let i = 1; i < n; i++) {
		if (left > 0) left--;
		middle += 2;
		const floor = i < n - 1 ? ' ' : '_';
		row = `${' '.repeat(left)}/${floor.repeat(middle)}\\\n`;
		result += row;
	}
	return result;
}

console.log(pyramid(1)); //   "/\\\n");
console.log(pyramid(2)); //   " /\\\n/__\\\n");
console.log(pyramid(4)); //   "   /\\\n  /  \\\n /    \\\n/______\\\n");
console.log(pyramid(6)); //   "     /\\\n    /  \\\n   /    \\\n  /      \\\n /        \\\n/__________\\\n");
console.log(pyramid(10)); //   "         /\\\n        /  \\\n       /    \\\n      /      \\\n     /        \\\n    /          \\\n   /            \\\n  /              \\\n /                \\\n/__________________\\\n");
