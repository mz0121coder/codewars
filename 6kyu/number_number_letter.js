/*
Your task is to write a function named do_math that receives a single argument. This argument is a string that contains multiple whitespace delimited numbers. Each number has a single alphabet letter somewhere within it.

Example : "24z6 1x23 y369 89a 900b"
As shown above, this alphabet letter can appear anywhere within the number. You have to extract the letters and sort the numbers according to their corresponding letters.

Example : "24z6 1x23 y369 89a 900b" will become 89 900 123 369 246 (ordered according to the alphabet letter)
Here comes the difficult part, now you have to do a series of computations on the numbers you have extracted.

The sequence of computations are + - * /. Basic math rules do NOT apply, you have to do each computation in exactly this order.
This has to work for any size of numbers sent in (after division, go back to addition, etc).
In the case of duplicate alphabet letters, you have to arrange them according to the number that appeared first in the input string.
Remember to also round the final answer to the nearest integer.
Examples :
"24z6 1x23 y369 89a 900b" = 89 + 900 - 123 * 369 / 246 = 1299
"24z6 1z23 y369 89z 900b" = 900 + 369 - 246 * 123 / 89 = 1414
"10a 90x 14b 78u 45a 7b 34y" = 10 + 45 - 14 * 7 / 78 + 90 - 34 = 60
Good luck and may the CODE be with you!
*/

// split string by spaces, sort items by index in alphabet of their letters (low to high)
// only show numbers from sorted sequence
// computations + - * / in this order on these numbers
// round final answer to nearest integer

function doMath(s) {
	const computations = '+-*/'.repeat(100);
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	// find items in string matching each letter, only show the numbers
	const sortedStrings = [];
	for (let i = 0; i < alphabet.length; i++) {
		const strings = s.split(' ').filter(str => str.includes(alphabet[i]));
		sortedStrings.push(...strings);
	}
	const numbers = sortedStrings.map(el => Number(el.replace(/[^\d]/g, '')));

	let result = numbers[0];
	numbers.slice(1).forEach((n, i) => {
		switch (computations[i]) {
			case '+':
				result += n;
				break;
			case '-':
				result -= n;
				break;
			case '*':
				result *= n;
				break;
			case '/':
				result /= n;
		}
	});

	// console.log({ s, numbers, result });
	return Math.round(result);
}

console.log(doMath('24z6 1z23 y369 89z 900b')); //,1414);
console.log(doMath('24z6 1x23 y369 89a 900b')); //,1299);
console.log(doMath('10a 90x 14b 78u 45a 7b 34y')); //,60);
console.log(doMath('111a 222c 444y 777u 999a 888p')); //,1459);
console.log(doMath('1z 2t 3q 5x 6u 8a 7b')); //,8);
