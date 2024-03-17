/*
Note: Based off Minecraft, hopefully you at least know the game!

Story: You want to create a giant mine shaft, but you're a little stingy with your iron and diamonds and would not mine out all of the stone with iron or diamond pickaxes. Instead, you rely on less durable but cheaper stone pickaxes! You will need a lot of stone pickaxes though as they break faster than diamond or iron ones, so you need to find out how many stone pickaxes you can craft before you run out of sticks and cobblestones. Unfortunately, you're not an organized person, and you leave all of your materials in a single chest with random junk that you need to filter.

Task: Given an array, return the maximum amount of stone pickaxes you can craft before you run out of sticks and cobblestones. Within the array would be a series of strings with the exact names of the materials listed below. If the array has at least 3 "Cobblestones" and 2 "Sticks" you can craft a singular stone pickaxe. Do not count any materials apart from "Cobblestones", "Sticks" and "Wood". Wood can be converted into 4 sticks!

Here are the materials you would expect in an array:

Sticks
Cobblestone
Stone (These are different from cobblestone and cannot be used to make a stone pickaxe.)
Wool
Dirt
Wood (Can be treated as sticks, typically 4 sticks for 1 wood)
Diamond
Array sizes are randomized and range from 1 - 200 with randomized contents.

Examples:

Array: ["Sticks", "Sticks", "Cobblestone", "Cobblestone", "Cobblestone"]
Returned: 1

Array: ["Wood", "Cobblestone", "Cobblestone", "Cobblestone"]
Returned: 1

Array: []
Returned: 0

Array: ["Sticks", "Wool", "Cobblestone"]
Returned: 0
Good Luck :D
*/

function stonePick(arr) {
	let sticks = 0;
	let cobble = 0;
	let result = 0;
	for (const item of arr) {
		if (item === 'Sticks') sticks++;
		if (item === 'Wood') sticks += 4;
		if (item === 'Cobblestone') cobble++;
	}
	while (sticks >= 2 && cobble >= 3) {
		sticks -= 2;
		cobble -= 3;
		result++;
	}
	return result;
}
