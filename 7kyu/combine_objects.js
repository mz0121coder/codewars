/*
Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
The combine function should be a good citizen, so should not mutate the input objects.
*/
// using forEach
// function combine(...args) {
// 	const result = {};
// 	args.forEach(obj => {
// 		for (const key in obj) result[key] = (result[key] || 0) + obj[key];
// 	});
// 	return result;
// }

// reduce method
const combine = (...args) =>
	args.reduce((res, obj) => {
		for (const key in obj) res[key] = (res[key] || 0) + obj[key];
		return res;
	}, {});

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

console.log(combine(objA, objB)); //, { a: 13, b: 20, c: 36, d: 3 })
console.log(combine(objA, objC)); //, { a: 15, b: 20, c: 30, d: 11, e: 8 })

console.log(combine(objA, objB, objC)); //, { a: 18, b: 20, c: 36, d: 14, e: 8 })
console.log(combine(objA, objC, objD)); //, { a: 15, b: 20, c: 33, d: 11, e: 8 })

console.log(combine({}, {}, {})); //, {})
console.log(combine(objA, objC, {})); //, { a: 15, b: 20, c: 30, d: 11, e: 8 })
