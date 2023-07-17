/*
Calculate the cost of a shopping list by writing a function. The function takes an argument which is an array consisting of sub-arrays. For example:

shoppingListCost([["Orange Juice", 2],["Chocolate", 4],["Pears", 8]]) 
The input array includes sub arrays containing the name and quantity of each item being purchased. Already existing in the global scope is an object which gives some information regarding the shopping items:

var groceries = {
  "Orange Juice": {
      "price" : 1.5,
      "discount": 10, 
      "bogof": false
  },
    
  "Chocolate": {
      "price" : 2,
      "discount" : 0,
      "bogof": true
  },
  
  // more items...
}
  
This object contains the price of the item, the discount currently being offered on that item, and whether the item is currently "buy one get one free" (meaning for every item purchased, one of the same item is free).

Return the cost of the shopping list. If the input array contains no items, return zero. Round the answer to 2 decimal places.

All input arrays will be valid and contain items included in the global groceries object. Each item will only appear once in any input array.

Examples

shoppingListCost([["Orange Juice", 2],["Chocolate", 4]]) 
returns 6.7

shoppingListCost([["Chocolate", 5],["Orange Juice", 15]])
returns 26.25
*/

/*
let total = 0
loop through each item in array
on each iteration:

let cost = 0
if item is a property in the groceries object:
calculate the price (apply discount if valid)
get the amount e.g. 4 shirts
loop from 1 up to amount
if item is buy one get one free, only add price of alternate items to cost
for other items: add price to cost each time
add cost to total

return total as a number to 2 dp
*/

function shoppingListCost(arr) {
	let total = 0;
	// loop through items
	arr.forEach(item => {
		const amount = item[1];
		let cost = 0;
		if (item[0] in groceries) {
			const product = groceries[item[0]];
			// apply discount if there is one
			cost =
				product.discount > 0
					? product.price * ((100 - product.discount) / 100)
					: product.price;
			// loop from 1 up to amount for item
			for (let i = 1; i <= amount; i++) {
				// only add alternate items if buy one get one free
				if ((product.bogof && i % 2 !== 0) || !product.bogof) {
					// add others as normal
					total += cost;
				}
			}
		}
	});
	const result = total.toFixed(2);
	return Number(result);
}
