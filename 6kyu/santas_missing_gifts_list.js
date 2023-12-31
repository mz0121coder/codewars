/*
Santa has misplaced his list of gift to all the children, he has however a condensed version lying around.

In this condensed verison, instead of a list of gifts for each child, each one has an integer.

He also have a list of gifts corresponding to each integer. His list is as follows:

GIFTS = {
    1 => 'Toy Soldier',
    2 => 'Wooden Train',
    4 => 'Hoop',
    8 => 'Chess Board',
   16 => 'Horse',
   32 => 'Teddy',
   64 => 'Lego',
  128 => 'Football',
  256 => 'Doll',
  512 => "Rubik's Cube"
}
This list is made available to you, as GIFTS.

The integer for each child is such that the child should get the highest toy lower than or equal to that integer, and then, if there's more left, also get the highest toy lower than the rest and so on. Know that Santa never gives the same gift twice.

For example, by Timmy's name is 160. This means that Timmy should get both a football and a teddy, because 128 + 32 = 160.

You should help Santa by decoding his own list and recreate the missing list for him. Santa's elf wants the list sorted alphabetically by the toys, so you should help them as well and list the toys in a sorted order.
*/

const GIFTS = {
	1: 'Toy Soldier',
	2: 'Wooden Train',
	4: 'Hoop',
	8: 'Chess Board',
	16: 'Horse',
	32: 'Teddy',
	64: 'Lego',
	128: 'Football',
	256: 'Doll',
	512: "Rubik's Cube",
};

/*
Sort gifts from high to low price 
Start amount at number, loop through sorted gifts
If price <= amount, amount -= price and add gift name to list
Return sorted list 
*/

function gifts(number) {
	const sortedGifts = Object.entries(GIFTS).sort((a, b) => b[0] - a[0]);
	let amount = number;
	const list = [];
	for (const item of sortedGifts) {
		const [price, name] = item;
		if (Number(price) <= amount) {
			amount -= Number(price);
			list.push(name);
		}
	}
	return list.sort();
}

console.log(gifts(1)); // ['Toy Soldier']
console.log(gifts(2)); // ['Wooden Train']
console.log(gifts(3)); // ['Toy Soldier', 'Wooden Train']
console.log(gifts(22)); // ['Hoop', 'Horse', 'Wooden Train']
console.log(gifts(160)); // ['Football', 'Teddy']
