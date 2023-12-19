/*
Todd is looking for the best place to park in the grocery storeIdx parking lot. Todd knows that there's a sequence of events that happens whenever he buys groceries:

When he first arrives, he walks straight into the storeIdx (where the carts are kept).
After completing shopping, he will return to his car with his cart to put the groceries away.
He will walk with the now empty cart to the nearest cart corral, and deposit it.
He will walk back to his car.
This particular parking lot is fairly simple. The storeIdx is located on the far left, there is a single row of parking, with some number of cart corrals interspersed within them. For example:

["STORE", "TAKEN", "TAKEN", "CORRAL", "TAKEN", "OPEN", "OPEN", "TAKEN", "CORRAL"]
Each index is one "space" of walking.

In this case, the best spot for Todd would be at index 5. He would take 5 steps to get to the storeIdx, then 5 steps to get back to his car, then 2 steps to get to a cart corral, then 2 steps to get back, for a total of 14 steps.

Return the index of the parking spot Todd should choose. Since Todd is driving in from the side without the storeIdx on it, if there's a tie in getSteps, pick the one that's the furthest from the storeIdx. (Less driving. Todd is incredibly lazy.)
*/

/*
 find idx of store, open parking spots and corrals
 loop through each spot:
 calculate steps => (steps to store + steps to nearest corral) * 2
 calculate minimum steps
 find all spots that have minimum total steps
 return the one with largest steps to store
*/

function bestParkingSpot(arr) {
	let storeIdx = -1;
	const spots = [];
	const corrals = [];
	const getSteps = (num1, num2) => Math.abs(num1 - num2);

	arr.forEach((el, i) => {
		if (el === 'STORE') storeIdx = i;
		if (el === 'OPEN') spots.push(i);
		if (el === 'CORRAL') corrals.push(i);
	});

	let minSteps = Infinity;
	const steps = [];
	for (const spot of spots) {
		const distanceToStore = getSteps(spot, storeIdx);
		const distanceToCorral = Math.min(...corrals.map(el => getSteps(spot, el)));
		const currSteps = 2 * (distanceToStore + distanceToCorral);
		if (currSteps < minSteps) minSteps = currSteps;
		steps.push({ spot, distanceToStore, distanceToCorral, currSteps });
	}

	const sortedSpots = steps
		.filter(obj => obj.currSteps === minSteps)
		.sort((a, b) => b.distanceToStore - a.distanceToStore);

	return sortedSpots[0].spot;
}

let s = ['STORE', 'OPEN', 'CORRAL'];
console.log(bestParkingSpot(s)); //,1)

s = ['STORE', 'OPEN', 'TAKEN', 'OPEN', 'CORRAL'];
console.log(bestParkingSpot(s)); //,3,"It's a shorter drive!")

s = ['STORE', 'TAKEN', 'CORRAL', 'TAKEN', 'OPEN', 'CORRAL', 'OPEN'];
console.log(bestParkingSpot(s)); //,4)

s = [
	'STORE',
	'TAKEN',
	'TAKEN',
	'CORRAL',
	'TAKEN',
	'OPEN',
	'OPEN',
	'TAKEN',
	'CORRAL',
];
console.log(bestParkingSpot(s)); //,5)

s = [
	'STORE',
	'CORRAL',
	'TAKEN',
	'OPEN',
	'TAKEN',
	'TAKEN',
	'OPEN',
	'CORRAL',
	'OPEN',
];
console.log(bestParkingSpot(s)); //,3)

s = ['STORE', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'CORRAL', 'OPEN'];
console.log(bestParkingSpot(s)); //,4,"It's a shorter drive!")

s = ['STORE', 'TAKEN', 'TAKEN', 'TAKEN', 'TAKEN', 'CORRAL', 'OPEN'];
console.log(bestParkingSpot(s)); //,6,"Open slot further out than corral!")
