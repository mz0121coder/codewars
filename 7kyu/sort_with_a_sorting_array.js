/*
Sort an array according to the indices in another array. It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

initialArray = ['x', 'y', 'z'] sortingArray = [ 1, 2, 0]

sort(initialArray, sortingArray) => ['z', 'x', 'y']

sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']
*/

// define result array as a copy of any of the 2 parameters
// loop through initial array
// track index of each iteration
// replace result item in result at index of sortingArray[index] with current item in initialArray
// return result

function sort(initialArray, sortingArray) {
	const result = [...sortingArray];
	initialArray.forEach((el, i) => (result[sortingArray[i]] = el));
	return result;
}

console.log(sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3])); //, [1, 3, 2, 5, 4]);
