/*
You are given a string of words and numbers. Extract the expression including:

the operator: either addition ("gains") or subtraction ("loses")
the two numbers that we are operating on
Return the result of the calculation.

Notes:

"loses" and "gains" are the only two words describing operators
No fruit debts nor bitten apples = The numbers are integers and no negatives
Examples
"Panda has 48 apples and loses 4"  -->  44
"Jerry has 34 apples and gains 6"  -->  40
Should be a nice little kata for you :)
*/

function calculate(string) {
	const amounts = string.match(/(has|loses|gains) \d+/g);
	return amounts.reduce((acc, curr) => {
		const digits = Number(curr.match(/\d+/)[0]);
		if (curr.includes('loses')) {
			return acc - digits;
		} else {
			return acc + digits;
		}
	}, 0);
}

console.log(calculate('Panda has 48 apples and loses 4')); //, 44);
console.log(calculate('Jerry has 34 apples and gains 6')); //, 40);
