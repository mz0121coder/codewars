// return empty array if addresses are empty
// define result array that starts empty
// loop through each address
// throw error if object doesn't have a state key
// add states when they first appear to a states array, add 0 to a count array
// increment their count by 1 each time
// loop through states array, add state and count as properties of an object to result
// return result

function count(addresses) {
	if (!addresses.length) {
		return [];
	}
	const states = [];
	const count = [];

	addresses.forEach(address => {
		if (!address.hasOwnProperty('state')) {
			throw Error;
		}
		if (!states.includes(address.state)) {
			states.push(address.state);
			count.push(0);
		}
		const state = states.indexOf(address.state);
		count[state]++;
	});

	const result = [];

	states.forEach((state, i) => result.push({ state: state, count: count[i] }));
	return result;
}
