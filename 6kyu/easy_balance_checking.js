/*
You are given a (small) check book as a - sometimes - cluttered (by non-alphanumeric characters) string:

"1000.00
125 Market 125.45
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10"
The first line shows the original balance. Each other line (when not blank) gives information: check number, category, check amount. (Input form may change depending on the language).

First you have to clean the lines keeping only letters, digits, dots and spaces.

Then return a report as a string (underscores show spaces -- don't put them in your solution. They are there so you can see them and how many of them you need to have):

"Original_Balance:_1000.00
125_Market_125.45_Balance_874.55
126_Hardware_34.95_Balance_839.60
127_Video_7.45_Balance_832.15
128_Book_14.32_Balance_817.83
129_Gasoline_16.10_Balance_801.73
Total_expense__198.27
Average_expense__39.65"
On each line of the report you have to add the new balance and then in the last two lines the total expense and the average expense. So as not to have a too long result string we don't ask for a properly formatted result.

Notes
See input examples in Sample Tests.
It may happen that one (or more) line(s) is (are) blank.
Round to 2 decimals your calculated results (Elm: without traling 0)
The line separator of results may depend on the language \n or \r\n. See examples in the "Sample tests".
R language: Don't use R's base function "mean()" that could give results slightly different from expected ones.
*/

/*
start balance at amount from first row in book
start expenses and transaction count at 0

loop through rest of book, on each iteration:
replace non letters and non digits/decimals with a single space
then add the expense to total expenses,
subtract the expense from balance
add line in the format : {check number} {category} Balance {check amount} 
to result array

after the iterations, add line in format: Total expense  {expenses}
and line in format: Average expense  {expenses / transactions length} to array
return result as string
*/

function balance(book) {
	const items = book
		.split('\n')
		.map(row => row.replace(/[^a-z0-9\.]+/gi, ' ').trim())
		.filter(el => el.length);

	let balance = Number(items[0].match(/[0-9\.]+/)[0]);
	let expenses = 0;
	let count = 0;
	const transactions = [`Original Balance: ${balance.toFixed(2)}` + '\r'];

	for (const row of items.slice(1)) {
		const [checkNumber, category, checkAmount] = row.split(' ');
		expenses += Number(checkAmount);
		balance -= Number(checkAmount);
		transactions.push(
			`${checkNumber} ${category} ${Number(checkAmount).toFixed(
				2
			)} Balance ${balance.toFixed(2)}` + '\r'
		);
		count++;
	}

	transactions.push(
		`Total expense  ${expenses.toFixed(2)}` + '\r',
		`Average expense  ${(expenses / count).toFixed(2)}`
	);

	return transactions.join('\n');
}

const b1 = `1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`;
console.log(balance(b1));

const b1sol = `Original Balance: 1000.00\r
125 Market 125.45 Balance 874.55\r
126 Hardware 34.95 Balance 839.60\r
127 Video 7.45 Balance 832.15\r
128 Book 14.32 Balance 817.83\r
129 Gasoline 16.10 Balance 801.73\r
Total expense  198.27\r
Average expense  39.65`;

const b2 = `1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tyres;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`;

console.log(balance(b2));

const b2sol = `Original Balance: 1233.00\r
125 Hardware 24.80 Balance 1208.20\r
123 Flowers 93.50 Balance 1114.70\r
127 Meat 120.90 Balance 993.80\r
120 Picture 34.00 Balance 959.80\r
124 Gasoline 11.00 Balance 948.80\r
123 Photos 71.40 Balance 877.40\r
122 Picture 93.50 Balance 783.90\r
132 Tyres 19.00 Balance 764.90\r
129 Stamps 13.60 Balance 751.30\r
129 Fruits 17.60 Balance 733.70\r
129 Market 128.00 Balance 605.70\r
121 Gasoline 13.60 Balance 592.10\r
Total expense  640.90\r
Average expense  53.41`;
