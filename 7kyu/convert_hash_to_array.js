/*DESCRIPTION:
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically by key name.

Good Luck!
*/

function convertHashToArray(hash) {
	const result = [];
	for (const item in hash) {
		result.push([`${item}`, hash[item]]);
	}
	return result.sort();
}

console.log(convertHashToArray({ name: 'Jeremy' })); //,[["name", "Jeremy"]]);
console.log(convertHashToArray({ name: 'Jeremy', age: 24 })); //,[["age", 24], ["name", "Jeremy"]]);
console.log(
	convertHashToArray({ name: 'Jeremy', age: 24, role: 'Software Engineer' })
); //,[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
console.log(convertHashToArray({ product: 'CodeWars', powerLevelOver: 9000 })); //,[["powerLevelOver", 9000], ["product", "CodeWars"]]);
console.log(convertHashToArray({})); //,[]);
