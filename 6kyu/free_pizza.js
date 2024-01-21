/*
define helper method that takes in an array, 
and returns number of items in array at or above minPrice

find all customer names, for which the method returns at least minOrders
return array of these customer names
*/

function pizzaRewards(customers, minOrders, minPrice) {
	const names = [];
	for (const name in customers) {
		const orders = customers[name];
		const validOrders = orders.filter(price => price >= minPrice);
		if (validOrders.length >= minOrders) names.push(name);
	}
	return names;
}

// reduce method
// const pizzaRewards = (customers, minOrders, minPrice) =>
// 	Object.keys(customers).reduce(
// 		(list, name) =>
// 			customers[name].filter(price => price >= minPrice).length >= minOrders
// 				? [...list, name]
// 				: list,
// 		[]
// 	);

let minOrders = 5;
let minPrice = 20;
let customers = {
	'John Doe': [22, 30, 11, 17, 15, 52, 27, 12], // Only has three orders above 20$, so no pizza
	'Jane Doe': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45], // Has six orders above 20$, which means FREE PIZZA!
};

console.log(pizzaRewards(customers, minOrders, minPrice));

minOrders = 2;
minPrice = 50;
customers = {
	'Joey Bonzo': [22, 67, 53, 29], // Has two orders above 50$, which means FREE PIZZA!
	'Jennifer Bonzo': [51, 19], // Only has one order above 50$, so no pizza
};

console.log(pizzaRewards(customers, minOrders, minPrice));
