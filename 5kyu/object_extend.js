/*Let's make a function that returns a new object, containing all of the properties of any objects passed in as parameters.

The returned object should include the first instance of each property seen on any parameter object, and any other instance of that property should be ignored.

Also, if any parameter is not an object, it should be ignored. You can use the function isObject(object) to determine if a parameter is an object or not (it will return true or false).

extend( {a: 1, b: 2}, {c: 3} ) // should === {a: 1, b: 2, c: 3}
extend( {a: 1, b: 2}, {c: 3}, {d: 4} ) // should === {a: 1, b: 2, c: 3, d: 4}
extend( {a: 1, b: 2}, {a: 3, c: 3} ) // should  === {a: 1, b: 2, c: 3}
extend( {a: false, b: null}, {a: true, b: 2, c: 3} ) // should  === {a: false, b: null, c: 3}
*/

// define empty result object
// define variable items, equal to all objects in the argument
// loop through items
// on each iteration
// store entries as variable
// loop through entries for the item
// if result doesn't have a property for the current entry's key
// add it to result, set the value to current entry's value
// return result

const extend = function () {
	const result = {};
	const items = [...arguments].filter(el => el.constructor === Object);
	items.forEach(item => {
		const entries = Object.entries(item);
		for (let i = 0; i < entries.length; i++) {
			if (!result.hasOwnProperty(entries[i][0])) {
				result[entries[i][0]] = entries[i][1];
			}
		}
	});
	return result;
};

console.log(extend(extend({ a: 1, b: 2 }, { c: 3 }))); // { a: 1, b: 2, c: 3 }
console.log(extend(extend({ a: 1, b: 2 }, { a: 3, c: 3 }))); // { a: 1, b: 2, c: 3 }
