/*
An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

Return that number, or -1 if it is impossible.

Good Luck!!!
*/

function solve(n) {
	let remainder = n;
	let total = 0;
	if (n % 10) {
		return -1;
	}
	const notes = [500, 200, 100, 50, 20, 10];
	notes.forEach(item => {
		if (remainder >= item) {
			total += Math.floor(remainder / item);
			remainder = remainder % item;
		}
	});
	return total;
}

Test.assertEquals(solve(770), 4, 'Wrong result for 770');
Test.assertEquals(solve(550), 2, 'Wrong result for 550');
Test.assertEquals(solve(10), 1, 'Wrong result for 10');
Test.assertEquals(solve(1250), 4, 'Wrong result for 1250');
