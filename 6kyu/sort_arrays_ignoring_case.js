/*Sort the given array of strings in alphabetical order, case insensitive. For example:
["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
*/

// input: names - unsorted strings
// output: case-agnostic sort
sortme = function (names) {
	return [...names].sort((a, b) =>
		a.localeCompare(b, undefined, { sensitivity: 'base' })
	);
};
console.log(
	sortme([
		'use',
		'work',
		'one',
		'first',
		'want',
		'One',
		'Call',
		'know',
		'few',
		'first',
		'I',
		'Public',
		'few',
		'See',
		'First',
	])
);
/*sortme(["use","work","one","first","want","One","Call","know","few","first","I","Public","few","See","First"]) should equal ["Call","few","few","first","first","First","I","know","one","One","Public","See","use","want","work"]*/
console.log(
	sortme([
		'eye',
		'think',
		'There',
		'able',
		'Be',
		'be',
		'company',
		'Feel',
		'man',
		'Good',
		'take',
	])
);
//["able","Be","be","company","eye","Feel","Good","man","take","There","think"]
console.log(sortme(['Hello', 'there', "I'm", 'fine']));
// console.log(sortme(['C', 'd', 'a', 'B']));
// console.log(sortme(['CodeWars']));
// console.log(sortme([]));
/*const { assert } = require("chai")
describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(sortme(["Hello","there","I'm","fine"]), ["fine", "Hello", "I'm", "there"])
    assert.deepEqual(sortme(["C", "d", "a", "B"]), ["a", "B", "C", "d"])
    assert.deepEqual(sortme(["CodeWars"]), ["CodeWars"])
    assert.deepEqual(sortme([]), [])
  })
})*/
