/*Some new cashiers started to work at your restaurant.

They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

All the orders they create look something like this:

"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

Their preference is to get the orders as a nice clean string with spaces and capitals like so:

"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear in the menu.

The menu items are fairly simple, there is no overlap in the names of the items:

1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke
*/
// loop through each letter in input
// add letter to newWord
// if items include new word, push newWord to result, then set it back to ''
// sort by order in which they appear in items
// split result by ' '

function getOrder(input) {
	const items = [
		'burger',
		'fries',
		'chicken',
		'pizza',
		'sandwich',
		'onionrings',
		'milkshake',
		'coke',
	];
	const result = [];
	let newWord = '';
	for (let i = 0; i < input.length; i++) {
		newWord += input[i];
		if (items.includes(newWord)) {
			result.push(newWord[0].toUpperCase() + newWord.slice(1));
			newWord = '';
		}
	}
	return result
		.sort(
			(a, b) => items.indexOf(a.toLowerCase()) - items.indexOf(b.toLowerCase())
		)
		.join(' ');
}

console.log(
	getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza')
); //,"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke");
console.log(getOrder('pizzachickenfriesburgercokemilkshakefriessandwich')); //,"Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke");
