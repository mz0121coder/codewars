/*
Consider the following class:

var Animal = { 
    name: "Cat", 
    numberOfLegs: 4 
}
Write a method that accepts a list of objects of type Animal, and returns a new list. The new list should be a copy of the original list, sorted first by the animal's number of legs, and then by its name.

If an empty list is passed in, it should return an empty list back.
*/
function sortAnimal(animal) {
	//   map to track animals by number of legs
	const obj = {};
	// add animals with each number of legs to map
	animal.forEach(el => {
		if (!(el.numberOfLegs in obj)) {
			obj[el.numberOfLegs] = [el];
		} else {
			obj[el.numberOfLegs].push(el);
		}
	});
	const newList = [];
	for (const key in obj) {
		//     sort names and map alphabetically, add to new list
		const sortedNames = obj[key].map(x => x.name).sort();
		obj[key].sort(
			(a, b) => sortedNames.indexOf(a.name) - sortedNames.indexOf(b.name)
		);
		newList.push(...obj[key]);
	}
	return newList;
}

console.log(
	sortAnimal([
		{ name: 'Cat', numberOfLegs: 4 },
		{ name: 'Snake', numberOfLegs: 0 },
		{ name: 'Dog', numberOfLegs: 4 },
		{ name: 'Pig', numberOfLegs: 4 },
		{ name: 'Human', numberOfLegs: 2 },
		{ name: 'Bird', numberOfLegs: 2 },
	])
);
