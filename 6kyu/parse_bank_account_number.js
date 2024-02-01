/*
DESCRIPTION:
 Returns the bank account number parsed from specified string.

 You work for a bank, which has recently purchased an ingenious machine to assist in reading letters and faxes sent in by branch offices.
 The machine scans the paper documents, and produces a string with a bank account that looks like this:

 _     _  _     _  _  _  _  _
| |  | _| _||_||_ |_   ||_||_|
|_|  ||_  _|  | _||_|  ||_| _|
 Each string contains an account number written using pipes and underscores.
 Each account number should have at least one digit, all of which should be in the range 0-9.

 Your task is to write a function that can take bank account string and parse it into actual account numbers.

 @param {string} bankAccount
 @return {number}
Examples:


   '    _  _     _  _  _  _  _ \n'+
   '  | _| _||_||_ |_   ||_||_|\n'+     => 123456789
   '  ||_  _|  | _||_|  ||_| _|\n'

   ' _  _  _  _  _  _  _  _  _ \n'+
   '| | _| _|| ||_ |_   ||_||_|\n'+     => 23056789
   '|_||_  _||_| _||_|  ||_| _|\n',

   ' _  _  _  _  _  _  _  _  _ \n'+
   '|_| _| _||_||_ |_ |_||_||_|\n'+     => 823856989
   '|_||_  _||_| _||_| _||_| _|\n',
(c)RSS
*/

/*
Create obj with keys 0 to 9, values of formatted strings for each digit
Split string by '\n', loop through each column, 3 chars at a time:
Also loop through each row, push the chars to an array

Join array with '\n', find key in obj with the matching value, add the key to result string
return result as a number
*/

function parseBankAccount(bankAccount) {
	const map = {
		0: [' _ ', '| |', '|_|'],
		1: ['   ', '  |', '  |'],
		2: [' _ ', ' _|', '|_ '],
		3: [' _ ', ' _|', ' _|'],
		4: ['   ', '|_|', '  |'],
		5: [' _ ', '|_ ', ' _|'],
		6: [' _ ', '|_ ', '|_|'],
		7: [' _ ', '  |', '  |'],
		8: [' _ ', '|_|', '|_|'],
		9: [' _ ', '|_|', ' _|'],
	};
	let result = '';
	const grid = bankAccount.split('\n');

	for (let col = 0; col < bankAccount.length - 3; col += 3) {
		const digits = [];
		for (let row = 0; row < 3; row++) {
			const str = grid[row].slice(col, col + 3);
			digits.push(str);
		}

		for (const num in map)
			if (map[num].join('\n') === digits.join('\n')) result += num;
	}
	return Number(result);
}

[
	{
		text:
			'    _  _     _  _  _  _  _ \n' +
			'  | _| _||_||_ |_   ||_||_|\n' +
			'  ||_  _|  | _||_|  ||_| _|\n',
		result: 123456789,
	},
	{
		text:
			' _  _  _  _  _  _  _  _  _ \n' +
			'| | _| _|| ||_ |_   ||_||_|\n' +
			'|_||_  _||_| _||_|  ||_| _|\n',
		result: 23056789,
	},
	{
		text:
			' _  _  _  _  _  _  _  _  _ \n' +
			'|_| _| _||_||_ |_ |_||_||_|\n' +
			'|_||_  _||_| _||_| _||_| _|\n',
		result: 823856989,
	},
].forEach(({ text, result }) => console.log(parseBankAccount(text)));
