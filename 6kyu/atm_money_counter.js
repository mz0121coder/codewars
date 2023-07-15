/*
find currency name + amount
if currency is not a key in VALUES, return correct message ✅
if currency is in values:
1) if amount is not divisible by min amount for the currency, return correct message ✅

2) otherwise define variable total that starts at amount
add denominations (from VALUES) to an array for that currency
define array for result
loop through amounts for currency (highest to lowest)
on each iteration:
check if total is divisible by current amount
if divisible, add "(Math.floor(total / amount)) * amount (currency)" to array
reassign total to total % amount
repeat for other amounts
join array with ', ' and return the string ✅
*/

// PRELOADED DICTIONARY FROM THE KATA
const VALUES = {
	RUB: [10, 50, 100, 500, 1000, 5000],
	EUR: [5, 10, 20, 50, 100, 200, 500],
	UAH: [1, 2, 5, 10, 50, 100, 500],
	USD: [1, 2, 5, 10, 20, 50, 100],
	CUP: [1, 3, 5, 10, 20, 50, 100],
	SOS: [1000],
};

function atm(value) {
	// match currency and amount from value
	const currency = value
		.match(/[a-z]+/gi)
		.join('')
		.toUpperCase();
	const amount = Number(value.match(/\d+/)[0]);
	// if currency isn't in the VALUES object
	if (!(`${currency}` in VALUES)) {
		return `Sorry, have no ${currency}.`;
	}
	// denominations for the currency
	const denoms = [];
	for (const key in VALUES) {
		if (key === currency) {
			VALUES[key].forEach(quantity => denoms.push(quantity));
		}
	}
	// if amount isn't divisible by minimum
	const min = Math.min(...denoms);
	if (amount % min) {
		return `Can't do ${amount} ${currency}. Value must be divisible by ${min}!`;
	}
	// divide total by denoms (highest to lowest) & adjust
	const result = [];
	let total = amount;
	denoms.reverse().forEach(num => {
		if (total > 0 && total >= num) {
			result.push(`${Math.floor(total / num)} * ${num} ${currency}`);
			total = total % num;
		}
	});
	return result.join(', ');
}

console.log(atm('XSF 1000')); //, 'Sorry, have no XSF.');
console.log(atm('rub 12341')); //, 'Can\'t do 12341 RUB. Value must be divisible by 10!');
console.log(atm('10202UAH')); //, '20 * 500 UAH, 2 * 100 UAH, 1 * 2 UAH');
console.log(atm('842 usd')); //, '8 * 100 USD, 2 * 20 USD, 1 * 2 USD');
console.log(atm('euR1000')); //, '2 * 500 EUR');
console.log(atm('sos100')); //, 'Can\'t do 100 SOS. Value must be divisible by 1000!');
