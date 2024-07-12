/*
Task:
You have to follow some rules and examples given below and write a code for printing an interesting pattern with input as n

Rules:
input should be any natural number, if either negative or decimal return check input
space only on the left half of the pattern
keep in mind the spaces between a single element in the pattern
no new line at the end
Examples:
pattern(3)

       *
     1 2 3
    # # # #
    
pattern(12)

                   *
                 1 2 3
                # # # #
               * * * * *
              1 2 3 4 5 6
             # # # # # # #
            * * * * * * * *
           1 2 3 4 5 6 7 8 9
          # # # # # # # # # #
         * * * * * * * * * * *
        1 2 3 4 5 6 7 8 9 0 1 2
       # # # # # # # # # # # # #
*/

function pattern(n) {
	if (n === 0) return '';
	if (n < 1 || n % 1 !== 0) return 'check input';

	const items = ['*'.repeat(n * 2), '1234567890'.repeat(n), '#'.repeat(n * 2)];
	let space = n + 1;
	let row = ' '.repeat(space) + '*';
	const result = [row];
	space--;

	for (let i = 1; i < n; i++) {
		space--;
		const pattern = [...items[i % 3]].slice(0, i + 2).join(' ');
		row = ' '.repeat(space) + pattern;
		result.push(row);
	}

	return result.join('\n');
}

console.log(pattern(-2)); // "check input"
console.log(pattern(1.23)); // "check input"
console.log(pattern(3)); // "    *\n  1 2 3\n # # # #"
console.log(pattern(7)); // "        *\n      1 2 3\n     # # # #\n    * * * * *\n   1 2 3 4 5 6\n  # # # # # # #\n * * * * * * * *"
