// define result array, starts empty
// loop through each object in arr
// on each iteration
// if no existing object in result array has matching values for each key
// add object to result array
// return result

function unique(arr, keys) {
	const result = [];
	arr.forEach(obj => {
		if (!result.some(el => keys.every(key => el[key] === obj[key]))) {
			result.push(obj);
		}
	});
	return result;
}

const objs = [
	{ x: 1, y: 1 },
	{ x: 2, y: 2 },
	{ x: 1, z: 1 },
	{ x: 1, y: 1, z: 3 },
];
const keys = ['x', 'y'];

console.log(unique(objs, keys)); // [ { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 1, z: 1 } ]
