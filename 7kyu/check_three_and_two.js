/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran))//, check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/

function checkThreeAndTwo(array) {
	const items = {};
	array.forEach(el => {
		if (el in items) {
			items[el]++;
		} else {
			items[el] = 1;
		}
	});
	const values = Object.values(items);
	return values.length === 2 && values.includes(3) && values.includes(2);
}

console.log(checkThreeAndTwo(['a', 'a', 'a', 'b', 'b'])); //, true );
console.log(checkThreeAndTwo(['a', 'c', 'a', 'c', 'b'])); //, false );
console.log(checkThreeAndTwo(['a', 'a', 'a', 'a', 'a'])); //, false );
