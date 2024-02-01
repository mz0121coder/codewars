/*
Task
In this simple Kata aimed at beginners your task is to recreate a vending machine. You will have to make a class called VendingMachine with at least one method called vend. On creation of a new instance of VendingMachine the items Array and Initial vending machine money is passed. The vend method should take two arguments 1. Selection code of the item (not case sensitive) and 2. Amount of money the user inserts into the machine.
An example call of the vend method

machine.vend("A01", 0.90)
where the selected item is A01 and the money given to the machine is 90p

An example of the items Array is below

var items = [{name:"Smarties", code:"A01", quantity:10, price:0.60},
             {name:"Caramac Bar", code:"A02", quantity:5, price:0.60},
             {name:"Dairy Milk", code:"A03", quantity:1, price:0.65},
             {name:"Freddo", code:"A04", quantity:1, price:0.25}];
Rules
1. If the money given to the machine is less than the item cost return "Not enough money!"

2. If the quantity is 0 for an item return "Item Name: Out of stock!". Where "Item Name" is the name of the item selected.

3. If an item is correctly selected return "Vending Item Name with 9.40 change.". Where "Item Name" is the name of the item and change if any given.

4. If an item is correctly selected and there is no change needed then return "Vending Item Name". Where "Item Name" is the name of the item.

5. If an invalid item is selected return "Invalid selection! : Money in vending machine = 11.20". Where 11.20 is the machines money float.

6. If a selection is successful then the quantity should be updated.

7. The vending machine never runs out of money for simplicity however you will need to keep track of the amount of money in the machine at anytime (this is not tested in any of the test cases)

8. Change is always given to 2 decimal places ie 7.00
Good luck and Enjoy

Kata Series
If you enjoyed this, then please try one of my other Katas. Any feedback, translations and grading of beta Katas are greatly appreciated. Thank you.
*/

/*
Create class for vending machine with items and money as instance variables
and vend as instance method that takes in selection and itemMoney as params
Return correct message for invalid selection, money < price and item out of stock
Otherwise calculate change and update money in machine, then return correct message
*/

class VendingMachine {
	constructor(items, money) {
		this.items = items;
		this.money = money;
	}
	vend(selection, itemMoney) {
		const index = this.items.findIndex(
			obj => obj.code.toLowerCase() === selection.toLowerCase()
		);
		if (index === -1)
			return `Invalid selection! : Money in vending machine = ${this.money.toFixed(
				2
			)}`;
		const { name, code, quantity, price } = this.items[index];
		if (itemMoney < price) return `Not enough money!`;
		if (quantity === 0) return `${name}: Out of stock!`;
		const change = itemMoney - price;
		this.money += price;
		this.items[index].quantity = quantity - 1;
		return change > 0
			? `Vending ${name} with ${change.toFixed(2)} change.`
			: `Vending ${name}`;
	}
}

const items = [
	{ name: 'Smarties', code: 'A01', quantity: 10, price: 0.6 },
	{ name: 'Caramac Bar', code: 'A02', quantity: 5, price: 0.6 },
	{ name: 'Dairy Milk', code: 'A03', quantity: 1, price: 0.65 },
	{ name: 'Freddo', code: 'A04', quantity: 1, price: 0.25 },
];

const machine = new VendingMachine(items, 10.0);

console.log(machine.vend('A01', 0.6)); // 'Smarties'
console.log(machine.vend('A01', 10.0)); // 'Vending Smarties with 9.40 change.'
console.log(machine.vend('Z01', 0.41)); // 'Invalid selection! : Money in vending machine = 11.20'
console.log(machine.vend('A02', 0.4)); // 'Not enough money!'
