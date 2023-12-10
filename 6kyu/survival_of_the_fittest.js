/*
A Storm at Sea
Jill the adventurer has seen everything, from the highest mountains, to the most dangerous animals. But today she sailed through a hideous storm and shipwrecked. Left with only a damaged life boat and some supplies, she has carefully balanced out the weight not to capsize. But the weight is too much for the small life boat, she has to get rid of some items.

Beginning from one side of the boat, she starts to remove the n smallest items and hopes for the best…

Task
Given an array of integers, remove the n smallest. If there are multiple elements with the same value, remove the ones with a lower index first. If n is greater than the length of the array/list, return an empty list/array. If n is zero or less, return the original array/list.

Don't change the order of the elements that are left.

Examples
removeSmallest (-10) [1,2,3,4,5] = [1,2,3,4,5]
removeSmallest 0 [1,2,3,4,5] = [1,2,3,4,5]
removeSmallest 2 [5,3,2,1,4] = [5,3,4]
removeSmallest 3 [5,3,2,1,4] = [5,4]
removeSmallest 3 [1,2,3,4,5] = [4,5]
removeSmallest 5 [1,2,3,4,5] = []
removeSmallest 9 [1,2,3,4,5] = []

removeSmallest 2 [1,2,1,2,1] = [2,2,1]
*/

/*
make a sorted copy (low to high) of arr
make another copy of arr (not sorted)
loop through sorted copy from idx 0 to n - 1:
on each iteration, remove the first instance of the current number in result
return result
*/

function removeSmallest(n, arr) {
	if (n <= 0) return arr;
	if (n > arr.length) return [];

	const sorted = [...arr].sort((a, b) => a - b).slice(0, n);
	let result = [...arr];
	for (const num of sorted) {
		const idx = result.indexOf(num);
		result.splice(idx, 1);
	}
	return result;
}

console.log(removeSmallest(-10, [1, 2, 3, 4, 5])); // , [1,2,3,4,5], "negative numbers shouldn't change the array")
console.log(removeSmallest(0, [1, 2, 3, 4, 5])); // , [1,2,3,4,5], "zero shouldn't change the array")
console.log(removeSmallest(2, [5, 3, 2, 1, 4])); // , [5,3,4],     "the order of elements should stay the same")
console.log(removeSmallest(3, [5, 3, 2, 1, 4])); // , [5,4],       "the order of elements should stay the same")
console.log(removeSmallest(3, [1, 2, 3, 4, 5])); // , [4,5],       "the order of elements should stay the same")
console.log(removeSmallest(5, [1, 2, 3, 4, 5])); // , [],          "you might have to return the empty array")
console.log(removeSmallest(9, [1, 2, 3, 4, 5])); // , [],          "if n is larger then arr.length, return []")
