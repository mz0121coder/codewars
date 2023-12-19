/*
Given an array containing a list of good foods, return a string containing the assertion that any two of the individually good foods are really good when combined.

eg: "You know what's actually really good? Pancakes and relish."

Examples:
Good_foods = ["Ice cream", "Ham", "Relish", "Pancakes", "Ketchup", "Cheese", "Eggs", "Cupcakes", "Sour cream", "Hot chocolate", "Avocado", "Skittles"]

actuallyReallyGood( Good_foods ) #  "You know what's actually really good? Pancakes and relish."

actuallyReallyGood( ['Peanut butter'] ) #  "You know what's actually really good? Peanut butter and more peanut butter."

actuallyReallyGood( [] ) #  "You know what's actually really good? Nothing!"
Notes:
There are many different valid combinations of 2 foods it doesn't matter which one you choose.
But there should be 2 different foods listed unless there was only one food given in the input array.
Capitalization should be correct, the first given food should be capitalized, but the second should not.
The input array should not be modified by the method.

The test cases for this kata are fairly complicated, see if you can trick them. (Then let me know about it in the discourse.)
*/

function actuallyReallyGood(foods) {
	const msg = `You know what's actually really good?`;
	const items = [...new Set(foods.map(el => el.toLowerCase()))];

	switch (items.length) {
		case 0:
			return `${msg} Nothing!`;
		case 1:
			return `${msg} ${items[0][0].toUpperCase()}${items[0]
				.slice(1)
				.toLowerCase()} and more ${items[0].toLowerCase()}.`;
		default:
			return `${msg} ${items[0][0].toUpperCase()}${items[0]
				.slice(1)
				.toLowerCase()} and ${items[1].toLowerCase()}.`;
	}
}

console.log(actuallyReallyGood([]));
console.log(actuallyReallyGood(['Peanut Butter']));
console.log(actuallyReallyGood(['fish fingers', 'custard']));
console.log(actuallyReallyGood(['Fish Fingers', 'Custard']));
console.log(actuallyReallyGood(['fish Fingers', 'cUstard', 'sENAPE']));
