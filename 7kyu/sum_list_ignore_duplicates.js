/*Write a function that sums a list, but ignores any duplicate items in the list.
For instance, for the list [3, 4, 3, 6] , the function should return 10.*/
function sumNoDuplicates(numList) {
	return numList
		.filter(item => numList.indexOf(item) === numList.lastIndexOf(item))
		.reduce((total, current) => total + current, 0);
}
console.log(sumNoDuplicates([7, 2, 10, 9, 10, 2, 7, 3, 10, 8, 2, 5]));
