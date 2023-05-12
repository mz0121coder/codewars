/*Clients place orders to a stockbroker as strings. The order can be simple or multiple or empty.

Type of a simple order: Quote/white-space/Quantity/white-space/Price/white-space/Status

where Quote is formed of non-whitespace character, Quantity is an int, Price a double (with mandatory decimal point "." ), Status is represented by the letter B (buy) or the letter S (sell).

Example:
"GOOG 300 542.0 B"

A multiple order is the concatenation of simple orders with a comma between each.

Example:
"ZNGA 1300 2.66 B, CLH15.NYM 50 56.32 B, OWW 1000 11.623 B, OGG 20 580.1 B"

or

"ZNGA 1300 2.66 B,CLH15.NYM 50 56.32 B,OWW 1000 11.623 B,OGG 20 580.1 B"

To ease the stockbroker your task is to produce a string of type

"Buy: b Sell: s" where b and s are 'double' formatted with no decimal, b representing the total price of bought stocks and s the total price of sold stocks.

Example:
"Buy: 294990 Sell: 0"

Unfortunately sometimes clients make mistakes. When you find mistakes in orders, you must pinpoint these badly formed orders and produce a string of type:

"Buy: b Sell: s; Badly formed nb: badly-formed 1st simple order ;badly-formed nth simple order ;"

where nb is the number of badly formed simple orders, b representing the total price of bought stocks with correct simple order and s the total price of sold stocks with correct simple order.

Examples:
"Buy: 263 Sell: 11802; Badly formed 2: CLH16.NYM 50 56 S ;OWW 1000 11 S ;"

"Buy: 100 Sell: 56041; Badly formed 1: ZNGA 1300 2.66 ;"

Notes:
If the order is empty, Buy is 0 and Sell is 0 hence the return is: "Buy: 0 Sell: 0".
Due to Codewars whitespace differences will not always show up in test results.
With Golang (and maybe others) you can use a format with "%.0f" for "Buy" and "Sell".
*/

function balanceStatements(list) {
	let buyOrders = 0;
	let sellOrders = 0;
	let mistakeCount = 0;
	let mistakes = '';
	// individual orders
	const orders = list.split(',');
	orders.forEach(order => {
		// transactions for each order
		const transactions = order.trim().split(' ');
		// if orders or buy/sell count have errors, add to mistakes
		// use optional chaining to avoid undefined errors in tests
		if (
			// order quantity should have be an integer
			transactions[1]?.includes('.') ||
			// order price should have a decimal point
			!transactions[2]?.includes('.') ||
			// transaction should end in 'B' or 'S'
			!transactions[transactions.length - 1].match(/[B|S]/)
		) {
			mistakeCount++;
			mistakes += `${order.trim()} ;`;
		} else {
			// multiply orders * quantity, add to buy (B) or sell (S)
			const orderValue = Number(transactions[1]) * Number(transactions[2]);
			switch (transactions[transactions.length - 1]) {
				case 'B':
					buyOrders += orderValue;
					break;
				case 'S':
					sellOrders += orderValue;
			}
		}
	});
	//   format and return result
	let result = `Buy: ${Math.round(buyOrders)} Sell: ${Math.round(sellOrders)}`;
	return buyOrders + sellOrders === 0
		? result
		: mistakeCount > 0
		? `${result}; Badly formed ${mistakeCount}: ${mistakes}`
		: result;
}

console.log(
	balanceStatements(
		'GOOG 300 542.0 B, AAPL 50 145.0 B, CSCO 250.0 29 B, GOOG 200 580.0 S'
	)
); // "Buy: 169850 Sell: 116000; Badly formed 1: CSCO 250.0 29 B ;"
console.log(
	balanceStatements(
		'ZNGA 1300 2.66 B, CLH15.NYM 50 56.32 B, OWW 1000 11.623 B, OGG 20 580.1 B'
	)
); // "Buy: 29499 Sell: 0"
console.log(
	balanceStatements(
		'GOOG 90 160.45 B, JPMC 67 12.8 S, MYSPACE 24.0 210 B, CITI 50 450 B, CSCO 100 55.5 S'
	)
); // "Buy: 14440 Sell: 6408; Badly formed 2: MYSPACE 24.0 210 B ;CITI 50 450 B ;"
