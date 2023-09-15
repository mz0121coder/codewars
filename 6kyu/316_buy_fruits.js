/*
Task
John went to the store to buy fruit. He arrived at the store too early, and the price labels for the fruit had not been placed in the fruits.

John has a list of the fruits he wants to buy. He wanted to know: how much money he would used in the best and worst case.

Given the priceLabels and fruitsList, your task is to calculate the minimum and maximum amount of money. Return a two-elements array [minimum , maximum].

Input/Output
[input] integer array priceLabels

The price labels of fruit. Each label is the price of a kind of fruit.

[input] string array fruitsList

A list of the fruits John wants to buy.

[output] an integer array

A two-elements array. The first element is the minimum amount of money; The second element is the maximum amount of money.

Example
For

priceLabels = [4,2,1,10,5] and 
fruitsList  = ["apple","orange","mango"]`
the output should be [7,19]

best case: 1 + 2 + 4 = 7
"apple" --> $1
"orange" --> $2
"mango" --> $4
worst case: 10 + 5 + 4 = 19
"apple" --> $10
"orange" --> $5
"mango" --> $4
For

priceLabels = [3,5,1,6,8,1] and 
fruitsList  = ["peach","grapefruit","banana","orange","orange"]`
the output should be [11,30]

best case: 5 + 3 + 1 + 1 + 1 = 11
"peach"        --> $5
"grapefruit"   --> $3
"banana"       --> $1
"orange"       --> $1
"orange"       --> $1
worst case: 3 + 5 + 6 + 8 + 8 = 30
"peach"        --> $3
"grapefruit"   --> $5
"banana"       --> $6
"orange"       --> $8
"orange"       --> $8
*/

function buyFruits(priceLabels, fruitsList) {
	//   quantities of each fruit in the list
	const countFruits = fruitsList.reduce((obj, fruit) => {
		obj[fruit] = fruit in obj ? obj[fruit] + 1 : 1;
		return obj;
	}, {});
	//   sort fruits from most common to least common
	const sortedFruits = [...fruitsList].sort(
		(a, b) => countFruits[b] - countFruits[a]
	);
	//   obj with labels sorted low to high (best case)
	const bestObj = {};
	const bestLabels = [...priceLabels].sort((a, b) => a - b);
	let bestIdx = -1;
	let best = 0;
	// obj with labels sorted high to low (worst case)
	const worstObj = {};
	const worstLabels = [...priceLabels].sort((a, b) => b - a);
	let worstIdx = -1;
	let worst = 0;
	//  loop through sorted fruits, add fruits and prices to both objects
	sortedFruits.forEach(item => {
		if (!(item in bestObj)) {
			bestIdx++;
			bestObj[item] = bestLabels[bestIdx];
		}
		best += bestObj[item];
		if (!(item in worstObj)) {
			worstIdx++;
			worstObj[item] = worstLabels[worstIdx];
		}
		worst += worstObj[item];
	});
	return [best, worst];
}

console.log(buyFruits([4, 2, 1, 10, 5], ['apple', 'orange', 'mango'])); //,[7,19])
console.log(
	buyFruits(
		[3, 5, 1, 6, 8, 1],
		['peach', 'grapefruit', 'banana', 'orange', 'orange']
	)
); //,[11,30])
