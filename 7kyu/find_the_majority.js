/*
Goal
Given a list of elements [a1, a2, ..., an], with each ai being a string, write a function majority that returns the value that appears the most in the list.

If there's no winner, the function should return None, NULL, nil, etc, based on the programming language.

Example
majority(["A", "B", "A"]) returns "A"
majority(["A", "B", "B", "A"]) returns null
*/

function majority(arr) {
	let max = 0;
	let maxItems = [];
	const map = {};
	for (const item of arr) {
		map[item] = (map[item] || 0) + 1;
		if (map[item] > max) max = map[item];
	}
	const unique = [...new Set(arr)];
	unique.forEach(item => {
		if (map[item] === max) maxItems.push(item);
	});
	return maxItems.length === 1 ? maxItems[0] : null;
}

console.log(majority(['A', 'B', 'A'])); //, "A")
console.log(majority(['A', 'B', 'C']), null);
console.log(majority(['A', 'B', 'B', 'A']), null);
console.log(majority(['A', 'A', 'A', 'A'])); //, "A")
console.log(majority(['A'])); //, "A")
console.log(majority(['A', 'A', 'A', 'BBBBBBBB'])); //, "A")
console.log(majority(['A', 'B', 'C', 'C'])); //, "C")
console.log(majority([])); //, null)
console.log(majority(['B', 'C', '', ''])); //, '', "Empty strings test!")
