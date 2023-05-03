/*Sort an array by value and index
Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

For sorting the index starts at 1, NOT at 0!
The sorting has to be ascending.
The array will never be null and will always contain numbers.

Example:

Input: 23, 2, 3, 4, 5
Product of value and index:
23 => 23 * 1 = 23  -> Output-Pos 4
 2 =>  2 * 2 = 4   -> Output-Pos 1
 3 =>  3 * 3 = 9   -> Output-Pos 2
 4 =>  4 * 4 = 16  -> Output-Pos 3
 5 =>  5 * 5 = 25  -> Output-Pos 5

Output: 2, 3, 4, 23, 5



Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/

function sortByValueAndIndex(array) {
	return array
		.map((n, i) => `${n * (i + 1)}-${n}`)
		.sort(
			(a, b) =>
				Number(a.slice(0, a.indexOf('-'))) - Number(b.slice(0, b.indexOf('-')))
		)
		.map(x => (x === '0' ? 0 : Number(x.replace(/\d+-/, ''))));
}

console.log(sortByValueAndIndex([1, 2, 3, 4, 5])); //[ 1, 2, 3, 4, 5 ];

console.log(sortByValueAndIndex([23, 2, 3, 4, 5])); //;[ 2, 3, 4, 23, 5 ];

console.log(sortByValueAndIndex([26, 2, 3, 4, 5])); //;[ 2, 3, 4, 5, 26 ];

console.log(sortByValueAndIndex([9, 5, 1, 4, 3])); //[ 1, 9, 5, 3, 4 ];
